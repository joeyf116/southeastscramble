# Southeast Scramble

Website for the Southeast Scramble, a submission-only Nogi Jiu-Jitsu tournament run under EBI rules.

Built with [Vite](https://vite.dev), React, React Router, and Tailwind CSS. Hosted on GitHub Pages.

## Development

```bash
npm install
npm run dev       # http://localhost:5173/southeastscramble/
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

The site is served from `/southeastscramble/`. If you point a custom domain at it, build with `BASE_PATH=/` (set it as an `env` on the build step) and add a `public/CNAME` file.

Client-side routes (e.g. `/rules`) work on refresh because the build copies `index.html` to `404.html`.
