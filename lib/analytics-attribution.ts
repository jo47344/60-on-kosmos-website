// First-party lead attribution for website enquiries.
//
// What is stored, and where:
// - sessionStorage "site_initial_attribution": how the current visit started
//   (cleared when the tab closes). Unchanged from the original implementation.
// - localStorage "kosmos_attribution_v1": the first and the latest known
//   marketing touch, kept for at most ATTRIBUTION_RETENTION_DAYS and then
//   discarded. It holds only marketing context (source, medium, campaign,
//   landing page path, referring domain, date). It never holds names, phone
//   numbers, emails or anything typed into a form.
//
// Nothing here fingerprints the visitor, and nothing is sent anywhere unless
// the visitor submits an enquiry form (then it goes to Formspree with the
// enquiry) or clicks a contact button (then only the channel names go to GA4).

import { analyticsAllowed } from "@/lib/analytics-consent"

export const ATTRIBUTION_RETENTION_DAYS = 90

export type AnalyticsAttribution = {
  landingPage: string
  formPage: string
  referrer: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  utmTerm: string
  gclid: string
  dclid: string
  wbraid: string
  gbraid: string
  fbclid: string
  msclkid: string
}

export type SourceConfidence = "high" | "medium" | "low"

export type Touch = {
  source: string
  medium: string
  campaign: string
  content: string
  term: string
  channel: string
  confidence: SourceConfidence
  landingPage: string
  referrerDomain: string
  at: string // ISO date-time of the visit that produced this touch
}

type StoredTouches = { first: Touch; latest: Touch }

const STORAGE_KEY = "site_initial_attribution"
const TOUCH_STORAGE_KEY = "kosmos_attribution_v1"
const SESSION_TOUCH_KEY = "kosmos_session_touch_recorded"
const SITE_HOSTS = ["www.60onkosmos.co.za", "60onkosmos.co.za"]
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "dclid", "wbraid", "gbraid", "fbclid", "msclkid"] as const

function readCurrentAttribution(): Partial<AnalyticsAttribution> {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)
  const values: Partial<AnalyticsAttribution> = {}
  const keyMap: Record<(typeof attributionKeys)[number], keyof AnalyticsAttribution> = {
    utm_source: "utmSource",
    utm_medium: "utmMedium",
    utm_campaign: "utmCampaign",
    utm_content: "utmContent",
    utm_term: "utmTerm",
    gclid: "gclid",
    dclid: "dclid",
    wbraid: "wbraid",
    gbraid: "gbraid",
    fbclid: "fbclid",
    msclkid: "msclkid",
  }
  for (const key of attributionKeys) {
    const value = params.get(key)
    if (value) values[keyMap[key]] = value.slice(0, 300)
  }

  let referrer = ""
  try {
    if (document.referrer) {
      const referrerUrl = new URL(document.referrer)
      referrer = `${referrerUrl.origin}${referrerUrl.pathname}`.slice(0, 500)
    }
  } catch {
    referrer = ""
  }

  return {
    landingPage: window.location.pathname,
    referrer,
    ...values,
  }
}

// ---------------------------------------------------------------------------
// Channel classification
// ---------------------------------------------------------------------------

const PAID_MEDIUMS = ["cpc", "ppc", "paid", "paidsearch", "paid_search", "paid_social", "paidsocial", "paid-social", "cpm", "display", "ads"]
const SEARCH_ENGINES: Array<[RegExp, string]> = [
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)yahoo\.com$/, "yahoo"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
  [/(^|\.)ecosia\.org$/, "ecosia"],
  [/(^|\.)yandex\./, "yandex"],
  [/(^|\.)baidu\.com$/, "baidu"],
]

const clean = (value: string | undefined | null) => (value || "").trim().toLowerCase().slice(0, 100)

function isGoogleHost(host: string) {
  return /(^|\.)google\.[a-z.]+$/.test(host)
}
function isFacebookHost(host: string) {
  return /(^|\.)facebook\.com$/.test(host) || host === "fb.me" || host === "fb.com"
}
function isInstagramHost(host: string) {
  return /(^|\.)instagram\.com$/.test(host)
}
function isWhatsAppHost(host: string) {
  return /(^|\.)whatsapp\.com$/.test(host) || host === "wa.me" || host === "l.wl.co"
}

