import * as React from "react";
import { cn } from "@/lib/utils";

export const fieldClass =
  "w-full rounded-xl border border-border bg-surface px-4 text-[0.95rem] text-foreground placeholder:text-faint outline-none transition-colors focus:border-foreground/40 aria-[invalid=true]:border-red-500/70";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldClass, "h-12", className)} {...props} />
  )
);
Input.displayName = "Input";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(fieldClass, "h-12 cursor-pointer appearance-none pr-10", className)}
      {...props}
    >
      {children}
    </select>
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-faint"
    >
      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  </div>
));
Select.displayName = "Select";
