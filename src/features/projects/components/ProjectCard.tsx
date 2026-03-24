"use client";

import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "../../../lib/utils";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className={cn('flex', 'flex-col', 'h-full', 'border-muted', 'bg-card', 'hover:border-accent/50', 'transition-colors', 'overflow-hidden', 'group')}>
      <CardHeader className="p-0">
        <div className={cn('aspect-video', 'bg-muted', 'relative', 'group-hover:bg-muted/80', 'transition-colors', 'overflow-hidden')}>
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className={cn('object-cover', 'transition-transform', 'duration-500', 'group-hover:scale-110')}
            />
          ) : (
            <div className={cn('absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'opacity-20', 'group-hover:opacity-40', 'transition-opacity')}>
              <span className={cn('text-4xl', 'font-black', 'uppercase', 'tracking-widest')}>{project.category}</span>
            </div>
          )}
          {project.image && (
            <div className={cn('absolute', 'inset-0', 'bg-black/40', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'flex', 'items-center', 'justify-center')}>
               <span className={cn('text-white', 'font-bold', 'text-lg')}>View Project</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className={cn('p-4', 'flex-grow')}>
        <div className={cn('flex', 'justify-between', 'items-start', 'mb-4')}>
          <CardTitle className={cn('text-xl', 'font-bold')}>{project.title}</CardTitle>
          <Badge className={cn('text-xs', 'font-normal', 'gap-1', 'glass-card')}>{project.category}</Badge>
        </div>
        <p className={cn('text-muted-foreground', 'text-sm', 'line-clamp-3', 'mb-6', 'leading-relaxed')}>
          {project.description}
        </p>
        <div className={cn('flex', 'flex-wrap', 'gap-2')}>
          {project.techStack.map((tech) => (
            <Badge key={tech} className={cn('px-2', 'py-0', 'text-xs', 'font-normal', 'gap-1', 'glass-card')}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className={cn('p-4', 'flex', 'justify-between', 'gap-4')}>
        <Button render={<Link href={project.githubLink} className={cn('flex', 'items-center', 'gap-2')} />} variant="ghost" size="sm" className={cn('hover:text-primary', 'p-0', 'h-auto')}>
          <Github className={cn('w-4', 'h-4')} /> Code
        </Button>
        <Button render={<Link href={project.liveLink} className={cn('flex', 'items-center', 'gap-1')} />} variant="link" size="sm" className={cn('text-accent', 'p-0', 'h-auto', 'font-bold')}>
          Live Demo <ExternalLink className={cn('w-3', 'h-3')} />
        </Button>
      </CardFooter>
    </Card>
  );
};
