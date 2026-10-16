# Asset Inventory & Page Mapping

All original image files referenced by the 51 pages and 79 blog posts were downloaded **unmodified** (original upload resolution, no `?format=` resizing) into `source-assets/` at the project root. Download date: 2026-10-16.

| Folder | Contents | Files | Size |
|---|---|---|---|
| `source-assets/brand/` | Logo (2500×2089 PNG, transparent), social-share logo (300×300), favicon | 2 + favicon.ico | 0.3 MB |
| `source-assets/pages/` | Images used on site pages (heroes, cards, carousels, portraits, OG images) | 120 | 100.4 MB |
| `source-assets/blog/` | Blog featured images, inline post images, blog OG images, Amazon product thumbnails | 202 | 119.4 MB |
| `source-assets/media/` | Hosted audio: `Nick-Phillips-03.mp3` (blog post “What is yoga really”) | 1 | 47.5 MB |
| `source-assets/manifest.json` | Machine-readable mapping: source URL → local file → pages/sections/alt text | — | — |

A flat, spreadsheet-friendly version of the manifest is [asset-manifest.csv](asset-manifest.csv). Local filenames are `<6-char hash of URL>_<original filename>`; the hash prevents collisions, because many Squarespace uploads share names like `image-asset.png`.

## Brand assets

| Asset | Local file | Source | Notes |
|---|---|---|---|
| Primary logo (header) | `source-assets/brand/7fd1e9_TheJuicyEffect_part_logo.png` | images.squarespace-cdn.com/…/TheJuicyEffect+part+logo.png | 2500×2089 RGBA. Multicolour swoosh mark with "the / Juicy / Effect" wordmark in grey. Used at ~110px wide in the header. |
| Social / share logo | `source-assets/brand/08b76c_Untitled_design_(4).png` | …/Untitled+design+%284%29.png | 300×300 RGBA. Used as the site-wide og:image fallback. |
| Favicon | `source-assets/brand/favicon.ico` | …/favicon.ico | Actually a 2500×2219 PNG served with an .ico name. Needs a proper favicon set in the rebuild. |
| Fonts | _not downloaded_ | Squarespace font CDN (Poppins) | Poppins is an open-source Google Font (SIL OFL). Load it from Google Fonts / `next/font/google`; there is no need to copy the Squarespace font files. |

## Video & audio

| Media | Where | Source | Local copy? |
|---|---|---|---|
| video | `/ayurvedic-lifestyle-package` | https://www.youtube.com/watch?v=kLe8re4pnk0 | no — YouTube embed (keep as embed) |
| video | `/blog/2021/10/9/ancestral-healing-video` | https://www.youtube.com/watch?v=h7d0s9_2hsY | no — YouTube embed (keep as embed) |
| audio | `/blog/2021/7/11/what-is-yoga-really` | https://static1.squarespace.com/static/55cd8826e4b0af9801ddffe4/t/61556fa30738f0539e422777/1720928073597/Nick+Phillips+-+03.mp3 | yes (source-assets/media) |
| video | `/blog/2021/9/25/energy-healing-amp-the-eyes` | https://www.youtube.com/watch?v=-9ANedcw2Pc | no — YouTube embed (keep as embed) |
| video | `/blog/2021/9/25/healing-division-in-the-world` | https://www.youtube.com/watch?v=x565sqcnPGs | no — YouTube embed (keep as embed) |
| video | `/blog/2021/9/27/healing-amp-empowerment` | https://www.youtube.com/watch?v=PGtihL0ys3s | no — YouTube embed (keep as embed) |
| video | `/blog/2023/2/15/how-to-find-stability-during-the-death-rebirth-process-and-times-of-great-personal-transformation-and-change` | https://www.youtube.com/embed/2TRklvD7Dac?feature=oembed | no — YouTube embed (keep as embed) |
| video | `/blog/how-to-work-with-the-spirit-of-the-water-deeper-ocean-cleanse` | https://www.youtube.com/watch?v=troYG9tH-ZU | no — YouTube embed (keep as embed) |
| video | `/blog/manifesting-video` | https://www.youtube.com/watch?v=n5hwkqLjfS8 | no — YouTube embed (keep as embed) |
| video | `/blog/what-can-a-rock-teach-us-about-freedom` | https://www.youtube.com/watch?v=XdfGmrJZR78 | no — YouTube embed (keep as embed) |
| video | `/blog/working-with-the-root-chakra-during-times-of-great-personal-transformation` | https://www.youtube.com/embed/AVn2HOpEKeE?feature=oembed | no — YouTube embed (keep as embed) |
| video | `/distance-healing` | https://www.youtube.com/watch?v=x_NBRygF5AM | no — YouTube embed (keep as embed) |
| video | `/energetic-facelift-the-natural-alternative` | https://www.youtube.com/watch?v=DgGbFRjqQPk | no — YouTube embed (keep as embed) |
| video | `/energy-healing` | https://www.youtube.com/watch?v=zxjNqgs4zr4 | no — YouTube embed (keep as embed) |
| video | `/energy-healing` | https://www.youtube.com/watch?v=-9ANedcw2Pc | no — YouTube embed (keep as embed) |
| video | `/hypnotherapy` | https://www.youtube.com/watch?v=zU0JIrkaKp4 | no — YouTube embed (keep as embed) |
| video | `/the-juicy-effect-story` | SQUARESPACE-HOSTED VIDEO (HLS) https://video.squarespace-cdn.com/content/v1/55cd8826e4b0af9801ddffe4/38de62d0-1bec-4010-a441-f4b61a8f20c9/playlist.m3u8 duration=110s variants=1080:1934,360:644 | no — HLS stream only; needs ffmpeg or an owner export from Squarespace |
| video | `/womb-alchemy-a-return-to-sovereignty` | https://www.youtube.com/embed/g7MTb2r3QN0?feature=oembed | no — YouTube embed (keep as embed) |
| video (link) | `/` hero image "Take A Tour" button | https://youtu.be/VDAG5wBESJQ | no — YouTube link |

