import type { Metadata } from "next";
import { Geist as Font } from "next/font/google";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import { env } from "@/env.mjs";
import { cn } from "@/lib/utils";
import { ProviderStack } from "@/provider";
import "@/styles/globals.css";

const font = Font({
  style: "normal",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: true,
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "meiazero",
    template: "%s | meiazero.dev",
  },
  description: "The meiazero website",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' dir='ltr' suppressHydrationWarning>
      {env.NODE_ENV === "development" && (
        <Script
          crossOrigin='anonymous'
          src='//unpkg.com/react-scan/dist/auto.global.js'
        />
      )}
      <body
        className={cn(
          "bg-background container mx-auto min-h-screen scroll-smooth antialiased",
          font.className
        )}
      >
        <ProviderStack>{children}</ProviderStack>
      </body>
    </html>
  );
}
