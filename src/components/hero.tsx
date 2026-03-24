"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Sparkles } from "lucide-react";
import { bio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 min-h-[90vh] flex items-center">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 dark:bg-accent/10 rounded-full blur-[100px] -z-10 animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-collection-blue-500/10 dark:bg-collection-blue-500/5 rounded-full blur-[150px] -z-10 rotate-45" />

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-primary font-bold uppercase tracking-wider text-xs"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>Open for new opportunities</span>
          </motion.div>

          <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            I build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-collection-blue-500 to-accent bg-[length:200%_auto] animate-shine">
              Digital Experiences
            </span>
            <br />
            that matter.
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
            Frontend Engineer specializing in <span className="text-foreground font-bold">React & Next.js</span>. I transform complex ideas into elegant, high-performance web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Button
              className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 active:scale-95 transition-all rounded-2xl group"
              render={
                <Link href="/projects" className="flex items-center">
                  Explore Work <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              }
            />
            <Button
              variant="outline"
              className="h-16 px-10 text-xl border-2 glass-card hover:bg-muted active:scale-95 transition-all rounded-2xl"
              render={
                <a href={bio.cvUrl} download="HodaNabeil_CV.pdf" className="flex items-center">
                  <Download className="mr-2" size={22} /> Resume
                </a>
              }
            />
          </div>

          <div className="flex items-center space-x-12 pt-10">
            <div className="group cursor-default">
              <p className="text-4xl font-black text-primary group-hover:scale-110 transition-transform tracking-tighter">2+</p>
              <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Years Exp.</p>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="group cursor-default">
              <p className="text-4xl font-black text-accent group-hover:scale-110 transition-transform tracking-tighter">50+</p>
              <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Projects</p>
            </div>
            <div className="w-px h-12 bg-border/50" />
            <div className="group cursor-default">
              <p className="text-4xl font-black text-collection-blue-500 group-hover:scale-110 transition-transform tracking-tighter">100%</p>
              <p className="text-muted-foreground font-bold text-xs uppercase tracking-widest">Dedication</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="relative lg:ml-auto"
        >
          {/* Main Image Container */}
          <div className="relative z-10 w-full max-w-[500px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] ring-1 ring-white/20 animate-float">
            <Image 
              src="/img/1771452192500.png"
              alt="Hoda Nabeil"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/30 rounded-full blur-[80px] -z-0 animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/30 rounded-full blur-[80px] -z-0 animate-pulse [animation-delay:1.5s]" />
          
          {/* Floating Skill Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-8 p-5 glass-card rounded-[2rem] shadow-2xl border-white/40 hidden sm:flex items-center space-x-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-collection-blue-500 flex items-center justify-center text-white text-xl">⚛️</div>
            <span className="font-black text-sm tracking-tight">React Expert</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-1/4 -left-12 p-5 glass-card rounded-[2rem] shadow-2xl border-white/40 hidden sm:flex items-center space-x-3 z-20"
          >
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-xl">🚀</div>
            <span className="font-black text-sm tracking-tight">Next.js Guru</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
