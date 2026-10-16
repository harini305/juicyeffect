import { SITE } from '@/data/site';
import { img, cleanTitle } from '@/lib/content';

// Builds Next.js metadata from the captured <title>, description and og:image.
export function pageMetadata(page, { canonical, ogImage } = {}) {
  const title = cleanTitle(page.htmlTitle);
  const isRoot = page.htmlTitle?.trim() === SITE.titleSuffix;
  const og = ogImage ? img(ogImage) : null;
  return {
    title: isRoot ? { absolute: SITE.titleSuffix } : title,
    description: page.description || undefined,
    alternates: { canonical: canonical ?? page.route },
    openGraph: {
      title: page.htmlTitle,
      description: page.description || undefined,
      url: canonical ?? page.route,
      images: [og ? og.largest : SITE.shareImage],
    },
  };
}
