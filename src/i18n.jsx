import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DICT, LANGS } from './dictionary.js';
import { LOCALES, pathFor } from './routes.js';

export { LANGS, LANG_NAMES } from './dictionary.js';
const STORAGE_KEY = 'momikid-lang';

/** Fusos que indicam o idioma quando o navegador não ajuda. */
const TZ_PT = /^(America\/(Sao_Paulo|Fortaleza|Manaus|Belem|Recife|Bahia|Cuiaba|Campo_Grande|Porto_Velho|Rio_Branco|Noronha|Araguaina|Maceio|Boa_Vista|Santarem|Eirunepe)|Europe\/Lisbon|Atlantic\/Azores)$/;
const TZ_ES = /^(Europe\/Madrid|Atlantic\/Canary|Africa\/Ceuta|America\/(Mexico_City|Bogota|Lima|Santiago|Caracas|Montevideo|La_Paz|Asuncion|Guayaquil|Panama|Costa_Rica|Guatemala|Havana|Santo_Domingo|El_Salvador|Tegucigalpa|Managua|Monterrey|Merida|Cancun|Tijuana|Argentina\/.*))$/;

/** Robôs de busca e de pré-visualização ficam sempre no português padrão, para indexarem a versão certa de "/". */
const isBot = () => typeof navigator !== 'undefined' && /bot|crawl|spider|slurp|lighthouse|facebookexternalhit|whatsapp|telegram|preview/i.test(navigator.userAgent || '');

/** Ordem: ?lang= → escolha salva → idiomas do navegador → fuso horário → português. Só roda no navegador. */
export function detectLang() {
  try {
    // ?lang=en|es|pt força o idioma (útil para testar).
    const forced = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(forced)) return forced;
  } catch { /* sem URL */ }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch { /* storage bloqueado: segue sem */ }
  const prefs = (typeof navigator !== 'undefined' && (navigator.languages?.length ? navigator.languages : [navigator.language])) || [];
  for (const p of prefs) {
    const code = String(p || '').slice(0, 2).toLowerCase();
    if (LANGS.includes(code)) return code;
  }
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (TZ_PT.test(tz)) return 'pt';
    if (TZ_ES.test(tz)) return 'es';
  } catch { /* sem Intl */ }
  return 'pt';
}

const Ctx = createContext(null);

/**
 * `lang` vem do endereço (é o que o HTML pré-renderizado já mostra). Em "/" (`auto`), depois de carregar, troca
 * para o idioma detectado do visitante, sem mexer no endereço. O botão de idioma leva ao endereço do idioma
 * escolhido, que é o que o Google e os links compartilhados usam.
 */
export function LangProvider({ lang: initialLang, page = 'home', auto = false, children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    if (!auto || isBot()) return;
    const detected = detectLang();
    if (detected !== initialLang) setLangState(detected);
  }, [auto, initialLang]);

  const setLang = (l) => {
    if (!LANGS.includes(l) || l === lang) return;
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* sem storage */ }
    location.assign(pathFor(l, page));
  };

  useEffect(() => {
    document.documentElement.lang = LOCALES[lang];
    if (page === 'home' && lang !== initialLang) {
      const m = DICT[lang].meta;
      document.title = m.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
    }
  }, [lang, page, initialLang]);

  const value = useMemo(() => ({ lang, setLang, t: DICT[lang], page }), [lang, page]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
