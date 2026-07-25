"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks";

export function CustomCursor() {
  const isFine = useMediaQuery("(pointer: fine)");
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35 });
  const springY = useSpring(y, { stiffness: 500, damping: 35 });

  useEffect(() => {
    if (!isFine) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='hover']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isFine, x, y]);

  if (!isFine) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[90] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[89] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
        style={{ x: springX, y: springY }}
        animate={{
          width: hovering ? 54 : 34,
          height: hovering ? 54 : 34,
          opacity: 0.8,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
    </>
  );
}
