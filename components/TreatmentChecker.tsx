'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, Sparkles } from 'lucide-react'

interface AssessmentData {
  treatmentType: string
  lesionCount: number
  urgency: string
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
    urgency: ''
  })

  const handleTreatmentSelect = (value: string) => {
    setAssessmentData({ ...assessmentData, treatmentType: value })
    setStep(2)
    
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_type: 'treatment_assessment',
        content_name: value
      })
    }
  }

  const handleCountSelect = (count: number) => {
    setAssessmentData({ ...assessmentData, lesionCount: count })
    setStep(3)
  }

  const handleUrgencySelect = (value: string) => {
    const finalData = { ...assessmentData, urgency: value }
    setAssessmentData(finalData)
    
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        value: 30.00,
        currency: 'GBP',
        content_type: 'assessment_completed'
      })
    }
    
    onComplete(finalData)
  }

  const progressPercentage = ((step - 1) / 3) * 100

  return (
    <div className="bg-white rounded-2xl shadow-elegant border border-light-gray p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-light text-primary-black">
            Your Personal <span className="font-semibold">CryoPen Assessment</span>
          </h2>
          <span className="text-sm text-silver">Step {step} of 3</span>
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
      </AnimatePresence>
    </div>
  )
}