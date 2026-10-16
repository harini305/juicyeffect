// Central, editable business facts. Every value below is copied from the
// Phase 1 audit (docs/source-audit/02-content-preservation-checklist.md).
// Where the source site contradicts itself, BOTH values are kept with their
// source context — nothing here has been confirmed by the owner yet.

export const SITE = {
  name: 'The Juicy Effect',
  legalName: 'PT The Juicy Effect',
  url: 'https://www.thejuicyeffect.com',
  titleSuffix: 'Energy Healing Centre Ubud, Bali | The Juicy Effect',
  tagline: 'Energy healing specialists',
  locale: 'en-AU',
  logo: 'source-assets/brand/7fd1e9_TheJuicyEffect_part_logo.png',
  shareImage: '/share-logo.png',
  analyticsId: 'G-G1HSN8T94N', // GA4 id from the source site — NOT loaded in this local build
};

export const CONTACT = {
  // The Contact page states WhatsApp is the best channel and shows this number.
  whatsapp: {
    display: '+62 813 3890 6433',
    href: 'https://wa.me/6281338906433',
    source: 'Contact page (/contact)',
  },
  // UNRESOLVED: a different number is stored in the Squarespace site settings
  // and structured data. It is kept here for reference only and is not shown
  // as a confirmed number anywhere on the site.
  settingsPhone: {
    display: '+62 82145015707',
    source: 'Squarespace site settings / structured data — conflicts with the Contact page number',
    confirmed: false,
  },
  email: 'hello@thejuicyeffect.com',
  messenger: 'https://www.facebook.com/thejuicyeffect',
  instagram: 'https://www.instagram.com/the.juicy.effect/',
  instagramHandle: '@the.juicy.effect',
  googleMaps: 'https://g.page/the-juicy-effect?share',
  centreManager: 'Ayu',
  address: {
    street: 'Jl. Raya Lungsiakan No.49',
    locality: 'Kedewatan, Kecamatan Ubud',
    region: 'Kabupaten Gianyar, Bali',
    postalCode: '80571',
    country: 'Indonesia',
    full: 'Jl. Raya Lungsiakan No.49, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571',
  },
};

// UNRESOLVED: three different sets of hours exist on the source site.
// Pages render their own sentence verbatim from the Markdown; shared
// components only use `pageWording`, attributed as it appears on service pages.
export const HOURS = {
  pageWording: {
    text: '9am-5pm Monday to Friday (Bali time), and other times by appointment',
    source: 'Service pages (e.g. /energy-healing)',
  },
  settings: { text: 'Monday–Saturday 9am–5pm, Sunday closed', source: 'Squarespace site settings', confirmed: false },
  structuredData: { text: 'Monday–Friday 09:00–15:00', source: 'Source JSON-LD', confirmed: false },
};

export const ANNOUNCEMENT = {
  text: 'We have just launched our private retreats.  Find out more',
  linkLabel: 'here',
  href: '/private-retreats',
};

// Footer copy, verbatim from every page of the source site.
export const FOOTER_COPY = {
  intro:
    '<strong>The Juicy Effect</strong> is a leading energy healing centre in Ubud, Bali, offering shamanic energy healing, hypnotherapy, breathwork and other transformational wellness sessions for <em>emotional, mental and spiritual fitness</em>.  If you are searching for authentic energy healing in Bali, we invite you to experience deep, lasting change.',
  why:
    "<strong>Why did we call ourselves The Juicy Effect?</strong>  From Ayurveda, rasa means essence or juice, and ayana means path.  Rasayana is the science of rejuvenation or 'juicing up' in order to live a healthy life.  It is a vibration, a way of life!  This is what The Juicy Effect is all about.",
  legal:
    'PT The Juicy Effect is a fully licenced PT PMA company proudly based in Bali, Indonesia since 2018.  All of our team members are citizens of Indonesia or have the required working permits for Indonesia.',
};

// Navigation labels are the exact labels of the source site.
export const NAV = [
  { label: 'Healing Sessions', href: '/healing-sessions' },
  { label: 'Healing Packages', href: '/healing-packages' },
  { label: 'Private Retreats', href: '/private-retreats' },
  { label: 'Workshops', href: '/workshops-events-learning' },
  { label: 'Online Courses', href: '/online' },
];

export const NAV_MORE = [
  { label: 'Blog', href: '/blog' },
  { label: 'Our Story', href: '/the-juicy-effect-story' },
  { label: 'Meet Sharon Marie', href: '/sharon-keating' },
  { label: 'Meet Julia', href: '/meet-julia' },
  { label: 'Meet Gita', href: '/meet-gita-sianipar' },
  { label: 'Meet Vickya', href: '/meet-vickya' },
  { label: 'Meet Jhanavikaa', href: '/meet-jhanavikaa' },
  { label: 'Things to do in Ubud', href: '/things-to-do-in-ubud' },
];

export const NAV_CONTACT = { label: 'Contact Us', href: '/contact' };
