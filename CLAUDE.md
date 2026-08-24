# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

duxlab.org is a static, no-build-step website: plain HTML, CSS, and vanilla JS served as-is (no bundler, package manager, framework, or test suite). The repo previously scaffolded a Docusaurus site; that has been removed in favor of hand-authored static files. To preview locally, serve the directory root with any static file server and open `index.html`.

## Files

- `index.html` — the only page. Uses [microformats2](http://microformats.org/) markup (`h-card`, `p-name`, `u-url`, etc.) on the header for machine-readable identity — preserve these classes when editing markup.
- `style.css` — the entire stylesheet, hand-written (no preprocessor). Structured as numbered sections (custom properties → reset → type → layout → header/nav → hero → buttons → ... → responsive → reduced-motion) — keep new rules in the matching section rather than appending ad hoc. Written for explicit cross-browser compatibility: flexbox/grid/transform/transition/appearance rules carry `-webkit-`/`-moz-`/`-ms-` prefixes and should keep doing so.
- `nav.js` — small vanilla IIFE (no dependencies) that hides the header on scroll-down and reveals it on scroll-up, toggling `.is-hidden`/`.is-scrolled` classes defined in `style.css`. Throttled via `requestAnimationFrame` with a `setTimeout` fallback.
- `llms.txt` — machine-readable site summary linked from `index.html`'s `<head>`; keep its page list in sync with what `index.html` actually contains.
- `images/` — static image assets (e.g. `dux-logo.png`), referenced by relative/absolute path from HTML/CSS.

## Design system (in `style.css`)

- Design direction: editorial, systems-thinking aesthetic — earthy palette, bold geometric type, generous whitespace, card-based grids.
- All colors, fonts, and spacing are driven by CSS custom properties on `:root` (`--color-*`, `--font-*`, `--space-*`) — change the design by editing these tokens, not by hardcoding values in individual rules.
- Layout uses a 12-column CSS grid (`.grid` + `.wrap` for the max-width, centered, padded content container). The site header is a deliberate exception: it uses `.site-header-inner` instead of `.wrap` so the header bar spans full viewport width rather than being constrained to the page's max-width column.
- Responsive breakpoints are at `900px` and `640px`; a `prefers-reduced-motion` block disables transitions/animations globally.
