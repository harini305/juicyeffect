import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Arrow from '@/components/ui/Arrow';
import s from './RelatedRail.module.css';

export default function RelatedRail({ title, items, hubHref, hubLabel }) {
  if (!items?.length) return null;
  return (
    <section className={s.rel} aria-labelledby="related-h">
      <div className="wrap">
        <div className={s.head}>
          <h2 id="related-h" className="h3" data-reveal="up">
            {title}
          </h2>
          {hubHref && (
            <Link href={hubHref} className="link-arrow">
              {hubLabel} <Arrow />
            </Link>
          )}
        </div>
        <ul className={`${s.list} ${items.length < 5 ? s.few : ''}`} data-reveal="stagger">
          {items.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className={s.item}>
                <span className={s.art}>
                  <Picture src={c.src} alt="" sizes="(min-width: 900px) 200px, 40vw" fit="cover" />
                </span>
                <span className={s.name}>
                  {c.name}
                  {items.length < 5 && (
                    <span className={s.go}>
                      Learn More <Arrow size={14} />
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
