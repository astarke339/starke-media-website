'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PROJECT_FORM_URL } from '@/lib/site'

const links = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/80 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-site items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#top" className="font-wide text-[15px] md:text-base font-extrabold uppercase tracking-[0.04em] text-bone">
          Starke Media
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[15px] text-bone/80 hover:text-bone transition-colors">
              {link.name}
            </a>
          ))}
          <a
            href={PROJECT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] btn-gold px-5 py-2.5 text-[15px] font-semibold text-ink"
          >
            Start your project
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden -mr-2 p-2 text-bone"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line px-5 pb-6 pt-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg text-bone"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PROJECT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-[2px] btn-gold px-5 py-3.5 text-center font-semibold text-ink"
          >
            Start your project
          </a>
        </div>
      )}
    </header>
  )
}
