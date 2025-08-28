'use client'

import { motion } from 'framer-motion'
import { Check, Phone, Star, Shield, Award } from 'lucide-react'

interface PricingSectionProps {
  onCTAClick: () => void
}

export default function PricingSection({ onCTAClick }: PricingSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-primary-black mb-4">
            Investment in <span className="font-semibold">Your Confidence</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Professional treatments starting from £55
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-black to-elegant-gray text-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light mb-2">
                Personalized <span className="font-semibold">Treatment Plans</span>
              </h3>
              <p className="text-white/80">
                Every patient is unique - your treatment plan will be too
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Free initial consultation with Kerry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Professional treatment by Devon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive aftercare guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>Follow-up support included</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Package Benefits:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                    <span>Multiple lesion discounts available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                    <span>Same-session treatment options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                    <span>Flexible payment arrangements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                    <span>Family & group discounts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-center mb-4">
                <p className="text-sm font-semibold text-white mb-2">
                  £25 Booking Fee • Fully Redeemable
                </p>
                <p className="text-xs opacity-80">
                  Secures your appointment and is deducted from your treatment cost
                </p>
              </div>
              <div className="h-px bg-white/20 my-4"></div>
              <p className="text-center text-sm mb-4">
                Your exact pricing will be confirmed during your free consultation based on:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <p className="font-semibold">Type</p>
                  <p className="text-white/70">of lesion</p>
                </div>
                <div>
                  <p className="font-semibold">Number</p>
                  <p className="text-white/70">of areas</p>
                </div>
                <div>
                  <p className="font-semibold">Size</p>
                  <p className="text-white/70">& location</p>
                </div>
                <div>
                  <p className="font-semibold">Treatment</p>
                  <p className="text-white/70">complexity</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary-black mx-auto mb-2" />
              <h4 className="font-semibold text-primary-black">Price Match Promise</h4>
              <p className="text-sm text-charcoal mt-1">
                We'll match any comparable local clinic
              </p>
            </div>
            <div className="text-center">
              <Check className="w-8 h-8 text-primary-black mx-auto mb-2" />
              <h4 className="font-semibold text-primary-black">No Hidden Fees</h4>
              <p className="text-sm text-charcoal mt-1">
                Transparent pricing, always
              </p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-primary-black mx-auto mb-2" />
              <h4 className="font-semibold text-primary-black">Satisfaction Guaranteed</h4>
              <p className="text-sm text-charcoal mt-1">
                98% success rate with CryoPen
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-light text-primary-black mb-4">
              Get Your <span className="font-semibold">Personalized Quote</span>
            </h3>
            <p className="text-charcoal mb-6 max-w-2xl mx-auto">
              Take our quick assessment to receive an accurate price estimate for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onCTAClick}
                className="px-8 py-3 bg-primary-black text-white font-semibold rounded-full hover:bg-elegant-gray transition-all"
              >
                Get My Quote
              </button>
              <a
                href="tel:07414452441"
                className="px-8 py-3 border-2 border-primary-black text-primary-black font-semibold rounded-full hover:bg-primary-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Speak to Kerry
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}