# Project guide

This repository contains the Star World Community static website imported from `paperrings273/repository`, branch `master`.

## Architecture

- `index.html` is the public landing page, including page-specific styling and browser scripts.
- `artistas/` contains current artist pages and shared discography and event data.
- `artistas-antigo/` contains older artist pages.
- `css/`, `js/`, `img/`, and `fontes/` contain styles, scripts, images, and fonts.
- Other HTML pages and JSON datasets support the music catalog.
- `netlify.toml` prepares public files with `scripts/prepare-publish.cjs` and publishes `dist`; Functions are bundled separately.

## Conventions

Preserve the upstream Portuguese content, existing relative links, filename casing, and static page structure. Edit related HTML, CSS, and JavaScript directly. The existing Webpack files are legacy configuration and are not used by Netlify. Do not introduce a framework or regenerate the site for routine edits. No automated test suite is configured.
