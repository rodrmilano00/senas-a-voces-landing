import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { SCREENS } from '../lib/media'
import Laptop from './devices/Laptop'
import Phone from './devices/Phone'
import LessonScreen from './devices/LessonScreen'

/**
 * Academy on real screens. The lesson laptop starts tilted back and settles
 * flat as it scrolls into place while the phone climbs over it at a faster
 * rate (scroll patterns from 21st.dev "Container Scroll Animation" by
 * Aceternity and "Phone Scroll Hero" by ruixen.ui). Below, two more screens
 * drift against each other.
 */
export default function DeviceScene() {
  const stageRef = useRef(null)
  const pairRef = useRef(null)
  const still = useReducedMotion()

  const { scrollYProgress: stage } = useScroll({ target: stageRef, offset: ['start end', 'center center'] })
  const rotateX = useTransform(stage, [0, 1], [still ? 0 : 24, 0])
  const scale = useTransform(stage, [0, 1], [still ? 1 : 0.9, 1])
  const phoneY = useTransform(stage, [0, 1], [still ? '0%' : '38%', '0%'])
  const phoneRotate = useTransform(stage, [0, 1], [still ? 0 : 7, 0])

  const { scrollYProgress: pair } = useScroll({ target: pairRef, offset: ['start end', 'end start'] })
  const leftY = useTransform(pair, [0, 1], [still ? 0 : 60, still ? 0 : -60])
  const rightY = useTransform(pair, [0, 1], [still ? 0 : -30, still ? 0 : 90])

  return (
    <>
      <div ref={stageRef} className="relative mt-14 pb-[12%] [perspective:1400px] sm:pb-[6%]">
        <motion.div style={{ rotateX, scale }} className="mx-auto w-[min(100%,1000px)] origin-bottom">
          <Laptop
            {...SCREENS.lesson}
            label="Señas a Voces Academy en una laptop: lección Abril, con el intérprete y la cámara del alumno detectando sus manos"
          />
        </motion.div>
        <motion.div
          style={{ y: phoneY, rotate: phoneRotate }}
          className="absolute right-0 bottom-0 w-[clamp(120px,21vw,260px)] sm:right-[2%]"
        >
          <Phone>
            <LessonScreen />
          </Phone>
        </motion.div>
      </div>

      <div ref={pairRef} className="mt-[clamp(64px,8vw,112px)] grid gap-x-10 gap-y-16 md:grid-cols-2">
        <motion.figure style={{ y: leftY }}>
          <Laptop {...SCREENS.path} label="Ruta de lecciones de Señas a Voces Academy, del abecedario a expresiones cotidianas" />
          <figcaption className="mt-6">
            <span className="block font-display text-[24px] font-bold text-fg">Una ruta, de la A a la Ñ</span>
            <span className="mt-1 block max-w-[40ch] leading-[1.6] text-muted">
              Del abecedario y los números hasta expresiones cotidianas, una seña a la vez.
            </span>
          </figcaption>
        </motion.figure>
        <motion.figure style={{ y: rightY }} className="md:mt-24">
          <Laptop {...SCREENS.dashboard} label="Panel de progreso de Señas a Voces Academy con misiones diarias y racha" />
          <figcaption className="mt-6">
            <span className="block font-display text-[24px] font-bold text-fg">Misiones diarias y rachas</span>
            <span className="mt-1 block max-w-[40ch] leading-[1.6] text-muted">
              Cada sesión suma a tu progreso por módulo, para que practicar se vuelva costumbre.
            </span>
          </figcaption>
        </motion.figure>
      </div>
    </>
  )
}
