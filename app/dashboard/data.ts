export interface TrackedProduct {
  id: string;
  name: string;
  sku: string;
  yourPrice: number;
  competitor: string;
  competitorPrice: number;
  lastUpdated: string;
  /** Competitor's recent prices, oldest → newest */
  history: number[];
}

export const products: TrackedProduct[] = [
  {
    id: "p1",
    name: "Aurora X9 Wireless Headphones",
    sku: "AUD-X9-BLK",
    yourPrice: 249.99,
    competitor: "Amazon",
    competitorPrice: 229.99,
    lastUpdated: "12 min ago",
    history: [249.99, 244.99, 239.99, 234.99, 229.99],
  },
  {
    id: "p2",
    name: "KeyForge 75 Mechanical Keyboard",
    sku: "KBD-KF75-RGB",
    yourPrice: 89.99,
    competitor: "Best Buy",
    competitorPrice: 94.99,
    lastUpdated: "34 min ago",
    history: [89.99, 89.99, 92.99, 94.99, 94.99],
  },
  {
    id: "p3",
    name: "ClearView 4K Webcam",
    sku: "CAM-CV4K-01",
    yourPrice: 129.0,
    competitor: "Walmart",
    competitorPrice: 119.0,
    lastUpdated: "1 hr ago",
    history: [129.0, 129.0, 124.0, 121.5, 119.0],
  },
  {
    id: "p4",
    name: "DockMaster USB-C Hub Pro",
    sku: "DCK-DM-PRO",
    yourPrice: 179.99,
    competitor: "Amazon",
    competitorPrice: 189.99,
    lastUpdated: "2 hrs ago",
    history: [184.99, 189.99, 189.99, 189.99, 189.99],
  },
  {
    id: "p5",
    name: "SwiftDrive 1TB Portable SSD",
    sku: "SSD-SD1TB-USB",
    yourPrice: 99.99,
    competitor: "Newegg",
    competitorPrice: 94.99,
    lastUpdated: "3 hrs ago",
    history: [109.99, 104.99, 99.99, 97.99, 94.99],
  },
  {
    id: "p6",
    name: "ErgoSit Pro Office Chair",
    sku: "CHR-ES-PRO",
    yourPrice: 299.0,
    competitor: "Wayfair",
    competitorPrice: 329.0,
    lastUpdated: "5 hrs ago",
    history: [319.0, 319.0, 324.0, 329.0, 329.0],
  },
];

/** Positive = your price is higher than the competitor's. Negative = you're cheaper. */
export function priceDiff(p: TrackedProduct): number {
  return p.yourPrice - p.competitorPrice;
}

export type Trend = "up" | "down" | "flat";

/** Trend of the competitor's price (most recent movement). */
export function competitorTrend(p: TrackedProduct): Trend {
  const h = p.history;
  if (h.length < 2) return "flat";
  const last = h[h.length - 1];
  const prev = h[h.length - 2];
  if (last > prev + 0.001) return "up";
  if (last < prev - 0.001) return "down";
  return "flat";
}

/** An alert fires when the competitor undercuts you by more than $5. */
export function hasAlert(p: TrackedProduct): boolean {
  return p.competitorPrice < p.yourPrice - 5;
}
