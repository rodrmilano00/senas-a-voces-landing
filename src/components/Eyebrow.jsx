export default function Eyebrow({ children, className = '', ref }) {
  return (
    <div
      ref={ref}
      className={`flex items-center gap-2 text-[13px] font-semibold tracking-[0.15em] text-accent uppercase ${className}`}
    >
      <span className="h-0.5 w-6 bg-accent" />
      {children}
    </div>
  )
}
