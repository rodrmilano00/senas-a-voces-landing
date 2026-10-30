import { motion } from 'motion/react'
import { useCalm } from '../lib/perf'

const EASE = [0.16, 1, 0.3, 1]

/**
 * A block that rises into place the first time it enters the view. `delay`
 * staggers siblings. Calm (reduced motion or lite) renders it at rest.
 */
export function Reveal({ as = 'div', delay = 0, y = 28, className = '', children, ...props }) {
  const calm = useCalm()
  const Tag = motion[as]
  return (
    <Tag
      initial={calm ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}

/**
 * A heading whose words rise one after another from behind a mask. `onMount`
 * plays it on load (the cover) instead of on first view. Screen readers get
 * the heading text once, intact.
 */
export function TitleReveal({ as = 'h2', text, accent, id, className = '', onMount = false, delay = 0 }) {
  const calm = useCalm()
  const Tag = as
  const words = text.split(' ').map((w) => ({ w, accent: false }))
  if (accent) accent.split(' ').forEach((w) => words.push({ w, accent: true }))

  const trigger = onMount ? { animate: { y: '0%' } } : { whileInView: { y: '0%' }, viewport: { once: true, margin: '0px 0px -10% 0px' } }

  return (
    <Tag id={id} className={className}>
      <span className="sr-only">{accent ? `${text} ${accent}` : text}</span>
      <span aria-hidden="true">
        {words.map(({ w, accent: isAccent }, i) => (
          <span key={i}>
            {isAccent && i === text.split(' ').length && <br />}
            <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.22em] align-bottom">
              <motion.span
                className={`inline-block ${isAccent ? 'text-cyan' : ''}`}
                initial={calm ? false : { y: '105%' }}
                {...trigger}
                transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.06 }}
              >
                {w}
              </motion.span>
            </span>{' '}
          </span>
        ))}
      </span>
    </Tag>
  )
}
