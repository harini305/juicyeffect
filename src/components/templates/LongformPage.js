import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Blocks from '@/components/content/Blocks';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import KeyFacts from '@/components/content/KeyFacts';
import BookingAside from '@/components/content/BookingAside';
import { chapterize } from '@/lib/chapters';
import { stripTags } from '@/lib/content';
import s from './LongformPage.module.css';

const EYEBROW = { guide: 'Visiting Ubud', space: 'Rent Our Space', legal: 'Legal', generic: 'The Juicy Effect' };

export default function LongformPage({ route, page, kind }) {
  const blocks = page.sections.flatMap((x) => x.blocks);
  const title = blocks.find((b) => b.type === 'heading');
  let rest = blocks.slice(blocks.indexOf(title) + 1);
  const subs = [];
  while (rest[0]?.type === 'heading' && rest[0].level >= 4) subs.push(rest.shift());
  // A leading photograph becomes the hero image (guide / space pages).
  let hero = null;
  if (kind !== 'legal') {
    const idx = rest.findIndex((b) => b.type === 'image');
    if (idx > -1 && idx < 4) {
      hero = rest[idx];
      rest = rest.filter((_, i) => i !== idx);
    }
  }
  const chapters = chapterize(rest);
  const legal = kind === 'legal';
  const name = stripTags(title.html);

  return (
    <article className={`${s.page} ${legal ? s.legal : ''} ${hero ? s.withImage : ''}`}>
      <div className={s.band}>
      <header className={`wrap ${s.hero}`}>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: name }]} />
        <SplitWords as="h1" className={`${legal ? 'h1' : 'display'} ${s.title}`} html={title.html} />
        {subs.map((b, i) => (
          <Html key={i} as="p" className={s.sub} html={b.html} data-reveal="up" />
        ))}
        {hero && (
          <div className={s.heroSide} data-reveal="image">
            <Picture src={hero.src} alt={hero.alt} sizes="(min-width: 1000px) 45vw, 100vw" fit="cover" priority />
          </div>
        )}
      </header>
      </div>

      {hero && (
        <div className={`wrap ${s.heroImgWrap}`}>
          <div className={s.heroImg} data-reveal="image" data-parallax="10">
            <Picture src={hero.src} alt={hero.alt} sizes="100vw" fit="cover" priority />
          </div>
        </div>
      )}

      {kind === 'space' && (
        <div className={`wrap ${s.facts}`}>
          <KeyFacts route={route} />
        </div>
      )}

      <div className={`wrap ${s.layout}`}>
        {legal && (
          <nav className={s.toc} aria-label="Sections">
            <p className={s.tocLabel}>Sections</p>
            <ol>
              {chapters
                .filter((c) => c.title)
                .map((c, i) => (
                  <li key={i}>
                    <a href={`#s-${i}`}>{c.title.text}</a>
                  </li>
                ))}
            </ol>
          </nav>
        )}
        <div className={s.main}>
          {chapters.map((c, i) => (
            <section key={i} id={c.title ? `s-${chapters.filter((x) => x.title).indexOf(c)}` : undefined} className={s.chapter}>
              {c.title && <Html as="h2" className={`h2 ${s.h}`} html={c.title.html} data-reveal="up" />}
              <div className="prose">
                <Blocks blocks={c.blocks} />
              </div>
            </section>
          ))}
        </div>
        {!legal && <BookingAside route={kind === 'space' ? route : null} name={kind === 'space' ? 'Rent Our Space' : null} />}
      </div>
    </article>
  );
}
