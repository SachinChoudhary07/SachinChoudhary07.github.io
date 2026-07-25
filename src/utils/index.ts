export { cn, formatDate } from "@/lib/utils";

export function smoothScrollTo(href: string) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
