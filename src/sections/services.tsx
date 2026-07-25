"use client";

import { motion } from "framer-motion";
import {
  Bug,
  CreditCard,
  Flame,
  MessagesSquare,
  Network,
  Palette,
  Rocket,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/shared/section-heading";
import { SERVICES } from "@/constants/site";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  flame: Flame,
  bug: Bug,
  zap: Zap,
  rocket: Rocket,
  palette: Palette,
  network: Network,
  messages: MessagesSquare,
  "credit-card": CreditCard,
};

export function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="How I Can Help"
          description="From first commit to store release — end-to-end Flutter expertise for your product."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon] ?? Smartphone;
            return (
              <Reveal key={service.id} delay={(i % 4) * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group glass relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 p-6 transition-colors hover:border-primary/40"
                >
                  <div
                    className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-4 font-display text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm text-subtext">{service.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
