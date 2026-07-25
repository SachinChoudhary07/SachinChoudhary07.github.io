"use client";

import { SiGithub, SiInstagram, SiMedium, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  twitter: SiX,
  instagram: SiInstagram,
  medium: SiMedium,
  email: Mail,
} as const;

export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Mail;
  return <Icon className={cn("h-4 w-4", className)} aria-hidden />;
}
