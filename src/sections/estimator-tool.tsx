"use client";

import {
  ArrowRight,
  Check,
  CircleCheck,
  Copy,
  LoaderCircle,
  RotateCcw,
  Send,
  Sparkles,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Turnstile, type TurnstileHandle } from "@/components/shared/turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { isEmailConfigured, sendLead } from "@/lib/emailjs";
import {
  TURNSTILE_SITE_KEY,
  formatMoney,
  planToText,
  requestEstimate,
  type Estimate,
  type EstimatorRequest,
  type Plan,
} from "@/lib/estimator";
import { cn } from "@/lib/utils";

const IDEA_MIN = 20;
const IDEA_MAX = 1500;

const EXAMPLES = [
  {
    label: "Clinic booking app",
    text: "An app for my dental clinic where patients book appointments with a doctor, get reminders, and see their visit history. My staff needs a simple dashboard to manage doctors and time slots.",
  },
  {
    label: "Gym membership app",
    text: "A gym app where members buy monthly plans, book group classes and track workouts. Trainers should see their class schedules and member attendance.",
  },
  {
    label: "AI meeting notes",
    text: "A mobile app that records sales meetings, transcribes them and writes a short summary with action items, then pushes the notes to our CRM.",
  },
];

type Option<T extends string> = { value: T; label: string };

const PLATFORMS: Option<EstimatorRequest["platform"]>[] = [
  { value: "mobile", label: "Mobile app" },
  { value: "web", label: "Website / web app" },
  { value: "both", label: "Both" },
  { value: "unsure", label: "Not sure" },
];

const AI: Option<EstimatorRequest["ai"]>[] = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "unsure", label: "Not sure" },
];

const TIMELINES: Option<EstimatorRequest["timeline"]>[] = [
  { value: "asap", label: "~1 month" },
  { value: "quarter", label: "~3 months" },
  { value: "flexible", label: "Flexible" },
];

const LOADING_STEPS = [
  "Reading your idea",
  "Picking the features for version one",
  "Planning the milestones",
  "Working out a budget range",
];

