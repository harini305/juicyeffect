// Converts the Phase 1 verbatim Markdown extracts (docs/source-audit/content)
// into structured JSON used by the Next.js site:
//   src/data/generated/pages.json   — 51 page routes, sections → blocks
//   src/data/generated/posts.json   — 79 blog posts with metadata + blocks
//   src/data/generated/link-report.json — every internal link that was rewritten or unlinked
// The audit files are read-only inputs; nothing in docs/ is modified.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const AUDIT = path.join(ROOT, 'docs', 'source-audit');
const OUT = path.join(ROOT, 'src', 'data', 'generated');
fs.mkdirSync(OUT, { recursive: true });

/* ------------------------------------------------------------------ CSV */
function parseCSV(text) {
  const rows = [];
  let row = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else q = false;
      } else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field.replace(/\r$/, '')); rows.push(row); row = []; field = ''; }
    else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...rest] = rows;
  return rest.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
}

/* ------------------------------------------------------- asset resolution */
const manifest = parseCSV(fs.readFileSync(path.join(AUDIT, 'asset-manifest.csv'), 'utf8'));
const images = JSON.parse(fs.readFileSync(path.join(OUT, 'images.json'), 'utf8'));
const byUrl = new Map();
const byId = new Map();
const assetId = (u) => (u.match(/\/content\/v1\/[^/]+\/([^/]+)\//) || [])[1];
for (const r of manifest) {
  byUrl.set(r.source_url.split('?')[0], r.local_path);
  const id = assetId(r.source_url);
  if (id && !byId.has(id)) byId.set(id, r.local_path);
}
const altByLocal = new Map(manifest.map((r) => [r.local_path, r.alt_texts]));
const unresolved = [];
function resolveImage(url) {
  const clean = url.split('?')[0];
  let local = byUrl.get(clean);
  if (!local) {
    const id = assetId(clean);
    if (id) local = byId.get(id);
  }
  if (!local || !images[local]) {
    unresolved.push(url);
    return null;
  }
  return local;
}

/* ---------------------------------------------------------- link fixing */
// Verified fixes from docs/source-audit/06-issues-and-open-questions.md §2.
const REDIRECTS = {
  '/hypnotherapy-packages-the-juicy-effect': '/hypnotherapy-package',
  '/courses-certifications': '/online',
  '/julia-guerre': '/meet-julia',
  '/meet-gita-desyanti': '/meet-gita-sianipar',
  '/the-next-chapter-personal-retreat': '/the-next-chapter-private-retreat',
};
// Destinations that cannot be established from the captured site: links are
// removed (the original wording is kept as plain text).
const DEAD = new Set([
  '/energetic-alignment-package',
  '/jason-buchanan',
  '/career-lifestyle-transition',
  '/classes',
  '/discover-your-energetic-flow-in-ubud',
  '/get-started-to-improve-performance',
  '/i-choose-juicy',
  '/improve-workplace-performance-with-the-33-day-challenge',
  '/the-33-day-challenge',
  '/yoga-as-a-way-of-life-for-everyday-people',
  '/products',
  '/about',
]);
const linkReport = [];
let currentRoute = '';
function fixHref(raw) {
  if (!raw) return null;
  let href = raw.trim();
  const original = href;
  if (/^https?:\/\/jason-buchanan-l386\.squarespace\.com/i.test(href)) {
    href = href.replace(/^https?:\/\/jason-buchanan-l386\.squarespace\.com/i, '') || '/';
    linkReport.push({ route: currentRoute, from: original, to: href, reason: 'staging domain → local route' });
  }
  href = href.replace(/^https?:\/\/(www\.)?thejuicyeffect\.com/i, '');
  if (href === '') href = '/';
  if (/^http:\/\/journey\.It$/i.test(href)) {
    linkReport.push({ route: currentRoute, from: original, to: null, reason: 'malformed auto-link in source text' });
    return null;
  }
  if (href.startsWith('/')) {
    const [p, rest] = href.split(/(?=[?#])/);
    const pathOnly = p.replace(/\/$/, '') || '/';
    if (DEAD.has(pathOnly)) {
      linkReport.push({ route: currentRoute, from: original, to: null, reason: 'destination does not exist (404 on source site); link removed, text kept' });
      return null;
    }
    if (REDIRECTS[pathOnly]) {
      linkReport.push({ route: currentRoute, from: original, to: REDIRECTS[pathOnly], reason: 'broken link (404) → verified destination' });
      return REDIRECTS[pathOnly] + (rest || '');
    }
    return pathOnly + (rest || '');
  }
  return href;
}

/* ------------------------------------------------------- inline markdown */
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decodeEntities = (s) =>
  s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&#039;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// Squarespace exports produce runs such as `*a****b****c*` (italic text with a
// bold-italic island). A toggle scanner keeps that intent: a run of n stars
// toggles italic when n is odd and bold when n ≥ 2.
// The extractor dropped whitespace that sat between inline elements on the
// live site ("is a**wellbeing**", "Transformation?**Our", "[link](/x)provided").
// Restore a single space where an emphasis/link boundary joins two words.
const WORD_END = /[\p{L}\p{N}?!.,:;)’”'"]/u;
const WORD_START = /[\p{L}\p{N}(‘“[]/u;
function restoreSpaces(text) {
  let out = '';
  for (let k = 0; k < text.length; k++) {
    const c = text[k];
    if (c === '*') {
      let n = 0;
      while (text[k + n] === '*') n++;
      const prev = text[k - 1] || '';
      const next = text[k + n] || '';
      out += text.slice(k, k + n);
      // Only insert where the run sits between two word characters.
      if (prev && WORD_END.test(prev) && next && WORD_START.test(next)) out = out.slice(0, out.length - n) + markSpace(text, k, n);
      k += n - 1;
      continue;
    }
    out += c;
  }
  // link boundaries
  return out
    .replace(/([\p{L}\p{N}.,;:?!])(\[[^\]]+\]\([^)\s]+\))/gu, '$1 $2')
    .replace(/(\]\([^)\s]+\))([\p{L}\p{N}])/gu, '$1 $2')
    .replace(/(\]\([^)\s]+\))(\*{0,3}\[)/gu, '$1 $2');
}
// Decide whether the star run opens or closes emphasis by counting the
// stars before it; place the space outside the emphasised words.
function markSpace(text, k, n) {
  const before = text.slice(0, k).replace(/\[[^\]]*\]\([^)]*\)/g, (m) => m.replace(/[^*]/g, ''));
  let i = false, b = false, r = 0;
  const runs = before.match(/\*+/g) || [];
  for (const run of runs) {
    if (run.length % 2 === 1) i = !i;
    if (run.length >= 2) b = !b;
  }
  const wasOn = (i ? 1 : 0) + (b ? 1 : 0);
  let i2 = i, b2 = b;
  if (n % 2 === 1) i2 = !i2;
  if (n >= 2) b2 = !b2;
  const nowOn = (i2 ? 1 : 0) + (b2 ? 1 : 0);
  const stars = '*'.repeat(n);
  return nowOn >= wasOn ? ' ' + stars : stars + ' ';
}

