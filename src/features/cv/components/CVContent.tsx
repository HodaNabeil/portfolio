"use client";

import { Download, ExternalLink, Eye, FileText } from "lucide-react";
import { bio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CvModal } from "@/components/ui/cv-modal";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const CVContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={cn('max-w-6xl', 'mx-auto', 'px-3', 'sm:px-4', 'py-8', 'sm:py-12', 'space-y-12', 'sm:space-y-16')}>
      {/* Premium Header/Intro */}
      <div className={cn('flex', 'flex-col', 'lg:flex-row', 'lg:items-end', 'justify-between', 'gap-6', 'sm:gap-8')}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={cn('space-y-3', 'sm:space-y-4')}
        >
          <div className={cn('flex', 'items-center', 'gap-3')}>
             <div className={cn('w-8', 'sm:w-12', 'h-[2px]', 'bg-accent')} />
             <span className={cn('text-accent', 'font-bold', 'uppercase', 'tracking-[0.2em]', 'sm:tracking-[0.3em]', 'text-xs')}>Curriculum Vitae</span>
          </div>
          <h1 className={cn('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'lg:text-7xl', 'font-black', 'tracking-tighter')}>
            The <span className="text-accent">Blueprint</span> <br />
            of My Career
          </h1>
          <p className={cn('text-muted-foreground', 'text-base', 'sm:text-lg', 'max-w-xl', 'leading-relaxed')}>
            A comprehensive look at my professional journey, technical expertise, and the value I've delivered over the years. Available for download in A4 PDF format.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn('flex', 'flex-wrap', 'gap-3', 'sm:gap-4')}
        >
          <Button
            size="lg"
            variant="outline"
            className={cn('h-12', 'sm:h-14', 'lg:h-16', 'px-4', 'sm:px-6', 'lg:px-8', 'rounded-xl', 'sm:rounded-2xl', 'border-white/10', 'hover:bg-white/5', 'font-bold', 'uppercase', 'tracking-widest', 'text-xs', 'transition-all')}
            render={
              <a href={bio.cvUrl} download={`CV_${bio.name.replace(' ', '_')}.pdf`} />
            }
          >
            <Download className={cn('w-3', 'h-3', 'sm:w-4', 'sm:h-4', 'mr-2', 'sm:mr-3')} /> 
            <span className={cn('hidden', 'sm:inline')}>Get PDF Copy</span>
            <span className="sm:hidden">PDF</span>
          </Button>
          
          <Button
            size="lg"
            className={cn('h-12', 'sm:h-14', 'lg:h-16', 'px-4', 'sm:px-6', 'lg:px-8', 'rounded-xl', 'sm:rounded-2xl', 'bg-accent', 'text-white', 'font-bold', 'uppercase', 'tracking-widest', 'text-xs', 'shadow-[0_20px_40px_-10px_rgba(var(--accent),0.3)]', 'hover:shadow-[0_25px_50px_-12px_rgba(var(--accent),0.5)]', 'hover:-translate-y-1', 'transition-all')}
            onClick={() => setIsModalOpen(true)}
          >
            <Eye className={cn('w-3', 'h-3', 'sm:w-4', 'sm:h-4', 'mr-2', 'sm:mr-3')} /> 
            <span className={cn('hidden', 'sm:inline')}>Full Experience</span>
            <span className="sm:hidden">View</span>
          </Button>
        </motion.div>
      </div>

      {/* Premium CV Modal */}
      <CvModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

