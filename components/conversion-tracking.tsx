"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void
  }
}

export function ConversionTracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: pathname,
      })
    }
  }, [pathname])

  useEffect(() => {
    const trackPhoneClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href^="tel:"]')) {
        if (window.gtag) {
          window.gtag("event", "phone_click", {
            event_category: "engagement",
            event_label: "Phone: 074 524 5703",
            value: 1,
          })
        }
      }
    }

    const trackWhatsAppClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href*="wa.me"]')) {
        if (window.gtag) {
          window.gtag("event", "whatsapp_click", {
            event_category: "engagement",
            event_label: "WhatsApp Contact",
            value: 1,
          })
        }
      }
    }

    const trackEmailClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href^="mailto:"]')) {
        if (window.gtag) {
          window.gtag("event", "email_click", {
            event_category: "engagement",
            event_label: "Email: info@60onkosmos.co.za",
            value: 1,
          })
        }
      }
    }

    const trackBookingClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.closest('a[href*="/book-now"]') || target.closest('button[type="submit"]')) {
        if (window.gtag) {
          window.gtag("event", "booking_initiated", {
            event_category: "conversion",
            event_label: "Booking Form Started",
            value: 1,
          })
        }
      }
    }

    document.addEventListener("click", trackPhoneClick)
    document.addEventListener("click", trackWhatsAppClick)
    document.addEventListener("click", trackEmailClick)
    document.addEventListener("click", trackBookingClick)

    return () => {
      document.removeEventListener("click", trackPhoneClick)
      document.removeEventListener("click", trackWhatsAppClick)
      document.removeEventListener("click", trackEmailClick)
      document.removeEventListener("click", trackBookingClick)
    }
  }, [])

  return null
}