## Page → asset mapping (site pages)

OG images are omitted below unless page-specific. Almost every page uses the global share logo as og:image.

### Core / hub pages
- **`/`** (27)
  - [image/S1] `source-assets/pages/2787ea_The_Juicy_Effect_Wellbeing_Healing_in_Ubud.png`
  - [gallery/S2] `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — “Shamanic Energy Healing - The Juicy Effect (Copy)”
  - [gallery/S2] `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — “Shamanic Soul and Power Animal Retrieval (Copy)”
  - [gallery/S2] `source-assets/pages/84e14d_Website_Images_Round_(10).png` — “Inner Child Healing with Hypnotherapy (Copy)”
  - [gallery/S2] `source-assets/pages/405255_Website_Images_Round.png` — “Trauma Release with Breathwork (Copy)”
  - [gallery/S2] `source-assets/pages/988f35_Website_Images_Round.png` — “Restore Balance with Access Bars (Copy)”
  - [gallery/S2] `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — “Womb Healing (Copy)”
  - [gallery/S2] `source-assets/pages/eda8e2_image-asset.png` — “Reiki Healing (Copy)”
  - [gallery/S2] `source-assets/pages/829658_Private_Sound_Healing.png` — “Private Sound Healing.png”
  - [gallery/S2] `source-assets/pages/57cd6c_image-asset.png` — “Medical & Health Astrology (Copy)”
  - [gallery/S2] `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — “Discover Your Hidden Self (Copy)”
  - [gallery/S2] `source-assets/pages/616f1e_Website_Images_Round_(31).png` — “Transformational Healing Package (Copy)”
  - [gallery/S2] `source-assets/pages/fcb801_The_Juicy_Effect_Healing_(20).png` — “Deep Energy Healing Package (Copy)”
  - [gallery/S2] `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — “Soulmate Hypnotherapy (Copy)”
  - [gallery/S2] `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — “Ayurvedic Lifestyle Plan (Copy)”
  - [gallery/S2] `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — “Hypnotherapy Packages (Copy)”
  - [gallery/S2] `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — “Activate Your Voice Package - The Juicy Effect (Copy)”
  - [gallery/S2] `source-assets/pages/3f9b68_The_Juicy_Effect_Healing_(26).png` — “Womb Healing Immersion Package”
  - [image/S3] `source-assets/pages/3c24ba_WhatsApp_Image_2026-02-20_at_5.57.34_PM.jpg`
  - [summary-thumb/S6] `source-assets/pages/f1d8eb_WhatsApp_Image_2026-08-27_at_5.51.32_PM.jpeg` — “The Healing We Cannot Think Our Way Through”
  - [summary-thumb/S6] `source-assets/pages/400289_From_The_Journey.jpeg` — “From The Journey:  The Joy That Heals”
  - [summary-thumb/S6] `source-assets/pages/bda91a_The_Sacred_Spiral.jpeg` — “From the Journey - The Sacred Spiral”
  - [summary-thumb/S6] `source-assets/pages/07ca0d_Many_Faces_of_Womb_-_The_Juicy_Effect.jpeg` — “The many faces of the Womb Guardian”
  - [summary-thumb/S6] `source-assets/pages/4d4705_The_Womb_Guardian.png` — “The Womb Guardian”
  - [summary-thumb/S6] `source-assets/pages/63def9_WhatsApp_Image_2026-07-09_at_2.58.09_PM.jpeg` — “Stepping Into Your Womb Sovereign Power”
  - [summary-thumb/S6] `source-assets/pages/7f9923_Embodying_YES_to_life_-_The_Juicy_Effect.jpg` — “Embodying an attitude of YES to life”
  - [summary-thumb/S6] `source-assets/pages/2e32c2_Inner_Child_Hypnotherapy_The_Juicy_Effect.jpeg` — “If You Don't Feel Seen, How Are You Not Seeing Yourself?”
