import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import TrackRecord from '@/components/TrackRecord'
import Position from '@/components/Position'
import Services from '@/components/Services'
import Figures from '@/components/Figures'
import About from '@/components/About'
import Approach from '@/components/Approach'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <TrackRecord />
      <Position />
      <Services />
      <Figures />
      <About />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
