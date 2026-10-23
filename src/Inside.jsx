import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Phone } from './shared/screens.jsx';
import { Reveal, useCycle } from './shared/ui.jsx';
import { useLang } from './i18n.jsx';

import remedios from './assets/prints/remedios.jpeg?w=540&format=webp';
import vacinas from './assets/prints/vacinas.jpeg?w=540&format=webp';
import agenda from './assets/prints/agenda.jpeg?w=540&format=webp';
import historico from './assets/prints/historico.jpeg?w=540&format=webp';
import relatorio from './assets/prints/relatorio.jpeg?w=540&format=webp';
import estatisticas from './assets/prints/estatisticas.jpeg?w=540&format=webp';

/**
 * Prints reais do app em src/assets/prints (a interface do app está em português), convertidos para WebP no
 * build. Os textos de cada tópico vêm do dicionário (inside.topics), na mesma ordem. "top" corta os pixels de
 * cima do print (barra de status sobreposta) e "bg" preenche o espaço que sobra com a cor do topo da tela.
 */
const TOPICS = [
  { key: 'remedios', ico: '💊', img: remedios },
  { key: 'vacinas', ico: '💉', img: vacinas, top: 92, bg: '#FDD6CC' },
  { key: 'agenda', ico: '📅', img: agenda },
  { key: 'historico', ico: '📈', img: historico },
  { key: 'relatorio', ico: '🩺', img: relatorio },
  { key: 'estatisticas', ico: '📊', img: estatisticas },
];

const SCALE = 270 / 740;

function Shot({ topic, alt }) {
  const top = topic.top || 0;
  return (
    <div className="m1-shot" style={{ background: topic.bg }}>
      <img src={topic.img} alt={alt} width="540" height="1167" loading="lazy" decoding="async" draggable="false" style={top ? { marginTop: 38 - top * SCALE } : undefined} />
    </div>
  );
}

export default function Inside() {
  const { t } = useLang();
  const [paused, setPaused] = useState(false);
  const [i, setI] = useCycle(TOPICS.length, 6000, paused);
  const topic = TOPICS[i];
  return (
    <section className="m1-inside" id="dentro">
      <div className="wrap m1-inside-grid">
        <div>
          <Reveal><span className="eyebrow">{t.inside.eyebrow}</span><h2>{t.inside.title}</h2></Reveal>
          <div className="m1-tabs" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {TOPICS.map((x, k) => (
              <button key={x.key} className={`m1-tab ${k === i ? 'on' : ''}`} onClick={() => setI(k)}>
                <h3><span>{x.ico}</span>{t.inside.topics[k][0]}</h3>
                <AnimatePresence initial={false}>
                  {k === i && (
                    <m.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>{t.inside.topics[k][1]}</m.p>
                  )}
                </AnimatePresence>
                {k === i && !paused && <m.i className="m1-bar" key={`b${i}`} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 6, ease: 'linear' }} />}
              </button>
            ))}
          </div>
        </div>
        <div className="m1-deck">
          <div className="m1-deck-glow" />
          <AnimatePresence mode="wait">
            <m.div key={topic.key} initial={{ opacity: 0, y: 40, rotate: 3, scale: 0.94 }} animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }} exit={{ opacity: 0, y: -30, rotate: -3, scale: 0.94 }} transition={{ duration: 0.4 }}>
              <Phone className="m1-shotphone"><Shot topic={topic} alt={t.inside.topics[i][2]} /></Phone>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
