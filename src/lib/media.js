import glowEmiliano from '../assets/IMG_9748-Enhanced-NR-optimized.jpg'
import glowMario from '../assets/IMG_9730-Enhanced-NR-optimized.jpg'
import glowCastillo from '../assets/IMG_9726-Enhanced-NR-optimized.jpg'
import glowLuna from '../assets/IMG_9738-Enhanced-NR-optimized.jpg'
import logoHorizontal from '../assets/logo-horizontal-sm.png'
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
import screenLesson from '../assets/plataforma/pantalla-leccion.mp4'
import screenLessonPoster from '../assets/plataforma/pantalla-leccion.jpg'
import screenPath from '../assets/plataforma/pantalla-ruta.mp4'
import screenPathPoster from '../assets/plataforma/pantalla-ruta.jpg'
import screenDashboard from '../assets/plataforma/pantalla-dashboard.mp4'
import screenDashboardPoster from '../assets/plataforma/pantalla-dashboard.jpg'

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

// Screen recordings of Señas a Voces Academy (1724x1080 source)
export const SCREENS = {
  lesson: { src: screenLesson, poster: screenLessonPoster },
  path: { src: screenPath, poster: screenPathPoster },
  dashboard: { src: screenDashboard, poster: screenDashboardPoster },
}

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
