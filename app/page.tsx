'use client'

import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Phone } from 'lucide-react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TreatmentChecker from '@/components/TreatmentChecker'
import ResultsAndBooking from '@/components/ResultsAndBooking'
import SocialProofSection from '@/components/SocialProofSection'
import PricingSection from '@/components/PricingSection'
import FloatingCTA from '@/components/FloatingCTA'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import ProfessionalSection from '@/components/ProfessionalSection'
import Footer from '@/components/Footer'

const DynamicSocialProof = dynamic(() => import('@/components/SocialProofSection'), {
  loading: () => <div className="min-h-[400px] bg-off-white animate-pulse" />
})

const DynamicPricing = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="min-h-[400px] bg-white animate-pulse" />
})

interface AssessmentData {
  treatmentType: string
  lesionCount: number
  urgency: string
}

export default function Home() {
  const [showAssessment, setShowAssessment] = useState(false)
  const [assessmentComplete, setAssessmentComplete] = useState(false)
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null)
  const assessmentRef = useRef<HTMLDivElement>(null)

  const handleCTAClick = () => {
    setShowAssessment(true)
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  const handleAssessmentComplete = (data: AssessmentData) => {
    setAssessmentData(data)
    setAssessmentComplete(true)
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <>
      <Header onCTAClick={handleCTAClick} />
      <main className="min-h-screen">
        <HeroSection onCTAClick={handleCTAClick} />
      
      {showAssessment && (
        <section ref={assessmentRef} className="py-16 bg-off-white">
          <div className="section-container">
            {!assessmentComplete ? (
              <TreatmentChecker onComplete={handleAssessmentComplete} />
            ) : (
              assessmentData && <ResultsAndBooking assessmentData={assessmentData} />
            )}
          </div>
        </section>
      )}
      
      <BeforeAfterGallery />
      
      <DynamicSocialProof />
      
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
              Why CryoPen Treatment?
            </h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              The gold standard for removing skin lesions quickly and safely
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-light-gray/20 rounded-xl p-6 border border-light-gray">
              <h3 className="text-xl font-bold text-charcoal mb-4">Traditional Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-silver">✗</span>
                  <span className="text-charcoal">Surgical cutting and stitches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-silver">✗</span>
                  <span className="text-charcoal">Risk of scarring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-silver">✗</span>
                  <span className="text-charcoal">Long recovery time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-silver">✗</span>
                  <span className="text-charcoal">Multiple appointments needed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-black text-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">CryoPen Treatment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-gray-200">No cutting or stitches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-gray-200">Minimal scarring risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-gray-200">Quick healing (1-4 weeks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white">✓</span>
                  <span className="text-gray-200">Single treatment session</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={handleCTAClick}
              className="cta-button"
            >
              Check If CryoPen Is Right For You
            </button>
          </div>
        </div>
      </section>
      
      <DynamicPricing onCTAClick={handleCTAClick} />
      
      <ProfessionalSection />
      
      <section className="py-16 bg-gradient-to-br from-primary-black to-elegant-gray text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Remove Your Skin Lesions?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our happy patients who've transformed their skin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCTAClick}
              className="px-8 py-4 bg-white text-primary-black font-bold rounded-full hover:shadow-xl transition-all"
            >
              Book Free Consultation
            </button>
            <a
              href="tel:07414452441"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-black transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              07414 452 441
            </a>
          </div>
        </div>
      </section>
      
        <FloatingCTA onCTAClick={handleCTAClick} />
      </main>
      <Footer />
    </>
  )
}