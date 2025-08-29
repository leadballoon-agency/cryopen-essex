'use client'

import { useEffect } from 'react'

export default function PixelEvents() {
  useEffect(() => {
    // Ensure fbq is available and fire a test event
    const checkPixel = () => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        // Pixel is loaded, ensure PageView is tracked
        (window as any).fbq('track', 'PageView')
        console.log('Facebook Pixel is active and PageView sent')
      } else {
        console.log('Facebook Pixel not yet loaded, retrying...')
        setTimeout(checkPixel, 500)
      }
    }
    
    // Check after a short delay to ensure everything is loaded
    setTimeout(checkPixel, 100)
  }, [])

  return null
}