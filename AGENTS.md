# Overlane marketing site (public)

React + Vite GitHub Pages site for **Underwood-Inc/overlane**. No application source — marketing only.

## CLAD map

| Tier | Folder | Role |
|------|--------|------|
| Atom | `src/atoms/` | Card shell, badge, stat tile, external release link |
| Molecule | `src/molecules/` | Tabs, hash routing, glossary, guides copy, flow diagram |
| Organism | `src/organisms/` | Hero, tab panels |
| View | `src/views/` | `ProductMarketingView` page |
| App | `src/App.tsx` | Glossary provider + view |

**Port/adapter rule:** `product-url.ts` (`BUY_NOW_URL`) is the only outbound product URL. Sticky CTA: `StickyBuyNowCard` — real `<a href>`, not `onClick` navigation. Do not add links to private repos or engineering docs.

## Commands

```bash
npm install
npm run dev
npm run test
npm run build
```

`npm run build` emits `dist/` for GitHub Pages (`base: /overlane/`).

## Tests

Vitest + Testing Library — every molecule and atom should have a `*.test.ts(x)` beside it.

## Publishing

See `docs/DEPLOY.md` and the private-repo `docs/public-distribution/SYNC-PUBLIC-REPO.md`.
