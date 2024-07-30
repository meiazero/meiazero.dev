import AnimateEnter from "@/components/animate-enter";
import { LinkedInIcon } from "@/components/svgs/linkedin";
import { XIcon } from "@/components/svgs/x";

export default function Page() {
  return (
    <main className="container flex flex-col justify-center px-6 sm:px-8 pt-10">
      <AnimateEnter delay={0.4}>
        <header className="space-y-4">
          <div className="flex flex-row justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold">Emanuel Avila</h1>
              <h2 className="text-lg text-muted-foreground underline">
                Software Developer
              </h2>
            </div>

            <div className="flex flex-row items-center gap-4">
              <a
                href="https://x.com/meiaz3ro"
                target="_blank"
                rel="noreferrer"
                title="X"
                className="hover:text-muted-foreground"
              >
                <XIcon className="size-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/meiazero"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="hover:text-muted-foreground"
              >
                <LinkedInIcon className="size-6" />
              </a>
            </div>
          </div>

          <p className="text-lg max-w-md">
            Passionate about technology, open source, and focused on creating
            innovative products.
          </p>
        </header>
      </AnimateEnter>
    </main>
  );
}
