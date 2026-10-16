# The Juicy Effect — Source Website Audit (Phase 1)

**Site audited:** https://www.thejuicyeffect.com (apex `thejuicyeffect.com` 301-redirects to www)
**Audit date:** 2026-10-16
**Scope:** full-site content, asset, brand and functionality audit ahead of a frontend rebuild (Next.js App Router, JavaScript, React, GSAP/ScrollTrigger, unoptimised images).
**Status:** investigation only. **No redesign, no implementation, no package installs, no GitHub push, no deployment.**

---

## Document index

| File | What it contains |
|---|---|
| **README.md** (this file) | Overview, coverage, key findings, implementation considerations |
| [01-page-inventory.md](01-page-inventory.md) | Every route: purpose, nav status, inbound links, SEO title and description, section order, CTAs, assets, embeds |
| [02-content-preservation-checklist.md](02-content-preservation-checklist.md) | Facts that must survive the rebuild: contact details, footer, people, **all prices**, page-level copy, SEO |
| [03-asset-inventory.md](03-asset-inventory.md) | Downloaded asset folders, brand assets, video and audio, page → asset mapping, image characteristics |
| [04-typography-and-colors.md](04-typography-and-colors.md) | Poppins type scale, verified palette, logo colours, section themes, buttons, layout tokens |
| [design-tokens.json](design-tokens.json) | Machine-readable version of 04 |
| [05-functionality-and-dependencies.md](05-functionality-and-dependencies.md) | Navigation, forms (none), booking (manual), carousels, embeds, analytics, what the rebuild must replace |
| [06-issues-and-open-questions.md](06-issues-and-open-questions.md) | 404s, orphan pages, missing assets, content inconsistencies, SEO defects, owner questions |
| [content/pages/](content/pages/) | **Verbatim extracted content** for all 51 page routes (Markdown, in visual order) |
| [content/blog/](content/blog/) | **Verbatim extracted content** for all 79 blog posts |
| [blog-index.csv](blog-index.csv) · [blog-tags-and-categories.md](blog-tags-and-categories.md) | Blog metadata and taxonomy |
| [asset-manifest.csv](asset-manifest.csv) | Every asset: local path ↔ source URL ↔ pages, sections and alt text |
| [screenshots/](screenshots/) | Full-page captures of 20 key pages at **desktop 1440px** and **mobile 390px** (40 images) |
| `_tools/` | The scripts used for this crawl, so it can be re-run |
| `../../source-assets/` | **Original asset files** (unmodified), 324 images + favicon + 1 MP3, about 260 MB, with `manifest.json` |

---

## 1. Website overview

The Juicy Effect (PT The Juicy Effect, PT PMA, Bali, since 2018) is a **wellbeing and energy-healing centre in Ubud, Bali**, led by Sharon Marie Keating with practitioners Julia, Gita, Vickya and Jhanavikaa. It offers:

- **Individual healing sessions** (13): shamanic energy healing, soul retrieval, inner-child hypnotherapy, breathwork, Access Bars, womb healing, Reiki, sound therapy, Vedic and medical astrology, distance healing, life-direction consultation; plus an unlisted Energetic Facelift.
- **Healing packages** (6 pages plus The Next Chapter retreat cross-listed).
- **Private one-to-one retreats** (3, enquiry via discovery call).
- **Group workshops in Ubud** (4).
- **Online courses and certifications** (4, enquiry-based).
- **A long-running blog** (79 posts, 2015–2026).

**Platform:** Squarespace 7.1, a mix of Fluid Engine and classic layouts. There are **no forms, no online booking, no live e-commerce and no accounts**. All conversion happens via "contact us" through **WhatsApp**, Messenger, Instagram or email.

## 2. Audit coverage

| Area | Coverage | Method |
|---|---|---|
| Page routes | **51 / 51** (100%) | sitemap.xml + nav; HTML and Squarespace `?format=json` fetched for each; all HTTP 200 |
| Blog posts | **79 / 79** (100%) | Same; full bodies extracted |
| Tag/category archives | 157 enumerated, not fetched | Auto-generated listings with no unique content |
| Navigation (desktop + mobile), announcement bar, footer | Full | Header/footer HTML + screenshots |
| Internal links | All checked; **17 broken (404)** | HTTP checks without following redirects |
| Assets | **324 images + favicon + 1 audio downloaded**; 1 hosted video documented, not downloadable | Original URLs, no resizing |
| Typography & colour | Verified from compiled CSS and the logo file | See 04 |
| Visual / responsive | 20 key pages × desktop and mobile | Headless Chrome via DevTools protocol, scrolled to trigger lazy loading |
| Functionality | Observed + config-verified; no backend behaviour assumed | See 05 |

**Limitations:**

- Squarespace admin-only data couldn't be seen: URL mappings, form storage, mailing lists, pop-up content, analytics data.
- Hover and interaction states were inferred from the style config, not recorded.
- YouTube iframes don't render in headless capture.
- The Our Story video is an HLS stream and was not downloaded.

