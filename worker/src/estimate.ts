import { AI_ADDON, CURRENCY, PRICE_TABLE, type ProjectSize } from "./pricing.ts";

/* ---------- Input ---------- */

export type EstimateInput = {
  idea: string;
  platform: "mobile" | "web" | "both" | "unsure";
  ai: "yes" | "no" | "unsure";
  timeline: "asap" | "quarter" | "flexible";
};

export const IDEA_MIN = 20;
export const IDEA_MAX = 1500;

const PLATFORMS = ["mobile", "web", "both", "unsure"] as const;
const AI_OPTIONS = ["yes", "no", "unsure"] as const;
const TIMELINES = ["asap", "quarter", "flexible"] as const;

function oneOf<T extends string>(value: unknown, options: readonly T[], fallback: T): T {
  return typeof value === "string" && (options as readonly string[]).includes(value)
    ? (value as T)
    : fallback;
}

export type InputResult =
  | { ok: true; input: EstimateInput; token: string }
  | { ok: false; message: string };

export function parseInput(body: unknown): InputResult {
  if (!body || typeof body !== "object") return { ok: false, message: "Invalid request." };
  const b = body as Record<string, unknown>;

  const idea = typeof b.idea === "string" ? b.idea.replace(/\s+/g, " ").trim() : "";
  if (idea.length < IDEA_MIN) {
    return { ok: false, message: "Please describe your idea in at least a sentence or two." };
  }
  if (idea.length > IDEA_MAX) {
    return { ok: false, message: `Please keep the description under ${IDEA_MAX} characters.` };
  }

  const token = typeof b.token === "string" ? b.token : "";
  if (!token || token.length > 2048) {
    return { ok: false, message: "Bot check missing. Please reload the page and try again." };
  }

  return {
    ok: true,
    token,
    input: {
      idea,
      platform: oneOf(b.platform, PLATFORMS, "unsure"),
      ai: oneOf(b.ai, AI_OPTIONS, "unsure"),
      timeline: oneOf(b.timeline, TIMELINES, "flexible"),
    },
  };
}

/* ---------- Model output ---------- */

export type ModelPlan = {
  status: "plan" | "needs_more_info" | "off_topic";
  title: string;
  summary: string;
  size: ProjectSize;
  includes_ai: boolean;
  deliverables: string[];
  mvp_features: string[];
  later_features: string[];
  milestones: { name: string; weeks: number; outcome: string }[];
  questions: string[];
};

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

const cleanList = (value: unknown, maxItems: number, maxLen: number) =>
  Array.isArray(value)
    ? value.map((v) => clean(v, maxLen)).filter(Boolean).slice(0, maxItems)
    : [];

/** Accepts whatever the model returned (object or JSON string, possibly wrapped) and normalizes it. */
export function normalizeModelOutput(raw: unknown): ModelPlan | null {
  let value: unknown = raw;
  if (value && typeof value === "object" && "response" in value) {
    value = (value as { response: unknown }).response;
  }
  if (typeof value === "string") {
    const start = value.indexOf("{");
    const end = value.lastIndexOf("}");
    if (start === -1 || end <= start) return null;
    try {
      value = JSON.parse(value.slice(start, end + 1));
    } catch {
      return null;
    }
  }
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string, unknown>;

  const status = oneOf(v.status, ["plan", "needs_more_info", "off_topic"] as const, "plan");
  const size = oneOf(v.size, ["small", "medium", "large", "xl"] as const, "medium");

  const milestones = Array.isArray(v.milestones)
    ? v.milestones
        .map((m) => {
          const mm = (m ?? {}) as Record<string, unknown>;
          const weeks = Number(mm.weeks);
          return {
            name: clean(mm.name, 80),
            outcome: clean(mm.outcome, 220),
            weeks: Number.isFinite(weeks) ? Math.min(Math.max(Math.round(weeks), 1), 8) : 1,
          };
        })
        .filter((m) => m.name)
        .slice(0, 5)
    : [];

  const plan: ModelPlan = {
    status,
    title: clean(v.title, 70),
    summary: clean(v.summary, 400),
    size,
    includes_ai: v.includes_ai === true,
    deliverables: cleanList(v.deliverables, 6, 90),
    mvp_features: cleanList(v.mvp_features, 10, 140),
    later_features: cleanList(v.later_features, 8, 140),
    milestones,
    questions: cleanList(v.questions, 4, 200),
  };

  if (plan.status === "plan" && (plan.mvp_features.length === 0 || plan.milestones.length === 0)) {
    return null;
  }
  return plan;
}

