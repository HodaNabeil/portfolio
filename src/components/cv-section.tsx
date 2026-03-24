"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import { bio } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CvModal } from "@/components/ui/cv-modal";

export function CVSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <Card className="w-full mx-auto overflow-hidden border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rounded-[3rem] md:rounded-[4rem] relative group">
          <div className="absolute inset-0 vibrant-gradient opacity-100 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          
          <CardContent className="p-10 md:p-24 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-16 text-center lg:text-left">
            <div className="space-y-8 flex-grow">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black text-sm uppercase tracking-[0.2em]"
               >
                  <FileText size={20} className="animate-pulse" />
                  <span>Curriculum Vitae</span>
               </motion.div>
               <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-white">
                 Ready to <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-collection-yellow-100 to-collection-yellow-500">Collaborate?</span>
               </h2>
               <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                  Discover the full scope of my professional journey, technical expertise, and the value I can bring to your next high-impact project.
               </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
               <Button 
                onClick={() => setIsModalOpen(true)}
                className="h-20 px-12 text-2xl font-black bg-white text-primary hover:bg-slate-100 shadow-2xl active:scale-95 transition-all rounded-[1.5rem] w-full lg:w-auto flex items-center justify-center border-none uppercase tracking-widest"
               >
                 <Eye className="mr-3" size={28} /> Preview
               </Button>

               <a href={bio.cvUrl} download={`CV_${bio.name.replace(' ', '_')}.pdf`} className="w-full lg:w-auto">
                  <Button className="h-20 px-12 text-2xl font-black bg-white/10 hover:bg-white/20 text-white border-4 border-white/20 backdrop-blur-xl shadow-2xl active:scale-95 transition-all rounded-[1.5rem] w-full flex items-center justify-center uppercase tracking-widest">
                    <Download className="mr-3" size={28} /> Download
                  </Button>
               </a>
            </div>
          </CardContent>
        </Card>
      </Container>
      
      {/* Reusable Premium Modal */}
      <CvModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

