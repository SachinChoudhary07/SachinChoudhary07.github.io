import Image from "next/image";
import type { CaseStudy } from "@/types";

/** Fixed-ratio frame so very different assets (banners, phone shots, logos) look consistent. */
export function CaseVisual({ study }: { study: CaseStudy }) {
  const { visual, name } = study;

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
      style={{ backgroundColor: visual.tone }}
    >
      {visual.kind === "cover" ? (
        <Image
          src={visual.images[0]}
          alt={`${name} app screens`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-contain"
        />
      ) : null}

      {visual.kind === "phones" ? (
        <div className="absolute inset-0 flex items-center justify-center gap-[4%] px-[6%] py-[7%]">
          {visual.images.map((src, i) => (
            <div
              key={src}
              className="relative h-full overflow-hidden rounded-[1.1rem] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]"
              style={{
                aspectRatio: "9 / 17",
                transform: visual.images.length === 3 && i !== 1 ? "scale(0.9)" : undefined,
              }}
            >
              <Image
                src={src}
                alt={`${name} screen ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 200px, 33vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      ) : null}

      {visual.kind === "posters" ? (
        <div className="absolute inset-0 flex items-center justify-center gap-[4%] px-[6%] py-[6%]">
          {visual.images.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${name} screenshots ${i + 1} full size`}
              className="relative h-full overflow-hidden rounded-lg shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-1"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src={src}
                alt={`${name} app screens, part ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
                className="object-contain"
              />
            </a>
          ))}
        </div>
      ) : null}

      {visual.kind === "logo" ? (
        <div className="absolute inset-0 grid place-items-center p-[12%]">
          <div className="relative h-full w-full">
            <Image
              src={visual.images[0]}
              alt={`${name} logo`}
              fill
              sizes="(min-width: 1024px) 420px, 80vw"
              className="object-contain mix-blend-multiply"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