/* ---------- Final estimate sent to the browser ---------- */

export type Estimate =
  | { status: "off_topic" }
  | { status: "needs_more_info"; questions: string[] }
  | {
      status: "plan";
      title: string;
      summary: string;
      size: ProjectSize;
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

/** Scale the model's relative milestone weeks so they add up to the table's typical duration. */
function scaleMilestones(
  milestones: ModelPlan["milestones"],
  targetWeeks: number
): ModelPlan["milestones"] {
  const total = milestones.reduce((sum, m) => sum + m.weeks, 0) || 1;
  return milestones.map((m) => ({
    ...m,
    weeks: Math.max(1, Math.round((m.weeks / total) * targetWeeks)),
  }));
}

export function buildEstimate(plan: ModelPlan, input: EstimateInput): Estimate {
  if (plan.status === "off_topic") return { status: "off_topic" };
  if (plan.status === "needs_more_info") {
    return {
      status: "needs_more_info",
      questions: plan.questions.length
        ? plan.questions
        : ["Who will use the app, and what is the main thing they need to do in it?"],
    };
  }

  const band = PRICE_TABLE[plan.size];
  const withAi = plan.includes_ai;
  const price = {
    min: band.min + (withAi ? AI_ADDON.min : 0),
    max: band.max + (withAi ? AI_ADDON.max : 0),
    currency: CURRENCY,
  };
  const weeks = {
    min: band.weeks[0] + (withAi ? AI_ADDON.weeks : 0),
    max: band.weeks[1] + (withAi ? AI_ADDON.weeks : 0),
  };

  let timelineNote: string | undefined;
  if (input.timeline === "asap" && weeks.min > 5) {
    timelineNote =
      "A one-month launch is tight for this scope. A smaller first release could go live sooner.";
  }

  return {
    status: "plan",
    title: plan.title || "Your project",
    summary: plan.summary,
    size: plan.size,
    sizeLabel: band.label,
    includesAi: withAi,
    deliverables: plan.deliverables,
    mvpFeatures: plan.mvp_features,
    laterFeatures: plan.later_features,
    milestones: scaleMilestones(plan.milestones, Math.round((weeks.min + weeks.max) / 2)),
    questions: plan.questions,
    price,
    weeks,
    timelineNote,
  };
}

/* ---------- Canned output for local development (MOCK_AI=true) ---------- */

export const MOCK_PLAN: ModelPlan = {
  status: "plan",
  title: "Clinic Appointment App",
  summary:
    "A mobile app where patients book and manage appointments with clinic doctors, with an admin panel for the clinic staff.",
  size: "large",
  includes_ai: false,
  deliverables: [
    "Android & iOS app (Flutter)",
    "Admin panel for clinic staff (Next.js)",
    "Backend & database (Firebase)",
  ],
  mvp_features: [
    "Patient sign-up with phone OTP",
    "Doctor list with available time slots",
    "Book, reschedule and cancel appointments",
    "Reminders by push notification",
    "Admin: manage doctors, slots and bookings",
  ],
  later_features: ["Online payments", "Video consultations", "Prescriptions and reports"],
  milestones: [
    { name: "Design & setup", weeks: 1, outcome: "Screens designed, project and backend set up" },
    { name: "Patient app", weeks: 3, outcome: "Booking flow working on both platforms" },
    { name: "Admin panel", weeks: 2, outcome: "Staff can manage doctors, slots and bookings" },
    { name: "Testing & launch", weeks: 1, outcome: "Released on Play Store and App Store" },
  ],
  questions: [
    "How many doctors and clinic locations should it support at launch?",
    "Do patients need to pay when booking, or at the clinic?",
  ],
};
