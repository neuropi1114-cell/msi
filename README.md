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

A floating "Ask us anything" chat widget (`src/components/chat/ChatWidget.jsx`, mounted in `src/app/layout.jsx`) streams answers from `POST /api/chat/` (`src/app/api/chat/route.js`) via the open-source AI SDK (`ai` npm package) when an AI key is set; otherwise by the free local engine.

Answers are grounded in site content: `scripts/build-chat-knowledge.mjs` extracts text from pages/data into `src/data/chat-knowledge.json` (runs automatically in `npm run build`). Unknown details (e.g. fees) are redirected to WhatsApp / phone / email.

Hosting: AWS Amplify (connected to GitHub, Next.js SSR). Optional overrides go in **AWS Amplify Console > the app > Hosting > Environment variables**, followed by a redeploy.

Note: Amplify does not expose console env vars to Next.js API routes at runtime, so `amplify.yml` writes the chatbot variables below into `.env.production` during the build. A change in the console only takes effect after a new deployment.

All variables are optional:

| Variable | Required | Notes |
| --- | --- | --- |
| `AI_GATEWAY_API_KEY` | optional | AI Gateway key, only if you choose to use a paid LLM. |
| `OPENAI_API_KEY` | optional | Used directly with OpenAI if no gateway key is set. |
| `CHAT_MODEL` | optional | Default `openai/gpt-4o-mini`. |

**Free by default:** without any AI key, typed questions are answered by a built-in local engine (`src/components/chat/localEngine.js`): curated FAQ intents with typo-tolerant keyword matching, plus TF-IDF search over site content. No paid service is used. Fee/pricing questions are always redirected to the admissions team. Setting an AI key is optional and switches typed questions to the LLM. Limits: 500 chars per message, last 12 messages, ~10 requests/minute per IP (best effort, per instance).

### Call-request flow (admissions callback)

After each answer the bot offers to arrange a call; it collects phone (Indian or +international), grade, date (no past dates) and time slot, then `POST /api/call-request/` validates server-side and notifies admissions via any configured channel:

| Variable | Notes |
| --- | --- |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Google Apps Script web app URL; appends each request to the `Admissions` sheet (free, see below). Stored as a GitHub Actions secret and synced to Amplify (see below). |
| `GOOGLE_SHEETS_SECRET` | Optional shared secret; must match `SHARED_SECRET` in the script. |
| `ADMISSIONS_WEBHOOK_URL` | Receives JSON `{text, content, phone, grade, date, time, page, submittedAt}` — works with Slack/Google Chat/Discord incoming webhooks, Zapier, Make, Google Apps Script. |
| `RESEND_API_KEY` + `ADMISSIONS_EMAIL` | Email via Resend (comma-separate multiple addresses). |
| `RESEND_FROM` | Optional verified sender, default `onboarding@resend.dev`. |

Any combination may be configured; the visitor sees an error only if every configured channel fails. If none is set, requests are only written to the server logs (Amplify Console > the app > Hosting > Monitoring / CloudWatch logs, search `[call-request]`). Time slots/grades are in `src/components/chat/callRequest.js`.

### Saving call requests to Google Sheets (free)

1. Create a new Google Sheet (e.g. "MSI Admissions Leads") in the admissions team's Google account.
2. In the sheet, open **Extensions > Apps Script**.
3. Delete the sample code and paste the contents of `scripts/google-apps-script/admissions-sheet.gs`.
4. (Optional, recommended) Set `SHARED_SECRET` at the top of the script to a long random string.
5. Click **Save**, then **Deploy > New deployment**. Choose type **Web app**.
6. Set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy** and authorise the requested permissions.
7. Copy the **Web app URL** (ends with `/exec`).
8. Store the URL as the GitHub Actions secret `GOOGLE_SHEETS_WEBHOOK_URL` (and `GOOGLE_SHEETS_SECRET` if you set one). The workflow below copies it into Amplify.

### Secrets via GitHub Actions (`.github/workflows/sync-amplify-env.yml`)

On every push to `main`, or when run manually (Actions > "Sync chatbot secrets to AWS Amplify" > Run workflow), this workflow:
- merges every **non-empty** chatbot secret into the Amplify branch's environment variables. Existing variables are kept, never wiped.
- then starts an Amplify RELEASE build.

`amplify.yml` then writes these variables into `.env.production` for the API routes.

Add these in **GitHub > repo > Settings > Secrets and variables > Actions**:

| Name | Type | Notes |
| --- | --- | --- |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | secret | An IAM user with `amplify:GetBranch`, `amplify:UpdateBranch` and `amplify:StartJob` on the app, e.g. resource `arn:aws:amplify:<region>:<account>:apps/<appId>/*` |
| `AWS_REGION` | variable or secret | The region the Amplify app is in, e.g. `ap-south-1` |
| `AMPLIFY_APP_ID` | variable or secret | Amplify Console > the app > App settings > General: the **App ID** (like `d1a2b3c4d5e6f7`, also in the console URL `.../apps/<appId>/...`) |
| `AMPLIFY_BRANCH` | variable (optional) | Defaults to the repo default branch (`main`) |
| `GOOGLE_SHEETS_WEBHOOK_URL`, `GOOGLE_SHEETS_SECRET`, `ADMISSIONS_WEBHOOK_URL`, `RESEND_API_KEY`, `ADMISSIONS_EMAIL`, `RESEND_FROM`, `OPENAI_API_KEY`, `AI_GATEWAY_API_KEY`, `CHAT_MODEL` | secrets | All optional. Only the ones that are set get synced. |
9. Submit a test call request from the chatbot; a row appears in the `Admissions` tab (headers are created automatically) with Status "New".

If you edit the script later, use **Deploy > Manage deployments > Edit > New version** so the same URL keeps working.
