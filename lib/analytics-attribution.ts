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

const STORAGE_KEY = "site_initial_attribution"
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

export function initializeAttribution(): void {
  if (typeof window === "undefined") return

  try {
    const existing = sessionStorage.getItem(STORAGE_KEY)
    if (!existing) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(readCurrentAttribution()))
    }
  } catch {
    // Attribution is best-effort and must never affect the visitor experience.
  }
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

export function attributionPayload(attribution: AnalyticsAttribution): Record<string, string> {
  return {
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
}
