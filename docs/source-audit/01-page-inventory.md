# Page & Route Inventory

Source: live crawl of https://www.thejuicyeffect.com on 2026-10-16 (sitemap.xml plus HTML and `?format=json` for every URL). Every page returned HTTP 200.
The verbatim extracted content of each page is in [content/pages/](content/pages/), one Markdown file per route, with sections in their original visual order.

## Route summary

| # | Route | Nav label / title | Group | In main nav | Inbound links | Sections | Layout engine | Words* | Content file |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `/` | Home | Core / hub pages | yes | 4 | 6 | classic-layout, fluid-engine | 896 | [root.md](content/pages/root.md) |
| 2 | `/home` | Home | Core / hub pages | no | 0 | 6 | classic-layout, fluid-engine | 896 | [home.md](content/pages/home.md) |
| 3 | `/healing-sessions` | Healing Sessions | Core / hub pages | yes | 3 | 2 | classic-layout, fluid-engine | 894 | [healing-sessions.md](content/pages/healing-sessions.md) |
| 4 | `/healing-packages` | Healing Packages | Core / hub pages | yes | 8 | 2 | classic-layout, fluid-engine | 552 | [healing-packages.md](content/pages/healing-packages.md) |
| 5 | `/private-retreats` | Private Retreats | Core / hub pages | yes | 3 | 2 | classic-layout, fluid-engine | 554 | [private-retreats.md](content/pages/private-retreats.md) |
| 6 | `/workshops-events-learning` | Workshops | Core / hub pages | yes | 4 | 1 | classic-layout | 395 | [workshops-events-learning.md](content/pages/workshops-events-learning.md) |
| 7 | `/online` | Online Courses | Core / hub pages | yes | 2 | 2 | fluid-engine | 537 | [online.md](content/pages/online.md) |
| 8 | `/contact` | Contact Us | Core / hub pages | yes | 34 | 2 | fluid-engine | 269 | [contact.md](content/pages/contact.md) |
| 9 | `/energy-healing` | Shamanic Energy Healing | Individual healing sessions | no | 12 | 2 | classic-layout | 1026 | [energy-healing.md](content/pages/energy-healing.md) |
| 10 | `/shamanic-soul-retrieval` | Shamanic Soul Retrieval | Individual healing sessions | no | 5 | 2 | classic-layout | 565 | [shamanic-soul-retrieval.md](content/pages/shamanic-soul-retrieval.md) |
| 11 | `/hypnotherapy` | Healing The Inner Child With Hypnotherapy | Individual healing sessions | no | 8 | 2 | classic-layout | 750 | [hypnotherapy.md](content/pages/hypnotherapy.md) |
| 12 | `/trauma-release-with-breathwork` | Trauma Release with Breathwork | Individual healing sessions | no | 4 | 2 | classic-layout | 543 | [trauma-release-with-breathwork.md](content/pages/trauma-release-with-breathwork.md) |
| 13 | `/energy-healing-access-consciousness` | Release Blockages with Access Bars | Individual healing sessions | no | 4 | 2 | classic-layout | 826 | [energy-healing-access-consciousness.md](content/pages/energy-healing-access-consciousness.md) |
| 14 | `/womb-healing` | Womb Healing - A Shamanic Healing Journey | Individual healing sessions | no | 6 | 2 | classic-layout, fluid-engine | 681 | [womb-healing.md](content/pages/womb-healing.md) |
| 15 | `/reiki-healing` | Reiki Healing | Individual healing sessions | no | 4 | 2 | classic-layout | 491 | [reiki-healing.md](content/pages/reiki-healing.md) |
| 16 | `/private-sound-therapy` | Private Sound Therapy | Individual healing sessions | no | 4 | 2 | fluid-engine | 450 | [private-sound-therapy.md](content/pages/private-sound-therapy.md) |
| 17 | `/vedic-astrology-navigate-the-unknown` | Discover Yourself with Astrology | Individual healing sessions | no | 6 | 2 | fluid-engine | 644 | [vedic-astrology-navigate-the-unknown.md](content/pages/vedic-astrology-navigate-the-unknown.md) |
| 18 | `/medical-jyotish` | Medical Jyotish / Astrology | Individual healing sessions | no | 4 | 2 | classic-layout | 423 | [medical-jyotish.md](content/pages/medical-jyotish.md) |
| 19 | `/distance-healing` | Distance Energy Healing With Sharon | Individual healing sessions | no | 1 | 2 | classic-layout, fluid-engine | 682 | [distance-healing.md](content/pages/distance-healing.md) |
| 20 | `/start-your-next-chapter` | Start Your Next Chapter | Individual healing sessions | no | 1 | 2 | fluid-engine | 648 | [start-your-next-chapter.md](content/pages/start-your-next-chapter.md) |
| 21 | `/energetic-facelift-the-natural-alternative` | Energetic Facelift - the natural alternative | Individual healing sessions | no | 0 | 2 | classic-layout | 720 | [energetic-facelift-the-natural-alternative.md](content/pages/energetic-facelift-the-natural-alternative.md) |
| 22 | `/transformational-healing-package` | Transformational Healing Package | Healing packages | no | 5 | 1 | classic-layout | 729 | [transformational-healing-package.md](content/pages/transformational-healing-package.md) |
| 23 | `/soulmate-alchemy` | Soulmate Hypnotherapy | Healing packages | no | 6 | 2 | classic-layout, fluid-engine | 631 | [soulmate-alchemy.md](content/pages/soulmate-alchemy.md) |
| 24 | `/womb-healing-immersion-package` | Womb Healing Immersion Package | Healing packages | no | 6 | 1 | classic-layout | 864 | [womb-healing-immersion-package.md](content/pages/womb-healing-immersion-package.md) |
| 25 | `/activate-your-voice-package` | Activate Your Voice Package | Healing packages | no | 5 | 2 | fluid-engine | 647 | [activate-your-voice-package.md](content/pages/activate-your-voice-package.md) |
| 26 | `/ayurvedic-lifestyle-package` | Ayurvedic Lifestyle Package | Healing packages | no | 5 | 2 | classic-layout | 701 | [ayurvedic-lifestyle-package.md](content/pages/ayurvedic-lifestyle-package.md) |
| 27 | `/hypnotherapy-package` | Hypnotherapy Package | Healing packages | no | 1 | 2 | classic-layout | 427 | [hypnotherapy-package.md](content/pages/hypnotherapy-package.md) |
| 28 | `/womb-sovereign-private-retreat` | The Womb Sovereign Retreat | Private retreats | no | 1 | 4 | fluid-engine | 3223 | [womb-sovereign-private-retreat.md](content/pages/womb-sovereign-private-retreat.md) |
| 29 | `/restorative-healing-personal-retreat` | Restorative Healing Personal Retreat | Private retreats | no | 1 | 4 | fluid-engine | 2177 | [restorative-healing-personal-retreat.md](content/pages/restorative-healing-personal-retreat.md) |
| 30 | `/the-next-chapter-private-retreat` | The Next Chapter Private Retreat | Private retreats | no | 2 | 9 | fluid-engine | 1190 | [the-next-chapter-private-retreat.md](content/pages/the-next-chapter-private-retreat.md) |
| 31 | `/womb-healing-vision-quest-workshop` | Sacred Womb Healing Immersion | Workshops (group, in Ubud) | no | 2 | 2 | fluid-engine | 733 | [womb-healing-vision-quest-workshop.md](content/pages/womb-healing-vision-quest-workshop.md) |
| 32 | `/how-to-keep-your-energy-field-clear-workshop` | How To Keep Your Energetic Field Clear | Workshops (group, in Ubud) | no | 2 | 2 | fluid-engine | 400 | [how-to-keep-your-energy-field-clear-workshop.md](content/pages/how-to-keep-your-energy-field-clear-workshop.md) |
| 33 | `/self-love-through-radical-self-acceptance` | Self Love Through Radical Self Acceptance | Workshops (group, in Ubud) | no | 2 | 2 | classic-layout | 558 | [self-love-through-radical-self-acceptance.md](content/pages/self-love-through-radical-self-acceptance.md) |
| 34 | `/discover-balance-and-harmony-with-breathwork` | Discover Balance and Harmony with Breathwork | Workshops (group, in Ubud) | no | 2 | 2 | fluid-engine | 337 | [discover-balance-and-harmony-with-breathwork.md](content/pages/discover-balance-and-harmony-with-breathwork.md) |
| 35 | `/womb-alchemy-a-return-to-sovereignty` | Womb Alchemy - A Return To Sovereignty | Online courses & certifications | no | 6 | 2 | fluid-engine | 1479 | [womb-alchemy-a-return-to-sovereignty.md](content/pages/womb-alchemy-a-return-to-sovereignty.md) |
| 36 | `/energy-mastery-1-to-1-spiritual-mentoring-program` | Energy Mastery 1 to 1 Spiritual Mentoring Program | Online courses & certifications | no | 1 | 2 | fluid-engine | 945 | [energy-mastery-1-to-1-spiritual-mentoring-program.md](content/pages/energy-mastery-1-to-1-spiritual-mentoring-program.md) |
| 37 | `/practical-shamanism-for-the-real-world` | Practical Shamanism For The Modern World | Online courses & certifications | no | 1 | 2 | fluid-engine | 729 | [practical-shamanism-for-the-real-world.md](content/pages/practical-shamanism-for-the-real-world.md) |
| 38 | `/the-medicine-path-practitioner-certification` | The Medicine Path - Practitioner Certification | Online courses & certifications | no | 3 | 2 | fluid-engine | 778 | [the-medicine-path-practitioner-certification.md](content/pages/the-medicine-path-practitioner-certification.md) |
| 39 | `/the-juicy-effect-story` | Our Story | About / team / info | yes | 0 | 2 | classic-layout | 617 | [the-juicy-effect-story.md](content/pages/the-juicy-effect-story.md) |
| 40 | `/sharon-keating` | Meet Sharon Marie | About / team / info | yes | 17 | 2 | classic-layout | 504 | [sharon-keating.md](content/pages/sharon-keating.md) |
| 41 | `/meet-julia` | Meet Julia | About / team / info | yes | 1 | 2 | classic-layout | 343 | [meet-julia.md](content/pages/meet-julia.md) |
| 42 | `/meet-gita-sianipar` | Meet Gita | About / team / info | yes | 1 | 2 | classic-layout | 225 | [meet-gita-sianipar.md](content/pages/meet-gita-sianipar.md) |
| 43 | `/meet-vickya` | Meet Vickya | About / team / info | yes | 1 | 2 | classic-layout, fluid-engine | 290 | [meet-vickya.md](content/pages/meet-vickya.md) |
| 44 | `/meet-jhanavikaa` | Meet Jhanavikaa | About / team / info | yes | 1 | 2 | classic-layout | 255 | [meet-jhanavikaa.md](content/pages/meet-jhanavikaa.md) |
| 45 | `/things-to-do-in-ubud` | Things to do in Ubud | About / team / info | yes | 0 | 1 | classic-layout | 932 | [things-to-do-in-ubud.md](content/pages/things-to-do-in-ubud.md) |
| 46 | `/rent-our-space` | Rent Our Space | About / team / info | no | 0 | 2 | classic-layout | 544 | [rent-our-space.md](content/pages/rent-our-space.md) |
| 47 | `/privacy-policy` | Privacy Policy | About / team / info | no | 0 | 1 | classic-layout | 2062 | [privacy-policy.md](content/pages/privacy-policy.md) |
| 48 | `/packages-1` | Packages | Legacy / orphan gallery pages | no | 0 | 1 | gallery section | 203 | [packages-1.md](content/pages/packages-1.md) |
| 49 | `/personal-consultations` | Personal Consultations | Legacy / orphan gallery pages | no | 0 | 1 | gallery section | 279 | [personal-consultations.md](content/pages/personal-consultations.md) |
| 50 | `/workshops` | Workshops | Legacy / orphan gallery pages | no | 0 | 1 | gallery section | 115 | [workshops.md](content/pages/workshops.md) |
| 51 | `/blog` | Blog | Blog | yes | 2 | 3 | classic-layout | 362 | [blog.md](content/pages/blog.md) |

