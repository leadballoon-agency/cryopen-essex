import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format as UK phone number
  if (cleaned.length === 11 && cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`
  }
  
  return phone
}

export function calculateLeadScore(data: {
  treatmentType: string
  lesionCount: number
  urgency: string
}): number {
  let score = 0
  
  // Score based on number of lesions
  if (data.lesionCount === 1) score += 1
  else if (data.lesionCount <= 3) score += 3
  else if (data.lesionCount <= 5) score += 4
  else score += 5
  
  // Score based on urgency
  switch (data.urgency) {
    case 'asap':
      score += 5
      break
    case 'this_week':
      score += 4
      break
    case 'this_month':
      score += 2
      break
    default:
      score += 1
  }
  
  // Score based on treatment type
  if (data.treatmentType === 'multiple') score += 2
  if (data.treatmentType === 'skin_tags') score += 1
  
  return Math.min(score, 10) // Cap at 10
}

export function getEstimatedCost(lesionCount: number): number {
  if (lesionCount === 1) return 50
  if (lesionCount <= 3) return 75
  if (lesionCount <= 5) return 120
  return 150
}

export function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  const utmParams: Record<string, string> = {}
  
  // Capture all UTM parameters
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
  
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams[key] = value
    }
  })
  
  return utmParams
}

export function saveToSessionStorage(key: string, data: any): void {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error('Failed to save to session storage:', error)
    }
  }
}

export function getFromSessionStorage(key: string): any {
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Failed to get from session storage:', error)
      return null
    }
  }
  return null
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}