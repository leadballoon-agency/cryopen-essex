import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://cryopenessex.co.uk'),
  title: 'CryoPen Treatment Essex - Remove Skin Tags & Warts | Essex Way Clinic',
  description: 'Professional CryoPen treatment in Essex. Safe, quick & effective removal of skin tags, warts, age spots & more. Book consultation with Devon today.',
  keywords: 'cryopen essex, skin tag removal essex, wart removal essex, cryotherapy essex, devon cryopen, essex way clinic, skin lesion removal',
  authors: [{ name: 'Essex Way Clinic' }],
  creator: 'Essex Way Clinic',
  publisher: 'Essex Way Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'CryoPen Treatment Essex - Remove Skin Tags & Warts | Essex Way Clinic',
    description: 'Professional CryoPen treatment in Essex. Safe & effective removal of skin lesions. Book your consultation today.',
    url: 'https://cryopenessex.co.uk',
    siteName: 'CryoPen Essex - Essex Way Clinic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CryoPen Treatment at Essex Way Clinic',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryoPen Treatment Essex - Essex Way Clinic',
    description: 'Professional CryoPen treatment in Essex. Safe & effective removal of skin lesions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cryopenessex.co.uk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2521243374752458');
            fbq('track', 'PageView');
          `}
        </Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}