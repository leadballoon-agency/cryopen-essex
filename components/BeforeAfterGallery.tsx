'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const beforeAfterCases = [
  {
    id: 1,
    condition: 'Skin Tags',
    description: 'Neck area - Single session',
    timeframe: '2 weeks healing',
    beforeImage: '/images/before-after/skin-tags-before.jpg',
    afterImage: '/images/before-after/skin-tags-after.jpg',
  },
  {
    id: 2,
    condition: 'Skin Tags',
    description: 'Multiple tags - Single treatment',
    timeframe: '2 weeks healing',
    beforeImage: '/images/before-after/skin-tags-before-2.jpg',
    afterImage: '/images/before-after/skin-tags-after-2.jpg',
  },
  {
    id: 3,
    condition: 'Warts',
    description: 'Plantar wart removal',
    timeframe: '4 weeks healing',
    beforeImage: '/images/before-after/warts-before.jpg',
    afterImage: '/images/before-after/warts-after.jpg',
  },
  {
    id: 4,
    condition: 'Warts',
    description: 'Multiple warts treated',
    timeframe: '3 weeks healing',
    beforeImage: '/images/before-after/warts-before-2.jpg',
    afterImage: '/images/before-after/warts-after-2.jpg',
  },
  {
    id: 5,
    condition: 'Age Spots',
    description: 'Facial pigmentation',
    timeframe: '3 weeks healing',
    beforeImage: '/images/before-after/lentigo-before.jpg',
    afterImage: '/images/before-after/lentigo-after.jpg',
  },
  {
    id: 6,
    condition: 'Age Spots',
    description: 'Hand pigmentation',
    timeframe: '3 weeks healing',
    beforeImage: '/images/before-after/lentigo-before-2.jpg',
    afterImage: '/images/before-after/lentigo-after-2.jpg',
  },
  {
    id: 7,
    condition: 'Seborrheic Keratosis',
    description: 'Raised lesion removal',
    timeframe: '3 weeks healing',
    beforeImage: '/images/before-after/seborrheic-keratosis-before.jpg',
    afterImage: '/images/before-after/seborrheic-keratosis-after.jpg',
  },
  {
    id: 8,
    condition: 'Seborrheic Keratosis',
    description: 'Multiple lesions',
    timeframe: '4 weeks healing',
    beforeImage: '/images/before-after/seborrheic-keratosis-before-2.jpg',
    afterImage: '/images/before-after/seborrheic-keratosis-after-2.jpg',
  },
  {
    id: 9,
    condition: 'Cherry Angiomas',
    description: 'Vascular lesion removal',
    timeframe: '2 weeks healing',
    beforeImage: '/images/before-after/hemangioma-before.jpg',
    afterImage: '/images/before-after/hemangioma-after.jpg',
  },
  {
    id: 10,
    condition: 'Cherry Angiomas',
    description: 'Multiple spots treated',
    timeframe: '2 weeks healing',
    beforeImage: '/images/before-after/hemangioma-before-2.jpg',
    afterImage: '/images/before-after/hemangioma-after-2.jpg',
  },
  {
    id: 11,
    condition: 'Actinic Keratosis',
    description: 'Precancerous lesion',
    timeframe: '3 weeks healing',
    beforeImage: '/images/before-after/actinic-keratosis-before.jpg',
    afterImage: '/images/before-after/actinic-keratosis-after.jpg',
  },
  {
    id: 12,
    condition: 'Actinic Keratosis',
    description: 'Sun damage treatment',
    timeframe: '3 weeks healing',
    beforeImage: '/images/before-after/actinic-keratosis-before-2.jpg',
    afterImage: '/images/before-after/actinic-keratosis-after-2.jpg',
  },
  {
    id: 13,
    condition: 'Fibroma',
    description: 'Benign growth removal',
    timeframe: '2 weeks healing',
    beforeImage: '/images/before-after/fibroma-before.jpg',
    afterImage: '/images/before-after/fibroma-after.jpg',
  },
  {
    id: 14,
    condition: 'Fibroma',
    description: 'Facial fibroma',
    timeframe: '2 weeks healing',
    beforeImage: '/images/before-after/fibroma-before-2.jpg',
    afterImage: '/images/before-after/fibroma-after-2.jpg',
  },
]

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const currentCase = beforeAfterCases[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterCases.length)
    setSliderPosition(50)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterCases.length) % beforeAfterCases.length)
    setSliderPosition(50)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 10), 90)) // Limit to 10-90% to avoid edges
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.min(Math.max(x, 10), 90)) // Limit to 10-90% to avoid edges
  }

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-primary-black mb-4">
            Real <span className="font-semibold">Results</span>
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto mb-2">
            <span className="hidden md:inline">Move your cursor over the image to reveal transformations</span>
            <span className="md:hidden">Swipe across the image to reveal transformations</span>
          </p>
          <p className="text-sm text-silver">
            <span className="hidden md:inline">Hover or drag to compare before and after</span>
            <span className="md:hidden">Touch and drag to compare</span>
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-2xl shadow-elegant overflow-hidden"
          >
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous case"
            >
              <ChevronLeft className="w-6 h-6 text-primary-black" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next case"
            >
              <ChevronRight className="w-6 h-6 text-primary-black" />
            </button>

            {/* Case Info */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/60 to-transparent p-6 text-white">
              <h3 className="text-2xl font-semibold mb-1">{currentCase.condition}</h3>
              <p className="text-sm opacity-90">{currentCase.description}</p>
              <p className="text-xs mt-2 opacity-75">Healing time: {currentCase.timeframe}</p>
            </div>

            {/* Before/After Slider */}
            <div 
              className="relative h-[400px] md:h-[500px] cursor-ew-resize select-none group touch-none"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <Image
                  src={currentCase.afterImage}
                  alt={`After treatment - ${currentCase.condition}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-primary-black">After</span>
                </div>
              </div>

              {/* Before Image (Overlay) */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="relative h-full" style={{ width: `${(100 / sliderPosition) * 100}%` }}>
                  <Image
                    src={currentCase.beforeImage}
                    alt={`Before treatment - ${currentCase.condition}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-6 left-6 bg-primary-black/90 backdrop-blur px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-white">Before</span>
                  </div>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl transition-opacity group-hover:opacity-100 opacity-90 md:opacity-70"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-primary-black/20">
                    <div className="flex gap-0.5">
                      <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-primary-black" />
                      <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-primary-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Condition Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {Array.from(new Set(beforeAfterCases.map(c => c.condition))).map((condition) => {
              const firstCaseIndex = beforeAfterCases.findIndex(c => c.condition === condition)
              const isActive = beforeAfterCases[currentIndex].condition === condition
              
              return (
                <button
                  key={condition}
                  onClick={() => {
                    setCurrentIndex(firstCaseIndex)
                    setSliderPosition(50)
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-primary-black text-white' 
                      : 'bg-white border border-light-gray text-charcoal hover:border-primary-black'
                  }`}
                >
                  {condition}
                </button>
              )
            })}
          </div>

          {/* Case Counter */}
          <div className="mt-6 text-center">
            <span className="text-sm text-silver">
              Case {currentIndex + 1} of {beforeAfterCases.length}
            </span>
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-xs text-silver">
              *Individual results may vary. All images show real patient results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}