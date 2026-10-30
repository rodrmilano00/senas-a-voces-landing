import { useLayoutEffect, useRef, useState } from 'react'

// The screen is laid out at this width and scaled to the phone's real size,
// so the UI keeps its proportions at any phone size.
const SCREEN_WIDTH = 240

// Geometry from the 21st.dev "iPhone 16 Pro" mockup (designali-in): a
// 200 x 400 viewBox whose screen sits at x 14.08, y 12.81, 171.98 x 374.37.
const SCREEN = { left: '7.04%', top: '3.2%', width: '85.99%', height: '93.59%' }

/**
 * An iPhone 16 Pro: the screen content renders underneath and the titanium
 * frame, bezel and Dynamic Island are drawn over it, so the device edges are
 * the real proportions rather than a rounded box.
 */
export default function Phone({ children, className = '' }) {
  const screenRef = useRef(null)
  const [fit, setFit] = useState({ scale: 1, height: 0 })

  useLayoutEffect(() => {
    const el = screenRef.current
    if (!el) return undefined
    const ro = new ResizeObserver(() => {
      const scale = el.clientWidth / SCREEN_WIDTH
      setFit({ scale, height: el.clientHeight / scale })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className={`relative aspect-[1/2] ${className}`}>
      <div
        ref={screenRef}
        className="absolute overflow-hidden rounded-[14.3%/6.58%] bg-[#faf7ed]"
        style={SCREEN}
      >
        <div className="origin-top-left" style={{ width: SCREEN_WIDTH, height: fit.height || '100%', transform: `scale(${fit.scale})` }}>
          {children}
        </div>
        {/* Glass: a faint diagonal sheen across the display */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(255_255_255/0.18)_0%,rgb(255_255_255/0)_34%)]" />
      </div>
      <svg viewBox="0 0 200 400" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="titanio" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5b6062" />
            <stop offset="0.45" stopColor="#2c3032" />
            <stop offset="1" stopColor="#474c4e" />
          </linearGradient>
        </defs>
        <path
          fill="url(#titanio)"
          d="M196.11,128.09c0-.25-.2-.45-.45-.45-.11.04-.37.03-.69,0V36.69c0-17.84-14.46-32.31-32.31-32.31H37.48C19.63,4.39,5.17,18.85,5.17,36.69v48.99c-.3.02-.55.03-.66-.02-.25,0-.45.2-.45.45,0,0,0,17.29,0,17.290-.03.41.5.49,1.11.48v13.630c-.61,0-1.14.08-1.11.48,0,0,0,28.54,0,28.54-.03.42.5.49,1.11.48v7.95c-.61,0-1.14.08-1.11.48,0,0,0,28.54,0,28.54-.03.42.5.49,1.11.48v178.86c0,17.84,14.46,32.31,32.31,32.31h125.2c17.84,0,32.31-14.46,32.31-32.31v-188.87c.32-.02.58-.03.69.04,1.26.1.03-45.94.45-46.38ZM186.07,362.63c0,13.56-10.99,24.56-24.56,24.56H38.64c-13.56,0-24.56-10.99-24.56-24.56V37.37c0-13.56,10.99-24.56,24.56-24.56h122.87c13.56,0,24.56,10.99,24.56,24.56v325.26Z"
        />
        <path
          fill="#050708"
          d="M161.38,7.29H38.78c-16.54,0-29.95,13.41-29.95,29.95v325.52c0,16.54,13.410,29.95,29.95,29.95h122.6c16.54,0,29.95-13.41,29.95-29.95V37.24c0-16.54-13.41-29.95-29.95-29.95ZM186.07,362.57c0,13.6-11.02,24.62-24.62,24.62H38.7c-13.6,0-24.62-11.02-24.62-24.62V37.430c0-13.6,11.02-24.62,24.62-24.62h122.75c13.6,0,24.62,11.02,24.62,24.62v325.14Z"
        />
        <path fill="#000" d="M119.61,33.86h-38.93c-10.48-.18-10.5-15.78,0-15.96,0,0,38.93,0,38.93,0,4.41,0,7.98,3.57,7.98,7.98,0,4.41-3.57,7.98-7.98,7.98Z" />
        <path fill="#0a1236" d="M118.78,29.21c-4.32.06-4.32-6.73,0-6.66,4.32-.06,4.32,6.73,0,6.66Z" />
      </svg>
    </div>
  )
}
