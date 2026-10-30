import { useRef } from 'react'
import { useScroll, useTransform } from 'motion/react'
import { useCalm } from '../../lib/perf'
import { TEAM } from '../../lib/content'
import { TEAM_PHOTOS } from '../../lib/media'
import Sheet from './Sheet'
import Portrait from '../Portrait'
import { Reveal } from '../Reveal'

function Creator({ member, photo, index }) {
  const ref = useRef(null)
  const still = useCalm()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // The colored block trails its photo, so the pair separates as it passes.
  const blockY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [-6, 6])

  return (
    <li ref={ref} className={index % 2 ? 'lg:mt-12' : ''}>
      <Portrait
        src={photo}
        alt={`${member.name} haciendo una seña con la mano`}
        tone={member.tone}
        blockY={blockY}
        loading="lazy"
        className="mr-3 mb-3 max-w-[260px] sm:mr-4 sm:mb-4"
        imgClassName="aspect-[4/5] object-[48%_40%]"
      />
      <Reveal delay={0.08 + (index % 4) * 0.08} className="mt-5">
        <h3 className="text-[clamp(24px,2vw,28px)] text-petrol dark:text-fg">{member.name}</h3>
        <p className="mt-2 font-bold text-fg">{member.role}</p>
        <p className="mt-2 max-w-[34ch] text-[15px] leading-[1.55] text-muted">{member.bio}</p>
        <p className="mt-3 text-sm leading-snug text-muted">{member.school}</p>
      </Reveal>
    </li>
  )
}

export default function CreatorsSheet() {
  return (
    <Sheet
      id="creadores"
      variant={0}
      title="Los creadores"
      intro="Estudiantes de Ingeniería en Tecnologías Computacionales y Mecatrónica del Tec de Monterrey y la Universidad de Sonora. Software, hardware y diseño en un mismo equipo."
    >
      <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Creator key={m.name} member={m} photo={TEAM_PHOTOS[i]} index={i} />
        ))}
      </ul>
    </Sheet>
  )
}
