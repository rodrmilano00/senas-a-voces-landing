import ScrollLaptop from './devices/ScrollLaptop'
import Phone from './devices/Phone'
import LessonScreen from './devices/LessonScreen'

const ROUTE_POINTS = [
  { title: 'Una ruta paso a paso', desc: 'Los módulos forman un camino, así siempre sabes cuál sigue.' },
  { title: 'Temas para el día a día', desc: 'Meses del año, números, colores, familia, salud, escuela y tecnología.' },
  { title: 'Tu avance a la vista', desc: 'Cada módulo marca cuántas señas llevas de las 360 de la ruta.' },
]

function StageCopy({ title, children }) {
  return (
    <>
      <h4 className="font-display text-[clamp(24px,2.6vw,38px)] leading-[1.08] font-medium tracking-[-0.02em] text-petrol">{title}</h4>
      <p className="mt-3 text-[15px] leading-[1.55] text-muted lg:mt-4 lg:text-[17px] lg:leading-[1.6]">{children}</p>
    </>
  )
}

function RoutePoints() {
  return (
    <ul className="grid gap-4 lg:gap-7">
      {ROUTE_POINTS.map((p) => (
        <li key={p.title}>
          <h4 className="font-display text-[20px] leading-tight font-semibold tracking-[-0.01em] text-fg lg:text-[26px]">{p.title}</h4>
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
 * path and what it shows.
 */
export default function DeviceScene() {
  return (
    <ScrollLaptop
      label="Laptop que se aleja del panel de Señas a Voces Academy: racha, actividad, progreso por módulo y misiones diarias"
      pathLabel="Laptop con la ruta de módulos de Señas a Voces Academy y el avance en cada uno"
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
      pathCopy={<RoutePoints />}
    >
      <Phone>
        <LessonScreen />
      </Phone>
    </ScrollLaptop>
  )
}
