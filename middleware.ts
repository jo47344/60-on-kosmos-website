import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || ""

  // Only redirect www to non-www on production domain
  if (hostname === "www.60onkosmos.co.za") {
    const url = request.nextUrl.clone()
    return NextResponse.redirect(
      `https://60onkosmos.co.za${url.pathname}${url.search}`,
      301
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|json|css|js)$).*)",
  ],
}
