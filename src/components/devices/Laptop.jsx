import ScreenVideo from './ScreenVideo'

/**
 * Laptop chassis drawn in CSS around a real screen recording of the platform
 * (recorded at 1724x1080). The lid and base are separate so a parent can tilt
 * the lid in 3D for the scroll scene.
 */
export default function Laptop({ src, poster, label, className = '' }) {
  return (
    <figure className={`relative ${className}`} role="img" aria-label={label}>
      <div className="rounded-t-[18px] rounded-b-[6px] bg-[#101619] p-[1.6%] pb-[2.2%] shadow-[0_2px_4px_rgb(4_40_52/0.2),0_40px_80px_-30px_rgb(4_40_52/0.55)] ring-1 ring-white/10">
        <div aria-hidden="true" className="absolute top-[0.9%] left-1/2 h-[1.3%] w-[9%] -translate-x-1/2 rounded-b-md bg-black" />
        <div className="relative overflow-hidden rounded-[6px] bg-[#faf7ed]">
          <ScreenVideo src={src} poster={poster} className="block aspect-[1724/1080] w-full object-cover object-top" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.14)_0%,transparent_38%)]"
          />
        </div>
      </div>
      <div aria-hidden="true" className="relative mx-[-6%] h-[3.2%] min-h-2.5 rounded-b-[14px] bg-gradient-to-b from-[#cfd6d8] to-[#8e9a9e] shadow-[0_18px_30px_-18px_rgb(4_40_52/0.6)]">
        <span className="absolute top-0 left-1/2 h-[45%] w-[14%] -translate-x-1/2 rounded-b-md bg-[#9aa6aa]" />
      </div>
    </figure>
  )
}
