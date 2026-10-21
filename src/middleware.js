import { NextResponse } from 'next/server';

// 410 Gone HTML response for crawlers and visitors
function goneResponse() {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>410 Gone - Page Removed</title>
  <meta name="robots" content="noindex, nofollow">
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; background-color: #f7f9fc; color: #1e293b;">
  <div style="text-align: center; max-width: 520px; padding: 2.5rem 1.5rem;">
    <h1 style="font-size: 3.5rem; margin: 0 0 0.5rem; color: #0f172a; font-weight: 800;">410</h1>
    <h2 style="font-size: 1.5rem; margin: 0 0 1rem; color: #334155;">Resource Permanently Removed</h2>
    <p style="color: #64748b; margin-bottom: 2rem; line-height: 1.6;">The requested page, WordPress section, or file has been permanently deleted and is no longer available on this server.</p>
    <a href="https://www.myschoolitaly.com/" style="display: inline-block; padding: 0.75rem 1.5rem; background-color: #f26522; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600;">Visit My School ITALY</a>
  </div>
</body>
</html>`,
    {
      status: 410,
      statusText: 'Gone',
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=604800, immutable',
      },
    }
  );
}

// 301 Permanent Redirect targets for the 5 preserved legacy paths (and known centre aliases)
const PRESERVED_301_REDIRECTS = {
  '/about-us': '/about/',
  '/about-us/': '/about/',
  '/mnr': '/about/',
  '/mnr/': '/about/',
  '/peter-gseller': '/about/',
  '/peter-gseller/': '/about/',
  '/balewadi': '/purna-nagar/',
  '/balewadi/': '/purna-nagar/',
  '/purna-nagar': '/purna-nagar/',
  // Centre aliases with active traffic
  '/kavurihills-msi': '/kavuri-hills/',
  '/kavurihills-msi/': '/kavuri-hills/',
  '/qcity-msi1': '/qcity/',
  '/qcity-msi1/': '/qcity/',
  '/q-city': '/qcity/',
  '/q-city/': '/qcity/',
  '/avance2-msi': '/avance-2/',
  '/avance2-msi/': '/avance-2/',
  '/🎃-spooktacular-halloween-celebration-at-myschoolitaly-hitex-👻': '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
  '/🎃-spooktacular-halloween-celebration-at-myschoolitaly-hitex-👻/': '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
  '/blog/🎃-spooktacular-halloween-celebration-at-myschoolitaly-hitex-👻/': '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
  '/mediacoverage': '/media-coverage/',
  '/mediacoverage/': '/media-coverage/',
};

// Check if the URL is an old WordPress path that must return 410 Gone
function isOldWordPressUrl(pathname, searchParams) {
  // 1. Query parameters commonly used by WordPress legacy links (?p=, ?page_id=, ?tv=, ?kv=)
  if (
    searchParams.has('p') ||
    searchParams.has('page_id') ||
    searchParams.has('tv') ||
    searchParams.has('kv')
  ) {
    return true;
  }

  const lowerPath = pathname.toLowerCase();

  // 2. Specific WordPress PHP endpoints
  if (
    lowerPath === '/index.php' ||
    lowerPath === '/wp-login.php' ||
    lowerPath === '/xmlrpc.php'
  ) {
    return true;
  }

  // 3. WordPress internal folders and APIs
  if (
    lowerPath.startsWith('/wp-content') ||
    lowerPath.startsWith('/wp-includes') ||
    lowerPath.startsWith('/wp-admin') ||
    lowerPath.startsWith('/wp-json')
  ) {
    return true;
  }

  // 4. Old WordPress sections, taxonomies, flipbook and e-commerce routes
  const wpSections = [
    '/product',
    '/category',
    '/r3d_category',
    '/shop',
    '/my-account',
    '/flipbook',
    '/tag',
    '/author',
    '/cart',
    '/checkout',
  ];
  for (const section of wpSections) {
    if (
      lowerPath === section ||
      lowerPath === `${section}/` ||
      lowerPath.startsWith(`${section}/`)
    ) {
      return true;
    }
  }

  // 5. WordPress date archives matching ^/20\d\d/ (e.g. /2025/06/15/, /2024/01/)
  if (/^\/20\d{2}(\/|$)/.test(lowerPath)) {
    return true;
  }

  // 6. Any URL ending in /feed or /feed/
  if (lowerPath.endsWith('/feed') || lowerPath.endsWith('/feed/')) {
    return true;
  }

  return false;
}

export function middleware(request) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const pathname = url.pathname;

  // A. Check preserved 301 redirects first so they are never 410'd
  const lowerPath = pathname.toLowerCase();
  if (PRESERVED_301_REDIRECTS[lowerPath]) {
    if (!host.includes('localhost') && !host.includes('127.0.0.1')) {
      url.host = 'www.myschoolitaly.com';
      url.protocol = 'https:';
      url.port = '';
    }
    url.pathname = PRESERVED_301_REDIRECTS[lowerPath];
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  // B. Return 410 Gone for all old WordPress URLs
  if (isOldWordPressUrl(pathname, request.nextUrl.searchParams)) {
    return goneResponse();
  }

  let shouldRedirect = false;

  // C. Permanently redirect non-www (apex) to www with 301
  if (host === 'myschoolitaly.com') {
    url.host = 'www.myschoolitaly.com';
    url.protocol = 'https:';
    url.port = '';
    shouldRedirect = true;
  }

  // D. Permanently redirect HTTP to HTTPS in production
  if (proto === 'http' && !host.includes('localhost') && !host.includes('127.0.0.1')) {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // E. Enforce trailing slash on clean pathnames (excluding files with extensions, api, _next)
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
     * Match all requests except internal Next.js static bundles and root favicon icons:
     * - _next/static
     * - _next/image
     * - favicon.ico, favicon.png, favicon.svg
     */
    '/((?!_next/static|_next/image|images|videos|favicon\\.ico|favicon\\.png|favicon\\.svg).*)',
  ],
};
