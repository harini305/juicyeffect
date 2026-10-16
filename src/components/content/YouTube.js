'use client';

import { useState } from 'react';
import s from './YouTube.module.css';

// Click-to-load YouTube embed: no third-party request until the visitor
// chooses to play. Uses the original video id from the source page.
export default function YouTube({ id, title = 'Video', label }) {
  const [on, setOn] = useState(false);
  if (!id) return null;
  return (
    <div className={s.frame}>
      {on ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={s.facade} onClick={() => setOn(true)}>
          <img className={s.thumb} src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" />
          <span className={s.play} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path d="M6 3.5v15l13-7.5z" fill="currentColor" />
            </svg>
          </span>
          <span className={s.text}>
            <span className={s.kicker}>Play video</span>
            <span className={s.title}>{label || title}</span>
            <span className={s.note}>Loads from YouTube</span>
          </span>
        </button>
      )}
    </div>
  );
}
