import { useLayoutEffect, useRef, useState } from 'react'
import { easeInOut, motion, transform, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import { LAPTOP } from '../../lib/media'
import ScreenVideo from './ScreenVideo'

const W = 2200
const H = 1747

// The screen inside the render, with a hair of bleed under its edges.
const SCREEN = { left: '7.5%', top: '1.75%', width: '85%', height: '67.16%' }
// The camera pivots on the screen's centre, this far down the render.
const AIM = 35.3
// Close up, the screen sits this far down so the header band doesn't crop it.
const CLEAR_HEADER = 38

// Scroll progress of each beat in the pinned scene.
const BEATS = {
  recede: [0.04, 0.36],
  laptopCopy: [0.34, 0.42, 0.6, 0.66],
  phone: [0.58, 0.72],
  phoneCopy: [0.68, 0.76],
}

function Laptop() {
  return (
    <>
      <div aria-hidden="true" className="absolute inset-x-[3%] -bottom-[4%] h-[9%] bg-[radial-gradient(closest-side,rgb(4_40_52/0.32),transparent)]" />
      <div className="absolute bg-[#faf7ed]" style={SCREEN}>
        <ScreenVideo src={LAPTOP.video} poster={LAPTOP.poster} className="block h-full w-full object-cover" />
      </div>
      <img src={LAPTOP.frame} alt="" width={W} height={H} className="relative block w-full" />
    </>
  )
}

/**
 * The Academy in one pinned scene: it opens close up on the dashboard, pulls
 * back to reveal the laptop and its explanation, then the phone comes in with
 * its own. A render with a transparent screen sits over the live video, so the
 * screen stays sharp at any distance. Calm (lite or reduced motion) stacks the
 * same parts at rest, unpinned.
 */
export default function ScrollLaptop({ label, laptopCopy, phoneCopy, children }) {
  const calm = useCalm()
  const trackRef = useRef(null)
  const figureRef = useRef(null)
  const [far, setFar] = useState({ scale: 0.5, x: 0, y: 0 })

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  // Mappers, not ranges: a range goes to a native scroll timeline, which mistimes opacity.
  const recede = useTransform(scrollYProgress, transform(BEATS.recede, [0, 1], { ease: easeInOut }))
  // Geometric, so each stretch of scroll covers the same share of the distance.
  const scale = useTransform(recede, (t) => far.scale ** t)
  const x = useTransform(recede, (t) => far.x * t)
  const y = useTransform(recede, (t) => CLEAR_HEADER + (far.y - CLEAR_HEADER) * t)

  const laptopCopyOpacity = useTransform(scrollYProgress, transform(BEATS.laptopCopy, [0, 1, 1, 0]))
  const laptopCopyY = useTransform(scrollYProgress, transform(BEATS.laptopCopy, [18, 0, 0, -18]))
  const phoneOpacity = useTransform(scrollYProgress, transform(BEATS.phone, [0, 1]))
  const phoneY = useTransform(scrollYProgress, transform(BEATS.phone, ['36%', '0%']))
  const phoneRotate = useTransform(scrollYProgress, transform(BEATS.phone, [8, -3]))
  const phoneCopyOpacity = useTransform(scrollYProgress, transform(BEATS.phoneCopy, [0, 1]))
  const phoneCopyY = useTransform(scrollYProgress, transform(BEATS.phoneCopy, [18, 0]))

  // Laid out at its closest size; `far` is where it ends up once it has pulled back.
  useLayoutEffect(() => {
    const el = figureRef.current
    if (!el) return undefined
    const fit = () => {
      const wide = innerWidth >= 1024
      const width = wide ? Math.min(innerWidth * 0.54, (innerHeight - 220) * (W / H)) : Math.min(innerWidth * 0.92, innerHeight * 0.4 * (W / H))
      const scale = width / el.offsetWidth
      const centre = innerHeight * (wide ? 0.52 : 0.3)
      setFar({
        scale,
        x: wide ? innerWidth * -0.17 : 0,
        y: centre - innerHeight / 2 - ((50 - AIM) / 100) * el.offsetHeight * scale,
      })
    }
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [calm])

  if (calm) {
    return (
      <div className="mt-12 grid gap-10">
        <figure role="img" aria-label={label} className="relative mx-auto w-[min(100%,960px)]">
          <Laptop />
        </figure>
        <div className="max-w-[46ch]">{laptopCopy}</div>
        <div className="grid items-center gap-8 sm:grid-cols-[180px_1fr]">
          <div className="mx-auto w-[150px] sm:w-full">{children}</div>
          <div className="max-w-[46ch]">{phoneCopy}</div>
        </div>
      </div>
    )
  }

  return (
    <div ref={trackRef} className="relative h-[520svh]">
      <div className="sticky top-0 ml-[calc(50%-50vw)] h-[100svh] w-screen overflow-clip">
        <motion.figure
          ref={figureRef}
          role="img"
          aria-label={label}
          style={{ x, y, scale, transformOrigin: `50% ${AIM}%` }}
          className="absolute top-1/2 left-1/2 w-[calc(max(100vw,min(100svh*1.596,170vw))/0.848)] -translate-x-1/2 -translate-y-[35.3%]"
        >
          <Laptop />
        </motion.figure>

        <motion.div
          style={{ opacity: laptopCopyOpacity, y: laptopCopyY }}
          className="absolute inset-x-4 top-[56svh] lg:top-[32svh] lg:right-auto lg:left-[63vw] lg:w-[min(27vw,380px)]"
        >
          {laptopCopy}
        </motion.div>

        <motion.div
          style={{ y: phoneY, opacity: phoneOpacity, rotate: phoneRotate }}
          className="absolute right-4 bottom-[4svh] w-[112px] rounded-[16%/8%] shadow-[0_30px_40px_rgb(4_40_52/0.35)] lg:top-[24svh] lg:right-auto lg:bottom-auto lg:left-[46vw] lg:w-[clamp(120px,14vw,190px)]"
        >
          {children}
        </motion.div>

        <motion.div
          style={{ opacity: phoneCopyOpacity, y: phoneCopyY }}
          className="absolute top-[56svh] right-[144px] left-4 lg:top-[32svh] lg:right-auto lg:left-[63vw] lg:w-[min(27vw,380px)]"
        >
          {phoneCopy}
        </motion.div>
      </div>
    </div>
  )
}
