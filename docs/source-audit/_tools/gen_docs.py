"""Generate audit docs from extraction output.
Usage: python -I gen_docs.py <out_dir> <docs_dir> <manifest.json>
"""
import sys, os, json, re, csv, shutil, collections

OUT, DOCS, MAN = sys.argv[1], sys.argv[2], sys.argv[3]
idx = json.load(open(os.path.join(OUT, 'index.json'), encoding='utf-8'))
man = json.load(open(MAN, encoding='utf-8'))
local = {r['url']: r['local'] for r in man}

NAV = ['/', '/healing-sessions', '/healing-packages', '/private-retreats', '/workshops-events-learning', '/online', '/contact',
       '/blog', '/the-juicy-effect-story', '/sharon-keating', '/meet-julia', '/meet-gita-sianipar', '/meet-vickya', '/meet-jhanavikaa', '/things-to-do-in-ubud']

GROUPS = [
 ('Core / hub pages', {
  '/': 'Homepage. Introduces the centre, links to sessions, packages, retreats and courses, and shows the Instagram feed and latest blog posts.',
  '/home': 'Duplicate of the homepage at a second URL (same collection title "Home"). Canonical points to /home itself, so this is a duplicate-content risk.',
  '/healing-sessions': 'Hub listing all individual healing sessions (image card + description + "Learn More") plus a packages carousel.',
  '/healing-packages': 'Hub listing multi-session healing packages.',
  '/private-retreats': 'Hub for the three private one-to-one retreats (nav item; also the announcement-bar target).',
  '/workshops-events-learning': 'Hub listing group workshops held in Ubud (nav label "Workshops").',
  '/online': 'Hub listing online courses, mentoring and certifications (nav label "Online Courses").',
  '/contact': 'Contact and booking information: WhatsApp, Messenger, Instagram, email, address, map link and team photo. There is no form.',
 }),
 ('Individual healing sessions', {
  '/energy-healing': 'Shamanic Energy Healing session with Sharon Marie: what to expect, benefits, pricing, 3-session package.',
  '/shamanic-soul-retrieval': 'Shamanic Soul / Power Animal Retrieval session.',
  '/hypnotherapy': 'Inner-Child Healing with Hypnotherapy session and package prices.',
  '/trauma-release-with-breathwork': 'Rebirthing / Trauma Release Breathwork session with Gita.',
  '/energy-healing-access-consciousness': 'Access Bars (Access Consciousness) energy healing with Julia, single and couple prices.',
  '/womb-healing': 'Womb Healing: a shamanic journey plus womb energy healing (2h15).',
  '/reiki-healing': 'Reiki Healing session, single and couple prices.',
  '/private-sound-therapy': 'Private Sound Therapy with Vickya.',
  '/vedic-astrology-navigate-the-unknown': 'Vedic Astrology (Jyotish) consultation; nav title "Discover Yourself with Astrology".',
  '/medical-jyotish': 'Medical / Health Astrology (Jyotish) consultation with Jhanavikaa.',
  '/distance-healing': 'Distance (online) energy healing with Sharon.',
  '/start-your-next-chapter': 'Personal consultation: "Start Your Next Chapter" life-direction session (links to a Jason page that returns 404).',
  '/energetic-facelift-the-natural-alternative': 'Energetic Facelift session with Julia. Not linked from the Healing Sessions hub; only reachable via the sitemap/legacy links.',
 }),
 ('Healing packages', {
  '/transformational-healing-package': '4-session Transformational Healing Package.',
  '/soulmate-alchemy': 'Soulmate Hypnotherapy 2-session package.',
  '/womb-healing-immersion-package': '4-session Womb Healing Immersion Package.',
  '/activate-your-voice-package': '3-session Activate Your Voice package.',
  '/ayurvedic-lifestyle-package': 'Ayurvedic Lifestyle 2-session package (includes a YouTube video).',
  '/hypnotherapy-package': '2- and 3-session hypnotherapy packages.',
 }),
 ('Private retreats', {
  '/womb-sovereign-private-retreat': 'The Womb Sovereign: a 6-day private divine-feminine retreat. Long-form page with itinerary, inclusions and FAQ-style detail.',
  '/restorative-healing-personal-retreat': 'Restorative Healing Personal Retreat: long-form itinerary page with day-by-day accordion.',
  '/the-next-chapter-private-retreat': 'The Next Chapter Private Retreat: long-form page in 9 sections.',
 }),
 ('Workshops (group, in Ubud)', {
  '/womb-healing-vision-quest-workshop': 'Sacred Womb Healing Immersion: a full-day workshop.',
  '/how-to-keep-your-energy-field-clear-workshop': 'How To Keep Your Energetic Field Clear: a full-day workshop.',
  '/self-love-through-radical-self-acceptance': 'Self Love Through Radical Self Acceptance: a full-day workshop.',
  '/discover-balance-and-harmony-with-breathwork': 'Breathwork / 2-hour Sound Journey with Gita (group).',
 }),
 ('Online courses & certifications', {
  '/womb-alchemy-a-return-to-sovereignty': 'Womb Alchemy: an online 3-journey programme.',
  '/energy-mastery-1-to-1-spiritual-mentoring-program': 'Energy Mastery: 1:1 spiritual mentoring programme.',
  '/practical-shamanism-for-the-real-world': 'Practical Shamanism For The Modern World: a 7-month course.',
  '/the-medicine-path-practitioner-certification': 'The Medicine Path: practitioner certification.',
 }),
 ('About / team / info', {
  '/the-juicy-effect-story': 'Our Story: history and philosophy of the centre. Includes a Squarespace-hosted portrait video.',
  '/sharon-keating': 'Meet Sharon Marie (founder / lead practitioner) bio.',
  '/meet-julia': 'Meet Julia bio.',
  '/meet-gita-sianipar': 'Meet Gita bio.',
  '/meet-vickya': 'Meet Vickya bio.',
  '/meet-jhanavikaa': 'Meet Jhanavikaa bio.',
  '/things-to-do-in-ubud': 'Local guide: things to do in Ubud (links to external yoga centres, cafes).',
  '/rent-our-space': 'Space rental offer (treatment room / event space). Not in navigation.',
  '/privacy-policy': 'Privacy policy (TermsFeed-generated). Not linked from the visible footer.',
 }),
 ('Legacy / orphan gallery pages', {
  '/packages-1': 'Bare gallery-section page of package images (no text). Probably the source of a carousel. Contains a 404 link (/the-next-chapter-personal-retreat).',
  '/personal-consultations': 'Bare gallery-section page of session images (no text).',
  '/workshops': 'Bare gallery-section page of 3 workshop images (no text). Not the nav "Workshops" page.',
 }),
 ('Blog', {
  '/blog': 'Blog index (side-by-side list layout, paginated). 79 posts (2015–2026), 3 categories, 154 tags.',
 }),
]
purpose = {u: p for _, g in GROUPS for u, p in g.items()}
group_of = {u: name for name, g in GROUPS for u in g}

