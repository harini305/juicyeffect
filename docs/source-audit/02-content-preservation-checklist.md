# Content Preservation Checklist

The rebuild must keep the original site's **actual words, facts and meaning**. Use this checklist during implementation and QA.

- **Verbatim source for every page:** [content/pages/](content/pages/), one file per route. Sections are in visual order, with headings, paragraphs (bold/italic/links kept), lists, CTA labels and targets, image references and embeds.
- **Verbatim source for every blog post:** [content/blog/](content/blog/), 79 files, indexed in [blog-index.csv](blog-index.csv).
- **Rule:** no generic AI copy, invented claims, fabricated testimonials or placeholder text. Where the source is missing, inconsistent or broken, flag it (see [06-issues-and-open-questions.md](06-issues-and-open-questions.md)) rather than writing new copy.

Tick-box format: `[ ]` = to verify in the rebuild.

---

## A. Global / shared content

### Business & contact facts (VERIFIED from Contact page + site settings)
- [ ] Business: **The Juicy Effect**. Legal entity: **PT The Juicy Effect**, "a fully licenced PT PMA company proudly based in Bali, Indonesia since 2018"
- [ ] Positioning line (site settings tagline): "Energy healing specialists"
- [ ] Site title used in every `<title>`: "Energy Healing Centre Ubud, Bali | The Juicy Effect"
- [ ] WhatsApp (Contact page, the stated best channel): **+62 813 3890 6433** → `https://wa.me/6281338906433`
- [ ] Email: **hello@thejuicyeffect.com** (site settings store "Hello@thejuicyeffect.com")
- [ ] Phone in site settings / structured data: **+62 82145015707**. This differs from the WhatsApp number shown on the page; confirm with the owner which is current.
- [ ] Address: **Jl. Raya Lungsiakan No.49, Kedewatan, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571**
- [ ] Location copy: "a few minutes scooter ride from central Ubud … banjar (local area) of Lungsiakan, set amongst the jungle with the sounds of our own waterfall in the background"
- [ ] Centre Manager named on the Contact page: **Ayu**
- [ ] Google Maps links: `https://g.page/the-juicy-effect?share` (Contact), plus the long-form Google Maps "Google Reviews" links on service pages
- [ ] Facebook: `https://www.facebook.com/thejuicyeffect` · Instagram: `https://www.instagram.com/the.juicy.effect/` (@the.juicy.effect)
- [ ] Hours: service pages say **"9am-5pm Monday to Friday (Bali time), and other times by appointment"**. Site settings say Mon–Sat 9am–5pm, Sunday closed; the structured data says Mon–Fri 09:00–15:00. These conflict; confirm with the owner.
- [ ] On-site café referenced on several pages: **Unity Café** ("Gluten Free, Vegetarian/Vegan Friendly café located on site")
- [ ] Payment methods stated: "We accept cash, credit cards and transfers via bank or transfer app (e.g. Wise or Revolut)"

### Announcement bar (all pages)
- [ ] "We have just launched our private retreats.  Find out more **here**." → `/private-retreats`

### Footer (all pages), verbatim
- [ ] "**The Juicy Effect** is a leading energy healing centre in Ubud, Bali, offering shamanic energy healing, hypnotherapy, breathwork and other transformational wellness sessions for *emotional, mental and spiritual fitness*.  If you are searching for authentic energy healing in Bali, we invite you to experience deep, lasting change."
- [ ] "**Why did we call ourselves The Juicy Effect?**  From Ayurveda, rasa means essence or juice, and ayana means path.  Rasayana is the science of rejuvenation or 'juicing up' in order to live a healthy life.  It is a vibration, a way of life!  This is what The Juicy Effect is all about."
- [ ] "PT The Juicy Effect is a fully licenced PT PMA company proudly based in Bali, Indonesia since 2018.  All of our team members are citizens of Indonesia or have the required working permits for Indonesia."
- [ ] The original footer has no links. A privacy-policy link is recommended in the rebuild (the page exists at `/privacy-policy`).

