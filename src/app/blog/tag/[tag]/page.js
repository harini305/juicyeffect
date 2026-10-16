import { notFound } from 'next/navigation';
import ArchivePage from '@/components/blog/ArchivePage';
import { resolveTaxonomy, postsForTaxonomy, taxonomyHref } from '@/lib/content';

// 152 tag archives, rendered from the blog metadata. Rendered on request
// (rather than pre-built) because two source tags differ only by letter case
// ("The Juicy Effect" / "the juicy effect"), which would collide as static
// files on case-insensitive file systems.
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { tag } = await params;
  const t = resolveTaxonomy('tag', tag);
  if (!t) return {};
  return {
    title: `${t.name} — Blog`,
    description: `Articles from The Juicy Effect blog tagged “${t.name}”.`,
    alternates: { canonical: taxonomyHref('tag', t.name) },
  };
}

export default async function TagArchive({ params }) {
  const { tag } = await params;
  const t = resolveTaxonomy('tag', tag);
  if (!t) notFound();
  return <ArchivePage kind="tag" name={t.name} posts={postsForTaxonomy('tag', t.name)} />;
}
