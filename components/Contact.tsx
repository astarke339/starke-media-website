'use client'

import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(false)
    setSuccessMessage(false)

    // Brevo API Configuration
    const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY || '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'
    const BREVO_LIST_ID = 5

    const payload = {
      email: formData.email,
      attributes: {
        FIRSTNAME: formData.name,
        BUSINESS_TYPE: formData.businessType,
        MONTHLY_BUDGET: formData.budget,
        MESSAGE: formData.message
      },
      listIds: [BREVO_LIST_ID],
      updateEnabled: true
    }

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': BREVO_API_KEY
        },
        body: JSON.stringify(payload)
      })

      if (response.ok || response.status === 201) {
        // Success - show success message
        setSuccessMessage(true)
        
        // Clear form fields
        setFormData({
          name: '',
          email: '',
          businessType: '',
          budget: '',
          message: '',
        })

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage(false)
        }, 5000)
      } else {
        // API error
        setErrorMessage(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrorMessage(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
          Ready to Scale Your Content?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg md:text-xl text-center mb-12 font-body"
        >
          Let&apos;s discuss a custom package for your automotive business
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border border-bronze-dark/30 rounded-sm p-8 md:p-12 hover:border-bronze transition-all duration-300"
          style={{ backgroundColor: '#063831' }}
        >
          <div className="mb-8 text-center">
            <a
              href="mailto:a.starkemedia@gmail.com"
              className="inline-flex items-center gap-3 text-bronze hover:text-gold-light transition-colors duration-300 group text-xl md:text-2xl font-body"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              a.starkemedia@gmail.com
            </a>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-bronze-dark/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-medium font-body" style={{ backgroundColor: '#063831' }}>or send a message</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white text-sm font-body mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-luxury-green-darkest border border-bronze-dark/30 rounded-sm text-white focus:border-bronze focus:outline-none focus:bronze-glow transition-all duration-300 font-body"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white text-sm font-body mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-luxury-green-darkest border border-bronze-dark/30 rounded-sm text-white focus:border-bronze focus:outline-none focus:bronze-glow transition-all duration-300 font-body"
              />
            </div>

            <div>
              <label htmlFor="businessType" className="block text-white text-sm font-body mb-2">
                Business Type
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-luxury-green-darkest border border-bronze-dark/30 rounded-sm text-white focus:border-bronze focus:outline-none focus:bronze-glow transition-all duration-300 font-body"
              >
                <option value="">Select your business type</option>
                <option value="dealership">Dealership</option>
                <option value="collision-center">Collision Center</option>
                <option value="detail-shop">Detail Shop</option>
                <option value="custom-builder">Custom Builder</option>
                <option value="performance-shop">Performance Shop</option>
                <option value="auto-repair">Auto Repair</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-white text-sm font-body mb-2">
                Estimated Monthly Marketing Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-luxury-green-darkest border border-bronze-dark/30 rounded-sm text-white focus:border-bronze focus:outline-none focus:bronze-glow transition-all duration-300 font-body"
              >
                <option value="">Select your budget range</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-2500">$1,000 - $2,500</option>
                <option value="2500-5000">$2,500 - $5,000</option>
                <option value="5000-plus">$5,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white text-sm font-body mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-luxury-green-darkest border border-bronze-dark/30 rounded-sm text-white focus:border-bronze focus:outline-none focus:bronze-glow transition-all duration-300 resize-none font-body"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-bronze text-black font-semibold rounded-sm transition-all duration-300 hover:bg-gold-light hover:bronze-glow transform hover:scale-[1.02] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 p-4 rounded-sm" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}>
              <p className="text-green-400 text-base font-body text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message sent! I'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-6 p-4 rounded-sm" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
              <p className="text-red-400 text-base font-body text-center">
                Something went wrong. Please email me directly at{' '}
                <a href="mailto:a.starkemedia@gmail.com" className="text-bronze hover:text-gold-light underline">
                  a.starkemedia@gmail.com
                </a>
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-medium text-sm font-body">
            Trusted by automotive businesses across Michigan
          </p>
        </motion.div>
      </div>
    </section>
  )
}


