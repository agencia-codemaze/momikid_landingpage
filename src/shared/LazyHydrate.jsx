import { useEffect, useRef, useState } from 'react';

/**
 * Hidratação preguiçosa: o HTML pré-renderizado de uma seção já está na página (o Google e os leitores de tela
 * enxergam tudo), mas o React só "liga" a seção, com animações e temporizadores, quando a pessoa está perto de
 * chegar nela. O início da página fica leve e rápido, principalmente em celulares mais simples.
 *
 * No servidor e no servidor de desenvolvimento a seção é montada normalmente. A marca window.__PRERENDERED__
 * é ligada em main.jsx quando a página veio pré-renderizada.
 */
export default function LazyHydrate({ children, rootMargin = '700px 0px' }) {
  const ref = useRef(null);
  const [live, setLive] = useState(() => typeof window === 'undefined' || window.__PRERENDERED__ !== true);

  useEffect(() => {
    if (live) return undefined;
    const target = ref.current?.firstElementChild || ref.current;
    if (!target || !('IntersectionObserver' in window)) { setLive(true); return undefined; }
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); setLive(true); }
    }, { rootMargin });
    io.observe(target);
    return () => io.disconnect();
  }, [live, rootMargin]);

  if (!live) {
    // Mantém o HTML do servidor como está (o React não mexe nele na hidratação) até chegar a hora.
    return <div ref={ref} style={{ display: 'contents' }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '' }} />;
  }
  return <div ref={ref} style={{ display: 'contents' }}>{children}</div>;
}
