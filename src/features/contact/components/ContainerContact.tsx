

import { ContactForm } from "./ContactForm";
import { ContactInfoList } from "./ContactInfoList";
import { SocialLinks } from "./SocialLinks";
import { cn } from "../../../lib/utils";
import { bio, socialLinks } from "@/lib/data";

export const ContainerContact = () => {

  const contactInfo = {
    email: bio.email,
    phone: bio.phone,
    whatsapp: bio.whatsapp,
  };

  return (
    <div className={cn('container-custom', 'py-16', 'sm:py-20', 'md:py-24', 'min-h-screen')}>
      <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-2', 'gap-16', 'sm:gap-20', 'lg:gap-24')}>
        <header className={cn('max-w-xl')}>
          <h1 className={cn('text-3xl', 'sm:text-4xl', 'md:text-5xl', 'font-bold', 'tracking-tight', 'mb-3', 'sm:mb-4')}>
            Get In Touch
          </h1>
          <p className={cn('text-base', 'sm:text-lg', 'text-muted-foreground', 'mb-8', 'sm:mb-12')}>
            Have a project in mind or just want to chat? Feel free to reach out. 
            I'm always open to new opportunities.
          </p>

          <div className={cn('space-y-6', 'sm:space-y-8')}>
            <ContactInfoList contactInfo={contactInfo} />
            <SocialLinks />
          </div>
        </header>

        <section className={cn('bg-card', 'p-6', 'sm:p-8', 'md:p-12', 'rounded-xl', 'sm:rounded-2xl', 'border', 'border-muted/50')}>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};
