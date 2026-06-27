// Exports two print-ready PDFs (Vietnamese + Chinese) from index.html.
// Prereqs: `npm install` then `npx playwright install chromium`.
// Run: node pdf.mjs   (builds index.html first, then writes QiQi-BaoGia-VI/CN.pdf)
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
execSync('node build.mjs', { cwd: here, stdio: 'inherit' });

const browser = await chromium.launch();
async function makePdf(hideLang, out) {
  const pg = await browser.newPage();
  await pg.goto('file://' + join(here, 'index.html'), { waitUntil: 'load' });
  await pg.waitForTimeout(2500); // let webfonts settle
  await pg.addStyleTag({ content: `@media print { .page[data-lang="${hideLang}"]{ display:none !important; } }` });
  await pg.emulateMedia({ media: 'print' });
  const n = await pg.$$eval('.page', (els, h) => els.filter((e) => e.dataset.lang !== h).length, hideLang);
  await pg.pdf({ path: out, landscape: true, format: 'A4', printBackground: true, preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await pg.close();
  console.log(`${out} -> ${n} pages`);
}
await makePdf('cn', join(here, 'QiQi-BaoGia-VI.pdf')); // keep VI
await makePdf('vi', join(here, 'QiQi-BaoGia-CN.pdf')); // keep CN
await browser.close();
