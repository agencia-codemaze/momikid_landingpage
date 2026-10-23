/**
 * Endereços de cada página por idioma. Todos terminam em "/" porque o nginx serve cada página como pasta
 * (index.html) e redireciona a versão sem barra: usar sempre a mesma forma evita conteúdo duplicado no Google.
 * "/" é o português (padrão, x-default); /en/ e /es/ são as versões em inglês e espanhol.
 */
export const PATHS = {
  pt: { home: '/', privacy: '/privacidade/', terms: '/termos/' },
  en: { home: '/en/', privacy: '/en/privacy/', terms: '/en/terms/' },
  es: { home: '/es/', privacy: '/es/privacidad/', terms: '/es/terminos/' },
};

export const PAGES = ['home', 'privacy', 'terms'];
export const LOCALES = { pt: 'pt-BR', en: 'en', es: 'es' };
export const OG_LOCALES = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };

const norm = (p) => (p.endsWith('/') ? p : p + '/');

/** Descobre idioma e página pelo endereço. `auto` = está em "/", onde vale a detecção pelo navegador. */
export function parsePath(pathname) {
  const path = norm(pathname || '/');
  for (const lang of Object.keys(PATHS)) {
    for (const page of PAGES) {
      if (PATHS[lang][page] === path) return { lang, page, auto: path === '/' };
    }
  }
  return { lang: 'pt', page: 'home', auto: true };
}

/** Endereço da mesma página em outro idioma. */
export const pathFor = (lang, page) => PATHS[lang][page];
