import type { Metadata } from "next";

import { PresentationSection } from "@/components/Sections/Presentation";
import { ProjectSection } from "@/components/Sections/Projects";

/**
 * Force the page to be static and only change with a new build.
 *
 * read more about the Route Segment Config here:
 * https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 * 'auto' | 'error' | 'force-static' | 'force-dynamic'
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
    title: "Home",
  };
}

// TODO: Add new sections like:
// - Projects
// - Tecnical Stack
// - Experience
// - Degrees

export default function HomePage() {
  return (
    <main className='mx-auto flex max-w-5xl flex-col justify-center px-6 pt-10 sm:px-8'>
      <PresentationSection />
      <ProjectSection />
    </main>
  );
}
