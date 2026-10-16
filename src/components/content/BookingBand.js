import Link from 'next/link';
import ContactChannels from '@/components/site/ContactChannels';
import { CONTACT } from '@/data/site';
import s from './BookingBand.module.css';

// Shared closing band. Heading and wording are taken from the source Contact page.
export default function BookingBand({ heading = '<strong>For questions or bookings:</strong>' }) {
  return (
    <section className={s.band} aria-labelledby="booking-h">
      <div className={`wrap ${s.grid}`}>
        <div data-reveal="up">
          <h2 id="booking-h" className="h2" dangerouslySetInnerHTML={{ __html: heading }} />
          <p className={s.p}>
            The best way to contact us about availability for bookings is by messaging through <strong>WhatsApp</strong>. {CONTACT.centreManager} is our
            amazing Centre Manager and will respond to you as soon as possible.
          </p>
          <Link href="/contact" className="link-arrow">
            All contact details &amp; location
          </Link>
        </div>
        <div data-reveal="up">
          <ContactChannels compact />
        </div>
      </div>
    </section>
  );
}
