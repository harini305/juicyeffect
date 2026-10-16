"""Extract structured content + assets from downloaded Squarespace pages.
Usage: python -I extract.py <raw_dir> <out_dir>
"""
import sys, os, re, json, collections, html as htmlmod
from bs4 import BeautifulSoup, NavigableString, Tag

RAW, OUT = sys.argv[1], sys.argv[2]
os.makedirs(os.path.join(OUT, 'pages'), exist_ok=True)
os.makedirs(os.path.join(OUT, 'blog'), exist_ok=True)

BASE = 'https://www.thejuicyeffect.com'
assets = []          # dicts: url, page, section, kind, alt
def_counter = collections.Counter()
links_internal = collections.defaultdict(set)   # target -> pages
links_external = collections.defaultdict(set)
embeds = []

def norm_img(u):
    if not u: return None
    u = u.strip()
    if u.startswith('//'): u = 'https:' + u
    return u.split('?')[0]

def add_asset(url, page, section, kind, alt=''):
    url = norm_img(url)
    if url and not url.startswith('data:'):
        assets.append(dict(url=url, page=page, section=section, kind=kind, alt=(alt or '').strip()))

def rec_link(href, page):
    if not href: return
    href = href.strip()
    if href.startswith(('mailto:', 'tel:')):
        links_external[href].add(page); return
    if href.startswith('#'): return
    if href.startswith('/') or href.startswith(BASE) or 'thejuicyeffect.com' in href:
        t = href.replace('https://thejuicyeffect.com', '').replace(BASE, '').replace('http://www.thejuicyeffect.com', '')
        links_internal[t or '/'].add(page)
    else:
        links_external[href].add(page)

def md_inline(node, page):
    out = []
    for c in node.children:
        if isinstance(c, NavigableString):
            out.append(str(c))
        elif isinstance(c, Tag):
            if c.name in ('strong', 'b'):
                t = md_inline(c, page).strip()
                out.append(f'**{t}**' if t else '')
            elif c.name in ('em', 'i'):
                t = md_inline(c, page).strip()
                out.append(f'*{t}*' if t else '')
            elif c.name == 'a':
                href = c.get('href', ''); rec_link(href, page)
                out.append(f'[{md_inline(c, page).strip()}]({href})')
            elif c.name == 'br':
                out.append('  \n')
            elif c.name == 'img':
                add_asset(c.get('data-src') or c.get('src'), page, 'inline', 'inline-image', c.get('alt'))
                out.append(f'![{c.get("alt","")}]({norm_img(c.get("data-src") or c.get("src"))})')
            else:
                out.append(md_inline(c, page))
    return ''.join(out)

def md_block(node, page):
    """Convert rich-text HTML to markdown lines."""
    lines = []
    for c in node.children:
        if isinstance(c, NavigableString):
            if str(c).strip(): lines.append(str(c).strip())
            continue
        if not isinstance(c, Tag): continue
        n = c.name
        if n in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            t = md_inline(c, page).strip()
            if t: lines.append('#' * (int(n[1]) + 1) + ' ' + t)   # page H1 -> ##, keep hierarchy shifted by 1
        elif n == 'p':
            t = md_inline(c, page).strip()
            if t: lines.append(t)
        elif n in ('ul', 'ol'):
            for i, li in enumerate(c.find_all('li', recursive=False), 1):
                t = md_inline(li, page).strip().replace('\n', ' ')
                lines.append(('- ' if n == 'ul' else f'{i}. ') + t)
        elif n == 'blockquote':
            t = md_inline(c, page).strip()
            lines.append('> ' + t.replace('\n', '\n> '))
        elif n == 'pre':
            lines.append('```\n' + c.get_text() + '\n```')
        elif n == 'figure':
            img = c.find('img')
            if img:
                add_asset(img.get('data-src') or img.get('src'), page, 'inline', 'inline-image', img.get('alt'))
                lines.append(f'![{img.get("alt","")}]({norm_img(img.get("data-src") or img.get("src"))})')
            cap = c.find('figcaption')
            if cap: lines.append('*Caption:* ' + cap.get_text(' ', strip=True))
        elif n in ('div', 'section', 'span'):
            lines.extend(md_block(c, page))
        else:
            t = md_inline(c, page).strip()
            if t: lines.append(t)
    return lines

def text_align(node):
    el = node.find(['h1', 'h2', 'h3', 'h4', 'p'])
    if el and el.get('style'):
        m = re.search(r'text-align:\s*(\w+)', el['style'])
        if m: return m.group(1)
    return None

