import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
};

export function SectionHeader({ index, label, title, intro, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-12 grid gap-6 md:mb-16 md:grid-cols-12", className)}>
      <p className="eyebrow md:col-span-3 md:pt-3">
        {index} / {label}
      </p>
      <div className="md:col-span-9">
        <h2 className="max-w-3xl text-[2rem] leading-[1.08] font-semibold tracking-[-0.03em] text-balance sm:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-subtext">{intro}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

/** Serif italic accent used inside headings. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal tracking-normal italic">{children}</em>;
}
