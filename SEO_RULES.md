# Next.js SEO Rules

Guidelines for maintaining SEO best practices in this repository. Follow these rules when creating or editing pages, components, and content.

## 1. Rendering Strategy

- [ ] Default to **Server Components**. Only add `'use client'` when the component truly needs interactivity (state, effects, browser APIs).
- [ ] Never wrap content that needs to be crawlable (headings, paragraphs, product info, blog content) inside a client-only component that fetches data after mount.
- [ ] Use **SSG** (`generateStaticParams`) for pages whose content rarely changes (marketing, blog, docs).
- [ ] Use **ISR** (`export const revalidate = <seconds>`) for content that updates periodically (product listings, pricing).
- [ ] Use **SSR** only when content must be fresh on every request (user-specific dashboards, real-time data) — these are not typically SEO targets anyway.

## 2. Metadata

- [ ] Every route must export `metadata` or `generateMetadata()`.
- [ ] Required fields per page:
  - `title` (unique, ≤60 characters)
  - `description` (unique, 120–160 characters)
  - `alternates.canonical`
  - `openGraph` (title, description, image, url, type)
  - `twitter` (card, title, description, image)
- [ ] Never duplicate the same title/description across multiple pages.
- [ ] Set a global `metadataBase` in the root layout so relative OG image URLs resolve correctly.

```ts
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: 'Site Name', template: '%s | Site Name' },
  description: 'Default description',
}
```

## 3. URLs & Routing

- [ ] Use lowercase, hyphen-separated URLs (`/blog/my-post`, not `/Blog/My_Post`).
- [ ] Avoid trailing slash inconsistency — set `trailingSlash` once in `next.config.js` and stick to it.
- [ ] Use `redirects()` in `next.config.js` for any moved/renamed pages (301, not 302, unless temporary).
- [ ] Avoid orphan pages — every important page should be linked from somewhere crawlable (nav, sitemap, internal links).
- [ ] Avoid infinite/duplicate URL variations from query params (filters, sort) unless canonicalized.

## 4. Sitemap & Robots

- [ ] Implement `app/sitemap.ts` and keep it in sync with actual public routes.
- [ ] Implement `app/robots.ts` — disallow admin/internal routes, allow everything else.
- [ ] Submit sitemap to Google Search Console / Bing Webmaster Tools after deploy.

```ts
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: 'https://example.com', lastModified: new Date() },
    { url: 'https://example.com/about', lastModified: new Date() },
  ]
}
```

## 5. Images

- [ ] Always use `next/image`, never raw `<img>`, for content images.
- [ ] Always provide meaningful `alt` text — never leave it empty unless the image is purely decorative (`alt=""`).
- [ ] Set explicit `width`/`height` (or `fill` with a sized container) to avoid layout shift (CLS).
- [ ] Use descriptive filenames before upload (`red-running-shoes.jpg`, not `IMG_0234.jpg`).

## 6. Fonts & Performance

- [ ] Load fonts via `next/font` (never external `<link>` to Google Fonts) to avoid render-blocking and layout shift.
- [ ] Keep Lighthouse/Core Web Vitals in mind: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- [ ] Lazy-load below-the-fold, non-critical components (`next/dynamic`).
- [ ] Avoid large client-side JS bundles on content pages — audit with `next build` output.

## 7. Semantic HTML & Structure

- [ ] One `<h1>` per page, matching the page's primary topic.
- [ ] Logical heading hierarchy (`h1` → `h2` → `h3`, no skipping levels).
- [ ] Use semantic tags: `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` — not endless `<div>`.
- [ ] Internal links use descriptive anchor text (not "click here").
- [ ] Use `next/link` for all internal navigation (enables prefetching + proper crawlable `<a href>`).

## 8. Structured Data (JSON-LD)

- [ ] Add relevant schema.org JSON-LD per page type:
  - Articles/blog → `Article` or `BlogPosting`
  - Products → `Product` + `Offer`
  - Business info → `Organization` / `LocalBusiness`
  - Breadcrumbs → `BreadcrumbList`
  - FAQs → `FAQPage`
- [ ] Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) before merging.

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      datePublished: date,
    }),
  }}
/>
```

## 9. Content Rules

- [ ] Every page has unique, substantive content (no thin/duplicate pages).
- [ ] Target one primary keyword/topic per page — don't cannibalize with near-duplicate pages.
- [ ] Blog/article pages include publish date and (if updated) modified date, shown in UI and metadata.

## 10. Pre-deploy Checklist

- [ ] Run `next build` and check for unexpected client-side bundle bloat.
- [ ] Run Lighthouse SEO audit — target score 95+.
- [ ] Verify `robots.txt` isn't accidentally blocking production (`Disallow: /` is a common staging leftover).
- [ ] Confirm canonical tags point to the correct production domain (not staging/preview URLs).
- [ ] Check `sitemap.xml` is reachable at `/sitemap.xml` in production.
- [ ] Verify OG image renders correctly (test via [opengraph.xyz](https://www.opengraph.xyz/) or similar).
