// Generates index.html from data.mjs — a paginated, print-ready bilingual catalog.
// Run: node build.mjs   →   writes ./index.html
import { writeFileSync } from 'node:fs';
import { site, cover, intro, toc, products, gifts, thanks } from './data.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

const corners = `<span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>`;
const logo = (lang) => `<img class="corner-logo" src="assets/logo-corner.png" alt="${attr(lang === 'cn' ? 'QiQi 燕窝' : 'QiQi Yến')}">`;
const footer = (lang) => `<div class="footer">${esc(site.productFooter[lang])}</div>`;

const page = (lang, kind, body) =>
  `<section class="page${lang === 'cn' ? ' cn' : ''}" data-kind="${kind}" data-lang="${lang}">\n${corners}\n${body}\n</section>`;

const nutritionGrid = (items) =>
  `<div class="nutrition">${items
    .map((n) => `<div class="nutrient"><div class="value">${esc(n.v)}</div><div class="label">${esc(n.l)}</div></div>`)
    .join('')}</div>`;

// ── Cover ──────────────────────────────────────────────────────────────────
function coverPage(lang) {
  const c = cover[lang];
  const contact = `
    <div class="cover-contact">
      <div class="num"><img src="assets/flag-vn.png" alt="VN"><span>${esc(site.phoneVN)}</span></div>
      <div class="sep"></div>
      <div class="num"><img src="assets/flag-cn.png" alt="CN"><span>${esc(site.phoneCN)}</span></div>
    </div>`;
  const body = `
    <div class="cover-layout">
      <div class="seal-wrap">
        <div class="seal">
          <div class="disc"></div><div class="disc-inner"></div>
          <img src="assets/logo2.png" alt="${attr('QiQi Yến')}">
        </div>
      </div>
      <div class="cover-divider"><div class="line-top"></div><div class="gem"></div><div class="line-bot"></div></div>
      <div class="cover-main">
        <div class="cover-kicker">${esc(c.kicker)}</div>
        <div class="cover-title">${esc(c.title)}</div>
        <div class="cover-rule"></div>
        <div class="cover-bullets">
          ${c.bullets.map((b) => `<div class="cover-bullet"><div class="gem"></div><div class="txt">${esc(b)}</div></div>`).join('\n          ')}
        </div>
        <div class="cover-tagline">${esc(c.tagline)}</div>
      </div>
    </div>
    <div class="cover-footer">
      <div class="cover-flourish"><div class="seg-l"></div><div class="gem"></div><div class="seg-r"></div></div>
      <div class="cover-ribbon">${esc(c.ribbon)}</div>
      ${contact}
      <div class="cover-org">${esc(c.footer)}</div>
    </div>`;
  return page(lang, 'cover', body);
}

// ── Letter & Introduction ────────────────────────────────────────────────────
function introPage(lang) {
  const i = intro[lang];
  const certs = intro.certs
    .map(
      (ct) => `
        <div class="cert" style="width:${ct.boxW}px">
          <div class="frame"><img src="assets/${ct.img}" alt="${attr(ct[lang])}" style="width:${ct.w}px"></div>
          <div class="cap">${esc(ct[lang])}</div>
        </div>`
    )
    .join('');
  const body = `
    ${logo(lang)}
    <div class="intro-layout">
      <div class="intro-kicker">${esc(i.kicker)}</div>
      <div class="intro-heading">${esc(i.letterTitle)}</div>
      <div class="intro-salutation">${esc(i.salutation)}</div>
      <div class="intro-body">${esc(i.letterBody)}</div>
      <div class="intro-rule"><div class="seg"></div><div class="gem"></div><div class="seg"></div></div>
      <div class="intro-heading">${esc(i.introTitle)}</div>
      <div class="intro-body intro-body--narrow">${esc(i.introBody)}</div>
      <div class="intro-cert-label">${esc(i.certLabel)}</div>
      <div class="certs">${certs}</div>
    </div>
    <div class="footer">${esc(i.footer)}</div>`;
  return page(lang, 'intro', body);
}

