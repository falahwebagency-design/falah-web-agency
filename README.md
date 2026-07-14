# Falah Web Agency — Next.js Website

A production-ready Next.js 14 (App Router) website for **Falah Web Agency** — a Pakistani web design & development studio.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Fonts | Playfair Display (display) + Inter (body) via `next/font/google` |
| Images | `next/image` with Unsplash remote patterns |
| Deployment | Vercel (zero-config) |

---

## Project Structure

```
falah-web-agency/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          ← Contact form API (wire up SMTP here)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── globals.css
│   ├── layout.tsx                ← Root layout, fonts, JSON-LD schema
│   ├── not-found.tsx             ← Custom 404 page
│   ├── opengraph-image.tsx       ← Dynamic OG image (Edge runtime)
│   ├── page.tsx                  ← Home page (assembles all sections)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── home/                     ← Home-specific sections
│   │   ├── Comparison.tsx
│   │   ├── CoreValues.tsx
│   │   ├── FaqSection.tsx
│   │   ├── FinalCta.tsx
│   │   ├── Hero.tsx
│   │   ├── Industries.tsx
│   │   ├── Meaning.tsx
│   │   ├── MissionVision.tsx
│   │   ├── Offer.tsx
│   │   ├── Problem.tsx
│   │   ├── Process.tsx
│   │   ├── Results.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrustStrip.tsx
│   │   └── Work.tsx
│   ├── ui/                       ← Reusable primitives
│   │   ├── PageHero.tsx
│   │   └── SectionHeading.tsx
│   ├── ContactForm.tsx           ← Client component (calls /api/contact)
│   ├── FaqAccordion.tsx          ← Client accordion
│   ├── Footer.tsx
│   ├── FounderStory.tsx
│   ├── Navbar.tsx                ← Client (scroll + mobile menu state)
│   └── WhatsAppButton.tsx
├── lib/
│   ├── data.ts                   ← All site content (services, FAQs, etc.)
│   └── site.ts                   ← Shared constants (name, email, phone…)
├── public/
│   ├── favicon.svg
│   └── images/
│       └── founder.jpg
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── .env.local.example
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file:

```bash
cp .env.local.example .env.local
```

Fill in your SMTP credentials (see [Contact form](#contact-form-setup) below).

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contact Form Setup

The contact form POSTs to `/api/contact`. Out of the box it logs submissions
to the server console. To actually send emails, open
`app/api/contact/route.ts` and follow the instructions in the comments.

**Quick setup with Gmail:**

1. Go to your Google Account → **Security** → **2-Step Verification** (enable it)
2. Go to **App passwords** → create one for "Mail"
3. Install nodemailer: `npm install nodemailer @types/nodemailer`
4. Add these to `.env.local` (and in Vercel dashboard):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=falahwebagency@gmail.com
SMTP_PASS=your_app_password_here
CONTACT_TO=falahwebagency@gmail.com
```

5. Uncomment the nodemailer block in `app/api/contact/route.ts`

---

## Deploying to Vercel

### One-click deploy

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo
3. Add your environment variables under **Settings → Environment Variables**
4. Click **Deploy** — done

Vercel auto-detects Next.js and uses the App Router build output.

### Manual CLI deploy

```bash
npm install -g vercel
vercel
```

---

## Customisation

### Update business details

All contact info, social links, and copy constants live in **`lib/site.ts`**.
Change the name, phone, email, and WhatsApp number there and they update
everywhere on the site automatically.

### Update content

All section data (services, case studies, testimonials, FAQs, process
steps, core values, etc.) lives in **`lib/data.ts`**. Edit arrays there to
update any section without touching component files.

### Update the colour palette

All design tokens are defined in **`tailwind.config.ts`** under
`theme.extend.colors.falah`. Change hex values there to retheme the site.

---

## SEO Notes

- Each page exports its own `metadata` object
- Root `layout.tsx` injects the `ProfessionalService` JSON-LD schema
- The FAQ page injects `FAQPage` JSON-LD schema for rich results
- `app/sitemap.ts` generates `/sitemap.xml` automatically
- `app/robots.ts` generates `/robots.txt`
- `app/opengraph-image.tsx` generates the dynamic OG image

---

## License

© 2026 Falah Web Agency. All rights reserved.
