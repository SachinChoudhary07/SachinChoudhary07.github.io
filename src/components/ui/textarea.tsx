import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[140px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-subtext/70 outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";
