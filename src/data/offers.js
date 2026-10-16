// Offer facts used for the "at a glance" panels on detail pages.
// Copied verbatim from docs/source-audit/02-content-preservation-checklist.md §B,
// which in turn quotes each page. The full original wording (including the
// approximate USD conversions) always remains in the page body as well.
//
// `conflict` marks facts the source site states inconsistently. They are shown
// side by side, never resolved. Prices go stale — confirm with the owner.

export const OFFERS = {
  '/energy-healing': {
    duration: 'Approximately 90 minutes (2-hour sessions available)',
    price: ['IDR 2,800,000 (about US$158)', '2 hours: IDR 3,500,000', '3-session package: IDR 8,000,000 (about US$450)'],
    with: 'Sharon Marie',
    where: 'Ubud and Online',
  },
  '/shamanic-soul-retrieval': {
    duration: '90 minutes',
    price: ['IDR 2,800,000 (approximately $US157)'],
    with: 'Sharon',
  },
  '/hypnotherapy': {
    duration: 'First session 90 minutes',
    price: ['IDR 2,400,000 (about US$136)', '2 sessions: IDR 4,500,000', '3 sessions: IDR 6,600,000'],
    with: 'Sharon',
  },
  '/trauma-release-with-breathwork': {
    duration: null,
    conflict: {
      label: 'Duration',
      values: ['“120-minute private session” (introduction)', '“approximately 90 minutes” (Investment section)'],
    },
    price: ['Single: IDR 1,900,000 (about US$100)', 'Couple: IDR 2,800,000'],
    with: 'Gita',
  },
  '/energy-healing-access-consciousness': {
    duration: '75–90 minutes (couple 90 minutes)',
    price: ['IDR 1,800,000 (about US$100)', 'Couple: IDR 2,800,000 (about US$160)'],
    with: 'Julia',
  },
  '/womb-healing': {
    duration: 'Approximately 2 hours 15 minutes',
    price: ['IDR 3,500,000 (approximately US$197)'],
    with: 'Sharon Marie',
  },
  '/reiki-healing': {
    duration: '75–90 minutes',
    price: ['IDR 1,800,000 (about US$100)', 'Couple: IDR 2,800,000'],
  },
  '/private-sound-therapy': {
    duration: 'Approximately 90 minutes',
    price: ['IDR 1,600,000 (about US$90)'],
    with: 'Vickya',
  },
  '/vedic-astrology-navigate-the-unknown': {
    duration: '60–75 minutes',
    price: ['IDR 2,300,000 (approx US$135)'],
  },
  '/medical-jyotish': {
    duration: '60–75 minutes',
    price: ['IDR 1,500,000 (approx US$100)'],
    with: 'Jhaanavikaa',
  },
  '/distance-healing': {
    duration: '90–100 minutes',
    price: ['IDR 2,400,000 (about US$150)'],
    with: 'Sharon',
    where: 'Online',
  },
  '/start-your-next-chapter': {
    duration: 'Approximately 90 minutes',
    price: ['IDR 2,800,000 (approx US$155)'],
  },
  '/energetic-facelift-the-natural-alternative': {
    duration: '75–90 minutes',
    price: ['IDR 1,600,000 (about US$105)'],
    with: 'Julia',
  },
  '/transformational-healing-package': {
    duration: '4 × 90-minute sessions',
    price: ['IDR 8,800,000 (approx. US$495)'],
  },
  '/soulmate-alchemy': {
    duration: '2 sessions of approximately 90 minutes',
    price: ['IDR 4,700,000 (approximately US$265)'],
  },
  '/womb-healing-immersion-package': {
    duration: '3 × 2 hours 15 minutes + 60 minutes',
    price: ['IDR 11,200,000 (approx. US$630)'],
  },
  '/activate-your-voice-package': {
    duration: '90 minutes + 2 hours 15 minutes + 60–90 minutes',
    price: ['IDR 7,100,000 (approximately US$410)'],
  },
  '/ayurvedic-lifestyle-package': {
    duration: '2 sessions / 4 hours',
    price: ['IDR 5,500,000 (approx. US $310)'],
  },
  '/hypnotherapy-package': {
    duration: '90 + 60 minutes / 90 + 2 × 60 minutes',
    price: ['2 sessions: IDR 4,500,000', '3 sessions: IDR 6,600,000'],
  },
  '/how-to-keep-your-energy-field-clear-workshop': {
    duration: 'Full day',
    price: ['1.5 Million Rupiah (approximately US$100), including lunch from Unity Café'],
  },
  '/self-love-through-radical-self-acceptance': {
    duration: 'Full day',
    price: ['1.5 Million Rupiah (approximately US$100), including lunch'],
  },
  '/womb-healing-vision-quest-workshop': {
    duration: 'Full day',
    price: ['IDR 1.5 million (about US$85), including lunch at Unity Café'],
  },
  '/discover-balance-and-harmony-with-breathwork': {
    duration: '2 hours',
    price: ['IDR 350,000 per person'],
  },
  '/rent-our-space': {
    duration: 'Hourly, half day or full day',
    price: ['Prices start from just 150k per hour'],
  },
};
