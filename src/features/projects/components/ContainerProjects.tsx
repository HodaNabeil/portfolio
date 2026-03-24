
import { ProjectList } from "@/features/projects/components/ProjectList";
import { cn } from "../../../lib/utils";

export const ContainerProjects = () => {
  return (
    <div className={cn('container-custom', 'py-24', 'min-h-screen')}>
      <header className={cn('max-w-3xl', 'mb-16')}>
        <h1 className={cn('text-4xl', 'font-bold', 'tracking-tight', 'mb-4')}>Selected Work</h1>
        <p className={cn('text-lg', 'text-muted-foreground')}>
          A collection of projects showcasing my technical expertise and design philosophy.
        </p>
      </header>
      
      <ProjectList />
    </div>
  );
};
