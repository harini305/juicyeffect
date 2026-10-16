import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PostCard from './PostCard';
import { CategoryNav, TagCloud } from './TaxonomyNav';
import s from './ArchivePage.module.css';

// Shared template for /blog/tag/<tag> and /blog/category/<category>.
export default function ArchivePage({ kind, name, posts }) {
  const label = kind === 'tag' ? 'Tag' : 'Category';
  return (
    <div className={s.page}>
      <header className={`wrap ${s.head}`}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: `${label}: ${name}` }]} />
        <h1 className={`h1 ${s.title}`} data-reveal="up">
          {name}
        </h1>
        {kind === 'category' && <CategoryNav current={name} />}
      </header>
      <section className={`wrap ${s.grid}`} aria-label={`Articles: ${name}`}>
        {posts.map((p) => (
          <div key={p.url} data-reveal="up">
            <PostCard post={p} />
          </div>
        ))}
      </section>
      <section className={`wrap ${s.more}`}>
        <Link href="/blog" className="link-arrow">
          All articles <Arrow />
        </Link>
        <details className={s.allTags}>
          <summary>Browse all tags</summary>
          <TagCloud current={kind === 'tag' ? name : undefined} />
        </details>
      </section>
    </div>
  );
}
