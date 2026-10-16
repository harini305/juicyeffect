import { SITE } from '@/data/site';
import { pageRoutes, posts, allTags, allCategories, taxonomyHref } from '@/lib/content';

export default function sitemap() {
  const pages = pageRoutes()
    .filter((r) => r !== '/home')
    .map((r) => ({ url: SITE.url + (r === '/' ? '' : r) }));
  const blog = posts.map((p) => ({ url: SITE.url + p.url, lastModified: p.date }));
  const tax = [...allCategories().map((c) => taxonomyHref('category', c.name)), ...allTags().map((t) => taxonomyHref('tag', t.name))].map((u) => ({ url: SITE.url + u }));
  return [...pages, ...blog, ...tax];
}
