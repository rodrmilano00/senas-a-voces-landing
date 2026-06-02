import { useDarkMode } from './hooks/useDarkMode'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'
import Community from './components/Community'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useDarkMode(false)

  return (
    <>
      <Nav dark={dark} setDark={setDark} />
      <Hero />
      <Products />
      <Community />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
