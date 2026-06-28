// Builds self-contained, fast-loading HTML files (images inlined as data URIs).
// One per language → opens instantly on phone/PC, no per-page lag like a big PDF.
// Run: node inline.mjs   →   QiQi-Catalog-VI.html , QiQi-Catalog-CN.html
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { execSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
execSync('node build.mjs', { cwd: here, stdio: 'inherit' });

let html = readFileSync(join(here, 'index.html'), 'utf8');

// Inline the font stylesheet, embedding each subset woff2 as a data URI so the
// file carries its own fonts (renders identically offline / in Zalo).
let fontsCss = readFileSync(join(here, 'fonts.css'), 'utf8');
fontsCss = fontsCss.replace(/url\(assets\/([^)]+)\)/g, (m, file) => {
  const p = join(here, 'assets', file);
  if (!existsSync(p)) return m;
  return `url(data:font/woff2;base64,${readFileSync(p).toString('base64')}) format('woff2')`;
});
html = html.replace(/<link rel="stylesheet" href="fonts\.css">/, `<style>\n${fontsCss}\n</style>`);

// Inline the main stylesheet so the file is truly self-contained.
const css = readFileSync(join(here, 'styles.css'), 'utf8');
html = html.replace(/<link rel="stylesheet" href="styles\.css">/, `<style>\n${css}\n</style>`);

// Inline every assets/* reference as a base64 data URI.
const cache = new Map();
html = html.replace(/(src|href)="assets\/([^"]+)"/g, (m, attr, file) => {
  if (!cache.has(file)) {
    const p = join(here, 'assets', file);
    if (!existsSync(p)) return cache.set(file, null), m;
    const ext = file.split('.').pop().toLowerCase();
    const mime = ext === 'webp' ? 'image/webp' : ext === 'png' ? 'image/png'
      : ext === 'svg' ? 'image/svg+xml' : ext.startsWith('jp') ? 'image/jpeg' : 'application/octet-stream';
    cache.set(file, `data:${mime};base64,${readFileSync(p).toString('base64')}`);
  }
  const uri = cache.get(file);
  return uri ? `${attr}="${uri}"` : m;
});

// Split into one self-contained file per language.
const head = html.slice(0, html.indexOf('<main'));
const tail = html.slice(html.indexOf('</main>'));
const mainOpen = '<main class="deck">';
const sections = html.match(/<div class="sheet">[\s\S]*?<\/section><\/div>/g) || [];
for (const lang of ['vi', 'cn']) {
  const picked = sections.filter((s) => s.includes(`data-lang="${lang}"`)).join('\n');
  const doc = head + mainOpen + '\n' + picked + '\n' + tail;
  const out = join(here, `QiQi-Catalog-${lang.toUpperCase()}.html`);
  writeFileSync(out, doc);
  console.log(`${out}  (${(Buffer.byteLength(doc) / 1048576).toFixed(1)} MB, ${picked.match(/<section/g).length} pages)`);
}
