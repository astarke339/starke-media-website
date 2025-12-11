'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border-2 border-bronze-dark hover:border-bronze transition-all duration-300">
              <div className="relative w-full h-full">
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Austin Starke"
                  fill
                  priority
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />
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
              Started in the automotive industry—wrapping, PPF, detailing. Learned that most businesses don&apos;t need more content. They need better content, posted consistently, with a strategy behind it.
            </p>

            <p className="text-gray-300 text-lg md:text-xl font-body leading-relaxed">
              Now I help businesses across Michigan and beyond turn their daily operations into content that actually moves the needle. No fluff. No vanity metrics. Just work that drives revenue.
            </p>

            <div className="pt-4 space-y-4">
              <p className="text-bronze text-lg font-body">
                Based in Michigan. Sharing the process @austin.starke
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