### Navigation labels (exact)
- [ ] Home · Healing Sessions · Healing Packages · Private Retreats · Workshops · Online Courses · Contact Us · More +
- [ ] More: Blog · Our Story · Meet Sharon Marie · Meet Julia · Meet Gita · Meet Vickya · Meet Jhanavikaa · Things to do in Ubud

### People (preserve names, roles and bios exactly as on their pages)
- [ ] **Sharon Marie Keating** (also "Sharon Marie", "Sharon-Marie", "Sharon Keating"): founder / lead practitioner. Credential block repeated on many pages: "Certified Shamanic Practitioner (Diploma: Shaman College Circle of Earth and Spirit), certified Hypnotherapist, certified Kinesiology Practitioner, certified Ayurvedic Lifestyle Consultant and Body-Mind Nutritionist and Yoga Nidra Instructor…". The site says "15+ years" on most pages but "10+ years" on `/sharon-keating` and `/shamanic-soul-retrieval`; confirm which is current.
- [ ] **Julia**: Access Bars, Energetic Facelift (`/meet-julia`)
- [ ] **Gita Sianipar**: Breathwork, Sound Journey (`/meet-gita-sianipar`)
- [ ] **Vickya**: Private Sound Therapy (`/meet-vickya`)
- [ ] **Jhanavikaa** (spelled "Jhaanavikaa" on `/medical-jyotish`): Medical Jyotish / Vedic Astrology (`/meet-jhanavikaa`)
- [ ] **Jason** (Buchanan): mentioned on Our Story and as the "Start Your Next Chapter" practitioner. The linked page `/jason-buchanan` returns 404 and there is no team page for him.
- [ ] **Ayu**: Centre Manager (Contact)

---

## B. Prices & offer facts (VERIFIED verbatim from pages, 2026-10-16)

All prices are in Indonesian Rupiah (IDR) with approximate USD in brackets, as written on the site. **Reproduce exactly, including the approximate-USD wording.** Prices go stale, so confirm them with the owner before launch.

