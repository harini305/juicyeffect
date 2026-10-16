import pagesData from '@/data/generated/pages.json';
import postsData from '@/data/generated/posts.json';
import imagesData from '@/data/generated/images.json';
import { PAGE_TYPES, GROUPS } from '@/data/pages';

/* ------------------------------------------------------------- images */
// Returns optimised local derivatives for an original asset path.
export function img(localPath) {
  const entry = localPath && imagesData[localPath];
  if (!entry) return null;
  const v = entry.variants;
  return {
    src: v[Math.min(1, v.length - 1)].src,
    largest: v[v.length - 1].src,
    srcSet: v.map((x) => `${x.src} ${x.w}w`).join(', '),
    width: entry.w,
    height: entry.h,
    ratio: entry.w / entry.h,
  };
}

/* -------------------------------------------------------------- pages */
export function getPage(route) {
  return pagesData[route] || null;
}
export function pageRoutes() {
  return Object.keys(pagesData);
}
export function pageType(route) {
  return PAGE_TYPES[route] || { type: 'generic' };
}
export function groupOf(route) {
  const g = PAGE_TYPES[route]?.group;
  return g ? { key: g, ...GROUPS[g] } : null;
}
export function navTitle(route) {
  const p = pagesData[route];
  return p ? p.navTitle || p.collectionTitle : null;
}

export function allBlocks(page) {
  return page.sections.flatMap((s) => s.blocks);
}

// Hub cards: every linked image on a hub page in order, with its title taken
// from the destination page's own navigation title (source data).
export function hubCards(route) {
  const page = getPage(route);
  if (!page) return [];
  const cards = [];
  for (const b of allBlocks(page)) {
    if (b.type === 'image' && b.link && b.link.startsWith('/')) {
      cards.push({ ...b, name: b.title ? stripTags(b.title) : navTitle(b.link) || b.alt, href: b.link });
    }
  }
  return cards;
}

// Siblings within the same hub, in the hub's own order.
export function relatedInGroup(route) {
  const g = groupOf(route);
  if (!g || g.key === 'about') return [];
  const seen = new Set();
  return hubCards(g.href).filter((c) => {
    if (c.href === route || seen.has(c.href)) return false;
    seen.add(c.href);
    return true;
  });
}

// The artwork the hub uses for a given detail page (exact source association).
export function hubArtworkFor(route) {
  const g = groupOf(route);
  if (!g) return null;
  const card = hubCards(g.href).find((c) => c.href === route);
  if (card) return card;
  // /online pairs each course photo with a heading and a "Learn More" button.
  const blocks = allBlocks(getPage(g.href) || { sections: [] });
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].type !== 'image') continue;
    const btn = blocks.slice(i + 1, i + 6).find((b) => b.type === 'button');
    if (btn?.href === route) return { ...blocks[i], href: route };
  }
  return null;
}

export const stripTags = (s = '') =>
  s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();

export function cleanTitle(htmlTitle = '') {
  return htmlTitle.replace(/\s+—\s+Energy Healing Centre Ubud, Bali \| The Juicy Effect$/, '').trim();
}

/* --------------------------------------------------------------- blog */
export const posts = postsData;

export function postPath(post) {
  return post.url.replace(/^\/blog\//, '').split('/');
}
export function findPost(segments) {
  const url = '/blog/' + segments.map((s) => decodeURIComponent(s)).join('/');
  return postsData.find((p) => p.url === url) || null;
}
export function postSlug(post) {
  return post.url.split('/').pop();
}

// Squarespace archive URLs encode spaces as "+": /blog/tag/The+Juicy+Effect
export function taxonomyHref(kind, name) {
  return `/blog/${kind}/${encodeURIComponent(name).replace(/%20/g, '+')}`;
}
export function decodeTaxonomyParam(param) {
  let s = param;
  try {
    s = decodeURIComponent(param);
  } catch {}
  return s.replace(/\+/g, ' ');
}

function tally(key) {
  const map = new Map();
  for (const p of postsData) for (const t of p[key]) map.set(t, (map.get(t) || 0) + 1);
  return [...map.entries()].map(([name, count]) => ({ name, count }));
}
export const allTags = () => tally('tags').sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
export const allCategories = () => tally('categories').sort((a, b) => b.count - a.count);

export function postsForTaxonomy(kind, name) {
  const key = kind === 'tag' ? 'tags' : 'categories';
  return postsData.filter((p) => p[key].includes(name));
}

export function resolveTaxonomy(kind, param) {
  const list = kind === 'tag' ? allTags() : allCategories();
  const wanted = decodeTaxonomyParam(param);
  return list.find((t) => t.name === wanted) || list.find((t) => t.name.toLowerCase() === wanted.toLowerCase()) || null;
}

export function adjacentPosts(post) {
  const i = postsData.indexOf(post);
  return { newer: postsData[i - 1] || null, older: postsData[i + 1] || null };
}

export function relatedPosts(post, n = 3) {
  const scored = postsData
    .filter((p) => p !== post)
    .map((p) => ({
      p,
      score: p.tags.filter((t) => post.tags.includes(t)).length * 2 + p.categories.filter((c) => post.categories.includes(c)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || (a.p.date < b.p.date ? 1 : -1));
  return scored.slice(0, n).map((x) => x.p);
}

export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function readingMinutes(post) {
  const words = post.blocks
    .map((b) => (b.html || '') + ' ' + (b.items || []).join(' ') + ' ' + (b.paras || []).join(' '))
    .join(' ')
    .replace(/<[^>]+>/g, '')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// Detail pages whose own copy links to `route` (e.g. "Learn more about Julia here").
export function pagesLinkingTo(route) {
  const needle = `href="${route}"`;
  return Object.values(pagesData)
    .filter((p) => p.route !== route && PAGE_TYPES[p.route]?.type === 'detail')
    .filter((p) => JSON.stringify(p.sections).includes(needle.replace(/"/g, '\\"')))
    .map((p) => {
      const art = hubArtworkFor(p.route);
      return { href: p.route, name: p.navTitle, src: art?.src || null };
    })
    .filter((x) => x.src);
}
