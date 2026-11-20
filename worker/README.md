# AI project estimator (Cloudflare Worker)

Backend for the "AI project estimator" section of the portfolio. The site stays on
GitHub Pages; this Worker holds the secrets and calls Cloudflare Workers AI.

```
Browser ──POST /estimate──▶ Worker ──▶ Turnstile check ──▶ daily quota (KV) ──▶ Workers AI (Llama 3.3 70B, JSON mode)
                                                                                     │
                     price & weeks come from src/pricing.ts, never from the model ◀──┘
```

- `src/pricing.ts`: your price bands. Edit these to change prices.
- `src/prompt.ts`: what the AI is told (scope rules, size rubric).
- `src/estimate.ts`: input validation, cleaning the model output, building the final estimate.
- `src/index.ts`: HTTP handler (CORS, Turnstile, quota, AI call).

## Local development (no Cloudflare account needed)

```bash
cp .dev.vars.example .dev.vars   # Turnstile test keys + MOCK_AI=true
npm install
npm run dev                      # http://127.0.0.1:8787
npm test
```

In the site's `.env.local`:

```
NEXT_PUBLIC_ESTIMATOR_URL=http://127.0.0.1:8787
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA
```

## Production setup (one time)

1. `npx wrangler login`
2. `npx wrangler kv namespace create ESTIMATOR_KV` and paste the id into `wrangler.toml`.
3. Create a Turnstile widget (Cloudflare dashboard → Turnstile) for `sachinchoudhary07.github.io`.
4. `npx wrangler secret put TURNSTILE_SECRET` and paste the widget's secret key.
5. `npm run deploy` and note the `https://portfolio-estimator.<you>.workers.dev` URL.
6. Put the Worker URL and Turnstile site key in `.env.production` at the repo root:
   `NEXT_PUBLIC_ESTIMATOR_URL` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY` (both public).
7. Push to main. The section appears only when both values are set.

## Cost

Workers Free plan + Workers AI free allocation (10,000 neurons/day, roughly 50 estimates).
When the daily allocation runs out, the Worker returns a friendly "busy, use the contact form"
message. On the Free plan nothing is billed.
