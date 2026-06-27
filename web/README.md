# QiQi Yến Sào — Flipbook website

A static, page-flip (flipbook) catalog with a Vietnamese / Chinese toggle.
Built on [StPageFlip](https://github.com/Nodlik/StPageFlip) (vendored, no CDN).

```
web/
├── index.html              # the flipbook viewer (VI/CN toggle, nav, responsive)
├── lib/
│   ├── page-flip.browser.js   # StPageFlip (vendored)
│   ├── stPageFlip.css
│   └── logo-mark.webp
└── pages/
    ├── vi/01.jpg … 23.jpg   # one image per catalog page (Vietnamese)
    └── cn/01.jpg … 23.jpg   # … (Chinese)
```

## Deploy to Vercel

This folder is a **static site** — no build step.

1. Push the repo to GitHub (already done).
2. On Vercel → **Add New → Project → Import** the repo.
3. In project settings:
   - **Root Directory:** `web`
   - **Framework Preset:** Other
   - **Build Command:** (leave empty) · **Output Directory:** leave default
4. **Deploy.** Done — Vercel serves `web/index.html`.

> Or via CLI: `npm i -g vercel`, then from the repo root run `vercel --cwd web`.

## Regenerating the page images

The page images come from the catalog in `../site`. After editing
`site/data.mjs`, regenerate them:

```bash
cd ../site
npm install && npx playwright install chromium   # first time only
node pages.mjs        # re-renders web/pages/vi/*.jpg and web/pages/cn/*.jpg
```
