'use client'

import { Instagram, Mail } from 'lucide-react'
import { EMAIL, INSTAGRAM_URL } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="py-12 bg-luxury-green-darkest grain-texture border-t border-bronze-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:text-gold-light transition-colors duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-bronze hover:text-gold-light transition-colors duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-white font-body text-sm">
              © {new Date().getFullYear()} Starke Media. Built in Michigan.
            </p>
            <p className="text-gray-300 font-body text-xs">
              Video Production • Short-Form Content • Brand Films
            </p>
            <p className="text-gray-300 font-body text-xs">
              Serving Metro Detroit and businesses across Michigan
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
