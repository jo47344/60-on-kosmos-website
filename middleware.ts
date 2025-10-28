import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get("host") || ""

  // Skip localhost, Vercel preview URLs, and other non-production domains
  const isProduction = hostname.includes("60onkosmos.co.za")

  if (!isProduction) {
    return NextResponse.next()
  }

  // Check if the request is coming from www subdomain
  if (hostname.startsWith("www.60onkosmos.co.za")) {
    // Construct the new URL without www
    url.host = "60onkosmos.co.za"
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
     * - api routes (let them handle their own logic)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
}
