"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 right-0 left-0 z-[70] h-[2px] bg-transparent">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ scaleX: progress / 100 }}
      />
    </div>
  );
}
