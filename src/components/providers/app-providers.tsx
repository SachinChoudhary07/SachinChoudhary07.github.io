"use client";

import { Toaster } from "sonner";
import type { ReactNode } from "react";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { ThemeProvider } from "./theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        {children}
        <Toaster
          theme="system"
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast: "glass border-white/10",
            },
          }}
        />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
