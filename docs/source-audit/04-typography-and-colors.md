# Typography & Colour Reference

**Evidence base:** the site's compiled Squarespace stylesheet (`site.css`, build 1840), the inline `@font-face` block in the page HTML, the body tweak classes, header configuration JSON, pixel sampling of the original logo PNG, and rendered screenshots (`screenshots/`). Each value below is labelled:

- **VERIFIED:** read directly from CSS, HTML or the asset file.
- **OBSERVED:** seen in rendered screenshots.
- **ESTIMATE:** inferred.

No custom CSS was found: the site's CSS with and without custom CSS ends identically, so the site uses Squarespace 7.1 site-styles only. Machine-readable tokens are in [design-tokens.json](design-tokens.json).

---

## 1. Typography

### Font family: **Poppins** (only typeface on the site) — VERIFIED
- Every role (headings, body, meta, buttons, navigation, site title) uses `"Poppins"`.
- It is loaded from Squarespace's font CDN (`file.squarespace-cdn.com/.../fonts/libraries/sqsp/...`). Subsets: latin, latin-ext and devanagari.
- **Loaded weights and styles (VERIFIED from `@font-face`):** 300 normal, 300 italic, 400 normal, 400 italic, 500 normal, 700 normal, 700 italic.
- **Licence:** Poppins is an open-source Google Font (SIL Open Font License). For the rebuild, load it via `next/font/google` (`Poppins`, weights 300/400/500/700, italic 300/400/700). The Squarespace CDN files are not needed.
- The service-card **images** contain Arial/Helvetica-style bold white text baked into the artwork (OBSERVED). This is image content, not a web font.

### Type roles (VERIFIED site-style tokens)
Base font size: **15px**. Sizes below are rem values from the tokens. Squarespace scales headings fluidly between mobile and desktop, so rendered pixel sizes vary with the viewport.

| Role | Size token | Weight | Line height | Letter spacing | Transform |
|---|---|---|---|---|---|
| Heading 1 | 3.4rem | 300 | 1.4em | 0 | none |
| Heading 2 | 2.5rem | 300 | 1.4em | 0 | none |
| Heading 3 | 2rem | 300 | 1.4em | 0 | none |
| Heading 4 | 1.2rem | 300 | 1.4em | 0 | none |
| Paragraph large | 1.4rem | 300 | 1.8em | 0 | none |
| Paragraph (normal) | 1rem | 300 | 1.8em | 0 | none |
| Paragraph small | 0.9rem | 300 | 1.8em | 0 | none |
| Meta (dates, categories) | 1rem | 400 | 1.2em | 0 | none |
| Primary button | 1rem | 500 | 1.2em | 0.02em | none |
| Secondary button | 1.1rem | 500 | 1.2em | 0.02em | none |
| Tertiary button | 0.9rem | 500 | 1.2em | 0.02em | none |
| Header button | 0.9rem | 500 | 1.2em | 0.02em | none |
| Site navigation | 1rem (normal text) | 300 | 1.8em | 0 | none |
| Site title (text, unused: logo image shown) | 2rem | 300 | — | — | — |

### Typographic treatment (OBSERVED)
- **Light-weight headings with bold emphasis.** The default heading weight is 300 (thin, airy). Many page titles wrap their text in `<strong>`, which renders at **700**. Examples: "Transformational Energy Healing Centre in Ubud, Bali", "Personal Healing Sessions", "For questions or bookings:", "The Womb Sovereign". A recurring pattern mixes the two weights in one heading:
  - "Meet **Sharon Keating**"
  - "The Juicy Effect **Story**"
  - "Not yet in Ubud? You can also **connect with us online**."

  This light/bold contrast is a recognisable brand trait; keep it.
- Section headings ("Personal Healing in Bali", "What you can expect", "Benefits of this session include:") render at weight 300, sentence or title case, and are mostly centred on hub pages.
- Body copy is weight 300 at about 15–16px with generous 1.8 line-height. Inline **bold** (700) highlights key phrases and prices. *Italics* are used for taglines and practitioner credentials.
- Text alignment: hub and home sections are centred; long-form service pages are left-aligned within a medium-width column of roughly 900px.
- **Mobile problem (OBSERVED):** at 390px the homepage H1 breaks mid-word ("Transformation / al"). The rebuild needs fluid type or `hyphens`/`overflow-wrap` handling.

---

## 2. Colour palette

### 2a. Squarespace site palette (VERIFIED from CSS `:root`)

| Token | HSL | HEX | Role on site |
|---|---|---|---|
| `white` (lightest) | 0 0% 100% | **#FFFFFF** | Page background (default) |
| `lightAccent` | 177 76% 43% | **#1AC1B9** | **Signature teal.** Announcement bar, "light" section backgrounds (homepage "Trainings, Courses & Certifications"), homepage hero card overlay, summary-block backgrounds |
| `accent` | 0 0% 27.06% | **#454545** | Footer background ("bright" theme) |
| `darkAccent` | 0 0% 18.82% | **#303030** | Links, secondary/tertiary buttons, small headings ("safeDarkAccent") |
| `black` (darkest) | 0 0% 9.02% | **#171717** | Headings, body text, nav links, primary button outline/text |

### 2b. Logo colours (VERIFIED by pixel sampling the original 2500px logo PNG)

