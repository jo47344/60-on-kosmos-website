import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""

  // Only run on production domain - skip for preview/dev environments
  const isProduction = hostname.includes("60onkosmos.co.za")

  if (isProduction) {
    // Canonical redirect: www to non-www (301 permanent)
    if (hostname.startsWith("www.")) {
      return NextResponse.redirect(
        `https://60onkosmos.co.za${url.pathname}${url.search}`,
        301
      )
    }
  }

  // Remove trailing slash (except for root)
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json|css|js)$).*)",
  ],
}
