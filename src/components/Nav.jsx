import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LOGO_SRC, NAV_LINKS } from '../lib/content'

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
          ? 'bg-[color-mix(in_oklch,var(--bg)_85%,transparent)] py-3 shadow-[var(--shadow-sm)] backdrop-blur-[16px] dark:border-b dark:border-white/10 dark:bg-[linear-gradient(90deg,rgba(9,36,43,0.98),rgba(18,56,62,0.94))] dark:shadow-[0_14px_36px_rgba(0,0,0,0.22)]'
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
            className="-my-5 h-28 w-auto [filter:contrast(1.08)_saturate(1.05)_drop-shadow(0_8px_22px_rgba(8,61,72,0.12))] dark:[filter:brightness(0)_invert(1)_drop-shadow(0_8px_22px_rgba(0,0,0,0.25))] sm:-my-7 sm:h-44"
          />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-[0.02em] text-fg opacity-75 transition-opacity hover:opacity-100 dark:opacity-85"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label="Cambiar tema"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-border bg-surface text-lg text-fg shadow-[var(--shadow-sm)] transition-all hover:border-primary dark:border-white/20 dark:bg-white/12 dark:text-white"
          >
            {dark ? '☀' : '☾'}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Abrir navegación"
            aria-expanded={mobileOpen}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-border bg-surface text-fg shadow-[var(--shadow-sm)] transition-all hover:border-primary dark:border-white/20 dark:bg-white/12 dark:text-white md:hidden"
          >
            {mobileOpen ? <X size={19} strokeWidth={2.2} /> : <Menu size={19} strokeWidth={2.2} />}
          </button>
        </div>
      </div>
      <div
        className={`container-page overflow-hidden transition-[max-height,opacity,transform] duration-300 md:hidden ${
          mobileOpen ? 'max-h-64 translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'
        }`}
      >
        <div className="mt-3 grid gap-2 rounded-2xl border border-[var(--card-border)] bg-[color-mix(in_oklch,var(--surface)_88%,transparent)] p-2 shadow-[var(--shadow-sm)] backdrop-blur-[14px] dark:border-white/10 dark:bg-[rgba(9,36,43,0.94)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-fg transition-colors hover:bg-primary/10 dark:text-white/90 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
