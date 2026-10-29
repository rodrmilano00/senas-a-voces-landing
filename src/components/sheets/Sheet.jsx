import BackdropShapes from '../BackdropShapes'
import WaveLines from '../WaveLines'

const TONES = {
  cream: 'bg-bg text-fg',
  band: 'bg-band text-band-fg',
}

/**
 * One page of the portfolio: a rounded sheet with the cover's cyan wave lines
 * tucked into a corner. `title` is the chapter name, set the way the
 * portfolio sets its page titles.
 */
export default function Sheet({ id, title, intro, tone = 'cream', variant = 0, className = '', children, labelledBy }) {
  const headingId = labelledBy ?? (id ? `${id}-titulo` : undefined)

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`relative mt-2 overflow-clip rounded-[22px] shadow-[0_-1px_0_rgb(4_76_98/0.06),0_-24px_48px_-28px_rgb(4_40_52/0.45)] sm:mt-3 ${TONES[tone]} ${className}`}
    >
      <BackdropShapes variant={variant} />
      {/* The portfolio cover's wave lines, in two opposite corners of every sheet */}
      <WaveLines className="absolute top-[-72px] right-[-88px] w-[clamp(200px,24vw,340px)] text-cyan/45" />
      <WaveLines className="absolute bottom-[-88px] left-[-88px] w-[clamp(200px,22vw,320px)] rotate-180 text-cyan/35" />
      <div className="container-page relative pt-[clamp(56px,6vw,84px)] pb-[clamp(72px,9vw,128px)]">
        {title && (
          <header className="max-w-[760px]">
            <h2 id={headingId} className="text-[clamp(40px,5.6vw,80px)] text-petrol dark:text-fg">
              {title}
            </h2>
            {intro && (
              <p className="mt-6 max-w-[56ch] text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-muted">{intro}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
