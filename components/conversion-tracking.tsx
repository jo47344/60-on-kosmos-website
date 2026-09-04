"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function sendEvent(action: string, label: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: "engagement",
      event_label: label,
      page_path: window.location.pathname,
    })
  }
}

// Tracks interaction events only (which button/link/form was used, and on
// which page). Never reads or sends form field values, names, numbers, or
// any other guest-submitted content.
export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest("a[href]") as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute("href") || ""

      if (href.startsWith("tel:")) {
        sendEvent("phone_click", "call_button")
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        sendEvent("whatsapp_click", "whatsapp_button")
      } else if (href.startsWith("mailto:")) {
        sendEvent("email_click", "email_link")
      } else if (href.startsWith("/check-availability")) {
        sendEvent("check_availability_click", "check_availability_link")
      } else if (href.startsWith("/book-now")) {
        sendEvent("booking_click", "book_now_link")
      } else if (/^https?:\/\//.test(href) && !href.includes("60onkosmos.co.za")) {
        sendEvent("external_link_click", link.hostname)
      }
    }

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null
      if (!form) return
      const formName = form.dataset.formName || "unnamed_form"
      sendEvent("form_submit", formName)
      // The company-quote form is the primary contractor conversion, so it
      // also fires its own named event rather than only the generic one.
      if (formName === "company_enquiry_form") {
        sendEvent("company_quote_submit", "company_enquiry_form")
      }
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("submit", handleSubmit, true)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("submit", handleSubmit, true)
    }
  }, [])

  return null
}
