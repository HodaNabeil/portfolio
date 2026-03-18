import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Senior Frontend Engineer",
    template: "%s | Portfolio",
  },
  description:
    "Modern, high-performance portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Portfolio | Senior Frontend Engineer",
    description:
      "Modern, high-performance portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    url: "https://your-portfolio.com",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            {/* Navbar will be added here */}
            <main className="flex-grow">{children}</main>
            {/* Footer will be added here */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
