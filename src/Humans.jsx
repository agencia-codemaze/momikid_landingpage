import { useEffect, useRef, useState } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './shared/ui.jsx';
import { useLang } from './i18n.jsx';

/**
 * Fotos de famílias: basta colocar os arquivos em src/assets/fotos. Nomes que começam com "mae" entram como mãe
 * usando o app (ganham um aviso do app em cima); os demais ("familia-1.jpg" etc.) como família. Sem arquivos,
 * a seção some. As imagens são convertidas para WebP em três tamanhos no build (vite-imagetools).
 */
const srcsets = import.meta.glob('./assets/fotos/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: { w: '480;800;1100', format: 'webp', as: 'srcset' }, import: 'default' });
const metas = import.meta.glob('./assets/fotos/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: { w: '1100', format: 'webp', as: 'metadata' }, import: 'default' });

const ALL = Object.entries(srcsets)
  .map(([path, srcSet]) => {
    const name = path.split('/').pop().toLowerCase();
    const sizes = srcSet.split(',').map((s) => s.trim().split(' '));
    const mid = (sizes[1] || sizes[0])[0];
    const m = metas[path] || {};
    return { name, srcSet, src: mid, w: m.width, h: m.height, mom: name.startsWith('mae') };
  })
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

/** Alterna mãe com o app e família, para a colagem ter ritmo. */
const PHOTOS = (() => {
  const moms = ALL.filter((p) => p.mom), fam = ALL.filter((p) => !p.mom), out = [];
  for (let i = 0; i < Math.max(moms.length, fam.length); i++) { if (moms[i]) out.push(moms[i]); if (fam[i]) out.push(fam[i]); }
  return out;
})();

function Photo({ p, i, chip }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [i % 2 ? 36 : -36, i % 2 ? -36 : 36]);
  const { t } = useLang();
  return (
    <m.figure ref={ref} className="hum-photo" style={{ y }}
      initial={{ opacity: 0, scale: 0.92, rotate: i % 2 ? 2 : -2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 90, damping: 16 }} whileHover={{ scale: 1.03, rotate: i % 2 ? -1 : 1 }}>
      <img src={p.src} srcSet={p.srcSet} sizes="(max-width: 520px) 92vw, (max-width: 900px) 46vw, 360px" width={p.w} height={p.h}
        alt={p.mom ? t.humans.momAlt : t.humans.familyAlt} loading="lazy" decoding="async" />
      {chip && (
        <m.figcaption className="hum-chip" initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: 'spring' }}>
          <span className="s-ico" style={{ background: '#FFD8CF' }}>🤱</span>
          <span><b>{chip[0]}</b><small>{chip[1]}</small></span>
        </m.figcaption>
      )}
    </m.figure>
  );
}

export default function Humans() {
  const { t } = useLang();
  // A colagem usa rolagem e medidas do navegador: monta só depois do carregamento. O título já vem no HTML.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!PHOTOS.length) return null;
  let momIndex = 0;
  return (
    <section className="hum" aria-labelledby="hum-title">
      <div className="wrap">
        <Reveal className="m1-center">
          <span className="eyebrow">{t.humans.eyebrow}</span>
          <h2 id="hum-title">{t.humans.title}</h2>
          <p className="lead" style={{ margin: '0 auto' }}>{t.humans.lead}</p>
        </Reveal>
        <div className="hum-grid">
          {mounted && PHOTOS.map((p, i) => <Photo key={p.name} p={p} i={i} chip={p.mom ? t.humans.chips[momIndex++ % t.humans.chips.length] : null} />)}
        </div>
      </div>
    </section>
  );
}
