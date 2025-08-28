'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Phone, Menu, X, Calendar, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ onCTAClick }: { onCTAClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100) // Only show after scrolling past hero
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Before & After', href: '#gallery' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg py-2 opacity-100 translate-y-0 border-b border-white/20'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo/The Essex Way Clinic Logo.png"
              alt="The Essex Way Clinic"
              width={180}
              height={60}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-charcoal hover:text-primary-black transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onCTAClick}
              className="px-6 py-2.5 bg-primary-black text-white font-semibold rounded-full hover:bg-elegant-gray hover:shadow-lg transition-all"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-primary-black"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t pt-4"
            >
              <nav className="flex flex-col gap-3 mb-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-charcoal hover:text-primary-black transition-colors font-medium py-2"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:07414452441"
                  className="flex items-center justify-center gap-2 py-3 border border-primary-black text-primary-black rounded-full font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>07414 452 441</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    onCTAClick?.()
                  }}
                  className="py-3 bg-gradient-to-r from-primary-black to-elegant-gray text-white font-semibold rounded-full"
                >
                  Book Free Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}