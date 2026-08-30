import Image from "next/image";
import Link from "next/link";
import { listProjects } from "@/server/queries/projects";
import { profile, interests } from "@/lib/mock-data";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";

export default async function HomePage() {
  const projects = await listProjects();

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-10 sm:py-32">
        <p className="text-sm text-muted">01 / Introduction</p>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
          <h1 className="flex-1 text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl">
            I build{" "}
            <span className="font-serif text-accent normal-case tracking-normal">
              things.
            </span>
            <br />
            I create{" "}
            <span className="font-serif text-accent normal-case tracking-normal">
              moments.
            </span>
            <br />
            I explore{" "}
            <span className="font-serif text-accent normal-case tracking-normal">
              ideas.
            </span>
          </h1>
          <div className="relative mx-auto h-40 w-32 shrink-0 self-center overflow-hidden rounded-lg sm:mx-0 sm:h-auto sm:w-48 sm:self-stretch">
            <Image
              src={profile.photo.src}
              alt={profile.name}
              fill
              sizes="(min-width: 640px) 192px, 128px"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-6 text-muted">{profile.role}</p>
        <SocialLinks className="mt-6" />
      </section>

      {/* 01 — Build */}
      <section className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-10">
        <p className="text-sm text-muted">01 — Build</p>
        <h2 className="mt-2 font-serif text-2xl">Things I&apos;ve built with code.</h2>
        <div className="mt-8 border-t border-border">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <Link href="/work" className="mt-6 inline-block text-sm text-accent underline">
          View all work →
        </Link>
      </section>

      {/* 02 — Create */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
        <p className="text-sm text-muted">02 — Create</p>
        <h2 className="mt-2 font-serif text-2xl">
          Some things I make when I&apos;m not writing code.
        </h2>
        <Link
          href="/create"
          className="group mt-8 block overflow-hidden rounded-lg"
        >
          <div className="relative aspect-[16/10]">
            <Image
              src="/photos/hawa-mahal-2.jpg"
              alt="Hawa Mahal, Jaipur"
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="mt-4 text-sm text-accent underline">Photography →</p>
        </Link>
      </section>

      {/* 03 — Explore */}
      <section className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-10">
        <p className="text-sm text-muted">03 — Explore</p>
        <h2 className="mt-2 font-serif text-2xl">
          Things I follow. Things I enjoy. Things that keep me curious.
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
          {interests.map((interest) => (
            <div key={interest.category}>
              <p className="text-sm uppercase tracking-widest">
                {interest.category}
              </p>
              {interest.detail && (
                <p className="mt-1 text-sm text-muted">{interest.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Think */}
      <section className="mx-auto w-full max-w-2xl px-6 py-16 sm:px-10">
        <p className="text-sm text-muted">04 — Think</p>
        <h2 className="mt-2 font-serif text-2xl">
          Notes from things I&apos;m learning and thinking about.
        </h2>
        <p className="mt-8 text-muted">Writing coming soon.</p>
        <Link href="/think" className="mt-2 inline-block text-sm text-accent underline">
          Think →
        </Link>
      </section>
    </main>
  );
}