- **`/home`** (27)
  - [image/S1] `source-assets/pages/2787ea_The_Juicy_Effect_Wellbeing_Healing_in_Ubud.png`
  - [gallery/S2] `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — “Shamanic Energy Healing - The Juicy Effect (Copy)”
  - [gallery/S2] `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — “Shamanic Soul and Power Animal Retrieval (Copy)”
  - [gallery/S2] `source-assets/pages/84e14d_Website_Images_Round_(10).png` — “Inner Child Healing with Hypnotherapy (Copy)”
  - [gallery/S2] `source-assets/pages/405255_Website_Images_Round.png` — “Trauma Release with Breathwork (Copy)”
  - [gallery/S2] `source-assets/pages/988f35_Website_Images_Round.png` — “Restore Balance with Access Bars (Copy)”
  - [gallery/S2] `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — “Womb Healing (Copy)”
  - [gallery/S2] `source-assets/pages/eda8e2_image-asset.png` — “Reiki Healing (Copy)”
  - [gallery/S2] `source-assets/pages/829658_Private_Sound_Healing.png` — “Private Sound Healing.png”
  - [gallery/S2] `source-assets/pages/57cd6c_image-asset.png` — “Medical & Health Astrology (Copy)”
  - [gallery/S2] `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — “Discover Your Hidden Self (Copy)”
  - [gallery/S2] `source-assets/pages/616f1e_Website_Images_Round_(31).png` — “Transformational Healing Package (Copy)”
  - [gallery/S2] `source-assets/pages/fcb801_The_Juicy_Effect_Healing_(20).png` — “Deep Energy Healing Package (Copy)”
  - [gallery/S2] `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — “Soulmate Hypnotherapy (Copy)”
  - [gallery/S2] `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — “Ayurvedic Lifestyle Plan (Copy)”
  - [gallery/S2] `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — “Hypnotherapy Packages (Copy)”
  - [gallery/S2] `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — “Activate Your Voice Package - The Juicy Effect (Copy)”
  - [gallery/S2] `source-assets/pages/3f9b68_The_Juicy_Effect_Healing_(26).png` — “Womb Healing Immersion Package”
  - [image/S3] `source-assets/pages/3c24ba_WhatsApp_Image_2026-02-20_at_5.57.34_PM.jpg`
  - [summary-thumb/S6] `source-assets/pages/f1d8eb_WhatsApp_Image_2026-08-27_at_5.51.32_PM.jpeg` — “The Healing We Cannot Think Our Way Through”
  - [summary-thumb/S6] `source-assets/pages/400289_From_The_Journey.jpeg` — “From The Journey:  The Joy That Heals”
  - [summary-thumb/S6] `source-assets/pages/bda91a_The_Sacred_Spiral.jpeg` — “From the Journey - The Sacred Spiral”
  - [summary-thumb/S6] `source-assets/pages/07ca0d_Many_Faces_of_Womb_-_The_Juicy_Effect.jpeg` — “The many faces of the Womb Guardian”
  - [summary-thumb/S6] `source-assets/pages/4d4705_The_Womb_Guardian.png` — “The Womb Guardian”
  - [summary-thumb/S6] `source-assets/pages/63def9_WhatsApp_Image_2026-07-09_at_2.58.09_PM.jpeg` — “Stepping Into Your Womb Sovereign Power”
  - [summary-thumb/S6] `source-assets/pages/7f9923_Embodying_YES_to_life_-_The_Juicy_Effect.jpg` — “Embodying an attitude of YES to life”
  - [summary-thumb/S6] `source-assets/pages/2e32c2_Inner_Child_Hypnotherapy_The_Juicy_Effect.jpeg` — “If You Don't Feel Seen, How Are You Not Seeing Yourself?”
