'use client'

import { motion } from 'framer-motion'
import { Camera, Target, Lightbulb, Video } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Video className="w-12 h-12" />,
    title: 'Remote Content Editing',
    description: "You film. We edit. Send raw footage from your phone and get back polished, platform-ready content within 48 hours. Perfect for teams who can capture but need professional post-production.",
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Social Media Management',
    description: 'Full-service social media: strategy, scheduling, posting, engagement. We run your accounts so you can run your business. Proven systems built for consistency and growth.',
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: 'Marketing Strategy & Consulting',
    description: "Monthly strategy sessions, performance analysis, and brand positioning. We find what&apos;s working, cut what&apos;s not, and optimize for ROI.",
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: 'On-Site Video Production',
    description: 'Professional filming at your location. Cinematic quality without the Hollywood budget. Flexible scheduling—monthly, bi-weekly, or weekly sessions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 grain-texture" style={{ backgroundColor: '#063831' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-16 text-center"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 border border-bronze-dark/30 rounded-sm hover:border-bronze transition-all duration-300 hover:bronze-glow hover:-translate-y-2"
              style={{ backgroundColor: '#063831' }}
            >
              <div className="text-bronze mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-lg font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