// ── Table of contents ────────────────────────────────────────────────────────
function tocPage(lang) {
  const t = toc[lang];
  let rows = `<div class="toc-line"></div>`;
  for (const it of t.items) {
    rows += `
        <div class="toc-row">
          <div class="toc-no">${esc(it.no)}</div>
          <div class="body"><div class="toc-name">${esc(it.name)}</div><div class="toc-desc">${esc(it.desc)}</div></div>
          <div class="gem"></div>
        </div>
        <div class="toc-line"></div>`;
  }
  const body = `
    ${logo(lang)}
    <div class="toc-layout">
      <div class="toc-kicker">${esc(t.kicker)}</div>
      <div class="toc-title">${esc(t.title)}</div>
      <div class="toc-subtitle">${esc(t.subtitle)}</div>
      <div class="toc-rule"><div class="seg"></div><div class="gem"></div><div class="seg"></div></div>
      <div class="toc-list">${rows}</div>
    </div>
    <div class="footer">${esc(t.footer)}</div>`;
  return page(lang, 'toc', body);
}

// ── Product page ─────────────────────────────────────────────────────────────
function media(p, alt) {
  const m = p.media;
  if (m.type === 'single') {
    return `<div class="media-single"><div class="hero"><img src="assets/${m.img}" alt="${attr(alt)}"></div></div>`;
  }
  const heroStyle = m.heroPos ? ` style="object-position:${m.heroPos}"` : '';
  const thumbs = m.thumbs
    .map((t) => `<div class="thumb"><img src="assets/${t.img}" alt="${attr(alt)}"${t.pos ? ` style="object-position:${t.pos}"` : ''}></div>`)
    .join('');
  return `<div class="media-gallery">
        <div class="hero"><img src="assets/${m.hero}" alt="${attr(alt)}"${heroStyle}></div>
        <div class="thumbs">${thumbs}</div>
      </div>`;
}

function priceHtml(d) {
  const aff = d.priceFrom ? `<span class="price-aff">${esc(d.priceFrom)}</span>` : '';
  const unit = d.priceUnit ? `<span class="price-unit">${esc(' ' + d.priceUnit)}</span>` : '';
  return `<div class="price">${aff}${esc(d.price)}${unit}</div>`;
}

function productPage(lang, p) {
  const d = p[lang];
  const titleStyle = d.titleSize ? ` style="--title-size:${d.titleSize}px"` : '';
  const body = `
    ${logo(lang)}
    <div class="layout">
      ${media(p, d.title)}
      <div class="info">
        <div class="kicker">${esc(d.kicker)}</div>
        <div class="title"${titleStyle}>${esc(d.title)}</div>
        <div class="subtitle">${esc(d.subtitle)}</div>
        <div class="desc">${esc(d.desc)}</div>
        <div class="section-label">${esc(d.nutriLabel)}</div>
        ${nutritionGrid(d.nutrition)}
        <div class="section-label">${esc(d.suitableLabel)}</div>
        <div class="suitable">${d.suitable
          .map((s) => `<div class="suit-item"><div class="diamond dot"></div><div class="txt">${esc(s)}</div></div>`)
          .join('')}</div>
        <div class="spec"><div class="spec-label">${esc(d.specLabel)}</div><div class="spec-value">${esc(d.spec)}</div></div>
        <div class="price-box">
          <div class="price-tag"><div class="diamond dot"></div><div class="price-label">${esc(d.priceLabel)}</div></div>
          ${priceHtml(d)}
        </div>
      </div>
    </div>
    ${footer(lang)}`;
  return page(lang, 'product', body);
}

// ── Gift box page ────────────────────────────────────────────────────────────
const GIFT_LABELS = {
  vi: { kicker: 'SẢN PHẨM 04 · HỘP QUÀ YẾN', nutri: 'THÀNH PHẦN & DINH DƯỠNG', price: 'BẢNG GIÁ QUÀ TẶNG', badge: ' ·  CAO CẤP' },
  cn: { kicker: '产品 04 · 燕窝礼盒', nutri: '成分与营养', price: '礼盒价格', badge: ' · 高档' },
};

