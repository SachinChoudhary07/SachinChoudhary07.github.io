"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/shared/section-heading";
import { ABOUT, SITE } from "@/constants/site";

const ABOUT_BLOCKS: { key: keyof typeof ABOUT; title: string }[] = [
  { key: "intro", title: "Who I Am" },
  { key: "whatIDo", title: "What I Do" },
  { key: "experience", title: "Experience" },
  { key: "passion", title: "Passion" },
  { key: "currentFocus", title: "Current Focus" },
];

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="The Developer Behind the Code"
          description="A closer look at who I am, what drives me, and how I approach building great mobile products."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative">
              <div
                className="animate-pulse-glow absolute -top-8 -left-8 -z-10 h-40 w-40 rounded-full bg-primary/30 blur-[70px]"
                aria-hidden
              />
              <div
                className="animate-pulse-glow absolute -right-6 -bottom-6 -z-10 h-40 w-40 rounded-full bg-accent/25 blur-[70px]"
                style={{ animationDelay: "1.5s" }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px] shadow-[0_0_40px_rgba(0,198,255,0.15)]">
                <div className="overflow-hidden rounded-[1.4rem] bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element -- local portrait; native img avoids fill-sizing bugs in this framed layout */}
                  <img
                    src={SITE.photo}
                    alt={`${SITE.name} — ${SITE.role}`}
                    width={480}
                    height={600}
                    className="aspect-[4/5] h-auto w-full object-cover object-[center_15%]"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-center shadow-xl"
              >
                <span className="font-display text-lg font-bold text-primary">4+</span>
                <span className="text-xs text-subtext">Years crafting Flutter apps</span>
              </motion.div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ABOUT_BLOCKS.map((block, i) => (
              <Reveal key={block.key} delay={i * 0.08}>
                <div className="glass h-full rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/30">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtext">{ABOUT[block.key]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
