"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "./Hero";
import { TechStackPreview } from "./TechStackPreview";
import { FeaturedProjects } from "./FeaturedProjects";
import { bio } from "@/lib/data";
import { cn } from "../../../lib/utils";

export const ContainerHome = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn('flex', 'flex-col', 'gap-0', 'overflow-hidden')}
      >
        <Hero />
        <TechStackPreview />
        <FeaturedProjects />
        
        {/* Contact CTA */}
        <section className={cn('py-16', 'sm:py-20', 'md:py-24', 'bg-muted/30')}>
          <div className={cn('container-custom', 'text-center', 'px-4')}>
            <h2 className={cn('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'font-bold', 'tracking-tight', 'mb-4', 'sm:mb-6', 'text-gradient')}>Let's work together.</h2>
            <p className={cn('text-base', 'sm:text-lg', 'text-muted-foreground', 'mb-6', 'sm:mb-8', 'max-w-xl', 'mx-auto')}>
              I'm currently available for freelance projects and full-time opportunities. 
              If you have an idea, let's make it a digital reality.
            </p>
            <div className={cn('flex', 'flex-col', 'sm:flex-row', 'justify-center', 'gap-3', 'sm:gap-4')}>
              <a 
                href={bio.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className={cn('inline-flex', 'items-center', 'justify-center', 'rounded-md', 'text-sm', 'sm:text-base', 'font-medium', 'ring-offset-background', 'transition-colors', 'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-ring', 'focus-visible:ring-offset-2', 'disabled:pointer-events-none', 'disabled:opacity-50', 'bg-primary', 'text-primary-foreground', 'hover:bg-primary/90', 'h-10', 'sm:h-12', 'px-4', 'sm:px-6', 'py-2', 'hover:scale-105', 'transform', 'transition-transform')}
              >
                <span className={cn('hidden', 'sm:inline')}>Contact via WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
              <a 
                href="/contact"
                className={cn('inline-flex', 'items-center', 'justify-center', 'rounded-md', 'text-sm', 'sm:text-base', 'font-medium', 'ring-offset-background', 'transition-colors', 'focus-visible:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-ring', 'focus-visible:ring-offset-2', 'disabled:pointer-events-none', 'disabled:opacity-50', 'border', 'border-input', 'bg-background', 'hover:bg-accent', 'hover:text-accent-foreground', 'h-10', 'sm:h-12', 'px-4', 'sm:px-6', 'py-2', 'hover:scale-105', 'transform', 'transition-transform')}
              >
                <span className={cn('hidden', 'sm:inline')}>Send Message</span>
                <span className="sm:hidden">Message</span>
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
