import Link from "next/link";
import { listProjects } from "@/server/queries/projects";
import { profile, interests } from "@/lib/mock-data";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import { HeroHeadline } from "@/components/HeroHeadline";
import { HeroPortrait } from "@/components/HeroPortrait";
import { ParallaxPhoto } from "@/components/ParallaxPhoto";
import { Reveal } from "@/components/motion/Reveal";
import { RevealStagger, RevealItem } from "@/components/motion/RevealStagger";
import { GrowLine } from "@/components/motion/GrowLine";
import { FadeIn } from "@/components/motion/FadeIn";

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
          <HeroHeadline />

          <HeroPortrait src={profile.photo.src} alt={profile.name} />
        </div>

        {/* Bottom information */}
        <FadeIn
          delay={0.8}
          className="border-border flex flex-col justify-between gap-8 border-t pt-6 md:flex-row"
        >
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
        </FadeIn>
      </section>

      {/* 02 — Build */}
      <section
        id="work"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <Reveal>
          <div className="flex items-end justify-between pb-6">
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
        </Reveal>
        <GrowLine />

        <RevealStagger>
          {projects.map((project, i) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} index={i} />
            </RevealItem>
          ))}
        </RevealStagger>

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
        <Reveal>
          <div className="flex items-end justify-between pb-6">
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
        </Reveal>
        <GrowLine />

        {/* Featured photograph */}
        <ParallaxPhoto
          href="/create"
          src="/photos/hawa-mahal-2.jpg"
          alt="Hawa Mahal, Jaipur"
          caption="Photography"
          detail="Moments, places, and things worth remembering."
        />

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
        <Reveal>
          <div className="pb-6">
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              04 / Explore
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Things that keep me curious.
            </h2>
          </div>
        </Reveal>
        <GrowLine />

        <RevealStagger className="border-border mt-12 grid border-b sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => (
            <RevealItem
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
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* 05 — Think */}
      <section
        id="think"
        className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32"
      >
        <Reveal>
          <div className="pb-6">
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              05 / Think
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              Notes from things I&apos;m learning and thinking about.
            </h2>
          </div>
        </Reveal>
        <GrowLine />

        <Reveal className="flex flex-col items-start justify-between gap-8 py-12 sm:flex-row sm:items-end">
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
        </Reveal>
      </section>
    </main>
  );
}
