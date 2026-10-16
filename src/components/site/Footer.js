import Link from 'next/link';
import { CONTACT, NAV, NAV_MORE } from '@/data/site';
import Spectrum from '@/components/ui/Spectrum';
import Arrow from '@/components/ui/Arrow';
import s from './Footer.module.css';

// Channels exactly as published on the source Contact page.
const CHANNELS = [
  { label: 'WhatsApp', value: CONTACT.whatsapp.display, href: CONTACT.whatsapp.href },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Instagram', value: CONTACT.instagramHandle, href: CONTACT.instagram },
  { label: 'Facebook / Messenger', value: 'thejuicyeffect', href: CONTACT.messenger },
];

export default function Footer({ logo }) {
  return (
    <footer className={s.footer}>
      <Spectrum />
      <div className={`wrap ${s.inner}`}>
        {/* ------------------------------------------------------- links */}
        <div className={s.links}>
          <div className={s.brand}>
            <Link href="/" className={s.logo} aria-label="The Juicy Effect — home">
              <img src={logo.src} srcSet={logo.srcSet} sizes="80px" width={logo.width} height={logo.height} alt="" loading="lazy" />
            </Link>
            <ul className={s.tiles}>
              {CHANNELS.map((c) => {
                const ext = c.href.startsWith('http');
                return (
                  <li key={c.label}>
                    <a href={c.href} className={s.tile} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      <span className={s.tileLabel}>{c.label}</span>
                      <span className={s.tileValue}>{c.value}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <nav aria-label="Explore">
            <h2 className={s.h}>Explore</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="More">
            <h2 className={s.h}>More</h2>
            <ul className={s.twoCol}>
              {NAV_MORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/rent-our-space">Rent Our Space</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h2 className={s.h}>Visit us</h2>
            <address className={s.address}>
              {CONTACT.address.full}
              <a href={CONTACT.googleMaps} target="_blank" rel="noopener noreferrer">
                Google Maps <Arrow size={13} />
              </a>
            </address>
          </div>
        </div>

      </div>
    </footer>
  );
}
