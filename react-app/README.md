# Cardiac Critical Care Suite — React build

A Vite + React single-page version of the suite. The whole app is one component
(`src/App.jsx`, default export) that injects its own CSS and needs no UI library.

## Develop / build

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve dist/ locally
```

## Deploy dist/ to GitHub Pages

The config uses `base: "./"`, so `dist/` works under any Pages path. Two options:

**1. Push the built dist/ to a `gh-pages` branch** (e.g. with the `gh-pages` npm
package, or manually), then set Settings -> Pages -> Deploy from a branch ->
`gh-pages` / root.

**2. Build in CI.** Replace the repo-root workflow's upload step so it builds
this project and publishes `react-app/dist`:

```yaml
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm, cache-dependency-path: react-app/package-lock.json }
      - run: npm ci
        working-directory: react-app
      - run: npm run build
        working-directory: react-app
      - uses: actions/upload-pages-artifact@v3
        with: { path: react-app/dist }
```

> Flashcard progress in this build is session-only (resets on reload). For
> persistent progress and offline use, deploy the single-file `index.html` at the
> repository root instead (see the top-level README).
