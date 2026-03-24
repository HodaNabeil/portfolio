"use client";

import { AboutSummary } from "@/features/about/components/AboutSummary";
import { Experience } from "@/features/about/components/Experience";
import { bio } from "@/lib/data";
import { motion } from "framer-motion";

export const ContainerAbout = () => {
  return (
    <div className="container-custom py-24 min-h-screen">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          {bio.intro}
        </p>
      </motion.header>
      
      <AboutSummary />

      <div className="mt-24 border-t border-border/40 pt-16">
        <Experience />
      </div>
    </div>
  );
};
