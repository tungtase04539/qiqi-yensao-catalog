# QiQi Yến Sào — Catalog (Báo Giá / 报价单)

Clean, data-driven static implementation of the QiQi Yến Sào bilingual product
catalog (Vietnamese + Chinese), rebuilt from the Claude Design export.

- **38 pages**: 19 Vietnamese pages, then 19 Chinese pages.
  Cover → Letter & Introduction (with FDA / Top-10 / China certifications) →
  Table of Contents → 8 product pages → 8 gift-box pages.
- **Paginated & print-ready**: each A4-landscape card prints to one sheet
  (`@page { size: A4 landscape }`). To export a PDF, open `index.html` in
  Chrome → Print → *Save as PDF*, Landscape, margins **None**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Generated output — open this in a browser. |
| `data.mjs` | All catalog content (the source of truth). Edit here. |
| `styles.css` | Design system: red/gold tokens, page chrome, components, print rules. |
| `build.mjs` | Generator — turns `data.mjs` into `index.html`. |
| `assets/` | Logos, flags, certificates, product photos. |

## Editing

Change content in `data.mjs`, then regenerate:

```bash
node build.mjs        # or: npm run build
```

## Continue on another machine

```bash
git clone <repo-url> && cd <repo>/site
npm install                      # installs playwright (for PDF export)
npx playwright install chromium  # one-time browser download
node build.mjs                   # regenerate index.html from data.mjs
node pdf.mjs                      # export QiQi-BaoGia-VI.pdf + QiQi-BaoGia-CN.pdf
```

`index.html` opens directly in any browser. The PDFs are git-ignored
(build artifacts) — regenerate them with `node pdf.mjs`.

## Gift-box images

No dedicated gift-box photos were provided in the design hand-off, so each
gift-box page reuses its matching product's photo (set via the `image` field
on each entry in the `gifts` array in `data.mjs`). To use real box photos,
drop the file into `assets/`, point the `image` field at it, and rebuild.
