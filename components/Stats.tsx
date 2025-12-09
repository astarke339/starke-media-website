'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  value: string
  label: string
  source: string
}

const stats: Stat[] = [
  {
    value: '59%',
    label: 'of prospects spend more time on sites with video content',
    source: 'Google Research',
  },
  {
    value: '71%',
    label: 'of buyers say video builds trust before purchasing',
    source: 'CDK Global',
  },
  {
    value: '5x',
    label: 'Social media delivers higher ROI than traditional advertising',
    source: 'Industry Research',
  },
  {
    value: '49%',
    label: 'Video-first businesses grow revenue faster year-over-year',
    source: 'Aberdeen Group',
  },
]

function StatCounter({ value, inView }: { value: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const isPercentage = value.includes('%')
  const isMultiplier = value.includes('x')
  const numericValue = parseInt(value)

  useEffect(() => {
    if (!inView) return
    
    let start = 0
    const end = numericValue
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, numericValue])

  return (
    <span className="font-mono text-5xl md:text-7xl text-bronze font-bold">
      {inView ? (isMultiplier ? `${count}x` : `${count}${isPercentage ? '%' : ''}`) : value}
    </span>
  )
}

export default function Stats() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-luxury-green-dark grain-texture">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 border border-bronze-dark/30 rounded-sm hover:border-bronze/50 transition-all duration-300 hover:bronze-glow"
              style={{ backgroundColor: '#063831' }}
            >
              <StatCounter value={stat.value} inView={inView} />
              <p className="text-white text-lg md:text-xl mt-4 mb-2 font-body">
                {stat.label}
              </p>
              <p className="text-gray-medium text-sm font-body">
                — {stat.source}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