pages = {p['url']: p for p in idx['pages']}
missing = set(pages) - set(purpose)
assert not missing, missing

# inbound links (non-blog sources)
inbound = collections.defaultdict(set)
for t, srcs in idx['links_internal'].items():
    path = (t.split('?')[0].split('#')[0].rstrip('/') or '/')
    for s in srcs: inbound[path].add(s)

assets_by_page = collections.defaultdict(list)
for a in idx['assets']:
    assets_by_page[a['page']].append(a)
embeds_by_page = collections.defaultdict(list)
for e in idx['embeds']:
    embeds_by_page[e['page']].append(e)

os.makedirs(os.path.join(DOCS, 'content', 'pages'), exist_ok=True)
os.makedirs(os.path.join(DOCS, 'content', 'blog'), exist_ok=True)
for f in os.listdir(os.path.join(OUT, 'pages')):
    shutil.copy(os.path.join(OUT, 'pages', f), os.path.join(DOCS, 'content', 'pages', f))
for f in os.listdir(os.path.join(OUT, 'blog')):
    shutil.copy(os.path.join(OUT, 'blog', f), os.path.join(DOCS, 'content', 'blog', f))

def outline(url):
    f = os.path.join(OUT, 'pages', pages[url]['file'])
    lines = open(f, encoding='utf-8').read().split('\n')
    res = []
    for ln in lines:
        if ln.startswith('## Section'):
            res.append('- **' + ln[3:].replace('`', '').strip() + '**')
        elif re.match(r'^#{2,6} ', ln):
            res.append('  - Heading: ' + re.sub(r'^#+ ', '', ln).replace('**', ''))
        elif ln.startswith('[BUTTON]') or 'IMAGE BUTTON' in ln:
            res.append('  - CTA: ' + ln.strip().replace('[IMAGE BUTTON] ', '').replace('[BUTTON] ', ''))
        elif ln.startswith(('[GALLERY', '[VIDEO', '[SUMMARY', '[LIST', '[INSTAGRAM', '[ACCORDION', '[AUDIO', '[FORM', '[CODE', '[PRODUCT', '[AMAZON', '[BLOG LIST')):
            res.append('  - Component: ' + ln.strip()[:200])
    # collapse runs of identical CTA lines
    return res

