import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/baloo-2/800.css';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/figtree';
import Root from './Root.jsx';
import { parsePath } from './routes.js';
import './global.css';

const el = document.getElementById('root');
window.__PRERENDERED__ = el.hasChildNodes(); // lido pelo LazyHydrate
const app = <Root {...parsePath(location.pathname)} />;

// O build entrega o HTML já montado (pré-renderizado): aproveita com hydrate. No servidor de desenvolvimento
// o #root vem vazio e a página é montada do zero.
if (el.hasChildNodes()) hydrateRoot(el, app);
else createRoot(el).render(app);
