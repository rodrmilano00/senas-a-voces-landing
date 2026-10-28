import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { PRESS, PRESS_HEADLINES, SOCIAL_REACH, TESTIMONIALS } from '../../lib/content'
import { PHOTOS } from '../../lib/media'
import Sheet from './Sheet'
import DepthImage from '../DepthImage'

const [FEATURED, ...QUOTES] = TESTIMONIALS
// Each clipping column drifts at its own rate; the tilt is how a cutting lands on a desk.
const COLUMN_DRIFT = [40, -50, 70]
const TILT = ['-1.5deg', '1deg', '-0.5deg', '1.5deg', '-1deg']

function QuoteMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 24" aria-hidden="true" className={`fill-amber ${className}`}>
      <path d="M0 24V14.4C0 6.6 4.1 1.8 12.2 0l1.5 3.4C9.4 4.8 7.3 7.4 7 11h6v13H0Zm18.3 0V14.4C18.3 6.6 22.4 1.8 30.5 0L32 3.4c-4.3 1.4-6.4 4-6.7 7.6h6V24H18.3Z" />
    </svg>
  )
}

function Clippings() {
  const ref = useRef(null)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const ys = [
    useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [COLUMN_DRIFT[0], -COLUMN_DRIFT[0]]),
    useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [COLUMN_DRIFT[1], -COLUMN_DRIFT[1]]),
    useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [COLUMN_DRIFT[2], -COLUMN_DRIFT[2]]),
  ]
  const columns = [[], [], []]
  PRESS_HEADLINES.forEach((h, i) => columns[i % 3].push({ ...h, i }))

  return (
    <div ref={ref} className="mt-12 grid gap-5 md:grid-cols-3">
      {columns.map((col, c) => (
        <motion.ul key={c} style={{ y: ys[c] }} className={`grid content-start gap-5 ${c === 1 ? 'md:mt-16' : ''}`}>
          {col.map((h) => (
            <li
              key={h.outlet}
              style={{ rotate: TILT[h.i] }}
              className="rounded-[10px] bg-surface p-6 shadow-[0_2px_4px_rgb(4_40_52/0.06),0_18px_36px_-20px_rgb(4_40_52/0.35)] ring-1 ring-line"
            >
              <p className="text-sm font-bold text-petrol dark:text-cyan">{h.outlet}</p>
              <p className="mt-2 font-display text-[22px] leading-[1.15] font-bold text-fg">“{h.title}”</p>
            </li>
          ))}
        </motion.ul>
      ))}
    </div>
  )
}

export default function CommunitySheet() {
  return (
    <Sheet
      id="comunidad"
      title="Con la comunidad, no solo para ella"
      intro="Con Roberto Labrada, líder del colectivo Señas del Desierto, validamos el diseño y funcionamiento de cada uno de nuestros productos."
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <figure className="relative lg:col-span-7">
          <DepthImage
            src={PHOTOS.showcase}
            alt="El equipo de Señas a Voces junto al colectivo Señas del Desierto después de un showcase"
            className="aspect-[3/2] rounded-[20px]"
          />
          <figcaption className="mt-3 text-sm text-muted">Showcase con el colectivo Señas del Desierto, Hermosillo.</figcaption>
        </figure>
        <figure className="flex flex-col justify-between rounded-[20px] bg-band p-8 text-band-fg sm:p-10 lg:col-span-5">
          <div>
            <QuoteMark className="h-7 w-9" />
            <blockquote className="mt-6 font-display text-[clamp(22px,2vw,28px)] leading-[1.25] font-semibold">
              {FEATURED.text}
            </blockquote>
          </div>
          <figcaption className="mt-8">
            <span className="block font-bold">{FEATURED.name}</span>
            <span className="block text-sm text-band-muted">{FEATURED.role}</span>
          </figcaption>
        </figure>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {QUOTES.map((t) => (
          <figure key={t.name} className="rounded-[20px] bg-surface-2 p-8 sm:p-10">
            <QuoteMark className="h-5 w-7" />
            <blockquote className="mt-5 text-[17px] leading-[1.65] text-fg">{t.text}</blockquote>
            <figcaption className="mt-6">
              <span className="block font-bold text-fg">{t.name}</span>
              <span className="block text-sm text-muted">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-[clamp(96px,12vw,160px)]">
        <h3 className="text-[clamp(32px,3.6vw,52px)] text-petrol dark:text-fg">Visibilidad en medios</h3>
        <p className="mt-4 max-w-[56ch] text-[17px] leading-[1.65] text-muted">
          También nos entrevistaron en {PRESS.join(', ')}.
        </p>
        <Clippings />
        <dl className="mt-16 flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-8">
          {SOCIAL_REACH.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(36px,3.6vw,48px)] leading-none font-bold text-petrol dark:text-cyan">
                  {s.value}
                </span>
                <span className="mt-1.5 block text-sm text-muted">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Sheet>
  )
}
