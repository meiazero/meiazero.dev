interface ProjectCardProps {
  name: string;
  description: string;
  url?: string;
}

export function ProjectCard({ name, description, url }: ProjectCardProps) {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='hover:bg-muted block rounded-sm border p-4 transition-colors delay-75'
    >
      <h3 className='font-semibold'>{name}</h3>
      <p className='text-muted-foreground pt-2 text-justify'>{description}</p>
    </a>
  );
}
