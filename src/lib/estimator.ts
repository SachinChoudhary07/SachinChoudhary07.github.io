/** Client for the estimator Cloudflare Worker (see /worker). Types mirror worker/src/estimate.ts. */

export const ESTIMATOR_URL = process.env.NEXT_PUBLIC_ESTIMATOR_URL?.trim().replace(/\/$/, "") ?? "";
export const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
export const isEstimatorEnabled = ESTIMATOR_URL.length > 0 && TURNSTILE_SITE_KEY.length > 0;

export type EstimatorRequest = {
  idea: string;
  platform: "mobile" | "web" | "both" | "unsure";
  ai: "yes" | "no" | "unsure";
  timeline: "asap" | "quarter" | "flexible";
  token: string;
};

export type Plan = {
  status: "plan";
  title: string;
  summary: string;
  size: "small" | "medium" | "large" | "xl";
  sizeLabel: string;
  includesAi: boolean;
  deliverables: string[];
  mvpFeatures: string[];
  laterFeatures: string[];
  milestones: { name: string; weeks: number; outcome: string }[];
  questions: string[];
  price: { min: number; max: number; currency: string };
  weeks: { min: number; max: number };
  timelineNote?: string;
};

export type Estimate =
  | Plan
  | { status: "needs_more_info"; questions: string[] }
  | { status: "off_topic" };

export type EstimatorResponse =
  | { ok: true; estimate: Estimate; remaining: number }
  | { ok: false; error: string; message: string };

export async function requestEstimate(body: EstimatorRequest): Promise<EstimatorResponse> {
  try {
    const res = await fetch(`${ESTIMATOR_URL}/estimate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return (await res.json()) as EstimatorResponse;
  } catch {
    return {
      ok: false,
      error: "network",
      message: "Couldn't reach the estimator. Check your connection and try again.",
    };
  }
}

export function formatMoney(value: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

/** Plain-text version used for "Copy plan" and the email to Sachin. */
export function planToText(plan: Plan, idea: string) {
  const lines = [
    `${plan.title} (${plan.sizeLabel} project)`,
    plan.summary,
    "",
    `Rough budget: ${formatMoney(plan.price.min)} – ${formatMoney(plan.price.max)}`,
    `Rough timeline: ${plan.weeks.min}–${plan.weeks.max} weeks`,
    plan.timelineNote ? `Note: ${plan.timelineNote}` : "",
    "",
    "What gets built:",
    ...plan.deliverables.map((d) => `- ${d}`),
    "",
    "Version 1 features:",
    ...plan.mvpFeatures.map((f) => `- ${f}`),
    "",
    "Later:",
    ...plan.laterFeatures.map((f) => `- ${f}`),
    "",
    "Milestones:",
    ...plan.milestones.map((m, i) => `${i + 1}. ${m.name} (~${m.weeks} wk): ${m.outcome}`),
    "",
    "Open questions:",
    ...plan.questions.map((q) => `- ${q}`),
    "",
    "Original idea:",
    idea,
  ];
  return lines.filter((l, i, arr) => !(l === "" && arr[i - 1] === "")).join("\n");
}
