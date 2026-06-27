// Renders each catalog page to a high-res JPG for the flipbook site (../web/pages).
// Prereqs: `npm install` + `npx playwright install chromium`.
// Run: node pages.mjs
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const outRoot = join(here, '..', 'web', 'pages');
execSync('node build.mjs', { cwd: here, stdio: 'inherit' });
for (const l of ['vi', 'cn']) mkdirSync(join(outRoot, l), { recursive: true });

const browser = await chromium.launch();
const pg = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 2 });
await pg.goto('file://' + join(here, 'index.html'), { waitUntil: 'load' });
await pg.waitForTimeout(2500);
const pages = await pg.$$('.page');
const count = { vi: 0, cn: 0 };
for (const p of pages) {
  const lang = await p.evaluate((e) => e.dataset.lang);
  const n = String(++count[lang]).padStart(2, '0');
  await p.screenshot({ path: join(outRoot, lang, `${n}.jpg`), type: 'jpeg', quality: 90 });
}
await browser.close();
console.log(`Exported VI ${count.vi}, CN ${count.cn} pages to web/pages/`);
