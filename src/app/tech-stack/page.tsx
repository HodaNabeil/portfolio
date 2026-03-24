import { TechStackGrid } from "@/features/tech-stack/components/TechStackGrid";
import { cn } from "../../lib/utils";

export default function TechStackPage() {
  return ( 
     <div className={cn('container-custom', 'py-24', 'min-h-screen')}>
      <header className={cn('max-w-3xl', 'mb-16')}>
        <h1 className={cn('text-4xl', 'font-bold', 'tracking-tight', 'mb-4')}>Tech Stack</h1>
        <p className={cn('text-lg', 'text-muted-foreground')}>
          A comprehensive list of the technologies and tools I use to bring ideas to life.
        </p>
      </header>

      <TechStackGrid />
    </div>  
  );
}
