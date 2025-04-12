import { SectionContent, SectionRoot } from "@/components/layouts/Section";

import { ProjectCard } from "./ProjectCard";

const PROJECTS = [
  {
    name: "S2T-Whisper",
    description:
      "A python project for processing and transcribing audio files using OpenAI's Whisper model.",
    url: "https://github.com/meiazero/s2t-whisper",
  },
] as const;

export function ProjectSection() {
  return (
    <SectionRoot>
      <SectionContent className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <div className='space-y-4'>
          {PROJECTS.map(project => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </SectionContent>
    </SectionRoot>
  );
}
