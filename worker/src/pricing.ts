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
  small: { label: "Small", min: 400, max: 900, weeks: [2, 3] },
  medium: { label: "Medium", min: 900, max: 2000, weeks: [4, 6] },
  large: { label: "Large", min: 2000, max: 4500, weeks: [6, 10] },
  xl: { label: "Extra large", min: 4500, max: 10000, weeks: [10, 16] },
};

/** Added on top when the project includes a real AI feature. */
export const AI_ADDON = { min: 300, max: 1000, weeks: 1 };

export const CURRENCY = "USD";
