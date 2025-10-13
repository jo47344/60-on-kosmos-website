import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://60onkosmos.co.za"
  const currentDate = new Date().toISOString()

  const routes = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/rooms", priority: "0.9", changefreq: "weekly" },
    { url: "/special-offers", priority: "0.9", changefreq: "daily" },
    { url: "/amenities", priority: "0.8", changefreq: "monthly" },
    { url: "/local-info", priority: "0.8", changefreq: "monthly" },
    { url: "/things-to-do-bellville-south", priority: "0.8", changefreq: "monthly" },
    { url: "/testimonials", priority: "0.8", changefreq: "weekly" },
    { url: "/contact", priority: "0.9", changefreq: "monthly" },
    { url: "/book-now", priority: "0.9", changefreq: "daily" },

    // SEO landing pages - high priority
    { url: "/contractor-accommodation-bellville-south", priority: "0.9", changefreq: "weekly" },
    { url: "/near-uwc-bellville", priority: "0.9", changefreq: "weekly" },
    { url: "/accommodation-near-tygerberg-hospital", priority: "0.9", changefreq: "weekly" },
    { url: "/cheap-accommodation-bellville-south", priority: "0.8", changefreq: "weekly" },
    { url: "/monthly-accommodation-bellville-south", priority: "0.8", changefreq: "weekly" },
    { url: "/backpackers-bellville-south", priority: "0.8", changefreq: "weekly" },
    { url: "/accommodation-near-bellville-station", priority: "0.8", changefreq: "weekly" },

    // Blog pages
    { url: "/blog", priority: "0.7", changefreq: "weekly" },
    { url: "/blog/medical-staff-guide-tygerberg-hospital", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/international-student-housing-uwc", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/corporate-relocation-cape-town", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/digital-nomad-guide-bellville-south", priority: "0.7", changefreq: "monthly" },
    { url: "/blog/nursing-student-accommodation-tygerberg", priority: "0.7", changefreq: "monthly" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    ${
      route.url === ""
        ? `
    <image:image>
      <image:loc>${baseUrl}/images/exterior-building.png</image:loc>
      <image:title>60 on Kosmos Guesthouse Bellville South</image:title>
      <image:caption>Affordable ensuite accommodation in Bellville South near UWC</image:caption>
    </image:image>`
        : ""
    }
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
