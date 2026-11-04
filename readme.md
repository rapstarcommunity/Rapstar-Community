# Star World Community

A static music community website imported from https://github.com/paperrings273/repository (the `master` branch). It includes artist profiles, release listings, highlights, and record labels.

The site uses HTML, CSS, and browser JavaScript, with Bootstrap, jQuery, Swiper, and Font Awesome loaded from CDNs. Netlify serves the existing files from `dist`, prepared by a dependency-free copy script. The original Webpack configuration is retained from the upstream repository but is not used for publishing.

## Netlify publishing

The production site at `https://rapstarcommunity.netlify.app/` tracks `main`. Branch preview addresses show separate deployments and do not update production automatically. Merge the desired changes into `main` and confirm that its production deployment succeeds.

`netlify.toml` runs `node scripts/prepare-publish.cjs` and publishes `dist`. The script copies the current `index.html` and public assets, without rewriting pages or using the legacy Webpack template (`index-antigo.html`). Server code, dependencies, and internal configuration stay outside the public directory; Netlify bundles Functions separately. The `build` package script uses the same preparation command.

This dedicated output directory replaces publishing the checkout root, which failed in production with `Deploy directory '/opt/build/repo' does not exist`. A failed production deployment leaves the previous successful version online. Verify the resulting production deploy before treating the main domain as updated.

## Local development

From the project root, run `python3 -m http.server 8000` and open http://localhost:8000. No dependency installation is required for static serving.

The import contains source files without upstream Git history or a configured upstream remote.
