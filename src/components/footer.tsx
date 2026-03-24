import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t py-12 bg-background">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hoda Nabeil - All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="https://github.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};
