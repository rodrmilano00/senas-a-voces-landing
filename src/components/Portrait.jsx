import { motion } from 'motion/react'

/**
 * A creator portrait on its colored offset block, as in the portfolio's
 * "Los creadores" page. `photoY` and `blockY` are optional motion values: the
 * block trailing the photo is what reads as depth.
 */
export default function Portrait({ src, alt, tone, photoY, blockY, className = '', imgClassName = '', loading }) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        aria-hidden="true"
        style={{ y: blockY, backgroundColor: tone }}
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[20px] sm:translate-x-4 sm:translate-y-4"
      />
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        style={{ y: photoY }}
        className={`relative block w-full rounded-[20px] object-cover ${imgClassName}`}
      />
    </div>
  )
}
