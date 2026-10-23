export function Symbol({ size = 40, main = '#B83F57', baby = '#EE8A78' }) {
  const thick = size < 48;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="40" cy="31" r={thick ? 14 : 13} fill={main} />
      <circle cx="63" cy="55" r={thick ? 10.5 : 9.5} fill={size < 32 ? main : baby} />
      <path d="M22 50C24 78 58 88 78 66" fill="none" stroke={main} strokeWidth={thick ? 13 : 11} strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ size = 30, ink, accent }) {
  return (
    <span className="wordmark" style={{ fontSize: size, color: ink }}>
      momi<b style={accent ? { color: accent } : undefined}>kid</b>
    </span>
  );
}

export function Brand({ size = 40, night = false, href = '#' }) {
  return (
    <a href={href} className="brand" aria-label="momikid">
      <Symbol size={size} main={night ? '#E8A87C' : undefined} baby={night ? '#F2C3A0' : undefined} />
      <Wordmark size={size * 0.72} ink={night ? '#F2C3A0' : undefined} accent={night ? '#EE8A78' : undefined} />
    </a>
  );
}
