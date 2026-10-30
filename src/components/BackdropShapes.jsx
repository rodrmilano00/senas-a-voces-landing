import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../lib/perf'

// Three soft circles per sheet, carried over from the first landing: each one
// drifts at its own rate, so the sheet reads as having depth behind its copy.
// Layouts vary by `variant` so consecutive sheets never repeat.
const LAYOUTS = [
  [
    { size: 'clamp(320px,40vw,620px)', top: '-12%', right: '-14%', tone: 'bg-petrol/[0.07]', speed: -160 },
    { size: 'clamp(200px,24vw,380px)', bottom: '-6%', left: '-8%', tone: 'bg-amber/[0.12]', speed: -60 },
    { size: 'clamp(110px,12vw,190px)', top: '32%', left: '38%', tone: 'bg-cyan/[0.09]', speed: -260 },
  ],
  [
    { size: 'clamp(280px,34vw,540px)', top: '20%', left: '-16%', tone: 'bg-cyan/[0.08]', speed: -120 },
    { size: 'clamp(180px,20vw,320px)', top: '-4%', right: '8%', tone: 'bg-amber/[0.11]', speed: -220 },
    { size: 'clamp(120px,14vw,220px)', bottom: '8%', right: '-4%', tone: 'bg-petrol/[0.07]', speed: -80 },
  ],
  [
    { size: 'clamp(300px,36vw,560px)', bottom: '-10%', right: '-10%', tone: 'bg-amber/[0.1]', speed: -140 },
    { size: 'clamp(160px,18vw,300px)', top: '10%', left: '6%', tone: 'bg-petrol/[0.06]', speed: -240 },
    { size: 'clamp(100px,11vw,170px)', top: '48%', right: '30%', tone: 'bg-cyan/[0.1]', speed: -70 },
  ],
]

function Circle({ shape, progress, still }) {
  const y = useTransform(progress, [0, 1], [0, still ? 0 : shape.speed])
  const { size, tone, top, right, bottom, left } = shape
  return (
    <motion.span
      style={{ y, width: size, height: size, top, right, bottom, left }}
      className={`absolute rounded-full ${tone}`}
    />
  )
}

export default function BackdropShapes({ variant = 0 }) {
  const ref = useRef(null)
  const still = useCalm()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const layout = LAYOUTS[variant % LAYOUTS.length]

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
      {layout.map((shape, i) => (
        <Circle key={i} shape={shape} progress={scrollYProgress} still={still} />
      ))}
    </div>
  )
}
