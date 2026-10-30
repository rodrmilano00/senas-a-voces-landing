import { LAPTOP } from '../lib/media'
import ScrollLaptop from './devices/ScrollLaptop'
import ScreenVideo from './devices/ScreenVideo'
import Phone from './devices/Phone'
import LessonScreen from './devices/LessonScreen'
import { Reveal } from './Reveal'

const ACADEMY_POINTS = [
  { title: 'Validación con cámara', desc: 'La cámara detecta las manos y mide la precisión de cada seña.' },
  { title: 'Una ruta de la A a la Ñ', desc: 'Del abecedario y los números hasta expresiones cotidianas.' },
  { title: 'Misiones diarias y rachas', desc: 'Cada sesión suma al progreso por módulo, para que practicar se vuelva costumbre.' },
]

function StageCopy({ title, children }) {
  return (
    <>
      <h4 className="font-display text-[clamp(24px,2.6vw,38px)] leading-[1.05] font-bold text-petrol dark:text-fg">{title}</h4>
      <p className="mt-3 text-[15px] leading-[1.55] text-muted lg:mt-4 lg:text-[17px] lg:leading-[1.6]">{children}</p>
    </>
  )
}

/**
 * Academy on our own laptop renders. First one pinned scene: the dashboard close
 * up, the camera pulling back, its explanation, then the phone (iPhone 16 Pro
 * frame from 21st.dev, with the live lesson) and its own. Then a second render,
 * a slow camera around the lesson path on a set of its own.
 */
export default function DeviceScene() {
  return (
    <>
      <ScrollLaptop
        label="Laptop que se aleja del panel de Señas a Voces Academy: racha, actividad, progreso por módulo y misiones diarias"
        laptopCopy={
          <StageCopy title="Todo tu avance, en un solo panel">
            Al entrar ves tu racha, tu actividad de las últimas semanas, tu progreso por módulo y las misiones del día. De ahí sigues con tu lección o practicas con la cámara.
          </StageCopy>
        }
        phoneCopy={
          <StageCopy title="Y la lección, también en tu mano">
            El intérprete muestra la seña, tu cámara detecta tus manos y te dice cómo vas, seña por seña.
          </StageCopy>
        }
      >
        <Phone>
          <LessonScreen />
        </Phone>
      </ScrollLaptop>

      <div className="mt-[clamp(48px,6vw,96px)] grid items-center gap-x-10 gap-y-8 lg:grid-cols-[1.35fr_1fr]">
        <figure role="img" aria-label="Laptop con la ruta de lecciones de Señas a Voces Academy, del abecedario a expresiones cotidianas">
          <ScreenVideo src={LAPTOP.pathVideo} poster={LAPTOP.pathPoster} className="block aspect-video w-full rounded-[20px] object-cover" />
        </figure>
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
