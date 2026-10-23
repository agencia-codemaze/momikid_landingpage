/**
 * Gera os ícones do site a partir do símbolo da marca (docs/product/brand.md do app): favicon.ico,
 * apple-touch-icon, ícones do manifesto (192, 512 e 512 "maskable"). Rode com: node scripts/generate-icons.mjs
 * Usa o sharp (já instalado junto do vite-imagetools), sem depender de navegador.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const RASPBERRY = '#B83F57';
const PEACH = '#EE8A78';
const TILE = '#FFF6F3';

/** Símbolo em viewBox 100 (mesmas coordenadas do app). `scale` = quanto do ladrilho o símbolo ocupa. */
function svg(size, scale) {
  const s = scale;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
<rect width="100" height="100" fill="${TILE}"/>
<g transform="translate(50 51) scale(${s}) translate(-50 -52)">
<circle cx="40" cy="31" r="13" fill="${RASPBERRY}"/>
<circle cx="63" cy="55" r="9.5" fill="${PEACH}"/>
<path d="M22 50C24 78 58 88 78 66" fill="none" stroke="${RASPBERRY}" stroke-width="11" stroke-linecap="round"/>
</g></svg>`;
}

const png = (size, scale) => sharp(Buffer.from(svg(512, scale))).resize(size, size).png({ compressionLevel: 9 }).toBuffer();

await mkdir('public/icons', { recursive: true });
await writeFile('public/icons/icon-512.png', await png(512, 0.73));
await writeFile('public/icons/icon-192.png', await png(192, 0.73));
await writeFile('public/icons/apple-touch-icon.png', await png(180, 0.73));
// "maskable": o sistema recorta em círculo/quadrado arredondado, então o símbolo fica na zona segura (~56%)
await writeFile('public/icons/icon-512-maskable.png', await png(512, 0.56));

// favicon.ico com um PNG de 48x48 dentro (formato aceito por todos os navegadores atuais)
const fav = await png(48, 0.85);
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4); // ICONDIR: 1 imagem
header.writeUInt8(48, 6); header.writeUInt8(48, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12); header.writeUInt32LE(fav.length, 14); header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, fav]));

console.log('ícones gerados em public/ e public/icons/');
