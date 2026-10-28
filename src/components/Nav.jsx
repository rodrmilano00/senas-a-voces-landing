import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { NAV_LINKS } from '../lib/content'
import Button from './Button'
import Logo from './Logo'

export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav
        aria-label="Principal"
        className={`mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full pr-2 pl-4 transition-[background-color,box-shadow] duration-500 sm:pl-5 ${
          scrolled || mobileOpen
            ? 'bg-surface/85 shadow-[var(--shadow-soft)] ring-1 ring-line backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Señas a Voces Academy, ir al inicio">
          <Logo className="h-9 sm:h-10" />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[15px] font-semibold text-fg/80 transition-colors hover:bg-fg/[0.05] hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            aria-label={dark ? 'Usar tema claro' : 'Usar tema oscuro'}
            className="grid h-11 w-11 place-items-center rounded-full text-fg/80 transition-colors hover:bg-fg/[0.06] hover:text-fg"
          >
            {dark ? <Sun size={19} strokeWidth={2} /> : <Moon size={19} strokeWidth={2} />}
          </button>
          <Button href="#contacto" className="!min-h-11 max-sm:!hidden">
            Escríbenos
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="menu-movil"
            className="grid h-11 w-11 place-items-center rounded-full text-fg transition-colors hover:bg-fg/[0.06] lg:hidden"
          >
            {mobileOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movil"
        hidden={!mobileOpen}
        className="mx-auto mt-2 max-w-[1200px] rounded-3xl bg-surface p-2 shadow-[var(--shadow-float)] ring-1 ring-line lg:hidden"
      >
        <ul className="grid">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-base font-semibold text-fg hover:bg-fg/[0.05]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#contacto" onClick={() => setMobileOpen(false)} className="mt-1 w-full">
          Escríbenos
        </Button>
      </div>
    </header>
  )
}
