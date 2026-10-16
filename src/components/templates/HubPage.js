import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Arrow from '@/components/ui/Arrow';
import Blocks from '@/components/content/Blocks';
import { navTitle, stripTags, img } from '@/lib/content';
import { CONTACT } from '@/data/site';
import s from './HubPage.module.css';

// Walks the hub's blocks in source order and gathers offer cards:
//  - a linked image with caption/button (sessions, packages, retreats, workshops)
//  - an image followed by heading + text + button (online courses)
function collect(blocks) {
  const seq = [];
  let i = 0;
  const pushCard = (card) => {
    const last = seq[seq.length - 1];
    if (last?.type === 'cards') last.items.push(card);
    else seq.push({ type: 'cards', items: [card] });
  };
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.type === 'image' && b.link) {
      pushCard({
        src: b.src,
        alt: b.alt,
        href: b.link,
        name: b.title ? stripTags(b.title) : navTitle(b.link) || b.alt,
        html: b.caption || '',
        cta: b.button?.label || 'Learn More',
      });
      i++;
      continue;
    }
    if (b.type === 'image' && blocks[i + 1]?.type === 'heading') {
      const card = { src: b.src, alt: b.alt, nameHtml: blocks[i + 1].html, name: blocks[i + 1].text, paras: [] };
      i += 2;
      while (i < blocks.length && blocks[i].type === 'p') card.paras.push(blocks[i++].html);
      if (blocks[i]?.type === 'button') {
        card.href = blocks[i].href;
        card.cta = blocks[i].label;
        i++;
      }
      pushCard(card);
      continue;
    }
    seq.push(b);
    i++;
  }
  return seq;
}

// Folds "heading + text + gallery + button (+ closing heading)" into one promo panel
// (e.g. "Our Healing Packages are popular too…" on /healing-sessions).
function groupPromo(seq) {
  const g = seq.findIndex((b) => b.type === 'gallery');
  if (g < 2 || seq[g - 2]?.type !== 'heading' || seq[g - 1]?.type !== 'p' || seq[g + 1]?.type !== 'button') return seq;
  const after = seq[g + 2]?.type === 'heading' ? seq[g + 2] : null;
  let start = g - 2;
  if (seq[start - 1]?.type === 'hr') start -= 1;
  const promo = { type: 'promo', heading: seq[g - 2], text: seq[g - 1], gallery: seq[g], button: seq[g + 1], after };
  return [...seq.slice(0, start), promo, ...seq.slice(g + (after ? 3 : 2))];
}

