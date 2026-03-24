"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProjectFilters } from "../hooks/useProjectFilters";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ProjectList = () => {
  const { activeCategory, setActiveCategory, filteredProjects, categories } = useProjectFilters();

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-6 transition-all",
              activeCategory === cat ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            )}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-muted/20 rounded-lg">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};
