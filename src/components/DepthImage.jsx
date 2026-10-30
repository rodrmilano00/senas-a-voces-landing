import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useCalm } from '../lib/perf'

/** A photo that drifts inside its frame, slower than the page around it. */
export default function DepthImage({ src, alt, className = '', imgClassName = '' }) {
  const ref = useRef(null)
  const still = useCalm()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // The image is 116% of the frame tall, so it can travel 13% of its own height.
  const y = useTransform(scrollYProgress, [0, 1], still ? ['-6.5%', '-6.5%'] : ['-13%', '0%'])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} loading="lazy" style={{ y }} className={`h-[116%] w-full object-cover ${imgClassName}`} />
    </div>
  )
}
