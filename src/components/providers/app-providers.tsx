"use client";

import { Toaster } from "sonner";
import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <Toaster theme="system" position="bottom-center" richColors closeButton />
    </ThemeProvider>
  );
}
