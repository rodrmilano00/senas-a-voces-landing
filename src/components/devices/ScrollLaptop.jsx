import { useLayoutEffect, useRef, useState } from 'react'
import { easeInOut, motion, transform, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import { LAPTOP, LAPTOP_TURN_FRAMES } from '../../lib/media'
import ScreenVideo from './ScreenVideo'
import { useFrameScrub } from './useFrameScrub'

const W = 2200
const H = 1747

// The screen inside the render, with a hair of bleed under its edges.
const SCREEN = { left: '7.5%', top: '1.75%', width: '85%', height: '67.16%' }
// The camera pivots on the screen's centre, this far down the render.
const AIM = 35.3
// Close up, the screen sits this far down so the header band doesn't crop it.
const CLEAR_HEADER = 38
// The header's height, plus breathing room, for the stacked phone layout.
const HEADER = 84

// The turn's frames, placed so their first frame lands exactly on the render.
const TURN = { W: 1600, H: 1200, style: { left: '-19.44%', top: '-13.16%', width: '138.89%', height: '131.2%' } }

// Scroll progress of each beat in the pinned scene.
const BEATS = {
  recede: [0.03, 0.24],
  laptopCopy: [0.23, 0.29, 0.4, 0.44],
  phone: [0.39, 0.48, 0.62, 0.68],
  phoneCopy: [0.46, 0.52, 0.62, 0.66],
  turnIn: [0.64, 0.68],
  turn: [0.68, 0.86],
  pathCopy: [0.84, 0.9],
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
 * back to reveal the laptop and its explanation, the phone comes in with its
 * own, then the camera turns around the same laptop to the lesson path. The
 * dashboard is live video under a render with a transparent screen; the turn is
 * a frame sequence whose first frame matches that render, so the handover is
 * only the screen changing. Calm (lite or reduced motion) stacks the same parts
 * at rest, unpinned.
 */
export default function ScrollLaptop({ label, laptopCopy, phoneCopy, pathLabel, pathCopy, children }) {
  const calm = useCalm()
  const trackRef = useRef(null)
  const figureRef = useRef(null)
  const [far, setFar] = useState({ scale: 0.5, x: 0, y: 0, wide: true, copyTop: 0 })

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  // Mappers, not ranges: a range goes to a native scroll timeline, which mistimes opacity.
  const recede = useTransform(scrollYProgress, transform(BEATS.recede, [0, 1], { ease: easeInOut }))
  // Geometric, so each stretch of scroll covers the same share of the distance.
  const scale = useTransform(recede, (t) => far.scale ** t)
  const x = useTransform(recede, (t) => far.x * t)
  const y = useTransform(recede, (t) => CLEAR_HEADER + (far.y - CLEAR_HEADER) * t)

  const laptopCopyOpacity = useTransform(scrollYProgress, transform(BEATS.laptopCopy, [0, 1, 1, 0]))
  const laptopCopyY = useTransform(scrollYProgress, transform(BEATS.laptopCopy, [18, 0, 0, -18]))
  const phoneOpacity = useTransform(scrollYProgress, transform(BEATS.phone, [0, 1, 1, 0]))
  const phoneY = useTransform(scrollYProgress, transform(BEATS.phone, ['36%', '0%', '0%', '24%']))
  const phoneRotate = useTransform(scrollYProgress, transform(BEATS.phone, [8, -3, -3, 3]))
  const phoneCopyOpacity = useTransform(scrollYProgress, transform(BEATS.phoneCopy, [0, 1, 1, 0]))
  const phoneCopyY = useTransform(scrollYProgress, transform(BEATS.phoneCopy, [18, 0, 0, -18]))
  // On phones the laptop steps back while the phone holds the middle of the screen.
  const laptopOpacity = useTransform(scrollYProgress, transform(BEATS.phone, far.wide ? [1, 1, 1, 1] : [1, 0.1, 0.1, 1]))
  const turnOpacity = useTransform(scrollYProgress, transform(BEATS.turnIn, [0, 1]))
  // The three-quarter view runs wider than a phone, so it eases in from the edge.
  const turnScale = useTransform(scrollYProgress, transform(BEATS.turn, [1, far.wide ? 1 : 0.86]))
  const turnX = useTransform(scrollYProgress, transform(BEATS.turn, ['0%', far.wide ? '0%' : '-6%']))
  // Gone the moment the frames fully cover it, so it never shows behind the turn.
  const frontalOpacity = useTransform(scrollYProgress, (p) => (p < BEATS.turnIn[1] ? 1 : 0))
  const pathCopyOpacity = useTransform(scrollYProgress, transform(BEATS.pathCopy, [0, 1]))
  const pathCopyY = useTransform(scrollYProgress, transform(BEATS.pathCopy, [18, 0]))

  const frameAt = useTransform(scrollYProgress, BEATS.turn, [0, LAPTOP_TURN_FRAMES.length - 1])
  const canvasRef = useFrameScrub({ frames: LAPTOP_TURN_FRAMES, frameAt, width: TURN.W, height: TURN.H, calm, trackRef })

  // Laid out at its closest size; `far` is where it ends up once it has pulled back.
  useLayoutEffect(() => {
    const el = figureRef.current
    if (!el) return undefined
    const fit = () => {
      const wide = innerWidth >= 1024
      const width = wide ? Math.min(innerWidth * 0.54, (innerHeight - 220) * (W / H)) : Math.min(innerWidth * 0.92, innerHeight * 0.36 * (W / H))
      const height = width * (H / W)
      const scale = width / el.offsetWidth
      // Phones stack: the laptop just under the header, the text right beneath it.
      const centre = wide ? innerHeight * 0.52 : HEADER + height / 2
      setFar({
        scale,
        x: wide ? innerWidth * -0.17 : 0,
        y: centre - innerHeight / 2 - ((50 - AIM) / 100) * el.offsetHeight * scale,
        wide,
        copyTop: HEADER + height + 32,
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
        <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr]">
          <img
            src={LAPTOP_TURN_FRAMES[LAPTOP_TURN_FRAMES.length - 1]}
            alt={pathLabel}
            width={TURN.W}
            height={TURN.H}
            loading="lazy"
            className="block w-full"
          />
          {pathCopy}
        </div>
      </div>
    )
  }

  return (
    <div ref={trackRef} className="relative mt-[clamp(32px,4vw,56px)] h-[640svh] lg:h-[780svh]">
      <div
        className="sticky top-0 ml-[calc(50%-50vw)] h-[100svh] w-screen overflow-clip"
        style={{ '--copy-top': `${far.copyTop}px` }}
      >
        <motion.figure
          ref={figureRef}
          role="img"
          aria-label={`${label}. ${pathLabel}`}
          style={{ x, y, scale, opacity: laptopOpacity, transformOrigin: `50% ${AIM}%` }}
          className="absolute top-1/2 left-1/2 w-[calc(max(100vw,min(100svh*1.596,140vw))/0.848)] -translate-x-1/2 -translate-y-[35.3%]"
        >
          <motion.div style={{ opacity: frontalOpacity }}>
            <Laptop />
          </motion.div>
          <motion.canvas
            ref={canvasRef}
            width={TURN.W}
            height={TURN.H}
            style={{ ...TURN.style, opacity: turnOpacity, x: turnX, scale: turnScale }}
            className="absolute max-w-none"
          />
        </motion.figure>

        <motion.div
          style={{ opacity: laptopCopyOpacity, y: laptopCopyY }}
          className="absolute inset-x-4 top-[var(--copy-top)] lg:top-[32svh] lg:right-auto lg:left-[63vw] lg:w-[min(27vw,380px)]"
        >
          {laptopCopy}
        </motion.div>

        <motion.div
          style={{ y: phoneY, opacity: phoneOpacity, rotate: phoneRotate }}
          className="absolute top-[84px] left-1/2 w-[min(44vw,26svh)] -translate-x-1/2 rounded-[16%/8%] shadow-[0_30px_40px_rgb(4_40_52/0.35)] lg:top-[24svh] lg:left-[46vw] lg:w-[clamp(120px,14vw,190px)] lg:translate-x-0"
        >
          {children}
        </motion.div>

        <motion.div
          style={{ opacity: phoneCopyOpacity, y: phoneCopyY }}
          className="absolute inset-x-6 top-[calc(104px+min(88vw,52svh))] text-center lg:top-[32svh] lg:right-auto lg:left-[63vw] lg:w-[min(27vw,380px)] lg:text-left"
        >
          {phoneCopy}
        </motion.div>

        <motion.div
          style={{ opacity: pathCopyOpacity, y: pathCopyY }}
          className="absolute inset-x-4 top-[var(--copy-top)] lg:top-[24svh] lg:right-auto lg:left-[63vw] lg:w-[min(27vw,380px)]"
        >
          {pathCopy}
        </motion.div>
      </div>
    </div>
  )
}
