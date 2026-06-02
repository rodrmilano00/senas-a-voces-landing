import { useEffect, useState } from 'react'
import { LOGO_SRC, NAV_LINKS } from '../lib/content'

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow,padding] duration-400 ${
        scrolled
          ? 'bg-[color-mix(in_oklch,var(--bg)_85%,transparent)] py-3 shadow-[var(--shadow-sm)] backdrop-blur-[16px] dark:bg-[rgba(8,61,72,0.92)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-page flex items-center justify-between">
        <a href="#" className="flex items-center gap-3.5">
          <img
            src={LOGO_SRC}
            alt="Señas a Voces Academy"
            className="h-24 w-auto dark:[filter:brightness(1.6)_contrast(1.2)_saturate(1.1)]"
          />
        </a>
        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-[0.02em] text-fg opacity-75 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label="Cambiar tema"
            className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-border bg-surface text-lg text-fg transition-all hover:border-primary hover:shadow-[var(--shadow-sm)] dark:border-white/15 dark:bg-white/10"
          >
            {dark ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </nav>
  )
}
