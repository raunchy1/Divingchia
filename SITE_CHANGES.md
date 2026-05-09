# Diving Chia — Site Changes Log

> Generated: 2026-05-05
> This document tracks all design, copy, and structural changes made to the Diving Chia website.

---

## 1. DEPENDENCIES INSTALLED

```bash
npm install framer-motion
```

- `framer-motion` — animations (hero entrance, why choose us cards, scroll reveals)

---

## 2. GLOBAL CSS (`src/app/globals.css`)

### Added Classes

| Class | Properties |
|-------|-----------|
| `.text-outline` | `-webkit-text-stroke: 2px #0A2342; color: transparent;` |
| `.text-outline-white` | `-webkit-text-stroke: 2px #FFFFFF; color: transparent;` |
| `.text-outline-aqua` | `-webkit-text-stroke: 2px #1A8FBD; color: transparent;` |
| `.heading-display` | `font-family: var(--font-heading); font-size: clamp(36px, 5vw, 64px); font-weight: 700; line-height: 1.05; letter-spacing: -0.02em; color: #0A2342;` |
| `.section-label` | `font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #1A8FBD; margin-bottom: 12px;` |
| `.card-title` | `font-family: var(--font-body); font-size: 20px; font-weight: 700; color: #0A2342;` |
| `.pillar-watermark` | `font-family: var(--font-heading); font-size: 120px; opacity: 0.06; position: absolute; bottom: -20px; right: 10px; pointer-events: none;` |
| `.animate-bounce-down` | `animation: bounce-down 1.5s ease-in-out infinite;` |
| `.animate-marquee-mobile` | `animation: marquee-scroll 20s linear infinite;` |
| `.pulse-wa` | `animation: pulse-wa 2s infinite;` (stronger WhatsApp pulse) |
| `.magazine-gradient` | `background: linear-gradient(to right, transparent 0%, rgba(10, 35, 66, 0.6) 100%);` |

### CSS Variables Added

```css
:root {
  --font-heading: 'Noto Serif', serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'Space Grotesk', monospace;
}
```

---

## 3. NEW COMPONENTS

### `src/components/WaveDivider.tsx`

SVG wave divider placed between all major sections.

```tsx
export function WaveDivider({ fromColor, toColor }: { fromColor: string; toColor: string })
```

**Usage locations:**
- Hero → TrustBar
- TrustBar → Services
- Services → HowItWorks
- HowItWorks → WhyChooseUs
- WhyChooseUs → Magazine
- Magazine → Testimonials
- Testimonials → Location
- Location → BookingCTA
- BookingCTA → FAQ
- FAQ → Footer

---

## 4. MODIFIED COMPONENTS

### `src/components/WhatsAppButton.tsx`

**Changes:**
- Mobile: `bottom: 20px`, `right: 20px`, size `64px`
- Desktop: `bottom: 48px`, `right: 48px`, size `96px`
- Added pulse animation `pulse-wa` (stronger shadow)
- Added label pill "Prenota ora" / "Book now" / "Jetzt buchen" that appears for 6 seconds on desktop
- Label disappears on click or after timeout

---

## 5. TRANSLATION FILES

### Keys Added (all 3 languages: it, en, de)

#### `hero` namespace
| Key | IT | EN | DE |
|-----|----|----|----|
| `credibilityLine` | "Dal 1996 · Piccoli gruppi · Esperienza su misura" | "Since 1996 · Small Groups · Tailor-made Experience" | "Seit 1996 · Kleine Gruppen · Maßgeschneidertes Erlebnis" |
| `badgeRating` | "5.0" | "5.0" | "5.0" |
| `badgeExperiences` | "+200 esperienze" | "+200 experiences" | "+200 Erlebnisse" |
| `badgeCertifications` | "PADI & SSI" | "PADI & SSI" | "PADI & SSI" |

