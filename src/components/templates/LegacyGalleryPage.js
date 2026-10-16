import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import { navTitle } from '@/lib/content';
import s from './LegacyGalleryPage.module.css';

// Legacy Squarespace gallery-only pages: no text existed, so only the
// original images and their original destinations are shown.
export default function LegacyGalleryPage({ page }) {
  const items = page.sections.flatMap((x) => x.blocks).filter((b) => b.type === 'gallery').flatMap((g) => g.items);
  const title = page.collectionTitle || page.navTitle;
  return (
    <div className={`wrap ${s.page}`}>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: title }]} />
      <h1 className={`h1 ${s.title}`} data-reveal="up">
        {title}
      </h1>
      <ul className={s.grid} data-reveal="stagger">
        {items.map((it, i) => {
          const label = it.link ? navTitle(it.link) || it.alt : it.alt;
          const pic = <Picture src={it.src} alt="" sizes="(min-width: 900px) 28vw, 45vw" />;
          return (
            <li key={i}>
              {it.link ? (
                <Link href={it.link} className={s.item}>
                  {pic}
                  <span>{label}</span>
                </Link>
              ) : (
                <div className={s.item}>
                  {pic}
                  <span>{label}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
