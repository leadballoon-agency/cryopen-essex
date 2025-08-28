'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Award, Users } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: "Tina H.",
    age: null,
    location: "Essex",
    rating: 5,
    treatment: "CryoPen for pigment spots",
    text: "I had done some research on CryoPen Treatment for pigment spots but was extremely nervous about having the procedure done, as the area to be treated was on my face. Devon put me completely at ease, explained everything thoroughly, and the results have been amazing!",
    timeAgo: "Aug 7, 2025",
    verified: true
  },
  {
    name: "Beccie C.",
    age: null,
    location: "Essex",
    rating: 5,
    treatment: "Multiple treatments",
    text: "If I could give more stars I would. The girls offer a range of treatments that are affordable and the quality is outstanding. 100% recommend over and over again!",
    timeAgo: "Aug 27, 2025",
    verified: true
  },
  {
    name: "Denise L.",
    age: null,
    location: "Essex",
    rating: 5,
    treatment: "HIFU facial",
    text: "Devon, who treated me, is a lovely, friendly and very knowledgeable lady. I would highly recommend for you to put your trust in her hands. Excellent service!",
    timeAgo: "Aug 21, 2025",
    verified: true
  },
  {
    name: "Donna",
    age: null,
    location: "Essex",
    rating: 5,
    treatment: "Multiple sessions",
    text: "There are not enough words to express how grateful I am for this amazing journey I am on with Essex Way Clinic. My results so far are insane! Devon is absolutely amazing at what she does.",
    timeAgo: "Jul 31, 2025",
    verified: true
  },
  {
    name: "Champagne S.",
    age: null,
    location: "Essex",
    rating: 5,
    treatment: "Microneedling",
    text: "Love Devon, she's very good and although my HIFU was too much for me being a sensitive bunny we sought another treatment. She is very knowledgeable and caring.",
    timeAgo: "Aug 5, 2025",
    verified: true
  },
  {
    name: "Taya T.",
    age: null,
    location: "Essex",
    rating: 5,
    treatment: "Beauty treatments",
    text: "My go to place for all of my beauty treatments. Very professional and the quality of care and knowledge is amazing. The best!!",
    timeAgo: "Aug 25, 2025",
    verified: true
  }
]

const stats = [
  { number: "5.0★", label: "50+ Google Reviews", icon: Star },
  { number: "1000+", label: "Happy Patients", icon: Users },
  { number: "2022", label: "Award Winner", icon: Award },
  { number: "98%", label: "Success Rate", icon: Award }
]

export default function SocialProofSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Join over 1000 happy patients who've transformed their skin with CryoPen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-black/10 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-primary-black" />
              </div>
              <div className="text-3xl font-bold text-primary-black mb-1">{stat.number}</div>
              <div className="text-sm text-charcoal">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-black to-elegant-gray rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-primary-black">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs text-silver">{testimonial.timeAgo}</span>
                  </div>
                  <p className="text-sm text-charcoal mb-1">{testimonial.location}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    {(testimonial as any).verified && (
                      <span className="text-xs bg-elegant-gray/10 text-elegant-gray px-2 py-0.5 rounded-full font-semibold">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary-black font-medium mb-2">
                    Treatment: {testimonial.treatment}
                  </p>
                </div>
              </div>
              <Quote className="w-6 h-6 text-light-gray mb-2" />
              <p className="text-charcoal italic">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-black to-elegant-gray rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            See Real Results From Real Patients
          </h3>
          <p className="mb-6 opacity-90">
            Before and after photos available during your consultation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-semibold">✓ Medical documentation</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-semibold">✓ Verified results</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-4 py-2">
              <span className="font-semibold">✓ Individual results may vary</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}