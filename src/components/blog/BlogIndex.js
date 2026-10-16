import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import PostCard from './PostCard';
import { CategoryNav, TagCloud } from './TaxonomyNav';
import { posts, formatDate, getPage } from '@/lib/content';
import s from './BlogIndex.module.css';

export default function BlogIndex() {
  const page = getPage('/blog');
  const head = page.sections[0].blocks;
  const title = head.find((b) => b.type === 'heading');
  const intro = head.find((b) => b.type === 'p');
  const [lead, ...others] = posts;
  const side = others.slice(0, 4);
  const rest = others.slice(4);
  const byYear = rest.reduce((acc, p) => {
    const y = p.date.slice(0, 4);
    (acc[y] ||= []).push(p);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <div className={s.page}>
      <div className={s.band}>
        <header className={`wrap ${s.head}`}>
          <div>
            <SplitWords as="h1" className={`display ${s.title}`} html={title.html} />
          </div>
          <div className={s.headSide} data-reveal="up">
            <Html as="p" className={`lede ${s.intro}`} html={intro.html} />
            <CategoryNav />
          </div>
        </header>
      </div>

      <section className={`wrap ${s.featured}`} aria-label="Latest articles">
        <div data-reveal="up">
          <PostCard post={lead} size="lg" sizes="(min-width: 1000px) 60vw, 100vw" />
        </div>
        <div className={s.side}>
          {side.map((p) => (
            <div key={p.url} data-reveal="up">
              <PostCard post={p} size="sm" sizes="(min-width: 1000px) 200px, 100vw" />
            </div>
          ))}
        </div>
      </section>

      <section className={`wrap ${s.archive}`} aria-labelledby="archive-h">
        <h2 id="archive-h" className="h2" data-reveal="up">
          All articles
        </h2>
        {years.map((y) => (
          <div key={y} className={s.year}>
            <h3 className={s.yearLabel}>{y}</h3>
            <ol className={s.list}>
              {byYear[y].map((p) => (
                <li key={p.url}>
                  <Link href={p.url} className={s.row}>
                    <span className={s.thumb}>
                      <Picture src={p.featured} alt="" sizes="96px" fit="cover" />
                    </span>
                    <span className={s.rowText}>
                      <span className={s.rowTitle}>{p.title}</span>
                      <span className={s.rowMeta}>
                        {formatDate(p.date)}
                        {p.categories.length > 0 && ` · ${p.categories.join(', ')}`}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>

      <section className={`wrap ${s.tags}`} aria-labelledby="tags-h">
        <h2 id="tags-h" className="h3">
          Browse by tag
        </h2>
        <TagCloud />
      </section>
    </div>
  );
}
