

"use client";

import { motion } from "framer-motion";
import { getTechStack } from "../services/techService";
import { cn } from "../../../lib/utils";

export const TechStackGrid = () => {
  const techs = getTechStack();
  const categories = ["Frontend", "Backend", "Tools", "Other"];

  return (
    <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-16')}>
      {categories.map((category) => (
        <section key={category} className={cn('space-y-8')}>
          <h2 className={cn('text-xs', 'font-bold', 'uppercase', 'tracking-widest', 'text-muted-foreground', 'border-b', 'pb-4')}>
            {category}
          </h2>
          <div className={cn('grid', 'grid-cols-2', 'sm:grid-cols-3', 'gap-6')}>
            {techs
              .filter((t) => t.category === category)
              .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={cn('flex', 'items-center', 'gap-3', 'p-4', 'rounded-xl', 'border', 'border-muted', 'bg-card', 'hover:border-accent/40', 'transition-colors', 'group')}
                >
                  <span className={cn('font-semibold', 'text-sm', 'group-hover:text-accent', 'transition-colors')}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};
