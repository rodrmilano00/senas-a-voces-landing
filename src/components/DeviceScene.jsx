import { LAPTOP_OPEN_FRAMES, MOCKUPS } from '../lib/media'
import MockupVideo from './devices/MockupVideo'
import ScrollLaptop from './devices/ScrollLaptop'
import Phone from './devices/Phone'
import LessonScreen from './devices/LessonScreen'
import { Reveal } from './Reveal'

const ACADEMY_POINTS = [
  { title: 'Validación con cámara', desc: 'La cámara detecta las manos y mide la precisión de cada seña.' },
  { title: 'Una ruta de la A a la Ñ', desc: 'Del abecedario y los números hasta expresiones cotidianas.' },
  { title: 'Misiones diarias y rachas', desc: 'Cada sesión suma al progreso por módulo, para que practicar se vuelva costumbre.' },
]

/**
 * Academy on photoreal laptops. First the After Effects laptop opens as the
 * visitor scrolls, waking on a real lesson; the phone (iPhone 16 Pro frame
 * from 21st.dev, with the live lesson) rises in front of it. Then a reel shot
 * with the lesson path, tracked onto its screen.
 */
export default function DeviceScene() {
  return (
    <>
      <ScrollLaptop
        frames={LAPTOP_OPEN_FRAMES}
        label="Laptop que se abre con Señas a Voces Academy: lección Agosto, la cámara del alumno detecta sus manos y valida la seña con ¡Excelente!"
      >
        <Phone>
          <LessonScreen />
        </Phone>
      </ScrollLaptop>

      <div className="mt-[clamp(48px,6vw,96px)] grid items-center gap-x-10 gap-y-8 lg:grid-cols-[1.35fr_1fr]">
        {/* The reel's camera sits further back in this shot, so it runs wider than its column */}
        <MockupVideo
          {...MOCKUPS.path}
          className="lg:-ml-[8%] lg:w-[118%]"
          label="Laptop con la ruta de lecciones de Señas a Voces Academy, del abecedario a expresiones cotidianas"
        />
        <ul className="grid gap-8">
          {ACADEMY_POINTS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.1}>
              <h4 className="font-display text-[26px] leading-tight font-bold text-fg">{p.title}</h4>
              <p className="mt-2 max-w-[40ch] text-[17px] leading-[1.6] text-muted">{p.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </>
  )
}
