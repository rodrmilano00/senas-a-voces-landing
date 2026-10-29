import { useRef } from 'react'
import { useInView } from 'motion/react'
import { AUDIENCES, MANIFESTO } from '../../lib/content'
import { useCalm } from '../../lib/perf'
import { Reveal } from '../Reveal'
import Sheet from './Sheet'
import WordReveal from '../WordReveal'

// 2.3M people with hearing loss vs ~300k LSM users: each dot is ~23,000 people.
const TOTAL_DOTS = 100
const LSM_DOTS = 13

export default function ProblemSheet() {
  const dotsRef = useRef(null)
  const calm = useCalm()
  // The LSM dots light up one after another, like a count, when the chart is read.
  const counted = useInView(dotsRef, { once: true, margin: '0px 0px -20% 0px' }) || calm

  return (
    <Sheet
      id="problema"
      variant={1}
      title="El problema"
      intro="En México, más de 2.3 millones de personas viven con discapacidad auditiva o dificultades graves para oír. Solo alrededor de 300,000 usan la Lengua de Señas Mexicana, reconocida como lengua nacional, y la mayoría oyente no la conoce."
    >
      <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <figure className="max-w-[32rem]">
          <div ref={dotsRef} className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1.5" aria-hidden="true">
            {Array.from({ length: TOTAL_DOTS }, (_, i) => (
              <span
                key={i}
                style={{ transitionDelay: `${i < LSM_DOTS ? i * 70 : 0}ms` }}
                className={`aspect-square rounded-full transition-[background-color,transform] duration-500 ${
                  i < LSM_DOTS && counted ? 'scale-110 bg-cyan' : 'bg-fg/12'
                }`}
              />
            ))}
          </div>
          <figcaption className="mt-5 grid gap-2 text-sm text-muted">
            <span className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan" aria-hidden="true" />
                Usan LSM, cerca del 13%
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-fg/20" aria-hidden="true" />
                Viven con discapacidad auditiva
              </span>
            </span>
            <span className="text-sm">Cada punto representa unas 23,000 personas.</span>
          </figcaption>
          <p className="mt-14 text-[17px] leading-[1.65] text-muted">
            <strong className="block font-display text-[clamp(30px,2.8vw,40px)] leading-none font-bold text-petrol dark:text-cyan">
              145,000 en Sonora
            </strong>
            <span className="mt-3 block max-w-[44ch]">
              Más de 145,000 personas, alrededor del 5% de la población del estado, vivían en 2020 con
              alguna discapacidad, según el Censo. Señas a Voces nace en Hermosillo para atender una
              necesidad que se repite en todo el país.
            </span>
          </p>
        </figure>

        <div>
          <h3 className="font-display text-[clamp(26px,2.4vw,32px)] text-fg">¿Y a quién afecta?</h3>
          <dl className="mt-4">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <dt className="font-display text-[24px] leading-tight font-bold text-petrol dark:text-cyan">{a.title}</dt>
                <dd className="max-w-[42ch] leading-[1.6] text-muted sm:pt-1">{a.desc}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-[clamp(120px,14vw,200px)]">
        <WordReveal
          text={MANIFESTO}
          className="max-w-[18ch] font-display text-[clamp(44px,6.4vw,96px)] leading-[0.98] font-bold tracking-[-0.02em] text-petrol dark:text-fg"
        />
      </div>
    </Sheet>
  )
}
