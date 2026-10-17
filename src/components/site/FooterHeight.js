'use client';

import { useEffect } from 'react';

// Publishes the footer's height as --footer-h so the last section of a page
// can size itself to fill the screen together with the footer.
export default function FooterHeight() {
  useEffect(() => {
    const f = document.querySelector('footer');
    if (!f) return;
    const set = () => document.documentElement.style.setProperty('--footer-h', `${f.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(f);
    return () => ro.disconnect();
  }, []);
  return null;
}
