import { useLayoutEffect, useRef, useState } from 'react'

// The screen is laid out at this width and scaled to the phone's real size,
// so the UI keeps its proportions from a 150px phone to a 260px one.
const SCREEN_WIDTH = 240

// Phone chassis adapted from 21st.dev "Phone Scroll Hero" (ruixen.ui), retokened
// for the Señas a Voces palette. The camera island stays black in both themes:
// it is a hole in the glass, not a themed surface.
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
    <div className={`relative ${className}`}>
      <span aria-hidden="true" className="absolute top-[16%] -left-[3px] h-7 w-[3px] rounded-l-sm bg-[#1b2a30]" />
      <span aria-hidden="true" className="absolute top-[24%] -left-[3px] h-11 w-[3px] rounded-l-sm bg-[#1b2a30]" />
      <span aria-hidden="true" className="absolute top-[22%] -right-[3px] h-14 w-[3px] rounded-r-sm bg-[#1b2a30]" />
      <div className="aspect-[9/19.5] rounded-[17%/8%] bg-[#121b1f] p-[3%] shadow-[0_2px_4px_rgb(4_40_52/0.25),0_30px_60px_-24px_rgb(4_40_52/0.55)] ring-1 ring-white/10">
        <div ref={screenRef} className="relative h-full w-full overflow-hidden rounded-[15%/7%] bg-[#faf7ed]">
          <div
            className="origin-top-left"
            style={{ width: SCREEN_WIDTH, height: fit.height || '100%', transform: `scale(${fit.scale})` }}
          >
            <div aria-hidden="true" className="absolute top-2 left-1/2 z-20 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
