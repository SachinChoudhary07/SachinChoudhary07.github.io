"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/shared/social-icon";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SITE, SOCIAL_LINKS } from "@/constants/site";
import { useMounted } from "@/hooks";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...NAV_ITEMS.map((n) => n.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNav = (href: string) => {
    setOpen(false);
    smoothScrollTo(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[60] transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-background/70 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Primary"
        >
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onNav("#home");
            }}
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="gradient-text">{SITE.name.split(" ")[0]}</span>
            <span className="text-foreground">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNav(item.href);
                  }}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition",
                    active === item.href
                      ? "text-primary"
                      : "text-subtext hover:text-foreground"
                  )}
                >
                  {item.label}
                  {active === item.href ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {mounted ? (
              <Button
                size="icon"
                variant="ghost"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            ) : (
              <div className="h-10 w-10" />
            )}

            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed inset-y-0 right-0 z-50 w-[min(100%,20rem)] border-l border-white/10 bg-background/95 p-6 backdrop-blur-xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="mt-14 flex flex-col gap-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      onNav(item.href);
                    }}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-white/5"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="mt-6 flex gap-3">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.name}
                      className="rounded-full border border-white/10 p-2.5 text-subtext hover:text-primary"
                    >
                      <SocialIcon name={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
