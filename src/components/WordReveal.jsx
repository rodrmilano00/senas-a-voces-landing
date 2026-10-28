import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * A statement that reads itself in as you scroll: each word goes from a faint
 * ghost to full ink. Pattern from Motion's "scroll word reveal" example on
 * 21st.dev. Screen readers get the sentence once, intact.
 */
export default function WordReveal({ text, className = '', as: Tag = 'p', offset = ['start 85%', 'end 40%'] }) {
  const ref = useRef(null)
  const still = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
            still={still}
          />
        ))}
      </span>
    </Tag>
  )
}

function Word({ word, progress, range, still }) {
  const opacity = useTransform(progress, range, [still ? 1 : 0.14, 1])
  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>{' '}
    </>
  )
}