- **`/healing-sessions`** (19)
  - [image/S2] `source-assets/pages/08de44_The_Juicy_Effect_Healing_(7).png`
  - [image/S2] `source-assets/pages/d98c58_The_Juicy_Effect_Healing_(9).png`
  - [image/S2] `source-assets/pages/37c8c1_The_Juicy_Effect_Healing_(15).png`
  - [image/S2] `source-assets/pages/2578ac_The_Juicy_Effect_Healing_(10).png`
  - [image/S2] `source-assets/pages/a76f34_The_Juicy_Effect_Healing_(14).png`
  - [image/S2] `source-assets/pages/032e5a_The_Juicy_Effect_Healing_(3).png`
  - [image/S2] `source-assets/pages/ab2b07_Reiki_Healing_-_The_Juicy_Effect.png`
  - [image/S2] `source-assets/pages/970785_Private_Sound_Therapy.png`
  - [image/S2] `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png`
  - [image/S2] `source-assets/pages/529714_The_Juicy_Effect_Healing_(18).png`
  - [image/S2] `source-assets/pages/753fa7_Distance_Healing_The_Juicy_Effect.png`
  - [image/S2] `source-assets/pages/2a1bd0_The_Juicy_Effect_Healing_-_Start_Your_Next_Chapter.png`
  - [image/S2] `source-assets/pages/980246_Discover_Yourself_Astrology_-_The_Juicy_Effect.png`
  - [gallery/S2] `source-assets/pages/616f1e_Website_Images_Round_(31).png` — “Transformational Healing Package (Copy)”
  - [gallery/S2] `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — “Soulmate Hypnotherapy (Copy)”
  - [gallery/S2] `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — “Ayurvedic Lifestyle Plan (Copy)”
  - [gallery/S2] `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — “Hypnotherapy Packages (Copy)”
  - [gallery/S2] `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — “Activate Your Voice Package - The Juicy Effect (Copy)”
  - [gallery/S2] `source-assets/pages/6231df_The_Next_Chapter_Personal_Retreat.png` — “The Next Chapter Personal Retreat.png”
- **`/healing-packages`** (7)
  - [image/S2] `source-assets/pages/b00a4b_Transformational_Healing_Package_at_The_Juicy_Effect.png` — “Transformational Healing Package at The Juicy Effect”
  - [image/S2] `source-assets/pages/637864_The_Next_Chapter_Personal_Retreat.png`
  - [image/S2] `source-assets/pages/9ba5e1_Soulmate_Hypnotherapy_package_at_The_Juicy_Effect.png` — “Soulmate Hypnotherapy package at The Juicy Effect”
  - [image/S2] `source-assets/pages/16bc11_Womb_Healing_Immersion_Package.png` — “Womb Healing Immersion Package The Juicy Effect”
  - [image/S2] `source-assets/pages/693d0e_Activate_Your_Voice_Package_-_The_Juicy_Effect.png` — “Activate Your Voice Package - The Juicy Effect”
  - [image/S2] `source-assets/pages/96bb80_Ayurvedic_Lifestyle_Package_at_The_Juicy_effect.png` — “Ayurvedic Lifestyle Package at The Juicy effect”
  - [image/S2] `source-assets/pages/887af8_Hypnotherapy_Packages_at_The_Juicy_Effect.png` — “Hypnotherapy Packages at The Juicy Effect”
- **`/private-retreats`** (4)
  - [image/S1] `source-assets/pages/364eaa_WhatsApp_Image_2026-02-20_at_5.57.34_PM.jpg`
  - [image/S2] `source-assets/pages/ffd4e3_Womb_Sovereign_Personal_Retreat.png`
  - [image/S2] `source-assets/pages/41a25c_Restorative_Healing_Personal_Retreat.png`
  - [image/S2] `source-assets/pages/b6a4c2_The_Next_Chapter_Personal_Retreat.png`
- **`/workshops-events-learning`** (4)
  - [image/S1] `source-assets/pages/2ffc64_Sacred_Womb_Healing_Immersion_photo.png`
  - [image/S1] `source-assets/pages/a90ed2_Sharon_And_Ganesh_(1).jpg`
  - [image/S1] `source-assets/pages/d0f583_Workshop.jpg` — “Self Love Workshop at The Juicy Effect”
  - [image/S1] `source-assets/pages/3b423e_Breathwork_workshop_at_The_Juicy_Effect.jpg` — “Breathwork workshop at The Juicy Effect”
- **`/online`** (4)
  - [image/S2] `source-assets/pages/63d594_DSCF0837.png` — “A woman sitting cross-legged on the floor, holding a large, round, yellow leaf w”
  - [image/S2] `source-assets/pages/8ec115_Energy_Mastery_Empowerment_Program_-_The_Juicy_Effect.jpg` — “A woman seated cross-legged on a yoga mat in a meditation room, with her eyes cl”
  - [image/S2] `source-assets/pages/9d458e_The_Medicine_Path_Shamanic_Mentoring_Program_The_Juicy_Effect.jpg` — “Woman practicing yoga or meditation in a room with large windows, a statue of Lo”
  - [image/S2] `source-assets/pages/942f3f_Womb_Healing_Course_The_Juicy_Effect.jpg` — “A woman playing a large drum with a mallet in a cozy, sunlit room with candles, ”
