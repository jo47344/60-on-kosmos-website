import { getAttribution } from "@/lib/analytics-attribution"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean | undefined>

// Same-event/same-label clicks within this window are treated as one
// interaction, so a click seen by more than one listener is counted once.
const DEDUPE_WINDOW_MS = 800
const recentEvents = new Map<string, number>()

function getGtag(): ((...args: unknown[]) => void) | null {
  if (typeof window === "undefined") return null
  if (typeof window.gtag !== "function") {
    // Standard gtag stub: queues calls on the dataLayer until the existing
    // GA4 script (components/google-analytics.tsx) loads and processes them.
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments)
    }
  }
  return window.gtag
}

export function trackEvent(name: string, params: EventParams = {}, dedupeKey?: string): void {
  const gtag = getGtag()
  if (!gtag) return

  if (dedupeKey) {
    const key = `${name}|${dedupeKey}`
    const now = Date.now()
    const last = recentEvents.get(key)
    if (last !== undefined && now - last < DEDUPE_WINDOW_MS) return
    recentEvents.set(key, now)
  }

  gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  })
}

export type WhatsAppClickLocation =
  | "floating_widget"
  | "mobile_floating_button"
  | "mobile_sticky_bar"
  | "link"

export function trackWhatsAppClick(location: WhatsAppClickLocation): void {
  // One dedupe key for all WhatsApp clicks: a single tap is one contact intent.
  trackEvent("whatsapp_click", { event_category: "engagement", event_label: location, link_location: location }, "whatsapp")
}

// Call ONLY after Formspree has returned a successful (2xx) response.
// Sends non-personal context only: which form, the page it was on, and the
// first page of the visit. Never pass field values to this function.
export function trackLeadSuccess(formName: string): void {
  const attribution = getAttribution()
  trackEvent(
    "generate_lead",
    {
      form_name: formName,
      form_page: attribution.formPage,
      landing_page: attribution.landingPage,
    },
    formName,
  )
}
