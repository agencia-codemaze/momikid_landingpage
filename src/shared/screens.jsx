import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { Symbol } from './Brand.jsx';
import { useLang } from '../i18n.jsx';

export function Phone({ children, style, className }) {
  return (
    <div className={`phone ${className || ''}`} style={style}>
      {children}
    </div>
  );
}

const QUICK_ICONS = ['🤱', '🍼', '😴', '💧', '💩', '💊'];

/** Ícone, cor e botão rápido de cada registro; os textos vêm do dicionário (phone.events), na mesma ordem. */
const EVENT_STYLE = [
  { ico: '🤱', bg: '#FFD8CF', q: 0 },
  { ico: '😴', bg: '#E7E2FF', q: 2 },
  { ico: '💧', bg: '#C8EBDC', q: 3 },
  { ico: '🍼', bg: '#FFE9A8', q: 1 },
  { ico: '💊', bg: '#FFD6E6', q: 5 },
  { ico: '💩', bg: '#FFE9A8', q: 4 },
];

/** Tela "Hoje" com registros novos chegando sozinhos. */
export function HojeLive({ night = false, every = 3200 }) {
  const { t } = useLang();
  const [feed, setFeed] = useState([{ i: 0, id: 0, h: '10:12' }, { i: 1, id: 1, h: '09:05' }, { i: 2, id: 2, h: '08:30' }]);
  const [tap, setTap] = useState(-1);
  useEffect(() => {
    let n = 3, min = 12 * 60 + 12;
    const timer = setInterval(() => {
      const i = n % EVENT_STYLE.length;
      min += 7;
      const h = `${String(Math.floor(min / 60) % 24).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;
      setTap(EVENT_STYLE[i].q); setTimeout(() => setTap(-1), 350);
      setFeed((l) => [{ i, id: n, h }, ...l].slice(0, 3));
      n++;
    }, every);
    return () => clearInterval(timer);
  }, [every]);
  return (
    <div className={`screen ${night ? 'night' : ''}`}>
      <div className="s-head">
        <Symbol size={26} main={night ? '#E8A87C' : '#B83F57'} baby={night ? '#E8A87C' : '#B83F57'} />
        <p className="s-title">{t.phone.today}</p>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '.66rem', fontWeight: 700, color: night ? '#E8A87C' : '#1D6B57', background: night ? 'rgba(232,168,124,.14)' : '#C8EBDC', borderRadius: 99, padding: '3px 9px' }}>
          <i style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', animation: 'pulse 1.2s infinite' }} />{t.phone.live}
        </span>
      </div>
      <small>{t.phone.child}</small>
      <div className="s-grid">
        {QUICK_ICONS.map((icon, k) => (
          <m.div key={k} className="s-btn" animate={{ scale: tap === k ? 0.86 : 1, backgroundColor: tap === k ? (night ? 'rgba(232,168,124,.3)' : '#FFD8CF') : undefined }} transition={{ duration: 0.15 }}>
            <i>{icon}</i>{t.phone.quick[k]}
          </m.div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, overflow: 'hidden', flex: 1 }}>
        <AnimatePresence initial={false}>
          {feed.map((e) => (
            <m.div key={e.id} className="s-card" initial={{ opacity: 0, y: -24, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: 'spring', stiffness: 380, damping: 30 }}>
              <div className="s-ico" style={{ background: EVENT_STYLE[e.i].bg }}>{EVENT_STYLE[e.i].ico}</div>
              <div className="s-row"><b>{t.phone.events[e.i][0]}</b><small>{t.phone.events[e.i][1]}</small></div>
              <span className="s-time">{e.h}</span>
            </m.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="s-nav"><span className="on">🏠</span><span>❤️</span><span>📅</span><span>📸</span><span>👨‍👩‍👧</span></div>
    </div>
  );
}
