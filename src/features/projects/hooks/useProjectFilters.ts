import { useState, useMemo } from "react";
import { Project, ProjectCategory } from "@/types";
import { projects } from "../services/projectService";

export const useProjectFilters = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "React",
    "Next.js",
  ];

  return {
    activeCategory,
    setActiveCategory,
    filteredProjects,
    categories,
  };
};
