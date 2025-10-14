import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://60onkosmos.co.za"

  const urls = [
    // Main pages
    { loc: "", priority: 1.0, changefreq: "daily" },
    { loc: "/rooms", priority: 0.9, changefreq: "weekly" },
    { loc: "/amenities", priority: 0.8, changefreq: "monthly" },
    { loc: "/local-info", priority: 0.8, changefreq: "monthly" },
    { loc: "/contact", priority: 0.9, changefreq: "monthly" },
    { loc: "/book-now", priority: 0.9, changefreq: "weekly" },

    // Core Local SEO pages
    { loc: "/serviced-accommodation-bellville", priority: 0.9, changefreq: "weekly" },
    { loc: "/self-catering-accommodation-bellville", priority: 0.9, changefreq: "weekly" },
    { loc: "/extended-stay-hotel-bellville", priority: 0.9, changefreq: "weekly" },
    { loc: "/contractor-accommodation-bellville", priority: 0.9, changefreq: "weekly" },
    { loc: "/monthly-accommodation-bellville", priority: 0.9, changefreq: "weekly" },

    // Existing landing pages
    { loc: "/near-uwc-bellville", priority: 0.9, changefreq: "weekly" },
    { loc: "/accommodation-near-tygerberg-hospital", priority: 0.9, changefreq: "weekly" },
    { loc: "/cheap-accommodation-bellville-south", priority: 0.9, changefreq: "weekly" },
    { loc: "/backpackers-bellville-south", priority: 0.8, changefreq: "weekly" },
    { loc: "/accommodation-near-bellville-station", priority: 0.8, changefreq: "weekly" },

    // New pages
    { loc: "/special-offers", priority: 0.9, changefreq: "weekly" },
    { loc: "/testimonials", priority: 0.7, changefreq: "monthly" },
    { loc: "/things-to-do-bellville-south", priority: 0.7, changefreq: "monthly" },
    { loc: "/faq", priority: 0.8, changefreq: "monthly" },
    { loc: "/virtual-tour", priority: 0.8, changefreq: "monthly" },

    // Blog
    { loc: "/blog", priority: 0.8, changefreq: "weekly" },
    { loc: "/blog/medical-staff-guide-tygerberg-hospital", priority: 0.7, changefreq: "monthly" },
    { loc: "/blog/international-student-housing-uwc", priority: 0.7, changefreq: "monthly" },
    { loc: "/blog/corporate-relocation-cape-town", priority: 0.7, changefreq: "monthly" },
    { loc: "/blog/digital-nomad-guide-bellville-south", priority: 0.7, changefreq: "monthly" },
    { loc: "/blog/nursing-student-accommodation-tygerberg", priority: 0.7, changefreq: "monthly" },

    // Thank you page
    { loc: "/thank-you", priority: 0.3, changefreq: "yearly" },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    <lastmod>${new Date().toISOString()}</lastmod>
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
