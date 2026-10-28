import { useRef } from 'react'
import { useReducedMotion, useScroll, useTransform } from 'motion/react'
import { TEAM } from '../../lib/content'
import { TEAM_PHOTOS } from '../../lib/media'
import Sheet from './Sheet'
import Portrait from '../Portrait'

function Creator({ member, photo, index }) {
  const ref = useRef(null)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // The colored block trails its photo, so the pair separates as it passes.
  const blockY = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [-28, 28])

  return (
    <li ref={ref} className={`grid gap-7 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] sm:items-end ${index % 2 ? 'lg:mt-20' : ''}`}>
      <Portrait
        src={photo}
        alt={`${member.name} haciendo una seña con la mano`}
        tone={member.tone}
        blockY={blockY}
        loading="lazy"
        className="mr-4 mb-4 sm:mr-5 sm:mb-5"
        imgClassName="aspect-[4/5] object-[48%_40%]"
      />
      <div className="pb-2">
        <h3 className="text-[clamp(28px,2.6vw,36px)] text-petrol dark:text-fg">{member.name}</h3>
        <p className="mt-2 font-bold text-fg">{member.role}</p>
        <p className="mt-3 max-w-[36ch] leading-[1.6] text-muted">{member.bio}</p>
        <p className="mt-4 text-sm leading-snug text-muted">{member.school}</p>
      </div>
    </li>
  )
}

export default function CreatorsSheet() {
  return (
    <Sheet
      id="creadores"
      title="Los creadores"
      intro="Estudiantes de Ingeniería en Tecnologías Computacionales y Mecatrónica del Tec de Monterrey y la Universidad de Sonora. Software, hardware y diseño en un mismo equipo."
    >
      <ul className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2 lg:gap-y-6">
        {TEAM.map((m, i) => (
          <Creator key={m.name} member={m} photo={TEAM_PHOTOS[i]} index={i} />
        ))}
      </ul>
    </Sheet>
  )
}
