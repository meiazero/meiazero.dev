import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function SectionTitle({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={cn("text-foreground text-2xl font-bold", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
