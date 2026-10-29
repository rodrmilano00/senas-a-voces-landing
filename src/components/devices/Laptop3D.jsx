import { motion, useTransform } from 'motion/react'
import { LOGO } from '../../lib/media'
import ScreenVideo from './ScreenVideo'

const KEY_ROWS = [14, 14, 13, 12]

/**
 * A laptop built in real CSS 3D: a keyboard deck lying toward the viewer and
 * a lid hinged on its back edge. `progress` (0 to 1) drives the whole
 * entrance: the lid opens from closed, then the device turns from a
 * three-quarter view to face the visitor. `turn` sets which side it starts
 * from (1 = from the right, -1 = from the left).
 */
export default function Laptop3D({ progress, src, poster, label, turn = 1, className = '' }) {
  const lid = useTransform(progress, [0.05, 0.6, 1], [-88, 4, 4])
  const tiltX = useTransform(progress, [0, 1], [-34, -13])
  const tiltY = useTransform(progress, [0, 1], [26 * turn, 4 * turn])
  const scale = useTransform(progress, [0, 1], [0.82, 1])
  const glow = useTransform(progress, [0.35, 0.6], [0, 1])

  return (
    <figure role="img" aria-label={label} className={`relative [perspective:2200px] ${className}`}>
      {/* The deck projects toward the viewer, so the stage reserves room below the lid */}
      <div className="relative pb-[34%]">
        <motion.div
          style={{ rotateX: tiltX, rotateY: tiltY, scale }}
          className="relative mx-auto w-[86%] [transform-style:preserve-3d]"
        >
          {/* Lid: hinged on its bottom edge */}
          <motion.div
            style={{ rotateX: lid }}
            className="relative origin-bottom [transform-style:preserve-3d]"
          >
            <div className="rounded-t-[16px] rounded-b-[4px] bg-[#0f1518] p-[1.8%] pb-[2.6%] [backface-visibility:hidden]">
              <div className="relative overflow-hidden rounded-[5px] bg-[#faf7ed]">
                <ScreenVideo src={src} poster={poster} className="block aspect-[1724/1080] w-full object-cover object-top" />
                <motion.div
                  aria-hidden="true"
                  style={{ opacity: glow }}
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.16)_0%,transparent_40%)]"
                />
              </div>
            </div>
            {/* Back of the lid, seen while it is still closed */}
            <div className="absolute inset-0 grid place-items-center rounded-t-[16px] rounded-b-[4px] bg-[linear-gradient(160deg,#dfe5e7,#b9c3c6)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <img src={LOGO.horizontal} alt="" className="w-[30%] opacity-80 [transform:scaleX(-1)]" />
            </div>
          </motion.div>

          {/* Deck: lies flat toward the viewer from the hinge */}
          <div className="absolute top-full left-0 aspect-[1/0.66] w-full origin-top rounded-b-[18px] bg-[linear-gradient(180deg,#d6dcde,#b8c1c4)] [transform:rotateX(90deg)] [transform-style:preserve-3d]">
            <div className="mx-auto mt-[4%] grid w-[88%] gap-[1.2%]">
              {KEY_ROWS.map((n, r) => (
                <div key={r} className="flex gap-[1%]">
                  {Array.from({ length: n }, (_, k) => (
                    <span key={k} className="aspect-square flex-1 rounded-[3px] bg-[#2b3337] shadow-[inset_0_-2px_0_rgb(0_0_0/0.35)]" />
                  ))}
                </div>
              ))}
              <div className="mx-auto mt-[1%] h-[3.2vw] max-h-7 w-[46%] rounded-[3px] bg-[#2b3337]" />
            </div>
            <div className="mx-auto mt-[4%] aspect-[1.6/1] w-[34%] rounded-[8px] bg-[#c4ccce] shadow-[inset_0_1px_2px_rgb(0_0_0/0.15)]" />
            {/* Front edge, so the deck reads as a slab rather than a sheet */}
            <div className="absolute inset-x-0 bottom-0 h-[3%] origin-bottom rounded-b-[18px] bg-[#9aa5a9] [transform:rotateX(-90deg)]" />
          </div>
        </motion.div>
      </div>
    </figure>
  )
}
