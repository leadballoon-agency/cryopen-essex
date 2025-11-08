'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, Sparkles } from 'lucide-react'
import { trackFacebookEvent } from '@/lib/analytics'

interface AssessmentData {
  treatmentType: string
  lesionCount: number
  urgency: string
  email?: string
  phone?: string
  name?: string
}

interface TreatmentCheckerProps {
  onComplete: (data: AssessmentData) => void
}

const treatmentOptions = [
  { 
    value: 'skin_tags', 
    label: 'Skin Tags',
    icon: '🏷️',
    badge: '5-15 seconds',
    description: 'Small, harmless growths'
  },
  { 
    value: 'warts', 
    label: 'Warts/Verrucas',
    icon: '🦠',
    badge: 'Child-friendly',
    description: 'Including plantar warts'
  },
  { 
    value: 'age_spots', 
    label: 'Age/Sun Spots',
    icon: '☀️',
    badge: 'Single session',
    description: 'Pigmentation marks'
  },
  { 
    value: 'multiple', 
    label: 'Multiple Issues',
    icon: '📋',
    badge: 'Consultation advised',
    description: 'Various skin concerns'
  }
]

const urgencyOptions = [
  { value: 'asap', label: 'As soon as possible' },
  { value: 'this_week', label: 'This week' },
  { value: 'this_month', label: 'This month' },
  { value: 'flexible', label: "I'm flexible" }
]

export default function TreatmentChecker({ onComplete }: TreatmentCheckerProps) {
  const [step, setStep] = useState(1)
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    treatmentType: '',
    lesionCount: 1,
    urgency: '',
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleTreatmentSelect = async (value: string) => {
    setAssessmentData({ ...assessmentData, treatmentType: value })
    setStep(2)
    
    // Custom event for assessment progress
    trackFacebookEvent('AssessmentStep1', {
      content_type: 'treatment_selection',
      content_name: value,
      step: 1,
      value: 25.00,
      currency: 'GBP'
    })
    
    // Standard event for backup
    trackFacebookEvent('AddToCart', {
      content_name: value,
      value: 25.00,
      currency: 'GBP'
    })
    
    // Send initial assessment data to GHL
    try {
      await fetch('/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          treatment_type: value,
          assessment_started: true,
          step: 1,
          page_url: window.location.href
        })
      })
    } catch (error) {
      console.error('Failed to send webhook:', error)
    }
  }

  const handleCountSelect = (count: number) => {
    setAssessmentData({ ...assessmentData, lesionCount: count })
    setStep(3)
    
    // Track assessment step 2
    trackFacebookEvent('AssessmentStep2', {
      content_type: 'lesion_count',
      lesion_count: count,
      step: 2,
      value: 25.00,
      currency: 'GBP'
    })
  }

  const handleUrgencySelect = (value: string) => {
    setAssessmentData({ ...assessmentData, urgency: value })
    setStep(4) // Go to contact form
    
    // Track step 3 completion
    trackFacebookEvent('AssessmentStep3', {
      content_type: 'urgency_selection',
      urgency: value,
      step: 3,
      value: 25.00,
      currency: 'GBP'
    })
  }

  const handleSubmitAssessment = async () => {
    if (!assessmentData.name || (!assessmentData.email && !assessmentData.phone)) {
      alert('Please provide your name and either email or phone number')
      return
    }

    setIsSubmitting(true)
    
    // Custom event for completed assessment
    trackFacebookEvent('CompleteAssessment', {
      value: 25.00,
      currency: 'GBP',
      content_name: 'Full Assessment Completed',
      treatment_type: assessmentData.treatmentType,
      lesion_count: assessmentData.lesionCount,
      urgency: assessmentData.urgency,
      step: 4
    })
    
    // Send complete assessment data to GHL webhook
    try {
      await fetch('/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: assessmentData.name,
          email: assessmentData.email || '',
          phone: assessmentData.phone || '',
          treatment_type: assessmentData.treatmentType,
          lesion_count: assessmentData.lesionCount,
          urgency: assessmentData.urgency,
          assessment_completed: true,
          page_url: window.location.href,
          user_agent: navigator.userAgent
        })
      })
    } catch (error) {
      console.error('Failed to send webhook:', error)
    } finally {
      setIsSubmitting(false)
    }
    
    onComplete(assessmentData)
  }

  const progressPercentage = ((step - 1) / 4) * 100

  return (
    <div className="bg-white rounded-2xl shadow-elegant border border-light-gray p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-light text-primary-black">
            Your Personal <span className="font-semibold">CryoPen Assessment</span>
          </h2>
          <span className="text-sm text-silver">Step {step} of 4</span>
        </div>
        <p className="text-charcoal">Let's find the perfect treatment plan for you</p>
        
        <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-black to-elegant-gray"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">What would you like to remove?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatmentOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleTreatmentSelect(option.value)}
                  className="group relative p-4 border-2 border-light-gray rounded-xl hover:border-primary-black transition-all hover:shadow-lg text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <h4 className="font-semibold text-primary-black">{option.label}</h4>
                          <p className="text-sm text-silver">{option.description}</p>
                        </div>
                      </div>
                    </div>
                    {option.badge && (
                      <span className="trust-badge">{option.badge}</span>
                    )}
                  </div>
                  <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-silver group-hover:text-primary-black transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">How many need treatment?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, '8+'].map((count) => (
                <button
                  key={count}
                  onClick={() => handleCountSelect(typeof count === 'number' ? count : 10)}
                  className="p-4 border-2 border-light-gray rounded-lg hover:border-primary-black hover:bg-primary-black hover:text-white transition-all font-semibold text-lg"
                >
                  {count}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(1)}
              className="mt-4 text-primary-black hover:underline text-sm"
            >
              ← Back
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">When would you like treatment?</h3>
            <div className="space-y-3">
              {urgencyOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleUrgencySelect(option.value)}
                  className="w-full p-4 border-2 border-light-gray rounded-lg hover:border-primary-black hover:bg-primary-black hover:text-white transition-all text-left font-medium group"
                >
                  <div className="flex items-center justify-between">
                    <span>{option.label}</span>
                    <ChevronRight className="text-silver group-hover:text-white" />
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="mt-4 text-primary-black hover:underline text-sm"
            >
              ← Back
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">Almost done! Get your personalized quote</h3>
            <p className="text-sm text-charcoal mb-6">We'll send you pricing and available appointment times</p>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={assessmentData.name}
                  onChange={(e) => setAssessmentData({ ...assessmentData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-primary-black focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={assessmentData.email}
                  onChange={(e) => setAssessmentData({ ...assessmentData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-primary-black focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={assessmentData.phone}
                  onChange={(e) => setAssessmentData({ ...assessmentData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-primary-black focus:outline-none"
                  placeholder="07... (UK mobile)"
                />
              </div>
              
              <p className="text-xs text-silver">
                * Required. Provide either email or phone number (or both)
              </p>
              
              <button
                onClick={handleSubmitAssessment}
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary-black to-elegant-gray text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get My Personalized Quote →'}
              </button>
            </div>
            
            <button
              onClick={() => setStep(3)}
              className="mt-4 text-primary-black hover:underline text-sm"
            >
              ← Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}