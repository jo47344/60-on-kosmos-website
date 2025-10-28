import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://60onkosmos.co.za/sitemap.xml",
    host: "https://60onkosmos.co.za",
  }
}
