import {
  MOCK_PLAN,
  buildEstimate,
  normalizeModelOutput,
  parseInput,
  type EstimateInput,
  type ModelPlan,
} from "./estimate.ts";
import { ESTIMATE_SCHEMA, SYSTEM_PROMPT, buildUserMessage } from "./prompt.ts";

export interface Env {
  AI: Ai;
  ESTIMATOR_KV: KVNamespace;
  ALLOWED_ORIGINS: string;
  MODEL: string;
  DAILY_LIMIT: string;
  MOCK_AI?: string;
  TURNSTILE_SECRET: string;
}

type ErrorCode =
  | "invalid_input"
  | "forbidden_origin"
  | "bot_check_failed"
  | "rate_limited"
  | "ai_unavailable"
  | "server_error"
  | "not_found";

function corsHeaders(origin: string | null, env: Env): Record<string, string> {
  const allowed = env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  return origin && allowed.includes(origin)
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
        Vary: "Origin",
      }
    : { Vary: "Origin" };
}

function json(data: unknown, status: number, cors: Record<string, string>) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...cors },
  });
}

function fail(code: ErrorCode, message: string, status: number, cors: Record<string, string>) {
  return json({ ok: false, error: code, message }, status, cors);
}

async function verifyTurnstile(token: string, ip: string, secret: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return data.success === true;
}

/** Counts estimates per visitor per UTC day. Approximate (KV is eventually consistent), which is fine here. */
async function consumeDailyQuota(env: Env, ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const limit = Math.max(1, Number(env.DAILY_LIMIT) || 3);
  const day = new Date().toISOString().slice(0, 10);
  const key = `quota:${day}:${ip}`;
  const used = Number((await env.ESTIMATOR_KV.get(key)) ?? "0");
  if (used >= limit) return { allowed: false, remaining: 0 };
  await env.ESTIMATOR_KV.put(key, String(used + 1), { expirationTtl: 60 * 60 * 36 });
  return { allowed: true, remaining: limit - used - 1 };
}

async function generatePlan(env: Env, input: EstimateInput): Promise<ModelPlan | null> {
  if (env.MOCK_AI === "true") {
    await new Promise((r) => setTimeout(r, 1200));
    return MOCK_PLAN;
  }

  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: buildUserMessage(input) },
  ];

  // One retry: JSON mode can occasionally fail to satisfy the schema.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const result = await env.AI.run(env.MODEL as keyof AiModels, {
        messages,
        response_format: { type: "json_schema", json_schema: ESTIMATE_SCHEMA },
        max_tokens: 1400,
        temperature: 0.3,
      } as never);
      const plan = normalizeModelOutput(result);
      if (plan) return plan;
    } catch (err) {
      console.error("AI error", attempt, err instanceof Error ? err.message : err);
      // Daily free allocation used up, or model unavailable: don't retry.
      if (err instanceof Error && /neuron|quota|limit|capacity/i.test(err.message)) {
        throw err;
      }
    }
  }
  return null;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (url.pathname === "/health") {
      return json({ ok: true }, 200, cors);
    }

    if (url.pathname !== "/estimate" || request.method !== "POST") {
      return fail("not_found", "Not found.", 404, cors);
    }

    if (!("Access-Control-Allow-Origin" in cors)) {
      return fail("forbidden_origin", "This endpoint only serves the portfolio site.", 403, cors);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return fail("invalid_input", "Invalid request.", 400, cors);
    }

    const parsed = parseInput(body);
    if (!parsed.ok) return fail("invalid_input", parsed.message, 400, cors);

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";

    try {
      if (!(await verifyTurnstile(parsed.token, ip, env.TURNSTILE_SECRET))) {
        return fail(
          "bot_check_failed",
          "The bot check didn't pass. Please refresh the page and try again.",
          403,
          cors
        );
      }

      const quota = await consumeDailyQuota(env, ip);
      if (!quota.allowed) {
        return fail(
          "rate_limited",
          "You've used today's free estimates. Send me your idea through the contact form and I'll reply personally.",
          429,
          cors
        );
      }

      let plan: ModelPlan | null;
      try {
        plan = await generatePlan(env, parsed.input);
      } catch {
        plan = null;
      }
      if (!plan) {
        return fail(
          "ai_unavailable",
          "The estimator is busy right now. Please try again later, or send your idea through the contact form.",
          503,
          cors
        );
      }

      return json(
        { ok: true, estimate: buildEstimate(plan, parsed.input), remaining: quota.remaining },
        200,
        cors
      );
    } catch (err) {
      console.error("Unhandled", err instanceof Error ? err.message : err);
      return fail("server_error", "Something went wrong. Please try again.", 500, cors);
    }
  },
} satisfies ExportedHandler<Env>;
