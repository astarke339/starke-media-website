import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Portfolio />
        <Services />
        <Process />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
