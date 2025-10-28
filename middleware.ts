import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""

  // Check if the request is coming from www subdomain
  if (hostname.startsWith("www.")) {
    // Remove www from hostname
    const newHostname = hostname.replace("www.", "")

    // Construct the new URL without www
    url.host = newHostname
    url.protocol = "https"

    // Return 301 permanent redirect
    return NextResponse.redirect(url, {
      status: 301,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  }

  // Continue with the request if no redirect needed
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
