export const siteConfig = {
  // Clinic Details
  clinic: {
    name: 'Essex Way Clinic',
    tagline: 'Professional CryoPen Treatment in Essex',
    description: 'Award-winning aesthetic clinic specializing in CryoPen treatments for skin lesion removal',
    award: "England's Business Award Winner 2025",
  },

  // Contact Information
  contact: {
    phone: '07414452441', // Kerry's mobile/WhatsApp for bookings
    whatsapp: '447414452441', // Kerry's WhatsApp through GHL
    email: 'info@essexwayclinic.com',
    bookingEmail: 'bookings@essexwayclinic.com',
  },

  // Address - PLEASE UPDATE WITH REAL ADDRESS
  address: {
    line1: 'Essex Way Clinic', // UPDATE: Add street address
    line2: '', // UPDATE: Add suite/unit number if applicable
    city: 'Essex',
    county: 'Essex',
    postcode: 'XX00 0XX', // UPDATE: Add real postcode
    country: 'United Kingdom',
    googleMapsUrl: 'https://maps.google.com', // UPDATE: Add real Google Maps URL
  },

  // Operating Hours
  hours: {
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },

  // Practitioners
  practitioners: {
    devon: {
      name: 'Devon',
      title: 'Lead CryoPen Practitioner',
      qualifications: [
        'Advanced CryoPen Certified',
        'Medical Aesthetics Diploma',
        'First Aid Certified',
      ],
      experience: '5+ years in aesthetic treatments',
      treatments: 1000,
      specialties: ['CryoPen', 'HIFU', 'Microneedling', 'Skin Boosters'],
    },
    kerry: {
      name: 'Kerry',
      title: 'Bookings Manager',
      role: 'Handles bookings, consultations and enquiries from Facebook and other channels',
    },
    lisa: {
      name: 'Lisa',
      title: 'Aesthetician',
      specialties: ['HydraFacials', 'Massages', 'Reflexology'],
    },
  },

  // Social Media - PLEASE UPDATE WITH REAL LINKS
  social: {
    facebook: 'https://facebook.com/essexwayclinic', // UPDATE
    instagram: 'https://instagram.com/essexwayclinic', // UPDATE
    google: 'https://g.page/essexwayclinic', // UPDATE: Add Google Business profile
  },

  // Analytics - PLEASE UPDATE WITH REAL IDS
  analytics: {
    googleAnalyticsId: 'GA_MEASUREMENT_ID', // UPDATE: Add real GA4 ID
    facebookPixelId: '2521243374752458',
  },

  // GHL Calendar - PLEASE UPDATE WITH REAL DETAILS
  ghl: {
    calendarUrl: 'https://your-ghl-domain.com/calendar-embed.js', // UPDATE
    calendarId: 'kerry-cryopen-consultations', // UPDATE if different
  },

  // Pricing
  pricing: {
    consultation: 0, // Free consultation
    singleTreatment: 50,
    multipleLesions: 75, // 2-3 lesions
    comprehensive: 120, // Up to 5 lesions
    largePackage: 150, // 5+ lesions
  },

  // Treatment Information
  treatments: {
    skinTags: {
      duration: '5-15 seconds',
      healing: '2 weeks',
      successRate: '98%',
    },
    warts: {
      duration: '10-25 seconds',
      healing: '2-4 weeks',
      successRate: '85%',
    },
    ageSpots: {
      duration: '10-20 seconds',
      healing: '3 weeks',
      successRate: '90%',
    },
    cherryAngiomas: {
      duration: '5-10 seconds',
      healing: '2-3 weeks',
      successRate: '95%',
    },
  },

  // SEO
  seo: {
    title: 'CryoPen Treatment Essex - Remove Skin Tags & Warts | Essex Way Clinic',
    description: 'Professional CryoPen treatment from £50. Safe for children 6+. No cutting or stitches. Book your free consultation today at Essex Way Clinic.',
    keywords: 'cryopen, skin tags, wart removal, essex, cryotherapy, skin lesion removal, essex way clinic, devon',
    ogImage: '/og-image.jpg',
  },
}

// Helper function to format phone number for display
export function formatPhoneDisplay(phone: string = siteConfig.contact.phone): string {
  // Format: 01234 567 890
  if (phone.length === 11 && phone.startsWith('0')) {
    return `${phone.slice(0, 5)} ${phone.slice(5, 8)} ${phone.slice(8)}`
  }
  return phone
}

// Helper function to format WhatsApp link
export function getWhatsAppLink(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.contact.whatsapp}`
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }
  return baseUrl
}

// Helper function to format phone link
export function getPhoneLink(): string {
  return `tel:${siteConfig.contact.phone}`
}

// Helper function to format email link
export function getEmailLink(subject?: string, body?: string): string {
  let link = `mailto:${siteConfig.contact.email}`
  const params = []
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`)
  if (body) params.push(`body=${encodeURIComponent(body)}`)
  if (params.length) link += `?${params.join('&')}`
  return link
}