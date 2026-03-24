"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/tech-stack";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Rocket, 
  Terminal, 
  Cpu, 
  Layout, 
  Palette, 
  Layers, 
  Workflow, 
  Settings, 
  Globe, 
  Cloud, 
  Search, 
  Box, 
  Database, 
  RefreshCcw, 
  CreditCard, 
  Zap, 
  Mail,
  Github,
  Monitor
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TechStack() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/20">
      <Container>
        <SectionTitle
          title="Mastered Technologies"
          subtitle="A comprehensive toolkit of modern technologies I leverage to build state-of-the-art web applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 pt-10"
        >
          {techStack.map((tech) => {
            const IconComponent = getTechIcon(tech.name);
            const colorClass = getTechColor(tech.name);
            return (
              <motion.div key={tech.name} variants={itemVariants}>
                <Card className={`group relative overflow-hidden border-none glass-card hover:scale-110 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl ${colorClass}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8 flex flex-col items-center justify-center space-y-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-inner group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <IconComponent size={48} strokeWidth={1.5} className="group-hover:text-primary transition-colors" />
                    </div>
                    <p className="font-black text-center text-sm uppercase tracking-widest">{tech.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

function getTechColor(name: string) {
  const colors: Record<string, string> = {
    'React': 'hover:ring-2 hover:ring-collection-blue-500 shadow-collection-blue-500/10',
    'Next.js': 'hover:ring-2 hover:ring-primary shadow-primary/10',
    'TypeScript': 'hover:ring-2 hover:ring-collection-blue-500 shadow-collection-blue-500/10',
    'Tailwind CSS': 'hover:ring-2 hover:ring-collection-teal-500 shadow-collection-teal-500/10',
    'JavaScript (ES6)': 'hover:ring-2 hover:ring-collection-yellow-500 shadow-collection-yellow-500/10',
    'Figma': 'hover:ring-2 hover:ring-collection-purple-500 shadow-collection-purple-600/10',
    'Node.js': 'hover:ring-2 hover:ring-collection-green-500 shadow-collection-green-600/10',
    'Prisma': 'hover:ring-2 hover:ring-collection-blue-500 shadow-collection-blue-600/10',
    'Redux': 'hover:ring-2 hover:ring-collection-purple-500 shadow-collection-purple-700/10',
    'React Query': 'hover:ring-2 hover:ring-collection-red-500 shadow-collection-red-600/10',
  };
  return colors[name] || 'hover:ring-2 hover:ring-primary shadow-primary/10';
}


function getTechIcon(name: string) {
  const icons: Record<string, any> = {
    'React': Cpu,
    'Next.js': Rocket,
    'TypeScript': Code2,
    'JavaScript (ES6)': Terminal,
    'CSS': Palette,
    'Tailwind CSS': Layers,
    'Bootstrap': Layout,
    'Redux': RefreshCcw,
    'Zustand': Workflow,
    'Material UI': Palette,
    'Figma': Monitor,
    'Git': Github,
    'REST API': Globe,
    'Google Cloud': Cloud,
    'SEO': Search,
    'Webpack': Box,
    'Prisma': Database,
    'Node.js': Settings,
    'Stripe': CreditCard,
    'React Query': Zap,
    'Postman': Mail,
    'Docker': Box,
    'Shadcn UI': Layout,
    'GitHub': Github,
  };
  return icons[name] || Code2;
}