function giftPage(lang, g) {
  const d = g[lang];
  const L = GIFT_LABELS[lang];
  let titleStyle = '';
  if (d.titleSize || d.titleMaxWidth) {
    const parts = [];
    if (d.titleSize) parts.push(`--title-size:${d.titleSize}px`);
    if (d.titleMaxWidth) parts.push(`max-width:${d.titleMaxWidth}px`);
    titleStyle = ` style="${parts.join(';')}"`;
  }
  const sets = d.sets
    .map((s) => {
      const badge = s.featured ? `<span class="set-badge">${esc(L.badge)}</span>` : '';
      return `<div class="set-row${s.featured ? ' featured' : ''}">
            <div class="left"><div class="diamond dot"></div><div><div class="set-name">${esc(s.name)}${badge}</div><div class="set-sub">${esc(s.sub)}</div></div></div>
            <div class="set-price">${esc(s.price)}</div>
          </div>`;
    })
    .join('\n          ');
  const heroInner = g.image
    ? `<img src="assets/${g.image}" alt="${attr(d.title)}">`
    : `<div class="box-placeholder"><div class="ph-mark"></div><div class="ph-text">${esc(lang === 'cn' ? '礼盒图片' : 'Ảnh hộp quà')}</div><div class="ph-sub">${esc(lang === 'cn' ? '待更新' : 'chờ cập nhật')}</div></div>`;
  const body = `
    ${logo(lang)}
    <div class="layout">
      <div class="gift-media"><div class="hero">${heroInner}</div></div>
      <div class="gift-info">
        <div>
          <div class="kicker">${esc(L.kicker)}</div>
          <div class="gift-title"${titleStyle}>${esc(d.title)}</div>
          <div class="gift-subtitle">${esc(d.subtitle)}</div>
        </div>
        <div>
          <div class="section-label">${esc(L.nutri)}</div>
          ${nutritionGrid(d.nutrition)}
        </div>
        <div>
          <div class="gift-price-head"><div class="section-label">${esc(L.price)}</div><div class="unit-note">${esc(d.unitNote)}</div></div>
          <div class="set-list">
          ${sets}
          </div>
        </div>
      </div>
    </div>
    ${footer(lang)}`;
  return page(lang, 'gift', body);
}

// ── Thank-you / cooperation page ─────────────────────────────────────────────
function thanksPage(lang) {
  const t = thanks[lang];
  // No corner logo here — the centered seal medallion already carries the brand.
  const body = `
    <div class="thanks-layout">
      <div class="thanks-seal"><div class="disc"></div><div class="disc-inner"></div><img src="assets/logo-mark.png" alt="${attr('QiQi Yến')}"></div>
      <div class="thanks-kicker">${esc(t.kicker)}</div>
      <div class="thanks-title">${esc(t.title)}</div>
      <div class="thanks-subtitle">${esc(t.subtitle)}</div>
      <div class="thanks-body">${esc(t.body)}</div>
      <div class="thanks-body thanks-body--narrow">${esc(t.body2)}</div>
      <div class="thanks-closing">${esc(t.closing)}</div>
      <div class="intro-rule"><div class="seg"></div><div class="gem"></div><div class="seg"></div></div>
      <div class="thanks-contact-label">${esc(t.contactLabel)}</div>
      <div class="contact-row">
        <div class="num"><img src="assets/flag-vn.png" alt="VN"><span>${esc(site.phoneVN)}</span></div>
        <div class="sep"></div>
        <div class="num"><img src="assets/flag-cn.png" alt="CN"><span>${esc(site.phoneCN)}</span></div>
      </div>
    </div>
    <div class="footer">${esc(t.footer)}</div>`;
  return page(lang, 'thanks', body);
}

// ── Assemble: 20 VI pages, then 20 CN pages ──────────────────────────────────
function pagesFor(lang) {
  return [
    coverPage(lang),
    introPage(lang),
    tocPage(lang),
    ...products.map((p) => productPage(lang, p)),
    ...gifts.map((g) => giftPage(lang, g)),
    thanksPage(lang),
  ];
}

const allPages = [...pagesFor('vi'), ...pagesFor('cn')];

const html = `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>QiQi Yến Sào · Báo Giá / 报价单</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<main class="deck">
${allPages.join('\n')}
</main>
</body>
</html>
`;

writeFileSync(new URL('./index.html', import.meta.url), html);
console.log(`Generated index.html — ${allPages.length} pages.`);
