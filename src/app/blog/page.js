import BlogIndex from '@/components/blog/BlogIndex';
import { getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/meta';

export const metadata = pageMetadata(getPage('/blog'));

export default function Blog() {
  return <BlogIndex />;
}
