import Link from 'next/link';
import { allCategories, allTags, taxonomyHref } from '@/lib/content';
import s from './TaxonomyNav.module.css';

export function CategoryNav({ current }) {
  return (
    <nav aria-label="Blog categories" className={s.cats}>
      <Link href="/blog" aria-current={!current ? 'page' : undefined}>
        All articles
      </Link>
      {allCategories().map((c) => (
        <Link key={c.name} href={taxonomyHref('category', c.name)} aria-current={current === c.name ? 'page' : undefined}>
          {c.name} <span>{c.count}</span>
        </Link>
      ))}
    </nav>
  );
}

export function TagCloud({ current, limit }) {
  const tags = allTags();
  const shown = limit ? tags.slice(0, limit) : tags;
  return (
    <ul className={s.tags}>
      {shown.map((t) => (
        <li key={t.name}>
          <Link href={taxonomyHref('tag', t.name)} aria-current={current === t.name ? 'page' : undefined}>
            {t.name}
            <span>{t.count}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