*Word counts include the extraction annotations, so treat them as approximate.

### Collections & archive routes (not individually audited)

- `/blog/<slug>`: 79 posts. See [blog-index.csv](blog-index.csv) and [content/blog/](content/blog/).
- `/blog/category/{Personal, Small+Bites, Business}`: 3 category archives (auto-generated listing views).
- `/blog/tag/<tag>`: 154 tag archives (auto-generated listing views). The full list is in [blog-tags-and-categories.md](blog-tags-and-categories.md).
- Legacy blog URL formats coexist: `/blog/YYYY/M/D/slug` (older posts) and `/blog/slug` (newer posts). Preserve both in the rebuild or add redirects.

## Global navigation (verified from header HTML)

Desktop header (layout `navRight`, logo left): Home `/` · Healing Sessions `/healing-sessions` · Healing Packages `/healing-packages` · Private Retreats `/private-retreats` · Workshops `/workshops-events-learning` · Online Courses `/online` · Contact Us `/contact` · **More +** (folder dropdown, no landing page on desktop).

"More +" dropdown: Blog `/blog` · Our Story `/the-juicy-effect-story` · Meet Sharon Marie `/sharon-keating` · Meet Julia `/meet-julia` · Meet Gita `/meet-gita-sianipar` · Meet Vickya `/meet-vickya` · Meet Jhanavikaa `/meet-jhanavikaa` · Things to do in Ubud `/things-to-do-in-ubud`.

Mobile: logo left, double-line hamburger right. The menu opens a full-screen overlay (fade, white background, black links). "More +" opens a sub-panel with a "Back" link; the mobile markup gives the folder an href of `/about`, which is not a real page.

Announcement bar (all pages, teal background, dismissible ×): "We have just launched our private retreats.  Find out more here." → `/private-retreats`.

Footer (all pages, "bright" theme = #454545 background, white text): a hairline rule, then three paragraphs (about, name origin, PT PMA licence). The footer has **no links**: no nav, no social icons, no privacy link, no contact details.

---

## Page-by-page detail

### Core / hub pages

#### `/` — Home

- **Purpose:** Homepage. Introduces the centre, links to sessions, packages, retreats and courses, and shows the Instagram feed and latest blog posts.
- **HTML title:** Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Juicy Effect is a transformational wellbeing and healing centre offering private energy healing sessions, immersive workshops and trainings, and soul-nourishing retreats.  Led by experienced practitioners, our offerings are designed to support deep healing, personal growth, and vibrant living.  Release Emotional Blocks, Heal Inner Child Wounds, Reconnect with your authentic self.
- **In main nav:** yes · **Inbound internal links from:** /blog/2015/8/18/would-you-only-maintain-the-engine-in-your-car, /blog/from-the-journey-the-sacred-spiral, /blog/the-soul-remembers-healing-the-spiritual-pain-body, /blog/what-is-healing-anyway
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 6
- **Content file:** [content/pages/root.md](content/pages/root.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Transformational Energy Healing Centre in Ubud, Bali
    - CTA: "Take A Tour" → https://youtu.be/VDAG5wBESJQ
  - **Section 2  theme=white-bold**
    - Heading: Personal Healing in Bali
    - Component: [GALLERY] design=slider autoplay=True (2s) thumbnails=True lightbox=False aspect=square
    - CTA: "Explore Healing Sessions" → /healing-sessions
    - Heading: Healing Packages In Bali
    - Component: [GALLERY] design=slider autoplay=True (2s) thumbnails=None lightbox=False aspect=square
    - CTA: "Explore Healing Packages" → /healing-packages
  - **Section 3  theme=white**
    - Heading: Private Retreat Experiences In Bali
    - CTA: "VIEW EXPERIENCES" → /private-retreats
  - **Section 4  theme=light**
    - Heading: Trainings, Courses & Certifications
    - CTA: "View Courses" → /online
  - **Section 5  theme=default**
    - Heading: From our Instagram…
    - Component: [INSTAGRAM BLOCK]
  - **Section 6  theme=white-bold**
    - Heading: From our Blog…
    - Component: [SUMMARY BLOCK — dynamic collection feed]
    - CTA: "View All Articles" → /blog
    - Heading: Not yet in Ubud?  You can also connect with us online.
    - CTA: "Visit Instagram" → https://www.instagram.com/the.juicy.effect (new tab)
- **Assets (27 unique images):**
  - image: `source-assets/pages/2787ea_The_Juicy_Effect_Wellbeing_Healing_in_Ubud.png`
  - gallery: `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — alt: “Shamanic Energy Healing - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — alt: “Shamanic Soul and Power Animal Retrieval (Copy)”
  - gallery: `source-assets/pages/84e14d_Website_Images_Round_(10).png` — alt: “Inner Child Healing with Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/405255_Website_Images_Round.png` — alt: “Trauma Release with Breathwork (Copy)”
  - gallery: `source-assets/pages/988f35_Website_Images_Round.png` — alt: “Restore Balance with Access Bars (Copy)”
  - gallery: `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — alt: “Womb Healing (Copy)”
  - gallery: `source-assets/pages/eda8e2_image-asset.png` — alt: “Reiki Healing (Copy)”
  - gallery: `source-assets/pages/829658_Private_Sound_Healing.png` — alt: “Private Sound Healing.png”
  - gallery: `source-assets/pages/57cd6c_image-asset.png` — alt: “Medical & Health Astrology (Copy)”
  - gallery: `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — alt: “Discover Your Hidden Self (Copy)”
  - gallery: `source-assets/pages/616f1e_Website_Images_Round_(31).png` — alt: “Transformational Healing Package (Copy)”
  - gallery: `source-assets/pages/fcb801_The_Juicy_Effect_Healing_(20).png` — alt: “Deep Energy Healing Package (Copy)”
  - gallery: `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — alt: “Soulmate Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — alt: “Ayurvedic Lifestyle Plan (Copy)”
  - gallery: `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — alt: “Hypnotherapy Packages (Copy)”
  - gallery: `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — alt: “Activate Your Voice Package - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/3f9b68_The_Juicy_Effect_Healing_(26).png` — alt: “Womb Healing Immersion Package”
  - image: `source-assets/pages/3c24ba_WhatsApp_Image_2026-02-20_at_5.57.34_PM.jpg`
  - summary-thumb: `source-assets/pages/f1d8eb_WhatsApp_Image_2026-08-27_at_5.51.32_PM.jpeg` — alt: “The Healing We Cannot Think Our Way Through”
  - summary-thumb: `source-assets/pages/400289_From_The_Journey.jpeg` — alt: “From The Journey:  The Joy That Heals”
  - summary-thumb: `source-assets/pages/bda91a_The_Sacred_Spiral.jpeg` — alt: “From the Journey - The Sacred Spiral”
  - summary-thumb: `source-assets/pages/07ca0d_Many_Faces_of_Womb_-_The_Juicy_Effect.jpeg` — alt: “The many faces of the Womb Guardian”
  - summary-thumb: `source-assets/pages/4d4705_The_Womb_Guardian.png` — alt: “The Womb Guardian”
  - summary-thumb: `source-assets/pages/63def9_WhatsApp_Image_2026-07-09_at_2.58.09_PM.jpeg` — alt: “Stepping Into Your Womb Sovereign Power”
  - summary-thumb: `source-assets/pages/7f9923_Embodying_YES_to_life_-_The_Juicy_Effect.jpg` — alt: “Embodying an attitude of YES to life”
  - summary-thumb: `source-assets/pages/2e32c2_Inner_Child_Hypnotherapy_The_Juicy_Effect.jpeg` — alt: “If You Don't Feel Seen, How Are You Not Seeing Yourself?”
- **Embeds / integrations:** instagram

#### `/home` — Home

- **Purpose:** Duplicate of the homepage at a second URL (same collection title "Home"). Canonical points to /home itself, so this is a duplicate-content risk.
- **HTML title:** Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Juicy Effect is a transformational wellbeing and healing centre offering private energy healing sessions, immersive workshops and trainings, and soul-nourishing retreats.  Led by experienced practitioners, our offerings are designed to support deep healing, personal growth, and vibrant living.  Release Emotional Blocks, Heal Inner Child Wounds, Reconnect with your authentic self.
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 6
- **Content file:** [content/pages/home.md](content/pages/home.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Transformational Energy Healing Centre in Ubud, Bali
    - CTA: "Take A Tour" → https://youtu.be/VDAG5wBESJQ
  - **Section 2  theme=white-bold**
    - Heading: Personal Healing in Bali
    - Component: [GALLERY] design=slider autoplay=True (2s) thumbnails=True lightbox=False aspect=square
    - CTA: "Explore Healing Sessions" → /healing-sessions
    - Heading: Healing Packages In Bali
    - Component: [GALLERY] design=slider autoplay=True (2s) thumbnails=None lightbox=False aspect=square
    - CTA: "Explore Healing Packages" → /healing-packages
  - **Section 3  theme=white**
    - Heading: Private Retreat Experiences In Bali
    - CTA: "VIEW EXPERIENCES" → /private-retreats
  - **Section 4  theme=light**
    - Heading: Trainings, Courses & Certifications
    - CTA: "View Courses" → /online
  - **Section 5  theme=default**
    - Heading: From our Instagram…
    - Component: [INSTAGRAM BLOCK]
  - **Section 6  theme=white-bold**
    - Heading: From our Blog…
    - Component: [SUMMARY BLOCK — dynamic collection feed]
    - CTA: "View All Articles" → /blog
    - Heading: Not yet in Ubud?  You can also connect with us online.
    - CTA: "Visit Instagram" → https://www.instagram.com/the.juicy.effect (new tab)
- **Assets (27 unique images):**
  - image: `source-assets/pages/2787ea_The_Juicy_Effect_Wellbeing_Healing_in_Ubud.png`
  - gallery: `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — alt: “Shamanic Energy Healing - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — alt: “Shamanic Soul and Power Animal Retrieval (Copy)”
  - gallery: `source-assets/pages/84e14d_Website_Images_Round_(10).png` — alt: “Inner Child Healing with Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/405255_Website_Images_Round.png` — alt: “Trauma Release with Breathwork (Copy)”
  - gallery: `source-assets/pages/988f35_Website_Images_Round.png` — alt: “Restore Balance with Access Bars (Copy)”
  - gallery: `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — alt: “Womb Healing (Copy)”
  - gallery: `source-assets/pages/eda8e2_image-asset.png` — alt: “Reiki Healing (Copy)”
  - gallery: `source-assets/pages/829658_Private_Sound_Healing.png` — alt: “Private Sound Healing.png”
  - gallery: `source-assets/pages/57cd6c_image-asset.png` — alt: “Medical & Health Astrology (Copy)”
  - gallery: `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — alt: “Discover Your Hidden Self (Copy)”
  - gallery: `source-assets/pages/616f1e_Website_Images_Round_(31).png` — alt: “Transformational Healing Package (Copy)”
  - gallery: `source-assets/pages/fcb801_The_Juicy_Effect_Healing_(20).png` — alt: “Deep Energy Healing Package (Copy)”
  - gallery: `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — alt: “Soulmate Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — alt: “Ayurvedic Lifestyle Plan (Copy)”
  - gallery: `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — alt: “Hypnotherapy Packages (Copy)”
  - gallery: `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — alt: “Activate Your Voice Package - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/3f9b68_The_Juicy_Effect_Healing_(26).png` — alt: “Womb Healing Immersion Package”
  - image: `source-assets/pages/3c24ba_WhatsApp_Image_2026-02-20_at_5.57.34_PM.jpg`
  - summary-thumb: `source-assets/pages/f1d8eb_WhatsApp_Image_2026-08-27_at_5.51.32_PM.jpeg` — alt: “The Healing We Cannot Think Our Way Through”
  - summary-thumb: `source-assets/pages/400289_From_The_Journey.jpeg` — alt: “From The Journey:  The Joy That Heals”
  - summary-thumb: `source-assets/pages/bda91a_The_Sacred_Spiral.jpeg` — alt: “From the Journey - The Sacred Spiral”
  - summary-thumb: `source-assets/pages/07ca0d_Many_Faces_of_Womb_-_The_Juicy_Effect.jpeg` — alt: “The many faces of the Womb Guardian”
  - summary-thumb: `source-assets/pages/4d4705_The_Womb_Guardian.png` — alt: “The Womb Guardian”
  - summary-thumb: `source-assets/pages/63def9_WhatsApp_Image_2026-07-09_at_2.58.09_PM.jpeg` — alt: “Stepping Into Your Womb Sovereign Power”
  - summary-thumb: `source-assets/pages/7f9923_Embodying_YES_to_life_-_The_Juicy_Effect.jpg` — alt: “Embodying an attitude of YES to life”
  - summary-thumb: `source-assets/pages/2e32c2_Inner_Child_Hypnotherapy_The_Juicy_Effect.jpeg` — alt: “If You Don't Feel Seen, How Are You Not Seeing Yourself?”
- **Embeds / integrations:** instagram

#### `/healing-sessions` — Healing Sessions

- **Purpose:** Hub listing all individual healing sessions (image card + description + "Learn More") plus a packages carousel.
- **HTML title:** Personal Healing Sessions — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** At The Juicy Effect, we offer personal healing sessions and consultations tailored to your circumstances and needs.  We offer a range of options for healing trauma and improving the health of your energy field.
- **In main nav:** yes · **Inbound internal links from:** /, /blog/the-healing-we-cannot-think-our-way-through, /home
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/healing-sessions.md](content/pages/healing-sessions.md)
- **Section order & components:**
  - **Section 1  theme=default**
    - Heading: Personal Healing Sessions
  - **Section 2  theme=white-bold**
    - CTA: "Learn More" → /energy-healing
    - CTA: "Learn More" → /shamanic-soul-retrieval
    - CTA: "Learn More" → /hypnotherapy
    - CTA: "Learn More" → https://www.thejuicyeffect.com/trauma-release-with-breathwork
    - CTA: "Learn More" → /energy-healing-access-consciousness
    - CTA: "Learn More" → /womb-healing
    - CTA: "Learn More" → /reiki-healing
    - CTA: "Learn More" → /private-sound-therapy
    - CTA: "Learn More" → /vedic-astrology-navigate-the-unknown
    - CTA: "Learn More" → /medical-jyotish
    - CTA: "Learn More" → /distance-healing
    - CTA: "Learn More" → /start-your-next-chapter
    - CTA: "Learn More" → /vedic-astrology-navigate-the-unknown
    - Heading: Our Healing Packages are popular too.…
    - Component: [GALLERY] design=slider autoplay=True (2s) thumbnails=None lightbox=False aspect=square
    - CTA: "Go to  Packages" → /healing-packages
    - Heading: Remember to also check out our [workshops and events.](/workshops-events-learning)
- **Assets (19 unique images):**
  - image: `source-assets/pages/08de44_The_Juicy_Effect_Healing_(7).png`
  - image: `source-assets/pages/d98c58_The_Juicy_Effect_Healing_(9).png`
  - image: `source-assets/pages/37c8c1_The_Juicy_Effect_Healing_(15).png`
  - image: `source-assets/pages/2578ac_The_Juicy_Effect_Healing_(10).png`
  - image: `source-assets/pages/a76f34_The_Juicy_Effect_Healing_(14).png`
  - image: `source-assets/pages/032e5a_The_Juicy_Effect_Healing_(3).png`
  - image: `source-assets/pages/ab2b07_Reiki_Healing_-_The_Juicy_Effect.png`
  - image: `source-assets/pages/970785_Private_Sound_Therapy.png`
  - image: `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png`
  - image: `source-assets/pages/529714_The_Juicy_Effect_Healing_(18).png`
  - image: `source-assets/pages/753fa7_Distance_Healing_The_Juicy_Effect.png`
  - image: `source-assets/pages/2a1bd0_The_Juicy_Effect_Healing_-_Start_Your_Next_Chapter.png`
  - image: `source-assets/pages/980246_Discover_Yourself_Astrology_-_The_Juicy_Effect.png`
  - gallery: `source-assets/pages/616f1e_Website_Images_Round_(31).png` — alt: “Transformational Healing Package (Copy)”
  - gallery: `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — alt: “Soulmate Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — alt: “Ayurvedic Lifestyle Plan (Copy)”
  - gallery: `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — alt: “Hypnotherapy Packages (Copy)”
  - gallery: `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — alt: “Activate Your Voice Package - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/6231df_The_Next_Chapter_Personal_Retreat.png` — alt: “The Next Chapter Personal Retreat.png”

#### `/healing-packages` — Healing Packages

- **Purpose:** Hub listing multi-session healing packages.
- **HTML title:** Personal Healing Packages — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Juicy Effect offers multi-session personal wellbeing and healing packages delivered in person in Ubud which allow us to spend more time together to achieve specific wellbeing and healing goals.
- **In main nav:** yes · **Inbound internal links from:** /, /blog/the-soul-remembers-healing-the-spiritual-pain-body, /energy-healing, /healing-sessions, /home, /hypnotherapy, /shamanic-soul-retrieval, /vedic-astrology-navigate-the-unknown
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/healing-packages.md](content/pages/healing-packages.md)
- **Section order & components:**
  - **Section 1  theme=default**
    - Heading: Personal Healing Packages
  - **Section 2  theme=white-bold**
    - CTA: "Learn More" → /transformational-healing-package
    - CTA: "Learn More" → /the-next-chapter-private-retreat
    - CTA: "Learn More" → /soulmate-alchemy
    - CTA: "Learn More" → /womb-healing-immersion-package
    - CTA: "Learn More" → /activate-your-voice-package
    - CTA: "Learn More" → /ayurvedic-lifestyle-package
    - CTA: "Learn More" → /hypnotherapy-package
- **Assets (7 unique images):**
  - image: `source-assets/pages/b00a4b_Transformational_Healing_Package_at_The_Juicy_Effect.png` — alt: “Transformational Healing Package at The Juicy Effect”
  - image: `source-assets/pages/637864_The_Next_Chapter_Personal_Retreat.png`
  - image: `source-assets/pages/9ba5e1_Soulmate_Hypnotherapy_package_at_The_Juicy_Effect.png` — alt: “Soulmate Hypnotherapy package at The Juicy Effect”
  - image: `source-assets/pages/16bc11_Womb_Healing_Immersion_Package.png` — alt: “Womb Healing Immersion Package The Juicy Effect”
  - image: `source-assets/pages/693d0e_Activate_Your_Voice_Package_-_The_Juicy_Effect.png` — alt: “Activate Your Voice Package - The Juicy Effect”
  - image: `source-assets/pages/96bb80_Ayurvedic_Lifestyle_Package_at_The_Juicy_effect.png` — alt: “Ayurvedic Lifestyle Package at The Juicy effect”
  - image: `source-assets/pages/887af8_Hypnotherapy_Packages_at_The_Juicy_Effect.png` — alt: “Hypnotherapy Packages at The Juicy Effect”

#### `/private-retreats` — Private Retreats

- **Purpose:** Hub for the three private one-to-one retreats (nav item; also the announcement-bar target).
- **HTML title:** Private Retreats In Ubud — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Juicy Effect offers private retreats for people who are looking for deep transformation.  Think of this as an opportunity to work 1:1 with our expert practitioners with a program tailored specifcially to you, with private villa accommodation included.
- **In main nav:** yes · **Inbound internal links from:** /, /blog/the-healing-we-cannot-think-our-way-through, /home
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/private-retreats.md](content/pages/private-retreats.md)
- **Section order & components:**
  - **Section 1  theme=default**
    - Heading: Private Healing & Transformational Retreats In Ubud, Bali
  - **Section 2  theme=white-bold**
    - CTA: "Learn More" → /womb-sovereign-private-retreat
    - CTA: "Learn More" → /restorative-healing-personal-retreat
    - CTA: "Learn More" → /the-next-chapter-private-retreat