function Segmented<T extends string>({
  name,
  label,
  options,
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
              value === o.value
                ? "border-foreground bg-foreground text-background"
                : "border-border text-subtext hover:border-border-strong hover:text-foreground"
            )}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function List({ items, muted }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className={cn("flex gap-2.5 text-[0.95rem]", muted && "text-subtext")}>
          {muted ? (
            <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-faint" />
          ) : (
            <Check className="mt-1 size-4 shrink-0 text-ok" aria-hidden />
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function SendToSachin({ plan, idea }: { plan: Plan; idea: string }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  if (state === "sent") {
    return (
      <p className="flex items-center gap-2 text-sm font-medium text-ok">
        <CircleCheck className="size-5" aria-hidden />
        Sent. I&apos;ll reply to {email} within 24 hours.
      </p>
    );
  }

  if (!open) {
    return (
      <Button onClick={() => setOpen(true)}>
        <Send />
        Send this plan to Sachin
      </Button>
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please add your name and a valid email.");
      return;
    }
    if (!isEmailConfigured) {
      toast.error("Sending is offline right now. Please use the contact form below.");
      return;
    }
    setState("sending");
    try {
      await sendLead({
        name: name.trim(),
        email: email.trim(),
        subject: `AI estimate: ${plan.title} (${formatMoney(plan.price.min)}–${formatMoney(plan.price.max)})`,
        message: planToText(plan, idea),
        extra: { project_type: "AI estimator", budget: `${plan.sizeLabel}` },
      });
      setState("sent");
    } catch {
      setState("idle");
      toast.error("Couldn't send. Please try again or use the contact form below.");
    }
  };

  return (
    <form onSubmit={submit} className="grid w-full gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
      <div className="space-y-1.5">
        <Label htmlFor="est-name">Your name</Label>
        <Input id="est-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="est-email">Email</Label>
        <Input
          id="est-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button type="submit" size="lg" disabled={state === "sending"}>
        {state === "sending" ? <LoaderCircle className="animate-spin" /> : <Send />}
        Send
      </Button>
    </form>
  );
}

function PlanView({ plan, idea, onReset }: { plan: Plan; idea: string; onReset: () => void }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(planToText(plan, idea));
      toast.success("Plan copied");
    } catch {
      toast.error("Couldn't copy. Please select the text manually.");
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
            {plan.sizeLabel} project
          </span>
          {plan.includesAi ? (
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              Includes AI
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{plan.title}</h3>
        <p className="mt-2 leading-relaxed text-subtext">{plan.summary}</p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        <div className="bg-background p-5">
          <p className="label">Rough budget</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {formatMoney(plan.price.min)} – {formatMoney(plan.price.max)}
          </p>
        </div>
        <div className="bg-background p-5">
          <p className="label">Rough timeline</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">
            {plan.weeks.min}–{plan.weeks.max} weeks
          </p>
        </div>
      </div>
      {plan.timelineNote ? (
        <p className="-mt-4 rounded-lg bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-300">
          {plan.timelineNote}
        </p>
      ) : null}

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h4 className="label">What gets built</h4>
          <div className="mt-3">
            <List items={plan.deliverables} />
          </div>
        </div>
        <div>
          <h4 className="label">Version 1 features</h4>
          <div className="mt-3">
            <List items={plan.mvpFeatures} />
          </div>
        </div>
      </div>

      {plan.laterFeatures.length ? (
        <div>
          <h4 className="label">Later, once it&apos;s live</h4>
          <div className="mt-3">
            <List items={plan.laterFeatures} muted />
          </div>
        </div>
      ) : null}

      <div>
        <h4 className="label">Milestones</h4>
        <ol className="mt-3 divide-y divide-border border-y border-border">
          {plan.milestones.map((m, i) => (
            <li key={m.name} className="grid grid-cols-[2rem_1fr_auto] gap-3 py-3">
              <span className="grid size-6 place-items-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <span>
                <span className="font-medium">{m.name}</span>
                <span className="mt-0.5 block text-sm text-subtext">{m.outcome}</span>
              </span>
              <span className="text-sm whitespace-nowrap text-faint">~{m.weeks} wk</span>
            </li>
          ))}
        </ol>
      </div>

      {plan.questions.length ? (
        <div>
          <h4 className="label">What I&apos;d ask you before a final quote</h4>
          <ul className="mt-3 space-y-2 text-[0.95rem]">
            {plan.questions.map((q) => (
              <li key={q} className="flex gap-2.5">
                <span aria-hidden className="text-faint">
                  ?
                </span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <p className="text-sm text-faint">
        This is an AI-generated starting point based on my usual rates, not a quote. I&apos;ll
        confirm scope and price after a short call.
      </p>

      <div className="flex flex-col gap-4 border-t border-border pt-6">
        <SendToSachin plan={plan} idea={idea} />
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={copy}>
            <Copy />
            Copy plan
          </Button>
          <Button variant="ghost" size="sm" onClick={onReset}>
            <RotateCcw />
            Try another idea
          </Button>
        </div>
      </div>
    </div>
  );
}

export function EstimatorTool() {
  const [idea, setIdea] = useState("");
  const [platform, setPlatform] = useState<EstimatorRequest["platform"]>("mobile");
  const [ai, setAi] = useState<EstimatorRequest["ai"]>("unsure");
  const [timeline, setTimeline] = useState<EstimatorRequest["timeline"]>("flexible");

  const [token, setToken] = useState<string | null>(null);
  const [botError, setBotError] = useState(false);
  const turnstile = useRef<TurnstileHandle>(null);

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ estimate: Estimate; idea: string } | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const onToken = useCallback((t: string | null) => {
    setToken(t);
    if (t) setBotError(false);
  }, []);
  const onBotError = useCallback(() => setBotError(true), []);

  useEffect(() => {
    if (!loading) return;
    const id = window.setInterval(
      () => setStep((s) => Math.min(s + 1, LOADING_STEPS.length - 1)),
      1600
    );
    return () => window.clearInterval(id);
  }, [loading]);

  const trimmed = idea.trim();
  const canSubmit = trimmed.length >= IDEA_MIN && !!token && !loading && remaining !== 0;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || !token) return;
    setLoading(true);
    setStep(0);
    setError(null);
    setResult(null);

    const res = await requestEstimate({ idea: trimmed, platform, ai, timeline, token });
    turnstile.current?.reset(); // tokens are single-use
    setLoading(false);

    if (!res.ok) {
      setError(res.message);
      return;
    }
    setRemaining(res.remaining);
    setResult({ estimate: res.estimate, idea: trimmed });
    window.requestAnimationFrame(() => {
      if (window.innerWidth < 1024) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const reset = () => {
    setResult(null);
    setError(null);
    document.getElementById("est-idea")?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      <form
        onSubmit={submit}
        className="space-y-6 rounded-2xl border border-border bg-surface p-6 sm:p-7 lg:col-span-5 lg:self-start"
      >
        <div className="space-y-2">
          <Label htmlFor="est-idea">Describe your app or website idea</Label>
          <Textarea
            id="est-idea"
            value={idea}
            maxLength={IDEA_MAX}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Who is it for, and what should they be able to do? A few sentences is enough."
            className="min-h-40"
          />
          <div className="flex items-center justify-between text-xs text-faint">
            <span>English or Hinglish, both work.</span>
            <span>
              {idea.length}/{IDEA_MAX}
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm text-subtext">Or try an example:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.label}
                type="button"
                onClick={() => setIdea(ex.text)}
                className="rounded-full border border-dashed border-border-strong px-3 py-1 text-sm text-subtext transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        <Segmented name="platform" label="Platform" options={PLATFORMS} value={platform} onChange={setPlatform} />
        <Segmented name="ai" label="Need an AI feature?" options={AI} value={ai} onChange={setAi} />
        <Segmented name="timeline" label="When do you want to launch?" options={TIMELINES} value={timeline} onChange={setTimeline} />

        <Turnstile ref={turnstile} siteKey={TURNSTILE_SITE_KEY} onToken={onToken} onError={onBotError} />

        <div className="space-y-3">
          <Button type="submit" size="lg" className="w-full" disabled={!canSubmit}>
            {loading ? <LoaderCircle className="animate-spin" /> : <Sparkles />}
            {loading ? "Planning…" : "Generate my plan"}
          </Button>
          <p className="text-center text-xs text-faint">
            {botError
              ? "The bot check couldn't load. Refresh the page, or use the contact form."
              : !token
                ? "Checking you're not a bot…"
                : remaining === 0
                  ? "That's today's free plans. Use the contact form for more."
                  : remaining !== null
                  ? `Free · ${remaining} plan${remaining === 1 ? "" : "s"} left today`
                  : "Free · up to 3 plans per day"}
          </p>
        </div>
      </form>

      <div
        ref={resultRef}
        aria-live="polite"
        className="scroll-mt-24 rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:col-span-7"
      >
        {loading ? (
          <ol className="flex min-h-80 flex-col justify-center gap-4">
            {LOADING_STEPS.map((label, i) => (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-3 transition-opacity duration-500",
                  i > step ? "opacity-30" : "opacity-100"
                )}
              >
                {i < step ? (
                  <Check className="size-4 text-ok" aria-hidden />
                ) : i === step ? (
                  <LoaderCircle className="size-4 animate-spin text-accent" aria-hidden />
                ) : (
                  <span className="size-4" />
                )}
                {label}
              </li>
            ))}
          </ol>
        ) : error ? (
          <div className="flex min-h-80 flex-col items-start justify-center">
            <p className="text-lg font-medium">That didn&apos;t work.</p>
            <p className="mt-2 max-w-md text-subtext">{error}</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
              Go to the contact form
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        ) : result?.estimate.status === "plan" ? (
          <PlanView plan={result.estimate} idea={result.idea} onReset={reset} />
        ) : result?.estimate.status === "needs_more_info" ? (
          <div className="flex min-h-80 flex-col justify-center">
            <p className="text-lg font-medium">I need a little more detail to plan this.</p>
            <ul className="mt-4 space-y-2 text-subtext">
              {result.estimate.questions.map((q) => (
                <li key={q}>· {q}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-faint">Add these to your description and generate again.</p>
          </div>
        ) : result?.estimate.status === "off_topic" ? (
          <div className="flex min-h-80 flex-col justify-center">
            <p className="text-lg font-medium">This tool only plans app and website projects.</p>
            <p className="mt-2 text-subtext">Describe the product you want built, and I&apos;ll sketch a plan for it.</p>
          </div>
        ) : (
          <div className="flex min-h-80 flex-col justify-center">
            <p className="label">Your plan will appear here</p>
            <ul className="mt-5 space-y-3 text-subtext">
              {[
                "The features for version one, and what can wait",
                "What gets built: app, admin panel, backend, AI",
                "Milestones with a rough timeline",
                "A budget range based on my usual rates",
              ].map((line) => (
                <li key={line} className="flex gap-2.5">
                  <Check className="mt-1 size-4 shrink-0 text-faint" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
