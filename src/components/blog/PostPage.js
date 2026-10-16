import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
import Blocks from '@/components/content/Blocks';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PostCard from './PostCard';
import { adjacentPosts, relatedPosts, formatDate, readingMinutes, taxonomyHref, posts } from '@/lib/content';
import Picture from '@/components/ui/Picture';
import s from './PostPage.module.css';

export default function PostPage({ post }) {
  const { newer, older } = adjacentPosts(post);
  const related = relatedPosts(post, 3);
  const latest = posts.filter((p) => p !== post).slice(0, 4);
  return (
    <article className={s.post}>
      <header className={`wrap ${s.head}`}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]} />
        <div className={s.meta} data-reveal="fade">
          {post.categories.map((c) => (
            <Link key={c} href={taxonomyHref('category', c)} className={s.cat}>
              {c}
            </Link>
          ))}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{readingMinutes(post)} min read</span>
        </div>
        <h1 className={`h1 ${s.title}`} data-reveal="up">
          {post.title}
        </h1>
        <p className={s.author} data-reveal="up">
          By {post.author}
        </p>
      </header>

      {post.featured && !post.featuredInBody && (
        <div className={`wrap ${s.featureWrap}`}>
          <div className={s.feature} data-reveal="image">
            <Picture src={post.featured} alt="" sizes="(min-width: 1100px) 1100px, 100vw" priority />
          </div>
        </div>
      )}

      <div className={`wrap ${s.layout}`}>
        <aside className={s.metaRail} aria-label="Article details">
          <div className={s.railInner}>
            <p className={s.railLabel}>Written by</p>
            <p className={s.railValue}>{post.author}</p>
            <p className={s.railLabel}>Published</p>
            <p className={s.railValue}>{formatDate(post.date)}</p>
            <p className={s.railLabel}>Reading time</p>
            <p className={s.railValue}>{readingMinutes(post)} min</p>
            {post.categories.length > 0 && (
              <>
                <p className={s.railLabel}>Category</p>
                <p className={s.railValue}>
                  {post.categories.map((c, i) => (
                    <span key={c}>
                      {i > 0 && ', '}
                      <Link href={taxonomyHref('category', c)}>{c}</Link>
                    </span>
                  ))}
                </p>
              </>
            )}
            <Link href="/blog" className="link-arrow">
              All articles <Arrow />
            </Link>
          </div>
        </aside>

        <div className={s.body}>
        <div className={`prose ${s.prose}`}>
          <Blocks blocks={post.blocks} sizes="(min-width: 900px) 720px, 100vw" videoLabel={post.title} />
        </div>

        {post.tags.length > 0 && (
          <div className={s.tags}>
            <p className={s.tagLabel}>Tagged</p>
            <ul>
              {post.tags.map((t) => (
                <li key={t}>
                  <Link href={taxonomyHref('tag', t)}>{t}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav className={s.pager} aria-label="More articles">
          {newer ? (
            <Link href={newer.url} className={s.pageLink}>
              <span className={s.dir}>Newer</span>
              <span>{newer.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {older && (
            <Link href={older.url} className={`${s.pageLink} ${s.right}`}>
              <span className={s.dir}>Older</span>
              <span>{older.title}</span>
            </Link>
          )}
        </nav>
        </div>

        <aside className={s.moreRail} aria-label="Latest articles">
          <div className={s.railInner}>
            <p className={s.railLabel}>Latest articles</p>
            <ul className={s.latest}>
              {latest.map((p) => (
                <li key={p.url}>
                  <Link href={p.url}>
                    <span className={s.latestImg}>
                      <Picture src={p.featured} alt="" sizes="72px" fit="cover" />
                    </span>
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className={`wrap ${s.related}`} aria-labelledby="rel-h">
          <div className={s.relHead}>
            <h2 id="rel-h" className="h3">
              Related articles
            </h2>
            <Link href="/blog" className="link-arrow">
              All articles <Arrow />
            </Link>
          </div>
          <div className={s.relGrid} data-reveal="stagger">
            {related.map((p) => (
              <PostCard key={p.url} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
