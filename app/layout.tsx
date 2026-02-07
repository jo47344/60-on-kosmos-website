import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"
import { PerformanceOptimizations } from "@/components/performance-optimizations"
import { StructuredData } from "@/components/structured-data"
import { Toaster } from "@/components/ui/toaster"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const inter = Inter({ subsets: ["latin"] })

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7c9885",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://60onkosmos.co.za"),
  title: {
    default: "60 on Kosmos - Affordable Guesthouse Accommodation in Bellville South, Cape Town",
    template: "%s | 60 on Kosmos Bellville South",
  },
  description:
    "Self-catering ensuite accommodation in Bellville South. Perfect for contractors, students & young professionals. Near UWC & Tygerberg Hospital. Secure parking, free WiFi, weekly cleaning. Book direct for best rates!",
  keywords:
    "60 on Kosmos, Bellville South accommodation, guesthouse Cape Town, UWC accommodation, Tygerberg Hospital lodging, contractor accommodation Bellville, student accommodation Cape Town, affordable guesthouse, ensuite rooms Bellville, monthly accommodation Cape Town",
  authors: [{ name: "60 on Kosmos" }],
  creator: "60 on Kosmos",
  publisher: "60 on Kosmos",
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
    title: "60 on Kosmos - Affordable Guesthouse Accommodation in Bellville South",
    description:
      "Self-catering ensuite rooms near UWC & Tygerberg Hospital. Perfect for contractors, students & professionals. Secure parking, free WiFi, weekly cleaning.",
    images: [
      {
        url: "/images/exterior-building.png",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guesthouse Bellville South Exterior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@60onKosmos",
    title: "60 on Kosmos - Affordable Accommodation Bellville South",
    description:
      "Self-catering ensuite rooms. Perfect for contractors & students. Near UWC & Tygerberg Hospital. Secure parking & free WiFi.",
    images: ["/images/exterior-building.png"],
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
    google: "5vqXUTGkpekxzUZ2SZ9t_sP4o2BVGccbqEQF-dYn9IQ",
  },
  alternates: {
    canonical: "/",
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
  return (
    <html lang="en-ZA">
      <head>
        <LocalBusinessSchema />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Navigation />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <WhatsAppWidget />
        <PerformanceOptimizations />
        <Toaster />
      </body>
    </html>
  )
}
