import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SmartLink from '@/components/ui/SmartLink';
import Arrow from '@/components/ui/Arrow';
import YouTube from './YouTube';
import { img } from '@/lib/content';
import s from './Blocks.module.css';

const HEADING_TAG = { 1: 'h2', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' };

function Figure({ b, sizes }) {
  const i = img(b.src);
  if (!i) return null;
  const small = i.width <= 620;
  const portrait = i.width <= 560 && Math.abs(i.width - i.height) < 30;
  // Square service artworks (text baked in) read best at a modest size.
  const tileArt = !portrait && i.width === i.height && /\.png$/i.test(b.src) && i.width <= 1100;
  const pic = <Picture src={b.src} alt={b.alt || ''} sizes={small ? `${i.width}px` : sizes || '(min-width: 900px) 760px, 100vw'} />;
  return (
    <figure className={`${s.figure} ${small ? s.small : ''} ${portrait ? s.portrait : ''} ${tileArt ? s.tileArt : ''} ${b.note ? s.note : ''}`} data-reveal={small || tileArt ? 'up' : 'image'}>
      {b.link ? (
        <SmartLink href={b.link} className={s.figLink}>
          {pic}
        </SmartLink>
      ) : (
        pic
      )}
      {(b.title || b.caption) && (
        <figcaption>
          {b.title && <Html as="strong" className={s.figTitle} html={b.title} />}
          {b.caption && <Html html={b.caption} />}
        </figcaption>
      )}
      {b.button?.href && (
        <SmartLink href={b.button.href} className="link-arrow">
          {b.button.label} <Arrow />
        </SmartLink>
      )}
    </figure>
  );
}

function Gallery({ b }) {
  return (
    <ul className={s.gallery}>
      {b.items.map((it, i) => {
        const pic = <Picture src={it.src} alt={it.alt} sizes="(min-width: 900px) 220px, 45vw" />;
        return (
          <li key={i}>
            {it.link ? (
              <Link href={it.link} aria-label={it.alt}>
                {pic}
              </Link>
            ) : (
              pic
            )}
          </li>
        );
      })}
    </ul>
  );
}

function Amazon({ text }) {
  return (
    <aside className={s.legacyBlock} aria-label="Amazon affiliate block">
      <span className={s.legacyLabel}>Amazon affiliate block · original placement</span>
      {text ? <p>{text}</p> : <p className={s.muted}>The product details of this block were not captured from the original post.</p>}
      <p className={s.muted}>The affiliate product link is not active in this rebuild.</p>
    </aside>
  );
}

const isPortrait = (b) => {
  const i = b.type === 'image' && img(b.src);
  return i && i.width <= 560 && Math.abs(i.width - i.height) < 30 && !b.caption;
};

// Groups consecutive buttons so they sit in one row, and pairs a practitioner
// portrait with the paragraph that follows it.
function groupBlocks(blocks) {
  const out = [];
  for (let k = 0; k < blocks.length; k++) {
    const b = blocks[k];
    if (isPortrait(b) && blocks[k + 1]?.type === 'p') {
      out.push({ ...b, caption: blocks[k + 1].html, note: true });
      k++;
      continue;
    }
    const last = out[out.length - 1];
    if (b.type === 'button' && last?.type === 'buttons') last.items.push(b);
    else if (b.type === 'button') out.push({ type: 'buttons', items: [b] });
    else out.push(b);
  }
  return out;
}

export default function Blocks({ blocks, sizes, renderHostedVideo, videoLabel, skipButtons = false }) {
  return groupBlocks(blocks).map((b, i) => {
    switch (b.type) {
      case 'heading': {
        const Tag = HEADING_TAG[b.level] || 'h3';
        return <Html key={i} as={Tag} html={b.html} />;
      }
      case 'p':
        return <Html key={i} as="p" html={b.html} />;
      case 'list':
        return b.ordered ? (
          <ol key={i} style={b.start > 1 ? { '--start': b.start - 1 } : undefined}>
            {b.items.map((it, k) => (
              <Html key={k} as="li" html={it} />
            ))}
          </ol>
        ) : (
          <ul key={i}>
            {b.items.map((it, k) => (
              <Html key={k} as="li" html={it} />
            ))}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={i}>
            {b.paras.map((p, k) => (
              <Html key={k} as="p" html={p} />
            ))}
          </blockquote>
        );
      case 'hr':
        return <hr key={i} />;
      case 'image':
        return b.src ? <Figure key={i} b={b} sizes={sizes} /> : null;
      case 'gallery':
        return <Gallery key={i} b={b} />;
      case 'buttons':
        if (skipButtons) return null;
        return (
          <div key={i} className={s.buttons}>
            {b.items
              .filter((x) => x.href)
              .map((x, k) => (
                <SmartLink key={k} href={x.href} className="btn">
                  {x.label} <Arrow />
                </SmartLink>
              ))}
          </div>
        );
      case 'video':
        return (
          <div key={i} className={s.video}>
            <YouTube id={b.id} title={videoLabel || 'Video from The Juicy Effect'} label={videoLabel} />
          </div>
        );
      case 'hostedVideo':
        return renderHostedVideo ? <div key={i}>{renderHostedVideo(b)}</div> : null;
      case 'audio':
        return (
          <figure key={i} className={s.audio}>
            <figcaption>Audio from the original post</figcaption>
            <audio controls preload="none" src={b.src}>
              <a href={b.src}>Download the audio</a>
            </audio>
          </figure>
        );
      case 'accordion':
        return (
          <div key={i} className={s.accordion}>
            {b.items.map((it, k) => (
              <details key={k} className={s.acc}>
                <summary>
                  <Html html={it.title} />
                  <span className={s.accIcon} aria-hidden="true" />
                </summary>
                <div className={s.accBody}>
                  <Blocks blocks={it.blocks} />
                </div>
              </details>
            ))}
          </div>
        );
      case 'amazon':
        return <Amazon key={i} text={b.text} />;
      case 'adsense':
        return (
          <aside key={i} className={s.adSlot} aria-label="Advertisement placement">
            <span className={s.legacyLabel}>Advertisement placement</span>
            <span className={s.muted}>The original post carried a Google AdSense block here. Ads are not active in this rebuild.</span>
          </aside>
        );
      case 'social':
        return (
          <ul key={i} className={s.social}>
            {b.links.map((l) => (
              <li key={l}>
                <a href={l} target="_blank" rel="noopener noreferrer">
                  {l.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </a>
              </li>
            ))}
          </ul>
        );
      case 'blogSummary':
      case 'blogList':
        return (
          <ul key={i}>
            {b.items.map((it) => (
              <li key={it.href}>
                <Link href={it.href}>{it.title}</Link>
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}
