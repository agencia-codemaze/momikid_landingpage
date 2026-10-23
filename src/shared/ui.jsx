import { useEffect, useState } from 'react';
import { m } from 'framer-motion';

/** Aparece suave ao entrar na tela. */
export function Reveal({ children, delay = 0, y = 28, className, style, as = 'div', once = true }) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

export function useCycle(length, ms, paused = false) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms, paused]);
  return [i, setI];
}
