import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://60onkosmos.co.za"
  const routes = [
    "",
    "uwc-student-accommodation",
    "cput-accommodation",
    "tygerberg-hospital-accommodation",
    "monthly-accommodation",
    "self-catering-rooms",
    "contractor-accommodation",
    "rooms",
    "amenities",
    "book-now",
    "contact",
    "special-offers",
    "faq",
    "virtual-tour",
    "testimonials",
    "blog",
  ]

  const now = new Date().toISOString()

  return routes.map((r) => ({
    url: `${base}/${r}`.replace(/\/$/, "") || base,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : 0.8,
  }))
}