function inline(src) {
  const text = restoreSpaces(decodeEntities(src));
  const segs = [];
  let b = false, i = false, href = null, buf = '';
  const flush = () => {
    if (buf) segs.push({ t: buf, b, i, href });
    buf = '';
  };
  let k = 0;
  while (k < text.length) {
    const c = text[k];
    if (c === '[' && href === null) {
      // find matching ]( ... )
      const m = text.slice(k).match(/^\[((?:[^\[\]]|\[[^\]]*\])*)\]\(([^)\s]*(?:\([^)]*\)[^)\s]*)*)\)/);
      if (m) {
        flush();
        href = fixHref(m[2]) ?? '';
        const inner = m[1];
        // process the link text with the same toggle state
        let j = 0;
        while (j < inner.length) {
          if (inner[j] === '*') {
            let n = 0;
            while (inner[j + n] === '*') n++;
            flush();
            if (n % 2 === 1) i = !i;
            if (n >= 2) b = !b;
            j += n;
          } else buf += inner[j++];
        }
        flush();
        href = null;
        k += m[0].length;
        continue;
      }
    }
    if (c === '*') {
      let n = 0;
      while (text[k + n] === '*') n++;
      flush();
      if (n % 2 === 1) i = !i;
      if (n >= 2) b = !b;
      k += n;
      continue;
    }
    if (c === '\\' && /[*_\[\]]/.test(text[k + 1] || '')) {
      buf += text[k + 1];
      k += 2;
      continue;
    }
    buf += c;
    k++;
  }
  flush();
  // group into HTML
  let html = '';
  let openHref = undefined;
  for (const s of segs) {
    if (s.href !== openHref) {
      if (openHref !== undefined && openHref !== null) html += openHref ? '</a>' : '';
      openHref = s.href;
      if (s.href) {
        const ext = /^https?:/i.test(s.href);
        html += `<a href="${esc(s.href)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>`;
      }
    }
    let t = esc(s.t);
    if (s.i) t = `<em>${t}</em>`;
    if (s.b) t = `<strong>${t}</strong>`;
    html += t;
  }
  if (openHref) html += '</a>';
  return html.replace(/<\/strong><strong>/g, '').replace(/<\/em><em>/g, '').trim();
}
const plain = (src) => inline(src).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

