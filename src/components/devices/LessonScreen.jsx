import ScreenVideo from './ScreenVideo'
import video from '../../assets/plataforma/telefono-leccion.mp4'
import poster from '../../assets/plataforma/telefono-leccion.jpg'

const STEPS = 12
const DONE = 4
// The clip stacks the interpreter (540px) over the student's camera (374px).
const SPLIT = (540 / 914) * 100

/**
 * The Academy lesson "Abril" at phone width: header and progress rebuilt in
 * the platform's own UI, live recording of the interpreter and of the
 * student's hand tracking underneath.
 */
export default function LessonScreen() {
  return (
    <div className="flex h-full flex-col bg-[#faf7ed] px-3 pt-9 pb-3 text-[#062f3b]" aria-hidden="true">
      <div className="flex items-center justify-between px-0.5">
        <p className="font-display text-[18px] leading-none font-bold">
          Explora y <span className="text-[#03657f]">aprende</span>
        </p>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#044c62] text-[10px] font-bold text-white">Ma</span>
      </div>
      <div className="mt-3 flex items-baseline justify-between px-0.5">
        <span className="font-display text-[14px] font-bold tracking-wide">ABRIL</span>
        <span className="text-[9px] font-bold text-[#45646c]">4/12 señas</span>
      </div>
      <div className="mt-1.5 flex justify-between px-0.5">
        {Array.from({ length: STEPS }, (_, i) => (
          <span
            key={i}
            className={`h-[11px] w-[11px] rounded-full ${i < DONE ? 'bg-[#044c62]' : 'ring-1 ring-[#044c62]/25 ring-inset'}`}
          />
        ))}
      </div>

      <div className="relative mt-3 flex-1 overflow-hidden rounded-xl bg-white">
        <ScreenVideo src={video} poster={poster} className="h-full w-full object-cover" />
        <span className="absolute inset-x-0 h-1.5 bg-[#faf7ed]" style={{ top: `calc(${SPLIT}% - 3px)` }} />
        <span className="absolute top-2 left-2 rounded-md bg-white/90 px-2 py-0.5 text-[9px] font-bold">Intérprete</span>
        <span
          className="absolute left-2 rounded-md bg-white/90 px-2 py-0.5 text-[9px] font-bold"
          style={{ top: `calc(${SPLIT}% + 8px)` }}
        >
          Tu cámara
        </span>
        <span className="absolute inset-x-2 bottom-2 rounded-md bg-[#044c62]/90 px-2 py-1 text-[9px] font-bold text-white">
          Detectando…
        </span>
      </div>
    </div>
  )
}
