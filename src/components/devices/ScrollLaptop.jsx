import { useEffect, useRef } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'

const W = 1120
const H = 804

// Loading order: ends first, then ever-finer strides, so a fast scroll still
// has a nearby frame to show while the rest arrive.
function loadOrder(n) {
  const seen = new Set()
  const order = []
  const add = (i) => { if (!seen.has(i)) { seen.add(i); order.push(i) } }
  add(0)
  add(n - 1)
  for (let s = 32; s >= 1; s /= 2) for (let i = 0; i < n; i += s) add(i)
  return order
}

/**
 * The After Effects laptop opening, scrubbed by scroll: the stage pins while
 * the lid opens, the screen wakes on the Academy lesson and lands on the
 * validated sign. Frames are fetched as the visitor nears it and drawn to a
 * canvas. Calm (lite or reduced motion) shows the final frame, unpinned.
 * `children` ride in front (the phone), revealed over the second half.
 */
export default function ScrollLaptop({ frames, label, children }) {
  const calm = useCalm()
  const trackRef = useRef(null)
  const canvasRef = useRef(null)
  const images = useRef([])
  const wanted = useRef(0)

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] })
  // The last stretch holds on the validated sign before the stage lets go.
  const frameAt = useTransform(scrollYProgress, [0, 0.82], [0, frames.length - 1], { clamp: true })
  const frontY = useTransform(scrollYProgress, [0.35, 0.8], ['40%', '0%'])
  const frontOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1])
  const frontRotate = useTransform(scrollYProgress, [0.35, 0.9], [10, -3])

  const draw = (target) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const imgs = images.current
    // nearest frame that has arrived
    for (let d = 0; d < frames.length; d++) {
      for (const i of [target - d, target + d]) {
        const im = imgs[i]
        if (im && im.complete && im.naturalWidth) {
          ctx.clearRect(0, 0, W, H)
          ctx.drawImage(im, 0, 0, W, H)
          return
        }
      }
    }
  }

  useMotionValueEvent(frameAt, 'change', (v) => {
    wanted.current = Math.round(v)
    draw(wanted.current)
  })

  useEffect(() => {
    const el = trackRef.current
    if (!el || calm) return undefined
    let started = false
    const start = () => {
      if (started) return
      started = true
      for (const i of loadOrder(frames.length)) {
        const im = new Image()
        im.decoding = 'async'
        im.onload = () => { if (Math.abs(i - wanted.current) <= 2 || i === 0) draw(wanted.current) }
        im.src = frames[i]
        images.current[i] = im
      }
    }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { start(); io.disconnect() } }, { rootMargin: '1500px 0px' })
    io.observe(el)
    return () => io.disconnect()
    // draw reads refs only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calm, frames])

  if (calm) {
    return (
      <figure role="img" aria-label={label} className="relative mx-auto w-[min(100%,1080px)]">
        <img src={frames[frames.length - 1]} alt="" width={W} height={H} className="block w-full" />
        {children && <div className="absolute right-0 bottom-[4%] w-[clamp(96px,15vw,200px)] sm:right-[2%]">{children}</div>}
      </figure>
    )
  }

  return (
    <div ref={trackRef} className="relative h-[240svh]">
      <div className="sticky top-0 flex h-[100svh] items-center">
        <figure role="img" aria-label={label} className="relative mx-auto w-[min(100%,1080px,calc((100svh_-_96px)*1.393))]">
          <canvas ref={canvasRef} width={W} height={H} className="block h-auto w-full" />
          {children && (
            <motion.div
              style={{ y: frontY, opacity: frontOpacity, rotate: frontRotate }}
              className="absolute right-0 bottom-[4%] w-[clamp(96px,15vw,200px)] drop-shadow-[0_30px_40px_rgb(4_40_52/0.35)] sm:right-[2%]"
            >
              {children}
            </motion.div>
          )}
        </figure>
      </div>
    </div>
  )
}
