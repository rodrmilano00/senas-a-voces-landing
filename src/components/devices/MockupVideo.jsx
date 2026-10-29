import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'

// Safari plays WebM but drops its alpha channel, so it gets the MP4 baked on cream.
const SAFARI = typeof navigator !== 'undefined' && /^((?!chrome|android|crios|fxios|edg).)*safari/i.test(navigator.userAgent)

/**
 * A laptop shot from the mockup reel with the Academy recording composited
 * on its screen and the backdrop cut away. Plays while in view; fetched only
 * as the visitor nears it. Scroll adds a slow push-in on top of the shot's
 * own camera move. Calm (lite or reduced motion) shows the still poster.
 */
export default function MockupVideo({ webm, mp4, poster, label, className = '' }) {
  const calm = useCalm()
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [near, setNear] = useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], calm ? [1, 1] : [0.9, 1.06])
  const y = useTransform(scrollYProgress, [0, 1], calm ? [0, 0] : [40, -40])

  useEffect(() => {
    const el = ref.current
    if (!el || calm) return undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setNear(true)
        const v = videoRef.current
        if (!v) return
        if (entry.intersectionRatio > 0.15) v.play().catch(() => {})
        else v.pause()
      },
      { rootMargin: '600px 0px', threshold: [0, 0.15] },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [calm, near])

  const bake = SAFARI ? 'mix-blend-multiply dark:mix-blend-normal' : ''

  return (
    <figure ref={ref} role="img" aria-label={label} className={`relative ${className}`}>
      <motion.div style={{ scale, y }} className={SAFARI ? 'dark:rounded-[6px] dark:bg-[#faf7ed]' : ''}>
        {calm || !near ? (
          <img src={poster} alt="" width="1280" height="720" className="block w-full" />
        ) : (
          <video
            ref={videoRef}
            poster={poster}
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className={`block w-full ${bake}`}
          >
            {SAFARI ? <source src={mp4} type="video/mp4" /> : <source src={webm} type="video/webm" />}
          </video>
        )}
      </motion.div>
    </figure>
  )
}
