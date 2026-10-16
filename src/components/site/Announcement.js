'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ANNOUNCEMENT } from '@/data/site';
import s from './Announcement.module.css';

const KEY = 'tje-announcement-dismissed';

export default function Announcement() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) === '1') setHidden(true);
    } catch {}
  }, []);
  if (hidden) return null;
  return (
    <div className={s.bar} role="region" aria-label="Announcement">
      <p className={s.text}>
        {ANNOUNCEMENT.text} <Link href={ANNOUNCEMENT.href}>{ANNOUNCEMENT.linkLabel}</Link>.
      </p>
      <button
        type="button"
        className={s.close}
        onClick={() => {
          setHidden(true);
          try {
            localStorage.setItem(KEY, '1');
          } catch {}
        }}
      >
        <span className="visually-hidden">Dismiss announcement</span>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
}
