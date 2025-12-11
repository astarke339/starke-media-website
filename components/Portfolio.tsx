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
          </div>
        </motion.div>
      </div>
    </section>
  )
}


