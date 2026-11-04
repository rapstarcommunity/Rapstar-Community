# Star World Community

A static music community website imported from https://github.com/paperrings273/repository (the `master` branch). It includes artist profiles, release listings, highlights, and record labels.

The site uses HTML, CSS, and browser JavaScript, with Bootstrap, jQuery, Swiper, and Font Awesome loaded from CDNs. Netlify serves the existing files directly without a build step. The original Webpack configuration is retained from the upstream repository.

## Netlify publishing

The production site at `https://rapstarcommunity.netlify.app/` tracks `main`. Branch preview addresses show separate deployments and do not update production automatically. Merge the desired changes into `main` and confirm that its production deployment succeeds.

`netlify.toml` explicitly uses a no-op publish command and publishes the repository root. This prevents automatic detection from running the legacy `npm run build` script, which references files that are no longer present. A failed production deployment leaves the previous successful version online.

## Local development

From the project root, run `python3 -m http.server 8000` and open http://localhost:8000. No dependency installation is required for static serving.

The import contains source files without upstream Git history or a configured upstream remote.
