import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { StructuredData } from "@/components/structured-data"

// Dynamic imports for non-critical components
const StickyMobileCTA = dynamic(() => import("@/components/sticky-mobile-cta").then(mod => ({ default: mod.StickyMobileCTA })), { ssr: false })
const GoogleAnalytics = dynamic(() => import("@/components/google-analytics").then(mod => ({ default: mod.GoogleAnalytics })), { ssr: false })
const PerformanceOptimizations = dynamic(() => import("@/components/performance-optimizations").then(mod => ({ default: mod.PerformanceOptimizations })), { ssr: false })
const Toaster = dynamic(() => import("@/components/ui/toaster").then(mod => ({ default: mod.Toaster })), { ssr: false })
const WhatsAppWidget = dynamic(() => import("@/components/whatsapp-widget").then(mod => ({ default: mod.WhatsAppWidget })), { ssr: false })

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

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
    <html lang="en-ZA" className="bg-background">
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
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
