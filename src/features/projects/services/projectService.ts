import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Simple Arabic Code",
    description: "An Arabic Learning Management System (LMS) platform built with Next.js, providing educational content and interactive learning experiences.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Next.js",
    image: "/img/image.png",
    liveLink: "https://www.simplearabcode.org",
    githubLink: "https://github.com/HodaNabeil",
    featured: true,
  },
    {
    id: "2",
    title: "Simple Arabic Code - Admin LMS",
    description: "A professional admin dashboard for managing the Simple Arabic Code LMS platform. Features include course management, student progress tracking, and interactive analytics.",
    techStack: ["React", "TypeScript", "Zustand", "Material UI", "React Query"],
    category: "React",
    image: "/img/dashborad-lms.png",
    liveLink: "https://github.com/HodaNabeil",
    githubLink: "https://github.com/HodaNabeil/LMS-admin-simple-arab-code",
    featured: true,
  },

  {
    id: "6",
    title: "Al-Mufakir AI Platform",
    description: "An innovative AI-powered educational platform that uses artificial intelligence to personalize learning experiences and content delivery.",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
    category: "Next.js",
    image: "/img/almfkr.png",
    liveLink: "https://almfkr.sa/",
    githubLink: "https://github.com/HodaNabeil/almfkr-front-end",
    featured: true,
  },
  
  {
    id: "4",
    title: "Hospital Management System",
    description: "A comprehensive healthcare management platform for handling patient records, appointments, and medical staff workflows.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "React Query"],
    category: "React",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    liveLink: "https://github.com/HodaNabeil",
    githubLink: "https://github.com/HodaNabeil/Hospital-system",
    featured: true,
  },
  {
    id: "5",
    title: "Real Estate Platform",
    description: "A modern real estate marketplace for browsing, listing, and managing property sales and rentals with advanced search filters.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "React",
    image: "/img/maser.png",
    liveLink: "https://github.com/HodaNabeil",
    githubLink: "https://github.com/HodaNabeil/Real-Estate-Platform",
    featured: true,
  },
  {
    id: "3",
    title: "Food E-Commerce Platform",
    description: "A full-featured food delivery and e-commerce platform with real-time inventory management and Stripe integration.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
    liveLink: "https://github.com/HodaNabeil",
    githubLink: "https://github.com/HodaNabeil/food-full-stack",
    featured: true,
  },
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getAllProjects = () => projects;
export const getProjectsByCategory = (category: string) => 
  category === "All" ? projects : projects.filter(p => p.category === category);
