import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// The only hosts allowed to be indexed by search engines.
const PRODUCTION_HOSTS = ["www.60onkosmos.co.za", "60onkosmos.co.za"]

export function middleware(request: NextRequest) {
  // No custom redirects - Vercel handles domain redirects via dashboard settings
  const response = NextResponse.next()

  const host = request.headers.get("host") || ""
  const isProductionHost = PRODUCTION_HOSTS.includes(host)

  // Any non-production host (Vercel preview/deployment URLs, *.vercel.app, localhost, etc.)
  // must never be indexed by search engines. This keeps preview deployments working
  // normally for development while stopping Google from indexing them as separate sites.
  // Canonical tags in page metadata still point to the production www domain regardless.
  if (!isProductionHost) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow")
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json|css|js)$).*)",
  ],
}
