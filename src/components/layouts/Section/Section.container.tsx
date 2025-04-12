import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "bg-background text-foreground px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
