import { useEffect, useRef } from 'react'
import { useMotionValueEvent } from 'motion/react'

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
 * Scrubs an image sequence on a canvas from a motion value. Frames are fetched
 * as `trackRef` nears the view, and the nearest arrived frame stands in until
 * the wanted one lands. Returns the canvas ref.
 */
export function useFrameScrub({ frames, frameAt, width, height, calm, trackRef }) {
  const canvasRef = useRef(null)
  const images = useRef([])
  const wanted = useRef(0)

  const draw = (target) => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const imgs = images.current
    // nearest frame that has arrived
    for (let d = 0; d < frames.length; d++) {
      for (const i of [target - d, target + d]) {
        const im = imgs[i]
        if (im && im.complete && im.naturalWidth) {
          ctx.clearRect(0, 0, width, height)
          ctx.drawImage(im, 0, 0, width, height)
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

  return canvasRef
}
