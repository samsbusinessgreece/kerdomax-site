import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Trust from '@/components/Trust'
import BetaForm from '@/components/BetaForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-gradient-dark text-light-text">
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Trust />
      <BetaForm />
      <Footer />
    </main>
  )
}
