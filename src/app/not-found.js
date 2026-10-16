import Link from 'next/link';
import Arrow from '@/components/ui/Arrow';
import Spectrum from '@/components/ui/Spectrum';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="wrap" style={{ paddingBlock: 'clamp(4rem, 12vw, 10rem)', display: 'grid', gap: '1.6rem', justifyItems: 'start' }}>
      <h1 className="display" style={{ maxWidth: '14ch' }}>
        This page has <strong>wandered off</strong>.
      </h1>
      <p className="lede" style={{ maxWidth: '36rem', margin: 0 }}>
        The address may have changed, or the page may no longer exist. These are good places to continue:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <Link href="/" className="btn btn--solid">
          Home <Arrow />
        </Link>
        <Link href="/healing-sessions" className="btn">
          Healing Sessions
        </Link>
        <Link href="/blog" className="btn">
          Blog
        </Link>
        <Link href="/contact" className="btn">
          Contact Us
        </Link>
      </div>
      <Spectrum className="" />
    </section>
  );
}
