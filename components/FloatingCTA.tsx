'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, MessageSquare, ChevronUp } from 'lucide-react'
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics'

interface FloatingCTAProps {
  onCTAClick: () => void
}

export default function FloatingCTA({ onCTAClick }: FloatingCTAProps) {
  const [showQuickBook, setShowQuickBook] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
      
      if (currentScrollY > 800 && currentScrollY > lastScrollY) {
        setTimeout(() => setShowQuickBook(true), 2000)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>
        {showQuickBook && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-4 z-40 max-w-xs"
          >
            <div className="bg-white rounded-lg shadow-2xl p-4 border-l-4 border-primary-black">
              <button
                onClick={() => setShowQuickBook(false)}
                className="absolute top-2 right-2 text-silver hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
              
              <h4 className="font-bold text-primary-black mb-2">
                Ready to book?
              </h4>
              <p className="text-sm text-charcoal mb-3">
                Skip the assessment and book directly with Kerry
              </p>
              <button
                onClick={onCTAClick}
                className="w-full py-2 px-4 bg-gradient-to-r from-primary-black to-elegant-gray text-white font-semibold rounded-full text-sm hover:shadow-lg transition-all"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-50 hidden md:flex flex-col gap-3">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-off-white text-charcoal rounded-full shadow-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <a
          href="https://wa.me/447414452441?text=Hi,%20I'm%20interested%20in%20CryoPen%20treatment"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('floating_button')}
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center group"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
        
        <a
          href="tel:07414452441"
          onClick={() => trackPhoneClick('floating_button')}
          className="w-14 h-14 bg-primary-black text-white rounded-full shadow-lg hover:bg-elegant-gray transition-colors flex items-center justify-center animate-pulse"
          aria-label="Call now"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-light-gray shadow-xl md:hidden z-40"
      >
        <div className="flex items-center justify-between gap-3 p-3">
          <button
            onClick={onCTAClick}
            className="flex-1 px-4 py-3 bg-primary-black text-white font-bold rounded-full text-sm"
          >
            Start Assessment
          </button>
          <a
            href="tel:07414452441"
            onClick={() => trackPhoneClick('mobile_sticky_bar')}
            className="px-4 py-3 bg-white border-2 border-primary-black text-primary-black rounded-full"
            aria-label="Call now"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </>
  )
}