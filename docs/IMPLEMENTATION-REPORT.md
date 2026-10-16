# The Juicy Effect — Phase 2 implementation report

**Status:** complete local build. **Not pushed to GitHub, not deployed.** The workspace is not a git repository.
**Built:** 2026-10-16 · Next.js 16.4.2 (App Router, JavaScript) · React 19.3 · GSAP 3.15 + ScrollTrigger.

---

## 1. Running it

```bash
npm install
npm run images        # one-off: WebP derivatives + favicon set (already generated)
npm run dev           # or: npm run build && npm start
npm run check-routes  # needs a running server; writes docs/implementation/route-checklist.md
```

Verified locally on **http://localhost:3460**. Ports 3000/3100 were already in use by other projects on this machine. `next dev -p <port>` works on any free port.

## 2. Stack and dependencies

| Package | Why |
|---|---|
| `next`, `react`, `react-dom` | App Router site, mostly static generation |
| `gsap` (includes ScrollTrigger) | Scroll and entrance motion |
| `lenis` | Smooth inertial scrolling, synced to ScrollTrigger |
| `sharp` (dev only) | One-off local image optimisation script |

There is no backend, database, CMS, form service, analytics script or paid service. Poppins loads through `next/font/google` with weights 300/500/700, normal and italic.

## 3. Content pipeline (source of truth: the Phase 1 audit)

- `scripts/build-content.mjs` parses the verbatim Markdown in `docs/source-audit/content/` into `src/data/generated/pages.json` and `posts.json`. It runs before every `npm run build`.
  - It keeps headings, paragraphs, bold/italic, lists, quotes, links, buttons, images with captions, galleries, accordions, embeds and the original section order.
  - Images resolve to local files through `asset-manifest.csv`, by exact URL or by Squarespace asset id. **0 unresolved.**
- **Whitespace restoration:** the Phase 1 extractor dropped spaces between inline elements, for example "is a**wellbeing**" and "Transformation?**Our". The parser restores exactly one space where an emphasis or link boundary joins two words. A scan of all pages and posts now finds **0** joined words at tag boundaries. No wording was changed.
- **Entity decoding:** post titles such as "Manifesting &amp;amp; Energy Clearing" are decoded.
- **Not altered:** source typos and inconsistencies ("Devine Feminine", "Lifstlyple", "A single sessions goes", etc.). They are preserved as instructed.
- Editable data:
  - `src/data/site.js`: contact details, hours (with their conflicts), navigation, footer copy, announcement
  - `src/data/offers.js`: per-offer duration, price and practitioner panels, quoted from each page
  - `src/data/pages.js`: route → template, group and art direction

## 4. Routes

| Group | Count | Implementation |
|---|---|---|
| Page routes | **51 / 51** | `/` plus `app/[slug]` (static), with a template chosen per page type |
| Blog posts | **79 / 79** | `app/blog/[...slug]`. **Both** URL formats are kept exactly (`/blog/YYYY/M/D/slug` and `/blog/slug`) |
| Category archives | **3** | `/blog/category/Personal`, `/Business`, `/Small+Bites` (static) |
| Tag archives | **152** | `/blog/tag/<Tag+With+Plus>`, rendered on request from the metadata |

**Archive count note:** the audit text says "154 tags / 157 archives", but its own taxonomy listing (`blog-tags-and-categories.md`) and the post metadata contain **152 tags + 3 categories = 155 archives**. All 155 enumerated archives are implemented.

- Two tags differ only in case ("The Juicy Effect" and "the juicy effect"). Both are distinct URLs and both work.
- Tag pages render on request rather than as prebuilt files. Prebuilt files for those two tags would collide on case-insensitive filesystems such as Windows.

The full verification output is in [implementation/route-checklist.md](implementation/route-checklist.md). Every route returned HTTP 200 with an `<h1>`, post H1s match their titles, and every archive lists exactly the posts its metadata names. All **280** unique internal links found in the rendered HTML resolve.

### Duplicate and legacy pages

- `/home` renders the homepage, with a canonical tag pointing to `/`.
- `/packages-1`, `/personal-consultations` and `/workshops` keep their routes. They show only their original gallery images, linking to the original destinations (the fixed destination where the original was broken). No text was invented.
- `/energetic-facelift-the-natural-alternative`, `/rent-our-space` and `/privacy-policy` are kept with their full content. Rent Our Space and the Privacy Policy are now linked from the footer.

