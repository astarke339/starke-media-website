'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { EMAIL, PROJECT_FORM_URL } from '@/lib/site'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 grain-texture" style={{ backgroundColor: '#063831' }}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-center"
        >
          Let&apos;s Talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl text-center mb-12 font-body max-w-2xl mx-auto"
        >
          Tell us about your business and we&apos;ll send you a custom content plan, built around your goals. Expect a reply within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-bronze-dark/30 rounded-sm p-8 md:p-12 hover:border-bronze transition-all duration-300 text-center"
          style={{ backgroundColor: '#063831' }}
        >
          <a
            href={PROJECT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-10 py-5 bg-bronze text-black text-lg font-semibold rounded-sm transition-all duration-300 hover:bg-gold-light hover:bronze-glow transform hover:scale-[1.02] group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-bronze-dark/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-300 font-body" style={{ backgroundColor: '#063831' }}>or email directly</span>
            </div>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-3 text-bronze hover:text-gold-light transition-colors duration-300 group text-lg md:text-2xl font-body break-all"
          >
            <Mail className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform duration-300" />
            {EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
