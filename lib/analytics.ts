import { getAttribution, getTouches } from "@/lib/analytics-attribution"
import { analyticsAllowed } from "@/lib/analytics-consent"

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean | undefined>

// Same-event/same-key actions within this window are treated as one
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
  if (!analyticsAllowed()) return
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

// Channel names only (e.g. "Google Organic"), never anything about the person.
function channelParams(): EventParams {
  const { first, latest } = getTouches()
  return { lead_channel: latest.channel, first_touch_channel: first.channel, source_confidence: latest.confidence }
}

export type ContactClick = {
  // Where on the page: "floating_widget", "mobile_sticky_bar", "header", "footer", "page_body", ...
  buttonLocation: string
  // Visible button wording (site copy, not visitor input), trimmed.
  ctaText: string
}

export function trackWhatsAppClick({ buttonLocation, ctaText }: ContactClick): void {
  // One dedupe key for all WhatsApp clicks: a single tap is one contact intent.
  trackEvent(
    "whatsapp_click",
    {
      event_category: "engagement",
      event_label: buttonLocation,
      button_location: buttonLocation,
      cta_text: ctaText,
      destination_type: "whatsapp",
      page_location: window.location.origin + window.location.pathname,
      ...channelParams(),
    },
    "whatsapp",
  )
}

export function trackContactClick(eventName: "phone_click" | "email_click", { buttonLocation, ctaText }: ContactClick): void {
  trackEvent(
    eventName,
    {
      event_category: "engagement",
      event_label: eventName === "phone_click" ? "call_button" : "email_link",
      button_location: buttonLocation,
      cta_text: ctaText,
      destination_type: eventName === "phone_click" ? "phone" : "email",
      page_location: window.location.origin + window.location.pathname,
      ...channelParams(),
    },
    eventName,
  )
}

// --- Lead IDs --------------------------------------------------------------
// A random reference per enquiry (e.g. "WEB-261116-K7Q2"). It identifies the
// enquiry, not the person, and lets the owner match the Formspree email, the
// GA4 event and the Enquiries sheet row. A failed attempt keeps its ID so a
// retry cannot create a second lead.

const PENDING_LEAD_KEY = "kosmos_pending_lead_"
const SENT_LEADS_KEY = "kosmos_sent_leads"

function randomCode(length: number): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  const bytes = new Uint8Array(length)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("")
}

export function getPendingLeadId(formName: string): string {
  const key = PENDING_LEAD_KEY + formName
  try {
    const existing = sessionStorage.getItem(key)
    if (existing) return existing
  } catch {
    // fall through
  }
  const now = new Date()
  const ymd = `${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`
  const id = `WEB-${ymd}-${randomCode(4)}`
  try {
    sessionStorage.setItem(key, id)
  } catch {
    // ignore
  }
  return id
}

function alreadySent(leadId: string): boolean {
  try {
    const sent: string[] = JSON.parse(sessionStorage.getItem(SENT_LEADS_KEY) || "[]")
    return sent.includes(leadId)
  } catch {
    return false
  }
}

function markSent(leadId: string, formName: string): void {
  try {
    const sent: string[] = JSON.parse(sessionStorage.getItem(SENT_LEADS_KEY) || "[]")
    sent.push(leadId)
    sessionStorage.setItem(SENT_LEADS_KEY, JSON.stringify(sent.slice(-20)))
    // The next enquiry from this form is a new lead with a new ID.
    sessionStorage.removeItem(PENDING_LEAD_KEY + formName)
  } catch {
    // ignore
  }
}

// Call ONLY after Formspree has returned a successful (2xx) response.
// Sends non-personal context only. Never pass field values to this function.
export function trackLeadSuccess(formName: string, leadId: string): void {
  if (alreadySent(leadId)) return
  markSent(leadId, formName)
  const attribution = getAttribution()
  trackEvent(
    "generate_lead",
    {
      form_name: formName,
      form_page: attribution.formPage,
      landing_page: attribution.landingPage,
      lead_id: leadId,
      contact_method: "website_form",
      ...channelParams(),
    },
    leadId,
  )
}

export function trackFormStart(formName: string): void {
  trackEvent("form_start", { form_name: formName, ...channelParams() }, `${formName}|${window.location.pathname}`)
}
