# Deploy to GitHub Pages

1. `npm ci && npm run test && npm run build`
2. Publish `dist/` to the **gh-pages** branch (root), or use the workflow below.

## GitHub Actions (recommended)

`.github/workflows/pages.yml` builds on push to `main` and uploads `dist/` as the Pages artifact.

## Settings

Repository **Settings → Pages** → Source: **GitHub Actions** (or branch **gh-pages** / root if you deploy manually).

Site URL: `https://underwood-inc.github.io/overlane/`