def video_url(b):
    import urllib.parse
    raw = htmlmod.unescape(str(b))
    m = re.search(r'[?&]url=([^&"\s]+)', raw)
    if m: return urllib.parse.unquote(m.group(1))
    dec = urllib.parse.unquote(raw)
    m = re.search(r'(https?://(?:www\.)?(?:youtube\.com/(?:watch\?v=|embed/)|youtu\.be/|(?:player\.)?vimeo\.com/)[\w\-/?=]+)', dec)
    if m: return m.group(1)
    m = re.search(r'(https?://[^"\s]+?\.(?:mp4|mov|m3u8|mp3|m4a|wav))', dec)
    return m.group(1) if m else None

def handle_block(b, page, sect_label):
    """Return markdown lines for one sqs-block."""
    defn = b.get('data-definition-name') or ''
    cls = b.get('class', [])
    kind = defn.replace('website.components.', '') if defn else next((c for c in cls if c.endswith('-block') and c != 'sqs-block'), 'unknown')
    def_counter[kind] += 1
    L = []
    if kind in ('html', 'html-block') or 'html-block' in cls:
        content = b.select_one('.sqs-html-content') or b
        L += md_block(content, page)
        al = text_align(content)
        if al and al != 'left': L.append(f'<!-- text-align: {al} -->')
    elif kind == 'button' or 'button-block' in cls:
        for a in b.find_all('a'):
            href = a.get('href'); rec_link(href, page)
            L.append(f'[BUTTON] "{a.get_text(" ", strip=True)}" → {href}' + (' (new tab)' if a.get('target') == '_blank' else ''))
    elif kind in ('imageFluid', 'image', 'imageLayout') or 'image-block' in cls:
        img = b.find('img')
        link = b.find('a')
        if img:
            u = img.get('data-src') or img.get('src')
            add_asset(u, page, sect_label, 'image', img.get('alt'))
            dims = img.get('data-image-dimensions') or ''
            L.append(f'[IMAGE] {norm_img(u)}' + (f' ({dims})' if dims else '') + (f' — alt: "{img.get("alt")}"' if img.get('alt') else ''))
        if link and link.get('href'):
            rec_link(link['href'], page); L.append(f'  (image links to {link["href"]})')
        cap = b.select_one('.image-caption, figcaption, .image-title, .image-subtitle')
        caps = []
        for capel in b.select('.image-title, .image-subtitle, .image-caption, figcaption'):
            ct = capel.get_text(' ', strip=True)
            if ct and ct not in caps: caps.append(ct)
        caps = [c for c in caps if not any(o != c and c.startswith(o) for o in caps)]
        for capel in b.select('.image-title'):
            ct = capel.get_text(' ', strip=True)
            if ct: L.append(f'  title: {ct}')
        for ct in caps:
            if not any(ct == x.get_text(' ', strip=True) for x in b.select('.image-title')): L.append(f'  caption: {ct}')
        for btn in b.select('.image-button a, a.sqs-block-button-element'):
            L.append(f'  [IMAGE BUTTON] "{btn.get_text(" ", strip=True)}" → {btn.get("href")}')
    elif kind in ('gallery', 'gallery-block') or 'gallery-block' in cls:
        imgs = b.find_all('img')
        seen = set()
        cfg = {}
        try: cfg = json.loads(htmlmod.unescape(b.get('data-block-json') or '{}'))
        except Exception: pass
        L.append(f'[GALLERY] design={cfg.get("design")} autoplay={cfg.get("autoplay")} ({cfg.get("autoplay-duration")}s) thumbnails={cfg.get("thumbnails")} lightbox={cfg.get("lightbox")} aspect={cfg.get("aspect-ratio")}')
        for img in imgs:
            u = norm_img(img.get('data-src') or img.get('src'))
            if not u or u in seen: continue
            seen.add(u); add_asset(u, page, sect_label, 'gallery', img.get('alt'))
            a = img.find_parent('a')
            href = a.get('href') if a else None
            if href: rec_link(href, page)
            slide = img.find_parent(class_='slide')
            meta = slide.select_one('.meta, .meta-title') if slide else None
            L.append(f'  - {u}' + (f' ({img.get("data-image-dimensions")})' if img.get('data-image-dimensions') else '')
                     + (f' — alt: "{img.get("alt")}"' if img.get('alt') else '') + (f' → links to {href}' if href else '')
                     + (f' — meta: "{meta.get_text(" ", strip=True)}"' if meta else ''))
    elif kind == 'summary' or 'summary-v2-block' in cls:
        L.append('[SUMMARY BLOCK — dynamic collection feed]')
        hdr = b.select_one('.summary-block-header, .summary-heading')
        if hdr: L.append('  header: ' + hdr.get_text(' ', strip=True))
        for it in b.select('.summary-item'):
            t = it.select_one('.summary-title')
            a = it.select_one('a')
            L.append(f'  - {t.get_text(" ", strip=True) if t else "?"} → {a.get("href") if a else ""}')
            img = it.find('img')
            if img: add_asset(img.get('data-src') or img.get('src'), page, sect_label, 'summary-thumb', img.get('alt'))
        js = b.get('data-block-json')
        if js:
            try:
                d = json.loads(htmlmod.unescape(js)); L.append(f'  collectionId={d.get("collectionId")} design={d.get("design")} pageSize={d.get("pageSize")}')
            except Exception: pass
    elif kind in ('spacer',) or 'spacer-block' in cls:
        pass
    elif kind in ('horizontalrule',) or 'horizontalrule-block' in cls:
        L.append('---')
    elif 'form-block' in cls or kind == 'form':
        L.append('[FORM]')
        js = b.get('data-block-json')
        for el in b.select('.form-title, .form-description'):
            L.append('  ' + el.get_text(' ', strip=True))
        for f in b.select('.form-item, .field'):
            lab = f.select_one('label, legend, .title')
            req = 'required' if f.select_one('.required') or 'required' in f.get('class', []) else ''
            L.append(f'  field: {lab.get_text(" ", strip=True) if lab else f.get("id")} {req}')
        sub = b.select_one('input[type=submit], button[type=submit], .form-button-wrapper button')
        if sub: L.append(f'  submit: {sub.get("value") or sub.get_text(" ", strip=True)}')
        if js: L.append('  (form config in data-block-json)')
        embeds.append(dict(page=page, kind='squarespace-form'))
    elif 'newsletter-block' in cls or kind == 'newsletter':
        L.append('[NEWSLETTER SIGNUP] ' + b.get_text(' | ', strip=True)[:400])
        embeds.append(dict(page=page, kind='squarespace-newsletter'))
    elif 'accordion-block' in cls or kind == 'accordion':
        L.append('[ACCORDION]')
        for it in b.select('.accordion-item'):
            t = it.select_one('.accordion-item__title')
            d = it.select_one('.accordion-item__description')
            L.append(f'  Q: {t.get_text(" ", strip=True) if t else ""}')
            if d: L += ['    ' + x for x in md_block(d, page)]
    elif 'video-block' in cls or kind == 'video':
        src = video_url(b)
        nv = b.select_one('[data-config-video]')
        if not src and nv:
            try:
                cfg = json.loads(htmlmod.unescape(nv['data-config-video']))
                src = f"SQUARESPACE-HOSTED VIDEO (HLS) {cfg.get('alexandriaUrl','').replace('{variant}','playlist.m3u8')} duration={round(cfg.get('durationSeconds',0))}s variants={cfg.get('systemDataVariants')}"
            except Exception: pass
        prov = (b.select_one('[data-provider-name]') or {}).get('data-provider-name') if b.select_one('[data-provider-name]') else None
        L.append(f'[VIDEO] {src or "(url not found)"}' + (f' provider={prov}' if prov else ''))
        embeds.append(dict(page=page, kind='video', src=src, provider=prov))
        img = b.find('img')
        if img: add_asset(img.get('data-src') or img.get('src'), page, sect_label, 'video-thumb', img.get('alt'))
    elif 'code-block' in cls or 'embed-block' in cls or kind in ('code', 'embed'):
        ifr = b.find('iframe'); scr = b.find_all('script')
        src = (ifr.get('src') or ifr.get('data-src')) if ifr else None
        if not src: src = video_url(b)
        L.append(f'[{kind.upper()} EMBED] src={src} scripts={[s.get("src") for s in scr if s.get("src")]} text="{b.get_text(" ", strip=True)[:200]}"')
        js = b.get('data-block-json')
        if js and not src:
            mm = re.search(r'(https?://[^"\\]+)', htmlmod.unescape(js))
            if mm: L.append(f'  url in config: {mm.group(1)}')
        embeds.append(dict(page=page, kind=kind, src=src))
    elif 'quote-block' in cls or kind == 'quote':
        L.append('> ' + b.get_text(' ', strip=True))
    elif 'map-block' in cls or kind == 'map':
        L.append('[MAP] ' + (b.get('data-block-json') or '')[:300])
        embeds.append(dict(page=page, kind='map'))
    elif 'amazon-block' in cls:
        L.append('[AMAZON PRODUCT BLOCK] ' + b.get_text(' ', strip=True)[:300])
        for img in b.find_all('img'): add_asset(img.get('data-src') or img.get('src'), page, sect_label, 'amazon', img.get('alt'))
        for a in b.find_all('a'): rec_link(a.get('href'), page)
        embeds.append(dict(page=page, kind='amazon'))
    elif 'instagram-block' in cls:
        L.append('[INSTAGRAM BLOCK] ' + b.get_text(' ', strip=True)[:200])
        embeds.append(dict(page=page, kind='instagram'))
    elif kind == 'audio' or 'audio-block' in cls:
        js = htmlmod.unescape(b.get('data-block-json') or '')
        au = video_url(b)
        L.append(f'[AUDIO] {au or b.get_text(" ", strip=True)[:200]}')
        embeds.append(dict(page=page, kind='audio', src=au))
    elif kind == 'product' or 'product-block' in cls:
        L.append('[PRODUCT BLOCK] ' + b.get_text(' | ', strip=True)[:500])
        for img in b.find_all('img'): add_asset(img.get('data-src') or img.get('src'), page, sect_label, 'product', img.get('alt'))
        for a in b.find_all('a'): rec_link(a.get('href'), page); L.append(f'  link: {a.get("href")}')
        embeds.append(dict(page=page, kind='product'))
    elif 'socialaccountlinks-v2-block' in cls or 'social' in kind.lower():
        L.append('[SOCIAL LINKS] ' + ', '.join(a.get('href', '') for a in b.find_all('a')))
    else:
        t = b.get_text(' ', strip=True)
        L.append(f'[{kind} block] {t[:400]}')
        for img in b.find_all('img'): add_asset(img.get('data-src') or img.get('src'), page, sect_label, kind, img.get('alt'))
        for a in b.find_all('a'): rec_link(a.get('href'), page)
    return L

