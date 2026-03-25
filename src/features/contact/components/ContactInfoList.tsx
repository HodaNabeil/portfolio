"use client";

import { Mail, Phone, MessageSquare } from "lucide-react";
import { cn } from "../../../lib/utils";
import { ContactInfo } from "../types/contact";

interface ContactInfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem = ({ icon: Icon, label, value, href }: ContactInfoItemProps) => (
  <div className={cn('flex', 'items-center', 'gap-3', 'sm:gap-4', 'group')}>
    <div className={cn('p-2.5', 'sm:p-3', 'rounded-full', 'bg-muted', 'group-hover:bg-accent/10', 'transition-colors')}>
      <Icon className={cn('w-4', 'h-4', 'sm:w-5', 'sm:h-5', 'text-muted-foreground', 'group-hover:text-accent', 'transition-colors')} />
    </div>
    <div>
      <p className={cn('text-xs', 'font-semibold', 'uppercase', 'tracking-wider', 'text-muted-foreground')}>{label}</p>
      {href ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cn('font-medium', 'text-sm', 'sm:text-base', 'hover:text-accent', 'transition-colors', 'underline', 'underline-offset-4')}
        >
          {value}
        </a>
      ) : (
        <p className={cn('font-medium', 'text-sm', 'sm:text-base')}>{value}</p>
      )}
    </div>
  </div>
);

interface ContactInfoListProps {
  contactInfo: ContactInfo;
}

export const ContactInfoList = ({ contactInfo }: ContactInfoListProps) => {
  return (
    <div className={cn('space-y-8')}>
      <ContactInfoItem 
        icon={Mail} 
        label="Email" 
        value={contactInfo.email} 
      />
      <ContactInfoItem 
        icon={Phone} 
        label="Phone" 
        value={contactInfo.phone} 
      />
      <ContactInfoItem 
        icon={MessageSquare} 
        label="WhatsApp" 
        value="Chat on WhatsApp" 
        href={contactInfo.whatsapp}
      />
    </div>
  );
};
