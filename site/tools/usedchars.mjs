import { readFileSync, writeFileSync } from 'node:fs';
// Pull rendered text from both VI+CN by importing data + static strings via index.html
const html = readFileSync('/home/claude/repo/site/index.html','utf8');
// strip tags + style/script to keep content text (keeps CJK + VI; tags are ASCII so harmless anyway)
const set = new Set();
for (const ch of html) set.add(ch);
// always-include essentials
for (const ch of ' 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz·–—…•×≥≤%/₫.,()·:’\'"-+&') set.add(ch);
const chars = [...set].filter(c => c.codePointAt(0) >= 0x20);
const cjk = chars.filter(c => { const u=c.codePointAt(0); return (u>=0x3000&&u<=0x303F)||(u>=0x3400&&u<=0x9FFF)||(u>=0xF900&&u<=0xFAFF)||(u>=0xFF00&&u<=0xFFEF); });
writeFileSync('/tmp/claude-0/-home-claude/85c8b0f7-4d4c-5666-9f24-d109bff60d94/scratchpad/used.txt', chars.join(''));
writeFileSync('/tmp/claude-0/-home-claude/85c8b0f7-4d4c-5666-9f24-d109bff60d94/scratchpad/usedcjk.txt', cjk.join(''));
console.log('total unique chars:', chars.length, '| CJK chars:', cjk.length);
