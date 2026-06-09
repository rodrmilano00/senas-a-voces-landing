import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { gsap } from '../lib/gsap'
import { CONTACT_DETAILS } from '../lib/content'
import Eyebrow from './Eyebrow'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const FIELD_CLASS =
  'w-full border-0 border-b-[1.5px] border-border bg-transparent py-3.5 text-base text-fg outline-none transition-colors focus:border-primary'

const CONTACT_ICONS = [Mail, MapPin, Phone]

export default function Contact() {
  const sectionRef = useRef(null)
  const infoRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = () => {
    if (status === 'sending') return
    setStatus('idle')
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setError('')

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error')
      setError('Configura VITE_FORMSPREE_ENDPOINT para activar el envio del formulario.')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        const formspreeError = result?.errors?.[0]?.message || result?.error
        throw new Error(formspreeError || `Formspree respondio con status ${response.status}`)
      }

      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      console.error('Error al enviar el formulario:', err)
      setError(err.message || 'No pudimos enviar tu mensaje. Intenta de nuevo o escribenos por correo.')
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(infoRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.from(formRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="pt-[clamp(72px,7vw,88px)] pb-[clamp(96px,9vw,120px)]"
    >
      <div className="container-page grid items-start gap-20 md:grid-cols-2">
        <div ref={infoRef}>
          <Eyebrow className="mb-4">Contacto</Eyebrow>
          <h2 className="mb-4 text-[clamp(36px,4vw,48px)]">Hablemos</h2>
          <p className="mb-8 text-[17px] leading-[1.7] text-muted">
            ¿Tienes preguntas? ¿Quieres implementar Señas a Voces en tu institucion? Estamos aqui
            para ti.
          </p>
          {CONTACT_DETAILS.map((d, i) => {
            const Icon = CONTACT_ICONS[i] || Mail

            return (
              <div key={d.text} className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-base text-primary">
                  <Icon size={18} strokeWidth={2.2} aria-hidden="true" />
                </div>
                <div className="text-[15px] text-fg">{d.text}</div>
              </div>
            )
          })}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onChange={handleChange}
          className="rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 backdrop-blur-[12px]"
        >
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde la landing" />
          <div className="mb-6">
            <label className="mb-2 block text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
              Nombre
            </label>
            <input
              className={FIELD_CLASS}
              type="text"
              name="name"
              placeholder="Tu nombre"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
              Email
            </label>
            <input
              className={FIELD_CLASS}
              type="email"
              name="email"
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-[13px] font-semibold tracking-[0.08em] text-muted uppercase">
              Mensaje
            </label>
            <textarea
              className={`${FIELD_CLASS} min-h-[120px] resize-y`}
              name="message"
              placeholder="¿Como podemos ayudarte?"
              required
            />
          </div>
          <div className="min-h-7" aria-live="polite">
            {status === 'sent' && (
              <p className="mb-4 text-sm font-semibold text-primary">
                Mensaje enviado. Te responderemos pronto.
              </p>
            )}
            {status === 'error' && <p className="mb-4 text-sm font-semibold text-red-500">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full rounded-full p-4 text-base font-semibold text-white shadow-[0_4px_24px_rgba(236,153,96,0.35)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(236,153,96,0.45)] ${
              status === 'sent' ? 'bg-primary' : 'bg-accent'
            } ${status === 'sending' ? 'pointer-events-none opacity-70' : ''}`}
          >
            {status === 'idle' && 'Enviar mensaje'}
            {status === 'sending' && 'Enviando...'}
            {status === 'error' && 'Reintentar envio'}
            {status === 'sent' && 'Enviado'}
          </button>
        </form>
      </div>
    </section>
  )
}
