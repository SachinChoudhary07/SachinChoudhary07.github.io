import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { Stars } from "@/components/shared/stars";
import { TESTIMONIALS } from "@/constants/site";

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Client reviews"
          title="What clients said"
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="figure"
              key={t.id}
              delay={(i % 3) * 60}
              className="mb-4 break-inside-avoid rounded-2xl border border-border bg-surface p-6"
            >
              <Stars rating={t.rating} />
              <blockquote className="mt-4 leading-relaxed">“{t.review}”</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium">{t.name}</span>
                <span className="text-subtext">
                  {" "}
                  · {t.project}
                  {t.source ? ` · ${t.source}` : ""}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
