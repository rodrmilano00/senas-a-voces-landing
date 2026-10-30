import { GLOVE_STEPS, PRODUCTS } from '../../lib/content'
import { PHOTOS } from '../../lib/media'
import Sheet from './Sheet'
import DepthImage from '../DepthImage'
import DeviceScene from '../DeviceScene'
import { Reveal } from '../Reveal'

const [ACADEMY, GLOVE, LIVE] = PRODUCTS

// Development status, set as a trailing line under the product name.
function Status({ children }) {
  return (
    <p className="mt-3 inline-flex items-center gap-2 text-[15px] font-bold text-amber-ink">
      <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
      {children}
    </p>
  )
}

export default function BuildSheet() {
  return (
    <Sheet
      id="construimos"
      variant={2}
      title="El ecosistema"
      intro="Tres soluciones que atacan la brecha desde tres ángulos, todas validadas con la comunidad sorda: traducir en el momento, atender en ventanilla y aprender la lengua."
    >
      <article className="mt-16 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <figure className="bg-[#f8f8f3] p-4 sm:p-6">
          <img
            src={PHOTOS.glove}
            alt="Dibujo del guante traductor: sensores flex en cada dedo, cables a un ESP32 que lee los valores y una bocina que dice “¡Gracias!”"
            width="964"
            height="496"
            loading="lazy"
            className="w-full"
          />
        </figure>
        <Reveal delay={0.1}>
          <h3 className="text-[clamp(32px,3.6vw,52px)] text-fg">{GLOVE.name}</h3>
          <Status>{GLOVE.status}</Status>
          <p className="mt-4 max-w-[48ch] text-[17px] leading-[1.65] text-muted">{GLOVE.desc}</p>
          <ol className="mt-8 grid gap-5">
            {GLOVE_STEPS.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] items-baseline gap-x-2">
                <span className="tabular font-display text-[40px] leading-none font-bold text-amber-ink/80">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-display text-[22px] font-bold text-fg">{step.title}</span>
                  <span className="mt-1 block max-w-[42ch] leading-[1.6] text-muted">{step.desc}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </article>

      <article className="mt-[clamp(72px,8vw,112px)] grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="lg:order-2">
          <DepthImage
            src={PHOTOS.liveTest}
            alt="Prueba del traductor en vivo en una laptop durante una sesión con la comunidad"
            className="aspect-[4/3] rounded-[20px] sm:aspect-[16/11]"
          />
        </div>
        <Reveal className="lg:order-1">
          <h3 className="text-[clamp(32px,3.6vw,52px)] text-fg">{LIVE.name}</h3>
          <Status>{LIVE.status}</Status>
          <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.65] text-muted">{LIVE.desc}</p>
          <p className="mt-6 max-w-[46ch] text-[15px] leading-[1.6] text-muted">
            Señas a Voces no reemplaza a los intérpretes: amplía el acceso en los momentos donde
            ellos no están presentes.
          </p>
        </Reveal>
      </article>

      <article className="mt-[clamp(72px,8vw,112px)]">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <h3 className="text-[clamp(32px,3.6vw,52px)] text-fg">{ACADEMY.name}</h3>
            <Status>{ACADEMY.status}</Status>
          </div>
          <p className="max-w-[48ch] text-[17px] leading-[1.65] text-muted lg:justify-self-end">{ACADEMY.desc}</p>
        </div>
        <DeviceScene />
      </article>
    </Sheet>
  )
}
