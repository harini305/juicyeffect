import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Blocks from '@/components/content/Blocks';
import { chapterize } from '@/lib/chapters';
import s from './StoryPage.module.css';

// The source page embeds a Squarespace-hosted portrait video (HLS only, not
// downloadable). Instead of inventing media, the slot becomes a typographic
// panel built from the words of the paragraph that follows it.
function RasayanaPanel() {
  return (
    <figure className={s.rasayana} data-reveal="up" aria-label="Rasa means essence or juice, ayana means path: Rasayana">
      <div className={s.rasaWord}>
        <span>rasa</span>
        <small>essence · juice</small>
      </div>
      <span className={s.plus} aria-hidden="true">
        +
      </span>
      <div className={s.rasaWord}>
        <span>ayana</span>
        <small>path</small>
      </div>
      <div className={s.rasaResult}>
        <span>Rasayana</span>
      </div>
    </figure>
  );
}

export default function StoryPage({ page }) {
  const [one, two] = page.sections;
  const title = one.blocks.find((b) => b.type === 'heading');
  const tagline = one.blocks.find((b) => b.type === 'p');
  const chapters = chapterize(two.blocks);

  return (
    <article className={s.page}>
      <header className={`wrap ${s.hero}`}>
        <SplitWords as="h1" className={`display ${s.title}`} html={title.html} />
        {tagline && <Html as="p" className={s.tagline} html={tagline.html} data-reveal="up" />}
      </header>

      {chapters.map((c, i) => {
        const images = c.blocks.filter((b) => b.type === 'image');
        const text = c.blocks.filter((b) => b.type !== 'image');
        const hasVideo = c.blocks.some((b) => b.type === 'hostedVideo');
        const layout = `${i % 2 === 0 ? s.left : s.right} ${!hasVideo && images.length === 0 ? s.solo : ''}`;
        return (
          <section key={i} className={`${s.chapter} ${layout}`}>
            <div className={`wrap ${s.grid}`}>
              <div className={s.text}>
                {c.title && <Html as="h2" className={`h2 ${s.h}`} html={c.title.html} data-reveal="up" />}
                <div className="prose" data-reveal="up">
                  <Blocks blocks={text.filter((b) => b.type !== 'hostedVideo')} />
                </div>
              </div>
              <div className={s.media}>
                {hasVideo && <RasayanaPanel />}
                {!hasVideo &&
                  images.map((im, k) => (
                    <div key={k} className={`${s.frame} ${k === 1 ? s.offset : ''}`} data-reveal="image" data-parallax="10">
                      <Picture src={im.src} alt={im.alt} sizes="(min-width: 1000px) 40vw, 100vw" fit="cover" />
                    </div>
                  ))}
              </div>
            </div>
            {hasVideo &&
              images.map((im, k) => (
                <div key={k} className={`wrap ${s.wide}`}>
                  <div className={s.wideFrame} data-reveal="image">
                    <Picture src={im.src} alt={im.alt} sizes="100vw" />
                  </div>
                </div>
              ))}
          </section>
        );
      })}
    </article>
  );
}
