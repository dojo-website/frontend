import { NextResponse } from "next/server";
import { defaultLocale, locales } from "./i18n/routing";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already contains a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If no locale is present, redirect to the default locale
  if (!pathnameHasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/", "/(en|es)/:path*"
  ],
};
