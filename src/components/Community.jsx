import { useEffect, useMemo, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { TESTIMONIALS } from '../lib/content'
import { PHOTOS } from '../lib/media'
import SectionHeading from './SectionHeading'

export default function Community() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const trackRef = useRef(null)
  const nodesRef = useRef([])

  const nodes = useMemo(() => {
    const rand = (n) => {
      const x = Math.sin(n * 99.13) * 43758.5453
      return x - Math.floor(x)
    }
    return Array.from({ length: 18 }, (_, i) => ({
      left: `${rand(i + 1) * 90 + 5}%`,
      top: `${rand(i + 11) * 80 + 10}%`,
      accent: i % 4 === 0,
    }))
  }, [])
  const acronym = [
    ['S', 'Señas', 'from-accent to-[#f4cf9e]', '-rotate-3'],
    ['A', 'a', 'from-[#d6ddd8] to-primary', 'rotate-2'],
    ['V', 'Voces', 'from-primary-bright to-fg', '-rotate-1'],
    ['A', 'Academy', 'from-fg to-primary-bright', 'rotate-3'],
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

      nodesRef.current.forEach((node, i) => {
        if (!node) return
        gsap.to(node, {
          x: ((i * 7 + 3) % 30) - 15,
          y: ((i * 11 + 5) % 40) - 20,
          duration: 2 + ((i * 3) % 20) / 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.15,
        })
      })

      const track = trackRef.current
      if (track) {
        const totalWidth = track.scrollWidth - track.parentElement.offsetWidth
        gsap.to(track, {
          x: -totalWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: track.parentElement,
            start: 'top 80%',
            end: `+=${totalWidth}`,
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="comunidad" className="relative overflow-hidden py-[140px]">
      <div className="container-page relative z-[2]">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Comunidad"
            title={
              <>
                Conectando <span className="text-primary">vidas</span>
              </>
            }
            subtitle="Una red de alumnos, profesores y la comunidad sorda que crece cada día."
          />
        </div>

        <div className="relative mb-16 h-[440px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary)_5%,var(--bg)),var(--bg))] shadow-[var(--shadow-sm)]">
          <div className="absolute inset-x-5 top-20 bottom-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {PHOTOS.community.map((photo, i) => (
              <div
                key={photo}
                className={`relative z-20 ${
                  i % 2 === 1 ? 'translate-y-8' : ''
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 -top-12 z-40 flex flex-col items-center">
                  <span
                    className={`bg-gradient-to-br ${acronym[i][2]} bg-clip-text text-[clamp(58px,5.8vw,94px)] font-extrabold leading-none tracking-[0.02em] text-transparent opacity-95 drop-shadow-[0_14px_24px_rgba(8,61,72,0.28)] ${acronym[i][3]}`}
                  >
                    {acronym[i][0]}
                  </span>
                  <span className="-mt-2 rounded-full border border-white/55 bg-[rgba(8,61,72,0.68)] px-4 py-1 text-[clamp(10px,0.78vw,13px)] font-extrabold tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    {acronym[i][1]}
                  </span>
                </div>
                <div className="h-full overflow-hidden rounded-[22px] border border-white/80 bg-surface p-1 shadow-[0_18px_48px_rgba(8,61,72,0.12)]">
                  <img
                    src={photo}
                    alt="Integrante de la comunidad Señas a Voces"
                    className="h-full w-full rounded-[18px] object-cover object-[50%_42%] contrast-[1.06] saturate-[1.12]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-[linear-gradient(90deg,var(--bg),transparent)] opacity-65" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-[linear-gradient(-90deg,var(--bg),transparent)] opacity-65" />
          {nodes.map((n, i) => (
            <span
              key={i}
              ref={(el) => (nodesRef.current[i] = el)}
              className={`absolute z-10 h-3 w-3 rounded-full opacity-45 ${n.accent ? 'bg-accent' : 'bg-primary'}`}
              style={{ left: n.left, top: n.top }}
            />
          ))}
          <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full">
            {nodes.slice(0, -1).map((n, i) => {
              const next = nodes[i + 1]
              return (
                <line
                  key={i}
                  x1={n.left}
                  y1={n.top}
                  x2={next.left}
                  y2={next.top}
                  stroke="var(--primary)"
                  strokeWidth="1"
                  opacity="0.1"
                />
              )
            })}
          </svg>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-[linear-gradient(90deg,var(--bg),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-[linear-gradient(-90deg,var(--bg),transparent)]" />
          <div ref={trackRef} className="flex w-max gap-6">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="w-[360px] shrink-0 rounded-[20px] border border-[var(--card-border)] bg-[var(--card-bg)] p-8 backdrop-blur-[8px]"
              >
                <blockquote className="mb-5 text-[15px] leading-[1.7] text-fg italic">
                  {t.text}
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[color-mix(in_oklch,var(--primary)_15%,var(--bg))] text-base font-bold text-primary">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
