import { useEffect, useMemo, useRef } from 'react'
import { gsap } from '../lib/gsap'
import { TESTIMONIALS } from '../lib/content'
import SectionHeading from './SectionHeading'

export default function Community() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const trackRef = useRef(null)
  const nodesRef = useRef([])

  const nodes = useMemo(() => {
    // Deterministic pseudo-random so node positions stay stable across renders.
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

        <div className="relative mb-16 h-[320px] overflow-hidden rounded-3xl bg-[linear-gradient(135deg,color-mix(in_oklch,var(--primary)_5%,var(--bg)),var(--bg))]">
          {nodes.map((n, i) => (
            <span
              key={i}
              ref={(el) => (nodesRef.current[i] = el)}
              className={`absolute h-3 w-3 rounded-full opacity-60 ${n.accent ? 'bg-accent' : 'bg-primary'}`}
              style={{ left: n.left, top: n.top }}
            />
          ))}
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
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
