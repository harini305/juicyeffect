// Slims public/img to what the site actually serves:
//  - keeps only images referenced by page/post content, metadata or code
//  - de-duplicates identical originals (same bytes downloaded under several URLs)
//  - caps derivatives at 1600px wide (the largest size any layout displays)
// Rewrites src/data/generated/images.json to match. Originals in
// source-assets/ are untouched, so `npm run images` can always regenerate.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const MAX_W = 1600;
const gen = (f) => path.join(ROOT, 'src', 'data', 'generated', f);
const images = JSON.parse(fs.readFileSync(gen('images.json'), 'utf8'));
const pages = JSON.parse(fs.readFileSync(gen('pages.json'), 'utf8'));
const posts = JSON.parse(fs.readFileSync(gen('posts.json'), 'utf8'));

// 1. Which originals does the site use?
const used = new Set();
const walk = (v) => {
  if (typeof v === 'string') {
    if (v.startsWith('source-assets/') && images[v]) used.add(v);
  } else if (Array.isArray(v)) v.forEach(walk);
  else if (v && typeof v === 'object') Object.values(v).forEach(walk);
};
walk(pages);
walk(posts);
// hard-coded paths in source code (logo, homepage photos, favicon mark…)
const srcFiles = [];
const scan = (d) => {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) { if (f.name !== 'generated') scan(p); }
    else if (/\.(js|mjs)$/.test(f.name)) srcFiles.push(p);
  }
};
scan(path.join(ROOT, 'src'));
for (const f of srcFiles) for (const m of fs.readFileSync(f, 'utf8').matchAll(/source-assets\/[^'"`\s]+/g)) if (images[m[0]]) used.add(m[0]);

// 2. De-duplicate identical originals
const hashOf = (p) => crypto.createHash('sha1').update(fs.readFileSync(path.join(ROOT, p))).digest('hex');
const canonical = new Map();
const out = {};
for (const key of [...used].sort()) {
  const h = hashOf(key);
  if (!canonical.has(h)) canonical.set(h, key);
  const c = canonical.get(h);
  const e = images[c];
  const variants = e.variants.filter((v) => v.w <= MAX_W);
  if (!variants.length) variants.push(e.variants[0]);
  out[key] = { w: e.w, h: e.h, variants };
}

// 3. Delete every derivative no longer referenced
const keep = new Set(Object.values(out).flatMap((e) => e.variants.map((v) => path.basename(v.src))));
const dir = path.join(ROOT, 'public', 'img');
let removed = 0, freed = 0;
for (const f of fs.readdirSync(dir)) {
  if (!keep.has(f)) {
    freed += fs.statSync(path.join(dir, f)).size;
    fs.unlinkSync(path.join(dir, f));
    removed++;
  }
}
fs.writeFileSync(gen('images.json'), JSON.stringify(out, null, 1));
console.log(`originals used: ${used.size} (unique ${canonical.size}); derivatives kept: ${keep.size}; removed ${removed} files, ${(freed / 1e6).toFixed(1)} MB`);
