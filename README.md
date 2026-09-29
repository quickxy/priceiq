# PriceIQ — Market Intelligence Platform

Track competitor prices, spot the gaps, and get alerted when you're being undercut.

## What it does

PriceIQ monitors your product prices against major competitors and surfaces what matters:

- **Price tracking** — watch your catalog against Amazon, Best Buy, Walmart, Newegg, Wayfair
- **Gap analysis** — see exactly where you're overpriced or underpriced, in dollars
- **Trend indicators** — rising, falling, or flat competitor pricing at a glance
- **Smart alerts** — flagged automatically when a competitor undercuts you by more than $5

## Tech stack

- Next.js 16 (App Router)
- Tailwind CSS
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The landing page links through to `/dashboard`.

## Project structure

```
app/
  page.tsx            # Marketing landing page
  navigation.tsx      # Site navigation
  footer.tsx          # Site footer
  dashboard/
    page.tsx          # Price dashboard (stat cards + comparison table)
    data.ts           # Mock product data and pricing logic
```

## Status

Working prototype with mock data. The dashboard demonstrates the core UX: stat cards, a product comparison table, price-gap highlighting, trend arrows, and alert states. No live price feeds, user accounts, or database layer yet.

## Roadmap

- [ ] Live price scraping / retailer API integrations
- [ ] User accounts and custom watchlists
- [ ] Email / SMS price-drop alerts
- [ ] Historical price charts per product
- [ ] Pricing page and signup flow
