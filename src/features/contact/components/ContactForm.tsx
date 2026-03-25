"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { cn } from "../../../lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn('text-center', 'py-8', 'sm:py-12', 'space-y-4', 'sm:space-y-6')}
      >
        <div className={cn('flex', 'justify-center', 'text-accent')}>
          <CheckCircle2 size={36} className="sm:size-12" />
        </div>
        <h3 className={cn('text-xl', 'sm:text-2xl', 'font-bold')}>Message Sent</h3>
        <p className={cn('text-muted-foreground', 'text-sm', 'sm:text-base')}>
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className={cn('w-full', 'sm:w-auto')}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('space-y-4', 'sm:space-y-6')}>
      <div className="space-y-2">
        <label className={cn('text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'text-muted-foreground')}>Name</label>
        <Input 
          {...register("name")} 
          placeholder="Your name" 
          className={cn('bg-transparent', 'border-muted', 'focus:border-accent', 'transition-colors', 'h-10', 'sm:h-12')}
        />
        {errors.name && <p className={cn('text-destructive', 'text-xs')}>{errors.name.message}</p>}
      </div>
      
      <div className="space-y-2">
        <label className={cn('text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'text-muted-foreground')}>Email</label>
        <Input 
          {...register("email")} 
          type="email" 
          placeholder="your@email.com" 
          className={cn('bg-transparent', 'border-muted', 'focus:border-accent', 'transition-colors', 'h-10', 'sm:h-12')}
        />
        {errors.email && <p className={cn('text-destructive', 'text-xs')}>{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className={cn('text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'text-muted-foreground')}>Message</label>
        <Textarea 
          {...register("message")} 
          placeholder="How can I help you?" 
          className={cn('min-h-[120px]', 'sm:min-h-[150px]', 'bg-transparent', 'border-muted', 'focus:border-accent', 'transition-colors', 'resize-none')}
        />
        {errors.message && <p className={cn('text-destructive', 'text-xs')}>{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className={cn('w-full', 'bg-accent', 'text-accent-foreground', 'hover:bg-accent/90', 'cursor-pointer', 'h-12', 'sm:h-14')}>
        {loading ? "Sending..." : (
          <span className={cn('flex', 'items-center', 'gap-2')}>
            Send Message <Send className={cn('w-4', 'h-4', 'sm:w-5', 'sm:h-5')} />
          </span>
        )}
      </Button>
    </form>
  );
};
