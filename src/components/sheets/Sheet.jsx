import BackdropShapes from '../BackdropShapes'
import WaveLines from '../WaveLines'
import { Reveal, TitleReveal } from '../Reveal'

const TONES = {
  // Cream chapters paint no ground of their own: the page's cream runs under all of
  // them, so the backdrop circles and waves flow across chapter edges uncut.
  cream: 'text-fg',
  band: 'overflow-clip bg-band text-band-fg',
}

/**
 * One chapter of the page, full bleed on the shared cream ground, with the
 * portfolio cover's cyan wave lines in two corners and drifting backdrop
 * circles behind. `title` is the chapter name, set the way the portfolio sets
 * its page titles.
 */
export default function Sheet({ id, title, intro, tone = 'cream', variant = 0, className = '', children, labelledBy }) {
  const headingId = labelledBy ?? (id ? `${id}-titulo` : undefined)

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`relative ${TONES[tone]} ${className}`}
    >
      <BackdropShapes variant={variant} />
      <WaveLines className="absolute top-[-72px] right-[-88px] w-[clamp(200px,24vw,340px)] text-cyan/45" />
      <WaveLines className="absolute bottom-[-88px] left-[-88px] w-[clamp(200px,22vw,320px)] rotate-180 text-cyan/35" />
      <div className="container-page relative py-[clamp(88px,10vw,144px)]">
        {title && (
          <header className="max-w-[760px]">
            <TitleReveal id={headingId} text={title} className="text-[clamp(40px,5.6vw,80px)] text-petrol" />
            {intro && (
              <Reveal as="p" delay={0.2} className="mt-6 max-w-[56ch] text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-muted">
                {intro}
              </Reveal>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
