"use client"

import { useEffect } from "react"
import { initializeAttribution } from "@/lib/analytics-attribution"
import { trackContactClick, trackEvent, trackFormStart, trackWhatsAppClick } from "@/lib/analytics"

function sendEvent(action: string, label: string) {
  trackEvent(action, { event_category: "engagement", event_label: label }, label)
}

// Where a link sits on the page. An explicit data-track-location wins;
// otherwise the nearest page landmark is used.
function buttonLocation(el: HTMLElement): string {
  const tagged = el.closest("[data-track-location]") as HTMLElement | null
  if (tagged?.dataset.trackLocation) return tagged.dataset.trackLocation
  if (el.closest("nav, header")) return "header"
  if (el.closest("footer")) return "footer"
  if (el.closest("form")) return "form_area"
  if (el.closest("main")) return "page_body"
  return "other"
}

// The button's own wording (site copy). Never the href: WhatsApp links can
// carry a pre-filled message that includes details a guest typed in.
function ctaText(el: HTMLElement): string {
  const text = (el.getAttribute("aria-label") || el.textContent || "").replace(/\s+/g, " ").trim()
  return text.slice(0, 60) || "(no text)"
}

// Tracks interaction events only (which button/link/form was used, and on
// which page). Never reads or sends form field values, names, numbers, or
// any other guest-submitted content.
export function ConversionTracking() {
  useEffect(() => {
    initializeAttribution()
    const startedForms = new Set<string>()

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest("a[href]") as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute("href") || ""
      const click = { buttonLocation: buttonLocation(link), ctaText: ctaText(link) }

      if (href.startsWith("tel:")) {
        trackContactClick("phone_click", click)
      } else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        trackWhatsAppClick(click)
      } else if (href.startsWith("mailto:")) {
        trackContactClick("email_click", click)
      } else if (href.startsWith("/check-availability")) {
        sendEvent("check_availability_click", "check_availability_link")
      } else if (href.startsWith("/book-now")) {
        sendEvent("booking_click", "book_now_link")
      } else if (/^https?:\/\//.test(href) && !href.includes("60onkosmos.co.za")) {
        sendEvent("external_link_click", link.hostname)
      }
    }

    // form_start: the first time a visitor interacts with a given enquiry
    // form on a given page.
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null
      const form = target?.closest("form[data-form-name]") as HTMLFormElement | null
      if (!form) return
      const formName = form.dataset.formName || "unnamed_form"
      const key = `${formName}|${window.location.pathname}`
      if (startedForms.has(key)) return
      startedForms.add(key)
      trackFormStart(formName)
    }

    const handleSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null
      if (!form) return
      const formName = form.dataset.formName || "unnamed_form"
      // An attempt only: completed leads are recorded separately as
      // "generate_lead" after Formspree confirms the submission.
      sendEvent("form_submit_attempt", formName)
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("focusin", handleFocusIn)
    document.addEventListener("submit", handleSubmit, true)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("focusin", handleFocusIn)
      document.removeEventListener("submit", handleSubmit, true)
    }
  }, [])

  return null
}
