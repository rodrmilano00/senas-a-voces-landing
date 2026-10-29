import { Children, useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, useMotionValue } from 'motion/react'
import { CoverProgress } from './coverProgress'

/**
 * The portfolio, paged. Each child is a sheet: it scrolls normally until its
 * bottom edge reaches the viewport, then sticks there while the next sheet
 * slides over it, receding slightly as it is covered.
 */
export default function SheetStack({ children }) {
  const sheets = Children.toArray(children)
  return (
    <div className="relative">
      {sheets.map((sheet, i) => (
        <SheetSlot key={sheet.key ?? i} index={i} last={i === sheets.length - 1}>
          {sheet}
        </SheetSlot>
      ))}
    </div>
  )
}

function SheetSlot({ children, index, last }) {
  const slotRef = useRef(null)
  const sentinelRef = useRef(null)
  const [top, setTop] = useState(0)
  const still = useReducedMotion()

  // A sheet taller than the viewport sticks at its own bottom edge.
  useLayoutEffect(() => {
    const el = slotRef.current
    if (!el) return undefined
    const measure = () => setTop(Math.min(0, window.innerHeight - el.offsetHeight))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sentinelRef, offset: ['start end', 'start start'] })
  const none = useMotionValue(0)
  const progress = last ? none : scrollYProgress

  const scale = useTransform(progress, [0, 1], [1, still ? 1 : 0.94])
  // Recede toward the sand desk the sheets rest on, never toward gray.
  const dim = useTransform(progress, [0, 1], [0, still ? 0 : 0.55])

  return (
    <>
      <div ref={slotRef} data-sheet-slot={index} className="sticky px-2 sm:px-3" style={{ top, zIndex: index + 1 }}>
        <motion.div style={{ scale }} className="relative origin-[50%_100%] will-change-transform">
          <CoverProgress.Provider value={progress}>{children}</CoverProgress.Provider>
          {!last && (
            <motion.div
              aria-hidden="true"
              style={{ opacity: dim }}
              className="pointer-events-none absolute inset-0 rounded-[22px] bg-desk"
            />
          )}
        </motion.div>
      </div>
      <div ref={sentinelRef} data-sheet-end={index} aria-hidden="true" className="h-0" />
    </>
  )
}
