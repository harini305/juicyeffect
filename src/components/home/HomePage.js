import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Arrow from '@/components/ui/Arrow';
import ServiceOrbit from './ServiceOrbit';
import MomentsGrid from './MomentsGrid';
import { img, navTitle, getPage, posts, formatDate, stripTags, hubCards } from '@/lib/content';
import Marquee from './Marquee';
import { CONTACT } from '@/data/site';
import s from './HomePage.module.css';

// Hero card bullets as listed in the audit (02 §C, homepage hero card).
const HERO_POINTS = ['Release emotional blocks', 'Clear stagnant energy', 'Heal inner child wounds', 'Restore clarity and vitality', 'Reconnect with your authentic self.'];

// Original photographs from this website used for the local stand-in of the
// Instagram block (see MomentsGrid). Alt text from the asset manifest/pages.
const MOMENTS = [
  ['source-assets/pages/3b423e_Breathwork_workshop_at_The_Juicy_Effect.jpg', 'Breathwork workshop at The Juicy Effect'],
  ['source-assets/pages/ab0c8f_The_Juicy_Effect_Reception.jpg', 'The Juicy Effect wellbeing centre in Ubud'],
  ['source-assets/pages/ce9934_IMG_9945.jpg', 'Private sound therapy with singing bowls'],
  ['source-assets/pages/c2a8df_The_Juicy_Effect_is_located_in_Ubud_Bali.jpg', 'The Juicy Effect is located in Ubud Bali'],
  ['source-assets/pages/53a174_Shamanic_Soul_Retrieval_with_Sharon.jpg', 'Shamanic Soul Retrieval with Sharon'],
  ['source-assets/pages/74bc42_Rent_our_jungle-view_rooms_in_ubud_at_The_Juicy_Effect.jpg', 'Jungle-view space at The Juicy Effect'],
  ['source-assets/pages/a90ed2_Sharon_And_Ganesh_(1).jpg', 'Sharon at The Juicy Effect'],
  ['source-assets/pages/8e5a5b_Rent_wellbeing_space_in_ubud.jpg', 'Wellbeing space in Ubud'],
  ['source-assets/pages/8ff876_WhatsApp_Image_2024-08-22_at_9.50.50_AM.jpeg', 'Sound journey at The Juicy Effect'],
  ['source-assets/pages/095380_Rent_premium_space_in_ubud_at_The_Juicy_Effect.jpg', 'Flower offering at The Juicy Effect'],
  ['source-assets/pages/277d26_WhatsApp_Image_2023-08-22_at_2.25.17_PM.jpeg', 'Stone Buddha relief'],
  ['source-assets/pages/ac4598_The_Juicy_Effect_offers_Energy_Healing_sessions.jpg', 'Rice-field path'],
];

// Second hero photograph (original site image used on /private-sound-therapy).
const HERO_SMALL = ['source-assets/pages/ce9934_IMG_9945.jpg', 'Private sound therapy with singing bowls'];

const imgProps = (src) => {
  const i = img(src);
  return i && { src: i.src, srcSet: i.srcSet, width: i.width, height: i.height };
};

