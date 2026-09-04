import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/server/queries/projects";

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 sm:px-10">
      <h1 className="font-serif text-3xl">{project.title}</h1>
      <p className="text-muted mt-3">{project.summary}</p>
      <ul className="text-muted mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs tracking-widest uppercase">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="mt-8 flex gap-6 text-sm">
        {project.links.repo && (
          <a
            href={project.links.repo}
            className="text-accent underline"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            className="text-accent underline"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
      </div>
      <p className="text-foreground/80 mt-10 leading-relaxed whitespace-pre-wrap">
        {project.description}
      </p>
    </main>
  );
}
