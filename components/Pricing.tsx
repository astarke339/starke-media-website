'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  badge?: string
  idealFor?: string
}

const tiers: PricingTier[] = [
  {
    name: 'Remote Editing',
    price: 'Starting at $900',
    description: 'You film. We edit.',
    badge: 'Most Scalable',
    features: [
      '8-10 professionally edited pieces monthly',
      'Cinematic color grading & music selection',
      'Custom filming guidelines provided',
      'Optimized for Instagram Reels and TikTok',
      '48-hour turnaround on edits',
      '2 revision rounds per piece',
      'No on-site visits required',
    ],
    idealFor: 'For teams who can shoot but need expert editing',
  },
  {
    name: 'Starter Package',
    price: 'Starting at $1,500',
    description: 'For businesses starting fresh',
    badge: 'Best for New Clients',
    features: [
      '8-10 premium pieces monthly',
      '1-2 on-site visits per month (flexible)',
      'Professional filming & editing',
      'Remote collaboration for remaining content',
      'Content calendar and posting strategy',
      'Captions and hashtag optimization',
    ],
    idealFor: 'Get started without overhauling your operations',
  },
  {
    name: 'Growth Package',
    price: 'Starting at $2,800',
    description: 'For businesses ready to scale',
    badge: 'Most Popular',
    features: [
      '12-15 premium pieces monthly',
      '2-4 on-site visits per month (weekly option available)',
      'Full social media management and daily posting',
      'Customer testimonials & process documentation',
      'Content calendar and monthly planning',
      'Performance tracking and optimization',
      'Priority support and fast turnarounds',
    ],
    idealFor: 'Consistent content that builds audience and drives sales',
  },
  {
    name: 'Premium Package',
    price: 'Starting at $5,000',
    description: 'For market leaders',
    badge: 'Full Service',
    features: [
      '18-25 premium pieces monthly',
      'Flexible on-site access (up to weekly sessions)',
      'Complete social media management',
      'Weekly posting across all platforms',
      'Paid ad creative development',
      'Monthly strategy and analytics review',
      'Dedicated account management',
    ],
    idealFor: 'Full-service content for businesses serious about growth',
  },
]

interface AddOn {
  name: string
  price: string
  description: string
}

const addOns: AddOn[] = [
  {
    name: 'Cinematic Commercial Package',
    price: 'Starting at $2,500',
    description: 'High-production brand pieces with advanced cinematography and storytelling',
  },
  {
    name: 'Customer Testimonial Package',
    price: 'Starting at $800',
    description: 'Professional filmed testimonials with cinematic editing',
  },
  {
    name: 'Paid Ad Campaign Bundle',
    price: 'Starting at $1,200',
    description: 'Complete ad creative suite with multiple variations and copy (ad spend not included)',
  },
]

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 md:py-32 bg-luxury-green-dark grain-texture">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-16 text-center"
        >
          Packages
        </motion.h2>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 border-2 rounded-sm transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                tier.badge === 'Most Popular'
                  ? 'border-bronze bronze-glow lg:scale-105'
                  : 'border-bronze-dark/30 hover:border-bronze hover:bronze-glow'
              }`}
              style={{ backgroundColor: '#063831' }}
            >
              {tier.badge && (
                <div className="inline-block px-3 py-1 bg-bronze text-black text-xs font-semibold rounded-sm mb-4 self-start">
                  {tier.badge}
                </div>
              )}

              <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                {tier.name}
              </h3>
              
              <div className="mb-3">
                <span className="font-mono text-2xl md:text-3xl text-bronze font-bold">
                  {tier.price}
                </span>
                <span className="text-gray-medium text-sm font-body">/month</span>
              </div>

              <p className="text-gray-300 text-sm font-body mb-4 pb-4 border-b border-bronze-dark/30">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-6 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {tier.idealFor && (
                <p className="text-bronze text-xs font-body mb-4 italic">
                  {tier.idealFor}
                </p>
              )}

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-sm font-semibold transition-all duration-300 text-sm ${
                  tier.badge === 'Most Popular'
                    ? 'bg-bronze text-black hover:bg-gold-light hover:bronze-glow'
                    : 'border-2 border-bronze text-bronze hover:bg-bronze hover:text-black hover:bronze-glow'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Production */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-20 p-8 rounded-sm border border-bronze-dark/30"
          style={{ backgroundColor: 'rgba(6, 56, 49, 0.5)' }}
        >
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3">
            Need Something Bigger?
          </h3>
          <p className="text-gray-300 text-base md:text-lg font-body max-w-3xl mx-auto">
            We build custom packages for brands with unique production needs. Let&apos;s talk.
          </p>
        </motion.div>

        {/* Premium Add-Ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-3xl md:text-4xl text-white mb-4 text-center">
            Premium Add-Ons
          </h3>
          <p className="text-gray-300 text-lg font-body text-center mb-10">
            Add to any package:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-bronze-dark/30 rounded-sm hover:border-bronze transition-all duration-300 hover:bronze-glow"
                style={{ backgroundColor: '#063831' }}
              >
                <h4 className="font-display text-xl text-white mb-2">
                  {addOn.name}
                </h4>
                <p className="text-bronze text-lg font-mono mb-3">
                  {addOn.price}
                </p>
                <p className="text-gray-300 text-sm font-body">
                  {addOn.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
