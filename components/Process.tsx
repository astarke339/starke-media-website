'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  number: string
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery Call',
    description: '30-minute call to understand your business, goals, and current content gaps',
  },
  {
    number: '02',
    title: 'Content Strategy',
    description: 'Custom content plan built around your audience, industry, and budget',
  },
  {
    number: '03',
    title: 'Production & Editing',
    description: 'We handle production and editing. You approve final cuts. Fast turnarounds, no surprises.',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'Content goes live. We track results and refine monthly.',
  },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-luxury-green-darkest grain-texture">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-20 text-center"
        >
          The Process
        </motion.h2>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-bronze/30" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Circle indicator */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6 border-4 border-bronze rounded-full mx-auto" style={{ backgroundColor: '#063831' }}>
                  <span className="font-mono text-3xl text-bronze font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg font-body">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


