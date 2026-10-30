import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { easeInOut, motion, transform, useScroll, useSpring, useTransform } from 'motion/react'
import { CHAPTERS, currentChapter, goToSheet } from '../lib/sheetNav'
import { LOGO } from '../lib/media'
import { useCalm } from '../lib/perf'
import Logo from './Logo'

// No bar chrome and no boxes: the logo and controls sit straight on the page.
// Once scrolled, a translucent band in the page's own colour sits behind them,
// so content softens as it passes underneath instead of cutting off at a line.
const CORNER = 'fixed top-0 z-50 flex items-center pt-3 sm:pt-4'

function useChapterState() {
  const [state, setState] = useState({ active: 0, under: 0, scrolled: false })
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const active = currentChapter()
      const under = currentChapter(0.04)
      const scrolled = window.scrollY > 12
      setState((s) => (s.active === active && s.under === under && s.scrolled === scrolled ? s : { active, under, scrolled }))
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
  return state
}

const riseLeft = transform([0, 0.62], [1, 0], { ease: easeInOut })

/**
 * One logo for the cover and the header: at the top of the page it rests over
 * the cover's slot, and flies home as the cover scrolls away. It rises to the
 * header's row first and slides along it after, so it never crosses the
 * headline. Where the slot sits above the headline (phones) it rises with the
 * page itself, so the headline can't catch it. Calm leaves it in the header.
 */
function FlyingLogo({ children }) {
  const calm = useCalm()
  const ref = useRef(null)
  const [flight, setFlight] = useState(null)

  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, (v) => (flight ? Math.min(1, v / flight.end) : 0))
  const home = useSpring(progress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const x = useTransform(home, [0.5, 1], [flight?.x ?? 0, 0], { ease: easeInOut })
  const y = useTransform([scrollY, home], ([v, t]) => {
    if (!flight) return 0
    return flight.leads ? Math.max(0, flight.y - v) : flight.y * riseLeft(t)
  })
  const scale = useTransform(home, (t) => (flight ? flight.scale ** (1 - t) : 1))

  useLayoutEffect(() => {
    const el = ref.current
    const slot = document.getElementById('logo-portada')
    const cover = document.getElementById('inicio')
    if (calm || !el || !slot || !cover) {
      setFlight(null)
      return undefined
    }
    const measure = () => {
      const anchor = el.offsetParent.getBoundingClientRect()
      const s = slot.getBoundingClientRect()
      const y = s.top + window.scrollY - anchor.top - el.offsetTop
      const leads = s.bottom <= cover.querySelector('h1').getBoundingClientRect().top
      setFlight({
        x: s.left - anchor.left - el.offsetLeft,
        y,
        scale: s.width / el.offsetWidth,
        leads,
        end: leads ? y * 2.5 : cover.offsetHeight * 0.55,
      })
    }
    const ro = new ResizeObserver(measure)
    ro.observe(cover)
    ro.observe(slot)
    return () => ro.disconnect()
  }, [calm])

  // A reload partway down lands in place instead of flying in.
  useLayoutEffect(() => {
    home.jump(progress.get())
  }, [flight, home, progress])

  return (
    <motion.span
      ref={ref}
      style={{ x, y, scale, transformOrigin: '0 0' }}
      initial={calm ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="block"
    >
      {children}
    </motion.span>
  )
}

export default function Header() {
  const { active, under, scrolled } = useChapterState()
  // Over the petroleum contact chapter the header switches to its light-on-dark set.
  const onBand = CHAPTERS[under].id === 'contacto'

  const onNav = (e) => {
    e.preventDefault()
    goToSheet(e.currentTarget.dataset.target)
  }

  return (
    <header>
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-[68px] transition-opacity duration-300 sm:h-[76px] ${scrolled ? 'opacity-100' : 'opacity-0'} ${onBand ? 'bg-band/75' : 'bg-bg/70'} backdrop-blur-md`}
      />
      <a
        href="#inicio"
        data-target="inicio"
        onClick={onNav}
        aria-label="Señas a Voces Academy, ir a la portada"
        className={`${CORNER} left-4 sm:left-8`}
      >
        <FlyingLogo>
          {onBand ? (
            <img src={LOGO.horizontalDark} alt="Señas a Voces Academy" width="1100" height="436" className="h-10 w-auto sm:h-12" />
          ) : (
            <Logo className="h-10 sm:h-12" />
          )}
        </FlyingLogo>
      </a>

      <div className={`${CORNER} right-3 sm:right-8`}>
        <a
          href="#contacto"
          data-target="contacto"
          onClick={onNav}
          className="inline-flex h-11 items-center rounded-full bg-amber px-5 text-[15px] font-bold text-amber-ink transition-transform duration-150 hover:-translate-y-px active:scale-[0.97]"
        >
          Contacto
        </a>
      </div>

      {/* Divider tabs along the page's right edge: where you are, and a shortcut to each chapter */}
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
                    ? 'translate-x-0 bg-petrol text-white shadow-[0_8px_18px_-10px_rgb(4_40_52/0.6)]'
                    : 'translate-x-[6px] bg-bg text-fg/65 ring-1 ring-line hover:translate-x-0 hover:text-fg'
                }`}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}
