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

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          opacity: 0,
          y: 60 + i * 20,
          scale: 0.96,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
        gsap.to(card, {
          y: i % 2 === 0 ? -30 : 30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="productos" className="relative py-[140px]">
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

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          {cards.map((card, i) => (
            <article
              key={card.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 backdrop-blur-[12px] transition-[transform,box-shadow] duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] ${
                card.wide ? 'md:row-span-2' : ''
              }`}
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary/12 text-2xl text-primary">
                {card.icon}
              </div>
              <h3 className="mb-3 text-2xl">{card.title}</h3>
              <p className="text-[15px] leading-[1.7] text-muted">{card.desc}</p>
              <span className="mt-4 inline-block rounded-full bg-accent/12 px-3.5 py-1.5 text-xs font-semibold tracking-[0.08em] text-accent uppercase">
                {card.tag}
              </span>
              {card.wide && (
                <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--card-border)] bg-surface shadow-[var(--shadow-md)]">
                  <img
                    src={card.media}
                    alt={card.mediaAlt}
                    className="h-full w-full object-cover object-top"
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
