
import { ProjectList } from "@/features/projects/components/ProjectList";
import { cn } from "../../../lib/utils";

export const ContainerProjects = () => {
  return (
    <div className={cn('container-custom', 'py-16', 'sm:py-20', 'md:py-24', 'min-h-screen')}>
      <header className={cn('max-w-3xl', 'mx-auto', 'mb-12', 'sm:mb-16', 'text-center')}>
        <h1 className={cn('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-bold', 'tracking-tight', 'mb-3', 'sm:mb-4')}>Selected Work</h1>
        <p className={cn('text-base', 'sm:text-lg', 'text-muted-foreground')}>
          A collection of projects showcasing my technical expertise and design philosophy.
        </p>
      </header>
      
      <ProjectList />
    </div>
  );
};
