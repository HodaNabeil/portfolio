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
        className="text-center py-12 space-y-6"
      >
        <div className="flex justify-center text-accent">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-bold">Message Sent</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
        <Input 
          {...register("name")} 
          placeholder="Your name" 
          className="bg-transparent border-muted focus:border-accent transition-colors"
        />
        {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
        <Input 
          {...register("email")} 
          type="email" 
          placeholder="your@email.com" 
          className="bg-transparent border-muted focus:border-accent transition-colors"
        />
        {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
        <Textarea 
          {...register("message")} 
          placeholder="How can I help you?" 
          className="min-h-[150px] bg-transparent border-muted focus:border-accent transition-colors resize-none"
        />
        {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer">
        {loading ? "Sending..." : (
          <span className="flex items-center gap-2">
            Send Message <Send className="w-4 h-4" />
          </span>
        )}
      </Button>
    </form>
  );
};
