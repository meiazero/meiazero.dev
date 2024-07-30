import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 py-24 md:py-32">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            This page can &apos; t be found.
          </h1>
          <p className="mx-auto max-w-[400px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            You may have mistyped the address or the page may have moved.
          </p>
        </div>
      </div>
      <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
        Back to home <HomeIcon className="ms-2 size-4" />
      </Link>
    </div>
  );
}
