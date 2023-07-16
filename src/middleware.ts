import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname } = request.nextUrl;
  const res = NextResponse.next();
  const hasCookie = request?.cookies.get("next-auth.session-token")?.value;

  if (pathname.startsWith("/login")) {
    if (hasCookie) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return res;
    }
  } else if (pathname.startsWith("/")) {
    if (hasCookie) {
      return res;
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (hasCookie) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
