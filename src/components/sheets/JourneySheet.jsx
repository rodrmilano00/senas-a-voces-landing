import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { MILESTONES } from '../../lib/content'
import { MILESTONE_PHOTOS, PARTNER_LOGOS } from '../../lib/media'
import Sheet from './Sheet'

const PER_ROW = 3
const ROW_HEIGHT = 440
const NODE_Y = 250 // node position inside its row: media above, label below
const SIDE = 120 // room at each side for the path to turn

function useWide() {
  const [wide, setWide] = useState(() => window.matchMedia('(min-width: 1024px)').matches)
  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setWide(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return wide
}

function useWidth(ref) {
  const [width, setWidth] = useState(0)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const ro = new ResizeObserver(() => setWidth(el.offsetWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return width
}

/** Snake the milestones across the page, row by row, like the portfolio. */
function serpentine(width, count) {
  const span = width - SIDE * 2
  const nodes = Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / PER_ROW)
    const col = i % PER_ROW
    const slot = row % 2 ? PER_ROW - 1 - col : col
    return { x: SIDE + (slot * span) / (PER_ROW - 1), y: row * ROW_HEIGHT + NODE_Y }
  })

  let d = `M ${nodes[0].x - SIDE * 0.8} ${nodes[0].y + 24} Q ${nodes[0].x - SIDE * 0.4} ${nodes[0].y + 30}, ${nodes[0].x} ${nodes[0].y}`
  for (let i = 1; i < nodes.length; i++) {
    const a = nodes[i - 1]
    const b = nodes[i]
    if (a.y === b.y) {
      const mid = (a.x + b.x) / 2
      const wave = i % 2 ? -46 : 46
      d += ` Q ${(a.x + mid) / 2} ${a.y + wave}, ${mid} ${a.y} T ${b.x} ${b.y}`
    } else {
      // Turn down to the next row, bulging out past the side.
      const out = a.x > width / 2 ? SIDE * 0.95 : -SIDE * 0.95
      d += ` C ${a.x + out} ${a.y}, ${b.x + out} ${b.y}, ${b.x} ${b.y}`
    }
  }
  d += ` q ${SIDE * 0.5} 10, ${SIDE * 0.9} 40`
  return { nodes, d, height: Math.ceil(count / PER_ROW) * ROW_HEIGHT }
}

function Media({ milestone, className = '' }) {
  if (milestone.logo) {
    const logo = PARTNER_LOGOS[milestone.logo]
    return (
      <span className={`flex h-[132px] w-[200px] shrink-0 items-center justify-center rounded-[16px] bg-[#faf7ed] shadow-[0_2px_4px_rgb(4_40_52/0.06),0_14px_30px_-18px_rgb(4_40_52/0.35)] ${className}`}>
        <img src={logo.src} alt={logo.alt} loading="lazy" className="h-[104px] w-[168px] object-contain" />
      </span>
    )
  }
  return (
    <img
      src={MILESTONE_PHOTOS[milestone.photo]}
      alt={milestone.title}
      loading="lazy"
      className={`aspect-[16/10] w-[260px] rounded-[16px] object-cover ${className}`}
    />
  )
}

function Label({ milestone, align = 'center' }) {
  return (
    <>
      <span className="inline-block rounded-[10px] bg-[#d9eef4] px-3.5 py-1.5 font-display text-[19px] leading-tight font-bold text-petrol dark:bg-cyan/15 dark:text-fg">
        {milestone.title}
      </span>
      {/* Opaque backing so the trajectory line passes behind, never through, the text */}
      <span className={`mt-1.5 block w-fit max-w-[30ch] rounded-md bg-bg px-2 py-1 text-[15px] leading-[1.5] text-muted ${align === 'center' ? 'mx-auto' : '-ml-2'}`}>
        {milestone.detail}
      </span>
    </>
  )
}

export default function JourneySheet() {
  const trackRef = useRef(null)
  const wide = useWide()
  const width = useWidth(trackRef)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 75%', 'end 92%'] })
  const drawn = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  const snake = wide && width ? serpentine(width, MILESTONES.length) : null

  return (
    <Sheet
      id="trayectoria"
      title="Nuestra trayectoria"
      intro="Un proyecto que nació en las aulas de Hermosillo y hoy lleva el nombre de la ciudad a escenarios nacionales e internacionales."
    >
      <div ref={trackRef} className="relative mt-12" style={snake ? { height: snake.height } : undefined}>
        {snake ? (
          <>
            <svg width={width} height={snake.height} aria-hidden="true" className="absolute inset-0 overflow-visible">
              <path d={snake.d} fill="none" stroke="var(--petrol)" strokeWidth="2.5" strokeDasharray="9 9" strokeLinecap="round" opacity="0.45" />
              <motion.path
                d={snake.d}
                fill="none"
                stroke="var(--petrol)"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ pathLength: still ? 1 : drawn }}
              />
            </svg>
            <ol>
              {MILESTONES.map((m, i) => {
                const n = snake.nodes[i]
                return (
                  <li key={m.title} className="absolute w-[280px] -translate-x-1/2 text-center" style={{ left: n.x, top: n.y - 190 }}>
                    <span className="flex h-[166px] items-end justify-center">
                      <Media milestone={m} />
                    </span>
                    <span aria-hidden="true" className="mx-auto mt-[14px] block h-5 w-5 rounded-full bg-cyan ring-4 ring-bg" />
                    <span className="mt-3 block">
                      <Label milestone={m} />
                    </span>
                  </li>
                )
              })}
            </ol>
          </>
        ) : (
          <MobileTrack still={still} />
        )}
      </div>
    </Sheet>
  )
}

/** Below 1024px the line runs down the left edge and milestones stack. */
function MobileTrack({ still }) {
  const listRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 92%'] })
  const drawn = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <div ref={listRef} className="relative">
      <svg aria-hidden="true" className="absolute top-0 left-[18px] h-full w-1 overflow-visible">
        <line x1="2" y1="0" x2="2" y2="100%" stroke="var(--petrol)" strokeWidth="2.5" strokeDasharray="9 9" opacity="0.45" />
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="100%"
          stroke="var(--petrol)"
          strokeWidth="2.5"
          style={{ pathLength: still ? 1 : drawn }}
        />
      </svg>
      <ol className="grid gap-14">
        {MILESTONES.map((m) => (
          <li key={m.title} className="relative pl-14">
            <span aria-hidden="true" className="absolute top-0 left-[10px] h-5 w-5 rounded-full bg-cyan ring-4 ring-bg" />
            <Media milestone={m} className="mb-4 max-w-full" />
            <Label milestone={m} align="start" />
          </li>
        ))}
      </ol>
    </div>
  )
}
