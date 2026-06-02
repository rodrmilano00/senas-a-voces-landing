import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

const VARIANTS = {
  primary:
    'bg-accent text-white shadow-[0_4px_24px_rgba(236,153,96,0.35)] hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(236,153,96,0.45)]',
  secondary:
    'border-[1.5px] border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
}

export default function Button({
  variant = 'primary',
  magnetic = false,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!magnetic) return
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power3.out' })
    }
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [magnetic])

  return (
    <button
      ref={ref}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-9 py-4 text-base font-semibold transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
