import { Bot, LayoutDashboard, Smartphone, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { SERVICES } from "@/constants/site";

const ICONS: Record<string, LucideIcon> = {
  mobile: Smartphone,
  web: LayoutDashboard,
  ai: Bot,
  maintain: Wrench,
};

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Services"
          title="What I can build for you"
          intro="Most of my clients come with an idea or a half-finished app. Usually I end up building the app, the admin panel behind it, and then the next round of features."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id] ?? Smartphone;
            return (
              <Reveal
                key={service.id}
                delay={i * 60}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-border-strong sm:p-8"
              >
                <div>
                  <span className="grid size-11 place-items-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-accent-soft group-hover:text-accent">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-subtext">{service.outcome}</p>
                <ul className="mt-6 space-y-2.5 text-[0.95rem]">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-faint" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-7 text-sm text-faint">{service.stack}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
