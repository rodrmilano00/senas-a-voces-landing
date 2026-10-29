import { useEffect, useRef, useState } from 'react'
import { Moon, Sun, X } from 'lucide-react'
import { CONTACT } from '../lib/content'
import { CHAPTERS, currentChapter, goToSheet } from '../lib/sheetNav'
import Logo from './Logo'

// Cream tabs that hang from the top edge of the stack, like labels clipped
// onto the portfolio, instead of a navigation bar.
const HANGING_TAB =
  'fixed top-0 z-50 flex items-center rounded-b-[18px] bg-bg/95 shadow-[0_2px_4px_rgb(4_40_52/0.06),0_14px_28px_-16px_rgb(4_40_52/0.35)] ring-1 ring-line backdrop-blur-md'

function useActiveChapter() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      setActive(currentChapter())
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])
  return active
}

export default function Header({ dark, setDark }) {
  const active = useActiveChapter()
  const indexRef = useRef(null)

  const openIndex = () => indexRef.current?.showModal()
  const closeIndex = () => indexRef.current?.close()
  const onNav = (e) => {
    e.preventDefault()
    indexRef.current?.close()
    goToSheet(e.currentTarget.dataset.target)
  }

  return (
    <header>
      <a
        href="#inicio"
        data-target="inicio"
        onClick={onNav}
        aria-label="Señas a Voces Academy, ir a la portada"
        className={`${HANGING_TAB} left-3 px-4 pt-3 pb-2.5 sm:left-6 sm:px-5`}
      >
        <Logo className="h-9 sm:h-11" />
      </a>

      <div className={`${HANGING_TAB} right-3 gap-1 py-2 pr-2 pl-2 sm:right-6`}>
        <button
          type="button"
          onClick={() => setDark((d) => !d)}
          aria-label={dark ? 'Usar tema claro' : 'Usar tema oscuro'}
          className="grid h-11 w-11 place-items-center rounded-full text-fg/80 transition-colors duration-200 hover:bg-fg/[0.06] hover:text-fg"
        >
          {dark ? <Sun size={19} strokeWidth={2} /> : <Moon size={19} strokeWidth={2} />}
        </button>
        <button
          type="button"
          onClick={openIndex}
          aria-haspopup="dialog"
          className="inline-flex h-11 items-center gap-2.5 rounded-full px-4 text-[15px] font-bold text-fg transition-colors duration-200 hover:bg-fg/[0.06]"
        >
          <span aria-hidden="true" className="grid gap-[3px]">
            <span className="h-[2px] w-4 rounded bg-current" />
            <span className="h-[2px] w-3 rounded bg-current" />
            <span className="h-[2px] w-4 rounded bg-current" />
          </span>
          Índice
        </button>
        <a
          href="#contacto"
          data-target="contacto"
          onClick={onNav}
          className="hidden h-11 items-center rounded-full bg-amber px-5 text-[15px] font-bold text-amber-ink transition-transform duration-150 hover:-translate-y-px active:scale-[0.97] sm:inline-flex"
        >
          Contacto
        </a>
      </div>

      {/* Divider tabs along the stack's right edge: where you are, and a shortcut to each chapter */}
      <nav aria-label="Capítulos" className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 lg:block">
        <ol className="grid gap-1.5">
          {CHAPTERS.map((c, i) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                data-target={c.id}
                onClick={onNav}
                aria-current={i === active ? 'true' : undefined}
                className={`block rounded-l-[10px] px-2 py-3.5 text-sm font-bold [writing-mode:vertical-rl] rotate-180 transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  i === active
                    ? 'translate-x-0 bg-petrol text-white shadow-[0_8px_18px_-10px_rgb(4_40_52/0.6)] dark:text-[#04232d]'
                    : 'translate-x-[6px] bg-bg text-fg/65 ring-1 ring-line hover:translate-x-0 hover:text-fg'
                }`}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <dialog
        ref={indexRef}
        aria-labelledby="indice-titulo"
        className="index-sheet m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-bg p-0 text-fg backdrop:bg-desk/70"
        onClick={(e) => e.target === e.currentTarget && closeIndex()}
      >
        <div className="container-page relative flex min-h-full flex-col py-8">
          <div className="flex items-center justify-between">
            <Logo className="h-10" />
            <button
              type="button"
              onClick={closeIndex}
              aria-label="Cerrar índice"
              className="grid h-12 w-12 place-items-center rounded-full ring-1 ring-line transition-colors duration-200 hover:bg-fg/[0.06]"
            >
              <X size={20} strokeWidth={2.2} />
            </button>
          </div>
          <h2 id="indice-titulo" className="mt-[clamp(32px,6vh,72px)] text-[clamp(56px,9vw,128px)] text-petrol dark:text-fg">
            Índice
          </h2>
          <ol className="mt-8 grid max-w-[880px] gap-1">
            {CHAPTERS.map((c, i) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  data-target={c.id}
                onClick={onNav}
                  className="group flex items-baseline gap-4 rounded-xl py-2.5 font-display text-[clamp(24px,3.2vw,40px)] font-bold transition-colors duration-200 hover:text-cyan"
                >
                  <span>{c.label}</span>
                  <span aria-hidden="true" className="h-0 flex-1 translate-y-[-0.2em] border-b-[3px] border-dotted border-fg/25 group-hover:border-cyan/60" />
                  <span className="tabular text-[0.7em] text-muted">{String(i + 1).padStart(2, '0')}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-auto pt-12 text-sm text-muted">
            {CONTACT.email} · {CONTACT.phone} · {CONTACT.city}
          </p>
        </div>
      </dialog>
    </header>
  )
}
