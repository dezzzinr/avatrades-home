# AvaTrades — Marketing Landing Page

A standalone, static landing page for AvaTrades. No build step, no
dependencies, no framework — just `index.html`, `styles.css`, and
`script.js`. Host it anywhere that can serve static files: Netlify, Vercel,
GitHub Pages, Cloudflare Pages, S3 + CloudFront, or a plain Nginx/Apache box.

## 1. Before you deploy — set your app URL

Open `script.js` and change this one line near the top:

```js
const APP_URL = "https://app.avatrades.com"; // <-- change this to your real AvaTrades app URL
```

Every "Login" / "Get started" button on the page (nav, hero, CTA banner,
footer) automatically points to this URL — you only need to edit it once.

## 2. Deploy

Just upload the 3 files (`index.html`, `styles.css`, `script.js`) to your
static host of choice. There's nothing to install and nothing to build.

Quick local preview:
```bash
cd avatrades-landing
python3 -m http.server 8080
# open http://localhost:8080
```

## 3. What's on the page

- Sticky nav with a light/dark theme toggle (persisted per-visitor, matches
  system preference by default) and mobile menu.
- Hero section with a product preview panel built from the same colors and
  card styles as the real AvaTrades dashboard (not a screenshot — a live
  HTML/CSS mini-recreation, so it never looks outdated).
- Feature grid covering live trading, copy trading, bots, the Target
  feature, alerts, deposits/withdrawals, plans, security, and live chat.
- "Why AvaTrades" benefits section.
- A live **Markets** section embedding real **TradingView** widgets (ticker
  tape, advanced chart, market overview) — these need an internet
  connection to load, so they'll only render once the page is actually
  online (they won't show in an offline/sandboxed preview).
- CTA banner, FAQ accordion, and footer with a standard trading risk
  disclaimer.

## 4. Customizing

- **Colors / theme**: all colors are CSS custom properties at the top of
  `styles.css` (`:root` for light, `[data-theme="dark"]` for dark) — the
  exact same tokens used in the AvaTrades web app, so changing the app's
  brand color later just means updating these in one place.
- **Copy**: all text lives directly in `index.html`, no CMS or build step.
- **TradingView symbols**: each widget's `symbols`/`tabs` list in
  `index.html` can be edited to add/remove coins — see
  [tradingview.com/widget](https://www.tradingview.com/widget/) for more
  widget types and options.
