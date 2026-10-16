// Route registry: which template renders each of the 51 captured page routes,
// which hub it belongs to (for breadcrumbs and related links) and a few
// art-direction choices. All copy comes from the generated page content.

export const GROUPS = {
  sessions: { label: 'Healing Sessions', href: '/healing-sessions' },
  packages: { label: 'Healing Packages', href: '/healing-packages' },
  retreats: { label: 'Private Retreats', href: '/private-retreats' },
  workshops: { label: 'Workshops', href: '/workshops-events-learning' },
  online: { label: 'Online Courses', href: '/online' },
  about: { label: 'Our Story', href: '/the-juicy-effect-story' },
};

const S = (group, extra = {}) => ({ type: 'detail', group, ...extra });

export const PAGE_TYPES = {
  '/': { type: 'home' },
  '/home': { type: 'home', canonical: '/' },
  '/healing-sessions': { type: 'hub-sessions' },
  '/healing-packages': { type: 'hub-packages' },
  '/private-retreats': { type: 'hub-retreats' },
  '/workshops-events-learning': { type: 'hub-workshops' },
  '/online': { type: 'hub-online' },
  '/contact': { type: 'contact' },
  '/blog': { type: 'blog' },

  '/energy-healing': S('sessions', { hero: 'video' }),
  '/shamanic-soul-retrieval': S('sessions', { hero: 'portrait' }),
  '/hypnotherapy': S('sessions'),
  '/trauma-release-with-breathwork': S('sessions'),
  '/energy-healing-access-consciousness': S('sessions', { hero: 'photo' }),
  '/womb-healing': S('sessions'),
  '/reiki-healing': S('sessions', { hero: 'photo' }),
  '/private-sound-therapy': S('sessions', { hero: 'portrait' }),
  '/vedic-astrology-navigate-the-unknown': S('sessions'),
  '/medical-jyotish': S('sessions'),
  '/distance-healing': S('sessions', { hero: 'video' }),
  '/start-your-next-chapter': S('sessions'),
  '/energetic-facelift-the-natural-alternative': S('sessions', { hero: 'photo', unlisted: true }),

  '/transformational-healing-package': S('packages', { variant: 'journey' }),
  '/soulmate-alchemy': S('packages', { variant: 'journey' }),
  '/womb-healing-immersion-package': S('packages', { variant: 'journey' }),
  '/activate-your-voice-package': S('packages', { variant: 'journey' }),
  '/ayurvedic-lifestyle-package': S('packages', { variant: 'journey' }),
  '/hypnotherapy-package': S('packages', { variant: 'journey' }),

  '/womb-sovereign-private-retreat': { type: 'retreat', group: 'retreats' },
  '/restorative-healing-personal-retreat': { type: 'retreat', group: 'retreats' },
  '/the-next-chapter-private-retreat': { type: 'retreat', group: 'retreats' },

  '/womb-healing-vision-quest-workshop': S('workshops', { variant: 'event' }),
  '/how-to-keep-your-energy-field-clear-workshop': S('workshops', { variant: 'event' }),
  '/self-love-through-radical-self-acceptance': S('workshops', { variant: 'event' }),
  '/discover-balance-and-harmony-with-breathwork': S('workshops', { variant: 'event' }),

  '/womb-alchemy-a-return-to-sovereignty': S('online', { variant: 'course' }),
  '/energy-mastery-1-to-1-spiritual-mentoring-program': S('online', { variant: 'course' }),
  '/practical-shamanism-for-the-real-world': S('online', { variant: 'course' }),
  '/the-medicine-path-practitioner-certification': S('online', { variant: 'course' }),

  '/the-juicy-effect-story': { type: 'story' },
  '/sharon-keating': { type: 'team', group: 'about' },
  '/meet-julia': { type: 'team', group: 'about' },
  '/meet-gita-sianipar': { type: 'team', group: 'about' },
  '/meet-vickya': { type: 'team', group: 'about' },
  '/meet-jhanavikaa': { type: 'team', group: 'about' },
  '/things-to-do-in-ubud': { type: 'guide' },
  '/rent-our-space': { type: 'space' },
  '/privacy-policy': { type: 'legal' },

  '/packages-1': { type: 'legacy' },
  '/personal-consultations': { type: 'legacy' },
  '/workshops': { type: 'legacy' },
};

export const TEAM = [
  { name: 'Sharon Marie', href: '/sharon-keating' },
  { name: 'Julia', href: '/meet-julia' },
  { name: 'Gita', href: '/meet-gita-sianipar' },
  { name: 'Vickya', href: '/meet-vickya' },
  { name: 'Jhanavikaa', href: '/meet-jhanavikaa' },
];
