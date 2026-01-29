import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/static") ||
    url.pathname.includes(".") // Static files like .ico, .png, .xml, .txt
  ) {
    return NextResponse.next()
  }

  // Canonical redirect: www to non-www (301 permanent)
  // Change to hostname.replace("60onkosmos", "www.60onkosmos") if you prefer www
  if (hostname.startsWith("www.")) {
    const newHostname = hostname.replace("www.", "")
    url.host = newHostname
    return NextResponse.redirect(url, 301)
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
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json)$).*)",
  ],
}
