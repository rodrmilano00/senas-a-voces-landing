import ScrollLaptop from './devices/ScrollLaptop'
import Phone from './devices/Phone'
import LessonScreen from './devices/LessonScreen'

const ACADEMY_POINTS = [
  { title: 'Validación con cámara', desc: 'La cámara detecta las manos y mide la precisión de cada seña.' },
  { title: 'Una ruta de la A a la Ñ', desc: 'Del abecedario y los números hasta expresiones cotidianas.' },
  { title: 'Misiones diarias y rachas', desc: 'Cada sesión suma al progreso por módulo, para que practicar se vuelva costumbre.' },
]

function StageCopy({ title, children }) {
  return (
    <>
      <h4 className="font-display text-[clamp(24px,2.6vw,38px)] leading-[1.05] font-bold text-petrol">{title}</h4>
      <p className="mt-3 text-[15px] leading-[1.55] text-muted lg:mt-4 lg:text-[17px] lg:leading-[1.6]">{children}</p>
    </>
  )
}

function AcademyPoints() {
  return (
    <ul className="grid gap-4 lg:gap-7">
      {ACADEMY_POINTS.map((p) => (
        <li key={p.title}>
          <h4 className="font-display text-[20px] leading-tight font-bold text-fg lg:text-[26px]">{p.title}</h4>
          <p className="mt-1 max-w-[40ch] text-[15px] leading-[1.5] text-muted lg:mt-2 lg:text-[17px] lg:leading-[1.6]">{p.desc}</p>
        </li>
      ))}
    </ul>
  )
}

/**
 * Academy on our own laptop render, in one pinned scene: the dashboard close up,
 * the camera pulling back and its explanation, the phone (iPhone 16 Pro frame
 * from 21st.dev, with the live lesson) and its own, then a turn to the lesson
 * path and the Academy's points.
 */
export default function DeviceScene() {
  return (
    <ScrollLaptop
      label="Laptop que se aleja del panel de Señas a Voces Academy: racha, actividad, progreso por módulo y misiones diarias"
      pathLabel="Laptop con la ruta de lecciones de Señas a Voces Academy, del abecedario a expresiones cotidianas"
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
      pathCopy={<AcademyPoints />}
    >
      <Phone>
        <LessonScreen />
      </Phone>
    </ScrollLaptop>
  )
}
