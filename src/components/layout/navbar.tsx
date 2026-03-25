"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, bio } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={cn('sticky', 'top-0', 'z-50', 'w-full', 'border-b', 'border-slate-200/40', 'bg-white/80', 'backdrop-blur-md', 'dark:border-slate-800/40', 'dark:bg-slate-950/80', 'transition-all', 'duration-300')}>
      <div className={cn('container', 'mx-auto', 'px-3', 'sm:px-4', 'md:px-6', 'lg:px-8', 'xl:px-12')}>
        <div className={cn('flex', 'h-14', 'sm:h-16', 'md:h-16', 'lg:h-16', 'items-center', 'justify-between')}>
          {/* Logo */}
          <Link href="/" className={cn('flex', 'items-center', 'space-x-2', 'sm:space-x-3', 'group')}>
            <div className={cn('bg-slate-900', 'dark:bg-slate-100', 'p-1.5', 'sm:p-2', 'rounded-lg', 'transition-transform', 'group-hover:scale-110', 'duration-200')}>
              <Code2 className={cn('h-4', 'w-4', 'sm:h-5', 'sm:w-5', 'text-white', 'dark:text-slate-900')} />
            </div>
            <span className={cn('font-bold', 'text-lg', 'sm:text-xl', 'lg:text-2xl', 'tracking-tight', 'hidden', 'xs:inline-block', 'sm:inline-block')}>
              Portfolio<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm lg:text-base font-medium transition-colors hover:text-blue-600",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-slate-600 dark:text-slate-400",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-underline"
                    className={cn('absolute', '-bottom-[21px]', 'left-0', 'right-0', 'h-0.5', 'bg-blue-600')}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <ThemeToggle />
            <div className="hidden xl:flex lg:hidden md:flex gap-2 md:gap-3">
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs sm:text-sm px-2 sm:px-3 md:px-4"
                render={
                  <a
                    href={bio.cvUrl}
                    download="HodaNabeil_CV.pdf"
                    className="flex items-center gap-1 sm:gap-2"
                  />
                }
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" /> 
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">CV</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm px-2 sm:px-3 md:px-4"
                render={
                  <a
                    href={bio.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2"
                  />
                }
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" /> 
                <span className="hidden sm:inline">Open in Tab</span>
                <span className="sm:hidden">View</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={cn(
                'inline-flex',
                'items-center',
                'justify-center',
                'rounded-lg',
                'p-2.5 sm:p-3',
                'text-slate-600',
                'bg-slate-100/50',
                'hover:bg-slate-200',
                'hover:text-slate-900',
                'focus:outline-none',
                'focus:ring-2',
                'focus:ring-inset',
                'focus:ring-blue-500',
                'xl:hidden',
                'dark:bg-slate-800/50',
                'dark:text-slate-300',
                'dark:hover:bg-slate-700',
                'dark:hover:text-slate-100',
                'transition-all',
                'duration-200',
                'shadow-sm',
                'hover:shadow-md'
              )}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className={cn('block', 'h-6', 'w-6', 'sm:h-7', 'sm:w-7', 'transition-transform', 'duration-200', 'rotate-0')} aria-hidden="true" />
              ) : (
                <Menu className={cn('block', 'h-6', 'w-6', 'sm:h-7', 'sm:w-7', 'transition-transform', 'duration-200', 'hover:scale-110')} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
          >
            <div className={cn('space-y-1', 'px-3', 'sm:px-4', 'pb-4', 'sm:pb-6', 'pt-2')}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-3 sm:py-4 text-base sm:text-lg font-medium transition-colors",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className={cn('pt-3', 'sm:pt-4', 'flex', 'flex-col', 'gap-2', 'sm:gap-3')}>
                <Button
                  className="w-full"
                  size="lg"
                  render={
                    <a
                      href={bio.cvUrl}
                      download="HodaNabeil_CV.pdf"
                      className={cn('flex', 'items-center', 'justify-center', 'gap-2')}
                    />
                  }
                >
                  <Download className={cn('w-4', 'h-4', 'sm:w-5', 'sm:h-5')} /> Download PDF
                </Button>
                <Button
                  className="w-full"
                  variant="outline"
                  size="lg"
                  render={
                    <a
                      href={bio.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn('flex', 'items-center', 'justify-center', 'gap-2')}
                    />
                  }
                >
                  <ExternalLink className={cn('w-4', 'h-4', 'sm:w-5', 'sm:h-5')} /> Open in Tab
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
