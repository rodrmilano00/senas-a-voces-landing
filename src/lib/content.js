// Static content for the landing page, kept separate from presentation.
// Facts, quotes and milestones come from the team's evidence portfolio.

export const NAV_LINKS = [
  { href: '#problema', label: 'El problema' },
  { href: '#construimos', label: 'Lo que construimos' },
  { href: '#creadores', label: 'Creadores' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#comunidad', label: 'Comunidad' },
]

export const HERO_PROOF = [
  '1er lugar, SmartCity Hackathon',
  'Campeones nacionales Enactus México',
  'Copa Enactus, Puerto Rico',
  'Validado con Señas del Desierto',
]

export const MANIFESTO = 'La tecnología está diseñada para ellos y no a pesar de ellos.'

export const FINAL_MESSAGE =
  'Una ciudad se fortalece cuando todas las voces, con o sin sonido, pueden ser escuchadas.'

// Headlines as published by each outlet (portfolio, "Visibilidad en medios").
export const PRESS_HEADLINES = [
  { outlet: 'ConectaTec', title: 'Estudiantes Tec crean guantes para traducir Lengua de Señas Mexicana' },
  {
    outlet: 'Noro',
    title: 'Señas a Voces, guante para traducir Lengua de Señas Mexicana creado por estudiantes de Sonora',
  },
  {
    outlet: 'El Tiempo',
    title: 'Estudiante mexicano crea guantes que traducen la lengua de señas a voz y texto en tiempo real',
  },
  {
    outlet: 'Proyecto Puente',
    title: 'Estudiantes de Sonora crean guantes inteligentes que traducen lengua de señas a voz y texto',
  },
  {
    outlet: 'Quinta Fuerza',
    title: 'Estudiantes de mecatrónica crean guante que traduce lengua de señas a voz en Sonora',
  },
]

export const SOCIAL_REACH = [
  { value: '+250', label: 'seguidores en @senasavocesac' },
  { value: '+10 mil', label: 'de alcance mensual' },
]

export const PRESS = [
  'N+ Televisa',
  'adn Noticias',
  'Número Uno Noticias',
  'El Búnker 93.9 FM',
  'Tijuana Informa',
  'Expreso 24/7',
]

export const AUDIENCES = [
  { title: 'Familias', desc: 'Aprender LSM para comunicarse en casa con un integrante sordo.' },
  { title: 'Trabajadores', desc: 'Entornos laborales inclusivos y accesibles.' },
  { title: 'Maestros', desc: 'Herramientas prácticas para impartir clases inclusivas.' },
  {
    title: 'Instituciones',
    desc: 'Atención accesible en tiempo real en gobierno, hospitales, bancos y comercios.',
  },
]

export const PRODUCTS = [
  {
    id: 'academy',
    name: 'Señas a Voces Academy',
    kind: 'Plataforma educativa',
    desc: 'Aprende LSM con reconocimiento de señas en tiempo real: tu cámara valida cada seña y mide tu precisión. Misiones diarias y rachas, desde el abecedario y los números hasta expresiones cotidianas.',
    points: ['Validación de señas con cámara', 'Misiones diarias y rachas', 'Del abecedario a frases cotidianas'],
    status: 'En espera de patente',
  },
  {
    id: 'guante',
    name: 'Guante traductor LSM',
    kind: 'Dispositivo wearable',
    desc: 'Sensores de flexión captan el movimiento de los dedos y la mano, y lo convierten en texto y voz para que una persona sorda sea entendida al instante.',
    status: 'Prototipo funcional',
  },
  {
    id: 'vivo',
    name: 'Traductor en vivo',
    kind: 'Para instituciones',
    desc: 'Interpretación en tiempo real para puntos de atención públicos y privados. Elimina la barrera del idioma en trámites y servicios.',
    status: 'En pruebas',
  },
]

export const GLOVE_STEPS = [
  {
    title: 'Captura',
    desc: 'Sensores de flexión registran la posición y el movimiento de los dedos y la mano.',
  },
  {
    title: 'Procesamiento',
    desc: 'Un microcontrolador integrado lee las señales y las interpreta como señas de la LSM.',
  },
  {
    title: 'Salida',
    desc: 'El resultado aparece como texto en pantalla y se reproduce como voz.',
  },
]

export const TESTIMONIALS = [
  {
    text: 'Voy a una cita psicológica y tengo que estar acompañado de mi familia o de un intérprete del cual no tengo la confianza suficiente […] Puede ser algo complejo que preferiría escribir, pero igual es una barrera.',
    name: 'Jesús Enrique',
    role: 'Maestro de la comunidad sorda, persona sorda',
  },
  {
    text: 'Tengo que estar con ellos en todos los trámites de citas médicas, de algún documento […] Si llevo a otra persona ajena a nosotros, es como ventilar la privacidad de los chicos.',
    name: 'Madre de familia',
    role: 'Hogar con jóvenes sordos',
  },
  {
    text: 'Mi hijo es muy inteligente en lo tecnológico […] se necesita mucho este proyecto. Para toda la comunidad sorda va a ser muy beneficioso.',
    name: 'Padre de familia',
    role: 'Hogar con sordera profunda',
  },
]

// `photo` and `logo` key into MILESTONE_PHOTOS / PARTNER_LOGOS in media.js.
export const MILESTONES = [
  { title: 'SmartCity Hackathon', detail: 'Primer lugar, organizado por la Agencia de Desarrollo Económico.', photo: 'hackathon' },
  { title: 'Primer prototipo del guante', detail: 'Sensores de flexión y salida de texto y voz.', photo: 'glove' },
  { title: 'Red Enactus México', detail: 'Ingreso a la red de emprendimiento social.', logo: 'enactus' },
  { title: 'Señas del Desierto', detail: 'Validación de cada producto con el colectivo y su líder, Roberto Labrada.', logo: 'senasDelDesierto' },
  { title: 'Convenio con DIF', detail: 'Y con la Agencia de Desarrollo Económico de Hermosillo.', logo: 'ayuntamiento' },
  { title: 'Campeones nacionales', detail: 'Enactus México, categoría Mentoractus.', photo: 'enactusMx' },
  { title: 'Copa Enactus', detail: 'Representación de México en Puerto Rico.', photo: 'enactusPr' },
  { title: 'Cobertura en medios', detail: 'Televisa, radio y prensa local y nacional.', photo: 'media' },
]

export const TEAM = [
  {
    name: 'Emiliano Acuña',
    role: 'Representante · Diseño y producción',
    school: 'Ing. en Tecnologías Computacionales, Tec de Monterrey',
    bio: 'Productor y artista audiovisual. Da identidad visual y narrativa al proyecto.',
    tone: '#0d9ac5',
  },
  {
    name: 'Mario Chaidez',
    role: 'Software y alianzas',
    school: 'Ing. en Tecnologías Computacionales, Tec de Monterrey',
    bio: 'Construye la plataforma y valida cada funcionalidad antes de lanzarla.',
    tone: '#4b4fd6',
  },
  {
    name: 'César Castillo',
    role: 'Pruebas y prototipado',
    school: 'Ing. Mecatrónica, Tec de Monterrey',
    bio: 'Valida el desempeño del hardware para garantizar precisión y fiabilidad.',
    tone: '#3fae6a',
  },
  {
    name: 'César Luna',
    role: 'Diseño físico del guante',
    school: 'Ing. Mecatrónica, Universidad de Sonora',
    bio: 'Conceptualiza, diseña y fabrica los prototipos del guante traductor.',
    tone: '#e5484d',
  },
]

export const CONTACT = {
  email: 'senasavocesac@gmail.com',
  phone: '+52 645 115 9917',
  phoneHref: 'tel:+526451159917',
  city: 'Hermosillo, Sonora, MX',
  instagram: '@senasavocesac',
  instagramHref: 'https://www.instagram.com/senasavocesac/',
}
