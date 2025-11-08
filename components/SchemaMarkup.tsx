import Script from 'next/script';

export default function SchemaMarkup() {
  const siteUrl = 'https://cryopenessex.co.uk';
  const logoUrl = `${siteUrl}/images/devon at work.jpeg`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/#organization`,
    "name": "Essex Way Clinic - CryoPen Essex",
    "legalName": "Essex Way Clinic",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
      "width": "1200",
      "height": "630"
    },
    "image": logoUrl,
    "description": "Professional CryoPen treatment for skin tags, warts, and age spots removal in Essex. Advanced certified practitioner with 100+ successful treatments.",
    "telephone": "+447414452441",
    "email": "info@essexwayclinic.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aveley House, Arcany Road",
      "addressLocality": "South Ockendon",
      "addressRegion": "Essex",
      "postalCode": "RM15 5SX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5054",
      "longitude": "0.2885"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "areaServed": {
      "@type": "State",
      "name": "Essex"
    },
    "sameAs": [
      "https://facebook.com/essexwayclinic",
      "https://instagram.com/essexwayclinic"
    ],
    "award": "England's Business Award Winner 2025",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CryoPen Treatment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CryoPen Consultation",
            "description": "Initial consultation to assess skin lesions and discuss treatment options"
          },
          "price": "25",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CryoPen Treatment",
            "description": "Professional CryoPen treatment for removal of skin tags, warts, and age spots"
          },
          "price": "55",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "55",
            "priceCurrency": "GBP"
          }
        }
      ]
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    "name": "Essex Way Clinic",
    "image": logoUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Aveley House, Arcany Road",
      "addressLocality": "South Ockendon",
      "addressRegion": "Essex",
      "postalCode": "RM15 5SX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5054",
      "longitude": "0.2885"
    },
    "url": siteUrl,
    "telephone": "+447414452441",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "££"
  };

  // Person Schema - Devon (Practitioner)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person-devon`,
    "name": "Devon",
    "jobTitle": "Advanced CryoPen Certified Practitioner",
    "worksFor": {
      "@id": `${siteUrl}/#organization`
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Advanced CryoPen Certification"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "insurance",
        "name": "Professional Indemnity Insurance"
      }
    ],
    "description": "Advanced certified CryoPen practitioner with 100+ successful treatments performed"
  };

  // Medical Procedure Schema - Skin Tag Removal
  const skinTagServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "CryoPen Skin Tag Removal",
    "description": "Professional cryotherapy treatment for safe and effective removal of skin tags using FDA/CE approved CryoPen technology",
    "procedureType": "Cryotherapy",
    "bodyLocation": "Skin",
    "followup": "No downtime required, results visible within 2-4 weeks",
    "howPerformed": "Precision cryotherapy using medical-grade CryoPen device at -89°C to freeze and remove skin tags",
    "preparation": "30-second quick check to assess suitability, consultation before treatment",
    "medicineSystem": "https://schema.org/WesternConventional"
  };

  // Medical Procedure Schema - Wart Removal
  const wartServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "CryoPen Wart Removal",
    "description": "Advanced cryotherapy treatment for effective removal of warts using precision CryoPen technology",
    "procedureType": "Cryotherapy",
    "bodyLocation": "Skin",
    "followup": "No downtime required, warts naturally fall off within weeks",
    "howPerformed": "Controlled freezing using CryoPen at -89°C to eliminate wart tissue",
    "preparation": "Consultation to assess wart type and treatment plan",
    "medicineSystem": "https://schema.org/WesternConventional"
  };

  // Medical Procedure Schema - Age Spot/Pigmentation Removal
  const pigmentationServiceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "CryoPen Age Spot & Pigmentation Removal",
    "description": "Professional cryotherapy treatment for removal of age spots, sun spots, and pigmentation using advanced CryoPen technology",
    "procedureType": "Cryotherapy",
    "bodyLocation": "Skin",
    "followup": "No downtime, gradual fading of pigmentation over 2-4 weeks",
    "howPerformed": "Precision freezing of pigmented areas using medical-grade CryoPen device",
    "preparation": "Skin assessment and consultation before treatment",
    "medicineSystem": "https://schema.org/WesternConventional"
  };

  // Service Schema - General CryoPen Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CryoPen Treatment",
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "areaServed": {
      "@type": "State",
      "name": "Essex"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CryoPen Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skin Tag Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wart Removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Age Spot & Pigmentation Removal"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "lowPrice": "25",
      "highPrice": "200",
      "offerCount": "3"
    }
  };

  return (
    <>
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-service-skin-tag"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skinTagServiceSchema) }}
      />
      <Script
        id="schema-service-wart"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wartServiceSchema) }}
      />
      <Script
        id="schema-service-pigmentation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pigmentationServiceSchema) }}
      />
      <Script
        id="schema-service-general"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
