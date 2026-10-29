import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { SCREENS } from '../lib/media'
import Laptop3D from './devices/Laptop3D'
import Phone from './devices/Phone'
import LessonScreen from './devices/LessonScreen'

/** Scroll progress of an element entering the viewport; pinned open under reduced motion. */
function useEntrance(ref, offset) {
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const open = useMotionValue(1)
  return still ? open : scrollYProgress
}

/**
 * Academy on real screens. The lesson laptop opens its lid and turns to face
 * the visitor as it scrolls into place; the phone swings in later, at its own
 * depth (scroll patterns after 21st.dev "Container Scroll Animation" by
 * Aceternity and "Phone Scroll Hero" by ruixen.ui). Below, two more laptops
 * open from opposite sides.
 */
export default function DeviceScene() {
  const stageRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  const stage = useEntrance(stageRef, ['start 62%', 'center 48%'])
  const phoneX = useTransform(stage, [0.45, 1], ['55%', '0%'])
  const phoneRotateY = useTransform(stage, [0.45, 1], [-48, -14])
  const phoneRotateZ = useTransform(stage, [0.45, 1], [10, 2])

  const left = useEntrance(leftRef, ['start 78%', 'center 52%'])
  const right = useEntrance(rightRef, ['start 78%', 'center 52%'])

  return (
    <>
      <div ref={stageRef} className="relative mt-10">
        <Laptop3D
          progress={stage}
          turn={1}
          {...SCREENS.lesson}
          label="Señas a Voces Academy en una laptop: lección Abril, la cámara del alumno detecta sus manos y valida la seña"
          className="mx-auto w-[min(100%,1080px)]"
        />
        <div className="pointer-events-none absolute right-0 bottom-[14%] w-[clamp(118px,19vw,240px)] [perspective:1200px] sm:right-[3%]">
          <motion.div style={{ x: phoneX, rotateY: phoneRotateY, rotateZ: phoneRotateZ }}>
            <Phone>
              <LessonScreen />
            </Phone>
          </motion.div>
        </div>
      </div>

      <div className="mt-[clamp(32px,5vw,72px)] grid gap-x-10 gap-y-12 md:grid-cols-2">
        <figure ref={leftRef}>
          <Laptop3D progress={left} turn={-1} {...SCREENS.path} label="Ruta de lecciones de Señas a Voces Academy, del abecedario a expresiones cotidianas" />
          <figcaption className="-mt-[6%]">
            <span className="block font-display text-[24px] font-bold text-fg">Una ruta, de la A a la Ñ</span>
            <span className="mt-1 block max-w-[40ch] leading-[1.6] text-muted">
              Del abecedario y los números hasta expresiones cotidianas, una seña a la vez.
            </span>
          </figcaption>
        </figure>
        <figure ref={rightRef} className="md:mt-28">
          <Laptop3D progress={right} turn={1} {...SCREENS.dashboard} label="Panel de progreso de Señas a Voces Academy con misiones diarias y racha" />
          <figcaption className="-mt-[6%]">
            <span className="block font-display text-[24px] font-bold text-fg">Misiones diarias y rachas</span>
            <span className="mt-1 block max-w-[40ch] leading-[1.6] text-muted">
              Cada sesión suma al progreso por módulo, para que practicar se vuelva costumbre.
            </span>
          </figcaption>
        </figure>
      </div>
    </>
  )
}