## 3. Pages & routes (summary; full detail in 01)

- **Hubs:** `/` (also duplicated at `/home`), `/healing-sessions`, `/healing-packages`, `/private-retreats`, `/workshops-events-learning`, `/online`, `/contact`, `/blog`
- **Sessions:** `/energy-healing`, `/shamanic-soul-retrieval`, `/hypnotherapy`, `/trauma-release-with-breathwork`, `/energy-healing-access-consciousness`, `/womb-healing`, `/reiki-healing`, `/private-sound-therapy`, `/vedic-astrology-navigate-the-unknown`, `/medical-jyotish`, `/distance-healing`, `/start-your-next-chapter`, `/energetic-facelift-the-natural-alternative` (orphan)
- **Packages:** `/transformational-healing-package`, `/soulmate-alchemy`, `/womb-healing-immersion-package`, `/activate-your-voice-package`, `/ayurvedic-lifestyle-package`, `/hypnotherapy-package`
- **Retreats:** `/womb-sovereign-private-retreat`, `/restorative-healing-personal-retreat`, `/the-next-chapter-private-retreat`
- **Workshops:** `/womb-healing-vision-quest-workshop`, `/how-to-keep-your-energy-field-clear-workshop`, `/self-love-through-radical-self-acceptance`, `/discover-balance-and-harmony-with-breathwork`
- **Online:** `/womb-alchemy-a-return-to-sovereignty`, `/energy-mastery-1-to-1-spiritual-mentoring-program`, `/practical-shamanism-for-the-real-world`, `/the-medicine-path-practitioner-certification`
- **About/info:** `/the-juicy-effect-story`, `/sharon-keating`, `/meet-julia`, `/meet-gita-sianipar`, `/meet-vickya`, `/meet-jhanavikaa`, `/things-to-do-in-ubud`, `/rent-our-space` (orphan), `/privacy-policy` (orphan)
- **Legacy gallery-only pages:** `/packages-1`, `/personal-consultations`, `/workshops`
- **Blog:** `/blog/…` in two URL formats (`/blog/YYYY/M/D/slug` and `/blog/slug`), plus `/blog/category/*` (3) and `/blog/tag/*` (154)

**Shared components:**

- Header: logo plus 7 links and a "More +" dropdown.
- Teal announcement bar.
- Charcoal footer: 3 paragraphs, no links.
- Hub card pattern: circular service artwork, bold service name and description, "Learn More" pill.
- Detail-page pattern: title, intro, "What you can expect", benefits list, Investment, practitioner credentials, availability line, contact CTA, Google Reviews link.
- Long-form retreat pattern: arc or itinerary, accordion days, inclusions, discovery-call CTA, FAQ.

## 4. Content preservation findings
- All visible copy has been extracted verbatim per page and post, including formatting, links and CTA labels. Prices are tabulated in 02 §B: 25 priced offers in IDR with approximate USD. Retreats and online courses have no public prices.
- Key global facts: WhatsApp +62 813 3890 6433, hello@thejuicyeffect.com, Jl. Raya Lungsiakan No.49, Kedewatan, Ubud, Gianyar, Bali 80571, "9am-5pm Monday to Friday (Bali time)", Unity Café on site, Centre Manager Ayu.
- **No testimonials or reviews section exists as on-page text.** Reviews are referenced only via Google Maps links; one Instagram post image shows a client quote. **Do not invent testimonials.**
- **No FAQ page exists.** FAQs appear only inside the retreat pages.
- Conflicts to resolve with the owner: phone number, hours, Sharon's years of experience, breathwork duration, USD conversions, typos (06 §5).

## 5. Assets (summary; detail in 03)
- `source-assets/brand/`:
  - Logo PNG 2500×2089 (**no vector available**)
  - 300×300 share logo
  - favicon (actually a large PNG)
