'use client';

import { useLayoutEffect, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useIso = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
let firstRoute = true;

/*
  One controller for declarative, page-level motion. Elements opt in with
  data attributes written by server components:
    data-reveal="up"      fade + rise when scrolled into view
    data-reveal="stagger" reveal direct children one after another
    data-reveal="words"   headings pre-split into .sw > span word masks
    data-reveal="image"   clip-path wipe with a gentle inner zoom
    data-reveal="fade"    opacity only
    data-parallax="12"    inner <img> drifts by N% while the frame scrolls
  Everything is scoped to a gsap.context that is reverted on route change,
  and nothing runs when the visitor prefers reduced motion.
*/
export default function MotionController() {
  const pathname = usePathname();

  useIso(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      root.classList.remove('js-motion');
      return;
    }
    root.classList.add('js-motion', 'motion-ready');

    const ctx = gsap.context(() => {
      // Gentle page entrance on client-side route changes.
      const main = document.getElementById('main');
      if (main && !firstRoute) gsap.fromTo(main, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity,visibility' });
      const mm = gsap.matchMedia();
      mm.add({ desktop: '(min-width: 900px)', mobile: '(max-width: 899.98px)' }, (c) => {
        const { desktop } = c.conditions;
        const distance = desktop ? 48 : 28;

        const inView = (el) => el.getBoundingClientRect().top < window.innerHeight * 0.92;
        const trigger = (el) => ({ trigger: el, start: 'top 88%', once: true });

        gsap.utils.toArray('[data-reveal="up"]').forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: distance },
            { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', delay: inView(el) ? 0.12 : 0, clearProps: 'transform', scrollTrigger: trigger(el) }
          );
        });

        gsap.utils.toArray('[data-reveal="fade"]').forEach((el) => {
          gsap.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, ease: 'power2.out', scrollTrigger: trigger(el) });
        });

        gsap.utils.toArray('[data-reveal="stagger"]').forEach((el) => {
          gsap.set(el, { autoAlpha: 1 });
          const kids = el.children;
          gsap.fromTo(
            kids,
            { autoAlpha: 0, y: distance * 0.7 },
            { autoAlpha: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.09, clearProps: 'transform', scrollTrigger: trigger(el) }
          );
        });

        gsap.utils.toArray('[data-reveal="words"]').forEach((el) => {
          gsap.set(el, { autoAlpha: 1 });
          const words = el.querySelectorAll('.sw > span');
          gsap.fromTo(
            words,
            { yPercent: 110 },
            { yPercent: 0, duration: 1.15, ease: 'expo.out', stagger: 0.045, delay: 0.08, scrollTrigger: trigger(el) }
          );
        });

        gsap.utils.toArray('[data-reveal="image"]').forEach((el) => {
          const media = el.querySelector('img');
          gsap.set(el, { autoAlpha: 1 });
          const tl = gsap.timeline({ scrollTrigger: trigger(el) });
          tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.35, ease: 'expo.inOut' });
          // Parallax frames keep the photo slightly oversized so no edge ever shows.
          const rest = desktop && el.dataset.parallax ? 1 + (parseFloat(el.dataset.parallax) || 10) / 100 + 0.02 : 1;
          if (media) tl.fromTo(media, { scale: rest + 0.16 }, { scale: rest, duration: 1.8, ease: 'expo.out' }, 0.1);
        });


        gsap.utils.toArray('[data-spin]').forEach((el) => {
          gsap.to(el, { rotate: 360, duration: 36, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
        });

        if (desktop) {
          // Layered depth: elements drift at different rates while in view.
          gsap.utils.toArray('[data-speed]').forEach((el) => {
            const speed = parseFloat(el.dataset.speed) || 0;
            gsap.fromTo(
              el,
              { yPercent: speed * 0.6 },
              { yPercent: -speed * 0.6, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }
            );
          });

          gsap.utils.toArray('[data-parallax]').forEach((el) => {
            const media = el.querySelector('img');
            if (!media) return;
            const amount = parseFloat(el.dataset.parallax) || 10;
            if (el.dataset.reveal !== 'image') gsap.set(media, { scale: 1 + amount / 100 + 0.02 });
            gsap.fromTo(
              media,
              { yPercent: -amount / 2 },
              {
                yPercent: amount / 2,
                ease: 'none',
                scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
              }
            );
          });
        }
      });
    });

    firstRoute = false;

    // Recalculate positions once fonts and lazy images have settled.
    let t;
    const refresh = () => {
      clearTimeout(t);
      t = setTimeout(() => ScrollTrigger.refresh(), 150);
    };
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    const imgs = [...document.querySelectorAll('main img')].filter((i) => !i.complete);
    imgs.forEach((i) => i.addEventListener('load', refresh, { once: true }));

    return () => {
      clearTimeout(t);
      window.removeEventListener('load', refresh);
      imgs.forEach((i) => i.removeEventListener('load', refresh));
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
