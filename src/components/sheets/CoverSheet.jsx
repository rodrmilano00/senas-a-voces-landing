import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import { HERO_PROOF, TEAM } from '../../lib/content'
import { TEAM_PHOTOS } from '../../lib/media'
import Button from '../Button'
import Portrait from '../Portrait'
import BackdropShapes from '../BackdropShapes'
import WaveLines from '../WaveLines'
import { Reveal, TitleReveal } from '../Reveal'

const LEAD = 0 // Emiliano, cyan
const SECOND = 3 // César Luna, red

export default function CoverSheet() {
  const ref = useRef(null)
  const still = useCalm()
  const { scrollYProgress: cover } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Scroll depth: as the cover scrolls away, each layer drifts at its own rate.
  const leadY = useTransform(cover, [0, 1], [0, still ? 0 : -90])
  const leadBlockY = useTransform(cover, [0, 1], [0, still ? 0 : -40])
  const secondY = useTransform(cover, [0, 1], [0, still ? 0 : -170])
  const secondBlockY = useTransform(cover, [0, 1], [0, still ? 0 : -110])
  const copyY = useTransform(cover, [0, 1], [0, still ? 0 : -50])

  // Pointer depth on desktop, sprung so it has weight instead of tracking 1:1.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 80, damping: 18 })
  const sy = useSpring(py, { stiffness: 80, damping: 18 })
  const farX = useTransform(sx, (v) => v * 10)
  const farY = useTransform(sy, (v) => v * 10)
  const nearX = useTransform(sx, (v) => v * -18)
  const nearY = useTransform(sy, (v) => v * -18)

  useEffect(() => {
    if (still || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined
    const onMove = (e) => {
      px.set(e.clientX / window.innerWidth - 0.5)
      py.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [still, px, py])

  return (
    <section
      ref={ref}
      id="inicio"
      aria-labelledby="portada-titulo"
      className="relative flex min-h-[100svh] flex-col"
    >
      <BackdropShapes variant={0} />
      <WaveLines className="absolute -top-16 -right-20 w-[clamp(260px,34vw,520px)] text-cyan/45" />
      {/* Kept low and outside the copy column so it never crosses the intro or the CTA */}
      <WaveLines className="absolute -bottom-36 -left-36 w-[clamp(200px,20vw,300px)] rotate-180 text-cyan/35" />

      <div className="container-page relative grid flex-1 items-center gap-x-10 gap-y-14 pt-[clamp(104px,10vw,128px)] pb-10 lg:grid-cols-[1.3fr_0.9fr]">
        <motion.div style={{ y: copyY }}>
          <TitleReveal
            as="h1"
            id="portada-titulo"
            onMount
            delay={0.15}
            text="Donde las manos"
            accent="encuentran voz."
            className="text-[clamp(50px,6.4vw,96px)] leading-[0.92] text-petrol dark:text-fg"
          />
          <Reveal as="p" delay={0.55} className="mt-8 max-w-[34rem] text-[clamp(17px,1.5vw,21px)] leading-[1.6] text-muted">
            Cuatro estudiantes de ingeniería de Hermosillo que, junto con la comunidad sorda, desarrollan
            un guante que traduce señas a voz, un intérprete en vivo y una nueva forma de aprender
            Lengua de Señas Mexicana.
          </Reveal>
          <Reveal delay={0.7} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href="#problema">
              Conocer la historia <ArrowDown size={18} strokeWidth={2.4} aria-hidden="true" />
            </Button>
            <a
              href="#contacto"
              className="inline-flex min-h-12 items-center text-[15px] font-bold text-fg underline decoration-line decoration-2 underline-offset-[6px] transition-[text-decoration-color] duration-200 hover:decoration-amber"
            >
              Contacto
            </a>
          </Reveal>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
          <motion.div style={{ x: farX, y: farY }} className="ml-auto w-[74%]">
            <Portrait
              src={TEAM_PHOTOS[LEAD]}
              alt={`${TEAM[LEAD].name} haciendo una seña bajo luz cian`}
              tone={TEAM[LEAD].tone}
              photoY={leadY}
              blockY={leadBlockY}
              imgClassName="aspect-[4/5] object-[47%_45%]"
            />
          </motion.div>
          <motion.div style={{ x: nearX, y: nearY }} className="absolute bottom-[-8%] left-0 w-[44%]">
            <Portrait
              src={TEAM_PHOTOS[SECOND]}
              alt={`${TEAM[SECOND].name} haciendo la seña de paz bajo luz roja`}
              tone={TEAM[SECOND].tone}
              photoY={secondY}
              blockY={secondBlockY}
              imgClassName="aspect-[4/5] object-[50%_40%]"
            />
          </motion.div>
        </div>
      </div>

      <ul
        aria-label="Reconocimientos"
        className="container-page relative flex flex-wrap gap-x-6 gap-y-2 pt-5 pb-8 text-sm font-bold text-fg/80"
      >
        {HERO_PROOF.map((p) => (
          <li key={p} className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
    </section>
  )
}
