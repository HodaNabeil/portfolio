import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing an e-commerce platform, featuring real-time data visualization and product management.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "Next.js",
    liveLink: "https://demo.example.com",
    githubLink: "https://github.com/example/ecommerce-dashboard",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Portfolio",
    description: "A clean and modern portfolio website built with smooth animations and responsive design.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    category: "React",
    liveLink: "https://portfolio.example.com",
    githubLink: "https://github.com/example/portfolio",
    featured: true,
  },
  {
    id: "3",
    title: "Task Management App",
    description: "A productivity tool for managing tasks across teams with real-time updates.",
    techStack: ["Next.js", "Zustand", "Tailwind"],
    category: "Next.js",
    liveLink: "https://tasks.example.com",
    githubLink: "https://github.com/example/tasks",
    featured: true,
  },
  {
    id: "4",
    title: "Landing Page with Bootstrap",
    description: "A high-conversion landing page built with standard HTML and Bootstrap.",
    techStack: ["HTML", "CSS", "Bootstrap"],
    category: "HTML & CSS (Bootstrap)",
    liveLink: "https://bootstrap-demo.example.com",
    githubLink: "https://github.com/example/bootstrap-landing",
  },
  {
    id: "5",
    title: "Responsive Blog Template",
    description: "A mobile-first blog layout focused on performance and readability.",
    techStack: ["HTML", "Tailwind CSS"],
    category: "HTML & Tailwind",
    liveLink: "https://tailwind-blog.example.com",
    githubLink: "https://github.com/example/tailwind-blog",
  }
];
