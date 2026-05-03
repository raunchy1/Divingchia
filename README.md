# Diving Chia — Website

Premium scuba diving and snorkeling website for Diving Chia, Chia, South Sardinia.

Built with: Next.js 14 (App Router) · TypeScript · TailwindCSS

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Connect to Vercel at [vercel.com](https://vercel.com)
3. Import the repo — Vercel auto-detects Next.js, no config needed
4. Set custom domain to `www.divingchia.com` in Vercel project settings
5. Deploy

---

## ⚠️ Before Going Live — Checklist

### 1. Update the phone number

Open `/src/lib/constants.ts` and replace `PHONE_NUMBER` with the actual number:

```ts
export const PHONE_NUMBER = '393338858000'  // ← replace this
```

Format: country code + number, no +, no spaces. Example: `393381234567` for +39 338 123 4567.

### 2. Add your photos

Place photos in `/public/images/`. The following paths are referenced throughout the site:

**Hero and experience pages:**
- `/public/images/hero.jpg` — main hero (best boat/sea/underwater photo)
- `/public/images/try-scuba.jpg`
- `/public/images/guided-dives.jpg`
- `/public/images/snorkeling-boat.jpg`
- `/public/images/private-tours.jpg`
- `/public/images/sunset-experience.jpg`
- `/public/images/courses.jpg`
- `/public/images/private-tours-showcase.jpg`
- `/public/images/sunset-showcase.jpg`
- `/public/images/og-image.jpg` — 1200×630px for social sharing

**Gallery (add as many as you like):**
- `/public/images/gallery/dive-1.jpg`
- `/public/images/gallery/dive-2.jpg`
- `/public/images/gallery/dive-3.jpg`
- `/public/images/gallery/dive-4.jpg`
- `/public/images/gallery/snorkel-1.jpg`
- `/public/images/gallery/snorkel-2.jpg`
- `/public/images/gallery/snorkel-3.jpg`
- `/public/images/gallery/boat-1.jpg`
- `/public/images/gallery/boat-2.jpg`
- `/public/images/gallery/equipment-1.jpg`
- `/public/images/gallery/sunset-1.jpg`
- `/public/images/gallery/team-1.jpg`

**App icons (for PWA):**
- `/public/images/icon-192.png` — 192×192px app icon
- `/public/images/icon-512.png` — 512×512px app icon

### 3. Update email and links

In `/src/lib/constants.ts`:
- `CONTACT_EMAIL` — update if different from `info@divingchia.com`
- `GOOGLE_MAPS_URL` — update with the exact Google Maps link to your location

In `/src/components/Footer.tsx`:
- Update Instagram and Facebook URLs to your actual profiles

### 4. Test on mobile

The site is mobile-first but always test on a real device before going live.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, navbar, footer, WA button)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # robots.txt
│   ├── esperienze/
│   │   ├── try-scuba/          # Try Scuba experience page
│   │   ├── guided-dives/       # Guided Dives page
│   │   ├── snorkeling-boat/    # Snorkeling Boat page
│   │   ├── private-tours/      # Private Tours page
│   │   └── sunset-experience/  # Sunset Experience page
│   ├── corsi/                  # Diving Courses page
│   ├── prezzi/                 # Prices page
│   ├── sicurezza-attrezzatura/ # Safety & Equipment page
│   ├── galleria/               # Gallery page
│   ├── faq/                    # FAQ page
│   ├── contatti/               # Contact page
│   ├── diving-chia/            # SEO: Diving in Chia
│   ├── snorkeling-chia/        # SEO: Snorkeling in Chia
│   ├── try-scuba-chia/         # SEO: Try Scuba in Chia
│   ├── diving-pula-teulada-capoterra/  # SEO: Diving near Chia
│   ├── snorkeling-pula-teulada/        # SEO: Snorkeling near Chia
│   ├── private-boat-tours-chia/        # SEO: Private Boat Tours
│   └── sunset-boat-experience-chia/    # SEO: Sunset Experience
├── components/
│   ├── Navbar.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Footer with all links
│   ├── WhatsAppButton.tsx      # Fixed floating WA button
│   ├── HeroSection.tsx         # Home hero section
│   ├── TrustBar.tsx            # Trust indicators strip
│   ├── ServicesGrid.tsx        # Services cards grid
│   ├── WhyChooseUs.tsx         # 8-reason grid section
│   ├── ExperienceShowcase.tsx  # Magazine-style showcase
│   ├── Testimonials.tsx        # Reviews section
│   ├── BookingCTA.tsx          # WhatsApp booking CTA
│   ├── FAQSection.tsx          # Accordion FAQ (preview + full)
│   └── ExperiencePageTemplate.tsx  # Shared template for experience pages
└── lib/
    └── constants.ts            # Phone, WhatsApp URL, services, FAQs
```

---

## Customisation

**Colors** — edit `tailwind.config.ts`:
```ts
navy: '#0A2342'
aqua: '#1A8FBD'
sand: '#E8DCC8'
```

**Prices** — edit `/src/lib/constants.ts` (SERVICES array) and `/src/app/prezzi/page.tsx`

**FAQs** — edit `FAQS` array in `/src/lib/constants.ts`

**Gallery images** — add/remove entries in `/src/app/galleria/page.tsx`
