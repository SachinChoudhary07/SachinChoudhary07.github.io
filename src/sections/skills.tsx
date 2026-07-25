"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Database,
  Layers,
  Network,
  Rocket,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { SiFlutter } from "react-icons/si";
import type { IconType } from "react-icons";
import { Reveal, SectionHeading } from "@/components/shared/section-heading";
import { SKILL_CATEGORIES } from "@/constants/site";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, LucideIcon | IconType> = {
  flutter: SiFlutter,
  backend: Database,
  architecture: Layers,
  state: Boxes,
  api: Network,
  tools: Terminal,
  deployment: Rocket,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & Technologies I Work With"
          description="A well-rounded toolkit spanning the entire Flutter development lifecycle — from UI to deployment."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, i) => {
            const Icon = CATEGORY_ICONS[category.id] ?? Layers;

            return (
              <Reveal key={category.id} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group glass h-full rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium text-foreground/90">{skill.name}</span>
                          <span className="text-xs font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className={cn(
                              "h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            )}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
