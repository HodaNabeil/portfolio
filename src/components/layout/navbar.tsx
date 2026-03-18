"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/40 bg-white/80 backdrop-blur-md dark:border-slate-800/40 dark:bg-slate-950/80 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-slate-900 dark:bg-slate-100 p-1.5 rounded-lg transition-transform group-hover:scale-110 duration-200">
              <Code2 className="h-5 w-5 text-white dark:text-slate-900" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
              Portfolio<span className="text-blue-600">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-blue-600",
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-slate-600 dark:text-slate-400"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/cv/resume.pdf"
              target="_blank"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Resume
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-50"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
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
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-4 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-slate-50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/cv/resume.pdf"
                  target="_blank"
                  className="flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Download Resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
