'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Clock, Phone, Shield, Star, Calendar } from 'lucide-react'
import CalendarModal from './CalendarModal'

interface AssessmentData {
  treatmentType: string
  lesionCount: number
  urgency: string
}

interface ResultsAndBookingProps {
  assessmentData: AssessmentData
}

const treatmentDetails = {
  skin_tags: {
    name: 'Skin Tags',
    duration: '5-15 seconds',
    successRate: '98%',
    sessions: 1,
    healing: '1-2 weeks'
  },
  warts: {
    name: 'Warts/Verrucas',
    duration: '10-25 seconds',
    successRate: '85%',
    sessions: '1-2',
    healing: '2-4 weeks'
  },
  age_spots: {
    name: 'Age/Sun Spots',
    duration: '5-20 seconds',
    successRate: '90%',
    sessions: 1,
    healing: '2-3 weeks'
  },
  multiple: {
    name: 'Multiple Lesions',
    duration: '5-25 seconds each',
    successRate: '85-98%',
    sessions: '1-2',
    healing: '1-4 weeks'
  }
}

export default function ResultsAndBooking({ assessmentData }: ResultsAndBookingProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const treatment = treatmentDetails[assessmentData.treatmentType as keyof typeof treatmentDetails]
  
  const estimatedPrice = assessmentData.lesionCount === 1 ? 50 : 
                         assessmentData.lesionCount <= 3 ? 75 : 
                         assessmentData.lesionCount <= 5 ? 120 : 150

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        value: estimatedPrice,
        currency: 'GBP',
        content_type: 'product',
        content_name: treatment.name,
        content_category: 'CryoPen Treatment'
      })
    }
  }, [estimatedPrice, treatment.name])

  return (
    <>
      <div className="bg-white rounded-2xl shadow-elegant p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-black to-elegant-gray rounded-full mb-4">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-light text-primary-black mb-2">
              Assessment <span className="font-semibold">Complete</span>
            </h2>
            <p className="text-xl text-charcoal">Devon can treat your {treatment.name.toLowerCase()} with CryoPen</p>
            <p className="text-sm text-silver mt-2">You're now ready to book your consultation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-off-white rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary-black">Your Treatment Plan</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-black mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Treatment Time</p>
                    <p className="text-sm text-silver">{treatment.duration} per lesion</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary-black mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Success Rate</p>
                    <p className="text-sm text-silver">{treatment.successRate} effective</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-primary-black mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Sessions Needed</p>
                    <p className="text-sm text-silver">Usually {treatment.sessions} session{treatment.sessions !== 1 ? 's' : ''}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary-black mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal">Healing Time</p>
                    <p className="text-sm text-silver">{treatment.healing}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-black to-elegant-gray text-white rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">Your Estimated Quote</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold">£{estimatedPrice}</p>
                <p className="text-sm opacity-80 mt-2">For {assessmentData.lesionCount} lesion{assessmentData.lesionCount > 1 ? 's' : ''}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-3 mb-3">
                <p className="text-xs font-medium">£25 consultation fee</p>
                <p className="text-xs opacity-90">Skin analysis may incur additional fees</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Professional consultation with Devon
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  No hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Aftercare advice included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Follow-up support provided
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-light text-primary-black mb-2">
                Ready to book your <span className="font-semibold">consultation with Devon?</span>
              </h3>
              <p className="text-sm text-charcoal">Kerry will arrange your appointment and answer any questions</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsCalendarOpen(true)}
                className="px-8 py-3 bg-primary-black text-white font-semibold rounded-full hover:bg-elegant-gray hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Your Consultation
              </button>
              
              <a
                href="tel:07414452441"
                className="px-8 py-4 border-2 border-primary-black text-primary-black font-bold rounded-full hover:bg-primary-black hover:text-white transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-5 h-5" />
                07414 452 441
              </a>
            </div>
            
            <p className="text-center text-sm text-silver mt-4">
              {assessmentData.urgency === 'asap' && 'Priority booking available - Kerry will contact you within 24 hours'}
              {assessmentData.urgency === 'this_week' && 'This week appointments available'}
              {assessmentData.urgency === 'this_month' && 'Flexible scheduling options available'}
              {assessmentData.urgency === 'flexible' && 'Book at your convenience'}
            </p>
          </div>
        </motion.div>
      </div>
      
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </>
  )
}