// Concentric flowing lines from the portfolio cover. Purely decorative.
export default function WaveLines({ className = '', lines = 4, strokeWidth = 2 }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      {Array.from({ length: lines }, (_, i) => {
        const o = i * 16
        return (
          <path
            key={i}
            d={`M${-20 + o} 320 C ${40 + o} 230, ${30 + o} 150, ${120 + o} ${110 - o * 0.2} S ${250 + o * 0.4} ${40 - o}, ${330} ${-10 + o * 0.6}`}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )
      })}
    </svg>
  )
}