- `source-assets/pages/`: images used on site pages, 97 MB.
- `source-assets/blog/`: blog images, 115 MB.
- `source-assets/media/`: one MP3 (47.5 MB).
- **Video:** 16 YouTube embeds (keep as embeds), plus 1 Squarespace-hosted portrait video on Our Story (needs the owner's original file).
- **Service tiles have text baked into the artwork**, in two variants: round (carousel) and framed (hub).
- Many originals are very large PNGs (up to 8.9 MB). Pre-optimise them, because Next.js image optimisation will be disabled.

## 6. Fonts & typography (detail in 04)
- **Poppins only** (Google Font, OFL). Loaded weights: 300/400/500/700 normal and 300/400/700 italic.
- Headings and body default to **weight 300**. Emphasised headings use **700** via `<strong>`, and the light/bold mix within one heading is a brand trait.
- Base 15px. H1 3.4rem, H2 2.5rem, H3 2rem, H4 1.2rem. Body line-height 1.8. Buttons weight 500 with 0.02em tracking.

## 7. Brand colour palette (detail in 04)
| Colour | HEX | Status |
|---|---|---|
| White background | #FFFFFF | VERIFIED |
| Near-black text | #171717 | VERIFIED |
| Dark grey (links, small headings) | #303030 | VERIFIED |
| Charcoal (footer) | #454545 | VERIFIED |
| **Signature teal** (announcement bar, accent sections) | **#1AC1B9** | VERIFIED |
| Logo teal / lime / orange / purple / grey | #3AB9AE / #8BBD02 / #F88800 / #8A1587 / #848688 | VERIFIED (pixel-sampled from the logo) |
| Service-tile ring colours | ~7 hues | ESTIMATE (artwork only) |

## 8. Navigation & interactive behaviour
- Desktop horizontal nav with a "More +" dropdown. Mobile: double-line hamburger opening a full-screen overlay with a folder sub-panel. Active link underlined.
- **Autoplay gallery sliders** (2s, arrows, linked slides) on Home and Healing Sessions. **Accordions** on two retreat pages. A **dynamic blog summary grid** and a **live Instagram feed** on Home.
- Outline pill buttons. **No scroll animations.** No search, forms, booking, cart, login or comments.

## 9. Responsive observations
- Squarespace mobile breakpoint is 767px; Fluid Engine reflows to a single column.
- Issues: the homepage **H1 breaks mid-word** at 390px; very large empty gaps in some Fluid Engine sections; carousel art labels become tiny on mobile; long single-column retreat pages.
- Card lists (sessions, packages) stack image above text on mobile.

## 10. Technical dependencies & integrations
- **Must replace:**
  - Blog CMS (79 posts, tags, categories, pagination)
  - Latest-posts summary block
  - Instagram feed
  - Squarespace image CDN
  - Squarespace-hosted video
- **Keep or re-add:** GA4 `G-G1HSN8T94N` (drop the legacy UA), YouTube embeds, WhatsApp / Messenger / Instagram / email links.
- **Legacy, decide:** AdSense and Amazon affiliate blocks in old posts; dormant Squarespace store.
- **Backend:** none today. Any new form (e.g. the retreat pre-call questionnaire) would need a real backend or form service. A visual rebuild alone won't provide one.
- **Domain / email:** DNS currently with Squarespace. Migration needs planning and must preserve email (MX) records. Out of scope here.

## 11. Missing assets, inaccessible pages, unresolved questions
See [06-issues-and-open-questions.md](06-issues-and-open-questions.md). Headlines:

- **17 broken internal links**, including 2 on the homepage carousel and `/courses-certifications` on two hub pages.
- A staging-domain link on Distance Healing.
- **6 orphan or legacy pages.**
- No vector logo, no downloadable Our Story video.
- Structured data names the business "80571".
- 13 owner questions.

## 12. Recommended implementation considerations (for Phase 2, no design direction chosen)
1. **Keep every route URL identical**, including legacy blog date URLs. Redirect `/home`, the gallery-only pages, and the known-broken targets to their intended pages, once the owner confirms.
2. **Treat the extracted Markdown as the content source of truth.** Port it as-is into MDX/JSON content files, rather than retyping.
3. **Configure `images: { unoptimized: true }`** in `next.config` as planned. Pre-generate WebP/AVIF at 2–3 widths from `source-assets/` with a one-off build script, and serve fixed-size files so you don't ship 5–9 MB PNGs.
4. **Load Poppins via `next/font/google`** (300/400/500/700 + italics). Express the palette as CSS custom properties from `design-tokens.json`.
5. **Preserve the brand cues:** light/bold Poppins headings, the teal accent, the multicolour logo, circular service imagery, outline pill buttons, and the warm first-person tone.
6. **GSAP/ScrollTrigger:** the original has no motion, so any animation is new. Respect `prefers-reduced-motion` and keep content readable without JavaScript, for SEO and for this text-heavy site.
7. Replace autoplaying 2s carousels with an accessible pattern (pausable, keyboard-operable). This is a UX improvement; carry over the content and links unchanged.
8. **SEO parity:** migrate the per-page titles and descriptions, regenerate the sitemap, fix the JSON-LD (business name, address, hours), and add canonical tags.
9. Decide the Instagram strategy, the CMS strategy and the legacy-blog strategy **before** building those sections.
10. Don't fix copy (typos, conflicting facts) without the owner's approval. Track decisions against 06 §5.

---

## Confirmation
- ✅ No redesigned UI, components or application code were written. No Next.js project was created.
- ✅ No packages were installed: only Python stdlib/bs4/Pillow, Node built-ins and the existing Chrome were used. ffmpeg was deliberately **not** installed.
- ✅ No existing project files were modified, deleted or overwritten. The workspace was empty at the start; only `docs/source-audit/` and `source-assets/` were created.
- ✅ No GitHub push and no Vercel deployment were performed. The workspace is not a git repository.
- ✅ The live website was only read (GET/HEAD requests); nothing was submitted or changed.
