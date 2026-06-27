// Exports two print-ready, linearized PDFs (VI + CN) from index.html.
// Prereqs: `npm install` then `npx playwright install chromium`.
// Run: node pdf.mjs   (builds index.html, writes + linearizes QiQi-BaoGia-VI/CN.pdf)
import { chromium } from 'playwright';
import createQpdf from '@jspawn/qpdf-wasm/qpdf.mjs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
execSync('node build.mjs', { cwd: here, stdio: 'inherit' });

const browser = await chromium.launch();
async function makePdf(hideLang, out) {
  const pg = await browser.newPage();
  await pg.goto('file://' + join(here, 'index.html'), { waitUntil: 'load' });
  await pg.waitForTimeout(2500); // let webfonts settle
  // Hide the whole sheet of the other language so no blank pages are emitted.
  await pg.addStyleTag({ content: `@media print { .sheet:has(> .page[data-lang="${hideLang}"]) { display:none !important; } }` });
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

// Linearize ("fast web view") so weak viewers (Zalo, etc.) show page 1 while
// the rest streams — and recover from any object bloat.
const wasmBinary = readFileSync(require.resolve('@jspawn/qpdf-wasm/qpdf.wasm'));
for (const f of ['QiQi-BaoGia-VI.pdf', 'QiQi-BaoGia-CN.pdf']) {
  const p = join(here, f);
  const Module = await createQpdf({
    noInitialRun: true, print: () => {}, printErr: () => {},
    instantiateWasm: (imports, success) => {
      WebAssembly.instantiate(wasmBinary, imports).then((r) => success(r.instance, r.module));
      return {};
    },
  });
  Module.FS.writeFile('in.pdf', readFileSync(p));
  try { Module.callMain(['--linearize', '--object-streams=generate', 'in.pdf', 'out.pdf']); } catch {}
  writeFileSync(p, Module.FS.readFile('out.pdf'));
  console.log(`linearized ${f}`);
}
