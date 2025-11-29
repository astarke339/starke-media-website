import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ExitIntentPopup from '@/components/ExitIntentPopup'

export default function Home() {
  return (
    <>
      <Navigation />
      <ExitIntentPopup />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Portfolio />
        <Services />
        <Process />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </main>
    </>
  )
}


