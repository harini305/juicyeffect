import { CONTACT } from '@/data/site';
import Arrow from '@/components/ui/Arrow';
import s from './ContactChannels.module.css';

// Contact channels exactly as published on the source Contact page.
export const CHANNELS = [
  { key: 'whatsapp', label: 'WhatsApp', value: CONTACT.whatsapp.display, href: CONTACT.whatsapp.href },
  { key: 'messenger', label: 'Facebook / Messenger', value: 'facebook.com/thejuicyeffect', href: CONTACT.messenger },
  { key: 'instagram', label: 'Instagram', value: CONTACT.instagramHandle, href: CONTACT.instagram },
  { key: 'email', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function ContactChannels({ tone = 'light', compact = false, include }) {
  const list = include ? CHANNELS.filter((c) => include.includes(c.key)) : CHANNELS;
  return (
    <ul className={`${s.list} ${tone === 'dark' ? s.dark : ''} ${compact ? s.compact : ''}`}>
      {list.map((c) => {
        const ext = c.href.startsWith('http');
        return (
          <li key={c.key}>
            <a href={c.href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={s.row}>
              <span className={s.label}>{c.label}</span>
              <span className={s.value}>{c.value}</span>
              <Arrow />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
