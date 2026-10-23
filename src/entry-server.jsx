import { renderToString } from 'react-dom/server';
import Root from './Root.jsx';

/** Usado só pelo script de build (scripts/prerender.mjs) para gerar o HTML de cada página e idioma. */
export function render({ lang, page }) {
  return renderToString(<Root lang={lang} page={page} auto={false} />);
}
