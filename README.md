# My School ITALY

Neuroscience-based preschool & childcare website for ages 45 days to 7 years. Built with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## Tech Stack

| Category       | Technology                        |
| -------------- | --------------------------------- |
| Framework      | Next.js 15 (App Router)           |
| UI Library     | React 19                          |
| Styling        | Tailwind CSS v3                   |
| Animation      | Framer Motion                     |
| Icons          | Lucide React                      |
| Analytics      | @vercel/analytics                 |
| SEO            | next-sitemap                      |
| Font           | Lato (next/font)                  |

## Project Structure

```
msi/
├── public/                  # Static assets
│   ├── images/              # Organized image directories
│   ├── favicon.ico          # Favicon
│   ├── favicon.svg          # SVG favicon
│   └── Handbook.pdf         # Parent handbook
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── admissions/      # Admissions page
│   │   ├── advisory-board/  # Advisory board page
│   │   ├── api/             # API routes (enrol, franchise)
│   │   ├── baby-sensory/    # Baby sensory program
│   │   ├── blog/            # Blog pages
│   │   ├── book-your-tour/  # Tour booking
│   │   ├── contact/         # Contact page
│   │   ├── day-care/        # Day care page
│   │   ├── franchise-overview/ # Franchise info
│   │   ├── handbook/        # Digital handbook
│   │   ├── media-coverage/  # Press & media
│   │   ├── msi-venture-philanthropy/ # Philanthropy
│   │   ├── nep/             # NEP page
│   │   ├── programs/        # Programs page
│   │   └── video-gallery/   # Video gallery
│   └── components/          # Reusable components
│       ├── home/            # Homepage sections
│       ├── layout/          # Header, Footer, TopBar
│       ├── about/           # About page components
│       ├── franchise/       # Franchise page components
│       └── ...              # Other page components
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Production build (SSG)
yarn build

# Serve production build
yarn start

# Run ESLint
yarn lint
```

## Scripts

| Command        | Description                      |
| -------------- | -------------------------------- |
| `yarn dev`     | Start development server         |
| `yarn build`   | Production build (SSG)           |
| `yarn start`   | Serve production build           |
| `yarn lint`    | Run ESLint                       |

## Build

The site is statically prerendered (SSG) with all SEO metadata baked into the HTML at build time. Sitemap and robots.txt are auto-generated via `next-sitemap` after each build.
