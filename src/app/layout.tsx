import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";
import { ProviderStack } from "@/provider";
import "./globals.css";

const font = Font({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
  fallback: ["sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "meiazero.dev",
    template: "%s | meiazero.dev",
  },
  description: "The meiazero website",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={cn("antialiased", font.variable)}>
        <ProviderStack>{children}</ProviderStack>
      </body>
    </html>
  );
}
