# Functionality & Technical Dependencies

**Platform (VERIFIED):** Squarespace 7.1 (template `5c5a519771c10ba3470d8101`, response header `Server: Squarespace`). Pages mix **Fluid Engine** (free-form 8-column grid) and **classic layout** blocks. Site ID `55cd8826e4b0af9801ddffe4`, timezone Asia/Makassar (`Asia/Ujung_Pandang`), language en-AU.

Confidence labels:

- **VERIFIED:** confirmed in markup, config JSON or HTTP responses.
- **OBSERVED:** seen rendering in a headless browser.
- **UNCONFIRMED:** configured or implied, but behaviour couldn't be confirmed.

---

## 1. Navigation & routing
| Feature | Status | Notes |
|---|---|---|
| Desktop header nav (7 links + "More +" dropdown) | VERIFIED / OBSERVED | The dropdown folder has no landing page; its icon setting is "none" on desktop |
| Active-page underline | OBSERVED | |
| Mobile header (logo left, double-line hamburger right) | VERIFIED / OBSERVED | Full-screen fade overlay; "More +" opens a sub-panel with "Back" |
| Announcement bar, dismissible | VERIFIED / OBSERVED | Teal bar with × close. Squarespace remembers dismissal per browser (UNCONFIRMED in this audit) |
| Transparent / fixed header | VERIFIED (body classes `tweak-transparent-header`, `tweak-fixed-header-style-basic`, header style "dynamic") | Sticky-on-scroll behaviour UNCONFIRMED |
| Apex → www redirect | VERIFIED | `thejuicyeffect.com` 301 → `https://www.thejuicyeffect.com/` |
| Duplicate homepage | VERIFIED | `/` and `/home` serve the same page |
| Blog URL formats | VERIFIED | `/blog/YYYY/M/D/slug` and `/blog/slug` both live. Tag and category archives auto-generated |
| Blog index pagination | VERIFIED | Side-by-side list layout with older/newer pagination |
| Blog post prev/next pagination | VERIFIED (`blog-item-pagination` present) | |
| URL mappings / redirects inside Squarespace | UNCONFIRMED | Not visible from outside. **Ask the owner for an export of Settings → URL Mappings** |

## 2. Forms & lead capture
| Feature | Status | Notes |
|---|---|---|
| Contact form | **None exists** (VERIFIED) | No Squarespace form block on any page. All enquiries go through WhatsApp / Messenger / Instagram / email links |
| "Book a discovery call" (retreats) | VERIFIED → links to `/contact` | Retreat FAQs mention "a short pre-call questionnaire". **No questionnaire exists on the site**; it's presumably sent manually or via an external tool (UNCONFIRMED) |
| Newsletter / promotional pop-up | UNCONFIRMED | `popupOverlaySettings` is configured (all pages, 5s timer, show until signup, every 7 days), but no pop-up markup was found and none appeared in screenshots. Probably disabled or empty; confirm with the owner |
| Newsletter signup block | None (VERIFIED) | |
| Validation behaviour | N/A | No forms to validate |

## 3. Booking & commerce
| Feature | Status | Notes |
|---|---|---|
| Online booking / scheduling | **None** (VERIFIED) | No Acuity, Calendly or scheduling block. Booking is manual: "Simply contact us to book". Payment is by cash, card or transfer arranged off-site |
| E-commerce | Store enabled but unused (VERIFIED) | `storeSettings.isLive=true`, default currency AUD, multicurrency on, but `showCart=false`, no product pages in the sitemap, `/products?tag=…` links return 404, and one blog post has an **empty product block**. Legacy shop, effectively removed |
| Customer accounts / login | Disabled (VERIFIED) | `loginAllowed=false`, `signupAllowed=false` |
| Blog comments | Disabled (VERIFIED) | `commentsEnabled=false` |
| Cookie banner | Disabled (VERIFIED) | `isCookieBannerEnabled=false`. Consider whether the rebuild needs one, given the GA tracking |

## 4. Interactive components (by type)
| Component | Where | Behaviour |
|---|---|---|
| **Gallery slider (carousel)** | Home (sessions ×10, packages ×7), Healing Sessions (packages) | VERIFIED config: `design=slider`, autoplay every **2s**, prev/next arrows, square crop, links per slide, no lightbox. Homepage sessions slider also has thumbnails enabled |
| Image cards with "Learn More" buttons | Healing Sessions (13), Healing Packages (7), Private Retreats (3), Workshops (4), Home hero | Image + description + pill button. The image itself is also a link |
| **Summary block** (blog feed) | Home "From our Blog…" | Dynamic: latest 8 posts from the blog collection, grid with thumbnail, title, excerpt, "Read more →" |
| **Instagram block** | Home "From our Instagram…" | Live feed via Squarespace's Instagram connection (3-column grid, about 12 posts visible in the capture, some videos). **Needs replacement in the rebuild** (Instagram Basic Display API was retired; consider a manual grid, a third-party widget, or a static link-out) |
| **Accordion** | Restorative Healing retreat, Womb Sovereign retreat | Day-by-day itineraries and FAQs, expand/collapse |
| Horizontal rules, spacers | Many | Decorative |
| Scroll / entrance animations | None (VERIFIED `animation-type-none`) | |
| Lightbox | None | |
| Tabs | None found | |
| Search | **None** (VERIFIED) | No search page or block |

