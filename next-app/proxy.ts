import { NextResponse, type NextRequest } from "next/server"

import { hasLocale, localeCookie, pickLocale } from "@/lib/i18n"

// Sends visitors without a language in the address to /es or /en, and
// remembers the language they last visited (docs/01-landing.md, "Languages").
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split("/")[1] ?? ""

  if (hasLocale(first)) {
    const response = NextResponse.next()
    if (request.cookies.get(localeCookie)?.value !== first) {
      response.cookies.set(localeCookie, first, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      })
    }
    return response
  }

  const saved = request.cookies.get(localeCookie)?.value
  const locale =
    saved && hasLocale(saved)
      ? saved
      : pickLocale(request.headers.get("accept-language"))

  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // Skip Next.js internals, API routes and files (favicon.ico, images…)
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
}
