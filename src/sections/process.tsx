import { Reveal } from "@/components/shared/reveal";
import { Accent, SectionHeader } from "@/components/shared/section-header";
import { PROCESS } from "@/constants/site";

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          label="How I work"
          title={
            <>
              A simple process, <Accent>no surprises.</Accent>
            </>
          }
          intro="You always know what's being built, what it costs and when you'll see it."
        />

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70} className="flex flex-col bg-background p-7">
              <span className="font-serif text-5xl leading-none text-accent italic">{i + 1}</span>
              <h3 className="mt-8 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-subtext">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
