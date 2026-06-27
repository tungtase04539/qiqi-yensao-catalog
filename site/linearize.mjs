// Linearize PDFs (enable "fast web view") so weak viewers (e.g. Zalo) can show
// the first page while the rest streams. Run: node linearize.mjs file.pdf ...
import createQpdf from '@jspawn/qpdf-wasm/qpdf.mjs';
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const wasmBinary = readFileSync(require.resolve('@jspawn/qpdf-wasm/qpdf.wasm'));

for (const f of process.argv.slice(2)) {
  const Module = await createQpdf({
    noInitialRun: true,
    print: () => {}, printErr: () => {},
    instantiateWasm: (imports, success) => {
      WebAssembly.instantiate(wasmBinary, imports).then((r) => success(r.instance, r.module));
      return {};
    },
  });
  Module.FS.writeFile('in.pdf', readFileSync(f));
  let status = 0;
  try { Module.callMain(['--linearize', '--object-streams=generate', 'in.pdf', 'out.pdf']); }
  catch (e) { status = (e && e.status != null) ? e.status : 0; }
  const out = Module.FS.readFile('out.pdf');
  const before = statSync(f).size;
  writeFileSync(f, out);
  console.log(`${f}: ${(before/1048576).toFixed(2)}MB -> ${(out.length/1048576).toFixed(2)}MB (exit ${status})`);
}
