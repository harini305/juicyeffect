'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV, NAV_MORE, NAV_CONTACT, CONTACT } from '@/data/site';
import s from './Header.module.css';

gsap.registerPlugin(ScrollTrigger);

const isActive = (pathname, href) => pathname === href || (href !== '/' && pathname.startsWith(href + '/'));

export default function Header({ logo, sectionOf }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const barRef = useRef(null);
  const overlayRef = useRef(null);
  const moreRef = useRef(null);
  const menuBtnRef = useRef(null);
  const tlRef = useRef(null);

  const current = sectionOf?.[pathname] || pathname;

  // Close menus on navigation
  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  // Hide on scroll down, reveal on scroll up; add a hairline once scrolled.
  useEffect(() => {
    const bar = barRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const y = self.scroll();
        bar.dataset.scrolled = y > 8 ? 'true' : 'false';
        const hide = !reduce && self.direction === 1 && y > 280;
        gsap.to(bar, { yPercent: hide ? -100 : 0, duration: reduce ? 0 : 0.5, ease: 'power3.out', overwrite: 'auto' });
      },
    });
    return () => st.kill();
  }, []);

  // Mobile overlay timeline
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true });
      tl.set(el, { visibility: 'visible' })
        .fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: reduce ? 0.01 : 0.7, ease: 'expo.inOut' })
        .fromTo(
          el.querySelectorAll('[data-m-item]'),
          { yPercent: 60, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: reduce ? 0.01 : 0.8, ease: 'expo.out', stagger: 0.035 },
          reduce ? 0 : 0.3
        );
      tlRef.current = tl;
    }, el);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    if (open) {
      // Start the list below the header wherever it currently sits (the
      // announcement bar may or may not be above it).
      const bottom = barRef.current?.getBoundingClientRect().bottom || 0;
      overlayRef.current.style.paddingTop = `${Math.round(bottom + 24)}px`;
      tl.timeScale(1).play();
      document.body.style.overflow = 'hidden';
    } else {
      tl.timeScale(1.6).reverse();
      document.body.style.overflow = '';
    }
  }, [open]);

  const onKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        if (open) {
          setOpen(false);
          menuBtnRef.current?.focus();
        }
        setMoreOpen(false);
      }
    },
    [open]
  );
  useEffect(() => {
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onKey]);

  // Close "More" when clicking outside
  useEffect(() => {
    if (!moreOpen) return;
    const off = (e) => {
      if (!moreRef.current?.contains(e.target)) setMoreOpen(false);
    };
    document.addEventListener('pointerdown', off);
    return () => document.removeEventListener('pointerdown', off);
  }, [moreOpen]);

  const moreActive = NAV_MORE.some((l) => isActive(current, l.href));

  return (
    <>
      <header ref={barRef} className={s.bar} data-scrolled="false">
        <div className={`wrap ${s.inner}`}>
          <Link href="/" className={s.logo} aria-label="The Juicy Effect — home">
            <img src={logo.src} srcSet={logo.srcSet} sizes="96px" width={logo.width} height={logo.height} alt="The Juicy Effect" />
          </Link>

          <nav className={s.nav} aria-label="Main">
            <ul className={s.navList}>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={s.navLink} aria-current={isActive(current, l.href) ? 'page' : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className={s.more} ref={moreRef}>
                <button
                  type="button"
                  className={s.navLink}
                  aria-expanded={moreOpen}
                  aria-controls="more-panel"
                  data-active={moreActive || undefined}
                  onClick={() => setMoreOpen((v) => !v)}
                >
                  More <span className={s.plus} aria-hidden="true" data-open={moreOpen} />
                </button>
                <div id="more-panel" className={s.panel} data-open={moreOpen}>
                  <ul>
                    {NAV_MORE.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} aria-current={isActive(current, l.href) ? 'page' : undefined} tabIndex={moreOpen ? 0 : -1}>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          <Link href={NAV_CONTACT.href} className={`btn btn--sm ${s.cta}`} aria-current={pathname === '/contact' ? 'page' : undefined}>
            {NAV_CONTACT.label}
          </Link>

          <button
            ref={menuBtnRef}
            type="button"
            className={s.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
            <span className={s.menuLines} data-open={open} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <div id="mobile-menu" ref={overlayRef} className={s.overlay} aria-hidden={!open} inert={!open ? true : undefined}>
        <div className={`wrap ${s.overlayInner}`}>
          <nav aria-label="Mobile">
            <ul className={s.mList}>
              <li data-m-item>
                <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
                  Home
                </Link>
              </li>
              {NAV.map((l) => (
                <li key={l.href} data-m-item>
                  <Link href={l.href} aria-current={isActive(current, l.href) ? 'page' : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li data-m-item>
                <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <p className={s.mLabel} data-m-item>
              More
            </p>
            <ul className={s.mMore}>
              {NAV_MORE.map((l) => (
                <li key={l.href} data-m-item>
                  <Link href={l.href} aria-current={isActive(current, l.href) ? 'page' : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={s.mContact} data-m-item>
            <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer">
              WhatsApp {CONTACT.whatsapp.display}
            </a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
