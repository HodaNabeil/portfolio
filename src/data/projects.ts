import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Simple Arabic Code",
    description: "An Arabic Learning Management System (LMS) platform built with Next.js, providing educational content and interactive learning experiences.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Next.js",
    liveLink: "https://www.simplearabcode.org",
    githubLink: "#",
    image: "/img/image.png",
    featured: true,
  },

  {
    id: "2",
    title: "Simple Arabic Code - Admin LMS",
    description: "A professional admin dashboard for managing the Simple Arabic Code LMS platform. Features include course management and analytics.",
    techStack: ["React", "TypeScript", "Zustand", "Material UI"],
    category: "React",
    image: "/img/dashborad-lms.png",
    liveLink: "https://portfolio.example.com",
    githubLink: "https://github.com/HodaNabeil/LMS-admin-simple-arab-code",
    featured: true,
  },


  {
    id: "3",
    title: "Hospital Management System",
    description: "A comprehensive healthcare management platform for handling patient records and appointments.",
    techStack: ["React", "TypeScript", "Tailwind"],
    category: "React",
    liveLink: "https://demo.example.com",
    githubLink: "https://github.com/HodaNabeil/Hospital-system",
    featured: true,
  },

  {
    id: "4",
    title: "Al-Mufakir AI Platform",
    description: "An AI-powered education platform for personalized learning.",
    techStack: ["Next.js", "AI", "Tailwind"],
    category: "Next.js",
    image: "/img/almfkr.png",
    liveLink: "https://almfkr.sa/",
    githubLink: "https://github.com/HodaNabeil/-almfkr-frontend",
    featured: true,
  },
    {
    id: "5",
    title: "Real Estate Platform",
    description: "A property marketplace with advanced search features and modern UI.",
    techStack: ["React", "TypeScript", "Tailwind"],
    category: "React",
    image: "/img/maser.png",
    liveLink: "https://demo.example.com",
    githubLink: "https://github.com/HodaNabeil/Real-Estate-Platform",
    featured: true,
  },
      {
    id: "6",
    title: "Food E-Commerce Platform",
    description: "A comprehensive dashboard and platform for managing a food e-commerce business, featuring real-time data visualization and order management.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    category: "Next.js",
    liveLink: "https://demo.example.com",
    githubLink: "https://github.com/HodaNabeil/food-full-stack",
    featured: true,
  },

];
