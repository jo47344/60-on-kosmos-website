import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { LocalBusinessSchema } from "@/components/local-business-schema"
import { PerformanceOptimizations } from "@/components/performance-optimizations"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://60onkosmos.co.za"),
  title: {
    default: "60 on Kosmos Guesthouse | Affordable Accommodation in Bellville South, Cape Town",
    template: "%s | 60 on Kosmos Guesthouse",
  },
  description:
    "Comfortable & affordable guesthouse in Bellville South. Close to UWC, Tygerberg Hospital & major routes. Free WiFi, secure parking. Book your stay today!",
  keywords: [
    "guesthouse Bellville South",
    "accommodation near UWC",
    "Tygerberg Hospital accommodation",
    "affordable guesthouse Cape Town",
    "Bellville South rooms",
    "contractor accommodation Bellville",
    "student accommodation UWC",
    "guesthouse near Bellville station",
  ],
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
    siteName: "60 on Kosmos Guesthouse",
    title: "60 on Kosmos Guesthouse | Affordable Accommodation in Bellville South",
    description:
      "Comfortable & affordable guesthouse in Bellville South. Close to UWC, Tygerberg Hospital & major routes. Free WiFi, secure parking.",
    images: [
      {
        url: "/images/60-kosmos-elegant-logo.jpg",
        width: 1200,
        height: 630,
        alt: "60 on Kosmos Guesthouse Bellville South",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "60 on Kosmos Guesthouse | Affordable Accommodation in Bellville South",
    description:
      "Comfortable & affordable guesthouse in Bellville South. Close to UWC, Tygerberg Hospital & major routes.",
    images: ["/images/60-kosmos-elegant-logo.jpg"],
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <LocalBusinessSchema />
      </head>
      <body className={inter.className}>
        <PerformanceOptimizations />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <StickyMobileCTA />
        <Footer />
      </body>
    </html>
  )
}