## 5. Embedded media
| Embed | Pages | Source |
|---|---|---|
| YouTube (via Embedly iframe) | `/energy-healing` (×2: `zxjNqgs4zr4`, `-9ANedcw2Pc`), `/hypnotherapy` (`zU0JIrkaKp4`), `/distance-healing` (`x_NBRygF5AM`), `/energetic-facelift-…` (`DgGbFRjqQPk`), `/ayurvedic-lifestyle-package` (`kLe8re4pnk0`), `/womb-alchemy-…` (`g7MTb2r3QN0`), 9 blog posts | Keep as embeds (consider lite/facade YouTube embeds for performance) |
| YouTube link button | Home "Take A Tour" | `https://youtu.be/VDAG5wBESJQ` (opens in the same tab) |
| Squarespace-hosted video (HLS, portrait 1080×1934, ~110s) | `/the-juicy-effect-story` | `video.squarespace-cdn.com/.../38de62d0-…/playlist.m3u8`. **Not downloadable without ffmpeg** (separate audio/video HLS streams, signed segment URLs). Ask the owner for the original file |
| Hosted MP3 audio | `/blog/2021/7/11/what-is-yoga-really` | Downloaded → `source-assets/media/Nick-Phillips-03.mp3` (47.5 MB) |
| Amazon affiliate product blocks (4) | 3 legacy blog posts | Affiliate tag `thejuicyeff08-20`, images hot-linked from Amazon |
| Google AdSense code blocks | 3 legacy 2015 blog posts | `ca-pub-3597641502472828`. Legacy ads, probably not wanted |
| Google Maps | Text links only (no map embed) | `g.page/the-juicy-effect` and long `google.com/maps/place/…` links used as "Google Reviews" links |

## 6. Analytics, tracking & third-party scripts (VERIFIED in HTML)
- Google Analytics 4: **G-G1HSN8T94N**
- Universal Analytics (legacy, defunct since 2023): **UA-151912560-1**. Can be dropped.
- Squarespace runtime scripts (`assets.squarespace.com`, `definitions.sqspcdn.com`): **not needed** in the rebuild.
- Facebook Pixel, Hotjar, chat widgets: none found.

## 7. External links (summary)
- **Contact channels:** WhatsApp `wa.me/6281338906433`, Facebook `facebook.com/thejuicyeffect`, Instagram `instagram.com/the.juicy.effect`, Google `g.page/the-juicy-effect`, email `mailto`
- **Things to do in Ubud:** The Yoga Barn, Radiantly Alive, Ubud Yoga Centre, Alchemy Yoga Center
- **Privacy policy:** TermsFeed links
- **Blog:** citations (NCBI, HeartMath, Wikipedia, McKinsey, etc.). Full list in [content/blog/](content/blog/)
- **Organisation JSON-LD `sameAs`:** includes `linkedin.com/in/jasonbuchanan` (labelled "Sharon Keating" in social settings). Confirm the intended LinkedIn profile.

## 8. What a frontend rebuild must replace or decide
| Squarespace feature | Rebuild implication |
|---|---|
| Blog CMS (79 posts, tags, categories, pagination, RSS) | Needs a content source: local MDX/Markdown (content already extracted), or a headless CMS if the owner needs to keep publishing. **Decision needed: who edits content after launch?** |
| Summary block (latest posts) | Build-time query of the blog content |
| Instagram feed | No drop-in equivalent; choose an approach |
| Squarespace-hosted video | Obtain the source MP4 from the owner, or host it on YouTube/Vimeo |
| Image CDN (`?format=` resizing) | Next.js image optimisation will be **disabled** (`images.unoptimized: true`), so pre-generate responsive sizes or serve pre-compressed files. Many originals are 1–9 MB PNGs |
| URL structure & legacy URLs | Keep the identical routes, including `/blog/YYYY/M/D/slug`, or add redirects (in `next.config.js` or `vercel.json`) |
| Announcement bar dismissal | Small client-side state (e.g. `localStorage`) |
| Analytics | Re-add GA4 G-G1HSN8T94N (drop UA) |
| Domain / DNS / email | Squarespace currently serves the domain. Moving to Vercel means DNS changes. Don't touch MX records (email at hello@thejuicyeffect.com). **Out of scope for this audit; needs the owner's sign-off** |
| Sitemap & robots | Regenerate. The current robots.txt is Squarespace's default, which blocks AI crawlers. Decide whether to keep that policy |
