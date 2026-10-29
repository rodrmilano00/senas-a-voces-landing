import { scrollToY } from './smoothScroll'

// The portfolio's chapters, in reading order (ids of each section).
export const CHAPTERS = [
  { id: 'inicio', label: 'Portada' },
  { id: 'problema', label: 'El problema' },
  { id: 'construimos', label: 'Ecosistema' },
  { id: 'creadores', label: 'Los creadores' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'contacto', label: 'Contacto' },
]

/** Where a chapter (or any element in the page) starts in the document. */
export function sheetTop(id) {
  const el = document.getElementById(id)
  if (!el) return null
  return el.getBoundingClientRect().top + window.scrollY
}

export function goToSheet(id) {
  const y = sheetTop(id)
  if (y === null) return false
  scrollToY(id === 'inicio' ? 0 : y)
  return true
}

/** Index of the chapter at `ratio` of the viewport height (0.45: the one being read). */
export function currentChapter(ratio = 0.45) {
  const probe = window.scrollY + window.innerHeight * ratio
  let active = 0
  CHAPTERS.forEach((c, i) => {
    const top = sheetTop(c.id)
    if (top !== null && top <= probe) active = i
  })
  return active
}