- **`/contact`** (2)
  - [image/S1] `source-assets/pages/ab0c8f_The_Juicy_Effect_Reception.jpg` — “The Juicy Effect wellbeing centre in Ubud”
  - [image/S2] `source-assets/pages/d9acde_The_Juicy_Effect_Team.jpg` — “The Juicy Effect Team”

### Individual healing sessions
- **`/energy-healing`** (1)
  - [image/S2] `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png` — “Sharon Keating - The Juicy Effect”
- **`/shamanic-soul-retrieval`** (2)
  - [image/S2] `source-assets/pages/53a174_Shamanic_Soul_Retrieval_with_Sharon.jpg` — “Shamanic Soul Retrieval with Sharon”
  - [image/S2] `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png`
- **`/hypnotherapy`** (2)
  - [image/S2] `source-assets/pages/6e5376_Hypnotherapy_at_The_Juicy_Effect.jpg` — “Hypnotherapy at The Juicy Effect”
  - [image/S2] `source-assets/pages/164ee7_Sharon_Keating_-_The_Juicy_Effect.png` — “Sharon Keating - The Juicy Effect.png”
- **`/trauma-release-with-breathwork`** (2)
  - [image/S1] `source-assets/pages/fd37eb_Rebirthing_Breathwork_at_The_Juicy_Effect.png` — “Rebirthing Breathwork at The Juicy Effect”
  - [image/S2] `source-assets/pages/e43063_Gita_experienced_Breathwork_practitioner_The_Juicy_Effect.png` — “Gita experienced Breathwork practitioner The Juicy Effect”
- **`/energy-healing-access-consciousness`** (3)
  - [image/S1] `source-assets/pages/733aae_Access_Bars_at_The_Juicy_Effect_in_Ubud.jpg` — “Access Bars at The Juicy Effect in Ubud”
  - [image/S2] `source-assets/pages/adc07a_Julia_is_our_Access_Bars_Practitioner_in_Ubud.jpg` — “Julia is our Access Bars Practitioner in Ubud”
  - [image/S2] `source-assets/pages/86f313_Julia_Access_Bars_at_The_Juicy_Effect.png` — “Julia Access Bars at The Juicy Effect”
- **`/womb-healing`** (2)
  - [image/S2] `source-assets/pages/1cd051_Womb_Of_The_Ancients_The_Juicy_Effect.jpg` — “Womb Of The Ancients The Juicy Effect”
  - [image/S2] `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png` — “Sharon Keating - The Juicy Effect”
- **`/reiki-healing`** (1)
  - [image/S2] `source-assets/pages/938474_Reiki_Healing_at_The_Juicy_Effect_in_Ubud.jpg` — “Reiki Healing at The Juicy Effect in Ubud”
- **`/private-sound-therapy`** (3)
  - [image/S1] `source-assets/pages/43fe34_vibrational_healing.jpg`
  - [image/S2] `source-assets/pages/ce9934_IMG_9945.jpg`
  - [image/S2] `source-assets/pages/3bfb66_IMG_0149.png`
- **`/vedic-astrology-navigate-the-unknown`** (0)
- **`/medical-jyotish`** (2)
  - [image/S2] `source-assets/pages/700bc2_Medical_Astrology_at_The_Juicy_Effect.png` — “Medical Astrology at The Juicy Effect”
  - [image/S2] `source-assets/pages/9e32ff_Jhaanavikaa_at_The_Juicy_Effect.jpg`
- **`/distance-healing`** (1)
  - [image/S2] `source-assets/pages/1cd0ee_Sharon_Jason_Photo_(1).png` — “Sharon Jason Photo (1).png”
- **`/start-your-next-chapter`** (0)
- **`/energetic-facelift-the-natural-alternative`** (2)
  - [image/S1] `source-assets/pages/96ccfc_energetic_facelift.jpg`
  - [image/S2] `source-assets/pages/cd5207_Untitled_design.png`

### Healing packages
- **`/transformational-healing-package`** (2)
  - [image/S1] `source-assets/pages/021053_The_Juicy_Effect_Healing_(17).png`
  - [image/S1] `source-assets/pages/7fcb5d_Sharon_Jason_Photo_(1).png`
