import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { CASE_STUDIES, MORE_WORK } from "@/constants/site";
import { cn } from "@/lib/utils";
import { CaseVisual } from "./case-visual";

export function Work() {
  return (
    <section id="work" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          label="Selected work"
          title={
            <>
              Products I&apos;ve built, <Accent>shipped and supported.</Accent>
            </>
          }
          intro="Six projects across healthcare, fitness, mobility, e-commerce, social and gaming. Each one started as a problem someone needed solved."
        />

        <div className="space-y-20 sm:space-y-28">
          {CASE_STUDIES.map((study, i) => (
            <article
              key={study.id}
              id={`work-${study.id}`}
              className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14"
            >
              <Reveal className={cn("lg:sticky lg:top-24 lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                <CaseVisual study={study} />
              </Reveal>

              <Reveal delay={80} className="lg:col-span-6">
                <p className="eyebrow">{study.context}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  {study.name}
                </h3>
                <p className="mt-3 text-lg text-subtext">{study.summary}</p>

                <dl className="mt-8 space-y-6 border-t border-border pt-6">
                  <div>
                    <dt className="text-sm font-medium text-faint">The problem</dt>
                    <dd className="mt-1.5 leading-relaxed">{study.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-faint">What I built</dt>
                    <dd className="mt-1.5 leading-relaxed">{study.built}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-faint">Key features</dt>
                    <dd className="mt-2">
                      <ul className="space-y-2">
                        {study.features.map((feature) => (
                          <li key={feature} className="flex gap-3 text-[0.95rem] text-subtext">
                            <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-faint">Stack</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {study.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 text-xs text-subtext"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                {study.links.length ? (
                  <div className="mt-7 flex flex-wrap gap-4">
                    {study.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        View on {link.label}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ))}
                  </div>
                ) : null}
              </Reveal>
            </article>
          ))}
        </div>

        <div id="more-work" className="mt-24 sm:mt-32">
          <Reveal className="mb-8 flex items-end justify-between gap-6">
            <h3 className="text-2xl font-semibold tracking-tight">More work</h3>
            <p className="eyebrow hidden sm:block">Apps, client builds &amp; open source</p>
          </Reveal>
          <Reveal as="ul" className="border-t border-border">
            {MORE_WORK.map((item) => {
              const content = (
                <>
                  <span className="font-medium sm:w-44 sm:shrink-0">{item.name}</span>
                  <span className="flex-1 text-[0.95rem] text-subtext">{item.description}</span>
                  <span className="hidden shrink-0 font-mono text-xs text-faint md:block md:w-52 md:text-right">
                    {item.tags.join(" · ")}
                  </span>
                  <span className="flex w-28 shrink-0 items-center gap-1 text-sm sm:justify-end">
                    {item.href ? (
                      <>
                        {item.linkLabel}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </>
                    ) : (
                      <span className="text-faint">Private</span>
                    )}
                  </span>
                </>
              );
              const rowClass =
                "flex flex-col gap-1.5 border-b border-border py-5 sm:flex-row sm:items-baseline sm:gap-6";
              return (
                <li key={item.name}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(rowClass, "group transition-colors hover:bg-muted/60 sm:-mx-3 sm:px-3")}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cn(rowClass, "sm:-mx-3 sm:px-3")}>{content}</div>
                  )}
                </li>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
