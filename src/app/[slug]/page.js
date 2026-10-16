import { notFound } from 'next/navigation';
import { getPage, pageRoutes, pageType } from '@/lib/content';
import { pageMetadata } from '@/lib/meta';
import DetailPage from '@/components/templates/DetailPage';
import HomePage from '@/components/home/HomePage';
import HubPage from '@/components/templates/HubPage';
import RetreatPage from '@/components/templates/RetreatPage';
import ContactPage from '@/components/templates/ContactPage';
import StoryPage from '@/components/templates/StoryPage';
import TeamPage from '@/components/templates/TeamPage';
import LongformPage from '@/components/templates/LongformPage';
import LegacyGalleryPage from '@/components/templates/LegacyGalleryPage';

export const dynamicParams = false;

export function generateStaticParams() {
  return pageRoutes()
    .filter((r) => r !== '/' && r !== '/blog')
    .map((r) => ({ slug: r.slice(1) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = '/' + slug;
  const page = getPage(route);
  if (!page) return {};
  const meta = pageType(route);
  return pageMetadata(page, { canonical: meta.canonical, ogImage: page.ogImage });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const route = '/' + slug;
  const page = getPage(route);
  if (!page) notFound();
  const meta = pageType(route);
  switch (meta.type) {
    case 'home':
      return <HomePage page={getPage('/')} />;
    case 'detail':
      return <DetailPage route={route} page={page} meta={meta} />;
    case 'retreat':
      return <RetreatPage route={route} page={page} />;
    case 'contact':
      return <ContactPage page={page} />;
    case 'story':
      return <StoryPage page={page} />;
    case 'team':
      return <TeamPage route={route} page={page} />;
    case 'guide':
    case 'space':
    case 'legal':
      return <LongformPage route={route} page={page} kind={meta.type} />;
    case 'legacy':
      return <LegacyGalleryPage page={page} />;
    default:
      if (meta.type.startsWith('hub-')) return <HubPage route={route} page={page} kind={meta.type.slice(4)} />;
      return <LongformPage route={route} page={page} kind="generic" />;
  }
}