| Offer | Route | Duration (as stated) | Price (as stated) |
|---|---|---|---|
| Shamanic Energy Healing | `/energy-healing` | ~90 min (2h option) | IDR 2,800,000 (about US$158); 2-hour IDR 3,500,000; 3-session package IDR 8,000,000 (about US$450), "Save IDR 400,000", complete within 3 weeks |
| Shamanic Soul Retrieval | `/shamanic-soul-retrieval` | 90 min | IDR 2,800,000 (approximately $US157) |
| Inner-Child Hypnotherapy | `/hypnotherapy` | first session 90 min | IDR 2,400,000 (about US$136); 2-session IDR 4,500,000; 3-session IDR 6,600,000 |
| Hypnotherapy Package | `/hypnotherapy-package` | 90 + 60 / 90 + 2×60 min | 2 sessions IDR 4,500,000; 3 sessions IDR 6,600,000 |
| Trauma Release Breathwork | `/trauma-release-with-breathwork` | "120-minute" in intro; "approximately 90 minutes" in pricing (inconsistent) | Single IDR 1,900,000 (about US$100); couple IDR 2,800,000 (~100 min); 3-session package "save IDR 500,000" |
| Access Bars | `/energy-healing-access-consciousness` | 75–90 min / couple 90 min | IDR 1,800,000 (about US$100); couple IDR 2,800,000 (about US$160) |
| Womb Healing | `/womb-healing` | ~2h15 | IDR 3,500,000 (approximately US$197) |
| Reiki Healing | `/reiki-healing` | 75–90 min | IDR 1,800,000 (about US$100); couple IDR 2,800,000 |
| Private Sound Therapy | `/private-sound-therapy` | ~90 min | IDR 1,600,000 (about US$90) |
| Vedic Astrology | `/vedic-astrology-navigate-the-unknown` | 60–75 min | IDR 2,300,000 (approx US$135) |
| Medical Jyotish | `/medical-jyotish` | 60–75 min | IDR 1,500,000 (approx US$100) |
| Distance Healing | `/distance-healing` | 90–100 min | IDR 2,400,000 (about US$150), payment prior to session |
| Start Your Next Chapter | `/start-your-next-chapter` | ~90 min | IDR 2,800,000 (approx US$155) |
| Energetic Facelift | `/energetic-facelift-the-natural-alternative` | 75–90 min | IDR 1,600,000 (about US$105) |
| Transformational Healing Package | `/transformational-healing-package` | 4 × 90 min | IDR 8,800,000 (approx. US$495), "Save IDR 800,000" |
| Soulmate Hypnotherapy | `/soulmate-alchemy` | 2 × ~90 min | IDR 4,700,000 (approximately US$265) |
| Womb Healing Immersion Package | `/womb-healing-immersion-package` | 3 × 2h15 + 60 min | IDR 11,200,000 (approx. US$630), "Save IDR 900,000" |
| Activate Your Voice Package | `/activate-your-voice-package` | 90 min + 2h15 + 60–90 min | IDR 7,100,000 (approximately US$410) |
| Ayurvedic Lifestyle Package | `/ayurvedic-lifestyle-package` | 2 sessions / 4 h | IDR 5,500,000 (approx. US $310) |
| How To Keep Your Energetic Field Clear (workshop) | `/how-to-keep-your-energy-field-clear-workshop` | full day | 1.5 Million Rupiah (approximately US$100), incl. lunch from Unity Café |
| Self Love Through Radical Self Acceptance (workshop) | `/self-love-through-radical-self-acceptance` | full day | 1.5 Million Rupiah (approximately US$100), incl. lunch |
| Sacred Womb Healing Immersion (workshop) | `/womb-healing-vision-quest-workshop` | full day | IDR 1.5 million (about US$85), incl. lunch at Unity Café |
| Sound Journey / Breathwork with Gita | `/discover-balance-and-harmony-with-breathwork` | 2 h | IDR 350,000 per person ("less than US20!") |
| Rent Our Space | `/rent-our-space` | hourly / half / full day | "Prices start from just 150k per hour" |
| Private retreats (Womb Sovereign 6-day; Restorative Healing; The Next Chapter) | `/…-retreat` pages | multi-day | **No public price.** "Begin with a private discovery call" → `/contact`; proposal after a pre-call questionnaire |
| Online courses (Womb Alchemy 3 months; Energy Mastery 1:1; Practical Shamanism 7 months; The Medicine Path certification) | `/online` children | — | **No public price.** "Contact us" |

Note the inconsistent USD conversions: IDR 2,800,000 is shown as US$155, US$157, US$158 and US$160 on different pages; IDR 1.5M as US$85 and US$100. Keep them as written unless the owner approves changes.

---

## C. Page-level content to preserve (key items; full text in content/pages)

### Homepage `/` (and duplicate `/home`)
- [ ] H1 "**Transformational Energy Healing Centre in Ubud, Bali**"
- [ ] Intro: "The Juicy Effect is a **wellbeing and energy healing centre** offering private energy healing sessions, immersive workshops and trainings, and soul-nourishing personal retreats.  Led by experienced practitioners, our offerings are designed to support deep healing, personal growth, and vibrant living." and "We are located in Ubud Bali, and available online."
- [ ] Hero card copy: "At The Juicy Effect, we offer deeply personal, deeply powerful healing sessions designed to help you:" plus 5 bullets (Release emotional blocks · Clear stagnant energy · Heal inner child wounds · Restore clarity and vitality · Reconnect with your authentic self.) and the CTA "Take A Tour" → YouTube `VDAG5wBESJQ`
- [ ] "Personal Healing in Bali" + "**Are you visiting Bali for Healing, Growth or Transformation?** …" + sessions carousel (10 slides, each linking to its session page) + CTA "Explore Healing Sessions"
- [ ] "Healing Packages In Bali" + "**Are you coming to Ubud for more than a few days?** …" + packages carousel (7 slides) + CTA "Explore Healing Packages"
- [ ] "Private Retreat Experiences In Bali" + italic lead + paragraph + CTA "VIEW EXPERIENCES"
- [ ] "**Trainings, Courses & Certifications**" (teal section) + CTA "View Courses" → `/online`
- [ ] "From our Instagram…" (live feed) + "Go to Instagram"
- [ ] "From our Blog…" (latest 8 posts with excerpt and "Read more →") + CTA "View All Articles"
- [ ] "Not yet in Ubud?  You can also **connect with us online**." + paragraph + CTA "Visit Instagram"

