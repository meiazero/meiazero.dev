import { ThemeToggle } from "@/components/ThemeToggle";
import { SectionContent, SectionRoot } from "@/components/layouts/Section";
import { LinkedInIcon } from "@/components/svgs/linkedin";
import { XIcon } from "@/components/svgs/x";

export function PresentationSection() {
  return (
    <SectionRoot className='space-y-4'>
      <SectionContent className='flex flex-row justify-between'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-semibold'>Emanuel Avila</h1>
          <h2 className='text-muted-foreground text-lg underline'>
            Software Developer
          </h2>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <a
            href='https://x.com/meiaz3ro'
            target='_blank'
            rel='noreferrer'
            title='X'
            className='hover:text-muted-foreground'
          >
            <XIcon className='size-6' />
          </a>

          <a
            href='https://www.linkedin.com/in/meiazero'
            target='_blank'
            rel='noreferrer'
            title='LinkedIn'
            className='hover:text-muted-foreground'
          >
            <LinkedInIcon className='size-6' />
          </a>
          <ThemeToggle />
        </div>
      </SectionContent>

      <SectionContent>
        <p className='max-w-md text-lg'>
          Passionate about technology, open source, and focused on creating
          innovative products.
        </p>
      </SectionContent>
    </SectionRoot>
  );
}
