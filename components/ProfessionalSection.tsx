'use client'

import { motion } from 'framer-motion'
import { Award, GraduationCap, Heart, Shield, Star, Users, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ProfessionalSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
            Meet Your CryoPen Specialist
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Professional, certified, and dedicated to your skin health
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-black/20 to-elegant-gray/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-medical overflow-hidden">
                <div className="relative aspect-[4/5] mb-6">
                  <Image
                    src="/images/devon at work.jpeg"
                    alt="Devon - Lead CryoPen Practitioner with CryoPen device"
                    fill
                    className="object-contain bg-white"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-2xl font-bold mb-1 text-white text-center">Devon</h3>
                    <p className="font-semibold text-white text-center">Lead CryoPen Practitioner</p>
                  </div>
                </div>
                
                <div className="p-8 pt-0">
                
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-charcoal ml-2">5.0 from 50+ reviews</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-primary-black" />
                    <span className="text-charcoal">Advanced CryoPen Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary-black" />
                    <span className="text-charcoal">Expert in Skin Lesion Removal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary-black" />
                    <span className="text-charcoal">Specializing in Child-Friendly Care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary-black" />
                    <span className="text-charcoal">Fully Insured & Licensed</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary-black">
                Why Choose Devon at Essex Way Clinic?
              </h3>
              <p className="text-charcoal mb-4">
                With advanced training in CryoPen treatments, Devon brings expertise and precision to 
                every procedure. Her gentle approach and attention to detail ensure every patient feels 
                comfortable and confident throughout their treatment journey.
              </p>
            </div>

            <div className="bg-primary-black/5 rounded-xl p-6">
              <h4 className="font-semibold text-primary-black mb-3">Devon's Approach:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-elegant-gray flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Thorough consultation to understand your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-elegant-gray flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Clear explanation of the treatment process</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-elegant-gray flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Pain management techniques for sensitive patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-elegant-gray flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal">Comprehensive aftercare support</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 italic">
                "Devon put me completely at ease, explained everything thoroughly, and the results 
                have been amazing!" - <strong>Tina H., Verified Patient</strong>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-black to-elegant-gray rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Essex Way Clinic</h3>
              <p className="mb-6 opacity-90">
                Award-winning aesthetic clinic providing professional CryoPen treatments in a 
                comfortable, modern environment. Our commitment to excellence and patient care 
                has made us Essex's trusted choice for skin lesion removal.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <Award className="w-6 h-6 mb-2" />
                  <p className="font-semibold">2025 Award Winner</p>
                  <p className="text-sm opacity-90">England's Business Awards</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <Shield className="w-6 h-6 mb-2" />
                  <p className="font-semibold">Fully Insured</p>
                  <p className="text-sm opacity-90">Professional indemnity</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <Users className="w-6 h-6 mb-2" />
                  <p className="font-semibold">Growing Practice</p>
                  <p className="text-sm opacity-90">Trusted by patients</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <Star className="w-6 h-6 mb-2" />
                  <p className="font-semibold">5.0 Rating</p>
                  <p className="text-sm opacity-90">50+ Google reviews</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Visit Our Clinic</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Essex Way Clinic</p>
                    <p className="text-sm opacity-90">Professional aesthetic treatments</p>
                    <p className="text-sm opacity-90">Essex, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Opening Hours</p>
                    <p className="text-sm opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm opacity-90">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm opacity-90">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="mt-4 w-full py-2 bg-white text-primary-black font-semibold rounded-lg hover:bg-off-white transition-colors"
              >
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary-black">
            Our Professional Standards
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary-black" />
              </div>
              <h4 className="font-semibold text-primary-black mb-2">FDA/CE Approved</h4>
              <p className="text-sm text-charcoal">Using only certified CryoPen equipment</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-6 h-6 text-primary-black" />
              </div>
              <h4 className="font-semibold text-primary-black mb-2">Certified Training</h4>
              <p className="text-sm text-charcoal">Advanced CryoPen certification</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-primary-black" />
              </div>
              <h4 className="font-semibold text-primary-black mb-2">Patient Care</h4>
              <p className="text-sm text-charcoal">Compassionate, personalized treatment</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-primary-black/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-primary-black" />
              </div>
              <h4 className="font-semibold text-primary-black mb-2">Award Winning</h4>
              <p className="text-sm text-charcoal">Recognized for excellence</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}