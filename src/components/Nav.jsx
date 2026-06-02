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
        <a
          href="#"
          className="flex items-center gap-3.5 rounded-2xl bg-white/90 px-3 py-2 shadow-[0_10px_30px_rgba(8,61,72,0.08)] ring-1 ring-black/5 backdrop-blur-sm transition-transform hover:scale-[1.015] dark:bg-white/95 dark:ring-white/15"
        >
          <img
            src={LOGO_SRC}
            alt="Señas a Voces Academy"
            className="-my-4 h-28 w-auto [filter:contrast(1.08)_saturate(1.05)] sm:h-32"
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
