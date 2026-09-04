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
      <section className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-7xl flex-col justify-between px-6 py-12 sm:px-10 sm:py-16">
        {/* Section label */}
        <div className="text-muted flex items-center gap-3 text-xs tracking-[0.2em] uppercase">
          <span>01 / Introduction</span>
          {/* <span className="h-px w-8 bg-border" />
          <span>Introduction</span> */}
        </div>

        {/* Main statement */}
        <div className="grid items-center gap-10 py-16 md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_280px]">
          <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] font-medium tracking-[-0.06em] uppercase">
            I build{" "}
            <span className="text-accent font-serif tracking-normal normal-case">
              things.
            </span>
            <br />I create{" "}
            <span className="text-accent font-serif tracking-normal normal-case">
              moments.
            </span>
            <br />I explore{" "}
            <span className="text-accent font-serif tracking-normal normal-case">
              ideas.
            </span>
          </h1>

          {/* Portrait */}
          <div className="relative mx-auto aspect-[3/4] w-40 overflow-hidden rounded-sm md:mx-0 md:w-full">
            <Image
              src={profile.photo.src}
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 160px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Bottom information */}
        <div className="border-border flex flex-col justify-between gap-8 border-t pt-6 md:flex-row">
          <div>
            <p className="text-muted max-w-md text-sm leading-6">
              Software engineer focused on building useful systems,
              experimenting with ideas, and creating things beyond code.
            </p>

            <SocialLinks className="mt-5" />
          </div>

          <div className="text-muted text-sm md:text-right">
            <p>{profile.role}</p>
            <p>India · 2026</p>
          </div>
        </div>
      </section>

      {/* 02 — Build */}
      <section
        id="work"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="border-border flex items-end justify-between border-b pb-6">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              02 / Build
            </p>

            <h2 className="mt-5 font-serif text-4xl tracking-tight sm:text-5xl">
              Selected work.
            </h2>
          </div>

          <Link
            href="/work"
            className="text-muted hover:text-accent hidden text-sm transition-colors sm:block"
          >
            View all work →
          </Link>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <Link
          href="/work"
          className="text-muted mt-8 inline-block text-sm underline underline-offset-4 sm:hidden"
        >
          View all work →
        </Link>
      </section>

      {/* 03 — Create */}
      <section
        id="create"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        {/* Section heading */}
        <div className="border-border flex items-end justify-between border-b pb-6">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              03 / Create
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Things I make when I&apos;m not writing code.
            </h2>
          </div>

          <Link
            href="/create"
            className="text-muted hover:text-accent hidden text-sm transition-colors sm:block"
          >
            Explore photography →
          </Link>
        </div>

        {/* Featured photograph */}
        <Link href="/create" className="group mt-10 block">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/photos/hawa-mahal-2.jpg"
              alt="Hawa Mahal, Jaipur"
              fill
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="mt-5 flex items-start justify-between gap-6">
            <div>
              <p className="text-sm">Photography</p>
              <p className="text-muted mt-1 text-sm">
                Moments, places, and things worth remembering.
              </p>
            </div>

            <span className="text-muted group-hover:text-accent text-sm transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>

        {/* Mobile link */}
        <Link
          href="/create"
          className="text-muted mt-8 inline-block text-sm underline underline-offset-4 sm:hidden"
        >
          Explore photography →
        </Link>
      </section>

      {/* 04 — Explore */}
      <section
        id="explore"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="border-border border-b pb-6">
          <p className="text-muted text-xs tracking-[0.2em] uppercase">
            04 / Explore
          </p>

          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Things that keep me curious.
          </h2>
        </div>

        <div className="border-border mt-12 grid border-b sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => (
            <div
              key={interest.category}
              className="group border-border border-t py-8 sm:px-6 sm:py-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-muted text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </div>

              <div className="mt-10">
                <p className="text-sm tracking-[0.16em] uppercase">
                  {interest.category}
                </p>

                {interest.detail && (
                  <p className="text-muted mt-2 max-w-xs text-sm leading-6">
                    {interest.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — Think */}
      <section
        id="think"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="border-border border-b pb-6">
          <p className="text-muted text-xs tracking-[0.2em] uppercase">
            05 / Think
          </p>

          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Notes from things I&apos;m learning and thinking about.
          </h2>
        </div>

        <div className="flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-muted text-sm">Writing is coming soon.</p>

            <p className="text-muted mt-2 max-w-md text-sm leading-6">
              Ideas about software, systems, things I&apos;m learning, and
              whatever else seems worth writing down.
            </p>
          </div>

          <Link
            href="/think"
            className="text-muted hover:text-accent text-sm underline underline-offset-4 transition-colors"
          >
            Visit Think →
          </Link>
        </div>
      </section>
    </main>
  );
}
