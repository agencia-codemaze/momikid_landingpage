import { useLang } from '../i18n.jsx';
import { STORE_LINKS } from '../stores.js';

const Play = () => (
  <svg viewBox="0 0 24 24"><path d="M3.6 1.8 13.4 12 3.6 22.2a1.7 1.7 0 0 1-.6-1.3V3.1c0-.5.2-1 .6-1.3z" fill="#00D7FE" /><path d="m17 8.4-3.6 3.6L17 15.6l4-2.3c1.1-.6 1.1-1.9 0-2.5z" fill="#FFCE00" /><path d="M13.4 12 3.6 1.8c.5-.3 1.1-.3 1.7 0L17 8.4z" fill="#00F076" /><path d="M13.4 12 3.6 22.2c.5.3 1.1.3 1.7 0L17 15.6z" fill="#FF3A44" /></svg>
);
const Apple = ({ fill }) => (
  <svg viewBox="0 0 24 24" fill={fill}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" /></svg>
);

/** variant: dark (padrão) | light | night */
export default function Stores({ variant = 'dark', center = false }) {
  const { t } = useLang();
  const cls = variant === 'dark' ? 'store-btn' : `store-btn ${variant}`;
  const apple = variant === 'dark' ? '#fff' : variant === 'night' ? '#2B1408' : '#2B1E2F';
  return (
    <div className="stores" style={center ? { justifyContent: 'center' } : undefined}>
      <a className={cls} href={STORE_LINKS.android}>
        <Play /><span>{t.stores.play1}<strong>Google Play</strong></span>
        {variant === 'dark' && <i className="sheen" />}
      </a>
      <a className={cls} href={STORE_LINKS.ios}>
        <Apple fill={apple} /><span>{t.stores.apple1}<strong>App Store</strong></span>
        {variant === 'dark' && <i className="sheen" />}
      </a>
    </div>
  );
}
