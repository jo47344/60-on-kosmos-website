import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// The only hosts allowed to be indexed by search engines.
const PRODUCTION_HOSTS = ["www.60onkosmos.co.za", "60onkosmos.co.za"]
const CANONICAL_HOST = "www.60onkosmos.co.za"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || ""
  const isProductionHost = PRODUCTION_HOSTS.includes(host)

  // Enforce the canonical https://www host with a single permanent redirect,
  // rather than relying on dashboard-level domain settings that this codebase
  // can't verify. Combines the protocol and host fix into one hop so a
  // request to http://60onkosmos.co.za/x goes straight to
  // https://www.60onkosmos.co.za/x instead of bouncing through an
  // intermediate redirect.
  if (isProductionHost) {
    const forwardedProto = request.headers.get("x-forwarded-proto")
    const needsHttps = forwardedProto === "http"
    const needsWww = host !== CANONICAL_HOST

    if (needsHttps || needsWww) {
      const canonicalUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`)
      return NextResponse.redirect(canonicalUrl, 308)
    }
  }

  const response = NextResponse.next()

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
