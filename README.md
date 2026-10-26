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

## Contact

For inquiries, reach out at: neuropi1114@gmail.com

## AI chatbot

A floating "Ask us anything" chat widget (`src/components/chat/ChatWidget.jsx`, mounted in `src/app/layout.jsx`) streams answers from `POST /api/chat/` (`src/app/api/chat/route.js`) via the Vercel AI SDK.

Answers are grounded in site content: `scripts/build-chat-knowledge.mjs` extracts text from pages/data into `src/data/chat-knowledge.json` (runs automatically in `npm run build`). Unknown details (e.g. fees) are redirected to WhatsApp / phone / email.

Environment variables (set in Vercel → Project → Settings → Environment Variables; never commit them):

| Variable | Required | Notes |
| --- | --- | --- |
| `AI_GATEWAY_API_KEY` | one of these | Vercel AI Gateway key (preferred). On Vercel, OIDC auth also works without it. |
| `OPENAI_API_KEY` | one of these | Used directly with OpenAI if no gateway key is set. |
| `CHAT_MODEL` | optional | Default `openai/gpt-4o-mini`. |

Without a key the widget still shows and replies with the school's contact details. Limits: 500 chars per message, last 12 messages, ~10 requests/minute per IP (best effort, per instance).
