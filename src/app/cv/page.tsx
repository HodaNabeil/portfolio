import { CVContent } from "@/features/cv/components/CVContent";

export default function CVPage() {
  return (
    <div className="container-custom py-24 min-h-screen">
      <header className="max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Curriculum Vitae
        </h1>
        <p className="text-lg text-muted-foreground">
          A summary of my professional experience, skills, and educational
          background.
        </p>
      </header>

      <CVContent />
    </div>
  );
}
