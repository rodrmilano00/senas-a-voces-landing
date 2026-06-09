import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { TEAM } from '../lib/content'
import { PHOTOS } from '../lib/media'
import SectionHeading from './SectionHeading'

export default function Team() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const avatarsRef = useRef([])

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
          y: 50,
          scale: 0.95,
          duration: 0.7,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
    }, sectionRef)

    const cleanups = cardsRef.current.map((card, i) => {
      if (!card) return undefined
      const avatar = avatarsRef.current[i]
      const onEnter = () => {
        gsap.to(card, { scale: 1.03, duration: 0.4, ease: 'power3.out' })
        gsap.to(avatar, { scale: 1.08, duration: 0.4, ease: 'power3.out' })
      }
      const onLeave = () => {
        gsap.to(card, { scale: 1, duration: 0.5, ease: 'elastic.out(1,0.5)' })
        gsap.to(avatar, { scale: 1, duration: 0.4, ease: 'power3.out' })
      }
      card.addEventListener('mouseenter', onEnter)
      card.addEventListener('mouseleave', onLeave)
      return () => {
        card.removeEventListener('mouseenter', onEnter)
        card.removeEventListener('mouseleave', onLeave)
      }
    })

    return () => {
      ctx.revert()
      cleanups.forEach((fn) => fn && fn())
    }
  }, [])

  return (
    <section ref={sectionRef} id="equipo" className="py-[clamp(72px,8vw,96px)]">
      <div className="container-page">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Equipo"
            title={
              <>
                Los que <span className="text-primary">construyen</span>
              </>
            }
            subtitle="Un equipo multidisciplinario con una misión clara: eliminar las barreras comunicativas."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative flex min-h-[340px] flex-col items-center overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 text-center"
            >
              <img
                ref={(el) => (avatarsRef.current[i] = el)}
                src={PHOTOS.team[i]}
                alt={`Foto de ${m.name}`}
                className="mx-auto mb-5 h-28 w-28 rounded-full border-4 border-surface object-cover object-[50%_24%] shadow-[0_12px_32px_rgba(8,61,72,0.12)]"
              />
              <h3 className="mb-1 text-xl">{m.name}</h3>
              <div className="mb-3 text-sm font-medium text-accent">{m.role}</div>
              <p className="text-sm leading-[1.6] text-muted">{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
