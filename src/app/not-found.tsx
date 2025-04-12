import type { Metadata } from "next";
import Link from "next/link";

import { HomeIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
export const dynamic = "force-static";

/**
 * Generate the metadata with dynamic information.
 *
 * Read more about the Dynamic Metadata here:
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export function generateMetadata(): Metadata {
  return {
    title: "Page not found",
  };
}

export default function NotFoundPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 py-24 md:py-32'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <div className='space-y-8'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            This page can &apos; t be found.
          </h1>
          <p className='mx-auto leading-relaxed'>
            You may have mistyped the address or the page may have moved.
          </p>
        </div>
      </div>
      <Link href='/' className={cn(buttonVariants({ variant: "outline" }))}>
        Back to home <HomeIcon className='ms-2 size-4' />
      </Link>
    </div>
  );
}
