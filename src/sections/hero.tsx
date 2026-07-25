"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiDart, SiFirebase, SiFlutter, SiGit } from "react-icons/si";
import { ParticlesBackground } from "@/components/effects/particles-background";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Button } from "@/components/ui/button";
import { HERO_ROLES, HERO_STATS, HERO_TAGS, SITE } from "@/constants/site";
import { smoothScrollTo } from "@/utils";

function useTypingEffect(words: readonly string[], typeSpeed = 85, pauseMs = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const delay = deleting ? typeSpeed / 2 : typeSpeed;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          window.setTimeout(() => setDeleting(true), pauseMs);
        }
      } else {
        const next = current.slice(0, Math.max(text.length - 1, 0));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, pauseMs]);

  return text;
}

function FlutterMark() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="h-24 w-24 drop-shadow-[0_0_30px_rgba(0,198,255,0.35)] sm:h-32 sm:w-32"
      initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-flutter-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--secondary)" />
        </linearGradient>
        <linearGradient id="hero-flutter-grad-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--secondary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path d="M62 12 L150 100 L108 142 L20 54 Z" fill="url(#hero-flutter-grad-1)" />
      <path
        d="M62 188 L20 146 L108 58 L150 100 L108 142 Z"
        fill="url(#hero-flutter-grad-2)"
        opacity="0.92"
      />
    </motion.svg>
  );
}

const FLOATING_ICONS = [
  { Icon: SiFlutter, className: "top-2 left-2 sm:top-4 sm:left-0", delay: "0s" },
  { Icon: SiDart, className: "top-6 right-0 sm:top-8 sm:-right-4", delay: "1.2s" },
  { Icon: SiFirebase, className: "bottom-8 left-0 sm:bottom-10 sm:-left-6", delay: "2.1s" },
  { Icon: SiGit, className: "bottom-2 right-4 sm:bottom-4 sm:right-2", delay: "0.6s" },
];

export function Hero() {
  const typedRole = useTypingEffect(HERO_ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-14"
    >
      <ParticlesBackground />
      <div className="animated-grid absolute inset-0 -z-10" aria-hidden />

      <div
        className="animate-pulse-glow absolute top-1/4 -left-32 -z-10 h-72 w-72 rounded-full bg-primary/30 blur-[100px] sm:h-96 sm:w-96"
        aria-hidden
      />
      <div
        className="animate-pulse-glow absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-secondary/25 blur-[100px] sm:h-96 sm:w-96"
        style={{ animationDelay: "1.5s" }}
        aria-hidden
      />
      <div
        className="animate-pulse-glow absolute top-1/2 right-1/3 -z-10 h-56 w-56 rounded-full bg-accent/20 blur-[110px]"
        style={{ animationDelay: "3s" }}
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-col items-center gap-4 lg:items-start"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/40 shadow-lg shadow-primary/20 sm:h-24 sm:w-24">
              <Image
                src={SITE.photo}
                alt={SITE.name}
                fill
                priority
                sizes="96px"
                className="object-cover object-top"
              />
            </div>
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Available for new opportunities
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text block sm:inline">{SITE.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex h-9 items-center text-lg font-semibold text-subtext sm:text-xl md:text-2xl"
          >
            <span aria-live="polite" className="text-foreground/90">
              {typedRole}
            </span>
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary sm:h-7" aria-hidden />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-xl text-base text-subtext sm:text-lg"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-subtext"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <MagneticButton>
              <Button size="lg" onClick={() => smoothScrollTo("#contact")}>
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid w-full grid-cols-2 gap-6 sm:grid-cols-4 lg:max-w-xl"
          >
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-subtext sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex">
          <div className="glass animate-float relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10 sm:h-80 sm:w-80">
            <FlutterMark />
            {FLOATING_ICONS.map(({ Icon, className, delay }, i) => (
              <div
                key={i}
                className={`animate-float glass absolute flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-primary shadow-lg ${className}`}
                style={{ animationDelay: delay }}
              >
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center lg:hidden">
          <div className="glass animate-float relative flex h-40 w-40 items-center justify-center rounded-full border border-white/10">
            <FlutterMark />
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => smoothScrollTo("#about")}
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-subtext transition hover:text-primary sm:flex"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
