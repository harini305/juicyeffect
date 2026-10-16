# Missing Assets, Broken Links, Inaccessible Content & Open Questions

All items are evidence-based from the 2026-10-16 crawl. Nothing here has been "fixed" on the live site; this phase is read-only.

## 1. Page accessibility
- **All 129 sitemap URLs** (50 page URLs + 79 blog posts) plus the root `/` (51 page routes in total) returned **HTTP 200**. No password-protected, member-only or inaccessible pages were found.
- 157 tag and category archive URLs were **not individually fetched**. They are auto-generated listings of existing posts, with no unique content.
- Pages not exercised: there are no forms, checkout or login to test. YouTube iframes render blank in headless capture; that's a capture limitation, not a site fault.

## 2. Broken internal links (HTTP 404) — VERIFIED
| Broken target | Linked from | Likely intended destination (to confirm) |
|---|---|---|
| `/energetic-alignment-package` | **Homepage** packages carousel ("Deep Energy Healing Package") | Unknown. There is no "Deep Energy Healing Package" page anywhere on the site |
| `/hypnotherapy-packages-the-juicy-effect` | **Homepage** carousel, Healing Sessions carousel, +1 | `/hypnotherapy-package` |
| `/courses-certifications` | Healing Packages, Private Retreats | `/online` |
| `/jason-buchanan` | Start Your Next Chapter, Our Story | No Jason page exists |
| `/julia-guerre` | Energetic Facelift | `/meet-julia` |
| `/meet-gita-desyanti` | Trauma Release with Breathwork | `/meet-gita-sianipar` |
| `/the-next-chapter-personal-retreat` | `/packages-1` | `/the-next-chapter-private-retreat` |
| `/career-lifestyle-transition`, `/classes`, `/discover-your-energetic-flow-in-ubud`, `/get-started-to-improve-performance`, `/i-choose-juicy`, `/improve-workplace-performance-with-the-33-day-challenge`, `/the-33-day-challenge`, `/yoga-as-a-way-of-life-for-everyday-people`, `/products?tag=…` (×2) | Legacy blog posts | Retired offers or shop. Remove the links or point them somewhere sensible |

Other link problems:
- `/distance-healing` → `https://jason-buchanan-l386.squarespace.com/sharon-keating`: a link to an internal Squarespace staging domain. It should be `/sharon-keating`.
- `/blog/from-the-journey-the-joy-that-heals` contains a malformed auto-link `http://journey.It` (a typo in the text: "journey.It").
- Mobile menu: the "More" folder has the href `/about`, which doesn't exist (harmless in Squarespace, but don't carry it over).
- Healing Sessions: two cards ("Discover Your Hidden Self" and Vedic Astrology) both link to `/vedic-astrology-navigate-the-unknown`. Confirm this is intended.

## 3. Orphan / legacy pages
| Route | Observation | Question for owner |
|---|---|---|
| `/home` | Duplicate of `/` | Drop it and redirect to `/`? |
| `/packages-1`, `/personal-consultations`, `/workshops` | Gallery-only pages, no text, not linked. Probably sources for carousels | Exclude from the rebuild (redirect to the hubs)? |
| `/energetic-facelift-the-natural-alternative` | Live service page with a price, but **not linked from Healing Sessions** or the nav | Is this service still offered? |
| `/rent-our-space` | Not linked anywhere | Still offered? Add to nav or footer? |
| `/privacy-policy` | Not linked anywhere (footer has no links) | Add a footer link in the rebuild (recommended) |

## 4. Missing or limited assets
| Item | Status |
|---|---|
| Our Story portrait video (Squarespace-hosted, ~110s, 1080×1934) | **Not downloaded**: HLS-only, needs ffmpeg (not installed, deliberately not added). Request the original MP4 from the owner, or capture it with ffmpeg in the implementation phase if approved |
| Logo in vector format (SVG/AI/EPS) | **Not available.** Only a 2500×2089 PNG exists. Request vector artwork from the owner for crisp rendering |
| Proper favicon set | The current `favicon.ico` is actually a 2500px PNG. Generate a favicon set from the logo or a vector source |
| Instagram feed images | Not site assets; loaded live from Instagram |
| Amazon product images (4) | Downloaded copies exist, but they are third-party affiliate images |
| Service-card artwork | Text is baked into the images (e.g. "Shamanic Energy Healing"). Editable source files (Canva?) are not available. Any copy change needs new artwork; the rebuild could also overlay live text on the photos instead (design decision) |
| Fonts | Poppins is not downloaded (unnecessary; Google Fonts / `next/font`) |
| Image quality | Several images are WhatsApp exports or low resolution (500×500 portraits). Higher-resolution originals may exist with the owner |

