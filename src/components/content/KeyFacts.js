import { OFFERS } from '@/data/offers';
import s from './KeyFacts.module.css';

// "At a glance" panel. Values come from src/data/offers.js (quoted from the
// page itself); conflicting source values are shown together, unresolved.
export default function KeyFacts({ route, where }) {
  const o = OFFERS[route];
  if (!o) return null;
  return (
    <dl className={s.facts} data-reveal="stagger">
      {o.duration && (
        <div>
          <dt>Duration</dt>
          <dd>{o.duration}</dd>
        </div>
      )}
      {o.conflict && (
        <div>
          <dt>{o.conflict.label}</dt>
          <dd>
            {o.conflict.values.map((v) => (
              <span key={v} className={s.line}>
                {v}
              </span>
            ))}
            <span className={s.note}>Both durations appear on this page.</span>
          </dd>
        </div>
      )}
      <div>
        <dt>Investment</dt>
        <dd>
          {o.price.map((p) => (
            <span key={p} className={s.line}>
              {p}
            </span>
          ))}
        </dd>
      </div>
      {o.with && (
        <div>
          <dt>With</dt>
          <dd>{o.with}</dd>
        </div>
      )}
      {(o.where || where) && (
        <div>
          <dt>Where</dt>
          <dd>{o.where || where}</dd>
        </div>
      )}
    </dl>
  );
}