def desktop_positions(raw_html):
    pos = {}
    for k, v in re.findall(r'\.(fe-block-[\w-]+)\s*\{\s*grid-area:\s*([^;]+);', raw_html):
        pos[k] = v      # last wins => desktop
    return pos

def ordered_blocks(container, pos):
    fes = container.select('.fe-block')
    if fes:
        def key(fe):
            k = next((c for c in fe.get('class', []) if c.startswith('fe-block-')), '')
            g = pos.get(k, '999/999/999/999').split('/')
            try: return (int(g[0]), int(g[1]))
            except: return (999, 999)
        res = []
        for fe in sorted(fes, key=key):
            b = fe.select_one('.sqs-block')
            if b: res.append(b)
        return res, 'fluid-engine'
    blocks = [b for b in container.select('.sqs-block') if not b.find_parent(class_='sqs-block')]
    return blocks, 'classic-layout'

def section_info(sec, page, idx):
    theme = sec.get('data-section-theme') or ''
    bg = sec.select_one('.section-background img')
    bgv = sec.select_one('.section-background .sqs-video-background, .section-background-video')
    label = f'S{idx}'
    info = [f'theme={theme or "default"}']
    if bg:
        u = bg.get('data-src') or bg.get('src'); add_asset(u, page, label, 'section-background', bg.get('alt'))
        info.append(f'background-image={norm_img(u)}')
    if sec.select_one('.section-background-overlay'):
        ov = sec.select_one('.section-background-overlay'); st = ov.get('style', '')
        m = re.search(r'opacity:\s*([\d.]+)', st)
        if m: info.append(f'overlay-opacity={m.group(1)}')
    if bgv: info.append('background-video=yes')
    cls = ' '.join(sec.get('class', []))
    for k in ('gallery-section', 'user-items-list-section', 'collection-type-blog'):
        if k in cls: info.append(k)
    h = sec.get('data-section-id')
    return label, info

