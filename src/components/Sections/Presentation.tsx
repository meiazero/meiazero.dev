import { ThemeToggle } from "@/components/ThemeToggle";
import { SectionContent, SectionRoot } from "@/components/layouts/Section";
import { LinkedInIcon } from "@/components/svgs/linkedin";
import { XIcon } from "@/components/svgs/x";

export function PresentationSection() {
  return (
    <SectionRoot className='space-y-4'>
      <SectionContent className='flex flex-row justify-between'>
        <div className='space-y-2'>
          <div className='flex flex-col items-start space-x-2 sm:flex-row sm:items-center'>
            <h1 className='text-3xl font-semibold'>Emanuel Ávila</h1>
            <h2 className='text-xl'>
              <a
                href='https://github.com/meiazero'
                target='_blank'
                rel='noreferrer'
              >
                [meiazero]
              </a>
            </h2>
          </div>

          <h2 className='text-muted-foreground text-lg'>Software Developer</h2>
        </div>

        <div className='flex flex-col-reverse items-center gap-4 sm:flex-row'>
          <a
            href='https://x.com/meiaz3ro'
            target='_blank'
            rel='noreferrer'
            title='X'
            className='hover:text-muted-foreground'
          >
            <XIcon className='size-5 sm:size-6' />
          </a>

          <a
            href='https://www.linkedin.com/in/meiazero'
            target='_blank'
            rel='noreferrer'
            title='LinkedIn'
            className='hover:text-muted-foreground'
          >
            <LinkedInIcon className='size-5 sm:size-6' />
          </a>
          <ThemeToggle />
        </div>
      </SectionContent>

      <SectionContent className='space-y-2 text-lg font-normal'>
        <p>
          Hey, I&apos;m Emanuel Ávila - a{" "}
          <span className='underline'>software developer</span> from Brazil who
          likes to build cool stuff, focusing on Developer Experience (DX) and
          Open Source Software (OSS).
        </p>
        <p>
          I&apos;m currently working on my master&apos;s degree in
          Teleinformatics Engineering at the Federal University of Ceará (UFC),
          on Postgraduate Program in Teleinformatics Engineering (PPGETI).
        </p>
      </SectionContent>
    </SectionRoot>
  );
}
