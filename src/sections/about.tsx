import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { ABOUT, EXPERIENCE, SITE, STACK_GROUPS, WRITING } from "@/constants/site";

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          label="About"
          title={
            <>
              A developer who thinks <Accent>like a product owner.</Accent>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={SITE.photo}
                alt={`${SITE.name}, freelance developer`}
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
            <p className="mt-4 text-sm text-subtext">{SITE.location}</p>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal className="space-y-5 text-lg leading-relaxed text-pretty">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-foreground" : "text-subtext"}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="eyebrow">Tech stack</h3>
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {STACK_GROUPS.map((group) => (
                  <div key={group.title} className="grid gap-2 py-4 sm:grid-cols-[8rem_1fr]">
                    <dt className="font-medium">{group.title}</dt>
                    <dd className="text-subtext">{group.items.join(" · ")}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="eyebrow">Experience</h3>
              <ol className="mt-4 divide-y divide-border border-y border-border">
                {EXPERIENCE.map((item) => (
                  <li key={item.company} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <span className="font-mono text-sm text-faint sm:pt-0.5">{item.period}</span>
                    <div>
                      <p className="font-medium">
                        {item.role} <span className="font-normal text-subtext">· {item.company}</span>
                      </p>
                      <p className="mt-1 text-[0.95rem] text-subtext">{item.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="mt-12">
              <h3 className="eyebrow">Open source &amp; writing</h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {WRITING.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-accent">
                        {item.title}
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-sm text-faint">
                        {item.meta}
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
