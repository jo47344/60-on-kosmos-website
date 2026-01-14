import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://60onkosmos.co.za"

  // All 47 pages organized by priority for contractor-focused ranking
  const routes = [
    // Homepage - highest priority
    { url: "", priority: 1.0, freq: "daily" as const },

    // HIGH INTENT MONEY PAGES - Contractor accommodation
    { url: "contractor-accommodation", priority: 1.0, freq: "daily" as const },
    { url: "contractor-accommodation-bellville", priority: 0.95, freq: "daily" as const },
    { url: "contractor-accommodation-bellville-south", priority: 0.95, freq: "daily" as const },
    { url: "contractor-accommodation-parow", priority: 0.95, freq: "daily" as const },
    { url: "contractor-accommodation-stikland", priority: 0.95, freq: "daily" as const },
    { url: "contractor-accommodation-goodwood", priority: 0.95, freq: "daily" as const },
    { url: "contractor-accommodation-kuilsriver", priority: 0.95, freq: "daily" as const },
    { url: "contractor-accommodation-northern-suburbs", priority: 0.95, freq: "daily" as const },

    // HIGH INTENT - Stay type pages
    { url: "monthly-accommodation", priority: 0.9, freq: "daily" as const },
    { url: "weekly-accommodation", priority: 0.9, freq: "daily" as const },
    { url: "self-catering-rooms", priority: 0.85, freq: "weekly" as const },

    // Conversion pages
    { url: "rooms", priority: 0.9, freq: "weekly" as const },
    { url: "book-now", priority: 0.9, freq: "daily" as const },
    { url: "special-offers", priority: 0.85, freq: "weekly" as const },

    // Location pages - proximity signals
    { url: "n1-city-accommodation", priority: 0.85, freq: "weekly" as const },
    { url: "airport-accommodation", priority: 0.8, freq: "weekly" as const },
    { url: "monthly-accommodation-bellville", priority: 0.8, freq: "weekly" as const },
    { url: "monthly-accommodation-bellville-south", priority: 0.8, freq: "weekly" as const },
    { url: "self-catering-accommodation-bellville", priority: 0.75, freq: "weekly" as const },
    { url: "serviced-accommodation-bellville", priority: 0.75, freq: "weekly" as const },
    { url: "extended-stay-hotel-bellville", priority: 0.75, freq: "weekly" as const },
    { url: "bellville-south-guesthouse", priority: 0.7, freq: "weekly" as const },
    { url: "accommodation-near-bellville-station", priority: 0.7, freq: "monthly" as const },
    { url: "backpackers-bellville-south", priority: 0.65, freq: "monthly" as const },
    { url: "cheap-accommodation-bellville-south", priority: 0.65, freq: "monthly" as const },

    // Secondary market - Students/Medical
    { url: "uwc-student-accommodation", priority: 0.75, freq: "weekly" as const },
    { url: "cput-accommodation", priority: 0.75, freq: "weekly" as const },
    { url: "tygerberg-hospital-accommodation", priority: 0.75, freq: "weekly" as const },
    { url: "near-uwc-bellville", priority: 0.7, freq: "weekly" as const },
    { url: "near-cput-bellville", priority: 0.7, freq: "weekly" as const },
    { url: "accommodation-near-tygerberg-hospital", priority: 0.7, freq: "weekly" as const },

    // Support pages
    { url: "contact", priority: 0.8, freq: "monthly" as const },
    { url: "amenities", priority: 0.75, freq: "monthly" as const },
    { url: "virtual-tour", priority: 0.7, freq: "monthly" as const },
    { url: "faq", priority: 0.7, freq: "monthly" as const },
    { url: "testimonials", priority: 0.65, freq: "weekly" as const },
    { url: "student-faq", priority: 0.6, freq: "monthly" as const },
    { url: "local-info", priority: 0.6, freq: "monthly" as const },
    { url: "things-to-do-bellville-south", priority: 0.55, freq: "monthly" as const },
    { url: "terms", priority: 0.5, freq: "yearly" as const },

    // Blog - content marketing
    { url: "blog", priority: 0.7, freq: "weekly" as const },
    { url: "blog/international-student-housing-uwc", priority: 0.6, freq: "monthly" as const },
    { url: "blog/corporate-relocation-cape-town", priority: 0.6, freq: "monthly" as const },
    { url: "blog/digital-nomad-guide-bellville-south", priority: 0.6, freq: "monthly" as const },
    { url: "blog/nursing-student-accommodation-tygerberg", priority: 0.6, freq: "monthly" as const },
    { url: "blog/medical-staff-guide-tygerberg-hospital", priority: 0.6, freq: "monthly" as const },

    // Low priority utility
    { url: "thank-you", priority: 0.3, freq: "yearly" as const },
  ]

  const now = new Date().toISOString()

  return routes.map((route) => ({
    url: `${base}/${route.url}`.replace(/\/$/, "") || base,
    lastModified: now,
    changeFrequency: route.freq,
    priority: route.priority,
  }))
}