L = ['# Page & Route Inventory', '',
     'Source: live crawl of https://www.thejuicyeffect.com on 2026-10-16 (sitemap.xml plus HTML and `?format=json` for every URL). Every page returned HTTP 200.',
     'The verbatim extracted content of each page is in [content/pages/](content/pages/), one Markdown file per route, with sections in their original visual order.',
     '', '## Route summary', '',
     '| # | Route | Nav label / title | Group | In main nav | Inbound links | Sections | Layout engine | Words* | Content file |',
     '|---|---|---|---|---|---|---|---|---|---|']
n = 0
for gname, g in GROUPS:
    for u in g:
        p = pages[u]; n += 1
        inb = len([s for s in inbound.get(u, []) if s != u])
        L.append(f"| {n} | `{u}` | {p['nav_title']} | {gname} | {'yes' if u in NAV else 'no'} | {inb} | {p['sections']} | {', '.join(p['layout']) or 'gallery section'} | {p['words']} | [{p['file']}](content/pages/{p['file']}) |")
L += ['', '*Word counts include the extraction annotations, so treat them as approximate.', '',
      '### Collections & archive routes (not individually audited)', '',
      '- `/blog/<slug>`: 79 posts. See [blog-index.csv](blog-index.csv) and [content/blog/](content/blog/).',
      '- `/blog/category/{Personal, Small+Bites, Business}`: 3 category archives (auto-generated listing views).',
      '- `/blog/tag/<tag>`: 154 tag archives (auto-generated listing views). The full list is in [blog-tags-and-categories.md](blog-tags-and-categories.md).',
      '- Legacy blog URL formats coexist: `/blog/YYYY/M/D/slug` (older posts) and `/blog/slug` (newer posts). Preserve both in the rebuild or add redirects.',
      '', '## Global navigation (verified from header HTML)', '',
      'Desktop header (layout `navRight`, logo left): Home `/` · Healing Sessions `/healing-sessions` · Healing Packages `/healing-packages` · Private Retreats `/private-retreats` · Workshops `/workshops-events-learning` · Online Courses `/online` · Contact Us `/contact` · **More +** (folder dropdown, no landing page on desktop).',
      '',
      '"More +" dropdown: Blog `/blog` · Our Story `/the-juicy-effect-story` · Meet Sharon Marie `/sharon-keating` · Meet Julia `/meet-julia` · Meet Gita `/meet-gita-sianipar` · Meet Vickya `/meet-vickya` · Meet Jhanavikaa `/meet-jhanavikaa` · Things to do in Ubud `/things-to-do-in-ubud`.',
      '',
      'Mobile: logo left, double-line hamburger right. The menu opens a full-screen overlay (fade, white background, black links). "More +" opens a sub-panel with a "Back" link; the mobile markup gives the folder an href of `/about`, which is not a real page.',
      '',
      'Announcement bar (all pages, teal background, dismissible ×): "We have just launched our private retreats.  Find out more here." → `/private-retreats`.',
      '',
      'Footer (all pages, "bright" theme = #454545 background, white text): a hairline rule, then three paragraphs (about, name origin, PT PMA licence). The footer has **no links**: no nav, no social icons, no privacy link, no contact details.',
      '', '---', '', '## Page-by-page detail', '']
for gname, g in GROUPS:
    L.append(f'### {gname}'); L.append('')
    for u in g:
        p = pages[u]
        L.append(f"#### `{u}` — {p['nav_title']}")
        L.append('')
        L.append(f"- **Purpose:** {purpose[u]}")
        L.append(f"- **HTML title:** {p['title']}")
        L.append(f"- **Meta description:** {p['desc'] or '_(none)_'}")
        L.append(f"- **In main nav:** {'yes' if u in NAV else 'no'} · **Inbound internal links from:** {', '.join(sorted(s for s in inbound.get(u, []) if s != u)[:8]) or '_none found (orphan)_'}")
        L.append(f"- **Layout engine:** {', '.join(p['layout']) or 'gallery section only'} · **Sections:** {p['sections']}")
        L.append(f"- **Content file:** [content/pages/{p['file']}](content/pages/{p['file']})")
        L.append('- **Section order & components:**')
        L += ['  ' + x for x in outline(u)]
        imgs = [a for a in assets_by_page.get(u, []) if a['kind'] != 'og-image']
        uniq = []
        for a in imgs:
            if a['url'] not in [x['url'] for x in uniq]: uniq.append(a)
        L.append(f"- **Assets ({len(uniq)} unique images):**")
        for a in uniq[:40]:
            L.append(f"  - {a['kind']}: `{local.get(a['url']) or a['url']}`" + (f" — alt: “{a['alt'][:90]}”" if a['alt'] else ''))
        if len(uniq) > 40: L.append(f'  - … and {len(uniq)-40} more (see asset-manifest.csv)')
        ems = embeds_by_page.get(u, [])
        if ems: L.append('- **Embeds / integrations:** ' + '; '.join(f"{e['kind']}{(' '+e['src']) if e.get('src') else ''}" for e in ems))
        L.append('')
