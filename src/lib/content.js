// Static content for the landing page, kept separate from presentation.

export const NAV_LINKS = [
  { href: '#productos', label: 'Productos' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
]

export const PRODUCTS = [
  {
    icon: '🧤',
    title: 'Guante Traductor LSM',
    desc: 'Hardware wearable que captura movimiento de manos en tiempo real y lo traduce a texto y voz con precisión milimétrica.',
    tag: 'Hardware + IA',
    wide: true,
  },
  {
    icon: '🎓',
    title: 'Plataforma de Aprendizaje',
    desc: 'Curso interactivo con IA que adapta el contenido a tu ritmo. Practica con cámara y recibe retroalimentación instantánea.',
    tag: 'Software IA',
  },
  {
    icon: '👩‍🏫',
    title: 'Teacher Dashboard',
    desc: 'Herramientas para profesores: seguimiento de progreso, planes personalizados y analíticas de aprendizaje por estudiante.',
    tag: 'EdTech',
  },
]

export const TESTIMONIALS = [
  {
    text: '"Gracias a Señas a Voces, mi hija puede comunicarse con su profesora sin barreras. La tecnología del guante es increíble."',
    name: 'María González',
    role: 'Madre de estudiante',
    initial: 'M',
  },
  {
    text: '"Como profesora sorda, esta plataforma me ha dado herramientas que nunca pensé posibles. Mis alumnos aprenden 3 veces más rápido."',
    name: 'Laura Torres',
    role: 'Profesora de LSM',
    initial: 'L',
  },
  {
    text: '"El guante traductor cambió mi vida laboral. Ahora puedo participar en reuniones de trabajo sin necesidad de intérprete."',
    name: 'Carlos Hernández',
    role: 'Ingeniero, comunidad sorda',
    initial: 'C',
  },
  {
    text: '"La IA adapta cada lección a mi ritmo. En 3 meses aprendí más que en 2 años de cursos tradicionales."',
    name: 'Ana Ramírez',
    role: 'Estudiante universitaria',
    initial: 'A',
  },
  {
    text: '"Implementamos el Teacher Dashboard en nuestra escuela y los resultados son extraordinarios. El progreso es medible y visible."',
    name: 'Roberto Díaz',
    role: 'Director escolar',
    initial: 'R',
  },
]

export const TEAM = [
  {
    name: 'Mario Chaidez',
    role: 'Alianzas y Programación',
    bio: 'Estudiante de Ingeniería en Tecnologías Computacionales, especializado en desarrollo de software y programación.',
    initial: 'S',
  },
  {
    name: 'César Castillo',
    role: 'Diseño y prototipado',
    bio: 'Estudiante de Ingeniería Mecatrónica, especializado en diseño de productos y prototipado.',
    initial: 'D',
  },
  {
    name: 'César Luna',
    role: 'Diseño y prototipado',
    bio: 'Estudiante de Ingeniería Mecatrónica, especializado en testing de productos y prototipado.',
    initial: 'V',
  },
  {
    name: 'Emiliano Acuña',
    role: 'Marketing y Relaciones Públicas',
    bio: 'Estudiante de Ingeniería en Tecnologías Computacionales, especializado en diseño y producción.',
    initial: 'M',
  },
]

export const CONTACT_DETAILS = [
  { icon: '✉', text: 'senasavocesac@gmail.com' },
  { icon: '📍', text: 'Hermosillo, Sonora, MX' },
  { icon: '📞', text: '+52 645 115 9917' },
]

import logoImg from '../assets/mpwyqir4-Señas-a-Voces-AC-LOGO.png'
export const LOGO_SRC = logoImg