## 5. Design direction

**"Rasayana editorial":** white pages, near-black ink, light Poppins headings with bold emphasis words, one signature teal (#1AC1B9) used for large blocks, and a charcoal (#454545) footer. The logo's teal, lime, orange and purple appear only as a thin "spectrum" signature line. Outlined pill buttons are kept for primary actions, and text-link arrows are used elsewhere.

Each page type has its own composition:

- **Home:**
  - Arched hero photo with a teal card listing the five hero points
  - A **pinned horizontal "orbit"** of the ten circular session artworks
  - A packages "constellation" beside sticky text
  - A full-bleed retreat feature
  - A teal learning band with the four course photos
  - A local photo grid
  - Editorial blog lead plus list
  - A dark closing contact band
- **Hubs:**
  - Sessions: numbered editorial index with hover-rotating art
  - Packages: alternating feature splits
  - Retreats: sticky-art panels
  - Workshops: offset posters with highlighted "Next workshop" dates
  - Online: large photo/text pairs
- **Details:** hero variant (video, round artwork or photo), an "at a glance" facts panel, and a chaptered body with sticky numbered chapter titles. The Investment section sits in a tinted panel. Packages render sessions as journey steps; courses render modules as a syllabus.
- **Retreats:** long-form with a sticky "On this page" rail, a teal discovery-call band, and a numbered FAQ disclosure list.
- **Others:**
  - Team pages: circular portrait, plus "Sessions with …" derived from pages that actually link to that person
  - Story: alternating chapters, with a typographic Rasayana panel
  - Contact: large channel list
  - Legal: sticky section index
  - Blog: lead article, year-grouped archive and tag cloud
  - Branded 404 page

## 6. Images

| | |
|---|---|
| Original files | 324 images + favicon + 1 MP3 in `source-assets/`, **untouched** |
| Derivatives | **962 WebP files** in `public/img/` at 480, 960, 1600 and 2200 px, capped at the original width and never upscaled; quality 80 |
| Map | `src/data/generated/images.json` (original path → width, height, variants) |
| Default-size payload | about 22 MB for one default-size copy of every image, versus 220 MB of originals. Pages request only the sizes they need via `srcset` and `sizes` |
| Favicon | `src/app/favicon.ico` (32 px), `icon.png` (192), `apple-icon.png` (180), all from the original favicon artwork |
| Share image | `public/share-logo.png`, a copy of the original 300 px share logo |

Images are plain `<img>` elements with `srcset`, explicit width and height, and lazy loading below the fold. Nothing uses `/_next/image`, and there are no remote image requests.

- **Circular service artworks** (text baked in) are always shown whole, never cropped.
- **13 posts** reuse their featured photo as the first body image (identical file, different URL). The duplicate hero is suppressed.
- **Workshop heroes** that borrow the hub photo don't repeat it in the body.

## 7. Motion (GSAP + ScrollTrigger)

- `MotionController` is a single client component. It re-initialises on each route inside a `gsap.context` and `gsap.matchMedia`, and reverts on change.
  - Word-masked heading reveals: the words are split on the server, with no client DOM surgery.
  - Fade/rise and staggered entrances.
  - Clip-path image wipes with an inner zoom.
  - Desktop-only image parallax.
  - Positions are recalculated after fonts and images load (debounced).
- **Home orbit:** a pinned horizontal scrub with `containerAnimation` tile rotation on wide screens. On small screens it becomes a native swipe rail.
- **Header:** hides on scroll down and reappears on scroll up. The mobile menu opens with a clip-path wipe and a staggered link timeline.
- **Photo grid:** "Load more" staggers new items in.
- **Reduced motion:** when `prefers-reduced-motion` is set, nothing animates and all content is visible. If the script fails, a CSS fallback reveals content after 2.5 s.
- **Verified:** with motion on, 0 elements remain hidden after scrolling. The orbit pins and its track translates (measured −828 px mid-scroll).

## 8. Broken-link corrections

| Source link | Found on | Result |
|---|---|---|
| `jason-buchanan-l386.squarespace.com/sharon-keating` (staging) | /distance-healing | → `/sharon-keating` |
| `/hypnotherapy-packages-the-juicy-effect` | /, /home, /healing-sessions, /packages-1 | → `/hypnotherapy-package` |
| `/courses-certifications` | /healing-packages, /private-retreats | → `/online` |
| `/julia-guerre` | Energetic Facelift | → `/meet-julia` |
| `/meet-gita-desyanti` | Trauma Release with Breathwork | → `/meet-gita-sianipar` |
| `/the-next-chapter-personal-retreat` | /packages-1 | → `/the-next-chapter-private-retreat` |
| `/energetic-alignment-package` ("Deep Energy Healing Package") | Home carousel | **No such page exists.** The tile artwork is shown, unlinked |
| `/jason-buchanan` | Our Story, Start Your Next Chapter | **No Jason page exists.** The text "Meet Jason" is kept, unlinked. No biography was created |
| Legacy retired offers: `/the-33-day-challenge`, `/i-choose-juicy`, `/classes`, `/career-lifestyle-transition`, `/discover-your-energetic-flow-in-ubud`, `/yoga-as-a-way-of-life-for-everyday-people`, `/improve-workplace-performance-…`, `/get-started-to-improve-performance`, `/products?tag=…` ×2 | 11 old blog posts | Link removed, wording kept. The "Contact Us" button pointing to `/get-started-to-improve-performance` was dropped |
| `http://journey.It` (malformed auto-link) | From The Journey: The Joy That Heals | Link removed |
| "More" → `/about` | Source mobile menu | Not carried over |

Permanent redirects for the five verified fixes are also in `next.config.js`. No link points to any Squarespace domain; the route check scans for this.

## 9. Conflicting business facts (preserved, not resolved)

| Fact | Values on the source | How the rebuild handles it |
|---|---|---|
| Phone | WhatsApp **+62 813 3890 6433** (Contact page) vs **+62 82145015707** (settings / JSON-LD) | Shared components use the Contact-page WhatsApp number, which the source calls the best channel. The settings number is stored in `site.js` marked unconfirmed and is not displayed. No phone number is published in JSON-LD |
| Hours | "9am-5pm Monday to Friday (Bali time)" (pages) vs Mon–Sat 9–5 (settings) vs Mon–Fri 09:00–15:00 (JSON-LD) | Each page shows its own sentence. Shared components and JSON-LD show **no** hours. All three values are recorded in `site.js` |
| Sharon's experience | "15+ years" vs "10+ years" (/sharon-keating, /shamanic-soul-retrieval) | Kept as written on each page |
| Breathwork duration | "120-minute" (intro) vs "approximately 90 minutes" (Investment) | The facts panel shows **both**, with the note "Both durations appear on this page." |
| USD conversions | IDR 2,800,000 ≈ US$155/157/158/160; IDR 1.5M ≈ US$85/100 | Kept per page, verbatim |
| Name spellings | Jhanavikaa / Jhaanavikaa; Sharon Marie / Sharon / Sharon Keating | Kept per page |

## 10. Missing media and functionality

- **Our Story video:** HLS-only, not downloaded, and ffmpeg was not installed. Its slot is a typographic **rasa + ayana = Rasayana** panel built from the paragraph that follows it on the source page. No replacement video was invented. The original MP4 is needed from the owner.
- **Pre-call questionnaire:** mentioned only in the retreat FAQ answers. That text is kept verbatim. No form, fields or endpoint were created; calls to action go to `/contact`. A real form needs an owner decision and a backend or form service.
- **Instagram feed:**
  - Replaced by a local grid of **12 original site photographs**, honestly labelled ("Photographs from around the centre…") with links to @the.juicy.effect.
  - "Load more" reveals the second set of six locally.
  - Nothing claims to be a live feed, and no API is used.
- **YouTube (16 embeds):** click-to-load facades. Nothing loads from YouTube (`youtube-nocookie.com`) until the visitor presses play.
- **MP3:** the original file is copied to `public/media/` and used only in its source post ("What is Yoga, really?"), with `preload="none"` and no autoplay. It is 46 MB; a compressed copy would help if the owner approves.
- **AdSense (3 posts) and Amazon affiliate blocks (4 blocks in 3 posts):** shown at their original positions as clearly labelled inactive placements, using the captured text. No live ads or affiliate links. The empty product block in the public-speaking post is not rendered (it was empty on the source too).
- **GA4 (G-G1HSN8T94N):** recorded in `site.js` but **not loaded**, because analytics needs consent and a launch decision.

## 11. SEO

- Per-page `<title>` and description come from the captured metadata, and post metadata from `blog-index.csv`. Each page has a canonical URL on `https://www.thejuicyeffect.com`. Open Graph uses the original share logo, or each post's featured image.
- JSON-LD: `WebSite` + `HealthAndBeautyBusiness` named **"The Juicy Effect"**; the "80571" name error is fixed. The verified street address from the Contact page is included. **No coordinates**, so the default New York marker is gone. Telephone and hours are omitted because they are unresolved. Jason's LinkedIn profile is not in `sameAs`. Every post has `BlogPosting` markup.
- `sitemap.xml` (284 URLs) and `robots.txt` are generated.

## 12. QA performed

- **Routes:** the automated check above, run against both the dev and the production server: **51 + 79 + 3 + 152 routes pass, and 0 internal links are broken.**
- **Browser sweep:** headless Chrome over all 51 pages plus sample posts and tags (55 URLs), at **375px and 1440px** with motion on. Checked for console errors, failed requests, broken images, horizontal overflow and content left hidden: **0 problems at either width**. Every image in the rendered HTML is a local `/img/` WebP derivative.
- **Screenshots** reviewed at 1440, 1280, 768 and 390px: home, all five hubs, a session, a package, a workshop, a course, all three retreat types, contact, story, team, guide, rent, privacy, a legacy gallery, the blog index, posts (with images, AdSense, Amazon and audio), archives and the 404 page.
- **Fixes made during QA:**
  - Footer email overflowing at 375/390px
  - Mobile menu's first item sitting under the header
  - Photo-grid gaps
  - Tile backgrounds on tinted sections
  - Missing spaces from the extraction
  - Double-encoded titles
  - Duplicate hero images
  - An empty Story column
  - Contact value wrapping
- **Mobile menu (tested in headless Chrome):** opens, locks page scroll, closes with Escape and returns focus to the toggle, and closes on navigation.
- **Production build:** `next build` succeeds and prerenders 140 static pages; tag archives render on request.

## 13. Remaining issues and unverified details

- Owner decisions still needed:
  - Phone number, hours, Sharon's years of experience, the breathwork duration, and the USD conversions
  - Whether Energetic Facelift and Rent Our Space are still offered
  - The Deep Energy Healing Package destination
  - A Jason page
  - The legacy business posts and their ad/affiliate blocks
  - Analytics and a cookie banner
  - The pre-call questionnaire backend
- Prices are as captured on 2026-10-16 and may have changed.
- Assets the owner should supply: a vector logo, the Our Story MP4, and higher-resolution portraits (several are 320–500 px; they are shown small so they aren't upscaled).
- Testing was automated headless Chrome only, on Windows. Real iOS Safari and Android devices were not tested.
- `public/img` is about 95 MB on disk, and the MP3 is 46 MB. This is fine for Vercel static hosting, but worth knowing for the repository size.
- Hover states and the pinned orbit were checked in headless Chrome only; a manual pass with a real mouse and trackpad is still worthwhile.

## 14. Revision 2: spacing, alignment, hero and smoothness

Changes made after the first review:

- **Spacing:** the section rhythm token was reduced from 4.5–10rem to 3.5–6.5rem. Hero, chapter, band, footer and archive padding were tightened, and full-viewport minimum heights were removed from inner-page heroes. The homepage went from 9,378px to about 7,800px at 1440px.
- **Homepage hero:** redesigned as a layered collage.
  - Arched studio photo, an overlapping sound-therapy photo, and a rotating brand badge (logo mark plus "The Juicy Effect · Ubud · Bali · Since 2018").
  - The teal points card, quick links to the other sections, and a GSAP ticker of the 13 real session names, each linking to its page.
  - Layers drift at different scroll speeds. On mobile the order is heading, then photo, then intro.
- **Inner-page heads:**
  - Detail pages now have a tinted band with a decorative ring, framed media, and the "at a glance" facts as a card inside the hero (no longer a separate block).
  - Hubs, the blog index and long-form pages also get tinted bands. Hubs show a fanned stack of their own first three images.
- **Alignment fixes:**
  - Home sessions and packages intros are now two columns instead of one narrow column.
  - Packages are a single row of seven tiles, with no lone tile.
  - The photo grid is a uniform 3×2.
  - The dark contact band is vertically centred.
  - The footer's sessions list uses two columns, and the email no longer breaks.
  - The packages hub uses two-column cards (40% shorter).
  - Retreat and long-form text columns are centred.
  - The blog head is two columns.
  - Square service artwork inside body text is capped at 320px.
  - A duplicated artwork on Medical Jyotish is removed, matched by asset id.
- **Smoothness:**
  - **Lenis** inertial scrolling, driven by the GSAP ticker so ScrollTrigger stays in sync. It is off for reduced motion and leaves native touch scrolling alone.
  - A soft page-entrance fade on client-side navigation.
  - Transforms are cleared after reveal animations so hover effects stay crisp.

### Revision 3: measured white-space and alignment pass

A headless-Chrome audit measured every page at 1440, 1024, 768 and 390px for two problems: vertical gaps with no content, and content columns that leave a large empty area beside them. Every flagged section was fixed and re-measured until the whole site was clean.

- **Long-form pages now use the full width on desktop:**
  - Session, package, workshop and course pages: a sticky booking card (duration, price, WhatsApp, email).
  - Retreat pages: a contents rail on the left and a booking card with "Book a discovery call" on the right.
  - Blog posts: an article-details rail (author, date, reading time, category) and a "Latest articles" rail.
  - Rent and guide pages: a booking card, plus a side-by-side hero image.
- **Images:** untitled image-only chapters are merged into the following chapter, and small images float beside their text instead of sitting alone.
- **Team pages:** the bio intro spans the width and the rest flows in two balanced columns. The portrait sits beside the name from tablet width up.
- **Story page:** media columns are sticky, and Rasayana is a circular panel.
- **Small groups and grids:** related rails with fewer than five items become full-width cards. Blog and tag archives avoid a lone last card. The blog year lists use two columns. Legacy galleries centre their rows.
- **Gaps:** around retreat FAQs, the discovery-call band, the homepage blog section and the ends of sections.

### Revision 4: image visibility and alignment pass

A motion-on image checker scrolls each page with the mouse wheel (through the smooth-scroll layer, like a visitor). It reports any image that has been reached but is still clipped, transparent, unloaded or zero-sized, as well as distorted, upscaled (blurry) or off-screen images, captions that overflow, and frames that show an empty edge while scrolling. It was run over all pages at 390, 1440 and 1920px (plus spot checks at 1366px), and every issue was fixed until **0 problems** remained:

- **Missing images on phones:** session artworks and related-rail items placed off to the side of sideways-scrolling rows never loaded. The homepage session artworks now load eagerly, and related rails and the homepage course row are grids on small screens.
- **Edge gaps:** parallax photos (Online courses and others) showed a 6–7px empty strip while scrolling. Parallax images are now slightly oversized to cover their frames.
- **Blurry images:**
  - The 275px Access Bars photo is no longer stretched as a hero; the service artwork leads and the photo sits beside the text at its natural size.
  - The 877px retreats intro photo is now beside the text at a size it supports.
- **Alignment:**
  - Practitioner portraits and their availability text form one note card.
  - Square service artwork inside text floats beside the paragraphs.
  - Long caption URLs wrap.
  - Related cards stretch to fill the row at equal height.
- **Video placeholders:** they now show the video's own YouTube thumbnail (loaded lazily from `i.ytimg.com`) instead of a plain gradient. The video itself still loads only on click.
- **Healing Sessions:** the hero label above the title is removed (on all section pages). "Our Healing Packages are popular too…" is redesigned as one panel: text and button on the left, the six package artworks in a labelled grid on the right, and the workshops link as a footer row.

## 15. Confirmation

- ✅ Audit files and `source-assets/` were not modified or deleted. All outputs are new files.
- ✅ **No GitHub push, no Vercel deployment.** Waiting for explicit approval.
