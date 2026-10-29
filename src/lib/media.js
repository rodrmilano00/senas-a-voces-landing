import glowEmiliano from '../assets/IMG_9748-Enhanced-NR-optimized.jpg'
import glowMario from '../assets/IMG_9730-Enhanced-NR-optimized.jpg'
import glowCastillo from '../assets/IMG_9726-Enhanced-NR-optimized.jpg'
import glowLuna from '../assets/IMG_9738-Enhanced-NR-optimized.jpg'
import logoHorizontal from '../assets/logo-horizontal-sm.png'
import mockupPathWebm from '../assets/plataforma/mockup-ruta.webm'
import mockupPathMp4 from '../assets/plataforma/mockup-ruta.mp4'
import mockupPathPoster from '../assets/plataforma/mockup-ruta.webp'
import logoHorizontalDark from '../assets/logo-horizontal-dark.png'
import showcase from '../assets/evidencias/showcase-senas-del-desierto.jpg'
import workshop from '../assets/evidencias/taller-comunidad.jpg'
import liveTest from '../assets/evidencias/prueba-traductor-en-vivo.jpg'
import enactusMx from '../assets/evidencias/enactus-mexico.jpg'
import enactusPr from '../assets/evidencias/enactus-puerto-rico.jpg'
import hackathon from '../assets/evidencias/smartcity-hackathon.jpg'
import gloveDrawing from '../assets/evidencias/guante-dibujo.png'
import media from '../assets/evidencias/entrevista-medios.jpg'
import kickoff from '../assets/evidencias/conferencia-kickoff.jpg'
import logoEnactus from '../assets/evidencias/logo-enactus.png'
import logoSenasDelDesierto from '../assets/evidencias/logo-senas-del-desierto.png'
import logoAyuntamiento from '../assets/evidencias/logo-ayuntamiento-hermosillo.png'

// The dark variant keeps the amber book and recolors the petroleum hands and wordmark.
export const LOGO = { horizontal: logoHorizontal, horizontalDark: logoHorizontalDark }

// Same order as TEAM in content.js
export const TEAM_PHOTOS = [glowEmiliano, glowMario, glowCastillo, glowLuna]

export const PHOTOS = {
  showcase,
  workshop,
  liveTest,
  glove: gloveDrawing,
  kickoff,
}

// Photoreal laptop shots from the mockup reel, with the Academy's real screen
// recordings tracked onto their screens and the backdrop cut away (WebM with
// alpha; MP4 baked on cream for Safari; WebP poster with alpha).
export const MOCKUPS = {
  path: { webm: mockupPathWebm, mp4: mockupPathMp4, poster: mockupPathPoster },
}

// The After Effects laptop opening (template pre-render, shot 01) with the
// Academy lesson composited on its screen, one WebP with alpha per frame, for
// scroll scrubbing. Ordered by file name.
const laptopOpen = import.meta.glob('../assets/plataforma/laptop-abre/*.webp', { eager: true, query: '?url', import: 'default' })
export const LAPTOP_OPEN_FRAMES = Object.keys(laptopOpen).sort().map((k) => laptopOpen[k])

// Keyed by MILESTONES[].photo
export const MILESTONE_PHOTOS = {
  hackathon,
  glove: gloveDrawing,
  workshop,
  enactusMx,
  enactusPr,
  media,
}

// Keyed by MILESTONES[].logo; rendered from the portfolio's trajectory page.
export const PARTNER_LOGOS = {
  enactus: { src: logoEnactus, alt: 'Enactus México' },
  senasDelDesierto: { src: logoSenasDelDesierto, alt: 'Señas del Desierto' },
  ayuntamiento: { src: logoAyuntamiento, alt: 'H. Ayuntamiento de Hermosillo' },
}
