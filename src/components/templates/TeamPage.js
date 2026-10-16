import Link from 'next/link';
import Picture from '@/components/ui/Picture';
import Html from '@/components/ui/Html';
import SplitWords from '@/components/ui/SplitWords';
import Blocks from '@/components/content/Blocks';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import RelatedRail from '@/components/content/RelatedRail';
import { TEAM } from '@/data/pages';
import { pagesLinkingTo, stripTags } from '@/lib/content';
import s from './TeamPage.module.css';

export default function TeamPage({ route, page }) {
  const [one, two] = page.sections;
  const title = one.blocks.find((b) => b.type === 'heading' && b.level <= 2);
  const heroRest = one.blocks.filter((b) => b !== title);
  const portrait = two.blocks.find((b) => b.type === 'image');
  const bio = two.blocks.filter((b) => b !== portrait);
  const [firstPara, ...restBio] = bio;
  const offers = pagesLinkingTo(route);
  const name = stripTags(title.html).replace(/^Meet\s*/, '');

  return (
    <article>
      <header className={`wrap ${s.hero}`}>
        <div className={s.text}>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Our Story', href: '/the-juicy-effect-story' }, { label: stripTags(title.html) }]} />
          <SplitWords as="h1" className={`display ${s.title}`} html={title.html.replace(/^Meet(?=<strong>|\S)/, 'Meet ')} />
          {heroRest.map((b, i) => (
            <Html key={i} as="p" className={s.sub} html={b.html} data-reveal="up" />
          ))}
        </div>
        {portrait && (
          <div className={s.portrait} data-reveal="up">
            <Picture src={portrait.src} alt={portrait.alt} sizes="(min-width: 1000px) 420px, 70vw" fit="cover" priority />
          </div>
        )}
      </header>

      <section className={`wrap ${s.bio}`}>
        {firstPara && <Html as="p" className={`lede ${s.first}`} html={firstPara.html} data-reveal="up" />}
        <div className={`prose ${s.rest}`} data-reveal="up">
          <Blocks blocks={restBio} />
        </div>
      </section>

      {offers.length > 0 && <RelatedRail title={`Sessions with ${name}`} items={offers} />}

      <nav className={`wrap ${s.team}`} aria-label="Meet the team">
        <p className={s.teamLabel}>Meet the team</p>
        <ul>
          {TEAM.map((m) => (
            <li key={m.href}>
              <Link href={m.href} aria-current={m.href === route ? 'page' : undefined}>
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
