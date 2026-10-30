import { useState } from 'react'
import { AtSign, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT, FINAL_MESSAGE, NAV_LINKS } from '../../lib/content'
import { LOGO } from '../../lib/media'
import BackdropShapes from '../BackdropShapes'
import WaveLines from '../WaveLines'
import { TitleReveal } from '../Reveal'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

const FIELD_CLASS =
  'mt-2 block w-full rounded-xl bg-bg px-4 py-3.5 text-base font-normal text-fg ring-1 ring-line outline-none transition-shadow duration-200 placeholder:text-muted focus:ring-2 focus:ring-cyan'

const LABEL_CLASS = 'block text-sm font-bold text-fg'

const DETAILS = [
  { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: Phone, label: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: AtSign, label: CONTACT.instagram, href: CONTACT.instagramHref, external: true },
  { icon: MapPin, label: CONTACT.city },
]

export default function ContactSheet() {
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
      setError('Configura VITE_FORMSPREE_ENDPOINT para activar el envío del formulario.')
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
        throw new Error(formspreeError || `Formspree respondió con status ${response.status}`)
      }

      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus('error')
      console.error('Error al enviar el formulario:', err)
      setError(err.message || 'No se pudo enviar el mensaje. Intenta de nuevo o escribe a senasavocesac@gmail.com.')
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="relative overflow-clip bg-band text-band-fg"
    >
      <BackdropShapes variant={0} />
      <WaveLines className="absolute -top-20 -right-24 w-[clamp(240px,30vw,440px)] text-cyan/45" />

      <div className="container-page relative pt-[clamp(80px,10vw,140px)]">
        <p className="max-w-[22ch] font-display text-[clamp(36px,5vw,72px)] leading-[1.02] font-bold tracking-[-0.02em]">
          “{FINAL_MESSAGE}”
        </p>

        <div className="mt-[clamp(72px,9vw,120px)] grid items-start gap-14 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-20">
          <div>
            <TitleReveal id="contacto-titulo" text="Contacto" className="text-[clamp(36px,4.4vw,60px)]" />
            <p className="mt-5 max-w-[44ch] text-[clamp(17px,1.4vw,19px)] leading-[1.65] text-band-muted">
              Para conocer el proyecto, sumar una alianza o llevar el traductor a una escuela, empresa o
              institución, el equipo de Señas a Voces responde directamente.
            </p>
            <ul className="mt-10 grid gap-1">
              {DETAILS.map(({ icon: Icon, label, href, external }) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10">
                      <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    </span>
                    {label}
                  </>
                )
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        className="-mx-2 inline-flex items-center gap-3 rounded-full px-2 py-1.5 text-[17px] font-semibold transition-colors duration-200 hover:bg-white/10"
                      >
                        {content}
                      </a>
                    ) : (
                      <span className="-mx-2 inline-flex items-center gap-3 px-2 py-1.5 text-[17px] font-semibold">{content}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            onChange={handleChange}
            className="rounded-[20px] bg-surface p-6 text-fg shadow-[0_2px_4px_rgb(0_0_0/0.12),0_30px_60px_-30px_rgb(0_0_0/0.5)] sm:p-9"
          >
            <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
            <input type="hidden" name="_subject" value="Nuevo mensaje desde la landing" />

            <div className="grid gap-5">
              <label className={LABEL_CLASS}>
                Nombre
                <input className={FIELD_CLASS} type="text" name="name" placeholder="Tu nombre" autoComplete="name" required />
              </label>
              <label className={LABEL_CLASS}>
                Correo electrónico
                <input className={FIELD_CLASS} type="email" name="email" placeholder="nombre@correo.com" autoComplete="email" required />
              </label>
              <label className={LABEL_CLASS}>
                Mensaje
                <textarea
                  className={`${FIELD_CLASS} min-h-[132px] resize-y`}
                  name="message"
                  placeholder="Quién eres y en qué te gustaría colaborar"
                  required
                />
              </label>
            </div>

            <div className="min-h-7 pt-4" aria-live="polite">
              {status === 'sent' && <p className="text-sm font-bold text-petrol">Mensaje enviado. El equipo responderá pronto.</p>}
              {status === 'error' && <p className="text-sm font-bold text-[#b42318]">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 min-h-13 w-full cursor-pointer rounded-full bg-amber px-6 py-4 text-base font-bold text-amber-ink transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-8px_rgb(255_164_49/0.8)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-70"
            >
              {status === 'idle' && 'Enviar mensaje'}
              {status === 'sending' && 'Enviando…'}
              {status === 'error' && 'Reintentar envío'}
              {status === 'sent' && 'Enviar otro mensaje'}
            </button>
          </form>
        </div>

        <footer className="mt-[clamp(96px,11vw,144px)] py-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <img src={LOGO.horizontalDark} alt="Señas a Voces Academy" width="1100" height="436" className="h-12 w-auto" />
              <p className="mt-4 max-w-[32ch] text-band-muted">Hecho en Hermosillo, Sonora.</p>
            </div>
            <nav aria-label="Pie de página" className="grid grid-cols-2 gap-x-12 gap-y-3 text-[15px] font-semibold sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-band-fg/80 transition-colors duration-200 hover:text-band-fg">
                  {link.label}
                </a>
              ))}
              <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="text-band-fg/80 transition-colors duration-200 hover:text-band-fg">
                Instagram
              </a>
            </nav>
          </div>
          <p className="mt-12 text-sm text-band-muted">
            © 2026 Señas a Voces Academy. La marca y los modelos están en proceso de registro ante el IMPI.
          </p>
        </footer>
      </div>
    </section>
  )
}
