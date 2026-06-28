# Fonts (self-hosted, subset)

The catalog embeds its own web fonts (`../fonts.css` + `../assets/fonts/*.woff2`)
so it renders identically online, offline, in PDF export, and in the flipbook
screenshots — without depending on Google Fonts (which may be blocked).

Fonts are **subset to the exact characters used in the catalog** to stay small.
If you add NEW Chinese characters (or new symbols), regenerate the subsets:

```bash
pip install fonttools brotli
npm i @expo-google-fonts/noto-serif-sc @expo-google-fonts/noto-sans-sc \
      @expo-google-fonts/playfair-display @expo-google-fonts/be-vietnam-pro
node build.mjs                 # produce index.html with current text
node tools/usedchars.mjs       # -> used.txt / usedcjk.txt (character set in use)
python3 tools/subset.py        # -> assets/fonts/*.woff2
```

Latin fonts are subset to full Latin + Vietnamese ranges (edits are safe);
the Chinese fonts are subset to the characters actually present.
