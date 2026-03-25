import { TechStackGrid } from "@/features/tech-stack/components/TechStackGrid";
import { cn } from "../../lib/utils";

export default function TechStackPage() {
  return ( 
     <div className={cn('container-custom', 'py-16', 'sm:py-20', 'md:py-24', 'min-h-screen')}>
      <header className={cn('max-w-3xl', 'mx-auto', 'mb-12', 'sm:mb-16', 'text-center')}>
        <h1 className={cn('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-bold', 'tracking-tight', 'mb-3', 'sm:mb-4')}>Tech Stack</h1>
        <p className={cn('text-base', 'sm:text-lg', 'text-muted-foreground')}>
          A comprehensive list of the technologies and tools I use to bring ideas to life.
        </p>
      </header>

      <TechStackGrid />
    </div>  
  );
}
