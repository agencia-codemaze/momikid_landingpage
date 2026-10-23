import { m } from 'framer-motion';
import { Reveal, useCycle } from './shared/ui.jsx';
import { useLang } from './i18n.jsx';

/** Brilho que segue o cursor dentro do card. */
const spot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', e.clientX - r.left + 'px');
  e.currentTarget.style.setProperty('--my', e.clientY - r.top + 'px');
};

/* ---- ilustrações pequenas do app, uma por recurso (só ícones e formas, quase sem texto) ---- */

function QuickVisual() {
  const { t } = useLang();
  const [on] = useCycle(6, 1100);
  const icons = ['🤱', '🍼', '😴', '💧', '💩', '💊'];
  return (
    <div className="ft-quick">
      {icons.map((ico, k) => (
        <m.div key={k} className="ft-qb" animate={{ scale: on === k ? 0.9 : 1, backgroundColor: on === k ? '#FFC9BC' : '#FFFFFF' }} transition={{ duration: 0.2 }}>
          <i>{ico}</i>{t.phone.quick[k]}
          {on === k && <m.b className="ft-ok" initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</m.b>}
        </m.div>
      ))}
    </div>
  );
}

function MedVisual() {
  return (
    <div className="ft-meds">
      {[['15:30', true], ['23:30', false]].map(([h, now]) => (
        <div key={h} className="ft-med">
          <span className="ft-pill">💊</span>
          <b>{h}</b>
          <m.span className={`ft-give ${now ? 'now' : ''}`} animate={now ? { scale: [1, 1.12, 1], boxShadow: ['0 0 0 0 rgba(243,120,30,.5)', '0 0 0 12px rgba(243,120,30,0)', '0 0 0 0 rgba(243,120,30,0)'] } : undefined} transition={{ duration: 1.8, repeat: Infinity }}>✓</m.span>
        </div>
      ))}
    </div>
  );
}

function GrowthVisual() {
  return (
    <svg className="ft-growth" viewBox="0 0 300 130" aria-hidden="true">
      <path d="M8 112 C70 70 120 62 160 52 S250 32 292 18 L292 62 C250 80 200 92 160 98 S70 118 8 124 Z" fill="rgba(29,107,87,.14)" />
      <path d="M8 118 C70 92 120 82 160 74 S250 52 292 40" fill="none" stroke="rgba(29,107,87,.5)" strokeWidth="2" strokeDasharray="5 6" />
      <m.path d="M8 118 C60 90 100 78 140 68 S220 52 292 30" fill="none" stroke="#B83F57" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease: 'easeOut' }} />
      {[[8, 118], [60, 90], [100, 78], [140, 68], [220, 52]].map(([x, y], i) => (
        <m.circle key={i} cx={x} cy={y} r="5" fill="#B83F57" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.3 }} />
      ))}
      <m.circle cx="292" cy="30" r="8" fill="#fff" stroke="#B83F57" strokeWidth="4" initial={{ scale: 0 }} whileInView={{ scale: [0, 1.4, 1] }} viewport={{ once: true }} transition={{ delay: 1.9 }} />
    </svg>
  );
}

function ReportVisual() {
  return (
    <div className="ft-report">
      <m.div className="ft-sheet" animate={{ rotate: [-3, 2, -3], y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <i className="h" /><i /><i /><i className="s" /><i />
        <div className="bars"><b /><b /><b /><b /></div>
        <span className="pdf">PDF</span>
      </m.div>
      <m.span className="ft-steth" animate={{ rotate: [0, 12, 0] }} transition={{ duration: 3, repeat: Infinity }}>🩺</m.span>
    </div>
  );
}

function AgendaVisual() {
  const { lang } = useLang();
  const fmt = new Intl.DateTimeFormat(lang, { weekday: 'narrow' });
  const days = Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 7 + i)));
  return (
    <div className="ft-agenda">
      <div className="ft-days">
        {days.map((d, i) => (
          <m.span key={i} className={i === 2 || i === 4 ? 'has' : ''} whileHover={{ y: -4 }}>
            {d}{(i === 2 || i === 4) && <m.u initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1, type: 'spring' }} />}
          </m.span>
        ))}
      </div>
      <div className="ft-evs"><span>🩺</span><span>🎒</span><span>🎂</span></div>
    </div>
  );
}

function StarsVisual() {
  const [on] = useCycle(6, 800);
  return (
    <div className="ft-stars">
      <div className="row">
        {[0, 1, 2, 3, 4].map((i) => (
          <m.span key={i} animate={{ scale: i < on ? [1, 1.35, 1] : 1, opacity: i < on ? 1 : 0.28, filter: i < on ? 'grayscale(0)' : 'grayscale(1)' }} transition={{ duration: 0.4 }}>⭐</m.span>
        ))}
        <span className="goal">🍦</span>
      </div>
      <div className="track"><m.div animate={{ width: `${(on / 5) * 100}%` }} transition={{ duration: 0.5 }} /></div>
    </div>
  );
}

/** tint: cor do card; cls: largura na grade. A ordem segue feat.items do dicionário. */
const CARDS = [
  { tint: 'rose', cls: 'w4', ico: '🍼', Visual: QuickVisual },
  { tint: 'green', cls: 'w2', ico: '💊', Visual: MedVisual },
  { tint: 'blue', cls: 'w2', ico: '💉', Visual: GrowthVisual },
  { tint: 'amber', cls: 'w2', ico: '🩺', Visual: ReportVisual },
  { tint: 'violet', cls: 'w2', ico: '📅', Visual: AgendaVisual },
  { tint: 'pink', cls: 'w6', ico: '⭐', Visual: StarsVisual },
];

export default function Features() {
  const { t } = useLang();
  return (
    <section className="m1-feat" id="recursos">
      <div className="wrap">
        <Reveal className="m1-center"><span className="eyebrow">{t.feat.eyebrow}</span><h2>{t.feat.title}</h2></Reveal>
        <div className="ft-grid">
          {CARDS.map(({ tint, cls, ico, Visual }, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} className={`ft-cell ${cls}`}>
              <m.article className={`ft-card ${tint}`} onPointerMove={spot} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                <header>
                  <m.span className="ft-ico" whileHover={{ rotate: [-8, 8, -4, 0], scale: 1.15 }}>{ico}</m.span>
                  <h3>{t.feat.items[i][0]}</h3>
                </header>
                <p>{t.feat.items[i][1]}</p>
                <div className="ft-visual"><Visual /></div>
              </m.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
