import { Reveal } from "@/components/shared/reveal";
import { SectionHeader } from "@/components/shared/section-header";
import { EstimatorTool } from "./estimator-tool";

export function Estimator() {
  return (
    <section id="estimator" className="border-t border-border bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="AI project estimator"
          title="Get a rough plan for your idea in a minute"
          intro="Describe what you want to build. You'll get a first-version plan with features, milestones and a budget range. It runs on an AI model I set up for this site, the same kind of feature I can build into your product."
        />
        <Reveal>
          <EstimatorTool />
        </Reveal>
        <Reveal className="mt-8">
          <p className="text-subtext">
            Want something like this on your own website, to qualify leads or answer customers?{" "}
            <a href="#contact" className="font-medium text-foreground underline underline-offset-4">
              I can build one for your business.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
