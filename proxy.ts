import { NextResponse, type NextRequest } from "next/server";

import { AR_ROUTED_PAGES, LANG_HEADER } from "@/lib/i18n-config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete(LANG_HEADER);

  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    requestHeaders.set(LANG_HEADER, "ar");
    const page = pathname.slice(3);
    if (AR_ROUTED_PAGES.includes(page)) {
      const url = request.nextUrl.clone();
      url.pathname = page;
      return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  // Pages only: skip API routes, Next.js assets and files such as sitemap.xml or images.
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
