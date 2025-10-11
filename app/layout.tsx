import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"
import { PerformanceOptimizations } from "@/components/performance-optimizations"
import { StructuredData } from "@/components/structured-data"
import { OrganizationSchema } from "@/components/schema/organization-schema"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"

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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""

  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}
        <PerformanceOptimizations />
        <StructuredData />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  )
}
