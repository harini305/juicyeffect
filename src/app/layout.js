import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Announcement from '@/components/site/Announcement';
import MotionController from '@/components/motion/MotionController';
import SmoothScroll from '@/components/motion/SmoothScroll';
import { SITE, CONTACT } from '@/data/site';
import { PAGE_TYPES, GROUPS } from '@/data/pages';
import { img } from '@/lib/content';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.titleSuffix, template: `%s — ${SITE.titleSuffix}` },
  description:
    'The Juicy Effect is a transformational wellbeing and healing centre offering private energy healing sessions, immersive workshops and trainings, and soul-nourishing retreats.',
  openGraph: { siteName: SITE.name, locale: 'en_AU', type: 'website', images: [SITE.shareImage] },
  twitter: { card: 'summary' },
};

export const viewport = {
  themeColor: '#ffffff',
};

// Structured data: corrects the source site's errors (business name was the
// postcode "80571"; map marker was Squarespace's default New York location).
// No coordinates, phone or opening hours are published here because the
// source contradicts itself on those facts (see docs/IMPLEMENTATION-REPORT.md).
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: SITE.name, url: SITE.url, inLanguage: SITE.locale },
    {
      '@type': 'HealthAndBeautyBusiness',
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE.url,
      email: CONTACT.email,
      image: `${SITE.url}${SITE.shareImage}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT.address.street,
        addressLocality: 'Ubud',
        addressRegion: 'Bali',
        postalCode: CONTACT.address.postalCode,
        addressCountry: 'ID',
      },
      sameAs: [CONTACT.messenger, CONTACT.instagram],
    },
  ],
};

const sectionOf = Object.fromEntries(
  Object.entries(PAGE_TYPES)
    .filter(([, v]) => v.group && v.group !== 'about')
    .map(([route, v]) => [route, GROUPS[v.group].href])
);

const motionBoot = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')}catch(e){}`;

export default function RootLayout({ children }) {
  const logo = img(SITE.logo);
  const logoProps = { src: logo.src, srcSet: logo.srcSet, width: logo.width, height: logo.height };
  return (
    <html lang="en-AU" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Announcement />
        <Header logo={logoProps} sectionOf={sectionOf} />
        <main id="main">{children}</main>
        <Footer logo={logoProps} />
        <SmoothScroll />
        <MotionController />
      </body>
    </html>
  );
}
