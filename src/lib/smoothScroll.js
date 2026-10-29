import Lenis from 'lenis'

let lenis = null

/**
 * Inertial page scroll. Lenis moves the real window scroll position, so
 * Motion's useScroll reads it directly. Skipped when the visitor prefers
 * reduced motion. Returns a cleanup function.
 */
export function startSmoothScroll() {
  if (typeof window === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  lenis = new Lenis({
    autoRaf: true,
    duration: 1.1,
    easing: (t) => 1 - Math.pow(1 - t, 4),
  })

  return () => {
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToY(y) {
  if (lenis) lenis.scrollTo(y, { duration: 1.4 })
  else window.scrollTo({ top: y, behavior: 'auto' })
}
