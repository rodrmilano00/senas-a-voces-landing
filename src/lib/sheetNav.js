import { scrollToY } from './smoothScroll'

// The portfolio's chapters, in reading order (ids of each sheet's section).
export const CHAPTERS = [
  { id: 'inicio', label: 'Portada' },
  { id: 'problema', label: 'El problema' },
  { id: 'construimos', label: 'Ecosistema' },
  { id: 'creadores', label: 'Los creadores' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'contacto', label: 'Contacto' },
]

/**
 * Where a sheet starts in the document. Stuck sheets report their stuck
 * position, so the start is read from the end marker of the sheet before it.
 */
export function sheetTop(id) {
  const el = document.getElementById(id)
  if (!el) return null
  const slot = el.closest('[data-sheet-slot]')
  if (!slot) return el.getBoundingClientRect().top + window.scrollY
  const index = Number(slot.dataset.sheetSlot)
  if (index === 0) return 0
  const end = document.querySelector(`[data-sheet-end="${index - 1}"]`)
  return end ? end.getBoundingClientRect().top + window.scrollY : 0
}

export function goToSheet(id) {
  const y = sheetTop(id)
  if (y === null) return false
  scrollToY(y)
  return true
}

/** Index of the chapter currently being read. */
export function currentChapter() {
  const probe = window.scrollY + window.innerHeight * 0.45
  let active = 0
  CHAPTERS.forEach((c, i) => {
    const top = sheetTop(c.id)
    if (top !== null && top <= probe) active = i
  })
  return active
}
