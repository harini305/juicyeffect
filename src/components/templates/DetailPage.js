import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Blocks from '@/components/content/Blocks';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import KeyFacts from '@/components/content/KeyFacts';
import BookingAside from '@/components/content/BookingAside';
import RelatedRail from '@/components/content/RelatedRail';
import YouTube from '@/components/content/YouTube';
import { chapterize } from '@/lib/chapters';
import { groupOf, relatedInGroup, hubArtworkFor, img, stripTags } from '@/lib/content';
import s from './DetailPage.module.css';

// Separates the first section into title / subtitles / intro / lead media.
export function splitHero(page) {
  const first = page.sections[0]?.blocks || [];
  const rest = page.sections.slice(1).flatMap((x) => x.blocks);
  const title = first.find((b) => b.type === 'heading');
  const afterTitle = first.slice(first.indexOf(title) + 1);
  const subs = [];
  const intro = [];
  let media = null;
  const overflow = [];
  for (const b of afterTitle) {
    if (!media && intro.length === 0 && b.type === 'heading' && b.level >= 4) subs.push(b);
    else if (!media && (b.type === 'video' || b.type === 'image')) media = b;
    else if (!media && b.type === 'p') intro.push(b);
    else overflow.push(b);
  }
  return { title, subs, intro, media, body: [...overflow, ...rest] };
}

const isTile = (src) => {
  const i = img(src);
  return i && i.width === i.height && /\.png$/i.test(src) && i.width <= 1100;
};

const VARIANT_LABEL = { journey: 'Healing package', event: 'Workshop in Ubud', course: 'Online course & certification' };

export default function DetailPage({ route, page, meta }) {
  const group = groupOf(route);
  const split = splitHero(page);
  const { title, subs, intro } = split;
  // A low-resolution lead photo would be blurry at hero size: keep it in the
  // body at its natural size and let the hub artwork lead instead.
  const smallLead = split.media?.type === 'image' && (img(split.media.src)?.width || 0) < 700;
  const media = smallLead ? null : split.media;
  const rawBody = smallLead ? [split.media, ...split.body] : split.body;
  const art = hubArtworkFor(route);
  // When the hero borrows the hub photo, don't repeat that photo in the body.
  const borrowed = !media && art ? art : null;
  const body = borrowed
    ? rawBody.filter((b) => !(b.type === 'image' && !b.caption && (b.src === borrowed.src || (b.assetId && b.assetId === borrowed.assetId))))
    : rawBody;
  const chapters = chapterize(body);
  const related = relatedInGroup(route).slice(0, 6);
  const name = stripTags(title?.html || page.navTitle);

  // Lead media: the page's own first image/video; the hub artwork for this page otherwise.
  const heroImage = media?.type === 'image' ? media : !media && art ? { src: art.src, alt: art.alt } : null;
  const tile = heroImage && isTile(heroImage.src);
  const heroVideo = media?.type === 'video' ? media : null;

  const variant = meta.variant || 'session';

  return (
    <article className={`${s.page} ${s[variant] || ''}`}>
      <div className={s.heroBand}>
      <header className={`wrap ${s.hero} ${heroVideo ? s.heroVideo : tile ? s.heroTile : s.heroPhoto}`}>
        <div className={s.heroText}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, group && { label: group.label, href: group.href }, { label: name }].filter(Boolean)} />
          {title && <SplitWords as="h1" className={`h1 ${s.title}`} html={title.html} />}
          {subs.map((b, i) => (
            <Html key={i} as="p" className={s.sub} html={b.html} data-reveal="up" />
          ))}
          {intro.length > 0 && (
            <div className={s.intro} data-reveal="up">
              {intro.map((b, i) => (
                <Html key={i} as="p" html={b.html} />
              ))}
            </div>
          )}
          <div className={s.factsCard}>
            <KeyFacts route={route} />
          </div>
        </div>

        {heroVideo && (
          <div className={s.heroMedia} data-reveal="up">
            <YouTube id={heroVideo.id} title={`${name} — video`} label={name} />
          </div>
        )}
        {heroImage && (
          <div className={`${s.heroMedia} ${tile ? s.tile : ''}`} data-reveal={tile ? 'up' : 'image'} data-parallax={tile ? undefined : 8}>
            <Picture src={heroImage.src} alt={heroImage.alt || ''} sizes="(min-width: 1000px) 46vw, 100vw" priority />
          </div>
        )}
      </header>
      </div>

      <div className={`wrap ${s.body}`}>
        <div className={s.chapters}>
        {chapters.map((c, i) => (
          <section key={i} className={`${s.chapter} ${s['k_' + c.kind] || ''}`}>
            {c.title ? (
              <div className={s.chapterHead}>
                <Html as="h2" className={s.chapterTitle} html={c.title.html} data-reveal="up" />
              </div>
            ) : (
              <div className={s.chapterHead} aria-hidden="true" />
            )}
            <div className={`prose ${s.chapterBody}`}>
              <Blocks blocks={c.blocks} videoLabel={name} />
            </div>
          </section>
        ))}
        </div>
        <BookingAside route={route} name={name} />
      </div>

      {group && (
        <RelatedRail title={`More ${group.label.toLowerCase()}`} items={related} hubHref={group.href} hubLabel={`All ${group.label.toLowerCase()}`} />
      )}
    </article>
  );
}