- **Assets (4 unique images):**
  - image: `source-assets/pages/364eaa_WhatsApp_Image_2026-02-20_at_5.57.34_PM.jpg`
  - image: `source-assets/pages/ffd4e3_Womb_Sovereign_Personal_Retreat.png`
  - image: `source-assets/pages/41a25c_Restorative_Healing_Personal_Retreat.png`
  - image: `source-assets/pages/b6a4c2_The_Next_Chapter_Personal_Retreat.png`

#### `/workshops-events-learning` — Workshops

- **Purpose:** Hub listing group workshops held in Ubud (nav label "Workshops").
- **HTML title:** Workshops In Ubud — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** At The Juicy Effect, we hold our workshops in our private jungle-view event space.  To enquire or book a spot for our workshops, simply whatsapp us on +62 813 3890 6433.
- **In main nav:** yes · **Inbound internal links from:** /, /healing-packages, /healing-sessions, /home
- **Layout engine:** classic-layout · **Sections:** 1
- **Content file:** [content/pages/workshops-events-learning.md](content/pages/workshops-events-learning.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Workshops In Ubud
    - CTA: "Learn More" → /womb-healing-vision-quest-workshop
    - CTA: "Learn More" → /how-to-keep-your-energy-field-clear-workshop
    - CTA: "Learn More" → https://www.thejuicyeffect.com/self-love-through-radical-self-acceptance
    - CTA: "Learn More" → /discover-balance-and-harmony-with-breathwork
- **Assets (4 unique images):**
  - image: `source-assets/pages/2ffc64_Sacred_Womb_Healing_Immersion_photo.png`
  - image: `source-assets/pages/a90ed2_Sharon_And_Ganesh_(1).jpg`
  - image: `source-assets/pages/d0f583_Workshop.jpg` — alt: “Self Love Workshop at The Juicy Effect”
  - image: `source-assets/pages/3b423e_Breathwork_workshop_at_The_Juicy_Effect.jpg` — alt: “Breathwork workshop at The Juicy Effect”

#### `/online` — Online Courses

- **Purpose:** Hub listing online courses, mentoring and certifications (nav label "Online Courses").
- **HTML title:** Energy Healing Courses & Certifications — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** if you are interested in Shamanic Energy Healing, Energy Wisdom or Shamanic Mentorship for self-healing or professional development, The Juicy Effect have several options to help you develop your knowledge in Energy Healing.  
- **In main nav:** yes · **Inbound internal links from:** /, /home
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/online.md](content/pages/online.md)
- **Section order & components:**
  - **Section 1  theme=default**
    - Heading: Online Courses & Certifications
  - **Section 2  theme=white-bold**
    - Heading: Womb Alchemy - A Return To Sovereignty
    - CTA: "Learn More" → /womb-alchemy-a-return-to-sovereignty
    - Heading: Energy Mastery for Self-Empowerment - 1:1 Mentorship
    - CTA: "Learn More" → /energy-mastery-1-to-1-spiritual-mentoring-program
    - Heading: Practical Shamanism For The Modern World - 7 months
    - CTA: "Learn More" → /practical-shamanism-for-the-real-world
    - Heading: The Medicine Path - Practitioner Certification
    - CTA: "Learn More" → /the-medicine-path-practitioner-certification
- **Assets (4 unique images):**
  - image: `source-assets/pages/63d594_DSCF0837.png` — alt: “A woman sitting cross-legged on the floor, holding a large, round, yellow leaf with a long”
  - image: `source-assets/pages/8ec115_Energy_Mastery_Empowerment_Program_-_The_Juicy_Effect.jpg` — alt: “A woman seated cross-legged on a yoga mat in a meditation room, with her eyes closed. Behi”
  - image: `source-assets/pages/9d458e_The_Medicine_Path_Shamanic_Mentoring_Program_The_Juicy_Effect.jpg` — alt: “Woman practicing yoga or meditation in a room with large windows, a statue of Lord Ganesha”
  - image: `source-assets/pages/942f3f_Womb_Healing_Course_The_Juicy_Effect.jpg` — alt: “A woman playing a large drum with a mallet in a cozy, sunlit room with candles, plants, an”

