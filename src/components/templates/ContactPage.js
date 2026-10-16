import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Arrow from '@/components/ui/Arrow';
import ContactChannels from '@/components/site/ContactChannels';
import { CONTACT } from '@/data/site';
import s from './ContactPage.module.css';

export default function ContactPage({ page }) {
  const [one, two] = page.sections;
  const title = one.blocks.find((b) => b.type === 'heading');
  const lead = one.blocks.filter((b) => b.type === 'p');
  const reception = one.blocks.find((b) => b.type === 'image');
  const h2 = two.blocks.find((b) => b.type === 'heading');
  const paras = two.blocks.filter((b) => b.type === 'p');
  const team = two.blocks.find((b) => b.type === 'image');

  return (
    <div className={s.page}>
      <section className={`wrap ${s.top}`}>
        <div className={s.intro}>
          <SplitWords as="h1" className={`display ${s.title}`} html={title.html} />
          <div className={s.lead} data-reveal="up">
            {lead.map((b, i) => (
              <Html key={i} as="p" html={b.html} />
            ))}
          </div>
        </div>
        <div className={s.channels} data-reveal="up">
          <ContactChannels />
        </div>
      </section>

      {reception && (
        <div className={`wrap ${s.reception}`}>
          <div className={s.receptionImg} data-reveal="image" data-parallax="10">
            <Picture src={reception.src} alt={reception.alt} sizes="100vw" fit="cover" />
          </div>
        </div>
      )}

      <section className={`wrap ${s.find}`} aria-labelledby="find-h">
        <div>
          <Html as="h2" id="find-h" className="h2" html={h2.html} data-reveal="up" />
          <address className={s.address} data-reveal="up">
            <span className={s.addrLabel}>Address</span>
            {CONTACT.address.full}
            <a href={CONTACT.googleMaps} target="_blank" rel="noopener noreferrer" className="btn">
              Open in Google Maps <Arrow />
            </a>
          </address>
        </div>
        <div className="prose" data-reveal="up">
          {paras.map((b, i) => (
            <Html key={i} as="p" html={b.html} />
          ))}
        </div>
      </section>

      {team && (
        <figure className={`wrap ${s.team}`}>
          <div className={s.teamImg} data-reveal="image">
            <Picture src={team.src} alt={team.alt} sizes="100vw" />
          </div>
        </figure>
      )}
    </div>
  );
}
