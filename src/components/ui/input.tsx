import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground placeholder:text-subtext/70 outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
      className
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";