#### `trustbar` namespace (REPLACED all 5 items)
| Key | IT | EN | DE |
|-----|----|----|----|
| `since1996` | "DIVING IN CHIA DAL 1996" | "DIVING IN CHIA SINCE 1996" | "TAUCHEN IN CHIA SEIT 1996" |
| `guestsPerSeason` | "+200 OSPITI OGNI STAGIONE" | "+200 GUESTS EVERY SEASON" | "+200 GÄSTE JEDE SAISON" |
| `maxGroupSize` | "GRUPPI MAX 6 PERSONE" | "GROUPS MAX 6 PEOPLE" | "GRUPPEN MAX. 6 PERSONEN" |
| `equipmentDaily` | "ATTREZZATURA CONTROLLATA OGNI GIORNO" | "EQUIPMENT CHECKED EVERY DAY" | "AUSRÜSTUNG TÄGLICH GEPRÜFT" |
| `certified` | "PADI & SSI CERTIFICATI" | "PADI & SSI CERTIFIED" | "PADI & SSI ZERTIFIZIERT" |

#### `services.items.{slug}` namespace — NEW FIELDS
All 6 service items now have:
- `badge` — new badge text
- `tagline` — emotional one-liner
- `description` — rewritten emotional copy
- `for` — target audience string
- `price` — updated
- `title` — updated where needed
- `discover` — kept existing

**Service slugs:** `tryScuba`, `guidedDives`, `snorkeling`, `privateTours`, `sunset`, `courses`

#### NEW NAMESPACE: `howItWorks`
| Key | IT | EN | DE |
|-----|----|----|----|
| `title` | "Come prenoti" | "How to Book" | "So buchst du" |
| `subtitle` | "Tre passi. Zero complicazioni." | "Three steps. Zero complications." | "Drei Schritte. Null Komplikationen." |
| `step1Title` | "Scrivici su WhatsApp" | "Message us on WhatsApp" | "Schreib uns auf WhatsApp" |
| `step1Desc` | "Dicci la data..." | "Tell us the date..." | "Sag uns das Datum..." |
| `step2Title` | "Scegliamo insieme" | "We choose together" | "Wir wählen gemeinsam" |
| `step2Desc` | "Ti proponiamo l'esperienza..." | "We propose the most suitable..." | "Wir schlagen das passendste..." |
| `step3Title` | "Ci vediamo in acqua" | "See you in the water" | "Wir sehen uns im Wasser" |
| `step3Desc` | "Punto d'incontro confermato..." | "Meeting point confirmed..." | "Treffpunkt per WhatsApp bestätigt..." |
| `cta` | "Scrivici su WhatsApp" | "Message us on WhatsApp" | "Schreib uns auf WhatsApp" |

#### `booking` namespace — NEW KEY
| Key | IT | EN | DE |
|-----|----|----|----|
| `subline` | "Risposta garantita entro 2 ore · Nessun pagamento anticipato" | "Guaranteed reply within 2 hours · No upfront payment" | "Garantierte Antwort innerhalb 2 Stunden · Keine Vorauszahlung" |

#### `hero` CTA keys updated
| Key | IT | EN | DE |
|-----|----|----|----|
| `ctaWhatsApp` | "PRENOTA SU WHATSAPP" | "BOOK ON WHATSAPP" | "AUF WHATSAPP BUCHEN" |
| `ctaAvailability` | "VERIFICA DISPONIBILITÀ" | "CHECK AVAILABILITY" | "VERFÜGBARKEIT PRÜFEN" |
| `ctaExplore` | "SCOPRI LE ESPERIENZE" | "EXPLORE EXPERIENCES" | "ERLEBNISSE ENTDECKEN" |

---

## 6. HOMEPAGE STRUCTURE (`src/app/[locale]/page.tsx`)

### Sections (top to bottom)

