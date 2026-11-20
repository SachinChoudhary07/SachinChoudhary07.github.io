import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
};

export function SectionHeader({ label, title, intro, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl md:mb-14", className)}>
      <p className="label">{label}</p>
      <h2 className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.03em] text-balance sm:text-[2.75rem]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-lg leading-relaxed text-pretty text-subtext">{intro}</p>
      ) : null}
    </Reveal>
  );
}

/** Serif italic accent. Used once, in the hero headline. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal tracking-normal italic">{children}</em>;
}
