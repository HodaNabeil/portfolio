"use client";

import { motion } from "framer-motion";
import { getFeaturedProjects } from "@/features/projects/services/projectService";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const FeaturedProjects = () => {
  const projects = getFeaturedProjects();

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gradient">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my best work, focusing on performance, accessibility, and clean design.
            </p>
          </div>
          <Button render={<Link href="/projects" />} variant="outline" className="rounded-full">
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
