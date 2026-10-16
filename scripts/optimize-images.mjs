// One-off image pipeline: reads the untouched originals in source-assets/
// and writes optimised WebP derivatives to public/img/ plus a JSON map
// (src/data/generated/images.json) that the site uses to build srcsets.
// Originals are never modified. Re-running skips files that already exist.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'source-assets');
const OUT = path.join(ROOT, 'public', 'img');
const MAP = path.join(ROOT, 'src', 'data', 'generated', 'images.json');
const WIDTHS = [480, 960, 1600, 2200];
const QUALITY = 80;

fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(path.dirname(MAP), { recursive: true });

const folders = ['pages', 'blog', 'brand'];
const files = [];
for (const f of folders) {
  for (const name of fs.readdirSync(path.join(SRC, f))) {
    if (/\.(png|jpe?g|gif|webp|ico)$/i.test(name)) files.push(`${f}/${name}`);
  }
}

const slugify = (s) =>
  s.replace(/\.[^.]+$/, '').normalize('NFKD').replace(/[^\w-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();

const map = {};
let written = 0;
for (const rel of files) {
  const abs = path.join(SRC, rel);
  let meta;
  try {
    meta = await sharp(abs, { animated: false }).metadata();
  } catch (e) {
    console.warn('skip (unreadable):', rel, e.message);
    continue;
  }
  const { width, height } = meta;
  const base = `${rel.split('/')[0]}-${slugify(path.basename(rel))}`;
  const widths = WIDTHS.filter((w) => w < width);
  // always include the original width (capped at the largest step) so small images are never upscaled
  const top = Math.min(width, WIDTHS[WIDTHS.length - 1]);
  if (!widths.includes(top)) widths.push(top);
  const variants = [];
  for (const w of widths) {
    const file = `${base}-${w}.webp`;
    const dest = path.join(OUT, file);
    if (!fs.existsSync(dest)) {
      await sharp(abs, { animated: false })
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5, smartSubsample: true })
        .toFile(dest);
      written++;
    }
    variants.push({ w, src: `/img/${file}` });
  }
  map[`source-assets/${rel}`] = { w: width, h: height, variants };
}

fs.writeFileSync(MAP, JSON.stringify(map, null, 1));

// Favicon set from the original favicon artwork (a 2500px PNG named .ico).
const fav = path.join(SRC, 'brand', 'favicon.ico');
const appDir = path.join(ROOT, 'src', 'app');
const square = async (size) =>
  sharp(fav)
    .resize({ width: size, height: size, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
fs.writeFileSync(path.join(appDir, 'icon.png'), await square(192));
const apple = await sharp(fav)
  .resize({ width: 160, height: 160, fit: 'contain', background: '#ffffff' })
  .extend({ top: 10, bottom: 10, left: 10, right: 10, background: '#ffffff' })
  .flatten({ background: '#ffffff' })
  .png()
  .toBuffer();
fs.writeFileSync(path.join(appDir, 'apple-icon.png'), apple);
// favicon.ico containing a single 32px PNG image (ICO supports PNG payloads)
const png32 = await square(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
fs.writeFileSync(path.join(appDir, 'favicon.ico'), Buffer.concat([header, png32]));

// Share image for Open Graph (original 300×300 share logo, re-encoded as PNG for broad support)
fs.copyFileSync(path.join(SRC, 'brand', '08b76c_Untitled_design_(4).png'), path.join(ROOT, 'public', 'share-logo.png'));

// Original MP3 referenced by one blog post
fs.mkdirSync(path.join(ROOT, 'public', 'media'), { recursive: true });
const mp3Dest = path.join(ROOT, 'public', 'media', 'Nick-Phillips-03.mp3');
if (!fs.existsSync(mp3Dest)) fs.copyFileSync(path.join(SRC, 'media', 'Nick-Phillips-03.mp3'), mp3Dest);

console.log(`images: ${Object.keys(map).length} sources mapped, ${written} derivatives written`);