#### `/contact` — Contact Us

- **Purpose:** Contact and booking information: WhatsApp, Messenger, Instagram, email, address, map link and team photo. There is no form.
- **HTML title:** Contact Us — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** We are located less than 10 minutes ride from Central Ubud.  The best way to contact us is by Whatsapp, Facebook Messenger, or Google.  All Location and Contact details are on the Contact page of our website.
- **In main nav:** yes · **Inbound internal links from:** /activate-your-voice-package, /ayurvedic-lifestyle-package, /blog/2016/9/16/how-synergistic-is-your-wellbeing, /blog/2026/7/8/who-are-the-best-healers-in-ubud-a-guide-to-finding-the-right-healing-experience-in-bali, /discover-balance-and-harmony-with-breathwork, /distance-healing, /energetic-facelift-the-natural-alternative, /energy-healing
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/contact.md](content/pages/contact.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: For questions or bookings:
  - **Section 2  theme=white-bold**
    - Heading: Looking for us in Ubud?
- **Assets (2 unique images):**
  - image: `source-assets/pages/ab0c8f_The_Juicy_Effect_Reception.jpg` — alt: “The Juicy Effect wellbeing centre in Ubud”
  - image: `source-assets/pages/d9acde_The_Juicy_Effect_Team.jpg` — alt: “The Juicy Effect Team”

### Individual healing sessions

#### `/energy-healing` — Shamanic Energy Healing

- **Purpose:** Shamanic Energy Healing session with Sharon Marie: what to expect, benefits, pricing, 3-session package.
- **HTML title:** Shamanic Energy Healing — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Shamanic Energy Healing is a powerful healing modality to support you in releasing that which no longer serves you. This is a session that will see you inviting in the desired energetic templates for creating a soul-led life.
- **In main nav:** no · **Inbound internal links from:** /, /blog/embodying-an-attitude-of-yes-to-life, /blog/from-the-journey-the-joy-that-heals, /blog/from-the-journey-the-sacred-spiral, /blog/how-to-turn-trigger-into-gold, /blog/shamanic-healing-for-calling-back-lost-parts-of-ourselves, /blog/what-can-a-rock-teach-us-about-freedom, /blog/who-am-i
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/energy-healing.md](content/pages/energy-healing.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Shamanic Energy Healing
    - Component: [VIDEO] https://www.youtube.com/watch?v=zxjNqgs4zr4 provider=YouTube
  - **Section 2  theme=white-bold**
    - Heading: What you can expect
    - Component: [VIDEO] https://www.youtube.com/watch?v=-9ANedcw2Pc provider=YouTube
    - Heading: Benefits of this session include:
    - Heading: Investment
    - Heading: This session is also part of our healing packages.
    - Heading: [Discover our packages](/healing-packages).
- **Assets (1 unique images):**
  - image: `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “Sharon Keating - The Juicy Effect”
- **Embeds / integrations:** video https://www.youtube.com/watch?v=zxjNqgs4zr4; video https://www.youtube.com/watch?v=-9ANedcw2Pc

#### `/shamanic-soul-retrieval` — Shamanic Soul Retrieval

- **Purpose:** Shamanic Soul / Power Animal Retrieval session.
- **HTML title:** Shamanic Soul Retrieval & Power Animal Retrieval — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Shamanic Soul Retrieval / Power Animal Retrieval is a powerful shamanic healing session for inviting back your energetic power.  Being ‘power-filled’ supports you in creating the soul-led life that is rightfully yours.  At The Juicy Effect in Ubud.
- **In main nav:** no · **Inbound internal links from:** /, /healing-sessions, /home, /personal-consultations, /transformational-healing-package
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/shamanic-soul-retrieval.md](content/pages/shamanic-soul-retrieval.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Shamanic Soul Retrieval & Power Animal Retrieval
  - **Section 2  theme=white-bold**
    - Heading: This is a power retrieval session.
    - Heading: Investment
    - Heading: This session is also part of our healing packages.  [Click here](/healing-packages).
- **Assets (2 unique images):**
  - image: `source-assets/pages/53a174_Shamanic_Soul_Retrieval_with_Sharon.jpg` — alt: “Shamanic Soul Retrieval with Sharon”
  - image: `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png`

#### `/hypnotherapy` — Healing The Inner Child With Hypnotherapy

- **Purpose:** Inner-Child Healing with Hypnotherapy session and package prices.
- **HTML title:** Healing The Inner Child With Hypnotherapy — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Inner-Child Hypnotherapy is a gentle and powerful journey into the heart of your inner child. Through the safe and transformative practice of hypnotherapy, you’ll nurture deep self-love, restore worthiness, elevate self-esteem and confidence, and unlock the radiant gifts you’re here to share with the world.
- **In main nav:** no · **Inbound internal links from:** /, /blog/if-you-dont-feel-seen-how-are-you-not-seeing-yourself, /blog/what-can-a-rock-teach-us-about-freedom, /healing-sessions, /home, /hypnotherapy-package, /personal-consultations, /transformational-healing-package
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/hypnotherapy.md](content/pages/hypnotherapy.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Healing The Inner Child With Hypnotherapy
    - Component: [VIDEO] https://www.youtube.com/watch?v=zU0JIrkaKp4 provider=YouTube
  - **Section 2  theme=white-bold**
    - Heading: What is Hypnotherapy?
    - Heading: Programming of the unconscious mind occurs before age Six
    - Heading: Healing & Hypnotherapy
    - Heading: Investment
    - Heading: This session is also part of our healing packages.  [Click here](/healing-packages).
- **Assets (2 unique images):**
  - image: `source-assets/pages/6e5376_Hypnotherapy_at_The_Juicy_Effect.jpg` — alt: “Hypnotherapy at The Juicy Effect”
  - image: `source-assets/pages/164ee7_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “Sharon Keating - The Juicy Effect.png”
- **Embeds / integrations:** video https://www.youtube.com/watch?v=zU0JIrkaKp4

#### `/trauma-release-with-breathwork` — Trauma Release with Breathwork

- **Purpose:** Rebirthing / Trauma Release Breathwork session with Gita.
- **HTML title:** Trauma Release with Breathwork  — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Experience transformative trauma release through breathwork sessions in Ubud, Bali. Heal emotional wounds, reduce stress, and activate your inner wisdom with expert-guided sessions.
- **In main nav:** no · **Inbound internal links from:** /, /healing-sessions, /home, /personal-consultations
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/trauma-release-with-breathwork.md](content/pages/trauma-release-with-breathwork.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Trauma Release with Rebirthing Breathwork
  - **Section 2  theme=white-bold**
    - Heading: About this session
    - Heading: Investment
    - Heading: Three session package - save IDR 500,000.
- **Assets (2 unique images):**
  - image: `source-assets/pages/fd37eb_Rebirthing_Breathwork_at_The_Juicy_Effect.png` — alt: “Rebirthing Breathwork at The Juicy Effect”
  - image: `source-assets/pages/e43063_Gita_experienced_Breathwork_practitioner_The_Juicy_Effect.png` — alt: “Gita experienced Breathwork practitioner The Juicy Effect”

#### `/energy-healing-access-consciousness` — Release Blockages with Access Bars

- **Purpose:** Access Bars (Access Consciousness) energy healing with Julia, single and couple prices.
- **HTML title:** Release Blockages with Access Bars — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Access Bars is a beautiful energy healing modality to activate the body’s innate ability to relax your body, soothe your mind recharge your vitality and restore balance to your whole system. 
- **In main nav:** no · **Inbound internal links from:** /, /healing-sessions, /home, /personal-consultations
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/energy-healing-access-consciousness.md](content/pages/energy-healing-access-consciousness.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Release Blockages with Access Bars
  - **Section 2  theme=white-bold**
    - Heading: About this session
    - Heading: Investment
    - Heading: More about Access Consciousness Bars®
- **Assets (3 unique images):**
  - image: `source-assets/pages/733aae_Access_Bars_at_The_Juicy_Effect_in_Ubud.jpg` — alt: “Access Bars at The Juicy Effect in Ubud”
  - image: `source-assets/pages/adc07a_Julia_is_our_Access_Bars_Practitioner_in_Ubud.jpg` — alt: “Julia is our Access Bars Practitioner in Ubud”
  - image: `source-assets/pages/86f313_Julia_Access_Bars_at_The_Juicy_Effect.png` — alt: “Julia Access Bars at The Juicy Effect”

#### `/womb-healing` — Womb Healing - A Shamanic Healing Journey

- **Purpose:** Womb Healing: a shamanic journey plus womb energy healing (2h15).
- **HTML title:** Womb Healing - A Shamanic Healing Journey — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Womb Healing is a deeply immersive healing experience that weaves together the ancient wisdom of shamanic journeying, ancestral healing, and hands-on energy work focused on the sacred womb space. 
- **In main nav:** no · **Inbound internal links from:** /, /blog/the-cosmic-womb, /blog/the-many-faces-of-the-womb-guardian, /healing-sessions, /home, /personal-consultations
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/womb-healing.md](content/pages/womb-healing.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Womb Healing - A Shamanic Healing Journey
  - **Section 2  theme=white-bold**
    - Heading: What you can expect
    - Heading: The Power of This Work:
    - Heading: What are the benefits?
    - Heading: Is this session for you?
    - Heading: Investment
    - Heading: We also have [Womb Healing Workshops](/womb-healing-vision-quest-workshop) and [Womb-Healing Courses](/womb-healing-immersion-package) available.
- **Assets (2 unique images):**
  - image: `source-assets/pages/1cd051_Womb_Of_The_Ancients_The_Juicy_Effect.jpg` — alt: “Womb Of The Ancients The Juicy Effect”
  - image: `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “Sharon Keating - The Juicy Effect”

#### `/reiki-healing` — Reiki Healing

- **Purpose:** Reiki Healing session, single and couple prices.
- **HTML title:** Reiki Healing — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Reiki healing is a powerful and gentle healing modality that restores harmony, balance and flow across your physical, emotional and spiritual bodies.
- **In main nav:** no · **Inbound internal links from:** /, /healing-sessions, /home, /personal-consultations
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/reiki-healing.md](content/pages/reiki-healing.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Reiki Healing
  - **Section 2  theme=white-bold**
    - Heading: About This Session
    - Heading: What to expect from this session?
    - Heading: Investment
- **Assets (1 unique images):**
  - image: `source-assets/pages/938474_Reiki_Healing_at_The_Juicy_Effect_in_Ubud.jpg` — alt: “Reiki Healing at The Juicy Effect in Ubud”

#### `/private-sound-therapy` — Private Sound Therapy

- **Purpose:** Private Sound Therapy with Vickya.
- **HTML title:** Private Sound Therapy — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Private Sound Therapy is an intimate 1-on-1 experience designed to calm the nervous system, release energetic tension, and bring the body and mind into a state of deeper harmony.  Each session is intuitively guided and tailored to what your body and energy may need in the moment, creating a deeply immersive experience for rest, restoration, and inner connection.
- **In main nav:** no · **Inbound internal links from:** /, /healing-sessions, /home, /personal-consultations
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/private-sound-therapy.md](content/pages/private-sound-therapy.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Private Sound Therapy
  - **Section 2  theme=white-bold**
    - Heading: About this session
    - Heading: Investment
- **Assets (3 unique images):**
  - image: `source-assets/pages/43fe34_vibrational_healing.jpg`
  - image: `source-assets/pages/ce9934_IMG_9945.jpg`
  - image: `source-assets/pages/3bfb66_IMG_0149.png`

#### `/vedic-astrology-navigate-the-unknown` — Discover Yourself with Astrology

- **Purpose:** Vedic Astrology (Jyotish) consultation; nav title "Discover Yourself with Astrology".
- **HTML title:** Discover Yourself with Astrology | Unlock Your Potential Today — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Explore Vedic astrology and energy healing at The Juicy Effect in Ubud, Bali. Discover personalized insights to support your growth, health, and transformation.
- **In main nav:** no · **Inbound internal links from:** /, /blog/2020/4/10/how-to-find-your-flow-in-the-modern-world-through-vedic-astrology, /blog/what-can-a-rock-teach-us-about-freedom, /healing-sessions, /home, /personal-consultations
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/vedic-astrology-navigate-the-unknown.md](content/pages/vedic-astrology-navigate-the-unknown.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Discover Your Hidden Self with Astrology
  - **Section 2  theme=white-bold**
    - Heading: Why Vedic Astrology?
    - Heading: What you can expect
    - Heading: Investment
    - Heading: This session is part of our healing packages.
    - Heading: [Click here](/healing-packages).
- **Assets (0 unique images):**

#### `/medical-jyotish` — Medical Jyotish / Astrology

- **Purpose:** Medical / Health Astrology (Jyotish) consultation with Jhanavikaa.
- **HTML title:** Medical Jyotish / Astrology — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Dive into the ancient art of Vedic astrology to uncover the cosmic keys to your health and vitality. Medical Jyotish reveals hidden patterns influencing your well-being, offering personalized insights and remedies to restore balance and harmony. Discover how the stars can guide you toward a healthier, more vibrant life today! 
- **In main nav:** no · **Inbound internal links from:** /, /healing-sessions, /home, /personal-consultations
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/medical-jyotish.md](content/pages/medical-jyotish.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Medical Jyotish / Astrology
  - **Section 2  theme=white-bold**
    - Heading: About this session
    - Heading: ✔ Health Insights
    - Heading: ✔ Body-Astrology Connection
    - Heading: ✔ Predictive Analysis
    - Heading: ✔ Remedies and Healing
    - Heading: ✔ Holistic Approach
    - Heading: Investment
- **Assets (2 unique images):**
  - image: `source-assets/pages/700bc2_Medical_Astrology_at_The_Juicy_Effect.png` — alt: “Medical Astrology at The Juicy Effect”
  - image: `source-assets/pages/9e32ff_Jhaanavikaa_at_The_Juicy_Effect.jpg`

#### `/distance-healing` — Distance Energy Healing With Sharon

- **Purpose:** Distance (online) energy healing with Sharon.
- **HTML title:** Distance Energy Healing With Sharon — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Experience transformative distance energy healing with Sharon in Bali. Discover shamanic techniques, clearing, and spiritual rejuvenation for lasting well-being.  Quantum Physics has proven that everything is connected through an energetic field known as Akasha. Distance healing works in the same way that ‘in person’ healing does, with healing energy sent through this field via thought, emotion and intention,    This energy positively influences the recipient regardless of distance, with the same results achieved.  
- **In main nav:** no · **Inbound internal links from:** /healing-sessions
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/distance-healing.md](content/pages/distance-healing.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Distance Shamanic Energy Healing
    - Component: [VIDEO] https://www.youtube.com/watch?v=x_NBRygF5AM provider=YouTube
  - **Section 2  theme=white-bold**
    - Heading: About the session…
    - Heading: Preparation for the session
    - Heading: Pricing
- **Assets (1 unique images):**
  - image: `source-assets/pages/1cd0ee_Sharon_Jason_Photo_(1).png` — alt: “Sharon Jason Photo (1).png”
- **Embeds / integrations:** video https://www.youtube.com/watch?v=x_NBRygF5AM

#### `/start-your-next-chapter` — Start Your Next Chapter

- **Purpose:** Personal consultation: "Start Your Next Chapter" life-direction session (links to a Jason page that returns 404).
- **HTML title:** Start Your Next Chapter — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Start Your Next Chapter is a structured one-to-one conversational session designed to help you step back, reflect, and gain greater clarity about where you are and what may come next.  Topics include career, life-stage, relationships and more.
- **In main nav:** no · **Inbound internal links from:** /healing-sessions
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/start-your-next-chapter.md](content/pages/start-your-next-chapter.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Start Your Next Chapter
  - **Section 2  theme=white-bold**
    - Heading: A Structured Conversation for People at a Crossroads
    - Heading: Who Is This For?
    - Heading: What can you expect?
    - Heading: What This Is Not
    - Heading: What You Will Receive
    - Heading: Investment
- **Assets (0 unique images):**

#### `/energetic-facelift-the-natural-alternative` — Energetic Facelift - the natural alternative

- **Purpose:** Energetic Facelift session with Julia. Not linked from the Healing Sessions hub; only reachable via the sitemap/legacy links.
- **HTML title:** Energetic Facelift - the natural alternative — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** A powerful non-invasive session to release emotional blockages and limiting beliefs. Balancing the Chakra system enables us to create and attract new possibilities and leads to significant changes in the way we experience life.
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/energetic-facelift-the-natural-alternative.md](content/pages/energetic-facelift-the-natural-alternative.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Energetic Facelift -the Natural Alternative
  - **Section 2  theme=white-bold**
    - Heading: About this technique
    - Heading: What are the Benefits ?
    - Heading: What you can expect
    - Heading: Pricing
    - Heading: More about Access Consciousness Bars®
    - Component: [VIDEO] https://www.youtube.com/watch?v=DgGbFRjqQPk provider=YouTube
- **Assets (2 unique images):**
  - image: `source-assets/pages/96ccfc_energetic_facelift.jpg`
  - image: `source-assets/pages/cd5207_Untitled_design.png`
- **Embeds / integrations:** video https://www.youtube.com/watch?v=DgGbFRjqQPk

### Healing packages

#### `/transformational-healing-package` — Transformational Healing Package

- **Purpose:** 4-session Transformational Healing Package.
- **HTML title:** Transformational Healing Package — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Transformational Healing Package is a three-day immersive journey combining FOUR sessions:  2 x Shamanic Energy Healing, Inner Child Hypnotherapy, and personalised mentoring with Sharon.  This package is designed to align you with your soul’s path to experience deep healing, clarity, and lasting embodied change. 
- **In main nav:** no · **Inbound internal links from:** /, /healing-packages, /healing-sessions, /home, /packages-1
- **Layout engine:** classic-layout · **Sections:** 1
- **Content file:** [content/pages/transformational-healing-package.md](content/pages/transformational-healing-package.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Transformational Healing Package
    - Heading: This package includes:
    - Heading: 1.  Shamanic Energy Healing – 90 minutes
    - Heading: 2.  Tailored Energy Healing Session – 90 minutes
    - Heading: 3.  Inner Child Hypnotherapy - 90 minutes
    - Heading: 4.  Personalized Mentoring Session with Sharon – 90 minutes
    - Heading: Investment
- **Assets (2 unique images):**
  - image: `source-assets/pages/021053_The_Juicy_Effect_Healing_(17).png`
  - image: `source-assets/pages/7fcb5d_Sharon_Jason_Photo_(1).png`

#### `/soulmate-alchemy` — Soulmate Hypnotherapy

- **Purpose:** Soulmate Hypnotherapy 2-session package.
- **HTML title:** Soulmate Alignment Healing Package — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Soulmate Alignment Hypnotherapy is a transformational two-session package designed to help you rewrite the energetic story of love, starting from within.   Heal Within. Attract in Alignment.
- **In main nav:** no · **Inbound internal links from:** /, /healing-packages, /healing-sessions, /home, /hypnotherapy, /packages-1
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/soulmate-alchemy.md](content/pages/soulmate-alchemy.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Inner Child Healing & Soulmate Alignment Hypnotherapy
  - **Section 2  theme=white-bold**
    - Heading: This package includes:
    - Heading: 1.  Inner Child Healing & Core Wound Integration
    - Heading: 2.   Soulmate Energetic Template Creation
    - Heading: Key Benefits:
    - Heading: Investment
- **Assets (2 unique images):**
  - image: `source-assets/pages/468356_The_Juicy_Effect_Healing_(4).png` — alt: “A heart drawn in the sand at the beach with the text 'Soulmate Hypnotherapy' overlaid.”
  - image: `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — alt: “Sharon Jason Photo (1).png”

#### `/womb-healing-immersion-package` — Womb Healing Immersion Package

- **Purpose:** 4-session Womb Healing Immersion Package.
- **HTML title:** Womb Healing Immersion Package — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** This immersive womb-based healing package is designed as a guided initiatory pathway—supporting you to move from ancestral healing and deep clearing, through protection and boundaries, into embodied sovereignty and self-leadership.
- **In main nav:** no · **Inbound internal links from:** /, /blog/the-cosmic-womb, /healing-packages, /home, /packages-1, /womb-healing
- **Layout engine:** classic-layout · **Sections:** 1
- **Content file:** [content/pages/womb-healing-immersion-package.md](content/pages/womb-healing-immersion-package.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Womb Healing Immesion Package
    - Heading: This package includes:
    - Heading: 1. Womb of the Ancients - 2 hours 15 minutes
    - Heading: 2. Meeting the Womb Guardian - 2 hours 15 minutes
    - Heading: 3.  Embodying the Inner Queen - 2 hours 15 minutes
    - Heading: 4. Integration & Mentoring - 60 minutes
    - Heading: Who This Is For?
    - Heading: Investment
- **Assets (2 unique images):**
  - image: `source-assets/pages/8fb53c_Womb_Healing_Immersion.png` — alt: “Womb Healing Immersion Package The Juicy Effect”
  - image: `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png`

#### `/activate-your-voice-package` — Activate Your Voice Package

- **Purpose:** 3-session Activate Your Voice package.
- **HTML title:** Activate Your Voice Package — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Activate Your Voice is a three-session journey designed to awaken, empower, and align your voice with the full expression of your soul. This package is for anyone who is ready to share their voice and unique expression in a deeper way.
- **In main nav:** no · **Inbound internal links from:** /, /healing-packages, /healing-sessions, /home, /packages-1
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/activate-your-voice-package.md](content/pages/activate-your-voice-package.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Activate Your Voice Package
  - **Section 2  theme=white-bold**
    - Heading: Aligning to the power of your voice
    - Heading: What You Can Expect
    - Heading: This package includes:
    - Heading: 1.  Shamanic Energy Healing – 90 minutes
    - Heading: 2.  Soul Sounding & Energy Activation – 2 hours 15 minutes
    - Heading: 3.  Personalized Mentoring Session – 60 to 90 minutes
    - Heading: Investment
- **Assets (2 unique images):**
  - image: `source-assets/pages/ac8d13_Activate_Your_Voice_Package_The_Juicy_Effect.png` — alt: “A microphone in a dark setting with a spotlight highlighting its top, accompanied by the t”
  - image: `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — alt: “Sharon Jason Photo (1).png”

#### `/ayurvedic-lifestyle-package` — Ayurvedic Lifestyle Package

- **Purpose:** Ayurvedic Lifestyle 2-session package (includes a YouTube video).
- **HTML title:** Ayurvedic Lifestyle Package — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Our Ayurvedic Lifestyle Package is a two-session package that combines Ayurveda, a 5000-year-old system of medicine, with the latest in Body Mind Science.  This unique system blends the best of Ancient and Modern Wisdom.   I also use Kinesiology (muscle monitoring) to access the body’s innate intelligence and refine my recommendations.  This powerful combination ensures that recommendations match your unique Ayurvedic Type.
- **In main nav:** no · **Inbound internal links from:** /, /healing-packages, /healing-sessions, /home, /packages-1
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/ayurvedic-lifestyle-package.md](content/pages/ayurvedic-lifestyle-package.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Ayurvedic Lifestyle Package
    - Component: [VIDEO] https://www.youtube.com/watch?v=kLe8re4pnk0 provider=YouTube
  - **Section 2  theme=white-bold**
    - Heading: This package includes:
    - Heading: 1.  Understanding Your Body-Mind Type
    - Heading: 2.  A customised 3 month plan
    - Heading: Our Techniques
    - Heading: Investment
- **Assets (1 unique images):**
  - image: `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — alt: “Sharon Jason Photo (1).png”
- **Embeds / integrations:** video https://www.youtube.com/watch?v=kLe8re4pnk0

#### `/hypnotherapy-package` — Hypnotherapy Package

- **Purpose:** 2- and 3-session hypnotherapy packages.
- **HTML title:** Hypnotherapy Package — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Our Hypnotherapy Package combines several Hypnotherapy sessions into a tailored sequence.  After building a strong relationship with the Inner Child, we can then deep dive into other specific areas of your choice including confidence and abundance.
- **In main nav:** no · **Inbound internal links from:** /healing-packages
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/hypnotherapy-package.md](content/pages/hypnotherapy-package.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Hypnotherapy Packages
  - **Section 2  theme=white-bold**
    - Heading: Investment
- **Assets (2 unique images):**
  - image: `source-assets/pages/e5c7bc_The_Juicy_Effect_Healing.png`
  - image: `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — alt: “Sharon Jason Photo (1).png”

### Private retreats

#### `/womb-sovereign-private-retreat` — The Womb Sovereign Retreat

- **Purpose:** The Womb Sovereign: a 6-day private divine-feminine retreat. Long-form page with itinerary, inclusions and FAQ-style detail.
- **HTML title:** The Womb Sovereign Private Retreat — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** THE WOMB SOVEREIGN is a Private Divine Feminine Reclamation Retreat, a six-day, one-to-one transformational journey for women in Ubud, Bali.  Step away from the demands of everyday life and enter a deeply personal journey of release, reclamation and embodied sovereignty.  Reconnect with your feminine wisdom, restore healthy boundaries, and reclaim inner authority.
- **In main nav:** no · **Inbound internal links from:** /private-retreats
- **Layout engine:** fluid-engine · **Sections:** 4
- **Content file:** [content/pages/womb-sovereign-private-retreat.md](content/pages/womb-sovereign-private-retreat.md)
- **Section order & components:**
  - **Section 1  theme=default**
    - Heading: The Womb Sovereign
    - Heading: A Private 6-Day Devine Feminine Reclamation Retreat.  A One-To-One Transformational Journey For Women In Ubud, Bali
  - **Section 2  theme=white**
    - Heading: The Transformational Arc
    - Heading: Womb Preparation & Inner Practice
    - Heading: The Three Womb Journeys
    - Heading: Your Private Sanctuary
    - Heading: Private Mentoring & Sovereign Integration
    - Heading: Who This Retreat Is For
    - Heading: What's Included
    - Heading: The Retreat Rhythm
    - Component: [ACCORDION]
    - Heading: The Experience
    - Heading: Integration Beyond Bali
  - **Section 3  theme=light-bold**
    - Heading: Begin with a private discovery call
    - CTA: "Book a discovery call" → /contact
  - **Section 4  theme=bright-inverse**
    - Heading: FAQs
    - Heading: 1
    - Heading: Is this a retreat?
    - Heading: 2
    - Heading: Do I need to be spiritual?
    - Heading: 3
    - Heading: Can my partner come with me?
    - Heading: 4
    - Heading: What happens after I enquire?
    - Heading: 5.
    - Heading: What makes this different?
- **Assets (1 unique images):**
  - image: `source-assets/pages/7e5a98_Womb_Sovereign_Retreat_The_Juicy_Effect.jpg`

#### `/restorative-healing-personal-retreat` — Restorative Healing Personal Retreat

- **Purpose:** Restorative Healing Personal Retreat: long-form itinerary page with day-by-day accordion.
- **HTML title:** The Restorative Healing Personal Retreat — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Restorative Healing Retreat is a private, one-to-one experience for those who want to experience powerful energy healing without undertaking an intensive transformational retreat.

Set in a beautiful private villa beside the rice fields, the retreat combines personalised energy healing with nourishing gluten-free, celiac-safe food, private in-villa massages, nature, reflection and generous unstructured time.

Your experience is tailored to you and may include Shamanic Energy Healing, sound therapy, Reiki, breathwork, Vedic Astrology, hypnotherapy and contemplative practices.

There is no packed schedule and no expectation to spend every day working on yourself.

Instead, you receive the healing and then have the space to rest, integrate and restore.
This retreat may be right for you if you are feeling depleted, going through a transition, curious about energy healing, or simply know that you need time away from the demands of everyday life.

- **In main nav:** no · **Inbound internal links from:** /private-retreats
- **Layout engine:** fluid-engine · **Sections:** 4
- **Content file:** [content/pages/restorative-healing-personal-retreat.md](content/pages/restorative-healing-personal-retreat.md)
- **Section order & components:**
  - **Section 1  theme=default**
    - Heading: The Restorative Healing Personal Retreat
  - **Section 2  theme=white**
    - Heading: A private retreat for powerful healing and genuine rest
    - Heading: Who is this retreat for?
    - Heading: Your private retreat experience
    - Heading: What is included
    - Heading: The Retreat Rhythm
    - Component: [ACCORDION]
    - Heading: A retreat that adapts to you
    - Heading: The private villa experience
    - Heading: Nourishment throughout your stay
    - Heading: Your invitation
  - **Section 3  theme=light-bold**
    - Heading: Begin with a private discovery call
    - CTA: "Book a discovery call" → /contact
  - **Section 4  theme=bright-inverse**
    - Heading: FAQs
    - Heading: 1
    - Heading: Is this a retreat?
    - Heading: 2
    - Heading: Do I need to be spiritual?
    - Heading: 3
    - Heading: Can my partner come with me?
    - Heading: 4
    - Heading: What happens after I enquire?
    - Heading: 5.
    - Heading: What makes this different?
- **Assets (0 unique images):**

#### `/the-next-chapter-private-retreat` — The Next Chapter Private Retreat

- **Purpose:** The Next Chapter Private Retreat: long-form page in 9 sections.
- **HTML title:** The Next Chapter Private Retreat — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Next Chapter is a private immersive retreat experience in Ubud for people navigating a meaningful life transition.  This is our premium package that includes a tailored sequence of sessions with our expert team with private villa accommodation.  Choose Four, Seven or Ten Nights to start your next life chapter.
- **In main nav:** no · **Inbound internal links from:** /healing-packages, /private-retreats
- **Layout engine:** fluid-engine · **Sections:** 9
- **Content file:** [content/pages/the-next-chapter-private-retreat.md](content/pages/the-next-chapter-private-retreat.md)
- **Section order & components:**
  - **Section 1  theme=white**
    - Heading: The Next ChapterRetreat
    - Heading: A private immersive experience in Ubud for people navigating a meaningful life transition.
  - **Section 2  theme=white**
    - Heading: There are moments when life no longer feels the same.
  - **Section 3  theme=white**
    - Heading: Why people come
  - **Section 4  theme=default**
    - Heading: The experience
  - **Section 5  theme=white**
    - Heading: What is included?
  - **Section 6  theme=light-bold**
    - Heading: Begin with a private discovery call
    - CTA: "Book a discovery call" → /contact
  - **Section 7  theme=bright-inverse**
    - Heading: FAQs
    - Heading: 1
    - Heading: Is this a retreat?
    - Heading: 2
    - Heading: Do I need to be spiritual?
    - Heading: 3
    - Heading: Can couples attend?
    - Heading: 4
    - Heading: Can this support burnout?
    - Heading: 5.
    - Heading: What happens after I enquire?
    - Heading: 6.
    - Heading: What makes this different?
  - **Section 8  theme=white**
    - Heading: Options
    - Heading: 4 nights
    - Heading: 7 nights
    - Heading: 10+ nights
  - **Section 9  theme=white**
- **Assets (5 unique images):**
  - image: `source-assets/pages/2ae7b1_WhatsApp_Image_2023-08-22_at_4.28.55_PM.jpeg` — alt: “A private outdoor infinity pool surrounded by a wooden railing and lush green tropical tre”
  - image: `source-assets/pages/35b2ad_imgg-demo-VQfymkWw.png` — alt: “Close-up of a pink poppy flower with dewdrops on its petals, showing yellow stamens and a ”
  - image: `source-assets/pages/891b08_WhatsApp_Image_2024-07-21_at_1.40.40_PM.jpg` — alt: “A woman and a man standing on either side of a large Ganesha idol decorated with a yellow ”
  - image: `source-assets/pages/5d21be_DSCF0804.JPG` — alt: “Two women sitting cross-legged on yoga mats facing each other inside a room with large win”
  - image: `source-assets/pages/277d26_WhatsApp_Image_2023-08-22_at_2.25.17_PM.jpeg` — alt: “Bathroom with a textured stone wall, featuring a large Buddha face sculpture in the center”

### Workshops (group, in Ubud)

#### `/womb-healing-vision-quest-workshop` — Sacred Womb Healing Immersion

- **Purpose:** Sacred Womb Healing Immersion: a full-day workshop.
- **HTML title:** Sacred Womb Healing Immersion — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Step into a sacred ceremonial space and embark on a profound healing Shamanic Vision Quest inside your womb — the ancient portal of intuition, creation, and feminine power.
- **In main nav:** no · **Inbound internal links from:** /womb-healing, /workshops-events-learning
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/womb-healing-vision-quest-workshop.md](content/pages/womb-healing-vision-quest-workshop.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Sacred Womb Healing Immersion
    - Heading: A full day journey into the sacred space of the womb.
  - **Section 2  theme=white-bold**
    - Heading: About this workshop:
    - Heading: What we will explore
    - Heading: The Womb Healing Vision Quest
    - Heading: This Immersion May Be For You If…
    - Heading: Your Investment
    - Heading: How to book?
- **Assets (2 unique images):**
  - image: `source-assets/pages/2ffc64_Sacred_Womb_Healing_Immersion_photo.png` — alt: “A woman in a purple shawl and green pants sits cross-legged on a purple yoga mat, holding ”
  - image: `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “A woman with blonde hair smiling outdoors next to purple flowers and green foliage.”

#### `/how-to-keep-your-energy-field-clear-workshop` — How To Keep Your Energetic Field Clear

- **Purpose:** How To Keep Your Energetic Field Clear: a full-day workshop.
- **HTML title:** How To Keep Your Energy Field Clear - Full Day Workshop — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:**  Those of us who are empathic, sensitive and have open energy fields will often struggle with absorbing ‘stuff’ from others.  Within this full day immersion we will explore the energetics of How to Keep your Energy Field Clear.
- **In main nav:** no · **Inbound internal links from:** /workshops, /workshops-events-learning
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/how-to-keep-your-energy-field-clear-workshop.md](content/pages/how-to-keep-your-energy-field-clear-workshop.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: How To Keep Your Energetic Field Clear
    - Heading: Energy Mastery Series - Full Day Workshop
    - Heading: Next Workshop:  To be confirmed
  - **Section 2  theme=white-bold**
- **Assets (2 unique images):**
  - image: `source-assets/pages/d4db54_Sharon_And_Ganesh.jpg` — alt: “A woman in a blue dress with earrings and bracelets stands with her hand on her chest next”
  - image: `source-assets/pages/7fcb5d_Sharon_Jason_Photo_(1).png` — alt: “Sharon Jason Photo (1).png”

#### `/self-love-through-radical-self-acceptance` — Self Love Through Radical Self Acceptance

- **Purpose:** Self Love Through Radical Self Acceptance: a full-day workshop.
- **HTML title:** Self Love Through Radical Self Acceptance – A Full Day Immersion — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Self love is the foundation from which we elevate our lives.  It provides the confidence to listen to our hearts, follow our dreams and to be an artist in the creation of our lives.   In this full-day immersion, you will experience shamanic Journeys, hypnotherapy sessions, shadow work, forgiveness healing meditations, healing energy meditations, balancing chakras and more.
- **In main nav:** no · **Inbound internal links from:** /workshops, /workshops-events-learning
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/self-love-through-radical-self-acceptance.md](content/pages/self-love-through-radical-self-acceptance.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Self Love Through Radical Self Acceptance
    - Heading: A Full Day Immersion Workshop
  - **Section 2  theme=white-bold**
    - Heading: This experience includes:
    - Heading: Investment
    - Heading: How to book a place?
- **Assets (2 unique images):**
  - image: `source-assets/pages/d0f583_Workshop.jpg`
  - image: `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png`

#### `/discover-balance-and-harmony-with-breathwork` — Discover Balance and Harmony with Breathwork

- **Purpose:** Breathwork / 2-hour Sound Journey with Gita (group).
- **HTML title:** Discover Balance & Harmony With Breathwork — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:**  Join us as we guide you through ancient practices designed to harmonize your body, mind and spirit.  Immerse yourself in the transformative power of conscious, connected breathing surrounded by Ubud’s natural landscape.
- **In main nav:** no · **Inbound internal links from:** /workshops, /workshops-events-learning
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/discover-balance-and-harmony-with-breathwork.md](content/pages/discover-balance-and-harmony-with-breathwork.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Discover Balance & Harmony with Breathwork
    - Heading: 2 hour Sound Journey with Gita
    - Heading: Coming Soon
  - **Section 2  theme=white-bold**
- **Assets (2 unique images):**
  - image: `source-assets/pages/8ff876_WhatsApp_Image_2024-08-22_at_9.50.50_AM.jpeg` — alt: “A woman playing a small wooden harp or autoharp, sitting on the floor with a man who appea”
  - image: `source-assets/pages/61c7f0_Brown_and_Light_Brown_Circle_Framed_Instagram_Profile_Picture.png` — alt: “A woman with long dark hair smiling outdoors, wearing a white off-shoulder ruffled top, wi”

### Online courses & certifications

#### `/womb-alchemy-a-return-to-sovereignty` — Womb Alchemy - A Return To Sovereignty

- **Purpose:** Womb Alchemy: an online 3-journey programme.
- **HTML title:** Womb Alchemy - A Return To Sovereignty — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Womb Alchemy is a three-part initiatory journey designed to support you in reclaiming the power, wisdom, and sovereignty held within your womb space.
This is not just healing work — it is a process of remembrance.  A return to the deepest seat of your feminine power, creativity, intuition, and inner authority.
- **In main nav:** no · **Inbound internal links from:** /blog/stepping-into-your-womb-sovereign-power, /blog/the-cosmic-womb, /blog/the-many-faces-of-the-womb-guardian, /blog/the-womb-guardian, /blog/why-we-heal-the-womb-in-layers-she-is-a-multidimensional-portal, /online
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/womb-alchemy-a-return-to-sovereignty.md](content/pages/womb-alchemy-a-return-to-sovereignty.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Womb Alchemy - A Return To Sovereignty
    - Component: [VIDEO] https://www.youtube.com/embed/g7MTb2r3QN0?feature=oembed provider=YouTube
  - **Section 2  theme=white-bold**
    - Heading: This is a call back to yourself.
    - Heading: What is Womb Alchemy?
    - Heading: How This Journey Works
    - Heading: The Three Initiations
    - Heading: 1. Womb of the Ancients - 2 hours 15 minutes
    - Heading: 2. Meeting the Womb Guardian - 2 hours 15 minutes
    - Heading: 3. Embodying the Inner Queen - 2 hours 15 minutes
    - Heading: 4.  Integration Support
    - Heading: Interested?
- **Assets (1 unique images):**
  - image: `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “A woman with shoulder-length blonde hair smiling outdoors next to purple flowers and green”
- **Embeds / integrations:** video https://www.youtube.com/embed/g7MTb2r3QN0?feature=oembed

#### `/energy-mastery-1-to-1-spiritual-mentoring-program` — Energy Mastery 1 to 1 Spiritual Mentoring Program

- **Purpose:** Energy Mastery: 1:1 spiritual mentoring programme.
- **HTML title:** Energy Mastery Course — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Energy Mastery is about having the tools and knowledge to work within your energy field so that you may stand fully in your radiance and share your unique tapestry of gifts with the world.  This is a one-to-one Spiritual Mentoring Program spread over seven months.
- **In main nav:** no · **Inbound internal links from:** /online
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/energy-mastery-1-to-1-spiritual-mentoring-program.md](content/pages/energy-mastery-1-to-1-spiritual-mentoring-program.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Energy Mastery for Self Empowerment
  - **Section 2  theme=white-bold**
    - Heading: Who is this for?
    - Heading: The Benefits
    - Heading: What You Will Learn & Experience
    - Heading: The Deeper Outcome
    - Heading: Program Format
    - Heading: Interested?
- **Assets (1 unique images):**
  - image: `source-assets/pages/c73914_Energy_Mastery_Empowerment_Course.jpg` — alt: “Sharon Keating is an energy healing expert in Ubud, Bali.”

#### `/practical-shamanism-for-the-real-world` — Practical Shamanism For The Modern World

- **Purpose:** Practical Shamanism For The Modern World: a 7-month course.
- **HTML title:** Practical Shamanism For The Modern World — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Practical Shamanism for the Modern World is a grounded and deeply transformative pathway designed for those who are ready to live a guided life.

This is not just about accessing guidance — it is about learning how to trust it, embody it, and live from it in your everyday life.

It bridges ancient shamanic practices with modern living, supporting you to develop inner authority, intuitive clarity, and energetic stability.

This is about walking the mystery — with trust, presence, and alignment.

- **In main nav:** no · **Inbound internal links from:** /online
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/practical-shamanism-for-the-real-world.md](content/pages/practical-shamanism-for-the-real-world.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Practical Shamanism for the Modern World
  - **Section 2  theme=white-bold**
    - Heading: Who This Is For?
    - Heading: Core Outcomes
    - Heading: Curriculum & Teaching Themes
    - Heading: Module 1 — Foundations of Shamanic Practice
    - Heading: Module 2 — Journeying & Direct Experience
    - Heading: Module 3 and 4 — Guides, Allies & Discernment
    - Heading: Module 5 — Energy, Boundaries & Power
    - Heading: Module 6 and 7 — Ritual & Nature Connection
    - Heading: Module 8 — Shamanic Manifestation
    - Heading: Module 9 — Living the Guidance
    - Heading: Program format
- **Assets (1 unique images):**
  - image: `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “With 15+ years experience in the health and wellbeing industry, she is a Certified Shamani”

#### `/the-medicine-path-practitioner-certification` — The Medicine Path - Practitioner Certification

- **Purpose:** The Medicine Path: practitioner certification.
- **HTML title:** The Medicine Path - Practitioner Certification — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** The Medicine Path is a deep practitioner training for those called to work with healing, ceremony, and spirit.  This pathway develops grounded, ethical practitioners who can safely hold space for others, work with integrity, and facilitate meaningful transformation.  This is not just about learning techniques — it is about embodiment, responsibility, and mastery.
- **In main nav:** no · **Inbound internal links from:** /blog/from-the-journey-the-joy-that-heals, /blog/from-the-journey-the-sacred-spiral, /online
- **Layout engine:** fluid-engine · **Sections:** 2
- **Content file:** [content/pages/the-medicine-path-practitioner-certification.md](content/pages/the-medicine-path-practitioner-certification.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: The Medicine Path - Healing Practitioner Training
  - **Section 2  theme=white-bold**
    - Heading: Who Is This Program For?
    - Heading: Broad Outline of the Curriculum
    - Heading: Module 1 — Lower World Journeying & Power Animals
    - Heading: Module 2 — Upper World Journeying & Spirit Guides
    - Heading: Module 3 — Advanced Journeying for Others
    - Heading: Module 4 — Energy Mastery I
    - Heading: Module 5 — Energy Mastery II
    - Heading: Module 6 and 7 — Core Healing Techniques
    - Heading: Module 7 — Ceremony & Ritual
    - Heading: Module 8 — Working with Clients
    - Heading: Module 9 — Shadow, Trauma & Safety
    - Heading: Module 10 — Ancestral & Nature Work
    - Heading: Module 11 — Soul Retrieval (Advanced)
    - Heading: Module 12 — Integration & Practitioner Embodiment
    - Heading: Certification Requirements
    - Heading: Certification Outcome
- **Assets (2 unique images):**
  - image: `source-assets/pages/3d57b4_WhatsApp_Image_2024-08-15_at_12.07.10_PM.jpg` — alt: “A woman in a blue dress practicing yoga or meditation in a room with large windows and gre”
  - image: `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — alt: “A woman with blonde hair smiling outdoors, surrounded by green trees and purple flowers.”

### About / team / info

#### `/the-juicy-effect-story` — Our Story

- **Purpose:** Our Story: history and philosophy of the centre. Includes a Squarespace-hosted portrait video.
- **HTML title:** Our Story — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Our names are Sharon and Jason, originally from Australia but now call Bali our home.  Around the year 2010 following her studies in Ayurveda, Sharon was offering personal consultations to help people to improve their overall health, in particular their digestion.   What we discovered around this time was that to improve health and wellbeing, it requires a holistic approach - body mind and spirit.
- **In main nav:** yes · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/the-juicy-effect-story.md](content/pages/the-juicy-effect-story.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: The Juicy EffectStory
  - **Section 2  theme=white-bold**
    - Heading: Once upon a time…
    - Heading: We are all at different points in our healing journey.
    - Heading: Why did we call ourselves The Juicy Effect?
    - Component: [VIDEO] SQUARESPACE-HOSTED VIDEO (HLS) https://video.squarespace-cdn.com/content/v1/55cd8826e4b0af9801ddffe4/38de62d0-1bec-4010-a441-f4b61a8f20c9/playlist.m3u8 duration=110s variants=1080:1934,360:644
- **Assets (3 unique images):**
  - image: `source-assets/pages/c2a8df_The_Juicy_Effect_is_located_in_Ubud_Bali.jpg` — alt: “The Juicy Effect is located in Ubud Bali”
  - image: `source-assets/pages/ac4598_The_Juicy_Effect_offers_Energy_Healing_sessions.jpg` — alt: “The Juicy Effect offers Energy Healing sessions”
  - image: `source-assets/pages/f52b9d_Meet_The_Juicy_Effect_team.jpg` — alt: “Meet The Juicy Effect team”
- **Embeds / integrations:** video SQUARESPACE-HOSTED VIDEO (HLS) https://video.squarespace-cdn.com/content/v1/55cd8826e4b0af9801ddffe4/38de62d0-1bec-4010-a441-f4b61a8f20c9/playlist.m3u8 duration=110s variants=1080:1934,360:644

#### `/sharon-keating` — Meet Sharon Marie

- **Purpose:** Meet Sharon Marie (founder / lead practitioner) bio.
- **HTML title:** Sharon Keating | Energy Healer Ubud — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Sharon is a compassionate, intuitive healer and teacher with a wealth of experience and expertise across a range of healing disciplines.   Working from a deep state of connection to the subtle energetic world, this frequency supports her clients in connecting back to their True Selves, releasing trauma, limiting beliefs, accessing their power and discovering their own unique expression of their gifts.    Her compassionate and supportive nature allows her to create a deeply supportive and caring space where her clients can drop into a deep state of healing.    
- **In main nav:** yes · **Inbound internal links from:** /activate-your-voice-package, /ayurvedic-lifestyle-package, /blog/energetic-contraction-and-expansion-in-healing, /energy-healing, /energy-healing-access-consciousness, /energy-mastery-1-to-1-spiritual-mentoring-program, /how-to-keep-your-energy-field-clear-workshop, /hypnotherapy
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/sharon-keating.md](content/pages/sharon-keating.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: MeetSharon Keating
    - Heading: Wellbeing Consultant with over 15 years experience.
  - **Section 2  theme=white-bold**
- **Assets (1 unique images):**
  - image: `source-assets/pages/c2a024_Sharon_Keating_-_Consultant_at_The_Juicy_Effect.png` — alt: “Sharon Keating - Consultant at The Juicy Effect”

#### `/meet-julia` — Meet Julia

- **Purpose:** Meet Julia bio.
- **HTML title:** Julia | Energy Healer Ubud — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Julia is a trainer and practition of Access Bars. Using these simple and effective techniques I am now on a personal mission to impact others, enabling you to live your life to your fullest potential.  I am originally from Indonesia, but spent 15 years practicing my craft in France.
- **In main nav:** yes · **Inbound internal links from:** /energy-healing-access-consciousness
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/meet-julia.md](content/pages/meet-julia.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Meet Julia
  - **Section 2  theme=white-bold**
- **Assets (1 unique images):**
  - image: `source-assets/pages/6fb837_Julia_practitioner_at_The_Juicy_Effect.png`

#### `/meet-gita-sianipar` — Meet Gita

- **Purpose:** Meet Gita bio.
- **HTML title:** Meet Gita | Breathwork & Sound Healing Bali — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Gita is a certified Yoga and Rebirthing Breathwork Facilitator. She first encountered Rebirthing Breathwork whilst teaching Yoga in Sydney, Australia, helping her to overcome and heal her own old wounds.  
- **In main nav:** yes · **Inbound internal links from:** /discover-balance-and-harmony-with-breathwork
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/meet-gita-sianipar.md](content/pages/meet-gita-sianipar.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Meet Gita
  - **Section 2  theme=white-bold**
- **Assets (1 unique images):**
  - image: `source-assets/pages/726387_Gita_is_a_wellbeing_practitioner_at_The_Juicy_Effect.png` — alt: “Gita is a wellbeing practitioner at The Juicy Effect”

#### `/meet-vickya` — Meet Vickya

- **Purpose:** Meet Vickya bio.
- **HTML title:** Meet Vickya | Sound Healer Ubud — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Vickya is an intuitive sound therapy practitioner and space holder who works with sound, energy awareness, and emotional presence to support relaxation, nervous system restoration, and gentle inner healing. Her work is rooted in creating a calm and compassionate space where people can slow down, reconnect with themselves, and feel emotionally supported.
- **In main nav:** yes · **Inbound internal links from:** /private-sound-therapy
- **Layout engine:** classic-layout, fluid-engine · **Sections:** 2
- **Content file:** [content/pages/meet-vickya.md](content/pages/meet-vickya.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: MeetVickya
  - **Section 2  theme=white-bold**
- **Assets (1 unique images):**
  - image: `source-assets/pages/3bfb66_IMG_0149.png`

#### `/meet-jhanavikaa` — Meet Jhanavikaa

- **Purpose:** Meet Jhanavikaa bio.
- **HTML title:** Jhaanavikaa | Astrology & Palmistry  — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Born into a Balinese Hindu high priest family, Jhaanavikaa was immersed in Hindu philosophy from a young age. She has also been introduced to the Balinese calendar & astrology system, as well as herbal medicine since childhood by her father.
- **In main nav:** yes · **Inbound internal links from:** /medical-jyotish
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/meet-jhanavikaa.md](content/pages/meet-jhanavikaa.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Meet Jhaanavikaa
    - Heading: Jyotish (Astrology) and Palm Reading professional.
  - **Section 2  theme=white-bold**
- **Assets (1 unique images):**
  - image: `source-assets/pages/b3136a_Meet_Jhaana_at_The_Juicy_Effect.jpg` — alt: “Meet Jhaana at The Juicy Effect”

#### `/things-to-do-in-ubud` — Things to do in Ubud

- **Purpose:** Local guide: things to do in Ubud (links to external yoga centres, cafes).
- **HTML title:** Things To Do In Ubud — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Ubud is the perfect place to pause, press the reset button, and get your health back on track!  It’s a magical place that derives its name from a Balinese word that means ‘medicine’, attracting people from all over the world who seek out transformation for body, mind and spirit.   Whether you stay for a week or many months, everything’s already here to build your own retreat.  Remember to visit us
- **In main nav:** yes · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** classic-layout · **Sections:** 1
- **Content file:** [content/pages/things-to-do-in-ubud.md](content/pages/things-to-do-in-ubud.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Looking for things to do in Ubud?
    - Heading: Travel, Rejuvenate, Learn & Transform!
    - Heading: Create your own retreat.
    - Heading: There’s Yoga Studios(we drop into these classes regularly)
    - Heading: There’s restaurants for vegetarians
    - Heading: Add us into your retreat or escape.
- **Assets (2 unique images):**
  - image: `source-assets/pages/28cf6e_Ubud.jpg` — alt: “Ubud.jpg”
  - image: `source-assets/pages/ac8b04_Visit_the_team_at_The_Juicy_Effect.jpg`

#### `/rent-our-space` — Rent Our Space

- **Purpose:** Space rental offer (treatment room / event space). Not in navigation.
- **HTML title:** Rent Our Space — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:**  Rent workshop and event space in Ubud.  We are set inside the jungle, away from cars and other construction.  Contact us to learn more. 
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** classic-layout · **Sections:** 2
- **Content file:** [content/pages/rent-our-space.md](content/pages/rent-our-space.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: We have wellbeing & healing space to rent
  - **Section 2  theme=white-bold**
- **Assets (4 unique images):**
  - image: `source-assets/pages/8e5a5b_Rent_wellbeing_space_in_ubud.jpg` — alt: “Premium wellbeing space to rent in Ubud”
  - image: `source-assets/pages/fa9b6d_Event_space_for_rent_in_Ubud_at_The_Juicy_Effect.jpg` — alt: “Event space for rent in Ubud at The Juicy Effect”
  - image: `source-assets/pages/095380_Rent_premium_space_in_ubud_at_The_Juicy_Effect.jpg` — alt: “Rent premium space in ubud at The Juicy Effect”
  - image: `source-assets/pages/74bc42_Rent_our_jungle-view_rooms_in_ubud_at_The_Juicy_Effect.jpg` — alt: “Rent our jungle-view rooms in ubud at The Juicy Effect”

#### `/privacy-policy` — Privacy Policy

- **Purpose:** Privacy policy (TermsFeed-generated). Not linked from the visible footer.
- **HTML title:** Privacy Policy | Ensure Privacy & Secure Data Today — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Learn about our commitment to privacy and data protection at The Juicy Effect. Review our policy on the collection, use, and disclosure of personal information.
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** classic-layout · **Sections:** 1
- **Content file:** [content/pages/privacy-policy.md](content/pages/privacy-policy.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: Privacy Policy - The Juicy Effect
    - Heading: Interpretation and Definitions
    - Heading: Interpretation
    - Heading: Definitions
    - Heading: Collecting and Using Your Personal Data
    - Heading: Types of Data Collected
    - Heading: Use of Your Personal Data
    - Heading: Retention of Your Personal Data
    - Heading: Transfer of Your Personal Data
    - Heading: Delete Your Personal Data
    - Heading: Disclosure of Your Personal Data
    - Heading: Security of Your Personal Data
    - Heading: Children's Privacy
    - Heading: Links to Other Websites
    - Heading: Changes to this Privacy Policy
    - Heading: Contact Us
- **Assets (0 unique images):**

### Legacy / orphan gallery pages

#### `/packages-1` — Packages

- **Purpose:** Bare gallery-section page of package images (no text). Probably the source of a carousel. Contains a 404 link (/the-next-chapter-personal-retreat).
- **HTML title:** Packages | Book Your Healing Journey Today — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Discover transformative energy healing packages at The Juicy Effect in Ubud, Bali, including shamanic healing, hypnotherapy, and breathwork for deep personal growth.
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** gallery section only · **Sections:** 1
- **Content file:** [content/pages/packages-1.md](content/pages/packages-1.md)
- **Section order & components:**
  - **Section 1  theme=default, gallery-section**
    - Component: [GALLERY SECTION]
- **Assets (7 unique images):**
  - gallery: `source-assets/pages/616f1e_Website_Images_Round_(31).png` — alt: “Transformational Healing Package (Copy)”
  - gallery: `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — alt: “Soulmate Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — alt: “Ayurvedic Lifestyle Plan (Copy)”
  - gallery: `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — alt: “Hypnotherapy Packages (Copy)”
  - gallery: `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — alt: “Activate Your Voice Package - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/6b5410_The_Juicy_Effect_Healing_(26).png` — alt: “Womb Healing Immersion Package - The Juicy Effect”
  - gallery: `source-assets/pages/955187_The_Next_Chapter_Personal_Retreat.png` — alt: “A poolside area with two lounge chairs, a large umbrella, towels, and surrounded by green ”

#### `/personal-consultations` — Personal Consultations

- **Purpose:** Bare gallery-section page of session images (no text).
- **HTML title:** Personal Consultations | Discover Energy Healing Now — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Experience authentic energy healing and transformational wellness sessions at The Juicy Effect in Ubud, Bali. Discover deep, lasting change today.
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** gallery section only · **Sections:** 1
- **Content file:** [content/pages/personal-consultations.md](content/pages/personal-consultations.md)
- **Section order & components:**
  - **Section 1  theme=default, gallery-section**
    - Component: [GALLERY SECTION]
- **Assets (11 unique images):**
  - gallery: `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — alt: “Shamanic Energy Healing - The Juicy Effect (Copy)”
  - gallery: `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — alt: “Shamanic Soul and Power Animal Retrieval (Copy)”
  - gallery: `source-assets/pages/84e14d_Website_Images_Round_(10).png` — alt: “Inner Child Healing with Hypnotherapy (Copy)”
  - gallery: `source-assets/pages/405255_Website_Images_Round.png` — alt: “Trauma Release with Breathwork (Copy)”
  - gallery: `source-assets/pages/988f35_Website_Images_Round.png` — alt: “Restore Balance with Access Bars (Copy)”
  - gallery: `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — alt: “Womb Healing (Copy)”
  - gallery: `source-assets/pages/eda8e2_image-asset.png` — alt: “Reiki Healing (Copy)”
  - gallery: `source-assets/pages/41c3b1_Private_Sound_Therapy.png` — alt: “Private Sound Therapy is an intimate 1-on-1 experience designed to calm the nervous system”
  - gallery: `source-assets/pages/57cd6c_image-asset.png` — alt: “Medical & Health Astrology (Copy)”
  - gallery: `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — alt: “Discover Your Hidden Self (Copy)”
  - gallery: `source-assets/pages/88265d_The_Juicy_Effect_Healing_-_Start_Your_Next_Chapter.png` — alt: “A sidewalk with the words "START ANYTHING?" painted in white, with a gray banner at the bo”

#### `/workshops` — Workshops

- **Purpose:** Bare gallery-section page of 3 workshop images (no text). Not the nav "Workshops" page.
- **HTML title:** Workshops — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** Discover transformative energy healing workshops at The Juicy Effect in Ubud, Bali. Experience authentic sessions and embark on a journey of deep, lasting wellness.
- **In main nav:** no · **Inbound internal links from:** _none found (orphan)_
- **Layout engine:** gallery section only · **Sections:** 1
- **Content file:** [content/pages/workshops.md](content/pages/workshops.md)
- **Section order & components:**
  - **Section 1  theme=default, gallery-section**
    - Component: [GALLERY SECTION]
- **Assets (3 unique images):**
  - gallery: `source-assets/pages/a0e129_Workshop.jpg` — alt: “SELF LOVE THROUGH RADICAL SELF-ACCEPTANCE (Copy)”
  - gallery: `source-assets/pages/48e9ff_image-asset.jpg` — alt: “How to Keep Your Energetic Field Clear (Copy)”
  - gallery: `source-assets/pages/41ce31_WhatsApp_Image_2024-08-22_at_9.50.51_AM.jpg` — alt: “Discover Balance and Harmony Through Breathwork (Copy)”

### Blog

#### `/blog` — Blog

- **Purpose:** Blog index (side-by-side list layout, paginated). 79 posts (2015–2026), 3 categories, 154 tags.
- **HTML title:** Blog — Energy Healing Centre Ubud, Bali | The Juicy Effect
- **Meta description:** At The Juicy Effect, we are really interested in how to live a better life across all areas of life.  This is what we write articles about - energy healing, complete wellbeing, spiritual wellbeing, hypnotherapy, womb healing and more.
- **In main nav:** yes · **Inbound internal links from:** /, /home
- **Layout engine:** classic-layout · **Sections:** 3
- **Content file:** [content/pages/blog.md](content/pages/blog.md)
- **Section order & components:**
  - **Section 1  theme=white-bold**
    - Heading: The Juicy Effect Blog
  - **Section 2  theme=default**
    - Component: [BLOG LIST VIEW]
  - **Section 3  theme=white-bold**
- **Assets (0 unique images):**
