import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function SectionContent({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("text-foreground mx-auto max-w-4xl", className)}
      {...props}
    >
      {children}
    </div>
  );
}
