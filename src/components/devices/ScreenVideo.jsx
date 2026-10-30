import { useEffect, useRef } from 'react'
import { useCalm } from '../../lib/perf'

/**
 * A screen recording that plays only while it is on screen. Reduced motion
 * gets the still poster, since the loop is illustrative, not essential.
 */
export default function ScreenVideo({ src, poster, className = '' }) {
  const ref = useRef(null)
  const still = useCalm()

  useEffect(() => {
    const video = ref.current
    if (!video || still) return undefined
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause()),
      { threshold: 0.15 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [still])

  if (still) return <img src={poster} alt="" className={className} />

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      className={className}
    />
  )
}
