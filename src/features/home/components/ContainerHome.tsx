"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "./Hero";
import { TechStackPreview } from "./TechStackPreview";
import { FeaturedProjects } from "./FeaturedProjects";
import { bio } from "@/lib/data";

export const ContainerHome = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-0 overflow-hidden"
      >
        <Hero />
        <TechStackPreview />
        <FeaturedProjects />
        
        {/* Contact CTA */}
        <section className="py-24 bg-muted/30">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gradient">Let's work together.</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              I'm currently available for freelance projects and full-time opportunities. 
              If you have an idea, let's make it a digital reality.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href={bio.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 hover:scale-105 transform transition-transform"
              >
                {bio.phone}
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
