import { BrandIcon } from "@/components/shared/brand-icon";
import { PROFILE_LINKS, SITE } from "@/constants/site";

const links = [
  { name: "upwork" as const, label: "Upwork", href: PROFILE_LINKS.upwork },
  { name: "linkedin" as const, label: "LinkedIn", href: PROFILE_LINKS.linkedin },
  { name: "github" as const, label: "GitHub", href: PROFILE_LINKS.github },
  { name: "medium" as const, label: "Medium", href: PROFILE_LINKS.medium },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-subtext sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Independent product developer, Indore, India.
        </p>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="hover:text-foreground"
            >
              <BrandIcon name={link.name} className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
