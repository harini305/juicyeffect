import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import { formatDate } from '@/lib/content';
import s from './PostCard.module.css';

export default function PostCard({ post, size = 'md', sizes = '(min-width: 900px) 30vw, 100vw', excerpt = true }) {
  return (
    <article className={`${s.card} ${s[size]}`}>
      <Link href={post.url} className={s.img} tabIndex={-1} aria-hidden="true">
        <Picture src={post.featured} alt="" sizes={sizes} fit="cover" />
      </Link>
      <div className={s.body}>
        <p className={s.meta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.categories[0] && <span>{post.categories[0]}</span>}
        </p>
        <h3 className={s.title}>
          <Link href={post.url}>{post.title}</Link>
        </h3>
        {excerpt && post.excerpt && <Html as="p" className={s.excerpt} html={post.excerpt} />}
      </div>
    </article>
  );
}
