"use client";

import { motion } from "framer-motion";
import { getTechStack } from "@/features/tech-stack/services/techService";
import { Badge } from "@/components/ui/badge";
import { cn } from "../../../lib/utils";

export const TechStackPreview = () => {
  const techs = getTechStack().slice(0, 10);

  return (
    <section className={cn('py-16', 'sm:py-20', 'md:py-24', 'bg-background/50')}>
      <div className={cn('container-custom', 'text-center', 'px-4')}>
        <h2 className={cn('text-lg', 'sm:text-xl', 'md:text-2xl', 'font-semibold', 'tracking-tight', 'mb-8', 'sm:mb-12', 'uppercase', 'text-muted-foreground', 'opacity-70')}>
          Core Technologies
        </h2>
        
        <div className={cn('flex', 'flex-wrap', 'justify-center', 'gap-3', 'sm:gap-4', 'md:gap-6', 'lg:gap-8', 'opacity-60')}>
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn('flex', 'flex-col', 'items-center', 'gap-2', 'group')}
            >
              <div className={cn('text-sm', 'sm:text-base', 'md:text-lg', 'lg:text-xl', 'font-bold', 'tracking-tighter', 'grayscale', 'group-hover:grayscale-0', 'transition-all')}>
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
