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
      // Redirect deleted location pages to main contractor page
      { source: '/contractor-accommodation-bellville', destination: '/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-bellville-south', destination: '/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-goodwood', destination: '/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-kuilsriver', destination: '/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-northern-suburbs', destination: '/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-parow', destination: '/contractor-accommodation', permanent: true },
      { source: '/contractor-accommodation-stikland', destination: '/contractor-accommodation', permanent: true },
      // Redirect accommodation variants
      { source: '/accommodation-near-bellville-station', destination: '/rooms', permanent: true },
      { source: '/accommodation-near-tygerberg-hospital', destination: '/rooms', permanent: true },
      { source: '/bellville-south-guesthouse', destination: '/rooms', permanent: true },
      { source: '/cheap-accommodation-bellville-south', destination: '/special-offers', permanent: true },
      { source: '/monthly-accommodation-bellville', destination: '/monthly-accommodation', permanent: true },
      { source: '/monthly-accommodation-bellville-south', destination: '/monthly-accommodation', permanent: true },
      { source: '/self-catering-accommodation-bellville', destination: '/self-catering-rooms', permanent: true },
      { source: '/serviced-accommodation-bellville', destination: '/rooms', permanent: true },
      { source: '/n1-city-accommodation', destination: '/contractor-accommodation', permanent: true },
      { source: '/backpackers-bellville-south', destination: '/rooms', permanent: true },
      { source: '/airport-accommodation', destination: '/rooms', permanent: true },
      { source: '/cput-accommodation', destination: '/rooms', permanent: true },
      { source: '/extended-stay-hotel-bellville', destination: '/monthly-accommodation', permanent: true },
      { source: '/near-cput-bellville', destination: '/rooms', permanent: true },
      { source: '/near-uwc-bellville', destination: '/rooms', permanent: true },
      { source: '/tygerberg-hospital-accommodation', destination: '/rooms', permanent: true },
      { source: '/uwc-student-accommodation', destination: '/rooms', permanent: true },
      { source: '/weekly-accommodation', destination: '/monthly-accommodation', permanent: true },
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
