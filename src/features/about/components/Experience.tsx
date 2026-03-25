"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export const Experience = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">Professional Experience</h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          My journey through the tech industry, helping companies build better software.
        </p>
      </motion.div>

      <div className="space-y-8 sm:space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border/60 hover:before:bg-primary transition-colors pb-6 sm:pb-8 last:pb-0"
          >
            <div className="absolute left-[-3px] sm:left-[-4px] top-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-border group-hover:bg-primary transition-colors" />
            
            <div className="max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary font-medium text-sm sm:text-base">{exp.company}</p>
                </div>
                <span className="text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full bg-secondary text-secondary-foreground inline-block w-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2 sm:space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-2 text-sm sm:text-base">
                    <span className="text-primary mt-1 sm:mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
