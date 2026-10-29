import { useEffect } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import { startSmoothScroll } from './lib/smoothScroll'
import { goToSheet } from './lib/sheetNav'
import Header from './components/Header'
import SheetStack from './components/sheets/SheetStack'
import CoverSheet from './components/sheets/CoverSheet'
import ProblemSheet from './components/sheets/ProblemSheet'
import BuildSheet from './components/sheets/BuildSheet'
import CreatorsSheet from './components/sheets/CreatorsSheet'
import JourneySheet from './components/sheets/JourneySheet'
import CommunitySheet from './components/sheets/CommunitySheet'
import ContactSheet from './components/sheets/ContactSheet'

export default function App() {
  const [dark, setDark] = useDarkMode()

  useEffect(() => startSmoothScroll(), [])

  // Stuck sheets break native anchor jumps, so in-page links scroll to the
  // sheet's real position in the document instead.
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href^="#"]')
      if (!link || e.defaultPrevented) return
      const id = link.getAttribute('href').slice(1)
      if (!id || id === 'contenido') return
      if (goToSheet(id)) e.preventDefault()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <a
        href="#contenido"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-amber px-5 py-3 font-bold text-amber-ink transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Header dark={dark} setDark={setDark} />
      <main id="contenido">
        <SheetStack>
          <CoverSheet key="portada" />
          <ProblemSheet key="problema" />
          <BuildSheet key="construimos" />
          <CreatorsSheet key="creadores" />
          <JourneySheet key="trayectoria" />
          <CommunitySheet key="comunidad" />
          <ContactSheet key="contacto" />
        </SheetStack>
      </main>
    </>
  )
}