function channelForSourceMedium(source: string, medium: string, campaign: string, paidClickId: boolean): string {
  const paid = paidClickId || PAID_MEDIUMS.includes(medium)
  const isGbp =
    ["gbp", "google_business_profile", "googlebusinessprofile", "google_maps", "gmb"].includes(source) ||
    /(^|_|-)(gbp|gmb|business_profile|google_business_profile)($|_|-)/.test(campaign)

  if (isGbp) return "Google Business Profile"
  if (["google", "google.com", "adwords"].includes(source)) return paid ? "Google Ads" : "Google Organic"
  if (["facebook", "fb", "facebook.com", "m.facebook.com", "l.facebook.com", "meta"].includes(source))
    return paid ? "Facebook Ads" : "Facebook Organic"
  if (["instagram", "ig", "instagram.com", "l.instagram.com"].includes(source)) return paid ? "Instagram Ads" : "Instagram"
  if (["bing", "yahoo", "duckduckgo", "ecosia"].includes(source)) return paid ? "Other Paid Search" : "Other Search"
  if (["whatsapp", "wa"].includes(source)) return "WhatsApp Share"
  if (medium === "email" || medium === "newsletter") return "Email"
  if (medium === "referral") return "Referral"
  if (paid) return "Other Paid"
  return "Other Campaign"
}

// Works out where a visit came from using only the landing URL and the
// browser-supplied referrer. If neither says anything, the visit is recorded
// as "(direct)" / "Direct / Unknown" rather than guessed.
export function classifyTouch(landingUrl: string, referrer: string, now: Date = new Date()): Touch | null {
  let url: URL
  try {
    url = new URL(landingUrl)
  } catch {
    return null
  }
  const params = url.searchParams
  let referrerHost = ""
  try {
    referrerHost = referrer ? new URL(referrer).hostname.toLowerCase() : ""
  } catch {
    referrerHost = ""
  }

  // Moving between pages of this site is not a new marketing touch.
  if (referrerHost && (SITE_HOSTS.includes(referrerHost) || referrerHost === url.hostname.toLowerCase()) && !params.get("utm_source")) {
    return null
  }

  const base = {
    landingPage: url.pathname.slice(0, 200),
    referrerDomain: referrerHost.slice(0, 100),
    at: now.toISOString(),
    content: clean(params.get("utm_content")),
    term: clean(params.get("utm_term")),
  }

  const utmSource = clean(params.get("utm_source"))
  const utmMedium = clean(params.get("utm_medium"))
  const utmCampaign = clean(params.get("utm_campaign"))
  const googlePaidClick = Boolean(params.get("gclid") || params.get("gbraid") || params.get("wbraid") || params.get("dclid"))
  const msPaidClick = Boolean(params.get("msclkid"))

  // 1. Explicit campaign tagging (UTMs) is the most reliable signal.
  if (utmSource) {
    const medium = utmMedium || (googlePaidClick ? "cpc" : "(not set)")
    return {
      ...base,
      source: utmSource,
      medium,
      campaign: utmCampaign,
      channel: channelForSourceMedium(utmSource, medium, utmCampaign, googlePaidClick || msPaidClick),
      confidence: "high",
    }
  }

  // 2. Ad-platform click IDs added automatically by Google Ads / Microsoft Ads.
  if (googlePaidClick) {
    return { ...base, source: "google", medium: "cpc", campaign: utmCampaign, channel: "Google Ads", confidence: "high" }
  }
  if (msPaidClick) {
    return { ...base, source: "bing", medium: "cpc", campaign: utmCampaign, channel: "Other Paid Search", confidence: "high" }
  }

  // 3. Referrer-based inference (no tagging). Less certain.
  if (referrerHost) {
    if (isGoogleHost(referrerHost)) {
      if (referrerHost.startsWith("maps.") || referrerHost.startsWith("business.")) {
        return { ...base, source: "google", medium: "organic", campaign: "", channel: "Google Business Profile", confidence: "medium" }
      }
      // Google Search and Google Maps/Business Profile usually look identical
      // here, which is why the Business Profile link should carry UTMs.
      return { ...base, source: "google", medium: "organic", campaign: "", channel: "Google Organic", confidence: "medium" }
    }
    for (const [pattern, name] of SEARCH_ENGINES) {
      if (pattern.test(referrerHost)) {
        return { ...base, source: name, medium: "organic", campaign: "", channel: "Other Search", confidence: "medium" }
      }
    }
    // fbclid is added to all Facebook/Instagram outbound links, paid or not,
    // so on its own it does NOT mean the visit came from an ad.
    if (isInstagramHost(referrerHost)) {
      return { ...base, source: "instagram", medium: "social", campaign: "", channel: "Instagram", confidence: "medium" }
    }
    if (isFacebookHost(referrerHost)) {
      return { ...base, source: "facebook", medium: "social", campaign: "", channel: "Facebook Organic", confidence: "medium" }
    }
    if (isWhatsAppHost(referrerHost)) {
      return { ...base, source: "whatsapp", medium: "referral", campaign: "", channel: "WhatsApp Share", confidence: "medium" }
    }
    return { ...base, source: referrerHost.replace(/^www\./, ""), medium: "referral", campaign: "", channel: "Referral", confidence: "medium" }
  }

  // 4. fbclid without a referrer (common in the Facebook/Instagram in-app
  //    browser): Meta, but we can't tell Facebook from Instagram.
  if (params.get("fbclid")) {
    return { ...base, source: "facebook_or_instagram", medium: "social", campaign: "", channel: "Facebook / Instagram (unconfirmed)", confidence: "low" }
  }

  // 5. Nothing to go on. Typed URLs, bookmarks, many apps (including links
  //    opened from WhatsApp chats) and privacy tools all look like this.
  return { ...base, source: "(direct)", medium: "(none)", campaign: "", channel: "Direct / Unknown", confidence: "low" }
}

