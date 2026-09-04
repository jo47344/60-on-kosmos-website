/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 435, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    unoptimized: false,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      // Kuils River location page - fix broken URL
      { source: '/contractor-accommodation-kuilsriver', destination: 'https://www.60onkosmos.co.za/contractor-accommodation-kuils-river', permanent: true },
      // Consolidate narrower legacy location pages into broader new pages to avoid duplicate content
      { source: '/contractor-accommodation-goodwood', destination: 'https://www.60onkosmos.co.za/contractor-accommodation-grandwest-goodwood', permanent: true },
      { source: '/contractor-accommodation-parow', destination: 'https://www.60onkosmos.co.za/contractor-accommodation-n1-city-parow', permanent: true },
      // Bellville and Bellville South pages were consolidated into the main contractor-accommodation
      // page (same location, avoids duplicate/competing content). Both point directly at the final
      // destination so neither hops through an intermediate redirect.
      { source: '/contractor-accommodation-bellville-south', destination: 'https://www.60onkosmos.co.za/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-bellville', destination: 'https://www.60onkosmos.co.za/contractor-accommodation', permanent: true },
      // Redirect accommodation variants
      { source: '/accommodation-near-bellville-station', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/accommodation-near-tygerberg-hospital', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/bellville-south-guesthouse', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/cheap-accommodation-bellville-south', destination: 'https://www.60onkosmos.co.za/monthly-accommodation', permanent: true },
      { source: '/special-offers', destination: 'https://www.60onkosmos.co.za/monthly-accommodation', permanent: true },
      { source: '/monthly-accommodation-bellville', destination: 'https://www.60onkosmos.co.za/monthly-accommodation', permanent: true },
      { source: '/monthly-accommodation-bellville-south', destination: 'https://www.60onkosmos.co.za/monthly-accommodation', permanent: true },
      { source: '/self-catering-accommodation-bellville', destination: 'https://www.60onkosmos.co.za/self-catering-rooms', permanent: true },
      { source: '/serviced-accommodation-bellville', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/n1-city-accommodation', destination: 'https://www.60onkosmos.co.za/contractor-accommodation', permanent: true },
      { source: '/backpackers-bellville-south', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/airport-accommodation', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/extended-stay-hotel-bellville', destination: 'https://www.60onkosmos.co.za/monthly-accommodation', permanent: true },
      { source: '/tygerberg-hospital-accommodation', destination: 'https://www.60onkosmos.co.za/rooms', permanent: true },
      { source: '/weekly-accommodation', destination: 'https://www.60onkosmos.co.za/monthly-accommodation', permanent: true },
      // UWC/CPUT keyword URLs now point at the dedicated commercial pages
      // instead of the generic /rooms page, so they don't lose keyword relevance.
      { source: '/cput-accommodation', destination: 'https://www.60onkosmos.co.za/accommodation-near-cput', permanent: true },
      { source: '/near-cput-bellville', destination: 'https://www.60onkosmos.co.za/accommodation-near-cput', permanent: true },
      { source: '/near-uwc-bellville', destination: 'https://www.60onkosmos.co.za/accommodation-near-uwc', permanent: true },
      { source: '/uwc-student-accommodation', destination: 'https://www.60onkosmos.co.za/accommodation-near-uwc', permanent: true },
      // Nursing-student blog post consolidated into the broader Tygerberg medical-staff guide.
      { source: '/blog/nursing-student-accommodation-tygerberg', destination: 'https://www.60onkosmos.co.za/blog/medical-staff-guide-tygerberg-hospital', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path((?!robots.txt|sitemap.xml).*)*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
}

export default nextConfig
