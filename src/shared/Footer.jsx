import { Brand } from './Brand.jsx';
import { useLang } from '../i18n.jsx';
import { pathFor } from '../routes.js';

export default function Footer({ night = false }) {
  const { t, lang } = useLang();
  return (
    <footer style={{ padding: '48px 0 40px', borderTop: `1px solid ${night ? 'rgba(255,190,150,.12)' : 'rgba(43,30,47,.08)'}`, fontSize: '.88rem', color: night ? '#C98E68' : 'var(--sub)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <Brand size={34} night={night} href={pathFor(lang, 'home')} />
          <span>© 2026 momikid · <a className="foot-link" href={pathFor(lang, 'privacy')}>{t.footer.privacy}</a> · <a className="foot-link" href={pathFor(lang, 'terms')}>{t.footer.terms}</a> · <a className="foot-link" href={pathFor(lang, 'deletion')}>{t.footer.deletion}</a></span>
        </div>
        <p className="disclaimer">{t.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