| Name | HEX | Where |
|---|---|---|
| Logo teal (top "droplet") | **#3AB9AE** | Close to, but not identical with, site teal #1AC1B9 |
| Logo lime green (upper swoosh) | **#8BBD02** | Logo only |
| Logo orange (lower swoosh) | **#F88800** | Logo only |
| Logo purple ("E" curl) | **#8A1587** | Logo only |
| Logo grey (wordmark "the / uicy / ffect") | **#848688** | Logo only |

The lime, orange and purple appear **only in the logo and in the service-card artwork**, never in the UI chrome. They are part of the recognisable identity. Whether to bring them into the redesigned UI as accents is a design decision to confirm with the owner.

### 2c. Service-card ring/label colours (OBSERVED in artwork, approximate — ESTIMATE)
These are baked into the PNG tiles and are not CSS. Approximate values: sky blue ~#4CC9F0, petrol teal ~#1B93A8, soft orange ~#F7A94B, bright green ~#22C55E / ~#00C853, lilac/purple ~#C65BD8, coral red ~#F25C54, royal blue ~#1C5BB8. Sample from the files in `source-assets/pages/` before reusing any of them.

### 2d. Section themes in use (VERIFIED theme definitions, usage counted across all pages)

| Theme | Uses | Background | Headings / body | Buttons |
|---|---|---|---|---|
| `white-bold` | 83 | **Not defined in the CSS**, so it falls back to `:root` defaults: #FFFFFF background | #171717 | primary #171717 |
| `default` (no theme attr) | 13 | #FFFFFF (`:root`) | #171717; small headings #303030 | primary #171717 outline |
| `white` | 10 | #FFFFFF | #171717 | #303030 |
| `light` | 2 | **#1AC1B9** teal | #171717 | primary #171717 |
| `light-bold` | 3 | #1AC1B9 teal | headings #303030 | #303030 |
| `bright-inverse` | 3 | #FFFFFF | #454545 text/headings | #454545 |
| `bright` (footer) | footer | **#454545** | #FFFFFF | white |

Visually, then, the site is **white pages with near-black text**, a single **teal** accent block colour, and a **charcoal footer**.

### 2e. Text & link colours (VERIFIED `:root`)
- Headings XL/L/M: #171717; heading small: #303030
- Paragraph: #171717
- Links in paragraphs and headings: #303030, underlined (OBSERVED)
- Navigation links: #171717. The active item is underlined (OBSERVED: "Home", "Healing Sessions", "Contact Us" each show an underline on their page)
- Mobile menu overlay: #FFFFFF background, #171717 links
- Announcement bar: #1AC1B9 background, white text, underlined "here" link (OBSERVED)

---

## 3. Buttons (VERIFIED body classes + tokens, OBSERVED rendering)

| Variant | Style | Shape | Padding | Stroke | Colour (default theme) |
|---|---|---|---|---|---|
| Primary | **outline** | **pill** | 0.7rem × 1.3rem | 2px | #171717 border + text, transparent fill |
| Secondary | outline | pill | 1.5rem × 2.2rem | 2px | #303030 |
| Tertiary | outline | underline | 1.5rem × 2.2rem | 2px | #303030 |

- On teal backgrounds the button inverts to a white outline with white text (OBSERVED: "Take A Tour" on the hero card).
- Rendered examples: "Explore Healing Sessions", "Explore Healing Packages", "View All Articles", "Visit Instagram" (large pill, about 300×100px), "Learn More" (small pill), "VIEW EXPERIENCES" (uppercase, author-typed).
- Hover states could not be confirmed from static capture. Squarespace's outline style typically fills on hover (ESTIMATE).
- A rounded-rectangle radius token (6.8px) exists, but the **pill** shape is what's active.

---

## 4. Layout, spacing & shape (VERIFIED tokens, OBSERVED rendering)

- Max page width: **1221px**; page side padding **5vw** (desktop), **6vw** mobile gutter.
- Fluid Engine grid: 8 columns on desktop, 11px gaps, 24px minimum row height.
- Header: full width, **transparent header** tweak, fixed-header style "basic", nav on the right, about 110px logo on the left. No header CTA button, no social icons, no cart.
- Generous vertical whitespace between sections. Some Fluid Engine sections render with very large empty gaps (homepage between the packages carousel and the retreats section; between the blog grid and "View All Articles"). These look like layout artefacts, not intent.
- **Image shapes (OBSERVED):**
  - The homepage hero photo has very large rounded corners (an organic, asymmetric "blob" crop).
  - Service tiles are circles with coloured rings (baked into the art).
  - Blog cards are square-cornered at 3:2.
  - Portraits are square at 500×500.
- Shadows: none observed. Borders: the footer's 1px white hairline rule, plus horizontal-rule blocks between sections.
- **Animations (VERIFIED body classes):** global animations are set to `animation-type-none`, so there are no scroll or entrance animations. The only motion is the autoplaying gallery sliders (2s interval) on the homepage and Healing Sessions.

## 5. Brand personality (OBSERVED, for the design phase)
- **Tone:** warm, spiritual, nurturing, personal (first-person voice from Sharon on many pages), Bali/jungle setting.
- **Visual:** clean white, airy light-weight type, one vivid teal, and a playful multicolour logo. Imagery mixes real centre and team photos with designed card tiles and atmospheric illustrative blog art.
- **Recurring motifs:** circles and rings (service tiles), flowing swooshes (logo), lush green tropical photography.
