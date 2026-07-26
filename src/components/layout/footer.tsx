"use client";

import Link from "next/link";
import { SocialIcon } from "@/components/shared/social-icon";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/constants/site";
import { smoothScrollTo } from "@/utils";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#home");
            }}
            className="font-display text-xl font-bold"
          >
            <span className="gradient-text">{SITE.name}</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-subtext">{SITE.tagline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(item.href);
                  }}
                  className="text-sm text-subtext transition hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground uppercase">
            Connect
          </h3>
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="rounded-full border border-white/10 p-2.5 text-subtext transition hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon name={link.icon} />
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-subtext">{SITE.location}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-1 block text-sm text-primary hover:underline"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-subtext">
        © {new Date().getFullYear()} {SITE.name}. Crafted with Flutter craftsmanship & Next.js.
      </div>
    </footer>
  );
}
