import { m, useScroll } from 'framer-motion';
import { Brand } from './shared/Brand.jsx';
import Stores from './shared/Stores.jsx';
import Footer from './shared/Footer.jsx';
import LangSwitch from './shared/LangSwitch.jsx';
import { Phone, HojeLive } from './shared/screens.jsx';
import { Reveal } from './shared/ui.jsx';
import LazyHydrate from './shared/LazyHydrate.jsx';
import Inside from './Inside.jsx';
import Humans from './Humans.jsx';
import Features from './Features.jsx';
import { useLang } from './i18n.jsx';
import { pathFor } from './routes.js';
import './App.css';

const FAQ_ICONS = ['💞', '💊', '🩺', '👵', '🎁', '🛡️', '🤝'];
const PEOPLE_STYLE = [['👩', '#FFD8CF'], ['👨', '#C8EBDC'], ['👵', '#FFE9A8']];

export default function App() {
  const { t, lang } = useLang();
  const { scrollYProgress } = useScroll();
  return (
    <div className="m1">
      <div className="m1-aurora" aria-hidden="true"><i /><i /><i /></div>
      <m.div className="m1-progress" style={{ scaleX: scrollYProgress }} />
      <nav className="m1-nav">
        <div className="wrap">
          <Brand href={pathFor(lang, 'home')} />
          <div className="m1-nav-right"><LangSwitch /><a href="#baixar" className="btn sm">{t.nav.download}</a></div>
        </div>
      </nav>

      <main>
      <header className="m1-hero">
        <div className="wrap m1-hero-grid">
          <div>
            <span className="m1-hud m1-in d1"><i />{t.hero.hud}</span>
            <h1 className="m1-in d2">{t.hero.title} <span className="m1-em">{t.hero.em}</span></h1>
            <p className="lead m1-in d3">{t.hero.lead}</p>
            <div id="baixar" className="m1-in d4" style={{ margin: '32px 0 12px' }}>
              <Stores />
            </div>
            <p className="m1-in d4" style={{ fontSize: '.85rem', color: 'var(--sub)' }}>{t.hero.free}</p>
          </div>
          <div className="m1-art">
            <div className="m1-orbit o2" /><div className="m1-orbit o1" />
            <m.div className="m1-halo" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} />
            <m.div className="m1-fc m1-fc1" animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }}><div className="s-ico" style={{ background: '#C8EBDC' }}>💉</div><div><b>{t.hero.fc1[0]}</b><small>{t.hero.fc1[1]}</small></div></m.div>
            <div className="m1-in d3 m1-rise">
              <m.div animate={{ y: [0, -12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}><Phone><HojeLive /></Phone></m.div>
            </div>
            <m.div className="m1-fc m1-fc2" animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}><div className="s-ico" style={{ background: '#FFE9A8' }}>⭐</div><div><b>{t.hero.fc2[0]}</b><small>{t.hero.fc2[1]}</small></div></m.div>
          </div>
        </div>
      </header>

      <LazyHydrate><Features /></LazyHydrate>

      <LazyHydrate><Humans /></LazyHydrate>

      <LazyHydrate><Inside /></LazyHydrate>

      <LazyHydrate>
      <section className="m1-steps">
        <div className="wrap">
          <Reveal className="m1-center"><span className="eyebrow">{t.steps.eyebrow}</span><h2>{t.steps.title}</h2></Reveal>
          <div className="m1-steps-row">
            {t.steps.items.map(([title, text], i) => (
              <Reveal key={i} delay={i * 0.15} className="m1-step">
                <m.div className="m1-n" whileHover={{ scale: 1.15, rotate: -8 }}>{i + 1}</m.div>
                <h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </LazyHydrate>

      <LazyHydrate>
      <section className="m1-live">
        <div className="wrap m1-live-grid">
          <Reveal>
            <span className="eyebrow" style={{ color: '#F2C3A0' }}>{t.live.eyebrow}</span>
            <h2>{t.live.title}</h2>
            <p className="lead" style={{ color: '#E6BFAF' }}>{t.live.lead}</p>
          </Reveal>
          <div className="m1-people">
            {t.live.people.map(([name, text, time], i) => (
              <m.div key={i} className="m1-person" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, type: 'spring', stiffness: 120, damping: 16 }}>
                <div className="m1-av" style={{ background: PEOPLE_STYLE[i][1] }}>{PEOPLE_STYLE[i][0]}</div><div><b>{name}</b><small>{text}</small></div><span>{time}</span>
              </m.div>
            ))}
          </div>
        </div>
      </section>
      </LazyHydrate>

      <LazyHydrate>
      <section className="m1-faq-sec">
        <div className="wrap">
          <Reveal className="m1-center"><span className="eyebrow">{t.faq.eyebrow}</span><h2>{t.faq.title}</h2></Reveal>
          <Reveal className="m1-faq">
            {t.faq.items.map(([q, a], i) => (
              <details key={q}><summary><span className="faq-ico">{FAQ_ICONS[i]}</span><span className="faq-q">{q}</span></summary><p>{a}</p></details>
            ))}
          </Reveal>
        </div>
      </section>
      </LazyHydrate>

      <LazyHydrate>
      <section className="m1-final">
        <div className="wrap">
          <Reveal className="m1-box">
            <h2>{t.final.title1}<br />{t.final.title2}</h2>
            <p className="lead" style={{ color: '#FFE3DD', margin: '14px auto 32px' }}>{t.final.lead}</p>
            <Stores variant="light" center />
          </Reveal>
        </div>
      </section>
      </LazyHydrate>
      </main>
      <Footer />
    </div>
  );
}
