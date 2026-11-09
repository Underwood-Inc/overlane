# Overlane (public)

Marketing site and Windows **release assets** for Overlane — not the application source tree.

| Item | Location |
|------|----------|
| **Live site** | `npm run build` → GitHub Pages at `https://underwood-inc.github.io/overlane/` |
| **Source app** | React (Vite) in `src/` — see [AGENTS.md](AGENTS.md) for CLAD layout |
| **Purchase / installers** | [short.army/overlane](https://short.army/overlane) |

## Develop

```bash
npm install
npm run dev
npm run test
npm run build
```

## Privacy of links

The built site is **self-contained**: guides live on the page (`#site-getting-started`, etc.). The only external product URL is **https://short.army/overlane** (sticky **BUY NOW** card after scroll).

Engineering source: **Underwood-Inc/overlane-private** (private).

## Deploy

See [docs/DEPLOY.md](docs/DEPLOY.md) and `.github/workflows/pages.yml`.

Legacy markdown files (`GETTING-STARTED.md`, `player-guide.md`) are optional GitHub-rendered copies; the React app is canonical.
