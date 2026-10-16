'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import s from './Marquee.module.css';

// Endless ticker of the actual session names; each links to its page.
// GSAP drives the loop; it slows on hover and stops for reduced motion.
export default function Marquee({ items }) {
  const track = useRef(null);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = track.current;
    const ctx = gsap.context(() => {
      const tween = gsap.to(el, { xPercent: -50, ease: 'none', duration: 48, repeat: -1 });
      const slow = () => gsap.to(tween, { timeScale: 0.2, duration: 0.6, overwrite: true });
      const go = () => gsap.to(tween, { timeScale: 1, duration: 0.6, overwrite: true });
      el.addEventListener('mouseenter', slow);
      el.addEventListener('mouseleave', go);
      el.addEventListener('focusin', slow);
      el.addEventListener('focusout', go);
    });
    return () => ctx.revert();
  }, []);
  const row = (hidden) =>
    items.map((it) => (
      <li key={it.href + hidden} aria-hidden={hidden || undefined}>
        <Link href={it.href} tabIndex={hidden ? -1 : undefined}>
          {it.name}
        </Link>
        <span className={s.dot} aria-hidden="true" />
      </li>
    ));
  return (
    <nav className={s.marquee} aria-label="Healing sessions">
      <ul ref={track} className={s.track}>
        {row(false)}
        {row(true)}
      </ul>
    </nav>
  );
}
