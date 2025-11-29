'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 grain-texture" style={{ backgroundColor: '#063831' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-16 text-center"
        >
          Who I Am
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-luxury-green-dark to-luxury-green rounded-sm overflow-hidden border-2 border-bronze-dark hover:border-bronze transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto bg-luxury-green-darkest border-2 border-bronze rounded-full flex items-center justify-center mb-4">
                    <span className="font-display text-6xl text-bronze">AS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              Austin Starke
            </h3>
            
            <p className="text-bronze text-lg font-body mb-6">Founder</p>
            
            <p className="text-gray-300 text-lg md:text-xl font-body leading-relaxed">
              Built my foundation in automotive customization—car wrapping, paint protection film, and detailing. 
              Transitioned to content marketing when I realized automotive businesses needed consistent, conversion-focused content, 
              not just one-off productions.
            </p>

            <p className="text-gray-300 text-lg md:text-xl font-body leading-relaxed">
              Today, Starke Media serves multiple automotive businesses across Michigan with scalable content packages designed for efficiency and results. I combine hands-on automotive industry experience with data-driven marketing strategy to help shops, dealerships, and builders dominate their local markets on social media.
            </p>

            <div className="pt-4 space-y-4">
              <p className="text-bronze text-lg font-body">
                Based in Michigan. Building in public @austin.starke
              </p>
              
              <a
                href="https://instagram.com/austin.starke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-bronze hover:text-gold-light transition-colors duration-300 group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-body text-lg">@austin.starke</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


