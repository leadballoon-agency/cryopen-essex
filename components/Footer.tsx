import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-light-gray">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Image
              src="/images/logo/The Essex Way Clinic Logo.png"
              alt="The Essex Way Clinic"
              width={150}
              height={50}
              className="h-10 w-auto mx-auto md:mx-0"
            />
          </div>

          {/* Contact */}
          <div className="text-center">
            <a 
              href="tel:07414452441" 
              className="flex items-center justify-center gap-2 text-charcoal hover:text-primary-black transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>07414 452 441</span>
            </a>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <p className="text-sm text-charcoal">
              Monday - Saturday<br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-light-gray">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-silver">
              © {currentYear} The Essex Way Clinic. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a href="/privacy-policy" className="text-silver hover:text-primary-black transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-silver hover:text-primary-black transition-colors">
                Terms
              </a>
            </div>
            <p className="text-xs text-silver">
              CryoPen® is a registered trademark
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}