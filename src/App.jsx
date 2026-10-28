import { useEffect } from 'react'
import { useDarkMode } from './hooks/useDarkMode'
import { startSmoothScroll } from './lib/smoothScroll'
import Nav from './components/Nav'
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

  return (
    <>
      <a
        href="#contenido"
        className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-amber px-5 py-3 font-bold text-amber-ink transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Nav dark={dark} setDark={setDark} />
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
