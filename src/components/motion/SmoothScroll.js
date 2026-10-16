'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

// Inertial smooth scrolling (desktop wheel/trackpad) driven by GSAP's ticker
// so ScrollTrigger stays in sync. Native scrolling is kept on touch devices
// and whenever the visitor prefers reduced motion.
export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true, anchors: { offset: -96 } });
    document.documentElement.classList.add('lenis');
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => lenis?.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = null;
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  // New page: start at the top immediately.
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  // Pause smooth scrolling while the body is locked (mobile menu).
  useEffect(() => {
    const obs = new MutationObserver(() => {
      if (!lenis) return;
      if (document.body.style.overflow === 'hidden') lenis.stop();
      else lenis.start();
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => obs.disconnect();
  }, []);

  return null;
}
