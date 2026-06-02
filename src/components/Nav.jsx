import { useEffect, useState } from 'react'
import { LOGO_SRC, NAV_LINKS } from '../lib/content'

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > Math.min(360, window.innerHeight * 0.42))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
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
          tabIndex={scrolled ? 0 : -1}
          className={`flex items-center gap-3.5 transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] ${
            scrolled
              ? 'pointer-events-auto translate-y-0 scale-100 opacity-100 blur-0'
              : 'pointer-events-none -translate-y-4 scale-95 opacity-0 blur-[2px]'
          }`}
        >
          <img
            src={LOGO_SRC}
            alt="Señas a Voces Academy"
            className="-my-7 h-40 w-auto [filter:contrast(1.08)_saturate(1.05)_drop-shadow(0_8px_22px_rgba(8,61,72,0.12))] dark:[filter:brightness(0)_invert(1)_drop-shadow(0_8px_22px_rgba(0,0,0,0.25))] sm:h-44"
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
