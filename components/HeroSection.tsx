'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Shield, Clock, Phone, Sparkles, ArrowRight, Calendar } from 'lucide-react'
import CalendarModal from './CalendarModal'

interface HeroSectionProps {
  onCTAClick: () => void
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-0 bg-white">
      {/* Video background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/video/background video cryopen.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-black text-white rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 fill-current" />
                England's Business Award Winner 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-black mb-6 leading-tight">
              Remove Skin Tags & Warts in{' '}
              <span className="text-elegant-gray">Seconds</span>
            </h1>
            
            <p className="text-xl text-charcoal mb-8">
              Professional CryoPen treatment at Essex Way Clinic. 
              Safe, effective, and no cutting or stitches required.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-black flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-charcoal font-medium">No cutting or stitches needed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-black flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-charcoal font-medium">Safe for children aged 6+</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-black flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-charcoal font-medium">Professional medical clinic</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-black flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-charcoal font-medium">Treatment from just £50</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                onClick={onCTAClick}
                className="cta-button flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <a
                href="tel:07414452441"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-black text-primary-black font-semibold rounded-full hover:bg-primary-black hover:text-white transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Call:</span> 07414 452 441
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-black" />
                <span className="text-sm text-charcoal font-medium">FDA/CE Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-black" />
                <span className="text-sm text-charcoal font-medium">Same Week Appointments</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary-black" />
                <span className="text-sm text-charcoal font-medium">Expert Treatments</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-black/10 to-elegant-gray/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-elegant border border-light-gray p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-black to-charcoal rounded-full mb-4">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-black mb-2">Quick Assessment</h3>
                  <p className="text-charcoal">Find out if CryoPen is right for you</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-off-white rounded-lg border border-light-gray">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <p className="font-semibold text-primary-black">30-second check</p>
                      <p className="text-sm text-charcoal">Quick and easy assessment</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-off-white rounded-lg border border-light-gray">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-primary-black">Free consultation call</p>
                      <p className="text-sm text-charcoal">Speak with Kerry, our bookings manager</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-off-white rounded-lg border border-light-gray">
                    <span className="text-2xl">💰</span>
                    <div>
                      <p className="font-semibold text-primary-black">No obligation</p>
                      <p className="text-sm text-charcoal">Get your personalized quote</p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={onCTAClick}
                  className="w-full py-4 bg-primary-black text-white font-bold rounded-full hover:bg-elegant-gray hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Start Your Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <p className="text-center text-sm text-silver mt-4">
                  Join our happy patients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  )
}