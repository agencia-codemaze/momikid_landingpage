/**
 * Depois do build do navegador (dist/) e do build do servidor (dist-ssr/), gera o HTML final de cada página e
 * idioma: conteúdo já montado (o Google, o WhatsApp e quem não roda JavaScript enxergam tudo), metatags,
 * hreflang, dados estruturados, sitemap.xml, robots.txt e 404.html.
 *
 * SITE_URL (variável de ambiente) é o endereço público do site, sem barra no fim. Padrão: https://momikid.com
 */
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { DICT, LANGS } from '../src/dictionary.js';
import { PATHS, PAGES, LOCALES, OG_LOCALES } from '../src/routes.js';
import { LEGAL, LEGAL_DRAFT } from '../src/legalContent.js';

const SITE = (process.env.SITE_URL || 'https://momikid.com').replace(/\/+$/, '');
const DIST = 'dist';
const today = new Date().toISOString().slice(0, 10);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (s) => String(s).replace(/\{\{([^}]+)\}\}/g, '[$1]');
const trim = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…');
const url = (lang, page) => SITE + PATHS[lang][page];

const OG_ALT = {
  pt: 'momikid: app para pais acompanharem a rotina, as vacinas e os remédios dos filhos em família',
  en: 'momikid: an app for parents to follow their kids’ routine, vaccines and medicines as a family',
  es: 'momikid: app para que los padres sigan la rutina, las vacunas y las medicinas de sus hijos en familia',
};

function pageMeta(lang, page) {
  if (page === 'home') return { title: DICT[lang].meta.title, description: DICT[lang].meta.description };
  const d = LEGAL[lang][page];
  return { title: `${d.title} | momikid`, description: trim(plain(d.summary.slice(0, 2).join(' ')), 155) };
}

function jsonLd(lang, page, meta) {
  const org = { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'momikid', url: `${SITE}/`, logo: { '@type': 'ImageObject', url: `${SITE}/icons/icon-512.png`, width: 512, height: 512 } };
  const site = { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'momikid', inLanguage: LANGS.map((l) => LOCALES[l]), publisher: { '@id': `${SITE}/#organization` } };
  const webpage = { '@type': 'WebPage', '@id': `${url(lang, page)}#webpage`, url: url(lang, page), name: meta.title, description: meta.description, inLanguage: LOCALES[lang], isPartOf: { '@id': `${SITE}/#website` }, primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE}/og/og-${lang}.jpg` } };
  const graph = [org, site, webpage];
  if (page === 'home') {
    graph.push({
      '@type': 'MobileApplication', '@id': `${SITE}/#app`, name: 'momikid', applicationCategory: 'HealthApplication', operatingSystem: 'Android, iOS',
      description: meta.description, url: `${SITE}/`, image: `${SITE}/og/og-${lang}.jpg`, inLanguage: LANGS.map((l) => LOCALES[l]),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' }, publisher: { '@id': `${SITE}/#organization` },
    });
    graph.push({
      '@type': 'FAQPage', '@id': `${url(lang, page)}#faq`, inLanguage: LOCALES[lang],
      mainEntity: DICT[lang].faq.items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    });
  } else {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'momikid', item: url(lang, 'home') },
        { '@type': 'ListItem', position: 2, name: LEGAL[lang][page].title, item: url(lang, page) },
      ],
    });
  }
  // "<" escapado para o texto nunca fechar a tag <script>
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
}

function headBlock(lang, page, preloads) {
  const meta = pageMeta(lang, page);
  const noindex = page !== 'home' && LEGAL_DRAFT;
  const alternates = LANGS.map((l) => `<link rel="alternate" hreflang="${LOCALES[l]}" href="${url(l, page)}">`).join('\n')
    + `\n<link rel="alternate" hreflang="x-default" href="${url('pt', page)}">`;
  const others = LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALES[l]}">`).join('\n');
  const img = `${SITE}/og/og-${lang}.jpg`;
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="robots" content="${noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">`,
    `<link rel="canonical" href="${url(lang, page)}">`,
    alternates,
    `<meta name="theme-color" content="#FBF3EF">`,
    `<meta name="application-name" content="momikid">`,
    `<meta name="apple-mobile-web-app-title" content="momikid">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="momikid">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:url" content="${url(lang, page)}">`,
    `<meta property="og:image" content="${img}">`,
    `<meta property="og:image:secure_url" content="${img}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(OG_ALT[lang])}">`,
    `<meta property="og:locale" content="${OG_LOCALES[lang]}">`,
    others,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(meta.title)}">`,
    `<meta name="twitter:description" content="${esc(meta.description)}">`,
    `<meta name="twitter:image" content="${img}">`,
    `<meta name="twitter:image:alt" content="${esc(OG_ALT[lang])}">`,
    `<link rel="icon" href="/favicon.ico" sizes="48x48">`,
    `<link rel="icon" href="/logo.svg" type="image/svg+xml">`,
    `<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">`,
    `<link rel="manifest" href="/manifest.webmanifest">`,
    preloads,
    // sem JavaScript, o que entra com animação não pode ficar invisível
    `<noscript><style>[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}</style></noscript>`,
    jsonLd(lang, page, meta),
  ].filter(Boolean).join('\n');
}

