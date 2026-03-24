"use client";

import { Download, ExternalLink, Eye, FileText } from "lucide-react";
import { bio } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CvModal } from "@/components/ui/cv-modal";
import { motion } from "framer-motion";

export const CVContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Premium Header/Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
             <div className="w-12 h-[2px] bg-accent" />
             <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs">Curriculum Vitae</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            The <span className="text-accent">Blueprint</span> <br />
            of My Career
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            A comprehensive look at my professional journey, technical expertise, and the value I've delivered over the years. Available for download in A4 PDF format.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <Button
            size="lg"
            variant="outline"
            className="h-16 px-8 rounded-2xl border-white/10 hover:bg-white/5 font-bold uppercase tracking-widest text-xs transition-all"
            render={
              <a href={bio.cvUrl} download={`CV_${bio.name.replace(' ', '_')}.pdf`} />
            }
          >
            <Download className="w-4 h-4 mr-3" /> Get PDF Copy
          </Button>
          
          <Button
            size="lg"
            className="h-16 px-8 rounded-2xl bg-accent text-white font-bold uppercase tracking-widest text-xs shadow-[0_20px_40px_-10px_rgba(var(--accent),0.3)] hover:shadow-[0_25px_50px_-12px_rgba(var(--accent),0.5)] hover:-translate-y-1 transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            <Eye className="w-4 h-4 mr-3" /> Full Experience
          </Button>
        </motion.div>
      </div>



      {/* Premium CV Modal */}
      <CvModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

