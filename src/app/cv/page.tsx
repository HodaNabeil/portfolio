import { CVContent } from "@/features/cv/components/CVContent";

export default function CVPage() {
  return (
    <div className="container-custom py-16 sm:py-20 md:py-24 min-h-screen">
      <header className="max-w-3xl mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          Curriculum Vitae
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          A summary of my professional experience, skills, and educational
          background.
        </p>
      </header>

      <CVContent />
    </div>
  );
}
