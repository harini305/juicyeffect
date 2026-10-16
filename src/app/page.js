import HomePage from '@/components/home/HomePage';
import { getPage } from '@/lib/content';
import { pageMetadata } from '@/lib/meta';

const page = getPage('/');

export const metadata = pageMetadata(page, { canonical: '/' });

export default function Home() {
  return <HomePage page={page} />;
}