/* -------------------------------------------------------- block parsing */
function youtubeId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}
function parseImageLine(rest) {
  // url (WxH) — alt: "..."   |  url — alt "..." → links to X
  const m = rest.match(/^(\S+)(?:\s+\((\d+)x(\d+)\))?(?:\s+—\s+alt:?\s+"(.*?)")?(?:\s+→\s+links to\s+(\S+))?\s*$/);
  if (!m) return null;
  return { url: m[1], w: m[2] ? +m[2] : null, h: m[3] ? +m[3] : null, alt: m[4] ?? '', link: m[5] ?? null };
}
function cleanAlt(alt) {
  if (!alt) return '';
  return alt.replace(/\s*\(Copy\)\s*$/i, '').replace(/\.(png|jpe?g)$/i, '').trim();
}

function parseBlocks(lines) {
  const blocks = [];
  let n = 0;
  const peekIndented = () => n < lines.length && /^\s{2,}\S/.test(lines[n]);
  while (n < lines.length) {
    const raw = lines[n];
    const line = raw.replace(/\s+$/, '');
    n++;
    if (!line.trim()) continue;
    if (/^<!--\s*text-align:\s*(\w+)\s*-->$/.test(line)) {
      const a = line.match(/text-align:\s*(\w+)/)[1];
      if (blocks.length) blocks[blocks.length - 1].align = a;
      continue;
    }
    if (/^---+$/.test(line)) { blocks.push({ type: 'hr' }); continue; }
    let m;
    if ((m = line.match(/^\[IMAGE\]\s+(.*)$/))) {
      const p = parseImageLine(m[1]);
      const blk = { type: 'image', src: p ? resolveImage(p.url) : null, assetId: p ? assetId(p.url) : null, alt: cleanAlt(p?.alt), w: p?.w, h: p?.h };
      while (peekIndented()) {
        const l = lines[n++].trim();
        let mm;
        if ((mm = l.match(/^\(image links to (\S+)\)$/))) blk.link = fixHref(mm[1]);
        else if ((mm = l.match(/^caption:\s*(.*)$/))) blk.caption = inline(mm[1]);
        else if ((mm = l.match(/^title:\s*(.*)$/))) blk.title = inline(mm[1]);
        else if ((mm = l.match(/^\[IMAGE BUTTON\]\s+"(.*?)"\s+→\s+(\S+)/))) blk.button = { label: mm[1], href: fixHref(mm[2]) };
      }
      if (!blk.alt && blk.src) blk.alt = cleanAlt((altByLocal.get(blk.src) || '').split(' | ')[0]);
      blocks.push(blk);
      continue;
    }
    if ((m = line.match(/^\[(GALLERY|GALLERY SECTION)\]\s*(.*)$/))) {
      const blk = { type: 'gallery', variant: m[1] === 'GALLERY' ? 'slider' : 'grid', items: [] };
      while (peekIndented()) {
        const l = lines[n++].trim();
        const mm = l.match(/^-\s+(.*)$/);
        if (!mm) continue;
        const p = parseImageLine(mm[1]);
        if (!p) continue;
        blk.items.push({ src: resolveImage(p.url), alt: cleanAlt(p.alt), link: p.link ? fixHref(p.link) : null });
      }
      blocks.push(blk);
      continue;
    }
    if ((m = line.match(/^\[BUTTON\]\s+"(.*?)"\s+→\s+(\S+)(\s+\(new tab\))?/))) {
      blocks.push({ type: 'button', label: m[1].replace(/\s{2,}/g, ' '), href: fixHref(m[2]) });
      continue;
    }
    if ((m = line.match(/^\[VIDEO\]\s+(.*)$/))) {
      if (/SQUARESPACE-HOSTED/.test(m[1])) {
        const u = m[1].match(/https?:\/\/\S+\.m3u8/);
        blocks.push({ type: 'hostedVideo', url: u ? u[0] : null });
      } else {
        const url = m[1].split(/\s+/)[0];
        blocks.push({ type: 'video', id: youtubeId(url), url });
      }
      continue;
    }
    if ((m = line.match(/^\[AUDIO\]\s+(\S+)/))) {
      blocks.push({ type: 'audio', src: '/media/Nick-Phillips-03.mp3', sourceUrl: m[1] });
      continue;
    }
    if (/^\[ACCORDION\]/.test(line)) {
      const items = [];
      while (n < lines.length && /^\s{2,}/.test(lines[n])) {
        const l = lines[n++];
        const q = l.match(/^\s{2}Q:\s*(.*)$/);
        if (q) items.push({ title: inline(q[1]), lines: [] });
        else if (items.length) items[items.length - 1].lines.push(l.replace(/^\s{4}/, ''));
      }
      blocks.push({ type: 'accordion', items: items.map((it) => ({ title: it.title, blocks: parseBlocks(it.lines) })) });
      continue;
    }
    if (/^\[INSTAGRAM BLOCK\]/.test(line)) { blocks.push({ type: 'instagram' }); continue; }
    if (/^\[(SUMMARY BLOCK|BLOG LIST VIEW)/.test(line)) {
      const items = [];
      while (peekIndented()) {
        const l = lines[n++].trim();
        const mm = l.match(/^-\s+(.*?)\s+→\s+(\S+)$/);
        if (mm) items.push({ title: mm[1], href: mm[2] });
      }
      blocks.push({ type: /SUMMARY/.test(line) ? 'blogSummary' : 'blogList', items });
      continue;
    }
    if ((m = line.match(/^\[AMAZON PRODUCT BLOCK\]\s*(.*)$/))) { blocks.push({ type: 'amazon', text: m[1].trim() }); continue; }
    if (/^\[CODE EMBED\].*adsbygoogle/.test(line)) { blocks.push({ type: 'adsense' }); continue; }
    if (/^\[CODE EMBED\]/.test(line)) { blocks.push({ type: 'codeEmbed' }); continue; }
    if (/^\[PRODUCT BLOCK\]/.test(line)) { blocks.push({ type: 'product' }); continue; }
    if ((m = line.match(/^\[SOCIAL LINKS\]\s*(.*)$/))) {
      blocks.push({ type: 'social', links: m[1].split(/,\s*/).filter(Boolean) });
      continue;
    }
    if ((m = line.match(/^(#{1,6})\s+(.*)$/))) {
      blocks.push({ type: 'heading', level: m[1].length, html: inline(m[2]), text: plain(m[2]) });
      continue;
    }
    if ((m = line.match(/^\s*[-•]\s+(.*)$/))) {
      const items = [inline(m[1])];
      while (n < lines.length && /^\s*[-•]\s+/.test(lines[n])) items.push(inline(lines[n++].replace(/^\s*[-•]\s+/, '')));
      blocks.push({ type: 'list', ordered: false, items: items.filter(Boolean) });
      continue;
    }
    if ((m = line.match(/^\s*(\d+)\.\s+(.*)$/))) {
      const items = [inline(m[2])];
      const start = +m[1];
      while (n < lines.length && /^\s*\d+\.\s+/.test(lines[n])) items.push(inline(lines[n++].replace(/^\s*\d+\.\s+/, '')));
      blocks.push({ type: 'list', ordered: true, start, items });
      continue;
    }
    if ((m = line.match(/^>\s?(.*)$/))) {
      const parts = [inline(m[1])];
      while (n < lines.length && /^>\s?/.test(lines[n])) parts.push(inline(lines[n++].replace(/^>\s?/, '')));
      blocks.push({ type: 'quote', paras: parts.filter(Boolean) });
      continue;
    }
    if (/^\s*\[https?:\/\/[^\]]+\]\(https?:\/\/[^)]+\)\s*$/.test(line) || !/^\s/.test(line) || line.trim()) {
      const html = inline(line.trim());
      if (html) blocks.push({ type: 'p', html });
    }
  }
  return blocks;
}

/* --------------------------------------------------------- page files */
function parseHeader(text) {
  const get = (label) => {
    const re = new RegExp(`^- \\*\\*${label}:\\*\\*\\s*([\\s\\S]*?)(?=\\n- \\*\\*|\\n\\n)`, 'm');
    const m = text.match(re);
    return m ? m[1].trim() : '';
  };
  const coll = text.match(/^- \*\*Collection:\*\*\s+title="(.*?)" navTitle="(.*?)"/m);
  return {
    htmlTitle: get('HTML <title>'),
    description: get('Meta description').replace(/\s+/g, ' ').trim(),
    canonical: get('Canonical'),
    ogImage: get('OG image'),
    navTitle: coll ? coll[2] : '',
    collectionTitle: coll ? coll[1] : '',
  };
}

const pagesDir = path.join(AUDIT, 'content', 'pages');
const pages = {};
for (const file of fs.readdirSync(pagesDir).sort()) {
  const text = fs.readFileSync(path.join(pagesDir, file), 'utf8').replace(/\r\n/g, '\n');
  const route = text.match(/^# (\S+)/)[1];
  currentRoute = route;
  const header = parseHeader(text);
  const sections = [];
  const parts = text.split(/^## Section \d+\s+`theme=([\w-]+)[^`]*`\s*$/m);
  for (let s = 1; s < parts.length; s += 2) {
    sections.push({ theme: parts[s], blocks: parseBlocks(parts[s + 1].split('\n')) });
  }
  const og = header.ogImage ? resolveImage(header.ogImage) : null;
  pages[route] = { route, file, ...header, ogImage: og, sections };
}

/* --------------------------------------------------------- blog files */
const pyList = (s) => {
  if (!s || s === 'None') return [];
  const out = [];
  const re = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(s))) out.push((m[1] ?? m[2]).replace(/\\'/g, "'"));
  return out;
};
const blogIndex = parseCSV(fs.readFileSync(path.join(AUDIT, 'blog-index.csv'), 'utf8'));
const indexByUrl = new Map(blogIndex.map((r) => [r.url, r]));
const blogDir = path.join(AUDIT, 'content', 'blog');
const posts = [];
for (const file of fs.readdirSync(blogDir).sort()) {
  const text = fs.readFileSync(path.join(blogDir, file), 'utf8').replace(/\r\n/g, '\n');
  const url = text.match(/^# (\S+)/)[1];
  currentRoute = url;
  const header = parseHeader(text);
  const line = (label) => (text.match(new RegExp(`^\\*\\*${label}:\\*\\*\\s*(.*)$`, 'm')) || [])[1]?.trim() ?? '';
  const meta = text.match(/^\*\*Published:\*\*\s*(\S+)\s*\|\s*\*\*Author:\*\*\s*(.*?)\s*\|\s*\*\*Categories:\*\*\s*(.*?)\s*\|\s*\*\*Tags:\*\*\s*(.*)$/m);
  const featuredUrl = line('Featured image');
  const excerpt = line('Excerpt');
  const bodyStart = text.indexOf('\n', text.search(/^\*\*Excerpt:\*\*/m));
  const body = text.slice(bodyStart + 1);
  const idx = indexByUrl.get(url) || {};
  let description = header.description;
  if (/mso-|Style Definitions|X-NONE/.test(description)) description = decodeEntities(excerpt);
  const featured = featuredUrl ? resolveImage(featuredUrl) : idx.featured_image_local || null;
  const featuredId = featuredUrl ? assetId(featuredUrl) : null;
  posts.push({
    url,
    file,
    title: decodeEntities(line('Post title')),
    htmlTitle: header.htmlTitle,
    description: decodeEntities(description).replace(/\s+/g, ' ').trim(),
    date: meta ? meta[1] : idx.date,
    author: meta ? meta[2] : idx.author,
    categories: meta ? pyList(meta[3]) : [],
    tags: meta ? pyList(meta[4]) : [],
    featured: featured && images[featured] ? featured : null,
    excerpt: inline(excerpt),
    excerptText: plain(excerpt),
    blocks: parseBlocks(body.split('\n')),
  });
  // The featured image is often repeated as the first image of the body.
  const last = posts[posts.length - 1];
  // Same asset, or a byte-identical re-upload of the same photo.
  const firstImg = last.blocks.slice(0, 8).find((b) => b.type === 'image' && b.src);
  const sameBytes = (a, b) => a && b && fs.statSync(path.join(ROOT, a)).size === fs.statSync(path.join(ROOT, b)).size;
  last.featuredInBody = Boolean(firstImg && (firstImg.src === last.featured || (featuredId && firstImg.assetId === featuredId) || sameBytes(firstImg.src, last.featured)));
}
posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

fs.writeFileSync(path.join(OUT, 'pages.json'), JSON.stringify(pages));
fs.writeFileSync(path.join(OUT, 'posts.json'), JSON.stringify(posts));
fs.writeFileSync(path.join(OUT, 'link-report.json'), JSON.stringify(linkReport, null, 1));

const tagSet = new Set(posts.flatMap((p) => p.tags));
const catSet = new Set(posts.flatMap((p) => p.categories));
console.log(`pages: ${Object.keys(pages).length}, posts: ${posts.length}, tags: ${tagSet.size}, categories: ${catSet.size}`);
console.log(`link fixes: ${linkReport.length}, unresolved images: ${unresolved.length}`);
if (unresolved.length) console.log(unresolved.slice(0, 10).join('\n'));
