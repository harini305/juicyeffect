import { notFound } from 'next/navigation';
import ArchivePage from '@/components/blog/ArchivePage';
import { allCategories, resolveTaxonomy, postsForTaxonomy, taxonomyHref } from '@/lib/content';

// /blog/category/Personal, /blog/category/Small+Bites, /blog/category/Business
export const dynamicParams = false;

export function generateStaticParams() {
  return allCategories().map((c) => ({ category: c.name.replace(/ /g, '+') }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const c = resolveTaxonomy('category', category);
  if (!c) return {};
  return {
    title: `${c.name} — Blog`,
    description: `Articles from The Juicy Effect blog in the “${c.name}” category.`,
    alternates: { canonical: taxonomyHref('category', c.name) },
  };
}

export default async function CategoryArchive({ params }) {
  const { category } = await params;
  const c = resolveTaxonomy('category', category);
  if (!c) notFound();
  return <ArchivePage kind="category" name={c.name} posts={postsForTaxonomy('category', c.name)} />;
}
