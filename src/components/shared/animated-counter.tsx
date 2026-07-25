"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function AnimatedCounter({
  value,
  suffix = "",
  className,
  duration = 2,
}: {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {inView ? <CountUp end={value} duration={duration} suffix={suffix} /> : `0${suffix}`}
    </span>
  );
}
