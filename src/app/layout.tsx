import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AppProviders } from "@/components/providers/app-providers";
import { BackToTop } from "@/components/effects/back-to-top";
import { CommandPalette } from "@/components/effects/command-palette";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { MouseSpotlight } from "@/components/effects/mouse-spotlight";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE } from "@/constants/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Flutter Developer",
    "Mobile App Developer",
    "Dart",
    "Firebase",
    "Cross Platform",
    "Riverpod",
    SITE.name,
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.role}`,
    description: SITE.description,
    images: [SITE.ogImage],
    creator: "@sachinchoudhary",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/icon.png", sizes: "256x256", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050816" },
    { media: "(prefers-color-scheme: light)", color: "#f4f7fb" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${syne.variable} ${jetbrains.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd />
        <AppProviders>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <LoadingScreen />
          <ScrollProgress />
          <MouseSpotlight />
          <div className="noise-overlay" aria-hidden />
          <Navbar />
          <main id="main" className="relative z-10 flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
          <CommandPalette />
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