open(os.path.join(DOCS, '01-page-inventory.md'), 'w', encoding='utf-8').write('\n'.join(L))

# blog index
with open(os.path.join(DOCS, 'blog-index.csv'), 'w', newline='', encoding='utf-8') as fh:
    w = csv.writer(fh); w.writerow(['date', 'title', 'url', 'author', 'categories', 'tags', 'featured_image_local', 'featured_image_url', 'html_title', 'meta_description', 'excerpt', 'content_file'])
    for b in sorted(idx['blog'], key=lambda b: b['date'] or '', reverse=True):
        cf_ = 'content/blog/' + b['url'].replace('/blog/', '').replace('/', '__') + '.md'
        w.writerow([b['date'], b['title'], b['url'], b['author'], '; '.join(b['categories'] or []), '; '.join(b['tags'] or []),
                    local.get(b['thumb']) or '', b['thumb'] or '', b['meta_title'], b['meta_desc'] or '', b['excerpt'], cf_])
tags = collections.Counter(t for b in idx['blog'] for t in (b['tags'] or []))
cats = collections.Counter(c for b in idx['blog'] for c in (b['categories'] or []))
authors = collections.Counter(b['author'] for b in idx['blog'])
years = collections.Counter((b['date'] or '????')[:4] for b in idx['blog'])
T = ['# Blog Taxonomy', '', f'- Posts: {len(idx["blog"])}', f'- Authors: {dict(authors)}', f'- Posts per year: {dict(sorted(years.items()))}', '',
     '## Categories (posts using each)', ''] + [f'- {c} ({n})' for c, n in cats.most_common()] + ['', '## Tags (posts using each)', ''] + [f'- {t} ({n})' for t, n in tags.most_common()]
open(os.path.join(DOCS, 'blog-tags-and-categories.md'), 'w', encoding='utf-8').write('\n'.join(T))

# asset manifest csv
with open(os.path.join(DOCS, 'asset-manifest.csv'), 'w', newline='', encoding='utf-8') as fh:
    w = csv.writer(fh); w.writerow(['local_path', 'source_url', 'type', 'bytes', 'usage_kinds', 'pages', 'sections', 'alt_texts'])
    for r in sorted(man, key=lambda r: (r['local'] or '')):
        w.writerow([r['local'], r['url'], r['type'], r['bytes'], '; '.join(r['kinds']), '; '.join(r['pages']), '; '.join(r['sections']), ' | '.join(r['alts'])])

# asset inventory md (page-level mapping, non-blog)
A = ['# Asset Inventory & Page Mapping', '',
     'All original image files referenced by the 51 pages and 79 blog posts were downloaded **unmodified** (original upload resolution, no `?format=` resizing) into `source-assets/` at the project root. Download date: 2026-10-16.',
     '', '| Folder | Contents | Files | Size |', '|---|---|---|---|']
cnt = collections.Counter((r['local'] or '').split('/')[1] for r in man)
size = collections.Counter()
for r in man: size[(r['local'] or '').split('/')[1]] += r['bytes'] or 0
desc = {'brand': 'Logo (2500×2089 PNG, transparent), social-share logo (300×300), favicon', 'pages': 'Images used on site pages (heroes, cards, carousels, portraits, OG images)', 'blog': 'Blog featured images, inline post images, blog OG images, Amazon product thumbnails'}
for k in ['brand', 'pages', 'blog']:
    A.append(f'| `source-assets/{k}/` | {desc[k]} | {cnt[k]}{" + favicon.ico" if k=="brand" else ""} | {size[k]/1e6:.1f} MB |')
