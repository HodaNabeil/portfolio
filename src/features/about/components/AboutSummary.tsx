"use client";

import { motion } from "framer-motion";
import { bio } from "@/lib/data";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

export const AboutSummary = () => {
  return (
    <section className="space-y-16 sm:space-y-20 md:space-y-24">
      {/* Bio & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6 sm:space-y-8"
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Professional Summary</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {bio.fullBio}
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Growth Journey</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {bio.goals}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 sm:space-y-8 md:space-y-10"
        >
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Education
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Bachelor of Computer Science</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Cairo University</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 underline">2020 - 2024</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              Location & Details
            </h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{bio.location}</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{bio.email}</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{bio.phone}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
