// Single switch for all website analytics and attribution storage.
//
// Current policy: analytics run by default (notice in the privacy policy) and
// a visitor can opt out on the privacy policy page. The opt-out is remembered
// in this browser, stops GA4 via Google's official "ga-disable-<ID>" flag,
// deletes GA4 cookies and clears stored attribution.
//
// If the owner later chooses opt-in consent (a banner), only analyticsAllowed()
// and the GA4 bootstrap in components/google-analytics.tsx need to change.

export const GA_MEASUREMENT_ID = "G-GE9K8ZZ7RL"
export const OPT_OUT_STORAGE_KEY = "kosmos_analytics_opt_out"

export function analyticsAllowed(): boolean {
  if (typeof window === "undefined") return false
  try {
    return localStorage.getItem(OPT_OUT_STORAGE_KEY) !== "1"
  } catch {
    return true
  }
}

function deleteGaCookies(): void {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid")
  const host = window.location.hostname
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`]
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`
    }
  }
}

export function setAnalyticsOptOut(optOut: boolean): void {
  if (typeof window === "undefined") return
  try {
    if (optOut) localStorage.setItem(OPT_OUT_STORAGE_KEY, "1")
    else localStorage.removeItem(OPT_OUT_STORAGE_KEY)
  } catch {
    // ignore
  }
  ;(window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = optOut
  if (optOut) deleteGaCookies()
}
