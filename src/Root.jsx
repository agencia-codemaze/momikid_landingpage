import { LazyMotion } from 'framer-motion';
import App from './App.jsx';
import Legal from './Legal.jsx';
import { LangProvider } from './i18n.jsx';

// As animações (framer-motion) entram depois: o HTML pré-renderizado já mostra tudo e o JavaScript inicial fica menor.
const loadFeatures = () => import('./motionFeatures.js').then((mod) => mod.default);

/** Escolhe a página pelo endereço (já resolvido em routes.parsePath). Usado no navegador e na pré-renderização. */
export default function Root({ lang, page, auto }) {
  return (
    <LangProvider lang={lang} page={page} auto={auto}>
      <LazyMotion features={loadFeatures} strict>
        {page === 'home' ? <App /> : <Legal doc={page} />}
      </LazyMotion>
    </LangProvider>
  );
}
