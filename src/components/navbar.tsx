"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={cn('sticky', 'top-0', 'z-50', 'w-full', 'border-b', 'bg-background/95', 'backdrop-blur', 'supports-[backdrop-filter]:bg-background/60')}>
      <div className={cn('container-custom', 'flex', 'h-16', 'items-center', 'justify-center', 'gap-4')}>
        
        {/* Logo/Brand */}

        
        {/* Desktop Navigation */}
        <div className={cn('hidden', 'md:flex', 'items-center', 'gap-6', 'lg:gap-8')}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm lg:text-base font-medium transition-all duration-200 hover:text-primary hover:scale-105",
                pathname === item.href 
                  ? "text-primary font-semibold" 
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Ri   ght Side */}
        <div className={cn('flex', 'items-center', 'gap-4')}>
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              'inline-flex',
              'items-center',
              'justify-center',
              'rounded-lg',
              'p-2.5',
              'text-muted-foreground',
              'bg-muted/50',
              'hover:bg-muted',
              'hover:text-foreground',
              'focus:outline-none',
              'focus:ring-2',
              'focus:ring-inset',
              'focus:ring-primary',
              'md:hidden',
              'transition-all',
              'duration-200',
              'shadow-sm',
              'hover:shadow-md'
            )}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className={cn('block', 'h-6', 'w-6', 'transition-transform', 'duration-200', 'hover:scale-110', 'text-foreground')} aria-hidden="true" />
            ) : (
              <Menu className={cn('block', 'h-6', 'w-6', 'transition-transform', 'duration-200', 'hover:scale-110', 'text-foreground')} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className={cn(
          'md:hidden', 
          'border-t',
          'bg-background/95', 
          'backdrop-blur', 
          'shadow-lg',
          'justify-center'
        )}>
          <div className={cn('container-custom', 'py-6', 'space-y-1', 'text-center')}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground hover:translate-x-1"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