- **`/soulmate-alchemy`** (2)
  - [image/S1] `source-assets/pages/468356_The_Juicy_Effect_Healing_(4).png` — “A heart drawn in the sand at the beach with the text 'Soulmate Hypnotherapy' ove”
  - [image/S2] `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — “Sharon Jason Photo (1).png”
- **`/womb-healing-immersion-package`** (2)
  - [image/S1] `source-assets/pages/8fb53c_Womb_Healing_Immersion.png` — “Womb Healing Immersion Package The Juicy Effect”
  - [image/S1] `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png`
- **`/activate-your-voice-package`** (2)
  - [image/S1] `source-assets/pages/ac8d13_Activate_Your_Voice_Package_The_Juicy_Effect.png` — “A microphone in a dark setting with a spotlight highlighting its top, accompanie”
  - [image/S2] `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — “Sharon Jason Photo (1).png”
- **`/ayurvedic-lifestyle-package`** (1)
  - [image/S2] `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — “Sharon Jason Photo (1).png”
- **`/hypnotherapy-package`** (2)
  - [image/S1] `source-assets/pages/e5c7bc_The_Juicy_Effect_Healing.png`
  - [image/S2] `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — “Sharon Jason Photo (1).png”

### Private retreats
- **`/womb-sovereign-private-retreat`** (1)
  - [image/S2] `source-assets/pages/7e5a98_Womb_Sovereign_Retreat_The_Juicy_Effect.jpg`
- **`/restorative-healing-personal-retreat`** (0)
- **`/the-next-chapter-private-retreat`** (5)
  - [image/S1] `source-assets/pages/2ae7b1_WhatsApp_Image_2023-08-22_at_4.28.55_PM.jpeg` — “A private outdoor infinity pool surrounded by a wooden railing and lush green tr”
  - [image/S2] `source-assets/pages/35b2ad_imgg-demo-VQfymkWw.png` — “Close-up of a pink poppy flower with dewdrops on its petals, showing yellow stam”
  - [image/S3] `source-assets/pages/891b08_WhatsApp_Image_2024-07-21_at_1.40.40_PM.jpg` — “A woman and a man standing on either side of a large Ganesha idol decorated with”
  - [image/S4] `source-assets/pages/5d21be_DSCF0804.JPG` — “Two women sitting cross-legged on yoga mats facing each other inside a room with”
  - [image/S5] `source-assets/pages/277d26_WhatsApp_Image_2023-08-22_at_2.25.17_PM.jpeg` — “Bathroom with a textured stone wall, featuring a large Buddha face sculpture in ”

### Workshops (group, in Ubud)
- **`/womb-healing-vision-quest-workshop`** (2)
  - [image/S2] `source-assets/pages/2ffc64_Sacred_Womb_Healing_Immersion_photo.png` — “A woman in a purple shawl and green pants sits cross-legged on a purple yoga mat”
  - [image/S2] `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — “A woman with blonde hair smiling outdoors next to purple flowers and green folia”
- **`/how-to-keep-your-energy-field-clear-workshop`** (2)
  - [image/S2] `source-assets/pages/d4db54_Sharon_And_Ganesh.jpg` — “A woman in a blue dress with earrings and bracelets stands with her hand on her ”
  - [image/S2] `source-assets/pages/7fcb5d_Sharon_Jason_Photo_(1).png` — “Sharon Jason Photo (1).png”
- **`/self-love-through-radical-self-acceptance`** (2)
  - [image/S2] `source-assets/pages/d0f583_Workshop.jpg`
  - [image/S2] `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png`
- **`/discover-balance-and-harmony-with-breathwork`** (2)
  - [image/S2] `source-assets/pages/8ff876_WhatsApp_Image_2024-08-22_at_9.50.50_AM.jpeg` — “A woman playing a small wooden harp or autoharp, sitting on the floor with a man”
  - [image/S2] `source-assets/pages/61c7f0_Brown_and_Light_Brown_Circle_Framed_Instagram_Profile_Picture.png` — “A woman with long dark hair smiling outdoors, wearing a white off-shoulder ruffl”

### Online courses & certifications
- **`/womb-alchemy-a-return-to-sovereignty`** (1)
  - [image/S2] `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — “A woman with shoulder-length blonde hair smiling outdoors next to purple flowers”
- **`/energy-mastery-1-to-1-spiritual-mentoring-program`** (1)
  - [image/S1] `source-assets/pages/c73914_Energy_Mastery_Empowerment_Course.jpg` — “Sharon Keating is an energy healing expert in Ubud, Bali.”