A += ['| `source-assets/media/` | Hosted audio: `Nick-Phillips-03.mp3` (blog post “What is yoga really”) | 1 | 47.5 MB |',
      '| `source-assets/manifest.json` | Machine-readable mapping: source URL → local file → pages/sections/alt text | — | — |', '',
      'A flat, spreadsheet-friendly version of the manifest is [asset-manifest.csv](asset-manifest.csv). Local filenames are `<6-char hash of URL>_<original filename>`; the hash prevents collisions, because many Squarespace uploads share names like `image-asset.png`.',
      '', '## Brand assets', '',
      '| Asset | Local file | Source | Notes |', '|---|---|---|---|',
      '| Primary logo (header) | `source-assets/brand/7fd1e9_TheJuicyEffect_part_logo.png` | images.squarespace-cdn.com/…/TheJuicyEffect+part+logo.png | 2500×2089 RGBA. Multicolour swoosh mark with "the / Juicy / Effect" wordmark in grey. Used at ~110px wide in the header. |',
      '| Social / share logo | `source-assets/brand/08b76c_Untitled_design_(4).png` | …/Untitled+design+%284%29.png | 300×300 RGBA. Used as the site-wide og:image fallback. |',
      '| Favicon | `source-assets/brand/favicon.ico` | …/favicon.ico | Actually a 2500×2219 PNG served with an .ico name. Needs a proper favicon set in the rebuild. |',
      '| Fonts | _not downloaded_ | Squarespace font CDN (Poppins) | Poppins is an open-source Google Font (SIL OFL). Load it from Google Fonts / `next/font/google`; there is no need to copy the Squarespace font files. |',
      '', '## Video & audio', '',
      '| Media | Where | Source | Local copy? |', '|---|---|---|---|']
for e in idx['embeds']:
    if e['kind'] in ('video', 'audio'):
        A.append(f"| {e['kind']} | `{e['page']}` | {e.get('src')} | {'yes (source-assets/media)' if e['kind']=='audio' else ('no — HLS stream only; needs ffmpeg or an owner export from Squarespace' if 'HLS' in (e.get('src') or '') else 'no — YouTube embed (keep as embed)')} |")
A += ['| video (link) | `/` hero image "Take A Tour" button | https://youtu.be/VDAG5wBESJQ | no — YouTube link |', '',
      '## Page → asset mapping (site pages)', '',
      'OG images are omitted below unless page-specific. Almost every page uses the global share logo as og:image.', '']
for gname, g in GROUPS:
    if gname == 'Blog': continue
    A.append(f'### {gname}')
    for u in g:
        uniq = {}
        for a in assets_by_page.get(u, []):
            if a['kind'] == 'og-image' and 'Untitled+design' in a['url']: continue
            uniq.setdefault(a['url'], a)
        A.append(f'- **`{u}`** ({len(uniq)})')
        for a in uniq.values():
            A.append(f"  - [{a['kind']}/{a['section']}] `{local.get(a['url'])}`" + (f" — “{a['alt'][:80]}”" if a['alt'] else ''))
    A.append('')
reuse = collections.Counter()
for r in man:
    if len([p for p in r['pages'] if not p.startswith('/blog')]) >= 3: reuse[r['local']] = len(r['pages'])
A += ['## Most-reused images (3+ pages)', ''] + [f'- `{k}` — {v} pages' for k, v in reuse.most_common(25)]
A += ['', '## Image characteristics observed', '',
      '- **Service/package card art** (`Website Images Round (N).png`, `The Juicy Effect Healing (N).png`, 1080×1080): designed tiles with a circular photo, a coloured ring (cyan, teal, orange, green, purple, red, blue), and a coloured label bar with white bold text (Arial-like). The service names are **baked into the image**. There are two versions of many tiles: a "Round" version (homepage carousels) and a framed-square version (hub pages).',
      '- **Photography:** real photos of the centre (open-plan glass-walled studio, jungle setting, pool villa), the team, and Sharon. Some are WhatsApp exports (`WhatsApp Image 2026-…jpg`), so quality varies.',
      '- **Blog imagery:** mostly stock or AI-styled illustrative images (sunsets, spirals, lion and woman, womb guardian), many 1500–2500px PNGs of 1–9 MB. Compress them at build time.',
      '- **Large files:** the largest originals are 8.9 MB (`DSCF0837.png` / Womb Healing Immersion) and 4.9 MB (homepage hero PNG). With Next.js image optimisation disabled, pre-optimise these (e.g. to WebP/AVIF at fixed widths) during implementation.',
      '- **Missing alt text:** many images use filenames or "(Copy)" suffixes as alt text (e.g. "Shamanic Energy Healing - The Juicy Effect (Copy)", "Ubud.jpg"). Clean these up in the rebuild without changing meaning.',
      '- **Instagram feed images** on the homepage are loaded live by the Squarespace Instagram block and are **not** part of the site\'s own assets.']
open(os.path.join(DOCS, '03-asset-inventory.md'), 'w', encoding='utf-8').write('\n'.join(A))
print('done')
