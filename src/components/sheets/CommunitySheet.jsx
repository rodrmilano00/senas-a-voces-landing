import { CONTACT, PRESS_HEADLINES, SOCIAL_REACH, TESTIMONIALS } from '../../lib/content'
import { PHOTOS } from '../../lib/media'
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
      intro="Con Roberto Labrada, líder del colectivo Señas del Desierto, el equipo valida el diseño y el funcionamiento de cada producto."
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
          <blockquote className="max-w-[30ch] font-display text-[clamp(24px,2.6vw,36px)] leading-[1.15] font-bold">
            “{FEATURED.excerpt}”
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

      <figure className="mt-[clamp(72px,8vw,112px)] lg:ml-[25%]">
        <blockquote className="max-w-[30ch] font-display text-[clamp(26px,2.8vw,36px)] leading-[1.18] font-bold text-fg">
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
