import { Project, Experience, TechStackItem, NavItem, SocialLink } from "@/types";

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
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and Stripe integration.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Prisma", "Stripe"],
    category: "Next.js",
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "SaaS Dashboard",
    description: "Analytics dashboard for a B2B SaaS product with complex data visualization using Recharts.",
    techStack: ["React", "TypeScript", "Zustand", "Material UI", "React Query"],
    category: "React",
    image: "/projects/dashboard.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Portfolio v1",
    description: "A clean and modern portfolio website showcasing personal branding and projects.",
    techStack: ["HTML", "Tailwind", "JavaScript"],
    category: "HTML & Tailwind",
    image: "/projects/portfolio-v1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "4",
    title: "Corporate Landing Page",
    description: "A responsive landing page for a law firm built with Bootstrap and custom CSS.",
    techStack: ["HTML", "CSS", "Bootstrap"],
    category: "HTML & CSS (Bootstrap)",
    image: "/projects/corporate.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "5",
    title: "Creative Agency Site",
    description: "Highly interactive website for a creative agency with custom animations.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "HTML & CSS",
    image: "/projects/agency.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Engineer",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy React application to Next.js App Router, resulting in a 40% improvement in LCP.",
      "Developed and maintained a company-wide design system using Tailwind CSS and Radix UI.",
      "Mentored junior developers and conducted code reviews to ensure high code quality and best practices.",
    ],
  },
  {
    id: "2",
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2019 - 2021",
    description: [
      "Built responsive web applications using React and Redux for various clients in the fintech industry.",
      "Optimized website performance by implementing lazy loading, code splitting, and image optimization.",
      "Collaborated with UX designers to translate Figma designs into pixel-perfect, accessible components.",
    ],
  },
  {
    id: "3",
    company: "Startup Hub",
    position: "Junior Web Developer",
    period: "2017 - 2019",
    description: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript.",
      "Integrated RESTful APIs and managed state across complex user flows.",
      "Ensured cross-browser compatibility and mobile responsiveness for all projects.",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    platform: "YouTube",
    url: "https://youtube.com/@yourchannel",
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/yourprofile",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourhandle",
  },
];

export const bio = {
  name: "John Doe",
  title: "Senior Frontend Engineer & UI/UX Designer",
  intro: "I build high-performance, accessible, and visually stunning web experiences. Specialized in React and Next.js ecosystem with a passion for clean code and user-centric design.",
  fullBio: "With over 6 years of experience in the industry, I have honed my skills in modern web technologies. My approach combines technical excellence with a deep understanding of design principles. I believe in writing scalable, maintainable code and staying ahead of the curve with emerging trends. Beyond coding, I'm passionate about contributing to open-source and mentoring the next generation of developers.",
  goals: "Currently focused on mastering cloud-native architectures and exploring the intersection of AI and frontend development. My goal is to create tools that empower developers and enhance user experiences worldwide.",
};
