# AGENTS.md

## Project Shape
- This is a dependency-free static landing page; there is no `package.json`, build step, test runner, linter, formatter, or CI config in this repo.
- Runtime entrypoints are `index.html`, `css/styles.css`, and `js/main.js`; images are loaded from `images/` with relative paths.
- `en/` and `es/` currently exist but are empty; language switching is handled client-side in `js/main.js`, not by separate localized pages.

## Local Verification
- Serve the directory rather than opening files directly when checking browser behavior: `python3 -m http.server 8000` from `/home/carlos/Documentos/web`, then visit `http://localhost:8000/`.
- With no automated checks available, manually verify desktop and mobile layouts, ES/EN language toggle, mobile menu, image cycling, price updates, and preorder form validation after UI or JS changes.

## Implementation Notes
- Text content is split between the Spanish defaults in `index.html` and the `translations` object in `js/main.js`; keep both ES and EN values in sync when changing copy or adding UI text.
- `setLanguage()` updates many elements by hard-coded IDs. If an ID changes in `index.html`, update the matching selector in `js/main.js` in the same change.
- PayPal payment is a static PayPal.Me personal-link flow in `js/main.js`; set `PAYPAL_ME_LINK` before expecting the payment button to redirect. There is no automatic payment confirmation in this repo.
- Bizum payment is manual: set `BIZUM_PHONE` in `js/main.js`; the button only shows payment instructions and does not confirm payment automatically.
- Responsive behavior is all in `css/styles.css` media queries at `1024px`, `768px`, and `480px`; check those breakpoints before considering layout work complete.
