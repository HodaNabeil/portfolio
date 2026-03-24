"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { bio } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="w-[98vw] sm:max-w-[95vw] md:max-w-4xl h-[94vh] flex flex-col p-0 overflow-hidden border-white/10 bg-background/40 backdrop-blur-3xl shadow-[0_0_100px_-10px_rgba(0,0,0,0.6)] rounded-2xl md:rounded-[2rem] ring-1 ring-white/20 transition-all duration-500"
        showCloseButton={false}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
        </div>

        {/* Header - Ultra Glassmorphic */}
        <DialogHeader className="px-6 py-4 md:px-12 md:py-8 flex flex-row items-center justify-between shrink-0 bg-white/5 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-4 md:gap-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent to-accent/60 text-white shadow-lg shadow-accent/20"
            >
              <FileText className="w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
            <div className="space-y-0.5 md:space-y-1">
              <DialogTitle className="text-xl md:text-4xl font-black tracking-tighter text-foreground leading-none flex items-center gap-3">
                {bio.name}
                <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] bg-accent/10 text-accent border border-accent/20 font-bold uppercase tracking-widest leading-none">
                  Verified
                </span>
              </DialogTitle>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <p className="text-[10px] md:text-sm font-bold text-accent uppercase tracking-[0.2em] opacity-80">
                   Professional Resume & CV
                 </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex rounded-full bg-white/5 hover:bg-accent hover:text-white border-white/10 hover:border-accent transition-all duration-300 w-12 h-12 group"
              onClick={() => window.open(bio.cvUrl, '_blank')}
            >
              <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/5 hover:bg-red-500/10 hover:text-red-500 border-white/10 transition-all duration-300 w-10 h-10 md:w-12 md:h-12 group"
              onClick={onClose}
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </Button>
          </div>
        </DialogHeader>

        {/* PDF Content Area */}
        <div className="flex-grow relative bg-slate-950/20 p-0 overflow-hidden flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {isOpen && bio.cvUrl && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full overflow-hidden bg-[#1a1a1a] relative group"
              >
                {/* Loading State Overlay */}
                <AnimatePresence>
                  {isLoading && (
                    <motion.div 
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 bg-slate-900 flex flex-col items-center justify-center gap-6"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin" />
                        <div className="absolute inset-0 blur-xl bg-accent/20 animate-pulse" />
                      </div>
                      <div className="space-y-2 text-center">
                         <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Loading Document</p>
                         <p className="text-white/40 text-[10px] italic">Please wait while we prepare your view</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <iframe
                  src={`${bio.cvUrl}#toolbar=0&navpanes=0&view=FitH`}
                  className={cn(
                    "w-full h-full border-none transition-all duration-1000",
                    isLoading ? "opacity-0 invisible" : "opacity-100 visible"
                  )}
                  onLoad={() => setIsLoading(false)}
                  title={`${bio.name}'s Curriculum Vitae`}
                />
                
                {/* Visual enhancement on hover - REMOVED border to delete black line */}
                <div className="absolute inset-0 pointer-events-none rounded-[1.5rem] transition-colors duration-500" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Floor Shadow for the PDF "Paper" */}
          <div className="w-full max-w-4xl h-8 bg-black/40 blur-[40px] rounded-full mx-auto -mt-4 opacity-50" />
        </div>

        {/* Footer Actions - Sophisticated Control Bar */}
        <div className="px-6 py-6 md:px-12 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-md relative z-10 shrink-0">
          <div className="hidden md:flex flex-col gap-1">
            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Document Status</p>
            <div className="flex items-center gap-3">
               <span className="text-sm font-medium text-foreground">Last updated: March 2024</span>
               <div className="h-4 w-[1px] bg-white/10" />
               <span className="text-sm font-medium text-accent">PDF / A4 Format</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
             <Button
                variant="ghost"
                onClick={onClose}
                className="flex-1 sm:flex-none h-14 px-10 text-sm font-black rounded-2xl hover:bg-white/5 border border-white/5 uppercase tracking-widest opacity-60 hover:opacity-100 transition-all hover:scale-95 active:scale-90"
             >
               Dismiss
             </Button>
             
             <a href={bio.cvUrl} download={`CV_${bio.name.replace(' ', '_')}.pdf`} className="flex-1 sm:flex-none">
                <Button className="w-full md:w-auto h-14 px-12 text-sm font-black bg-accent hover:bg-accent/90 text-accent-foreground rounded-2xl shadow-[0_20px_40px_-15px_rgba(var(--accent),0.3)] hover:shadow-[0_25px_50px_-12px_rgba(var(--accent),0.5)] hover:-translate-y-1 active:translate-y-0 shadow-accent/20 transition-all duration-300 uppercase tracking-widest border-none group relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                   <Download className="mr-3 group-hover:animate-bounce-subtle transition-all" size={18} /> 
                   <span>Download Resume</span>
                </Button>
             </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

