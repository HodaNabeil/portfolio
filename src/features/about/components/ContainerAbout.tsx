"use client";

import { AboutSummary } from "@/features/about/components/AboutSummary";
import { Experience } from "@/features/about/components/Experience";
import { bio } from "@/lib/data";
import { motion } from "framer-motion";

export const ContainerAbout = () => {
  return (
    <div className="container-custom py-16 sm:py-20 md:py-24 min-h-screen">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12 sm:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          About Me
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          {bio.intro}
        </p>
      </motion.header>
      
      <AboutSummary />

      <div className="mt-16 sm:mt-20 md:mt-24 border-t border-border/40 pt-12 sm:pt-16">
        <Experience />
      </div>
    </div>
  );
};
