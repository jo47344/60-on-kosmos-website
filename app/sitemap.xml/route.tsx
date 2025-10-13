import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://60onkosmos.co.za"

  const urls = [
    "",
    "/rooms",
    "/amenities",
    "/local-info",
    "/contact",
    "/book-now",
    "/contractor-accommodation-bellville-south",
    "/near-uwc-bellville",
    "/accommodation-near-tygerberg-hospital",
    "/cheap-accommodation-bellville-south",
    "/monthly-accommodation-bellville-south",
    "/backpackers-bellville-south",
    "/accommodation-near-bellville-station",
    "/blog",
    "/blog/medical-staff-guide-tygerberg-hospital",
    "/blog/international-student-housing-uwc",
    "/blog/corporate-relocation-cape-town",
    "/blog/digital-nomad-guide-bellville-south",
    "/blog/nursing-student-accommodation-tygerberg",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "" ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
