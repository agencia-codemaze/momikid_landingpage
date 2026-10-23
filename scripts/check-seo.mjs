/**
 * Confere o HTML gerado em dist/ (rode depois do build): npm run check:seo
 * Verifica, em cada página: título e descrição (tamanho), canonical, hreflang recíproco, um único h1, imagem de
 * compartilhamento existente, imagens com alt, JSON-LD válido, sitemap coerente. Sai com erro se algo falhar.
 */
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { PATHS, PAGES, LOCALES } from '../src/routes.js';
import { LANGS } from '../src/dictionary.js';
import { LEGAL_DRAFT } from '../src/legalContent.js';

const DIST = 'dist';
const SITE = (process.env.SITE_URL || 'https://momikid.com').replace(/\/+$/, '');
let errors = 0, warnings = 0;
const fail = (where, msg) => { errors++; console.log(`  ✗ ${where}: ${msg}`); };
const warn = (where, msg) => { warnings++; console.log(`  ! ${where}: ${msg}`); };
const exists = (f) => access(f).then(() => true, () => false);
const attr = (html, re) => (html.match(re) || [])[1];

for (const lang of LANGS) {
  for (const page of PAGES) {
    const file = path.join(DIST, PATHS[lang][page], 'index.html');
    const where = `${lang}/${page}`;
    if (!(await exists(file))) { fail(where, `arquivo ausente (${file})`); continue; }
    const html = await readFile(file, 'utf8');
    const url = SITE + PATHS[lang][page];

    const title = attr(html, /<title>([^<]*)<\/title>/);
    const desc = attr(html, /<meta name="description" content="([^"]*)"/);
    if (!title) fail(where, 'sem <title>'); else if (title.length > 65) warn(where, `título com ${title.length} caracteres (ideal até ~60)`);
    if (!desc) fail(where, 'sem description'); else if (desc.length > 160 || desc.length < 70) warn(where, `description com ${desc.length} caracteres (ideal 70–160)`);
    if (attr(html, /<link rel="canonical" href="([^"]*)"/) !== url) fail(where, `canonical diferente de ${url}`);
    if (attr(html, /<html lang="([^"]*)"/) !== LOCALES[lang]) fail(where, 'lang do <html> errado');
    if ((html.match(/<h1[ >]/g) || []).length !== 1) fail(where, 'precisa de exatamente um <h1>');
    if ((html.match(/<main[ >]/g) || []).length !== 1) fail(where, 'precisa de exatamente um <main>');
    for (const l of LANGS) {
      if (!html.includes(`hreflang="${LOCALES[l]}" href="${SITE + PATHS[l][page]}"`)) fail(where, `falta hreflang ${LOCALES[l]}`);
    }
    if (!html.includes(`hreflang="x-default" href="${SITE + PATHS.pt[page]}"`)) fail(where, 'falta hreflang x-default');
    const og = attr(html, /<meta property="og:image" content="([^"]*)"/);
    if (!og || !og.startsWith(SITE)) fail(where, 'og:image sem endereço absoluto'); else if (!(await exists(path.join(DIST, og.slice(SITE.length))))) fail(where, `og:image não existe em dist (${og})`);
    for (const tag of ['og:title', 'og:description', 'og:url', 'og:type', 'og:locale']) if (!html.includes(`property="${tag}"`)) fail(where, `falta ${tag}`);
    for (const tag of ['twitter:card', 'twitter:image']) if (!html.includes(`name="${tag}"`)) fail(where, `falta ${tag}`);
    const robots = attr(html, /<meta name="robots" content="([^"]*)"/);
    const wantNoindex = page !== 'home' && LEGAL_DRAFT;
    if (wantNoindex !== /noindex/.test(robots || '')) fail(where, `robots="${robots}" não combina com LEGAL_DRAFT`);
    const imgs = html.match(/<img\b[^>]*>/g) || [];
    for (const tag of imgs) if (!/\balt="/.test(tag)) fail(where, `imagem sem alt: ${tag.slice(0, 70)}`);
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (!ld.length) fail(where, 'sem JSON-LD');
    for (const m of ld) { try { JSON.parse(m[1]); } catch (e) { fail(where, `JSON-LD inválido: ${e.message}`); } }
    if (page === 'home' && !html.includes('"FAQPage"')) fail(where, 'home sem FAQPage');
    console.log(`  ✓ ${where}  ${url}  (título ${title?.length}, descrição ${desc?.length})`);
  }
}

const sitemap = await readFile(path.join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  const rel = loc.slice(SITE.length);
  if (!(await exists(path.join(DIST, rel, 'index.html')))) fail('sitemap', `${loc} não tem página em dist`);
  if (!rel.endsWith('/')) fail('sitemap', `${loc} sem barra final`);
}
const robots = await readFile(path.join(DIST, 'robots.txt'), 'utf8');
if (!robots.includes(`Sitemap: ${SITE}/sitemap.xml`)) fail('robots.txt', 'sem a linha Sitemap');
console.log(`  sitemap: ${locs.length} URLs · robots.txt ok`);
for (const f of ['404.html', 'favicon.ico', 'manifest.webmanifest', 'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png']) {
  if (!(await exists(path.join(DIST, f)))) fail('arquivos', `${f} ausente`);
}
console.log(errors ? `\n${errors} erro(s), ${warnings} aviso(s)` : `\nTudo certo: 0 erros, ${warnings} aviso(s)`);
process.exit(errors ? 1 : 0);
