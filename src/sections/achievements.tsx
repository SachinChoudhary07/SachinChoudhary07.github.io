"use client";

import { motion } from "framer-motion";
import { Award, CalendarDays, FolderGit2, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal, SectionHeading } from "@/components/shared/section-heading";
import { ACHIEVEMENT_STATS } from "@/constants/site";
import { GsapReveal } from "@/hooks/use-gsap-reveal";

function iconForLabel(label: string): LucideIcon {
  const normalized = label.toLowerCase();
  if (normalized.includes("year")) return CalendarDays;
  if (normalized.includes("project")) return FolderGit2;
  if (normalized.includes("feature")) return TrendingUp;
  if (normalized.includes("user")) return Users;
  return Award;
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Numbers That Tell the Story"
          description="Measurable outcomes from years of building and shipping quality Flutter products."
        />

        <GsapReveal>
        <GsapReveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 sm:p-12">
            <div
              className="animate-pulse-glow absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
              aria-hidden
            />
            <div
              className="animate-pulse-glow absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-accent/20 blur-[100px]"
              style={{ animationDelay: "1.5s" }}
              aria-hidden
            />

            <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
              {ACHIEVEMENT_STATS.map((stat, i) => {
                const Icon = iconForLabel(stat.label);
                return (
                  <Reveal key={stat.label} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      className="flex flex-col items-center text-center"
                    >
                      <span className="glass mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </span>
                      <p className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.2} />
                      </p>
                      <p className="mt-2 text-sm font-medium text-subtext sm:text-base">
                        {stat.label}
                      </p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </GsapReveal>
        </GsapReveal>
      </div>
    </section>
  );
}
