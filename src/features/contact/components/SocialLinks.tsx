"use client";

import { cn } from "../../../lib/utils";
import { SocialLinksService } from "../services/socialLinksService";



export const SocialLinks = () => {
    const socialLinks = SocialLinksService.getSocialLinks();
  return (
    <div className={cn('pt-8')}>
      <h3 className={cn('text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'text-muted-foreground', 'mb-6')}>
        Socials
      </h3>
      <div className={cn('flex', 'flex-wrap', 'gap-4')}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex', 'items-center', 'gap-2', 'px-4', 'py-2', 
              'rounded-full', 'border', 'border-muted', 
              'hover:border-accent', 'hover:text-accent', 
              'transition-all', 'text-sm', 'font-medium'
            )}
          >
            <social.icon className={cn('w-4', 'h-4')} />
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};
