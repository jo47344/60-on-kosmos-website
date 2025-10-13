import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { LocalBusinessSchema } from "@/components/local-business-schema"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://60onkosmos.co.za"),
  title: {
    default: "60 on Kosmos Guesthouse Bellville South | Affordable Accommodation Near UWC Cape Town",
    template: "%s | 60 on Kosmos Bellville South Cape Town",
  },
  description:
    "★★★★★ Secure guesthouse Bellville South Cape Town with 24/7 CCTV, free parking, WiFi. 5km from UWC, 8km Tygerberg Hospital. From R530/night. Book direct 074 524 5703",
  keywords: [
    // Primary local keywords
    "guesthouse Bellville South",
    "accommodation Bellville South Cape Town",
    "rooms near UWC",
    "accommodation near UWC Bellville",
    "Tygerberg Hospital accommodation",

    // Secondary local keywords
    "Bellville South ensuite rooms",
    "contractor accommodation Bellville South",
    "student accommodation UWC",
    "affordable guesthouse Cape Town",
    "budget accommodation Bellville",

    // Long-tail local keywords
    "guesthouse near University Western Cape",
    "cheap rooms Bellville South",
    "secure parking accommodation Cape Town",
    "monthly accommodation Bellville South",
    "backpackers Bellville South",

    // Location-specific
    "60 Kosmos Street Bellville South",
    "accommodation Kasselsvlei Centre",
    "guesthouse near Bellville station",
    "Cape Town Northern Suburbs accommodation",
  ].join(", "),
  authors: [{ name: "60 on Kosmos Guesthouse" }],
  creator: "60 on Kosmos Guesthouse Bellville South",
  publisher: "60 on Kosmos Ensuite Accommodation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://60onkosmos.co.za",
    siteName: "60 on Kosmos Guesthouse Bellville South Cape Town",
    title: "60 on Kosmos | Best Guesthouse Bellville South Near UWC Cape Town",
    description:
      "★★★★★ Secure accommodation Bellville South. 5km from UWC, 8km Tygerberg Hospital. Free WiFi, parking, 24/7 security. From R530/night. Book 074 524 5703",
    images: [
      {
        url: "https://60onkosmos.co.za/images/exterior-building.png",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guesthouse Bellville South - Exterior Building",
        type: "image/png",
      },
      {
        url: "https://60onkosmos.co.za/images/sage-double-room.png",
        width: 1200,
        height: 800,
        alt: "Ensuite Double Room 60 on Kosmos Bellville South",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@60onKosmos",
    title: "60 on Kosmos Guesthouse Bellville South | Near UWC Cape Town",
    description: "★★★★★ Secure accommodation from R530/night. 5km UWC, free WiFi, parking, 24/7 security",
    images: ["https://60onkosmos.co.za/images/exterior-building.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://60onkosmos.co.za",
    languages: {
      "en-ZA": "https://60onkosmos.co.za",
    },
  },
  category: "Lodging",
  classification: "Guesthouse, Bed and Breakfast, Budget Accommodation",
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Bellville South, Cape Town",
    "geo.position": "-33.9347;18.6489",
    ICBM: "-33.9347, 18.6489",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is 60 on Kosmos guesthouse located in Bellville South?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "60 on Kosmos is located at 60 Kosmos Street, Bellville South, Cape Town, 7530. We're 5km from UWC, 8km from Tygerberg Hospital, and 2km from SPAR Kasselsvlei Centre.",
        },
      },
      {
        "@type": "Question",
        name: "Is there secure parking at the Bellville South guesthouse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free secure on-site parking behind locked gates with 24/7 CCTV monitoring for all guests at 60 on Kosmos Bellville South.",
        },
      },
      {
        "@type": "Question",
        name: "How much does accommodation cost at 60 on Kosmos Bellville South?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Room rates at 60 on Kosmos start from R530 per night for standard twin rooms, R580 for deluxe twin, R620 for double rooms, and R750 for triple rooms. All rooms include free WiFi, secure parking, and ensuite bathrooms.",
        },
      },
      {
        "@type": "Question",
        name: "Do you accept contractors at 60 on Kosmos Bellville South?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we welcome contractors and offer competitive long-term and monthly rates. Our Bellville South location is perfect for contractors working in Cape Town. Call 074 524 5703 for contractor rates.",
        },
      },
      {
        "@type": "Question",
        name: "How close is 60 on Kosmos to UWC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "60 on Kosmos is just 5km (approximately 8 minutes drive) from the University of the Western Cape (UWC) campus, making us ideal for visiting students, parents, and university staff.",
        },
      },
      {
        "@type": "Question",
        name: "What amenities are included at 60 on Kosmos guesthouse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All rooms at 60 on Kosmos include: ensuite bathroom, free high-speed WiFi, secure parking, bar fridge, fresh linen, welcome refreshments (tea, coffee, rusks), 24/7 CCTV security, and access to outdoor seating area.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get to 60 on Kosmos from Cape Town CBD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From Cape Town CBD, take the N1 towards Paarl/Bellville. Take exit 10 for Bellville/Parow. Follow Voortrekker Road, then turn onto Kosmos Street. We're approximately 20km from CBD. Taxi rank at Kasselsvlei Centre (2km) offers regular services.",
        },
      },
      {
        "@type": "Question",
        name: "Is 60 on Kosmos suitable for families visiting Cape Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer triple rooms perfect for families. Our Bellville South location provides easy access to Cape Town attractions while being more affordable than CBD accommodation. Secure parking and 24/7 security ensure peace of mind.",
        },
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://60onkosmos.co.za/#website",
    url: "https://60onkosmos.co.za",
    name: "60 on Kosmos Guesthouse Bellville South Cape Town",
    description: "Affordable ensuite accommodation in Bellville South, Cape Town. Near UWC and Tygerberg Hospital.",
    publisher: {
      "@type": "Organization",
      "@id": "https://60onkosmos.co.za/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://60onkosmos.co.za/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-ZA",
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://60onkosmos.co.za/#organization",
    name: "60 on Kosmos Ensuite Accommodation",
    alternateName: "60 on Kosmos Guesthouse Bellville South",
    url: "https://60onkosmos.co.za",
    logo: {
      "@type": "ImageObject",
      url: "https://60onkosmos.co.za/images/60-on-kosmos-logo.png",
      width: 280,
      height: 80,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-74-524-5703",
      contactType: "Reservations",
      areaServed: "ZA",
      availableLanguage: ["English", "Afrikaans"],
      contactOption: "TollFree",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "60 Kosmos Street",
      addressLocality: "Bellville South",
      addressRegion: "Western Cape",
      postalCode: "7530",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.facebook.com/60-On-Kosmos-61571946294679/",
      "https://www.airbnb.com/rooms/1332667439996159511",
      "https://www.booking.com/hotel/za/60-on-kosmos-cape-town.html",
    ],
  }

  return (
    <html lang="en-ZA">
      <head>
        <LocalBusinessSchema />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="ZA-WC" />
        <meta name="geo.placename" content="Bellville South, Cape Town" />
        <meta name="geo.position" content="-33.9347;18.6489" />
        <meta name="ICBM" content="-33.9347, 18.6489" />

        {/* Local business markup */}
        <meta property="business:contact_data:street_address" content="60 Kosmos Street" />
        <meta property="business:contact_data:locality" content="Bellville South" />
        <meta property="business:contact_data:region" content="Western Cape" />
        <meta property="business:contact_data:postal_code" content="7530" />
        <meta property="business:contact_data:country_name" content="South Africa" />

        {/* Performance and DNS optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//maps.google.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Mobile optimization */}
        <meta name="theme-color" content="#7c9885" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="60 on Kosmos" />

        {/* Additional meta tags */}
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL - Forces HTTPS */}
        <link rel="canonical" href="https://60onkosmos.co.za" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <a
          href="https://wa.me/27745245703?text=Hi%2C%20I%20want%20to%20book%20a%20room%20at%2060%20on%20Kosmos%20from%20[insert%20dates]"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          title="WhatsApp Book Now - 60 on Kosmos Bellville South"
          aria-label="Contact us on WhatsApp to book accommodation at 60 on Kosmos Bellville South"
        >
          💬
        </a>
        <StickyMobileCTA />
      </body>
    </html>
  )
}
