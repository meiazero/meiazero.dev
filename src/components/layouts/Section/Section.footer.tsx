import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export function SectionFooter({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn("border-border text-foreground border-t pt-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
