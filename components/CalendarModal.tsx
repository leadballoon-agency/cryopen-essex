'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, CheckCircle, Check, Phone, MessageSquare } from 'lucide-react'
import { trackFacebookEvent } from '@/lib/analytics'

interface CalendarModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const [bookingComplete, setBookingComplete] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setBookingComplete(false) // Reset state when reopening
      
      // Load GHL form embed script when modal opens
      const script = document.createElement('script')
      script.src = 'https://link.hifuessex.co.uk/js/form_embed.js'
      script.type = 'text/javascript'
      script.async = true
      
      // Add the script if not already present
      if (!document.querySelector('script[src="https://link.hifuessex.co.uk/js/form_embed.js"]')) {
        document.body.appendChild(script)
      }
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleBookingComplete = () => {
    setBookingComplete(true)
    
    // Track as Schedule event (Facebook standard event for appointments)
    trackFacebookEvent('Schedule', {
      value: 25.00,
      currency: 'GBP',
      content_name: 'Consultation Booked',
      content_type: 'CryoPen Consultation'
    })
    
    // Also track custom event for more detail
    trackFacebookEvent('BookingCompleted', {
      value: 25.00,
      currency: 'GBP',
      booking_type: 'online_calendar',
      content_name: 'CryoPen Consultation with Devon'
    })
  }

  const handleClose = () => {
    setBookingComplete(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        />
        
        {/* Modal */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary-black to-elegant-gray px-8 py-6 rounded-t-2xl z-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-light text-white mb-1">
                  Consultation with <span className="font-semibold">Devon</span>
                </h2>
                <p className="text-sm text-gray-300">
                  Book your complimentary CryoPen assessment
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Benefits Bar */}
          <div className="bg-white px-8 py-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-black/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary-black" />
                </div>
                <span className="text-charcoal font-medium">Complimentary Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-black/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary-black" />
                </div>
                <span className="text-charcoal font-medium">15-Minute Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-black/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary-black" />
                </div>
                <span className="text-charcoal font-medium">No Obligation</span>
              </div>
            </div>
          </div>

          {!bookingComplete ? (
            <>
              {/* Calendar Embed */}
              <div className="p-6 bg-white">
                <iframe 
                  src="https://link.hifuessex.co.uk/widget/booking/kLEVeJXuQZV6PA5oveyu" 
                  style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '500px' }}
                  scrolling="no" 
                  id="ghl-calendar-iframe"
                  title="Book Your Consultation"
                />
              </div>

              {/* Booking Complete Button */}
              <div className="px-6 pb-4">
                <button
                  onClick={handleBookingComplete}
                  className="w-full py-3 bg-primary-black text-white font-semibold rounded-full hover:bg-elegant-gray transition-colors mb-4"
                >
                  I've Completed My Booking ✓
                </button>
                
                <div className="bg-off-white border border-light-gray rounded-lg p-4">
                  <p className="text-sm text-charcoal">
                    <span className="font-medium">Please note:</span> A £25 consultation fee applies for your appointment with Devon. 
                    Additional skin analysis fees may apply if required.
                  </p>
                </div>
              </div>
            </>
          ) : (
            /* Thank You State */
            <div className="p-8 bg-white text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-black to-elegant-gray rounded-full mb-6"
              >
                <Check className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-primary-black mb-4">
                Booking Confirmed!
              </h3>
              
              <p className="text-lg text-charcoal mb-6">
                Kerry will call you within 24 hours to confirm your appointment
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800 font-medium">
                  ⚡ Important: Please answer when Kerry calls from 07414 452 441
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-off-white rounded-lg p-4">
                  <Phone className="w-8 h-8 text-primary-black mx-auto mb-2" />
                  <p className="font-semibold text-primary-black">Kerry Calls</p>
                  <p className="text-sm text-charcoal">Within 24 hours</p>
                </div>
                <div className="bg-off-white rounded-lg p-4">
                  <Clock className="w-8 h-8 text-primary-black mx-auto mb-2" />
                  <p className="font-semibold text-primary-black">5-Min Chat</p>
                  <p className="text-sm text-charcoal">Quick consultation</p>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-primary-black text-white font-bold rounded-full hover:bg-elegant-gray transition-all"
              >
                Close
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="bg-off-white px-6 py-4 rounded-b-2xl border-t border-light-gray">
            <div className="text-center">
              <p className="text-sm text-charcoal mb-2">
                Prefer to call directly? Reach Kerry at{' '}
                <a href="tel:07414452441" className="font-semibold text-primary-black hover:underline">
                  07414 452 441
                </a>
              </p>
              <p className="text-xs text-silver">
                Available Monday-Saturday • WhatsApp friendly
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}