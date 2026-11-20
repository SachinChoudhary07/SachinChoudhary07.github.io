import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Accent } from "@/components/shared/section-header";
import { Stars } from "@/components/shared/stars";
import { ButtonLink } from "@/components/ui/button";
import { FEATURED_TESTIMONIAL, HERO, SITE, STATS } from "@/constants/site";

const delay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  const t = FEATURED_TESTIMONIAL;

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p
              className="rise inline-flex items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pr-4 pl-3 text-sm text-subtext"
              style={delay(0)}
            >
              <span className="flex size-2">
                <span className="size-2 rounded-full bg-ok" />
              </span>
              {HERO.availability}
            </p>

            <h1
              className="rise mt-7 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4.4rem]"
              style={delay(80)}
            >
              {HERO.headline.lead} <Accent>{HERO.headline.accent}</Accent>
            </h1>

            <div className="rise mt-7 flex max-w-2xl gap-4" style={delay(160)}>
              <Image
                src={SITE.photo}
                alt=""
                width={48}
                height={48}
                priority
                className="mt-1 size-12 shrink-0 rounded-full object-cover"
              />
              <p className="text-lg leading-relaxed text-pretty text-subtext">{HERO.sub}</p>
            </div>

            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(240)}>
              <ButtonLink href="#contact" size="lg">
                Get a free project estimate
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="#work" size="lg" variant="outline">
                See my work
                <ArrowDown />
              </ButtonLink>
            </div>
          </div>

          <figure
            className="rise self-end rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_12px_32px_-16px_rgba(0,0,0,0.12)] lg:col-span-4"
            style={delay(320)}
          >
            <div className="flex items-center justify-between">
              <Stars rating={t.rating} />
              <span className="label">Client review</span>
            </div>
            <blockquote className="mt-4 text-[1.05rem] leading-relaxed text-foreground">
              “{t.review}”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <span className="grid size-9 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                {t.name.charAt(0)}
              </span>
              <span className="text-sm">
                <span className="block font-medium">{t.name}</span>
                <span className="text-subtext">{t.project}</span>
              </span>
            </figcaption>
          </figure>
        </div>

        <dl
          className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 lg:grid-cols-4"
          style={delay(400)}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-background p-5 sm:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-subtext">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
