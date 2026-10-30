import { CONTACT, PRESS_HEADLINES, SOCIAL_REACH, TESTIMONIALS } from '../../lib/content'
import { PHOTOS, PRESS_NOTES } from '../../lib/media'
import Sheet from './Sheet'
import DepthImage from '../DepthImage'
import { Reveal } from '../Reveal'

const [FEATURED, ...QUOTES] = TESTIMONIALS

// Who has covered, backed and recognised the project, as plain names: the
// column edges do the organising, no logos, boxes or cards.
const NAME_COLUMNS = [
  {
    kind: 'Medios',
    names: ['N+ Televisa', 'adn Noticias', 'El Tiempo', 'ConectaTec', 'Noro', 'Proyecto Puente', 'Quinta Fuerza', 'Número Uno Noticias', 'El Búnker 93.9 FM', 'Tijuana Informa', 'Expreso 24/7'],
  },
  {
    kind: 'Aliados',
    names: ['Señas del Desierto', 'Enactus México', 'H. Ayuntamiento de Hermosillo', 'DIF Hermosillo', 'Agencia de Desarrollo Económico'],
  },
  {
    kind: 'Reconocimientos',
    names: ['1er lugar, SmartCity Hackathon', 'Campeones nacionales, Enactus México', 'Copa Enactus, Puerto Rico'],
  },
]

const FEATURED_HEADLINE = PRESS_HEADLINES.find((h) => h.outlet === 'Proyecto Puente')

export default function CommunitySheet() {
  return (
    <Sheet
      id="comunidad"
      variant={2}
      title="Con la comunidad, no solo para ella"
      intro="Con Roberto Labrada, líder y fundador del colectivo Señas del Desierto, y su cofundador Jesús Enrique, el equipo valida el diseño y el funcionamiento de cada producto."
    >
      {/* The lead testimonial, set straight on the photograph of that work */}
      <figure className="relative mt-14 overflow-hidden">
        <DepthImage
          src={PHOTOS.showcase}
          alt="El equipo de Señas a Voces junto al colectivo Señas del Desierto después de un showcase en Hermosillo"
          className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]"
          imgClassName="brightness-[0.55]"
        />
        <div className="absolute inset-x-0 bottom-0 grid gap-6 p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end lg:p-14">
          <blockquote className="max-w-[30ch] font-display text-[clamp(24px,2.6vw,36px)] leading-[1.18] font-medium tracking-[-0.015em]">
            “{FEATURED.text}”
          </blockquote>
          <figcaption className="text-[16px] lg:text-right">
            <span className="block font-bold">{FEATURED.name}</span>
            <span className="block text-white/80">{FEATURED.role}</span>
          </figcaption>
        </div>
      </figure>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        {QUOTES.map((t, i) => (
          <Reveal as="figure" key={t.name} delay={i * 0.12}>
            <blockquote className="max-w-[46ch] text-[19px] leading-[1.6] text-fg">“{t.text}”</blockquote>
            <figcaption className="mt-5">
              <span className="block font-bold text-fg">{t.name}</span>
              <span className="block text-sm text-muted">{t.role}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>

      <div className="mt-[clamp(120px,12vw,200px)] grid gap-10 lg:grid-cols-12">
        <h3 className="text-[clamp(30px,3vw,40px)] text-petrol lg:col-span-3">Visibilidad en medios</h3>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
          {NAME_COLUMNS.map((col, i) => (
            <Reveal as="ul" key={col.kind} delay={i * 0.1} className="text-[20px] leading-[1.55]">
              <li className="text-muted">{col.kind}</li>
              {col.names.map((n) => (
                <li key={n} className="text-fg">
                  {n}
                </li>
              ))}
            </Reveal>
          ))}
        </div>
      </div>

      {/* Rows of one height: each note grows by its own ratio, so none is cropped */}
      <ul className="mt-14 flex flex-wrap gap-3 [--h:170px] sm:gap-6 lg:[--h:220px]">
        {PRESS_HEADLINES.map(({ outlet, title }, i) => {
          const note = PRESS_NOTES[outlet]
          const ratio = note.width / note.height
          return (
            <Reveal as="li" key={outlet} delay={(i % 3) * 0.08} className="min-w-0" style={{ flex: `${ratio} 1 calc(${ratio} * var(--h))` }}>
              <img
                src={note.src}
                alt={`Nota de ${outlet}: ${title}`}
                width={note.width}
                height={note.height}
                loading="lazy"
                className="block h-auto w-full rounded-[12px] ring-1 ring-line"
              />
              <p className="mt-2.5 text-[15px] font-bold text-fg">{outlet}</p>
            </Reveal>
          )
        })}
      </ul>

      <figure className="mt-[clamp(72px,8vw,112px)] lg:ml-[25%]">
        <blockquote className="max-w-[30ch] font-display text-[clamp(26px,2.8vw,36px)] leading-[1.2] font-medium tracking-[-0.015em] text-fg">
          “{FEATURED_HEADLINE.title}”
        </blockquote>
        <figcaption className="mt-4 text-[17px] text-muted">
          {FEATURED_HEADLINE.outlet}. En redes,{' '}
          <a href={CONTACT.instagramHref} target="_blank" rel="noreferrer" className="font-bold text-fg underline decoration-line decoration-2 underline-offset-4 hover:decoration-amber">
            {CONTACT.instagram}
          </a>{' '}
          suma {SOCIAL_REACH.map((r) => `${r.value} ${r.label}`).join(' y ')}.
        </figcaption>
      </figure>
    </Sheet>
  )
}
