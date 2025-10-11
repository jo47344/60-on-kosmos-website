/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(
  eventName: string,
  parameters?: {
    category?: string
    label?: string
    value?: number
    [key: string]: any
  },
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters)
  }
}

/**
 * Track phone call conversions
 */
export function trackPhoneClick(source: string) {
  trackEvent("phone_click", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  })
}

/**
 * Track WhatsApp conversions
 */
export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  })
}

/**
 * Track booking form submissions
 */
export function trackBookingSubmission(roomType: string) {
  trackEvent("booking_request", {
    event_category: "conversion",
    event_label: roomType,
    value: 10, // Arbitrary value for conversion
  })
}

/**
 * Track newsletter signups
 */
export function trackNewsletterSignup() {
  trackEvent("newsletter_signup", {
    event_category: "conversion",
    event_label: "email_subscription",
    value: 5,
  })
}

/**
 * Track "Book Now" button clicks
 */
export function trackBookNowClick(source: string) {
  trackEvent("book_now_click", {
    event_category: "engagement",
    event_label: source,
    value: 1,
  })
}

/**
 * Track external link clicks
 */
export function trackExternalLink(url: string, label: string) {
  trackEvent("external_link_click", {
    event_category: "engagement",
    event_label: label,
    url: url,
  })
}

/**
 * Track room view
 */
export function trackRoomView(roomType: string) {
  trackEvent("view_room", {
    event_category: "engagement",
    event_label: roomType,
  })
}

/**
 * Track form abandonment
 */
export function trackFormAbandonment(formName: string, fieldName: string) {
  trackEvent("form_abandonment", {
    event_category: "engagement",
    event_label: `${formName} - ${fieldName}`,
  })
}
