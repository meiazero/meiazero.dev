import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function SectionRoot({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={cn("bg-background text-foreground pb-10", className)}
      {...props}
    >
      {children}
    </section>
  );
}
