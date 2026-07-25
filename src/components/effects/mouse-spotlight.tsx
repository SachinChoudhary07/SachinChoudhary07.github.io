"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks";

export function MouseSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-40 mix-blend-screen"
      style={{
        background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(0,198,255,0.12), transparent 45%)`,
      }}
    />
  );
}
