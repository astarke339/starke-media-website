'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 grain-texture" style={{ backgroundColor: '#063831' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8 text-center"
        >
          Recent Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto font-body"
        >
          See what we create. No stock footage. No templates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-sm overflow-hidden border-2 border-bronze-dark hover:border-bronze transition-all duration-300 hover:bronze-glow bg-luxury-green-dark">
            {/* Video placeholder - replace with actual video */}
            <video
              className="w-full h-full object-cover"
              controls
              loop
              playsInline
              poster="https://placehold.co/1920x1080/0D3D3D/B8935C?text=Your+Video+Montage"
            >
              <source src="/video/portfolio-reel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Fallback when no video is uploaded yet */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-luxury-green-dark to-luxury-green pointer-events-none">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-bronze rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-bronze text-lg font-body mb-2">Video Showcase</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


