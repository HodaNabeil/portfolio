import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ 
  title, 
  subtitle, 
  className, 
  align = "center" 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4", 
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={cn(
          "h-1.5 w-20 bg-blue-600 dark:bg-blue-400 rounded-full",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </div>
  );
}
