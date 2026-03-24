import { TechItem } from "@/types";

export const techStack: TechItem[] = [
  { name: "React", icon: "React", category: "Frontend" },
  { name: "Next.js", icon: "Nextjs", category: "Frontend" },
  { name: "TypeScript", icon: "Typescript", category: "Frontend" },
  { name: "JavaScript", icon: "Javascript", category: "Frontend" },
  { name: "CSS", icon: "CSS", category: "Frontend" },
  { name: "Tailwind", icon: "Tailwind", category: "Frontend" },
  { name: "Bootstrap", icon: "Bootstrap", category: "Frontend" },
  { name: "Redux", icon: "Redux", category: "Frontend" },
  { name: "Zustand", icon: "Zustand", category: "Frontend" },
  { name: "Material UI", icon: "MUI", category: "Frontend" },
  { name: "Shadcn UI", icon: "Shadcn", category: "Frontend" },
  { name: "Figma", icon: "Figma", category: "Tools" },
  { name: "Git", icon: "Git", category: "Tools" },
  { name: "Postman", icon: "Postman", category: "Tools" },
  { name: "Webpack", icon: "Webpack", category: "Tools" },
  { name: "Docker", icon: "Docker", category: "Tools" },
  { name: "REST API", icon: "REST", category: "Backend" },
  { name: "Node.js", icon: "Nodejs", category: "Backend" },
  { name: "Prisma", icon: "Prisma", category: "Backend" },
  { name: "Stripe", icon: "Stripe", category: "Other" },
  { name: "Google Cloud", icon: "GCP", category: "Other" },
  { name: "SEO", icon: "SEO", category: "Other" },
  { name: "React Query", icon: "Query", category: "Frontend" },
];

export const getTechStack = () => techStack;
export const getTechByCategory = (category: TechItem['category']) => 
  techStack.filter(t => t.category === category);
