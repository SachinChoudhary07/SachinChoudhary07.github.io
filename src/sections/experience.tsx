"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { EXPERIENCES } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Made an Impact"
          description="A track record of shipping production Flutter apps across fitness, healthcare, edtech, dating, and logistics."
        />

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:left-6"
            aria-hidden
          />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.08 * i }}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  className={cn(
                    "absolute top-1 left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-background sm:left-6",
                    i === 0 ? "bg-primary text-background" : "bg-card text-primary"
                  )}
                >
                  <Briefcase className="h-4 w-4" />
                </span>

                <div className="glass rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/30 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-right">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-subtext">
                        {exp.period}
                      </span>
                      <span className="text-xs text-subtext">{exp.type}</span>
                    </div>
                  </div>

                  <p className="mt-2 flex items-center gap-1.5 text-xs text-subtext">
                    <MapPin className="h-3.5 w-3.5" />
                    {exp.location}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-subtext">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {exp.achievements.length > 0 ? (
                    <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-4">
                      <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-accent uppercase">
                        <Award className="h-3.5 w-3.5" />
                        Key Achievements
                      </p>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((item) => (
                          <li key={item} className="text-sm text-subtext">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
