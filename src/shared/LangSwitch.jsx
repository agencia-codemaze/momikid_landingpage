import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { LANGS, LANG_NAMES, useLang } from '../i18n.jsx';

const Globe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.7 4 5.7 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.7-4-9s1.4-6.3 4-9z" />
  </svg>
);

/** Botão que troca o idioma entre português, inglês e espanhol. */
export default function LangSwitch() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const box = useRef(null);

  useEffect(() => {
    if (!open) return;
    const away = (e) => { if (!box.current?.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    addEventListener('pointerdown', away);
    addEventListener('keydown', esc);
    return () => { removeEventListener('pointerdown', away); removeEventListener('keydown', esc); };
  }, [open]);

  return (
    <div className="lang-switch" ref={box}>
      <button className="lang-btn" onClick={() => setOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={open} aria-label={`${t.nav.language}: ${lang.toUpperCase()}`}>
        <Globe /><b>{lang.toUpperCase()}</b>
        <m.svg width="10" height="10" viewBox="0 0 10 10" animate={{ rotate: open ? 180 : 0 }}><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></m.svg>
      </button>
      <AnimatePresence>
        {open && (
          <m.ul className="lang-menu" role="listbox" initial={{ opacity: 0, y: -8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: 0.96 }} transition={{ duration: 0.16 }}>
            {LANGS.map((l) => (
              <li key={l} role="option" aria-selected={l === lang}>
                <button className={l === lang ? 'on' : ''} onClick={() => { setLang(l); setOpen(false); }}>
                  <span className="code">{l.toUpperCase()}</span>{LANG_NAMES[l]}
                  {l === lang && <span className="tick">✓</span>}
                </button>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
