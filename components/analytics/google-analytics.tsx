"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!measurementId) return

    // Load the Google Analytics script
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", measurementId, {
      page_path: pathname + searchParams.toString(),
    })

    // Make gtag available globally
    window.gtag = gtag
  }, [measurementId])

  // Track page views on route change
  useEffect(() => {
    if (!window.gtag) return

    const url = pathname + searchParams.toString()
    window.gtag("event", "page_view", {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}
