'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, Phone, Gift, Users, Calendar, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function ConsultationBooked() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 50.00,
        currency: 'GBP',
        content_type: 'consultation_confirmed'
      })
    }
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/conversion_id',
        value: 50.00,
        currency: 'GBP'
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-trust-green/5 via-white to-medical-blue/5">
      <div className="section-container py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-medical p-8 md:p-12 text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-trust-green to-medical-blue rounded-full mb-6"
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consultation Booked Successfully!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Kerry will call you within 24 hours to discuss your CryoPen treatment
            </p>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
              <p className="text-amber-800 font-medium">
                ⚡ Important: Please answer when Kerry calls from 07414 452 441
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-medical-blue" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Kerry Calls</p>
                <p className="text-xs text-gray-600">Within 24 hours</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-medical-blue" />
                </div>
                <p className="text-sm font-semibold text-gray-900">5-Min Chat</p>
                <p className="text-xs text-gray-600">Quick consultation</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-medical-blue" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Book Treatment</p>
                <p className="text-xs text-gray-600">If suitable</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-trust-green/10 rounded-full flex items-center justify-center mb-2">
                  <Check className="w-6 h-6 text-trust-green" />
                </div>
                <p className="text-sm font-semibold text-gray-900">Clear Skin</p>
                <p className="text-xs text-gray-600">Fast results</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-6 h-6 text-medical-blue" />
                <h3 className="text-lg font-bold text-gray-900">Special Offer</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Book multiple lesion treatment and save £25
              </p>
              <p className="text-sm text-trust-green font-semibold mb-4">
                Mention this offer when Kerry calls
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                  <span>2-3 lesions for just £75 (save £25)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                  <span>Same session treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                  <span>Limited time offer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-medical-blue" />
                <h3 className="text-lg font-bold text-gray-900">Refer a Friend</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Both get £10 off your treatments
              </p>
              <p className="text-sm text-trust-green font-semibold mb-4">
                Share your booking confirmation
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                  <span>Friend books consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                  <span>You both save £10</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-trust-green flex-shrink-0 mt-0.5" />
                  <span>No limit on referrals</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-medical-blue to-trust-green rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Prepare for Your Call with Kerry
            </h3>
            <p className="mb-6 opacity-90">
              Have these details ready for a quicker consultation:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="font-semibold">Location of lesions</p>
                <p className="text-sm opacity-90">Where on your body</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="font-semibold">How long you've had them</p>
                <p className="text-sm opacity-90">Approximate timeframe</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                <p className="font-semibold">Any questions</p>
                <p className="text-sm opacity-90">About the procedure</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Need to reschedule or have questions?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07414452441"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-medical-blue text-white font-bold rounded-full hover:bg-blue-700 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: 07414 452 441
              </a>
              <a
                href="https://wa.me/447414452441"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              <Link href="/" className="text-medical-blue hover:underline">
                ← Back to homepage
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}