- **`/practical-shamanism-for-the-real-world`** (1)
  - [image/S2] `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — “With 15+ years experience in the health and wellbeing industry, she is a Certifi”
- **`/the-medicine-path-practitioner-certification`** (2)
  - [image/S1] `source-assets/pages/3d57b4_WhatsApp_Image_2024-08-15_at_12.07.10_PM.jpg` — “A woman in a blue dress practicing yoga or meditation in a room with large windo”
  - [image/S2] `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — “A woman with blonde hair smiling outdoors, surrounded by green trees and purple ”

### About / team / info
- **`/the-juicy-effect-story`** (3)
  - [image/S2] `source-assets/pages/c2a8df_The_Juicy_Effect_is_located_in_Ubud_Bali.jpg` — “The Juicy Effect is located in Ubud Bali”
  - [image/S2] `source-assets/pages/ac4598_The_Juicy_Effect_offers_Energy_Healing_sessions.jpg` — “The Juicy Effect offers Energy Healing sessions”
  - [image/S2] `source-assets/pages/f52b9d_Meet_The_Juicy_Effect_team.jpg` — “Meet The Juicy Effect team”
- **`/sharon-keating`** (1)
  - [image/S2] `source-assets/pages/c2a024_Sharon_Keating_-_Consultant_at_The_Juicy_Effect.png` — “Sharon Keating - Consultant at The Juicy Effect”
- **`/meet-julia`** (1)
  - [image/S2] `source-assets/pages/6fb837_Julia_practitioner_at_The_Juicy_Effect.png`
- **`/meet-gita-sianipar`** (1)
  - [image/S2] `source-assets/pages/726387_Gita_is_a_wellbeing_practitioner_at_The_Juicy_Effect.png` — “Gita is a wellbeing practitioner at The Juicy Effect”
- **`/meet-vickya`** (1)
  - [image/S2] `source-assets/pages/3bfb66_IMG_0149.png`
- **`/meet-jhanavikaa`** (1)
  - [image/S2] `source-assets/pages/b3136a_Meet_Jhaana_at_The_Juicy_Effect.jpg` — “Meet Jhaana at The Juicy Effect”
- **`/things-to-do-in-ubud`** (2)
  - [image/S1] `source-assets/pages/28cf6e_Ubud.jpg` — “Ubud.jpg”
  - [image/S1] `source-assets/pages/ac8b04_Visit_the_team_at_The_Juicy_Effect.jpg`
- **`/rent-our-space`** (4)
  - [image/S2] `source-assets/pages/8e5a5b_Rent_wellbeing_space_in_ubud.jpg` — “Premium wellbeing space to rent in Ubud”
  - [image/S2] `source-assets/pages/fa9b6d_Event_space_for_rent_in_Ubud_at_The_Juicy_Effect.jpg` — “Event space for rent in Ubud at The Juicy Effect”
  - [image/S2] `source-assets/pages/095380_Rent_premium_space_in_ubud_at_The_Juicy_Effect.jpg` — “Rent premium space in ubud at The Juicy Effect”
  - [image/S2] `source-assets/pages/74bc42_Rent_our_jungle-view_rooms_in_ubud_at_The_Juicy_Effect.jpg` — “Rent our jungle-view rooms in ubud at The Juicy Effect”
- **`/privacy-policy`** (0)

### Legacy / orphan gallery pages
- **`/packages-1`** (7)
  - [gallery/S1] `source-assets/pages/616f1e_Website_Images_Round_(31).png` — “Transformational Healing Package (Copy)”
  - [gallery/S1] `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — “Soulmate Hypnotherapy (Copy)”
  - [gallery/S1] `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — “Ayurvedic Lifestyle Plan (Copy)”
  - [gallery/S1] `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — “Hypnotherapy Packages (Copy)”
  - [gallery/S1] `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — “Activate Your Voice Package - The Juicy Effect (Copy)”
  - [gallery/S1] `source-assets/pages/6b5410_The_Juicy_Effect_Healing_(26).png` — “Womb Healing Immersion Package - The Juicy Effect”
  - [gallery/S1] `source-assets/pages/955187_The_Next_Chapter_Personal_Retreat.png` — “A poolside area with two lounge chairs, a large umbrella, towels, and surrounded”
