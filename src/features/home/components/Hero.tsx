"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { bio } from "@/lib/data";
import { cn } from "../../../lib/utils";

export const Hero = () => {
  return (
    <section className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'text-center', 'px-4')}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className={cn('text-4xl', 'md:text-6xl', 'font-bold', 'tracking-tight', 'text-foreground', 'mb-6')}>
          Hoda Nabeil<br className={cn('hidden', 'md:block')} />Frontend Engineer 
        </h1>
        <p className={cn('text-lg', 'md:text-xl', 'text-muted-foreground', 'mb-10', 'leading-relaxed')}>
          I build clean, minimal, and professional web experiences with a focus on 
          readability and user-centric design.
        </p>
        
        <div className={cn('flex', 'flex-col', 'sm:flex-row', 'gap-4', 'justify-center')}>
          <Button 
            render={<Link href="/projects" className={cn('flex', 'items-center', 'gap-2')} />} 
            size="lg" 
            className={cn('bg-primary', 'text-primary-foreground', 'hover:bg-primary/90')}
          >
            View Projects <ArrowRight className={cn('w-4', 'h-4')} />
          </Button>
          <Button 
            render={<a href={bio.cvUrl} download className={cn('flex', 'items-center', 'gap-2')} />} 
            variant="outline" 
            size="lg"
          >
            Download CV <Download className={cn('w-4', 'h-4')} />
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
