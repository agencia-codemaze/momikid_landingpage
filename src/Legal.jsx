import { Fragment, useEffect } from 'react';
import { m } from 'framer-motion';
import { Brand } from './shared/Brand.jsx';
import Footer from './shared/Footer.jsx';
import LangSwitch from './shared/LangSwitch.jsx';
import { useLang } from './i18n.jsx';
import { LEGAL, LEGAL_DRAFT } from './legalContent.js';
import { pathFor } from './routes.js';
import './Legal.css';

/** Troca cada {{lacuna}} por um destaque amarelo, para ninguém publicar sem preencher. */
function Rich({ text }) {
  return text.split(/(\{\{[^}]+\}\})/g).map((part, i) =>
    part.startsWith('{{')
      ? <mark key={i} className="ph">[{part.slice(2, -2)}]</mark>
      : <Fragment key={i}>{part}</Fragment>,
  );
}

const slug = (i) => `s${i + 1}`;

/** doc: 'privacy' | 'terms'. Endereços: /privacidade e /termos (as lojas pedem um link fixo). */
export default function Legal({ doc }) {
  const { lang } = useLang();
  const text = LEGAL[lang];
  const d = text[doc];
  const other = doc === 'privacy' ? 'terms' : 'privacy';

  useEffect(() => { document.title = `${d.title} — momikid`; window.scrollTo(0, 0); }, [d.title]);

  return (
    <div className="m1 legal">
      <div className="m1-aurora" aria-hidden="true"><i /><i /><i /></div>
      <nav className="m1-nav">
        <div className="wrap">
          <Brand href={pathFor(lang, 'home')} />
          <div className="m1-nav-right"><LangSwitch /></div>
        </div>
      </nav>

      <main className="wrap legal-wrap" id="conteudo">
        {LEGAL_DRAFT && <div className="legal-draft" role="note">{text.ui.draft}</div>}

        <m.header initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <h1>{d.title}</h1>
          <p className="legal-meta">{text.ui.version} <Rich text={d.version} /> · {text.ui.since} <Rich text={d.since} /></p>
        </m.header>

        <aside className="legal-summary">
          <b>{text.ui.summary}</b>
          <ul>{d.summary.map((s) => <li key={s}>{s}</li>)}</ul>
        </aside>

        <nav className="legal-toc" aria-label={text.ui.toc}>
          <b>{text.ui.toc}</b>
          <ol>{d.sections.map((s, i) => <li key={i}><a href={`#${slug(i)}`}>{s.h}</a></li>)}</ol>
        </nav>

        {d.sections.map((s, i) => (
          <section key={i} id={slug(i)} className="legal-sec">
            <h2><span>{i + 1}</span>{s.h}</h2>
            {s.p?.map((p, k) => <p key={k}><Rich text={p} /></p>)}
            {s.ul && <ul>{s.ul.map((li, k) => <li key={k}><Rich text={li} /></li>)}</ul>}
            {s.p2?.map((p, k) => <p key={k}><Rich text={p} /></p>)}
          </section>
        ))}

        <div className="legal-links">
          <a href={pathFor(lang, other)} className="btn sm">{text.ui.other}: {text[other].title}</a>
          <a href={pathFor(lang, 'home')} className="legal-home">← {text.ui.home}</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
