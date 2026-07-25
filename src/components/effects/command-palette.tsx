"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Mail,
  Moon,
  Sun,
  Briefcase,
  FolderKanban,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/constants/site";
import { smoothScrollTo } from "@/utils";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) smoothScrollTo(href);
    else window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[95] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-card/95 shadow-2xl"
          >
            <Command label="Command palette" className="w-full">
              <Command.Input
                placeholder="Jump to section, toggle theme, open links…"
                className="w-full border-b border-white/10 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-subtext"
              />
              <Command.List className="max-h-80 overflow-auto p-2">
                <Command.Empty className="px-3 py-6 text-center text-sm text-subtext">
                  No results found.
                </Command.Empty>
                <Command.Group heading="Navigate" className="px-2 py-1 text-xs text-subtext">
                  <CommandItem icon={<Home className="h-4 w-4" />} onSelect={() => go("#home")}>
                    Home
                  </CommandItem>
                  {NAV_ITEMS.map((item) => (
                    <CommandItem
                      key={item.href}
                      icon={<FolderKanban className="h-4 w-4" />}
                      onSelect={() => go(item.href)}
                    >
                      {item.label}
                    </CommandItem>
                  ))}
                </Command.Group>
                <Command.Group heading="Actions" className="mt-2 px-2 py-1 text-xs text-subtext">
                  <CommandItem
                    icon={theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    onSelect={() => {
                      setTheme(theme === "dark" ? "light" : "dark");
                      setOpen(false);
                    }}
                  >
                    Toggle Theme
                  </CommandItem>
                  <CommandItem
                    icon={<Mail className="h-4 w-4" />}
                    onSelect={() => go("#contact")}
                  >
                    Contact Me
                  </CommandItem>
                  <CommandItem
                    icon={<Briefcase className="h-4 w-4" />}
                    onSelect={() => go("#projects")}
                  >
                    View Projects
                  </CommandItem>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function CommandItem({
  children,
  onSelect,
  icon,
}: {
  children: React.ReactNode;
  onSelect: () => void;
  icon: React.ReactNode;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground aria-selected:bg-primary/15"
    >
      <span className="text-primary">{icon}</span>
      {children}
    </Command.Item>
  );
}
