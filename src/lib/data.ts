import {
  Project,
  Experience,
  TechStackItem,
  NavItem,
  SocialLink,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const techStack: TechStackItem[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript (ES6)", icon: "javascript" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Redux", icon: "redux" },
  { name: "Zustand", icon: "zustand" },
  { name: "Material UI", icon: "mui" },
  { name: "Figma", icon: "figma" },
  { name: "Git", icon: "git" },
  { name: "REST API", icon: "rest" },
  { name: "Google Cloud", icon: "gcp" },
  { name: "SEO", icon: "seo" },
  { name: "Webpack", icon: "webpack" },
  { name: "Prisma", icon: "prisma" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Stripe", icon: "stripe" },
  { name: "React Query", icon: "react-query" },
  { name: "Postman", icon: "postman" },
  { name: "Docker", icon: "docker" },
  { name: "Shadcn UI", icon: "shadcn" },
  { name: "GitHub", icon: "github" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Full-Stack E-Commerce Platform",
    description:
      "A comprehensive e-commerce application built with Next.js, featuring SSR/SSG for optimal performance, Stripe payment integration, and Prisma ORM for management.",
    techStack: ["Next.js", "React", "TypeScript", "Stripe", "Prisma", "Tailwind"],
    category: "Next.js",
    image: "/projects/ecommerce.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/HodaNabeil",
    featured: true,
  },
  {
    id: "2",
    title: "Admin Analytics Dashboard",
    description:
      "A security-focused data visualization dashboard with token-based authentication and full CRUD functionality for streamlined user and product management.",
    techStack: ["React", "React Query", "TypeScript", "Zustand", "Tailwind"],
    category: "React",
    image: "/projects/dashboard.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/HodaNabeil",
    featured: true,
  },
  {
    id: "3",
    title: "Responsive Real Estate App",
    description:
      "A high-performance real estate platform that improved user engagement by 25% through intuitive UI/UX and dynamic content delivery.",
    techStack: ["React", "JavaScript", "Tailwind", "Node.js"],
    category: "React",
    image: "/projects/portfolio-v1.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/HodaNabeil",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Simple Arab Code",
    role: "Frontend Developer",
    period: "Oct 2025 - Present",
    description: [
      "Architected and engineered a scalable end-to-end Learning Management System (LMS), supporting initial launch and user onboarding.",
      "Developed a robust Admin Dashboard with custom workflows for course management, reducing content publishing time for instructors.",
      "Optimized application performance and SEO, achieving a 30% improvement in Lighthouse scores via Next.js SSR/SSG strategies.",
      "Maintained a clean and maintainable codebase using SOLID principles and modular architecture.",
    ],
  },
  {
    id: "2",
    company: "Future Solutions",
    role: "Frontend Developer",
    period: "Oct 2024 - Oct 2025",
    description: [
      "Developed and launched a responsive real estate web application, increasing property listing engagement by 25%.",
      "Integrated Node.js backend services for real-time data updates and improved loading speeds across all devices.",
      "Collaborated on feature enhancements and bug fixes, ensuring 100% adherence to project timelines.",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/HodaNabeil",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/hoda-nabeil-144094225",
  },
];

export const bio = {
  name: "Hoda Nabeil",
  title: "Frontend Developer",
  email: "hodanabeil67@gmail.com",
  phone: "01123189372",
  whatsapp: "https://wa.me/201123189372",
  cvUrl: "/cv/Hoda_Nabeil-2.pdf",
  location: "Cairo, Egypt",
  education: "Bachelor of Computer Science, Cairo University (2020 - 2024)",
  intro:
    "I’m a passionate Front-End Developer with a strong focus on building clean, responsive, and high-performance web applications. I specialize in modern JavaScript (ES6+), React.js, and Tailwind CSS, and I enjoy transforming ideas into intuitive and engaging user experiences.",
  fullBio:
    "I have hands-on experience working on real-world projects, including e-commerce platforms, dashboards, and interactive web applications. Through these projects, I’ve developed a solid understanding of component-based architecture, state management, and writing scalable, maintainable code. I’m continuously learning and improving my skills, with a current focus on advanced JavaScript concepts, performance optimization, and modern tools like Next.js and TypeScript. I’m also interested in full-stack development and expanding my knowledge in backend technologies.",
  goals:
    "Beyond coding, I care deeply about design quality, user experience, and writing clean, readable code. I enjoy working in collaborative environments where I can learn from others, contribute effectively, and build impactful products.",
};
