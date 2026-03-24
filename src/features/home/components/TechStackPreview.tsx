"use client";

import { motion } from "framer-motion";
import { getTechStack } from "@/features/tech-stack/services/techService";
import { Badge } from "@/components/ui/badge";

export const TechStackPreview = () => {
  const techs = getTechStack().slice(0, 10);

  return (
    <section className="py-24 bg-background/50">
      <div className="container-custom text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-12 uppercase text-muted-foreground opacity-70">
          Core Technologies
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-60">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="text-xl font-bold tracking-tighter grayscale group-hover:grayscale-0 transition-all">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
