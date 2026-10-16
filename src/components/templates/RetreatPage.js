import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Arrow from '@/components/ui/Arrow';
import Blocks from '@/components/content/Blocks';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import RelatedRail from '@/components/content/RelatedRail';
import BookingAside from '@/components/content/BookingAside';
import { chapterize } from '@/lib/chapters';
import { relatedInGroup, hubArtworkFor, stripTags } from '@/lib/content';
import s from './RetreatPage.module.css';

const slug = (t) =>
  t
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60);

// FAQ sections are authored as: h5 number, h5 question, answer paragraphs, hr.
function parseFaq(blocks) {
  const items = [];
  let cur = null;
  for (const b of blocks) {
    if (b.type === 'heading' && b.level === 5 && /^\d+\.?$/.test(b.text)) continue;
    if (b.type === 'heading' && b.level === 5) {
      cur = { q: b.html, a: [] };
      items.push(cur);
    } else if (b.type === 'hr') continue;
    else if (cur) cur.a.push(b);
  }
  return items;
}

export default function RetreatPage({ route, page }) {
  const first = page.sections[0].blocks;
  const title = first.find((b) => b.type === 'heading' && b.level <= 2);
  const heroImage = first.find((b) => b.type === 'image') || null;
  const heroRest = first.filter((b) => b !== title && b !== heroImage);
  const art = hubArtworkFor(route);
  const name = stripTags(title.html);

  // Classify the remaining source sections by their original theme.
  const parts = page.sections.slice(1).map((sec) => {
    const heading = sec.blocks.find((b) => b.type === 'heading');
    if (sec.theme === 'light-bold') return { kind: 'invite', sec };
    if (heading && /faq/i.test(heading.text)) return { kind: 'faq', heading, items: parseFaq(sec.blocks.slice(sec.blocks.indexOf(heading) + 1)) };
    return { kind: 'story', chapters: chapterize(sec.blocks) };
  });

  const toc = [];
  parts.forEach((p) => {
    if (p.kind === 'story') p.chapters.forEach((c) => c.title && toc.push({ id: slug(c.title.text), label: c.title.text }));
    if (p.kind === 'invite') {
      const h = p.sec.blocks.find((b) => b.type === 'heading');
      if (h) toc.push({ id: slug(h.text), label: h.text });
    }
    if (p.kind === 'faq') toc.push({ id: 'faqs', label: 'FAQs' });
  });

  const related = relatedInGroup(route);

  return (
    <article className={s.page}>
      <header className={s.hero}>
        <div className={`wrap ${s.heroGrid}`}>
          <div className={s.heroText}>
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Private Retreats', href: '/private-retreats' }, { label: name }]} />
            <SplitWords as="h1" className={`display ${s.title}`} html={title.html} />
            <div className={s.heroCopy} data-reveal="up">
              {heroRest.map((b, i) =>
                b.type === 'heading' ? <Html key={i} as="p" className={s.sub} html={b.html} /> : <Blocks key={i} blocks={[b]} />
              )}
            </div>
            <div className={s.heroCtas} data-reveal="up">
              <Link href="/contact" className="btn btn--solid">
                Book a discovery call <Arrow />
              </Link>
              {toc.length > 0 && (
                <a href={`#${toc[0].id}`} className="link-arrow">
                  Read about the retreat
                </a>
              )}
            </div>
          </div>
          <div className={`${s.heroMedia} ${heroImage ? s.photo : s.art}`} data-reveal={heroImage ? 'image' : 'up'} data-parallax={heroImage ? 10 : undefined}>
            {heroImage ? (
              <Picture src={heroImage.src} alt={heroImage.alt} sizes="(min-width: 1000px) 45vw, 100vw" fit="cover" priority />
            ) : (
              art && <Picture src={art.src} alt={art.alt} sizes="(min-width: 1000px) 40vw, 86vw" priority />
            )}
          </div>
        </div>
      </header>

      <div className={`wrap ${s.layout}`}>
        <nav className={s.toc} aria-label="On this page">
          <p className={s.tocLabel}>On this page</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={s.main}>
          {parts.map((p, k) => {
            if (p.kind === 'story') {
              return p.chapters.map((c, j) => (
                <section key={`${k}-${j}`} id={c.title ? slug(c.title.text) : undefined} className={s.chapter}>
                  {c.title && <Html as="h2" className={`h2 ${s.chapterTitle}`} html={c.title.html} data-reveal="up" />}
                  <div className="prose">
                    <Blocks blocks={c.blocks} sizes="(min-width: 1000px) 720px, 100vw" />
                  </div>
                </section>
              ));
            }
            if (p.kind === 'invite') {
              const h = p.sec.blocks.find((b) => b.type === 'heading');
              const body = p.sec.blocks.filter((b) => b !== h && b.type !== 'button');
              const btn = p.sec.blocks.find((b) => b.type === 'button');
              return (
                <section key={k} id={h ? slug(h.text) : undefined} className={s.invite} data-reveal="up">
                  {h && <Html as="h2" className="h2" html={h.html} />}
                  <div className={s.inviteBody}>
                    <Blocks blocks={body} />
                  </div>
                  {btn?.href && (
                    <Link href={btn.href} className="btn btn--solid">
                      {btn.label} <Arrow />
                    </Link>
                  )}
                </section>
              );
            }
            return (
              <section key={k} id="faqs" className={s.faq}>
                <Html as="h2" className="h2" html={p.heading.html} data-reveal="up" />
                <div className={s.faqList}>
                  {p.items.map((it, j) => (
                    <details key={j} className={s.faqItem}>
                      <summary>
                        <Html html={it.q} />
                        <span className={s.faqIcon} aria-hidden="true" />
                      </summary>
                      <div className={`prose ${s.faqAnswer}`}>
                        <Blocks blocks={it.a} />
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <BookingAside name={name} cta={{ label: 'Book a discovery call', href: '/contact' }} />
      </div>

      <RelatedRail title="Other private retreats" items={related} hubHref="/private-retreats" hubLabel="All private retreats" />
    </article>
  );
}
