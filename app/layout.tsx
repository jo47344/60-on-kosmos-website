import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://60onkosmos.co.za"),
  title: {
    default:
      "60 on Kosmos Guesthouse Bellville South | Affordable Accommodation Cape Town near UWC & Tygerberg Hospital",
    template: "%s | 60 on Kosmos Guesthouse Bellville South",
  },
  description:
    "Secure guesthouse Bellville South with 24/7 CCTV, safe parking, free WiFi. Near UWC, Tygerberg Hospital, public transport. From R530/night. Book 074 524 5703",
  keywords:
    "guesthouse Bellville South, accommodation Cape Town, rooms near UWC, Tygerberg Hospital accommodation, secure guesthouse Cape Town, contractor accommodation Bellville, student accommodation UWC, affordable guesthouse Cape Town",
  authors: [{ name: "60 on Kosmos Guesthouse" }],
  creator: "60 on Kosmos Guesthouse",
  publisher: "60 on Kosmos Guesthouse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://60onkosmos.co.za",
    siteName: "60 on Kosmos Guesthouse Bellville South",
    title: "60 on Kosmos Guesthouse Bellville South | Affordable Accommodation Cape Town",
    description: "Secure accommodation in Bellville South near UWC and Tygerberg Hospital. From R530/night.",
    images: [
      {
        url: "/images/exterior-building.png",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guesthouse Bellville South",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "60 on Kosmos Guesthouse Bellville South",
    description: "Secure accommodation near UWC and Tygerberg Hospital from R530/night",
    images: ["/images/exterior-building.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://60onkosmos.co.za",
  },
  icons: {
    icon: "/images/60-on-kosmos-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lodgingBusinessData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "60 on Kosmos – Ensuite Accommodation Bellville South",
    url: "https://60onkosmos.co.za/",
    telephone: "+27 74 524 5703",
    priceRange: "R500–R800",
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmos Street",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.9123456",
      longitude: "18.6234567",
    },
    sameAs: [
      "https://www.facebook.com/60-On-Kosmos-61571946294679/",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Secure parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "CCTV", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Ensuite bathrooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bar fridge in rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Welcome refreshments", value: true },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Room Types",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Standard Twin Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "530" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Standard Twin",
            bed: "2 single beds",
            occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          },
        },
        {
          "@type": "Offer",
          name: "Deluxe Twin Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "580" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Deluxe Twin",
            bed: "2 single beds",
            occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          },
        },
        {
          "@type": "Offer",
          name: "Double Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "620" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Double",
            bed: "1 double bed",
            occupancy: { "@type": "QuantitativeValue", maxValue: 2 },
          },
        },
        {
          "@type": "Offer",
          name: "Triple Room",
          priceSpecification: { "@type": "UnitPriceSpecification", priceCurrency: "ZAR", price: "720" },
          itemOffered: {
            "@type": "HotelRoom",
            name: "Triple",
            bed: "3 single beds",
            occupancy: { "@type": "QuantitativeValue", maxValue: 3 },
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is there parking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, secure on-site parking behind locked gates with CCTV.",
        },
      },
      {
        "@type": "Question",
        name: "Do you allow contractors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We welcome contractors and offer weekly/monthly rates on request.",
        },
      },
      {
        "@type": "Question",
        name: "How close are you to UWC/CPUT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We're within a short drive of UWC and CPUT Bellville campuses.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Private ensuite bathroom, WiFi, bar fridge, clean linen, and welcome refreshments.",
        },
      },
    ],
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://60onkosmos.co.za/",
    name: "60 on Kosmos Bellville South",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://60onkosmos.co.za/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusinessData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <meta name="theme-color" content="#7c9885" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <a
          href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%2060%20on%20Kosmos%20from%20[insert%20dates]"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          title="WhatsApp Book Now - 60 on Kosmos Bellville South"
          aria-label="Contact us on WhatsApp"
        >
          💬
        </a>
        <StickyMobileCTA />
      </body>
    </html>
  )
}
