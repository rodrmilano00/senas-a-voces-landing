import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { LOGO_SRC } from '../lib/content'
import Button from './Button'
import Eyebrow from './Eyebrow'

export default function Hero() {
  const sectionRef = useRef(null)
  const shapesRef = useRef([])
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      shapesRef.current.forEach((shape, i) => {
        if (!shape) return
        gsap.to(shape, {
          y: (i + 1) * -80,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      gsap
        .timeline({ delay: 0.3 })
        .from(eyebrowRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
        .from(titleRef.current, { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .from(subRef.current, { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from(logoRef.current, { opacity: 0, scale: 0.85, duration: 1, ease: 'power3.out' }, '-=0.8')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-[120px] pb-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={(el) => (shapesRef.current[0] = el)}
          className="absolute top-[-15%] right-[-10%] h-[600px] w-[600px] rounded-full bg-primary opacity-[0.08]"
        />
        <div
          ref={(el) => (shapesRef.current[1] = el)}
          className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent opacity-[0.08]"
        />
        <div
          ref={(el) => (shapesRef.current[2] = el)}
          className="absolute top-[30%] left-[20%] h-[200px] w-[200px] rounded-full bg-primary opacity-[0.08]"
        />
        <svg
          viewBox="0 0 1440 400"
          className="absolute top-0 left-0 h-full w-full fill-none stroke-primary opacity-15"
          strokeWidth="1"
        >
          <path
            ref={(el) => (shapesRef.current[3] = el)}
            d="M0,200 Q360,80 720,200 T1440,200"
          />
          <path
            ref={(el) => (shapesRef.current[4] = el)}
            d="M0,260 Q360,140 720,260 T1440,260"
            className="opacity-[0.08]"
          />
        </svg>
      </div>

      <div className="container-page relative z-[2] grid w-full grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="max-w-[600px]">
          <Eyebrow ref={eyebrowRef} className="mb-6">
            Lengua de Señas Mexicana + Inteligencia Artificial
          </Eyebrow>
          <h1 ref={titleRef} className="mb-6 text-[clamp(48px,6vw,80px)] text-fg">
            Donde las manos <span className="text-primary">encuentran voz</span>
          </h1>
          <p
            ref={subRef}
            className="mb-10 max-w-[480px] text-[clamp(17px,1.5vw,20px)] leading-[1.7] text-muted"
          >
            Aprende LSM con tecnología de vanguardia. Guantes inteligentes, IA en tiempo real y una
            comunidad que transforma vidas.
          </p>
          <div ref={ctaRef} className="flex items-center gap-4">
            <Button variant="primary" magnetic>
              Comenzar ahora <span>→</span>
            </Button>
            <Button variant="secondary">
              Conocer más <span>↓</span>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img
            ref={logoRef}
            src={LOGO_SRC}
            alt="Logo Señas a Voces"
            className="h-auto w-[clamp(440px,44vw,680px)] rounded-[28px] bg-white/88 p-6 shadow-[0_24px_80px_rgba(8,61,72,0.14)] ring-1 ring-black/5 [filter:contrast(1.08)_saturate(1.05)] backdrop-blur-sm dark:bg-white/95 dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] dark:ring-white/15"
          />
        </div>
      </div>
    </section>
  )
}
