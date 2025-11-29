'use client'

import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-luxury-green-darkest grain-texture border-t border-bronze-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center space-y-2 mb-4">
            <p className="text-gray-300 font-body text-sm">
              Trusted by automotive businesses across Michigan
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/austin.starke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bronze hover:text-gold-light transition-colors duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="mailto:a.starkemedia@gmail.com"
              className="text-bronze hover:text-gold-light transition-colors duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-white font-body text-sm">
              © 2024 Starke Media. Built in Michigan.
            </p>
            <p className="text-gray-medium font-body text-xs">
              Automotive Video Production | Social Media Management | Content Marketing
            </p>
            <p className="text-gray-medium font-body text-xs">
              Serving Detroit, Grand Rapids, Ann Arbor, and surrounding Michigan communities
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


