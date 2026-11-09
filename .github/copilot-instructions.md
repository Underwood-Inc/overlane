# Copilot — Overlane public marketing site

- **CLAD:** Atoms → Molecules → Organisms → View → App. No business logic in atoms; no fetch in views (static marketing).
- **Outbound links:** Only `BUY_NOW_URL` in `src/molecules/marketing/product-url.ts`. Purchase CTA is `StickyBuyNowCard` (`<a href>`). Guides use in-page `#site-*` anchors.
- **Copy:** Player-facing, no trace IDs, no internal repo paths, no API secrets.
- **Tests:** Add/update Vitest when changing molecules or atoms.
- Read `AGENTS.md` for layout map.
