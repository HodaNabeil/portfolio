export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
}
