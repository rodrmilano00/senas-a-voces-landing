const VARIANTS = {
  primary:
    'bg-amber text-amber-ink shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_6px_16px_-6px_rgb(255_164_49/0.7)] hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_10px_22px_-8px_rgb(255_164_49/0.8)]',
  ghost:
    'bg-transparent text-fg ring-1 ring-inset ring-line hover:bg-fg/[0.04] hover:ring-fg/30',
  onBand:
    'bg-band-fg text-[#04323f] hover:-translate-y-0.5 hover:bg-white',
}

export default function Button({ variant = 'primary', className = '', href, children, ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      className={`inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-[15px] font-bold transition-[transform,box-shadow,background-color] duration-300 ease-out-quart active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 ${VARIANTS[variant]} ${className}`}
      {...(!href ? { type: 'button' } : {})}
      {...props}
    >
      {children}
    </Component>
  )
}
