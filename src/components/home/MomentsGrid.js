'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './MomentsGrid.module.css';

const STEP = 6;

// Local photo grid standing in for the Squarespace Instagram block.
// It uses original photographs from this website and does not claim to be
// a live feed. "Load more" reveals further local photos.
export default function MomentsGrid({ photos }) {
  const [count, setCount] = useState(STEP);
  const list = useRef(null);
  const prev = useRef(STEP);

  useLayoutEffect(() => {
    if (count === prev.current) return;
    const items = [...list.current.children].slice(prev.current, count);
    prev.current = count;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(items, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.07, onComplete: () => ScrollTrigger.refresh() });
    items[0]?.querySelector('a, figure')?.focus?.();
  }, [count]);

  return (
    <div>
      <ul ref={list} className={s.grid}>
        {photos.slice(0, count).map((p, i) => (
          <li key={p.src}>
            <figure className={s.fig} tabIndex={-1}>
              <img src={p.src} srcSet={p.srcSet} sizes="(min-width: 900px) 30vw, 48vw" width={p.width} height={p.height} alt={p.alt} loading="lazy" decoding="async" />
            </figure>
          </li>
        ))}
      </ul>
      {count < photos.length && (
        <div className={s.more}>
          <button type="button" className="btn" onClick={() => setCount((c) => Math.min(photos.length, c + STEP))}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
}
