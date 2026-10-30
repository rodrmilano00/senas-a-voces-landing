import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import { HERO_PROOF } from '../../lib/content'
import Button from '../Button'
import Logo from '../Logo'
import BackdropShapes from '../BackdropShapes'
import WaveLines from '../WaveLines'
import { Reveal, TitleReveal } from '../Reveal'

export default function CoverSheet() {
  const ref = useRef(null)
  const still = useCalm()
  const { scrollYProgress: cover } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // The copy drifts; the logo lifts away ahead of it, sprung so it trails the wheel softly.
  const copyY = useTransform(cover, [0, 1], [0, still ? 0 : -50])
  const lift = useSpring(cover, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const logoY = useTransform(lift, [0, 1], [0, still ? 0 : -260])
  const logoScale = useTransform(lift, [0, 1], [1, still ? 1 : 0.94])
  const logoOpacity = useTransform(lift, [0.3, 0.8], [1, still ? 1 : 0])

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

        <motion.div style={{ y: logoY, scale: logoScale, opacity: logoOpacity }} className="mx-auto w-[clamp(200px,52vw,280px)] lg:w-full lg:max-w-[400px]">
          <Reveal delay={0.35} y={16}>
            <Logo iso className="h-auto w-full" />
          </Reveal>
        </motion.div>
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
