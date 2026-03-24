"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 bg-slate-100/50 dark:bg-slate-900/10 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <SectionTitle
            title="Featured Projects"
            subtitle="A curated selection of my recent works, showcasing innovative solutions and technical depth."
            align="left"
            className="mb-0"
          />
          <Button 
            className="hidden md:flex mt-8 glass-card border-none text-primary font-black uppercase tracking-widest shadow-2xl hover:scale-110 active:scale-95 transition-all text-sm h-14 px-10 rounded-2xl"
            render={
              <Link href="/projects" className="flex items-center">
                All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 px-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none glass-card h-full flex flex-col transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.4)] rounded-[2.5rem]">
                <div className="h-64 overflow-hidden relative group">
                  {/* Vibrant Project Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 group-hover:scale-110 ${i === 0 ? 'from-collection-blue-500 to-collection-blue-900' : i === 1 ? 'from-collection-purple-500 to-collection-purple-900' : 'from-collection-green-500 to-collection-green-900'} opacity-80 flex items-center justify-center`}>
                    <span className="text-8xl drop-shadow-2xl animate-float">
                      {project.category === 'Next.js' ? '🚀' : project.category === 'React' ? '⚛️' : '💻'}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 flex space-x-2">
                    <Badge className="bg-white/20 text-white border-none backdrop-blur-xl shadow-2xl px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="p-10 pb-4">
                  <h3 className="text-3xl font-black group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h3>
                </CardHeader>

                <CardContent className="p-10 pt-0 flex-grow">
                  <p className="text-muted-foreground mb-10 line-clamp-3 text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map(tech => (
                      <Badge key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-black text-[10px] uppercase tracking-tighter px-4 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-10 pt-0 flex justify-between gap-6">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center h-14 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs hover:bg-slate-800 active:scale-95 transition-all shadow-xl shadow-slate-950/20"
                  >
                    <Github className="mr-3 h-5 w-5" /> Source
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center h-14 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 active:scale-95 transition-all shadow-xl shadow-primary/30"
                  >
                    Live <ExternalLink className="ml-3 h-5 w-5" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center md:hidden mt-12 pb-10">
          <Button 
            className="w-full h-16 glass-card border-none text-primary font-black uppercase tracking-widest shadow-2xl rounded-2xl"
            render={
              <Link href="/projects" className="flex items-center justify-center">
                All Projects <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            }
          />
        </div>
      </Container>
    </section>
  );
}

