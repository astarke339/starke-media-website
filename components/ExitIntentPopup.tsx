'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [businessIdentifier, setBusinessIdentifier] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to top 50px of viewport and is moving up
      if (e.clientY <= 50 && e.movementY < 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    // ESC key handler
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleClose()
      }
    }

    document.addEventListener('mousemove', handleMouseLeave)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousemove', handleMouseLeave)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [hasShown, isVisible])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(false)

    // Brevo API Configuration
    const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY
    const BREVO_LIST_ID = 2

    if (!BREVO_API_KEY) {
      console.error('Brevo API key not found. Please set NEXT_PUBLIC_BREVO_API_KEY in .env.local')
      setErrorMessage(true)
      setIsSubmitting(false)
      return
    }

    const payload = {
      email: email,
      attributes: {
        BUSINESS_ID: businessIdentifier
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
        
        // Close popup after 3 seconds
        setTimeout(() => {
          handleClose()
          setSuccessMessage(false)
        }, 3000)
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

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={handleClose}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-sm overflow-hidden"
              style={{
                backgroundColor: '#0a0a0a',
                border: '1px solid #d4af37',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
              }}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gold-light transition-colors duration-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-10">
                {successMessage ? (
                  // Success Message
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bronze/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-bronze" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl text-white mb-3">
                      Audit Request Received!
                    </h2>
                    <p className="text-gray-300 text-base font-body">
                      Check your email for next steps.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-3xl md:text-4xl text-white mb-3">
                      Before You Go...
                    </h2>

                    <p className="text-bronze text-lg md:text-xl mb-4 font-body">
                      Get a Free Content Audit for Your Business
                    </p>

                    <p className="text-gray-300 text-base mb-6 font-body leading-relaxed">
                      I'll review your current content and send you a personalized breakdown of what's working, what's not, and how to create content that actually converts.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 rounded-sm font-body text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-all duration-300"
                      style={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                    />
                    
                    <input
                      type="text"
                      value={businessIdentifier}
                      onChange={(e) => setBusinessIdentifier(e.target.value)}
                      placeholder="Business name or Instagram handle"
                      required
                      className="w-full px-4 py-3 rounded-sm font-body text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bronze/50 transition-all duration-300"
                      style={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid rgba(212, 175, 55, 0.2)'
                      }}
                    />
                    
                    {/* Disclosure text */}
                    <p className="text-xs text-gray-500 mt-2 font-body leading-relaxed">
                      By submitting your email, you agree to receive your free content audit and occasional emails from Starke Media with content strategy tips and insights. You can unsubscribe at any time.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-sm font-semibold transition-all duration-300 disabled:opacity-50"
                    style={{
                      backgroundColor: '#d4af37',
                      color: '#0a0a0a'
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Me My Audit'}
                  </button>
                </form>

                {/* Error Message */}
                {errorMessage && (
                  <div className="mt-4 p-3 rounded-sm" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)' }}>
                    <p className="text-red-400 text-sm font-body text-center">
                      Something went wrong. Email me directly at{' '}
                      <a href="mailto:a.starkemedia@gmail.com" className="text-bronze hover:text-gold-light underline">
                        a.starkemedia@gmail.com
                      </a>
                    </p>
                  </div>
                )}

                {/* No thanks link */}
                <div className="text-center mt-6">
                  <button
                    onClick={handleClose}
                    className="text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300 font-body"
                  >
                    No thanks
                  </button>
                </div>
                </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