def handle_list_section(sec, page, label):
    L = ['[LIST SECTION (user items)]']
    js = sec.select_one('.user-items-list-simple, .user-items-list-carousel, .user-items-list-banner-slideshow, [data-current-context]')
    ctx = None
    for el in sec.select('[data-current-context]'):
        try: ctx = json.loads(htmlmod.unescape(el['data-current-context'])); break
        except Exception: pass
    if ctx:
        L.append(f'  layout={ctx.get("layoutStyle") or ctx.get("options",{}).get("layoutStyle")}')
        if ctx.get('sectionTitle'): L.append('  title: ' + BeautifulSoup(ctx.get('sectionTitle') or '', 'lxml').get_text(' ', strip=True))
        for it in ctx.get('userItems', []):
            t = BeautifulSoup(it.get('title') or '', 'lxml').get_text(' ', strip=True)
            d = BeautifulSoup(it.get('description') or '', 'lxml')
            L.append(f'  - ITEM: {t}')
            for ln in md_block(d.body or d, page): L.append('      ' + ln)
            bt = it.get('button') or {}
            if bt.get('buttonText'): L.append(f'      [BUTTON] "{bt.get("buttonText")}" → {bt.get("buttonLink")}'); rec_link(bt.get('buttonLink'), page)
            img = it.get('image') or {}
            if img.get('assetUrl'): add_asset(img['assetUrl'], page, label, 'list-item-image', it.get('imageAltText') or t); L.append(f'      [IMAGE] {norm_img(img["assetUrl"])}')
    else:
        L.append('  ' + sec.get_text(' | ', strip=True)[:1500])
        for img in sec.find_all('img'): add_asset(img.get('data-src') or img.get('src'), page, label, 'list-item-image', img.get('alt'))
    return L

