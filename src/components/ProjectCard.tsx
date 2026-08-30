import Link from "next/link";
import type { MockProject } from "@/lib/mock-data";

export function ProjectCard({
  project,
  index,
}: {
  project: MockProject;
  index: number;
}) {
  const year = new Date(project.startDate).getFullYear();

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-6 border-b border-border py-6 sm:grid-cols-[2.5rem_1fr_auto]"
    >
      <span className="text-sm text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-serif text-xl transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.summary}</p>
        <p className="mt-2 text-xs uppercase tracking-widest text-muted">
          {project.tags.join(" · ")}
        </p>
      </div>
      <span className="text-sm text-muted">{year}</span>
    </Link>
  );
}
