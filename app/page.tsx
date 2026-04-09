import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Trust from '@/components/Trust'
import BetaForm from '@/components/BetaForm'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main style={{ background: 'var(--navy)', color: 'var(--light)' }}>
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Trust />
      <BetaForm />
      <Footer />
      <ScrollReveal />
    </main>
  )
}
