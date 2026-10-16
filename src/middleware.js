import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';

  let shouldRedirect = false;

  // 1. Permanently redirect non-www (apex) to www with 301
  if (host === 'myschoolitaly.com') {
    url.host = 'www.myschoolitaly.com';
    url.protocol = 'https:';
    url.port = '';
    shouldRedirect = true;
  }

  // 2. Permanently redirect HTTP to HTTPS in production
  if (proto === 'http' && !host.includes('localhost') && !host.includes('127.0.0.1')) {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // 3. Enforce trailing slash on clean pathnames (excluding static files, images, api)
  const pathname = url.pathname;
  if (
    !pathname.endsWith('/') &&
    !pathname.includes('.') &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next')
  ) {
    url.pathname = `${pathname}/`;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, fonts, pdfs, xml, txt
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|pdf|xml|txt|json|woff|woff2)).*)',
  ],
};
