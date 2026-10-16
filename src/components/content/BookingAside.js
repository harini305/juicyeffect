import Link from 'next/link';
import { OFFERS } from '@/data/offers';
import { CONTACT } from '@/data/site';
import Arrow from '@/components/ui/Arrow';
import s from './BookingAside.module.css';

// Sticky side card shown beside long-form content on wide screens.
// Wording is from the source Contact page; prices/durations from offers.js.
export default function BookingAside({ route, name, heading = 'For questions or bookings:', cta, children }) {
  const o = route ? OFFERS[route] : null;
  return (
    <aside className={s.aside} aria-label="Bookings">
      <div className={s.card}>
        {name && <p className={s.name}>{name}</p>}
        {o && (
          <dl className={s.facts}>
            {o.duration && (
              <div>
                <dt>Duration</dt>
                <dd>{o.duration}</dd>
              </div>
            )}
            {o.conflict && (
              <div>
                <dt>{o.conflict.label}</dt>
                <dd>{o.conflict.values.join(' / ')}</dd>
              </div>
            )}
            <div>
              <dt>Investment</dt>
              <dd>{o.price[0]}</dd>
            </div>
          </dl>
        )}
        {children}
        <p className={s.heading}>{heading}</p>
        <div className={s.actions}>
          {cta && (
            <Link href={cta.href} className="btn btn--solid btn--sm">
              {cta.label} <Arrow />
            </Link>
          )}
          <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className={s.channel}>
            <span>WhatsApp</span>
            {CONTACT.whatsapp.display}
          </a>
          <a href={`mailto:${CONTACT.email}`} className={s.channel}>
            <span>Email</span>
            {CONTACT.email}
          </a>
          <Link href="/contact" className="link-arrow">
            All contact options <Arrow />
          </Link>
        </div>
      </div>
    </aside>
  );
}
