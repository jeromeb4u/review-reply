# ReviewReply — AI-Powered Review Response Tool

## 1. Concept & Vision

ReviewReply is a marketing landing page for an AI tool that helps local businesses respond to Google, Yelp, and Facebook reviews in seconds. The feeling is calm authority — like a trusted assistant who handles the tedious stuff so business owners can focus on what matters. Light, airy, wellness-adjacent design that says "professional" without being corporate-cold.

## 2. Design Language

**Aesthetic direction:** Clean, trustworthy, health/wellness-adjacent. Think spa meets SaaS — calm greens, generous whitespace, soft edges.

**Color palette:**
- Background: `#f0fdf4` (light green tint)
- Surface: `#ffffff`
- Border: `#bbf7d0`
- Primary: `#15803d` (forest green)
- Success: `#16a34a`
- Danger: `#dc2626`
- Text: `#14532d`
- Muted: `#4d7c0f`

**Typography:** Inter (Google Font), clean sans-serif
**Motion philosophy:** Subtle fades and slide-ups on scroll; hover lifts on cards; buttons have smooth press feedback

## 3. Layout & Structure

1. **NavBar** — sticky, logo left, nav links center/right, CTA buttons
2. **Hero** — full-width headline + subheadline + dual CTA + social proof badge
3. **Review Example** — side-by-side before/after showing raw review → AI response
4. **Features grid** — 6 cards in 3×2 grid
5. **How It Works** — 4 horizontal steps with icons
6. **Stats bar** — 4 metrics (reviews responded, time saved, businesses, rating)
7. **Testimonials** — 3 cards from local business owners
8. **Pricing** — 3-column pricing cards with feature lists
9. **CTA section** — full-width call to action
10. **Footer** — links, social, copyright

## 4. Features & Interactions

- Smooth scroll to sections from nav links
- Hover states on all interactive elements
- Pricing tier "Popular" badge on Business plan
- Try Free button scrolls to pricing or opens signup
- Login button is a secondary/ghost style

## 5. Component Inventory

- **NavBar** — sticky top, white bg, border-bottom, logo + nav + CTAs
- **Hero** — centered, large headline, green gradient accent, dual buttons
- **ReviewExample** — card split: raw review left, AI response right (green border highlight)
- **Features** — 6-card grid, icon + title + description per card
- **HowItWorks** — 4-step horizontal stepper with numbered circles
- **StatsBar** — 4 stats with large numbers and labels
- **Testimonials** — 3 testimonial cards with quote, name, business, avatar
- **Pricing** — 3 tiers: Starter ($19), Business ($49), Agency ($129)
- **CTA** — centered section with headline + button
- **Footer** — 4-column links + copyright

## 6. Technical Approach

- **Framework:** Next.js 15 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme {}`)
- **Icons:** Lucide React
- **Font:** Inter via `next/font/google`
- **Deployment:** Vercel (`npx vercel --yes`)
