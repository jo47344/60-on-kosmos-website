/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/near-uwc-bellville',
        destination: '/uwc-student-accommodation',
        permanent: true,
      },
      {
        source: '/near-cput-bellville',
        destination: '/cput-accommodation',
        permanent: true,
      },
      {
        source: '/accommodation-near-tygerberg-hospital',
        destination: '/tygerberg-hospital-accommodation',
        permanent: true,
      },
      {
        source: '/monthly-accommodation-bellville',
        destination: '/monthly-accommodation',
        permanent: true,
      },
      {
        source: '/monthly-accommodation-bellville-south',
        destination: '/monthly-accommodation',
        permanent: true,
      },
      {
        source: '/self-catering-accommodation-bellville',
        destination: '/self-catering-rooms',
        permanent: true,
      },
      {
        source: '/contractor-accommodation-bellville',
        destination: '/contractor-accommodation',
        permanent: true,
      },
      {
        source: '/contractor-accommodation-bellville-south',
        destination: '/contractor-accommodation',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate",
          },
        ],
      },
      {
        source: "/:path((?!robots.txt|sitemap.xml).*)*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
}

export default nextConfig
