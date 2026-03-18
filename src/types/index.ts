export type ProjectCategory = 
  | 'HTML & CSS' 
  | 'HTML & CSS (Bootstrap)' 
  | 'HTML & Tailwind' 
  | 'React' 
  | 'Next.js';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  liveLink: string;
  githubLink: string;
  image?: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}
