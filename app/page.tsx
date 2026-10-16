import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Industries from '@/components/Industries'
import Approach from '@/components/Approach'
import Services from '@/components/Services'
import Process from '@/components/Process'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Industries />
        <Approach />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