def head_meta(s):
    g = lambda sel, attr='content': (s.select_one(sel).get(attr) if s.select_one(sel) else None)
    return dict(
        title=s.title.get_text(strip=True) if s.title else None,
        description=g('meta[name=description]'),
        og_title=g('meta[property="og:title"]'),
        og_description=g('meta[property="og:description"]'),
        og_image=g('meta[property="og:image"]'),
        canonical=g('link[rel=canonical]', 'href'),
        robots=g('meta[name=robots]'),
    )

pages_index = []
blog_index = []

def process_page(fname):
    slug = fname[:-5]
    raw = open(os.path.join(RAW, 'html', fname), encoding='utf-8').read()
    s = BeautifulSoup(raw, 'lxml')
    url = '/' if slug == 'root' else '/' + slug.replace('__', '/')
    meta = head_meta(s)
    jpath = os.path.join(RAW, 'json', slug + '.json')
    j = {}
    try: j = json.load(open(jpath, encoding='utf-8'))
    except Exception: pass
    coll = j.get('collection', {}) or {}
    item = j.get('item')
    is_blog_item = bool(item) and 'blog' in (coll.get('typeName') or '')
    pos = desktop_positions(raw)
    L = [f'# {url}', '']
    L.append(f'- **HTML <title>:** {meta["title"]}')
    L.append(f'- **Meta description:** {meta["description"]}')
    L.append(f'- **OG image:** {meta["og_image"]}')
    L.append(f'- **Canonical:** {meta["canonical"]}')
    L.append(f'- **Collection:** title="{coll.get("title")}" navTitle="{coll.get("navigationTitle")}" type={coll.get("typeName")}')
    sd = coll.get('seoData') or {}
    if sd: L.append(f'- **SEO (collection):** title="{sd.get("seoTitle")}" hidden={sd.get("seoHidden")}')
    if meta['og_image']: add_asset(meta['og_image'], url, 'meta', 'og-image')
    L.append('')
    sec_count = 0; layout_kinds = set()
    if is_blog_item:
        it = item
        L.append(f'**Post title:** {it.get("title")}')
        import datetime
        pub = it.get('publishOn') or it.get('addedOn')
        dt = datetime.datetime.utcfromtimestamp(pub / 1000).strftime('%Y-%m-%d') if pub else None
        auth = (it.get('author') or {}).get('displayName')
        L.append(f'**Published:** {dt}  |  **Author:** {auth}  |  **Categories:** {it.get("categories")}  |  **Tags:** {it.get("tags")}')
        if it.get('assetUrl'): add_asset(it['assetUrl'], url, 'post-thumbnail', 'blog-thumbnail'); L.append(f'**Featured image:** {norm_img(it["assetUrl"])}')
        ex = BeautifulSoup(it.get('excerpt') or '', 'lxml').get_text(' ', strip=True)
        if ex: L.append(f'**Excerpt:** {ex}')
        L.append('')
        art = s.select_one('article .blog-item-content, .blog-item-content-wrapper, article')
        body = s.select_one('.blog-item-content') or art
        if body:
            blocks, lk = ordered_blocks(body, pos); layout_kinds.add(lk)
            for b in blocks: L += handle_block(b, url, 'post-body')
        blog_index.append(dict(url=url, title=it.get('title'), date=dt, author=auth, categories=it.get('categories'), tags=it.get('tags'),
                               thumb=norm_img(it.get('assetUrl')), excerpt=ex, words=len(' '.join(L).split()), meta_title=meta['title'], meta_desc=meta['description']))
        out = os.path.join(OUT, 'blog', slug.replace('blog__', '') + '.md')
    else:
        main = s.select_one('main#page, main') or s
        secs = main.select('article section.page-section, section.page-section') or []
        seen = set()
        for sec in secs:
            if id(sec) in seen: continue
            seen.add(id(sec)); sec_count += 1
            label, info = section_info(sec, url, sec_count)
            L.append(f'## Section {sec_count}  `{", ".join(info)}`')
            if 'user-items-list-section' in ' '.join(sec.get('class', [])):
                L += handle_list_section(sec, url, label)
            elif 'gallery-section' in ' '.join(sec.get('class', [])):
                imgs = sec.find_all('img'); seenu = set()
                L.append(f'[GALLERY SECTION]')
                for img in imgs:
                    u = norm_img(img.get('data-src') or img.get('src'))
                    if u and u not in seenu:
                        seenu.add(u); add_asset(u, url, label, 'gallery', img.get('alt'))
                        a = img.find_parent('a'); href = a.get('href') if a else None
                        if href: rec_link(href, url)
                        L.append(f'  - {u}' + (f' ({img.get("data-image-dimensions")})' if img.get('data-image-dimensions') else '') + (f' — alt "{img.get("alt")}"' if img.get('alt') else '') + (f' → links to {href}' if href else ''))
                for el in sec.select('.gallery-caption, .gallery-grid-item-caption'): L.append('  caption: ' + el.get_text(' ', strip=True))
            else:
                # blog list?
                if sec.select_one('.blog-item-wrapper, .blog-basic-grid, .blog-side-by-side, .blog-single-column, .blog-masonry, .blog-alternating-side-by-side'):
                    L.append('[BLOG LIST VIEW]')
                    for it in sec.select('article.blog-item, .blog-item'):
                        t = it.select_one('.blog-title a, h1 a, h2 a')
                        if t: L.append(f'  - {t.get_text(" ", strip=True)} → {t.get("href")}')
                    pg = sec.select_one('.blog-list-pagination')
                    if pg: L.append('  pagination: ' + ' | '.join(f'{a.get_text(" ",strip=True)}→{a.get("href")}' for a in pg.find_all('a')))
                blocks, lk = ordered_blocks(sec, pos); layout_kinds.add(lk)
                for b in blocks: L += handle_block(b, url, label)
            L.append('')
        out = os.path.join(OUT, 'pages', slug + '.md')
    open(out, 'w', encoding='utf-8').write('\n'.join(L))
    if not is_blog_item:
        h1 = s.find('h1')
        pages_index.append(dict(url=url, file=os.path.basename(out), title=meta['title'], desc=meta['description'], og=meta['og_image'],
                                nav_title=coll.get('navigationTitle'), coll_title=coll.get('title'), type=coll.get('typeName'),
                                sections=sec_count, layout=sorted(layout_kinds), h1=h1.get_text(' ', strip=True) if h1 else None,
                                words=len(' '.join(L).split()), seo_hidden=sd.get('seoHidden')))

for f in sorted(os.listdir(os.path.join(RAW, 'html'))):
    if f.endswith('.html'):
        try: process_page(f)
        except Exception as e: print('ERR', f, repr(e))

json.dump(dict(pages=pages_index, blog=blog_index, assets=assets, block_types=def_counter,
               links_internal={k: sorted(v) for k, v in links_internal.items()},
               links_external={k: sorted(v) for k, v in links_external.items()}, embeds=embeds),
          open(os.path.join(OUT, 'index.json'), 'w', encoding='utf-8'), indent=1, default=str)
print('pages', len(pages_index), 'blog', len(blog_index), 'assets', len(assets), 'unique', len({a['url'] for a in assets}))
print(def_counter)