## 5. Content inconsistencies to confirm (preserve as-is until the owner decides)
1. **Phone numbers:** WhatsApp **+62 813 3890 6433** (Contact page) vs **+62 82145015707** (site settings / structured data).
2. **Opening hours:** "9am-5pm Monday to Friday" (pages) vs Mon–Sat 9–5, Sun closed (settings) vs Mon–Fri 09:00–15:00 (structured data).
3. **Sharon's experience:** "15+ years" (most pages) vs "10+ years" (`/sharon-keating`, `/shamanic-soul-retrieval`). The bio page H4 says "over 15 years".
4. **Trauma Release Breathwork duration:** "120-minute private session" vs "approximately 90 minutes" in Investment.
5. **USD approximations** differ for the same IDR amount (see 02 §B).
6. **Name spellings:** "Jhanavikaa" vs "Jhaanavikaa"; "Sharon Marie" / "Sharon-Marie" / "Sharon Keating" / "Sharon Marie Keating".
7. **Typos in source:**
   - "Devine Feminine" (Womb Sovereign subtitle)
   - "Lifstlyple" (workshop bios)
   - "onine" and "and and" (homepage SEO description in settings)
   - "A single sessions goes" (Soul Retrieval)
   - "even if only person is part" (Next Chapter FAQ)

   Ask whether to correct these. The default is to preserve them, with corrections only on approval.
8. **Homepage SEO title:** the Squarespace SEO field ("The Juicy Effect Boutique Wellbeing Sanctuary - More Awesome More Often") isn't what renders; the `<title>` is the generic site title.
9. **Healing Sessions intro** says "Available In Ubud", while some sessions (Distance Healing) are online-only.

## 6. SEO / structured-data defects found
- LocalBusiness and Organization JSON-LD use **"80571" (the postcode) as the business name and legalName**.
- The address in the JSON-LD omits the locality ("Jl. Raya Lungsiakan No.49\nIndonesia").
- The map marker in site settings is Squarespace's default New York coordinates (40.72, −74.00). No map is displayed, but the data is wrong.
- Organization `sameAs` LinkedIn points to `linkedin.com/in/jasonbuchanan`.
- `/home` duplicates `/` without a canonical to `/`.
- Many images have filename alt text ("Ubud.jpg", "… (Copy)").

## 7. Responsive / layout issues observed
- **Homepage H1 breaks mid-word on mobile** ("Transformation / al").
- Large empty vertical gaps in Fluid Engine sections (homepage after the packages carousel, between the blog grid and "View All Articles", Energy Healing after the intro where the video sits).
- Homepage carousels on mobile show partial circles at the edges with small arrow controls; the labels inside the artwork become tiny (about 8px effective).
- Long-form retreat pages (Womb Sovereign: about 3,200 words) are a single text column with little visual break-up.

## 8. Open questions for the owner / project lead
1. Who will edit content after launch (blog posts, prices, workshop dates)? This decides MDX vs a headless CMS.
2. Should legacy blog posts (2015–2017 business/workplace content, Amazon affiliate and AdSense blocks) be migrated, archived, or dropped?
3. Confirm the correct phone/WhatsApp number, hours, and Sharon's years of experience.
4. Is the Deep Energy Healing Package (homepage carousel) a current offer? Where should it link?
5. Are Energetic Facelift and Rent Our Space still offered?
6. Should Jason have a team page, or should his references be removed?
7. Can the owner supply: a vector logo, the Our Story MP4, high-resolution photos, and editable service-card artwork?
8. Should the private-retreat "pre-call questionnaire" become an on-site form? If so, which backend (email service, form provider)? A frontend rebuild **does not** include a working backend by default.
9. Instagram feed: what replacement approach is acceptable?
10. Is the newsletter pop-up intended? If so, which mailing-list provider?
11. Are there Squarespace URL mappings or redirects that must be preserved? (Export them from the Squarespace admin.)
12. Domain and email: confirm the DNS migration plan and that MX/email records remain untouched.
13. Approval to correct typos and the inconsistent USD conversions?
