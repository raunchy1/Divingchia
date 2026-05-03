'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Waves } from 'lucide-react'
import { WA_URL } from '@/lib/constants'

const navLinks = [
  {
    label: 'Experiences',
    href: '#',
    children: [
      { label: 'Try Scuba', href: '/esperienze/try-scuba' },
      { label: 'Guided Dives', href: '/esperienze/guided-dives' },
      { label: 'Snorkeling Boat', href: '/esperienze/snorkeling-boat' },
      { label: 'Private & Custom', href: '/esperienze/private-tours' },
      { label: 'Sunset Experience', href: '/esperienze/sunset-experience' },
    ],
  },
  { label: 'Courses', href: '/corsi' },
  { label: 'Prices', href: '/prezzi' },
  { label: 'Safety', href: '/sicurezza-attrezzatura' },
  { label: 'Gallery', href: '/galleria' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contatti' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-aqua rounded-full flex items-center justify-center">
              <Waves className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-playfair text-xl font-bold text-white leading-none block">
                Diving Chia
              </span>
              <span className="font-mono text-[10px] text-aqua uppercase tracking-widest">
                Since 1996
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className="text-white/90 hover:text-white text-sm font-inter flex items-center gap-1 transition-colors">
                    {link.label}
                    <span className="text-xs">▾</span>
                  </button>
                  {dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-52">
                      <div className="bg-navy rounded-xl shadow-2xl border border-white/10 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm font-inter transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#1ebe5d] transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-sm border-t border-white/10">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="text-white/50 text-xs font-mono uppercase tracking-widest px-3 pt-4 pb-2">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] text-white text-center text-sm font-semibold px-4 py-3 rounded-full hover:bg-[#1ebe5d] transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
