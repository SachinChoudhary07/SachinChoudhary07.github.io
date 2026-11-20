/**
 * Price bands, in USD. The AI only picks a SIZE; the price always comes from
 * this table, so the model can never invent or undercut a price.
 *
 * >>> Sachin: adjust these numbers to your real rates before deploying. <<<
 */
export type ProjectSize = "small" | "medium" | "large" | "xl";

export type PriceBand = {
  label: string;
  min: number;
  max: number;
  weeks: [number, number];
};

export const PRICE_TABLE: Record<ProjectSize, PriceBand> = {
  small: { label: "Small", min: 700, max: 1500, weeks: [2, 3] },
  medium: { label: "Medium", min: 1500, max: 3000, weeks: [4, 6] },
  large: { label: "Large", min: 3000, max: 7000, weeks: [6, 10] },
  xl: { label: "Extra large", min: 7000, max: 15000, weeks: [10, 16] },
};

/** Added on top when the project includes a real AI feature. */
export const AI_ADDON = { min: 500, max: 1500, weeks: 1 };

export const CURRENCY = "USD";
