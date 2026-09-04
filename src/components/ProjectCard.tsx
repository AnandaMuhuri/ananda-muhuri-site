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
      className="group border-border grid grid-cols-[2rem_1fr_auto] gap-x-4 border-b py-8 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:gap-x-8 sm:py-10"
    >
      {/* Number */}
      <span className="text-muted pt-1 text-xs tracking-widest">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Project information */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <h3 className="group-hover:text-accent font-serif text-xl tracking-tight transition-colors duration-300 sm:text-2xl">
            {project.title}
          </h3>

          {/* <span className="text-muted hidden text-xs tracking-widest uppercase sm:inline">
            Project
          </span> */}
        </div>

        <p className="text-muted mt-2 max-w-xl text-sm leading-6">
          {project.summary}
        </p>

        <p className="text-muted mt-4 text-[11px] tracking-[0.16em] uppercase">
          {project.tags.join(" · ")}
        </p>
      </div>

      {/* Year + arrow */}
      <div className="flex h-full flex-col items-end justify-between gap-8">
        <span className="text-muted text-xs">{year}</span>

        <span className="text-muted group-hover:text-accent text-lg transition-all duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
