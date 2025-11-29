'use client'

import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(to bottom, #063831, #063831, #000000)' }}>
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
        >
          Automotive Content That Converts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light"
        >
          Video production and social media management for automotive businesses of all types—dealerships, detail shops, performance garages, and beyond. Remote editing available nationwide. On-site production across Michigan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group px-8 py-4 border-2 border-bronze text-bronze font-semibold rounded-sm transition-all duration-300 hover:bg-bronze hover:text-black hover:bronze-glow transform hover:scale-105 min-w-[200px]"
          >
            See Our Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-4 bg-bronze text-black font-semibold rounded-sm transition-all duration-300 hover:bg-gold-light hover:bronze-glow transform hover:scale-105 min-w-[200px]"
          >
            Contact Us
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="group px-8 py-4 border-2 border-bronze text-bronze font-semibold rounded-sm transition-all duration-300 hover:bg-bronze hover:text-black hover:bronze-glow transform hover:scale-105 min-w-[200px]"
          >
            View Packages
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-bronze rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-bronze rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}