| # | Section | Key Changes |
|---|---------|-------------|
| 1 | **Hero** | `min-h-[100svh]`, title `clamp(48px, 8vw, 96px)`, text-stroke on first word, credibility line aqua `#1A8FBD`, 3 CTAs with new styling, Framer Motion stagger entrance, badge bottom-left |
| 2 | **WaveDivider** | Hero → TrustBar |
| 3 | **Trust Bar** | 5 real-number items, mobile marquee animation, desktop static flex |
| 4 | **WaveDivider** | TrustBar → Services |
| 5 | **Services Grid** | Aspect ratio 4/3, badge overlay, tagline, "Per chi:" line, price + discover row, emotional copy |
| 6 | **WaveDivider** | Services → HowItWorks |
| 7 | **How It Works** (NEW) | 3 steps with large numbers, WhatsApp CTA |
| 8 | **WaveDivider** | HowItWorks → WhyChooseUs |
| 9 | **Why Choose Us** | Alternating row backgrounds (navy/sand), watermark numbers 01-08, Framer Motion `whileInView` fadeUp, text-stroke on last word of title |
| 10 | **WaveDivider** | WhyChooseUs → Magazine |
| 11 | **Magazine** | Full-height image (min 500px), gradient overlay, larger italic quote (24px), arrow hover animation |
| 12 | **WaveDivider** | Magazine → Testimonials |
| 13 | **Testimonials** | Unchanged structure |
| 14 | **WaveDivider** | Testimonials → Location |
| 15 | **Location + Map** | Unchanged structure |
| 16 | **WaveDivider** | Location → BookingCTA |
| 17 | **Booking CTA** | Title `clamp(40px, 6vw, 72px)`, text-stroke on accent word, subline in Space Mono 11px |
| 18 | **WaveDivider** | BookingCTA → FAQ |
| 19 | **FAQ** | Unchanged structure |
| 20 | **Footer + WhatsApp** | Footer unchanged, WhatsApp button updated |

### Animation Configuration

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};
```

Applied to Hero title, subtitle, credibility line, and CTAs with staggered `custom` values 0–3.

---

## 7. TEXT-STROKE USAGE (exactly 3 places)

| Location | Class / Style | Target Word |
|----------|---------------|-------------|
| Hero H1 | `.text-outline-white` | First word of `titleLine1` ("Diving" / "Immersioni" / "Tauchen") |
| Why Choose Us H2 | `.text-outline-aqua` | Last word of `usp.title` ("Excellence" / "Eccellenza" / "Exzellenz") |
| Booking CTA H2 | `.text-outline-white` | `titleAccent` ("dive in?" / "tuffarti?" / "einzutauchen?") |

---

## 8. BUILD STATUS

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (67/67)
```

**First Load JS:** 87.3 kB shared
**Homepage bundle:** 49 kB

---

## 9. DEPLOYMENT

- **Preview URL:** https://app-ns05quexx-cristiermurache-1102s-projects.vercel.app
- **Production URL:** https://app-flax-kappa-80.vercel.app
- **Platform:** Vercel
- **Framework:** Next.js 14.2.35 (App Router)

---

## 10. FILE INVENTORY

### Modified Files
- `src/app/globals.css`
- `src/app/[locale]/page.tsx`
- `src/components/WhatsAppButton.tsx`
- `src/messages/it.json`
- `src/messages/en.json`
- `src/messages/de.json`

### New Files
- `src/components/WaveDivider.tsx`

### Installed Packages
- `framer-motion`

---

## 11. MOBILE CHECKLIST (375px)

| Element | Status |
|---------|--------|
| Hero title readable | ✓ `clamp(48px, 8vw, 96px)` |
| CTA buttons full-width | ✓ `w-full sm:w-auto` |
| WhatsApp button visible | ✓ `z-[9999]`, `64px` touch target |
| Trust bar marquee | ✓ Mobile-only animation |
| Service cards single column | ✓ `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| How It Works stacked | ✓ `grid-cols-1 md:grid-cols-3` |
| Why Choose Us 2-col | ✓ `grid-cols-2 md:grid-cols-4` |
| FAQ accordion | ✓ Unchanged, works on mobile |

---

## 12. KNOWN LIMITATIONS / NEXT STEPS

1. **Real photos/videos** — Hero has a `<video>` fallback slot ready in code structure. Replace image URLs with actual assets when available.
2. `next/image` with `quality={90}` — Currently using `<img>` tags for external Google Photos URLs. When migrating to local assets, switch to `<Image quality={90}>`.
3. **Gallery page** — Currently basic grid. Client wants masonry + lightbox. Not yet implemented.
4. **Video background** — Hero prepared for video but using image fallback until real video provided.