- **`/personal-consultations`** (11)
  - [gallery/S1] `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — “Shamanic Energy Healing - The Juicy Effect (Copy)”
  - [gallery/S1] `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — “Shamanic Soul and Power Animal Retrieval (Copy)”
  - [gallery/S1] `source-assets/pages/84e14d_Website_Images_Round_(10).png` — “Inner Child Healing with Hypnotherapy (Copy)”
  - [gallery/S1] `source-assets/pages/405255_Website_Images_Round.png` — “Trauma Release with Breathwork (Copy)”
  - [gallery/S1] `source-assets/pages/988f35_Website_Images_Round.png` — “Restore Balance with Access Bars (Copy)”
  - [gallery/S1] `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — “Womb Healing (Copy)”
  - [gallery/S1] `source-assets/pages/eda8e2_image-asset.png` — “Reiki Healing (Copy)”
  - [gallery/S1] `source-assets/pages/41c3b1_Private_Sound_Therapy.png` — “Private Sound Therapy is an intimate 1-on-1 experience designed to calm the nerv”
  - [gallery/S1] `source-assets/pages/57cd6c_image-asset.png` — “Medical & Health Astrology (Copy)”
  - [gallery/S1] `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — “Discover Your Hidden Self (Copy)”
  - [gallery/S1] `source-assets/pages/88265d_The_Juicy_Effect_Healing_-_Start_Your_Next_Chapter.png` — “A sidewalk with the words "START ANYTHING?" painted in white, with a gray banner”
- **`/workshops`** (3)
  - [gallery/S1] `source-assets/pages/a0e129_Workshop.jpg` — “SELF LOVE THROUGH RADICAL SELF-ACCEPTANCE (Copy)”
  - [gallery/S1] `source-assets/pages/48e9ff_image-asset.jpg` — “How to Keep Your Energetic Field Clear (Copy)”
  - [gallery/S1] `source-assets/pages/41ce31_WhatsApp_Image_2024-08-22_at_9.50.51_AM.jpg` — “Discover Balance and Harmony Through Breathwork (Copy)”

## Most-reused images (3+ pages)

- `source-assets/pages/6920b8_Untitled_design_(4).png` — 53 pages
- `source-assets/pages/13ed5b_Sharon_Keating_-_The_Juicy_Effect.png` — 6 pages
- `source-assets/pages/e505c3_Ayurvedic_Lifestyle_Plan_-_The_Juicy_Effect.png` — 4 pages
- `source-assets/pages/c59c3a_Sharon_Jason_Photo_(1).png` — 4 pages
- `source-assets/pages/6d493b_The_Juicy_Effect_Healing_(16).png` — 4 pages
- `source-assets/pages/c6f6eb_The_Juicy_Effect_Healing_(22).png` — 4 pages
- `source-assets/pages/616f1e_Website_Images_Round_(31).png` — 4 pages
- `source-assets/pages/f6d385_hat_s_how_you_do_it_(2).png` — 4 pages
- `source-assets/pages/beb824_hat_s_how_you_do_it_(5).png` — 4 pages
- `source-assets/pages/0b674a_Sharon_Keating_-_The_Juicy_Effect.png` — 3 pages
- `source-assets/pages/af3221_hat_s_how_you_do_it_(4).png` — 3 pages
- `source-assets/pages/eda8e2_image-asset.png` — 3 pages
- `source-assets/pages/84e14d_Website_Images_Round_(10).png` — 3 pages
- `source-assets/pages/405255_Website_Images_Round.png` — 3 pages
- `source-assets/pages/70b5c7_Website_Images_Round_(1).png` — 3 pages
- `source-assets/pages/f7ab77_Website_Images_Round_(12).png` — 3 pages
- `source-assets/pages/988f35_Website_Images_Round.png` — 3 pages
- `source-assets/pages/57cd6c_image-asset.png` — 3 pages

## Image characteristics observed

- **Service/package card art** (`Website Images Round (N).png`, `The Juicy Effect Healing (N).png`, 1080×1080): designed tiles with a circular photo, a coloured ring (cyan, teal, orange, green, purple, red, blue), and a coloured label bar with white bold text (Arial-like). The service names are **baked into the image**. There are two versions of many tiles: a "Round" version (homepage carousels) and a framed-square version (hub pages).
- **Photography:** real photos of the centre (open-plan glass-walled studio, jungle setting, pool villa), the team, and Sharon. Some are WhatsApp exports (`WhatsApp Image 2026-…jpg`), so quality varies.
- **Blog imagery:** mostly stock or AI-styled illustrative images (sunsets, spirals, lion and woman, womb guardian), many 1500–2500px PNGs of 1–9 MB. Compress them at build time.
- **Large files:** the largest originals are 8.9 MB (`DSCF0837.png` / Womb Healing Immersion) and 4.9 MB (homepage hero PNG). With Next.js image optimisation disabled, pre-optimise these (e.g. to WebP/AVIF at fixed widths) during implementation.
- **Missing alt text:** many images use filenames or "(Copy)" suffixes as alt text (e.g. "Shamanic Energy Healing - The Juicy Effect (Copy)", "Ubud.jpg"). Clean these up in the rebuild without changing meaning.
- **Instagram feed images** on the homepage are loaded live by the Squarespace Instagram block and are **not** part of the site's own assets.