async function fontPreloads() {
  const files = await readdir(path.join(DIST, 'assets'));
  const want = [/^bricolage-grotesque-latin-wght-normal-.*\.woff2$/, /^figtree-latin-wght-normal-.*\.woff2$/, /^baloo-2-latin-800-normal-.*\.woff2$/];
  return want
    .map((re) => files.find((f) => re.test(f)))
    .filter(Boolean)
    .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
    .join('\n');
}

async function write(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content);
}

const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
const preloads = await fontPreloads();

// CSS embutido no HTML: tira um pedido que bloquearia a primeira renderização (o arquivo continua em dist/assets).
const cssLink = template.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
let inlined = template;
if (cssLink) {
  const css = await readFile(path.join(DIST, cssLink[1]), 'utf8');
  if (css.length < 80_000) inlined = template.replace(cssLink[0], () => `<style>${css}</style>`);
}

// O padrão do navegador (dev) fica entre os marcadores; aqui ele é trocado pelo bloco de cada página.
const base = inlined
  .replace(/<!--SEO_HEAD-->[\s\S]*?<!--\/SEO_HEAD-->\s*/, '')
  .replace(/<title>[\s\S]*?<\/title>\s*/, '')
  .replace(/<meta name="description"[^>]*>\s*/, '')
  .replace(/<link rel="icon"[^>]*>\s*/g, '');
if (!/<div id="root">/.test(base)) throw new Error('index.html sem #root');

const written = [];
for (const lang of LANGS) {
  for (const page of PAGES) {
    const body = render({ lang, page });
    const html = base
      .replace(/<html lang="[^"]*"/, `<html lang="${LOCALES[lang]}"`)
      .replace('</head>', () => `${headBlock(lang, page, preloads)}\n</head>`)
      .replace(/<div id="root">(<!--SSR-->)?<\/div>/, () => `<div id="root">${body}</div>`);
    const out = path.join(DIST, PATHS[lang][page], 'index.html');
    await write(out, html);
    written.push(out);
  }
}

// sitemap: as páginas legais só entram quando deixarem de ser rascunho
const indexable = PAGES.filter((p) => p === 'home' || !LEGAL_DRAFT);
const sitemapUrls = [];
for (const page of indexable) {
  for (const lang of LANGS) {
    const links = LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${LOCALES[l]}" href="${url(l, page)}"/>`).join('\n')
      + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${url('pt', page)}"/>`;
    sitemapUrls.push(`  <url>\n    <loc>${url(lang, page)}</loc>\n    <lastmod>${today}</lastmod>\n${links}\n  </url>`);
  }
}
await write(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapUrls.join('\n')}\n</urlset>\n`);
await write(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

// 404 de verdade (o status 404 vem do nginx), sem carregar o app
await write(path.join(DIST, '404.html'), `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 | momikid</title><link rel="icon" href="/logo.svg" type="image/svg+xml"><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#FFF1E4;color:#2B1E2F;font-family:system-ui,sans-serif;text-align:center;padding:24px}h1{font-size:4rem;margin:0;color:#B83F57}p{color:#6E5B70}a{color:#B83F57;font-weight:700}</style></head><body><main><img src="/logo.svg" width="72" height="72" alt="momikid"><h1>404</h1><p>Página não encontrada · Page not found · Página no encontrada</p><p><a href="/">momikid</a> · <a href="/en/">English</a> · <a href="/es/">Español</a></p></main></body></html>\n`);

console.log(`prerender: ${written.length} páginas, sitemap (${sitemapUrls.length} URLs), robots, 404 · SITE_URL=${SITE}${LEGAL_DRAFT ? ' · páginas legais com noindex (LEGAL_DRAFT)' : ''}`);
