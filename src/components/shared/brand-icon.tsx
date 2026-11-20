import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaMedium, FaUpwork, FaWhatsapp } from "react-icons/fa6";
import type { ContactChannel } from "@/types";

type IconName = ContactChannel["id"] | "medium";

export function BrandIcon({ name, className }: { name: IconName; className?: string }) {
  switch (name) {
    case "whatsapp":
      return <FaWhatsapp className={className} aria-hidden />;
    case "linkedin":
      return <FaLinkedinIn className={className} aria-hidden />;
    case "github":
      return <FaGithub className={className} aria-hidden />;
    case "upwork":
      return <FaUpwork className={className} aria-hidden />;
    case "medium":
      return <FaMedium className={className} aria-hidden />;
    default:
      return <Mail className={className} aria-hidden />;
  }
}