function Promo({ item }) {
  return (
    <section className={s.promo} aria-label={item.heading.text}>
      <div className={s.promoText} data-reveal="up">
        <Html as="h2" className={`h2 ${s.promoTitle}`} html={item.heading.html} />
        <Html as="p" className={s.promoLead} html={item.text.html} />
        {item.button.href && (
          <Link href={item.button.href} className="btn btn--solid">
            {item.button.label} <Arrow />
          </Link>
        )}
      </div>
      <ul className={s.promoGrid} data-reveal="stagger">
        {item.gallery.items.map((g, j) => {
          const name = (g.link && navTitle(g.link)) || g.alt;
          const inner = (
            <>
              <span className={s.promoArt}>
                <Picture src={g.src} alt="" sizes="(min-width: 1000px) 150px, 30vw" />
              </span>
              <span className={s.promoName}>{name}</span>
            </>
          );
          return (
            <li key={j}>
              {g.link ? (
                <Link href={g.link} className={s.promoItem}>
                  {inner}
                </Link>
              ) : (
                <div className={s.promoItem}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
      {item.after && <Html as="p" className={s.promoFoot} html={item.after.html} />}
    </section>
  );
}

// Splits "… Next Workshops: 13 October & 20 November 2026" from a workshop caption
// so the date line can be highlighted. The wording itself is unchanged.
function splitNext(html) {
  const m = html.match(/^(.*?)(\s*Next [Ww]orkshops?:.*)$/);
  return m ? [m[1], m[2].trim()] : [html, null];
}

function SessionsIndex({ items, startAt = 1 }) {
  return (
    <ol className={s.index}>
      {items.map((c, k) => (
        <li key={c.href + k} data-reveal="up">
          <Link href={c.href} className={s.row}>
            <span className={s.rowArt}>
              <Picture src={c.src} alt="" sizes="(min-width: 900px) 168px, 96px" />
            </span>
            <span className={s.rowText}>
              <span className={s.rowName}>{c.name}</span>
              <Html className={s.rowDesc} html={c.html} />
            </span>
            <span className={s.rowCta}>
              <span className="visually-hidden">{c.cta} about {c.name}</span>
              <Arrow size={22} />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

function PackageFeatures({ items, extra = [] }) {
  return (
    <div className={s.features}>
      {items.map((c, k) => (
        <article key={c.href} className={s.feature} data-reveal="up">
          <span className={s.featureArt}>
            <Picture src={c.src} alt="" sizes="190px" />
          </span>
          <div className={s.featureText}>
            <h2 className="h2">
              <Link href={c.href}>{c.name}</Link>
            </h2>
            <Html as="p" html={c.html} />
            <Link href={c.href} className="btn btn--sm">
              {c.cta} <Arrow />
            </Link>
          </div>
        </article>
      ))}
      {extra.length > 0 && (
        <aside className={s.featureNote} data-reveal="up">
          <Blocks blocks={extra} />
        </aside>
      )}
    </div>
  );
}

function RetreatPanels({ items }) {
  return (
    <div className={s.panels}>
      {items.map((c, k) => (
        <article key={c.href} className={s.panel}>
          <div className={s.panelArt} data-reveal="up">
            <Picture src={c.src} alt="" sizes="(min-width: 900px) 34vw, 86vw" />
          </div>
          <div className={s.panelText} data-reveal="up">
            <h2 className="h2">{c.name}</h2>
            <Html as="p" html={c.html} />
            <Link href={c.href} className="btn btn--solid">
              {c.cta} <Arrow />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function WorkshopPosters({ items }) {
  return (
    <div className={s.events}>
      {items.map((c) => {
        const [text, next] = splitNext(c.html);
        return (
          <article key={c.href} className={s.event} data-reveal="up">
            <Link href={c.href} className={s.eventImg} tabIndex={-1} aria-hidden="true">
              <Picture src={c.src} alt="" sizes="(min-width: 1000px) 46vw, 100vw" fit="cover" position="center 35%" />
              {next && <Html as="span" className={s.eventDate} html={next} />}
            </Link>
            <div className={s.eventBody}>
              <h2 className={s.eventTitle}>
                <Link href={c.href}>{c.name}</Link>
              </h2>
              <Html as="p" className={s.eventText} html={text} />
              <Link href={c.href} className="btn btn--solid btn--sm">
                {c.cta} <Arrow />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function CoursePairs({ items }) {
  return (
    <div className={s.courses}>
      {items.map((c, k) => (
        <article key={c.href || k} className={s.course}>
          <Link href={c.href} className={s.courseArt} tabIndex={-1} aria-hidden="true" data-reveal="image" data-parallax="10">
            <Picture src={c.src} alt="" sizes="(min-width: 900px) 48vw, 100vw" fit="cover" />
          </Link>
          <div className={s.courseText} data-reveal="up">
            <Html as="h2" className="h3" html={c.nameHtml} />
            {c.paras.map((p, j) => (
              <Html key={j} as="p" html={p} />
            ))}
            {c.href && (
              <Link href={c.href} className="btn">
                {c.cta} <Arrow />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

const RENDER = {
  sessions: SessionsIndex,
  packages: PackageFeatures,
  retreats: RetreatPanels,
  workshops: WorkshopPosters,
  online: CoursePairs,
};

export default function HubPage({ route, page, kind }) {
  const blocks = page.sections.flatMap((x) => x.blocks);
  const title = blocks.find((b) => b.type === 'heading');
  const after = blocks.slice(blocks.indexOf(title) + 1);
  // Intro = paragraphs (and a lone unlinked image) before the first card.
  const introEnd = after.findIndex((b) => (b.type === 'image' && (b.link || after[after.indexOf(b) + 1]?.type === 'heading')) || (b.type === 'p' && /^<strong><em>|^<em><strong>/.test(b.html)));
  const intro = after.slice(0, introEnd === -1 ? after.length : introEnd);
  const rest = after.slice(intro.length);
  const allSeq = groupPromo(collect(rest));
  // Short notes after the last group of cards: dropped on the retreats hub,
  // and set beside the last card on the packages hub.
  const lastCards = allSeq.map((x) => x.type).lastIndexOf('cards');
  const trailing = lastCards > -1 ? allSeq.slice(lastCards + 1).filter((b) => b.type === 'p') : [];
  const seq = trailing.length && (kind === 'retreats' || kind === 'packages') ? allSeq.filter((x) => !trailing.includes(x)) : allSeq;
  const extra = kind === 'packages' ? trailing : [];
  const introImage = intro.find((b) => b.type === 'image');
  const introText = intro.filter((b) => b.type !== 'image');
  const Cards = RENDER[kind];
  let counter = 1;
  // Fan of the hub's own first three images for the page head.
  const fan = introImage ? [] : seq.filter((x) => x.type === 'cards').flatMap((x) => x.items).slice(0, 3);
  const round = kind === 'sessions' || kind === 'packages';

  return (
    <div className={`${s.hub} ${s['hub_' + kind]}`}>
      <div className={s.band}>
      <header className={`wrap ${s.head} ${introImage ? s.headWithImage : ''} ${fan.length ? s.headWithFan : ''}`}>
        <div className={s.headText}>
          {title && <SplitWords as="h1" className={`display ${s.title}`} html={title.html} />}
          <div className={`${s.lead} prose`} data-reveal="up">
            <Blocks blocks={introText} />
          </div>
          {kind === 'workshops' && (
            <div className={s.headCtas} data-reveal="up">
              <a href={CONTACT.whatsapp.href} target="_blank" rel="noopener noreferrer" className="btn btn--solid btn--sm">
                Enquire on WhatsApp <Arrow />
              </a>
              <Link href="/contact" className="link-arrow">
                All contact options <Arrow />
              </Link>
            </div>
          )}
        </div>
        {fan.length > 0 && (
          <div className={`${s.fan} ${round ? s.fanRound : s.fanPhoto}`} aria-hidden="true">
            {fan.map((c, i) => (
              <span key={c.href || i} className={s.fanItem} data-reveal="up" data-speed={[-6, 6, -2][i]}>
                <Picture src={c.src} alt="" sizes="(min-width: 1000px) 260px, 40vw" fit="cover" />
              </span>
            ))}
          </div>
        )}
        {introImage && (
          <div className={s.headImage} data-reveal="image" data-parallax="8">
            <Picture src={introImage.src} alt={introImage.alt} sizes="(min-width: 900px) 60vw, 100vw" fit="cover" />
          </div>
        )}
      </header>
      </div>

      <div className={`wrap ${s.body}`}>
        {seq.map((item, k) => {
          if (item.type === 'cards') {
            const start = counter;
            counter += item.items.length;
            return <Cards key={k} items={item.items} startAt={start} extra={extra} />;
          }
          if (item.type === 'p' && /^<strong><em>|^<em><strong>/.test(item.html)) {
            return <Html key={k} as="h2" className={`h3 ${s.groupLabel}`} html={item.html} data-reveal="up" />;
          }
          if (item.type === 'hr') return <hr key={k} className={s.hr} />;
          if (item.type === 'promo') return <Promo key={k} item={item} />;
          if (item.type === 'gallery') {
            return (
              <ul key={k} className={s.miniRail} data-reveal="stagger">
                {item.items.map((g, j) => (
                  <li key={j}>
                    {g.link ? (
                      <Link href={g.link} aria-label={g.alt}>
                        <Picture src={g.src} alt="" sizes="160px" />
                      </Link>
                    ) : (
                      <Picture src={g.src} alt={g.alt} sizes="160px" />
                    )}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <div key={k} className={`prose ${s.note}`} data-reveal="up">
              <Blocks blocks={[item]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