// ---------------------------------------------------------------------------
// Storage (first touch + latest touch, limited retention)
// ---------------------------------------------------------------------------

function readTouches(now: Date = new Date()): StoredTouches | null {
  try {
    const raw = localStorage.getItem(TOUCH_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StoredTouches
    const firstAt = new Date(parsed?.first?.at).getTime()
    if (!parsed?.first || !parsed?.latest || isNaN(firstAt)) return null
    if (now.getTime() - firstAt > ATTRIBUTION_RETENTION_DAYS * 86_400_000) {
      localStorage.removeItem(TOUCH_STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    return null
  }
}

// Records this visit's touch once per browser session.
// First touch: set once and kept until it expires.
// Latest touch: replaced by any tagged/referred visit; a later "direct" visit
// does not overwrite a known source (standard "last non-direct" attribution).
function recordTouch(): void {
  try {
    if (sessionStorage.getItem(SESSION_TOUCH_KEY)) return
    sessionStorage.setItem(SESSION_TOUCH_KEY, "1")
  } catch {
    return
  }

  const touch = classifyTouch(window.location.href, document.referrer)
  if (!touch) return

  try {
    const existing = readTouches()
    let next: StoredTouches
    if (!existing) {
      next = { first: touch, latest: touch }
    } else {
      const latest = touch.source === "(direct)" && existing.latest.source !== "(direct)" ? existing.latest : touch
      next = { first: existing.first, latest }
    }
    localStorage.setItem(TOUCH_STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Storage blocked or full: attribution is best-effort only.
  }
}

export function clearStoredAttribution(): void {
  try {
    localStorage.removeItem(TOUCH_STORAGE_KEY)
    sessionStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem(SESSION_TOUCH_KEY)
  } catch {
    // ignore
  }
}

export function initializeAttribution(): void {
  if (typeof window === "undefined") return
  if (!analyticsAllowed()) return

  try {
    const existing = sessionStorage.getItem(STORAGE_KEY)
    if (!existing) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(readCurrentAttribution()))
    }
  } catch {
    // Attribution is best-effort and must never affect the visitor experience.
  }
  recordTouch()
}

export function getAttribution(formPage?: string): AnalyticsAttribution {
  const current = readCurrentAttribution()
  const resolvedFormPage = formPage || (typeof window !== "undefined" ? window.location.pathname : "")
  let initial: Partial<AnalyticsAttribution> = {}

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    initial = stored ? JSON.parse(stored) : {}
  } catch {
    initial = {}
  }

  return {
    landingPage: initial.landingPage || current.landingPage || "",
    formPage: resolvedFormPage,
    referrer: initial.referrer || current.referrer || "",
    utmSource: initial.utmSource || current.utmSource || "",
    utmMedium: initial.utmMedium || current.utmMedium || "",
    utmCampaign: initial.utmCampaign || current.utmCampaign || "",
    utmContent: initial.utmContent || current.utmContent || "",
    utmTerm: initial.utmTerm || current.utmTerm || "",
    gclid: initial.gclid || current.gclid || "",
    dclid: initial.dclid || current.dclid || "",
    wbraid: initial.wbraid || current.wbraid || "",
    gbraid: initial.gbraid || current.gbraid || "",
    fbclid: initial.fbclid || current.fbclid || "",
    msclkid: initial.msclkid || current.msclkid || "",
  }
}

const UNKNOWN_TOUCH: Touch = {
  source: "(unknown)",
  medium: "(unknown)",
  campaign: "",
  content: "",
  term: "",
  channel: "Unknown (no data)",
  confidence: "low",
  landingPage: "",
  referrerDomain: "",
  at: "",
}

// First and latest touch for this visitor. If nothing was recorded (storage
// blocked, analytics opted out, or the enquiry page was opened directly in a
// fresh tab), falls back to classifying the current page view, and finally to
// an explicit "unknown" rather than a guess.
export function getTouches(): StoredTouches {
  if (typeof window === "undefined") return { first: UNKNOWN_TOUCH, latest: UNKNOWN_TOUCH }
  const stored = analyticsAllowed() ? readTouches() : null
  if (stored) return stored
  const current = analyticsAllowed() ? classifyTouch(window.location.href, document.referrer) : null
  const touch = current || UNKNOWN_TOUCH
  return { first: touch, latest: touch }
}

// Readable South African time, e.g. "2026-11-16 14:03 SAST".
export function sastTimestamp(date: Date = new Date()): string {
  try {
    const formatted = new Intl.DateTimeFormat("sv-SE", {
      timeZone: "Africa/Johannesburg",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date)
    return `${formatted} SAST`
  } catch {
    return date.toISOString()
  }
}

export type EnquiryContext = {
  leadId: string
  contactMethod: string
}

// Fields sent to Formspree with an enquiry. The original fields are kept
// unchanged; the lead_* / first_touch_* fields are the new attribution set.
export function attributionPayload(attribution: AnalyticsAttribution, context?: EnquiryContext): Record<string, string> {
  // A visitor who turned analytics off gets no source tracking at all; only
  // the page the form is on and the enquiry reference are sent.
  if (typeof window !== "undefined" && !analyticsAllowed()) {
    const blank = Object.fromEntries(Object.keys(attribution).map((k) => [k, ""])) as AnalyticsAttribution
    attribution = { ...blank, formPage: attribution.formPage }
  }
  const payload: Record<string, string> = {
    initial_landing_page: attribution.landingPage,
    form_page: attribution.formPage,
    document_referrer: attribution.referrer,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_content: attribution.utmContent,
    utm_term: attribution.utmTerm,
    gclid: attribution.gclid,
    dclid: attribution.dclid,
    wbraid: attribution.wbraid,
    gbraid: attribution.gbraid,
    fbclid: attribution.fbclid,
    msclkid: attribution.msclkid,
  }

  if (!context) return payload

  const { first, latest } = getTouches()
  return {
    ...payload,
    lead_id: context.leadId,
    lead_channel: latest.channel,
    lead_source: latest.source,
    lead_medium: latest.medium,
    lead_campaign: latest.campaign,
    lead_content: latest.content,
    lead_term: latest.term,
    source_confidence: latest.confidence,
    first_touch_channel: first.channel,
    first_touch_source: first.source,
    first_touch_medium: first.medium,
    first_touch_campaign: first.campaign,
    first_touch_date: first.at ? first.at.slice(0, 10) : "",
    first_touch_landing_page: first.landingPage,
    landing_page: attribution.landingPage,
    enquiry_page: attribution.formPage,
    referrer: latest.referrerDomain || attribution.referrer,
    contact_method: context.contactMethod,
    enquiry_timestamp: sastTimestamp(),
  }
}
