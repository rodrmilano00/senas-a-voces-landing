import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import Button from '../Button'
import Logo from '../Logo'
import BackdropShapes from '../BackdropShapes'
import WaveLines from '../WaveLines'
import { Reveal, TitleReveal } from '../Reveal'

export default function CoverSheet() {
  const ref = useRef(null)
  const still = useCalm()
  const { scrollYProgress: cover } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const copyY = useTransform(cover, [0, 1], [0, still ? 0 : -50])

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

      <div className="container-page relative grid flex-1 items-center gap-x-10 gap-y-5 pt-[clamp(84px,10vw,128px)] pb-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-y-14">
        <motion.div style={{ y: copyY }}>
          <TitleReveal
            as="h1"
            id="portada-titulo"
            onMount
            delay={0.15}
            text="Donde las manos"
            accent="encuentran voz."
            className="text-[clamp(38px,12.6vw,50px)] leading-[1.02] tracking-[-0.025em] text-petrol lg:text-[clamp(50px,6.4vw,96px)]"
          />
          <Reveal as="p" delay={0.55} className="mt-6 max-w-[34rem] lg:mt-8 text-[clamp(17px,1.5vw,21px)] leading-[1.6] text-muted">
            Cuatro estudiantes de ingeniería de Hermosillo que, junto con la comunidad sorda, desarrollan
            un guante que traduce señas a voz, un intérprete en vivo y una nueva forma de aprender
            Lengua de Señas Mexicana.
          </Reveal>
          {/* No viewport margin: on short phones the actions sit in the bottom 12% and must still appear */}
          <Reveal delay={0.7} viewport={{ once: true }} className="mt-6 flex flex-wrap items-center gap-3 lg:mt-10">
            <Button href="#problema" className="px-5! max-[359px]:px-4! sm:px-6!">
              Saber más <ArrowDown size={18} strokeWidth={2.4} aria-hidden="true" />
            </Button>
            <Button variant="ghost" disabled className="px-5! text-muted! disabled:opacity-100 max-[359px]:px-4! sm:px-6!">
              Próximamente
            </Button>
          </Reveal>
        </motion.div>

        {/* The header's logo rests over this slot and flies home on scroll; see FlyingLogo.
            On phones it leads the column, so its flight never crosses the copy. */}
        <div id="logo-portada" className="order-first aspect-[1100/436] w-[clamp(190px,56vw,250px)] lg:order-none lg:mx-auto lg:w-full lg:max-w-[460px]">
          {still && <Logo className="h-auto w-full" />}
        </div>
      </div>
    </section>
  )
}