export default function HomePage({ page }) {
  const [s1, s2, s3, s4, s5, s6] = page.sections;
  const title = s1.blocks.find((b) => b.type === 'heading');
  const introParas = s1.blocks.filter((b) => b.type === 'p');
  const hero = s1.blocks.find((b) => b.type === 'image');
  const captionLead = (hero?.caption || '').split(':')[0] + ':';
  // Logo mark (the original favicon artwork) for the rotating badge.
  const MARK = imgProps('source-assets/brand/favicon.ico');
  const seenTick = new Set();
  const tickerItems = hubCards('/healing-sessions').filter((c) => !seenTick.has(c.href) && seenTick.add(c.href)).map((c) => ({ href: c.href, name: c.name }));

  // Section 2: sessions + packages
  const h2s = s2.blocks.filter((b) => b.type === 'heading');
  const p2s = s2.blocks.filter((b) => b.type === 'p');
  const galleries = s2.blocks.filter((b) => b.type === 'gallery');
  const buttons2 = s2.blocks.filter((b) => b.type === 'button');
  const sessions = galleries[0].items.map((it) => ({ href: it.link, name: navTitle(it.link) || it.alt, img: imgProps(it.src) }));
  const packages = galleries[1].items.map((it) => ({ href: it.link, name: (it.link && navTitle(it.link)) || it.alt, src: it.src }));

  // Section 3: retreats
  const h3 = s3.blocks.find((b) => b.type === 'heading');
  const retreatImg = s3.blocks.find((b) => b.type === 'image');
  const [retreatLead, retreatBody] = s3.blocks.filter((b) => b.type === 'p');
  const retreatBtn = s3.blocks.find((b) => b.type === 'button');

  // Section 4: trainings (teal) + the four course images from /online
  const h4 = s4.blocks.find((b) => b.type === 'heading');
  const p4 = s4.blocks.find((b) => b.type === 'p');
  const btn4 = s4.blocks.find((b) => b.type === 'button');
  const onlineBlocks = getPage('/online').sections.flatMap((x) => x.blocks);
  const courses = onlineBlocks
    .map((b, i) => (b.type === 'image' && onlineBlocks[i + 1]?.type === 'heading' ? { src: b.src, name: stripTags(onlineBlocks[i + 1].html), href: onlineBlocks.slice(i).find((x) => x.type === 'button')?.href } : null))
    .filter(Boolean);

  // Section 5: Instagram
  const h5 = s5.blocks.find((b) => b.type === 'heading');
  const igLink = s5.blocks.find((b) => b.type === 'p');
  const moments = MOMENTS.map(([src, alt]) => ({ ...imgProps(src), alt })).filter((m) => m.src);

  // Section 6: blog + online
  const [blogH, onlineH] = s6.blocks.filter((b) => b.type === 'heading');
  const summary = s6.blocks.find((b) => b.type === 'blogSummary');
  const [blogBtn, igBtn] = s6.blocks.filter((b) => b.type === 'button');
  const onlineP = s6.blocks.filter((b) => b.type === 'p').pop();
  const featured = summary.items.map((it) => posts.find((p) => p.url === it.href)).filter(Boolean);
  const [lead, ...more] = featured;

  return (
    <div className={s.home}>
      {/* ---------------------------------------------------------- hero */}
      <section className={s.hero} aria-labelledby="hero-h">
        <div className={`wrap ${s.heroGrid}`}>
          <div className={s.heroHead}>
            <SplitWords as="h1" id="hero-h" className={s.heroTitle} html={title.html} />
          </div>
          <div className={s.heroText}>
            <div className={s.heroIntro} data-reveal="up">
              {introParas.map((b, i) => (
                <Html key={i} as="p" html={b.html} />
              ))}
            </div>
            <div className={s.heroCtas} data-reveal="up">
              <Link href="/healing-sessions" className="btn btn--solid">
                Explore Healing Sessions <Arrow />
              </Link>
              {hero?.button && (
                <a href={hero.button.href} target="_blank" rel="noopener noreferrer" className={s.tour}>
                  <span className={s.tourIcon} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path d="M3 1.5v9l7.5-4.5z" fill="currentColor" />
                    </svg>
                  </span>
                  {hero.button.label}
                  <span className="visually-hidden">(YouTube, opens in a new tab)</span>
                </a>
              )}
            </div>
            <ul className={s.heroLinks} data-reveal="up">
              {[
                ['Healing Packages', '/healing-packages'],
                ['Private Retreats', '/private-retreats'],
                ['Workshops', '/workshops-events-learning'],
                ['Online Courses', '/online'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>
                    {label} <Arrow size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.collage}>
            <div className={s.backdrop} aria-hidden="true" data-speed="-6" />
            <div className={s.heroImg} data-reveal="image" data-speed="4">
              <Picture src={hero.src} alt="The Juicy Effect healing space in Ubud" sizes="(min-width: 1000px) 38vw, 80vw" fit="cover" position="38% center" priority />
            </div>
            <div className={s.heroSmall} data-reveal="up" data-speed="12">
              <Picture src={HERO_SMALL[0]} alt={HERO_SMALL[1]} sizes="(min-width: 1000px) 16vw, 36vw" fit="cover" />
            </div>
            <div className={s.badge} data-reveal="fade" aria-hidden="true">
              <svg className={s.ring} viewBox="0 0 200 200" data-spin>
                <defs>
                  <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle" startOffset="0">
                    THE JUICY EFFECT · UBUD · BALI · SINCE 2018 ·
                  </textPath>
                </text>
              </svg>
              <img src={MARK.src} srcSet={MARK.srcSet} sizes="70px" width={MARK.width} height={MARK.height} alt="" className={s.mark} />
            </div>
            <div className={s.heroCard} data-reveal="up" data-speed="-8">
              <p>{captionLead}</p>
              <ul>
                {HERO_POINTS.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Marquee items={tickerItems} />
      </section>



      {/* --------------------------------------------------- sessions orbit */}
      <ServiceOrbit items={sessions}>
        <Html as="h2" id="orbit-h" className="h1" html={h2s[0].html} />
        <Html as="p" className={s.orbitLead} html={p2s[0].html} />
        <div>
          <Link href={buttons2[0].href} className="btn">
            {buttons2[0].label} <Arrow />
          </Link>
        </div>
      </ServiceOrbit>

      {/* ------------------------------------------------------- packages */}
      <section className={s.packages} aria-labelledby="pk-h">
        <div className={`wrap ${s.pkGrid}`}>
          <div className={s.pkText}>
            <Html as="h2" id="pk-h" className="h1" html={h2s[1].html} data-reveal="up" />
            <Html as="p" html={p2s[1].html} data-reveal="up" />
            <div data-reveal="up">
              <Link href={buttons2[1].href} className="btn">
                {buttons2[1].label} <Arrow />
              </Link>
            </div>
          </div>
          <ul className={s.pkList}>
            {packages.map((p, i) => {
              const art = <Picture src={p.src} alt="" sizes="(min-width: 1000px) 22vw, 42vw" />;
              return (
                <li key={i} className={s.pkItem} data-reveal="up">
                  {p.href ? (
                    <Link href={p.href} className={s.pkLink}>
                      <span className={s.pkArt}>{art}</span>
                      <span className={s.pkName}>{p.name}</span>
                    </Link>
                  ) : (
                    <div className={s.pkLink}>
                      <span className={s.pkArt}>{art}</span>
                      <span className={s.pkName}>{p.name}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------- retreats */}
      <section className={s.retreats} aria-labelledby="rt-h">
        <div className={`wrap ${s.rtGrid}`}>
          <div className={s.rtImg} data-reveal="image" data-parallax="14">
            <Picture src={retreatImg.src} alt="Private villa pool at The Juicy Effect" sizes="(min-width: 1000px) 58vw, 100vw" fit="cover" />
          </div>
          <div className={s.rtText}>
            <SplitWords as="h2" id="rt-h" className="h1" html={h3.html} />
            <Html as="p" className={s.rtLead} html={retreatLead.html} data-reveal="up" />
            <Html as="p" html={retreatBody.html} data-reveal="up" />
            <div data-reveal="up">
              <Link href={retreatBtn.href} className={`btn btn--solid ${s.upper}`}>
                {retreatBtn.label} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ trainings */}
      <section className={s.trainings} aria-labelledby="tr-h">
        <div className={`wrap ${s.trGrid}`}>
          <div>
            <SplitWords as="h2" id="tr-h" className="display" html={h4.html} />
          </div>
          <div className={s.trBody} data-reveal="up">
            <Html as="p" html={p4.html} />
            <Link href={btn4.href} className="btn">
              {btn4.label} <Arrow />
            </Link>
          </div>
        </div>
        <ul className={`wrap ${s.trCourses}`} data-reveal="stagger">
          {courses.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className={s.trCourse}>
                <span className={s.trImg}>
                  <Picture src={c.src} alt="" sizes="(min-width: 900px) 22vw, 70vw" fit="cover" />
                </span>
                <span>{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ------------------------------------------------------ instagram */}
      <section className={`wrap section ${s.moments}`} aria-labelledby="ig-h">
        <div className={s.momentsHead}>
          <Html as="h2" id="ig-h" className="h1" html={h5.html} data-reveal="up" />
          <div className={s.momentsNote} data-reveal="up">
            <p>
              Photographs from around the centre. For the latest posts, visit us on Instagram at{' '}
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
                {CONTACT.instagramHandle}
              </a>
              .
            </p>
            {igLink && <Html as="p" className={s.igLink} html={igLink.html} />}
          </div>
        </div>
        <MomentsGrid photos={moments} />
      </section>

      {/* ------------------------------------------------------------ blog */}
      <section className={s.blog} aria-labelledby="blog-h">
        <div className="wrap">
          <div className={s.blogHead}>
            <Html as="h2" id="blog-h" className="h1" html={blogH.html} data-reveal="up" />
            <Link href={blogBtn.href} className="link-arrow">
              {blogBtn.label} <Arrow />
            </Link>
          </div>
          <div className={s.blogGrid}>
            {lead && (
              <article className={s.blogLead}>
                <Link href={lead.url} className={s.blogLeadImg} tabIndex={-1} aria-hidden="true" data-reveal="image">
                  <Picture src={lead.featured} alt="" sizes="(min-width: 1000px) 55vw, 100vw" fit="cover" />
                </Link>
                <div data-reveal="up">
                  <p className={s.date}>{formatDate(lead.date)}</p>
                  <h3 className="h2">
                    <Link href={lead.url}>{lead.title}</Link>
                  </h3>
                  <Html as="p" className={s.excerpt} html={lead.excerpt} />
                  <Link href={lead.url} className="link-arrow">
                    Read more <Arrow />
                  </Link>
                </div>
              </article>
            )}
            <ol className={s.blogList}>
              {more.map((p) => (
                <li key={p.url} data-reveal="up">
                  <Link href={p.url} className={s.blogItem}>
                    <span className={s.blogThumb}>
                      <Picture src={p.featured} alt="" sizes="120px" fit="cover" />
                    </span>
                    <span>
                      <span className={s.date}>{formatDate(p.date)}</span>
                      <span className={s.blogTitle}>{p.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- online */}
      <section className={s.online} aria-labelledby="online-h">
        <div className={`wrap ${s.onGrid}`}>
          <SplitWords as="h2" id="online-h" className="display" html={onlineH.html} />
          <div className={s.onSide} data-reveal="up">
            <Html as="p" className={s.onP} html={onlineP.html} />
            <div className={s.onActions}>
              <a href={igBtn.href} target="_blank" rel="noopener noreferrer" className="btn btn--solid">
                {igBtn.label} <Arrow />
              </a>
              <Link href="/contact" className="link-arrow">
                Contact Us <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
