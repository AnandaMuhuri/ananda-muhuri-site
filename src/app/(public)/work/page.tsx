import { listProjects } from "@/server/queries/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default async function WorkPage() {
  const projects = await listProjects();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:px-10">
      <p className="text-sm text-muted">01 — Build</p>
      <h1 className="mt-2 font-serif text-3xl">Things I&apos;ve built with code.</h1>
      <div className="mt-10 border-t border-border">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </main>
  );
}
