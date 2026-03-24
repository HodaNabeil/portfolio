import { SocialLink } from "../types/contact";
import { Github, Linkedin, Mail, Facebook, Youtube } from "lucide-react";

export class SocialLinksService {
  private static readonly defaultLinks: SocialLink[] = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube },
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  ];

  static getSocialLinks(): SocialLink[] {
    return this.defaultLinks;
  }

  static addSocialLink(link: SocialLink): SocialLink[] {
    return [...this.defaultLinks, link];
  }
}
