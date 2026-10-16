'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import s from './ServiceOrbit.module.css';

gsap.registerPlugin(ScrollTrigger);

// Horizontal "orbit" of the circular session artworks. On wide screens the
// section pins and the track is scrubbed sideways by vertical scroll; on
// small screens (or with reduced motion) it is a native, swipeable rail.
export default function ServiceOrbit({ items, children }) {
  const root = useRef(null);
  const track = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
        const el = track.current;
        const distance = () => Math.max(0, el.scrollWidth - el.parentElement.clientWidth);
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: () => '+=' + distance(),
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
        // Each tile turns gently as it travels.
        gsap.utils.toArray(el.querySelectorAll('[data-tile]')).forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { rotate: i % 2 ? 10 : -10 },
            {
              rotate: i % 2 ? -6 : 6,
              ease: 'none',
              scrollTrigger: { trigger: tile, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
            }
          );
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className={s.orbit} aria-labelledby="orbit-h">
      <div className={`wrap ${s.inner}`}>
        <div className={s.intro}>{children}</div>
        <div className={s.viewport}>
          <ol ref={track} className={s.track}>
            {items.map((it, i) => (
              <li key={it.href + i} className={s.item}>
                <Link href={it.href} className={s.link}>
                  <span className={s.tile} data-tile>
                    <img src={it.img.src} srcSet={it.img.srcSet} sizes="(min-width: 1000px) 300px, 62vw" width={it.img.width} height={it.img.height} alt="" loading="eager" decoding="async" />
                  </span>
                  <span className={s.meta}>
                    <span className={s.name}>{it.name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
