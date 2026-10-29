import { motion, useReducedMotion } from 'motion/react'
import { CONTACT, PRESS, PRESS_HEADLINES, SOCIAL_REACH, TESTIMONIALS } from '../../lib/content'
import { PHOTOS } from '../../lib/media'
import Sheet from './Sheet'
import DepthImage from '../DepthImage'

const [FEATURED, ...QUOTES] = TESTIMONIALS
function QuoteMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 24" aria-hidden="true" className={`fill-amber ${className}`}>
      <path d="M0 24V14.4C0 6.6 4.1 1.8 12.2 0l1.5 3.4C9.4 4.8 7.3 7.4 7 11h6v13H0Zm18.3 0V14.4C18.3 6.6 22.4 1.8 30.5 0L32 3.4c-4.3 1.4-6.4 4-6.7 7.6h6V24H18.3Z" />
    </svg>
  )
}

// Five headlines and the social reach fill an even 3 x 2 grid. Cards rise
// into place as a set when the grid scrolls in; nothing is hidden by default.
function Clippings() {
  const still = useReducedMotion()
  const rise = (i) => ({
    initial: still ? false : { y: 36, rotate: i % 2 ? 1.5 : -1.5 },
    whileInView: { y: 0, rotate: 0 },
    viewport: { once: true, margin: '0px 0px -12% 0px' },
    transition: { type: 'spring', duration: 0.8, bounce: 0.2, delay: (i % 3) * 0.06 },
  })

  return (
    <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PRESS_HEADLINES.map((h, i) => (
        <motion.li
          key={h.outlet}
          {...rise(i)}
          className="flex flex-col rounded-[14px] bg-surface p-7 shadow-[0_2px_4px_rgb(4_40_52/0.06),0_18px_36px_-22px_rgb(4_40_52/0.35)] ring-1 ring-line"
        >
          <p className="text-sm font-bold text-petrol dark:text-cyan">{h.outlet}</p>
          <p className="mt-3 font-display text-[22px] leading-[1.18] font-bold text-fg">“{h.title}”</p>
        </motion.li>
      ))}
      <motion.li {...rise(PRESS_HEADLINES.length)} className="flex flex-col justify-between rounded-[14px] bg-band p-7 text-band-fg">
        <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="text-sm font-bold underline decoration-band-line underline-offset-4 hover:decoration-amber">
          {CONTACT.instagram}
        </a>
        <dl className="mt-6 grid grid-cols-2 gap-4">
          {SOCIAL_REACH.map((r) => (
            <div key={r.label}>
              <dt className="sr-only">{r.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(32px,3vw,42px)] leading-none font-bold">{r.value}</span>
                <span className="mt-1.5 block text-sm text-band-muted">{r.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </motion.li>
    </ul>
  )
}

export default function CommunitySheet() {
  return (
    <Sheet
      id="comunidad"
      variant={2}
      title="Con la comunidad, no solo para ella"
      intro="Con Roberto Labrada, líder del colectivo Señas del Desierto, el equipo valida el diseño y el funcionamiento de cada producto."
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
          Además, el equipo fue entrevistado en {PRESS.join(', ')}.
        </p>
        <Clippings />
      </div>
    </Sheet>
  )
}
