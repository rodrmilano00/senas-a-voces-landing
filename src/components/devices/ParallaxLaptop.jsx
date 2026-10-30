import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import { useFrameScrub } from './useFrameScrub'

const W = 1280
const H = 720

/**
 * A close-up of the laptop on its own depth: scroll scrubs the camera and the
 * recording on screen while the laptop travels faster than the backdrop behind
 * it. Calm (lite or reduced motion) shows the final frame at rest.
 */
export default function ParallaxLaptop({ frames, label, className = '' }) {
  const calm = useCalm()
  const trackRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start end', 'end start'] })
  const frameAt = useTransform(scrollYProgress, [0.1, 0.75], [0, frames.length - 1])
  const backY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])
  const laptopY = useTransform(scrollYProgress, [0, 1], ['13%', '-5%'])

  const canvasRef = useFrameScrub({ frames, frameAt, width: W, height: H, calm, trackRef })

  return (
    <figure
      ref={trackRef}
      role="img"
      aria-label={label}
      className={`relative aspect-video overflow-hidden rounded-[20px] bg-[#9fbcc3] ${className}`}
    >
      <motion.div
        style={calm ? undefined : { y: backY }}
        aria-hidden="true"
        className="absolute -inset-y-[8%] inset-x-0 bg-[linear-gradient(135deg,#d2eff6_0%,#9fbcc3_55%,#6e878e_100%)]"
      >
        <span className="absolute top-[12%] -left-[6%] aspect-square w-[34%] rounded-full bg-white/25" />
        <span className="absolute -right-[4%] bottom-[10%] aspect-square w-[24%] rounded-full bg-[#044c62]/15" />
      </motion.div>
      {calm ? (
        <img src={frames[frames.length - 1]} alt="" width={W} height={H} className="relative block w-full" />
      ) : (
        <motion.canvas ref={canvasRef} width={W} height={H} style={{ y: laptopY }} className="relative block h-auto w-full" />
      )}
    </figure>
  )
}
