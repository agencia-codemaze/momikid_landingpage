/**
 * Gera as imagens de compartilhamento (public/og/og-pt.jpg, og-en.jpg, og-es.jpg) a partir de scripts/og/og.html.
 * Precisa de um Chrome/Edge/Chromium instalado: informe o caminho em BROWSER, ou deixe que ele procure.
 *   node scripts/og/build-og.mjs
 * Edite os textos em scripts/og/og.html (objeto T) quando a frase do site mudar e rode de novo.
 * Saem JPEGs de ~100 KB: o WhatsApp costuma ignorar prévias acima de 300 KB.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const CANDIDATES = [
  process.env.BROWSER,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const browser = CANDIDATES.find((p) => existsSync(p));
if (!browser) throw new Error('Nenhum Chrome/Edge encontrado. Defina BROWSER=/caminho/do/navegador');

const html = pathToFileURL(path.resolve('scripts/og/og.html')).href;
mkdirSync('public/og', { recursive: true });

for (const lang of ['pt', 'en', 'es']) {
  const raw = path.resolve(`public/og/raw-${lang}.png`);
  execFileSync(browser, ['--headless', '--disable-gpu', '--hide-scrollbars', '--window-size=1200,630', '--virtual-time-budget=4000', `--screenshot=${raw}`, `${html}?lang=${lang}`], { stdio: 'ignore' });
  await sharp(raw).jpeg({ quality: 84, mozjpeg: true }).toFile(`public/og/og-${lang}.jpg`);
  rmSync(raw);
}
console.log('imagens de compartilhamento geradas em public/og/');
