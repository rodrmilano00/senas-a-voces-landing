import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { PRODUCTS } from '../lib/content'
import { PHOTOS } from '../lib/media'
import SectionHeading from './SectionHeading'

export default function Products() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const cards = [
    {
      ...PRODUCTS[1],
      wide: true,
      media: PHOTOS.platform,
      mediaAlt: 'Captura de la plataforma de aprendizaje Señas a Voces',
    },
    { ...PRODUCTS[0], wide: false },
    { ...PRODUCTS[2], wide: false },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })

      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.from(card, {
          opacity: 0,
          y: 36,
          scale: 0.96,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="productos"
      className="relative pt-[clamp(112px,10vw,140px)] pb-[clamp(64px,6vw,80px)]"
    >
      <div className="container-page">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Nuestro Ecosistema"
            title={
              <>
                Tecnología que <span className="text-primary">conecta</span>
              </>
            }
            subtitle="Tres pilares que hacen posible una nueva era de comunicación inclusiva."
          />
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-[1.22fr_0.82fr] md:grid-rows-2">
          {cards.map((card, i) => (
            <article
              key={card.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`group relative flex overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-[12px] transition-[background-color,border-color] duration-500 hover:border-primary/25 hover:bg-[color-mix(in_oklch,var(--primary)_4%,var(--card-bg))] ${
                card.wide
                  ? 'min-h-[620px] flex-col p-10 md:row-span-2 lg:p-12'
                  : 'min-h-[294px] flex-col justify-center p-9 lg:p-11'
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/10" />
              <div className="relative mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-primary/12 text-[26px] text-primary transition-[background-color,transform] duration-500 group-hover:bg-primary/18 group-hover:rotate-1">
                {card.icon}
              </div>
              <h3 className="relative mb-4 text-[clamp(28px,2.4vw,36px)] leading-[1.05]">{card.title}</h3>
              <p className="relative max-w-[62ch] text-[17px] leading-[1.75] text-muted">{card.desc}</p>
              <span className="relative mt-5 inline-block w-fit rounded-full bg-accent/12 px-4 py-1.5 text-xs font-semibold tracking-[0.08em] text-accent uppercase">
                Próximamente
              </span>
              {card.wide && (
                <div className="relative mt-8 aspect-[16/10] w-full flex-1 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-surface shadow-[var(--shadow-md)]">
                  <img
                    src={card.media}
                    alt={card.mediaAlt}
                    className="h-full w-full object-cover object-top transition-[filter,transform] duration-700 group-hover:scale-[1.015] group-hover:saturate-[1.08]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(13,92,111,0.08))]" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
