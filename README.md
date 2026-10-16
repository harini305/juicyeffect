# The Juicy Effect — website rebuild

Next.js (App Router, JavaScript) rebuild of thejuicyeffect.com. It uses the original content, images and URLs captured in the Phase 1 audit.

```bash
npm install
npm run dev            # http://localhost:3000 (or: npx next dev -p <port>)
npm run build && npm start
npm run check-routes   # verifies every page, post and archive route on a running server
```

## Where things live

| Path | Contents |
|---|---|
| `docs/source-audit/` | Phase 1 audit (read-only source of truth) |
| `source-assets/` | Original images, favicon and MP3 (never modified) |
| `scripts/build-content.mjs` | Audit Markdown → `src/data/generated/*.json` (runs before `build`) |
| `scripts/optimize-images.mjs` | Originals → WebP derivatives in `public/img/` and the favicon set |
| `src/data/site.js` | **Edit here:** contact details, hours, navigation, footer copy |
| `src/data/offers.js` | **Edit here:** durations and prices shown in "at a glance" panels |
| `src/data/pages.js` | Which template renders each route |
| `src/app/` | Routes: `/`, `[slug]`, `blog/…` (posts, tags, categories) |
| `src/components/` | Templates, home sections, blog, content renderer, motion |
| `docs/IMPLEMENTATION-REPORT.md` | What was built, decisions, open questions |

To change page or post wording, edit the Markdown in `docs/source-audit/content/` (or move it to a dedicated content folder), then run `npm run content`.

Next.js image optimisation is disabled (`images.unoptimized: true`). Pages serve the pre-optimised files in `public/img/`.
