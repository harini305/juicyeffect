import { notFound } from 'next/navigation';
import PostPage from '@/components/blog/PostPage';
import { posts, findPost, postPath, img } from '@/lib/content';
import { SITE } from '@/data/site';

// Both original URL formats are preserved exactly:
//   /blog/YYYY/M/D/slug  (older posts)   and   /blog/slug  (newer posts)
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: postPath(p) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  const og = img(post.featured);
  return {
    title: post.title,
    description: post.description || post.excerptText || undefined,
    alternates: { canonical: post.url },
    openGraph: {
      type: 'article',
      title: post.htmlTitle || post.title,
      description: post.description || post.excerptText || undefined,
      url: post.url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [og ? og.largest : SITE.shareImage],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: SITE.url + post.url,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PostPage post={post} />
    </>
  );
}