### Hubs
- [ ] `/healing-sessions`: H1 "**Personal Healing Sessions**", intro, "*Available In Ubud:*", 13 session cards (image + bold service name + description + "Learn More"), "Our Healing Packages are popular too.…" carousel + "Go to  Packages", "Remember to also check out our workshops and events."
- [ ] `/healing-packages`: H1 "**Personal Healing Packages**", intro, 7 package cards (includes a "courses-certifications" link that returns 404)
- [ ] `/private-retreats`: H1 "Private Healing & Transformational Retreats In Ubud, Bali", 3 retreat cards
- [ ] `/workshops-events-learning`: H1 "**Workshops In Ubud**", 4 workshop cards
- [ ] `/online`: H1 "**Online Courses & Certifications**", 4 course blocks with titles exactly as in source (e.g. "Practical Shamanism For The Modern World - 7 months")
- [ ] `/contact`: H1 "**For questions or bookings:**", the contact paragraph (WhatsApp, Ayu, Messenger, Instagram, email), "Looking for us in Ubud?", the address, the Google Maps link, "From all of us at The Juicy Effect, we are looking forward to meeting you." and the team photo

### Detail pages (sessions, packages, workshops, courses, retreats, bios)
For **each** of the 41 detail pages:
- [ ] Title / H1 and subtitle exactly as in source
- [ ] Every content section ("What you can expect", "Benefits of this session include:", session breakdowns with durations, "Investment", practitioner credential paragraph, availability sentence, "contact us" CTA, "Learn more about … here", "You can check out our Google Reviews here")
- [ ] All numbered and bulleted lists (benefits, inclusions, itineraries, Transformational Arc, FAQs)
- [ ] Retreat pages: the day-by-day accordion itineraries (Restorative Healing, Womb Sovereign), inclusions, optional additions, "Begin with a private discovery call", FAQ answers (e.g. "What happens after I enquire?")
- [ ] Embedded YouTube videos at their original positions (see 05-functionality-and-dependencies.md)

### Blog (79 posts)
- [ ] Title, publish date, author ("Sharon Keating" ×46, "The Juicy Effect" ×33), categories, tags, featured image, excerpt, full body with inline images, videos and links
- [ ] Original URLs (both `/blog/YYYY/M/D/slug` and `/blog/slug` formats). Keep them or 301-redirect.
- [ ] Old monetisation content (Amazon affiliate blocks with tag `thejuicyeff08-20`, Google AdSense code blocks, an empty product block) is still live. The owner must decide whether to keep or drop it.

### Legal
- [ ] `/privacy-policy`: full text (TermsFeed-generated, about 2,000 words), verbatim.

---

## D. SEO metadata to carry over
- [ ] Per-page `<title>` and meta description: listed in [01-page-inventory.md](01-page-inventory.md) and [blog-index.csv](blog-index.csv)
- [ ] Homepage SEO title in Squarespace ("The Juicy Effect Boutique Wellbeing Sanctuary - More Awesome More Often") differs from the rendered `<title>` ("Energy Healing Centre Ubud, Bali | The Juicy Effect"). The rendered one is what search engines see.
- [ ] og:image: the global share logo (`source-assets/brand/08b76c_Untitled_design_(4).png`) on pages; the featured image on posts. twitter:card = summary.
- [ ] Language `en-AU`; canonical host `https://www.thejuicyeffect.com` (apex 301-redirects to www)
- [ ] Structured data (WebSite, Organization, LocalBusiness) exists but contains errors; fix them in the rebuild (see 06).
