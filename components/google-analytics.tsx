"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
