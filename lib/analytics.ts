declare global {
  interface Window {
    fbq: any
    gtag: any
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('event', eventName, parameters)
    }
    
    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Track Event:', eventName, parameters)
    }
  }
}

export const trackFacebookEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
    
    // Console log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📘 Facebook Event:', eventName, parameters)
    }
  }
}

export const trackConversion = (value: number, label: string) => {
  trackEvent('conversion', {
    event_category: 'engagement',
    event_label: label,
    value: value,
    currency: 'GBP'
  })
  
  trackFacebookEvent('Purchase', {
    value: value,
    currency: 'GBP',
    content_type: label
  })
}

export const trackAssessmentStart = () => {
  trackEvent('assessment_started', {
    event_category: 'engagement',
    event_label: 'treatment_checker'
  })
  
  trackFacebookEvent('ViewContent', {
    content_type: 'assessment',
    content_name: 'treatment_checker'
  })
}

export const trackAssessmentComplete = (data: any) => {
  trackEvent('assessment_completed', {
    event_category: 'engagement',
    event_label: data.treatmentType,
    value: data.lesionCount
  })
  
  trackFacebookEvent('InitiateCheckout', {
    value: 30.00,
    currency: 'GBP',
    content_type: 'assessment_completed',
    content_ids: [data.treatmentType],
    num_items: data.lesionCount
  })
}

export const trackBookingComplete = (data: any) => {
  trackEvent('consultation_booked', {
    event_category: 'conversion',
    event_label: 'ghl_calendar',
    value: 50.00
  })
  
  trackFacebookEvent('CompleteRegistration', {
    value: 50.00,
    currency: 'GBP',
    registration_method: 'ghl_calendar',
    content_name: data.treatmentType
  })
}

export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: location
  })
  
  trackFacebookEvent('Contact', {
    content_type: 'phone_call',
    content_name: location,
    value: 25.00,
    currency: 'GBP'
  })
}

export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location
  })
  
  trackFacebookEvent('Contact', {
    content_type: 'whatsapp',
    content_name: location,
    value: 25.00,
    currency: 'GBP'
  })
}

export const initializeAnalytics = () => {
  // Page view tracking
  if (typeof window !== 'undefined') {
    trackEvent('page_view', {
      page_path: window.location.pathname,
      page_title: document.title
    })
    
    trackFacebookEvent('PageView')
  }
}