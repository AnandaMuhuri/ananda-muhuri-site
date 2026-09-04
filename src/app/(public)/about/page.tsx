import Image from "next/image";
import { listExperience, listSkills } from "@/server/queries/about";
import { Timeline } from "@/components/Timeline";
import { profile, mockEducation, mockAchievements } from "@/lib/mock-data";
import { SocialLinks } from "@/components/SocialLinks";

function formatRange(start: string, end: string | null) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric" });
  return end ? `${fmt(start)} — ${fmt(end)}` : fmt(start);
}

export default async function AboutPage() {
  const [experience, skills] = await Promise.all([
    listExperience(),
    listSkills(),
  ]);

  const skillsByCategory = Object.groupBy(skills, (s) => s.category);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24">
      {/* Introduction */}
      <section className="border-border border-b pb-16 sm:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px]">
          <div>
            <div className="text-muted flex items-center gap-3 text-xs tracking-[0.2em] uppercase">
              <span>01</span>
              <span className="bg-border h-px w-8" />
              <span>About</span>
            </div>

            <h1 className="mt-10 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] font-medium tracking-[-0.06em]">
              A little about
              <br />
              <span className="text-accent font-serif tracking-normal">
                me.
              </span>
            </h1>

            <p className="text-muted mt-10 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
              {profile.summary}
            </p>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src={profile.aboutPhoto.src}
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 280px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              02 / Experience
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              Where I&apos;ve worked.
            </h2>

            <div className="mt-12">
              <Timeline items={experience} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              03 / Skills
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              Things I work with.
            </h2>

            <div className="mt-12 space-y-10">
              {Object.entries(skillsByCategory).map(([category, items]) => (
                <div key={category} className="border-border border-t pt-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                    <h3 className="text-sm tracking-[0.16em] uppercase">
                      {category}
                    </h3>

                    <ul className="flex max-w-2xl flex-wrap gap-x-4 gap-y-2 sm:justify-end">
                      {items?.map((skill) => (
                        <li key={skill.name} className="text-muted text-sm">
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              04 / Education
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              Where it started.
            </h2>

            <div className="mt-12 space-y-8">
              {mockEducation.map((edu) => (
                <div
                  key={edu.institution}
                  className="border-border border-t pt-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-medium">{edu.institution}</h3>

                    <span className="text-muted text-sm">
                      {formatRange(edu.startDate, edu.endDate)}
                    </span>
                  </div>

                  <p className="text-muted mt-2 text-sm">{edu.degree}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-12 aspect-[3/2] overflow-hidden rounded-sm">
              <Image
                src="/photos/convocation.jpg"
                alt="Receiving the degree at NIT Agartala's 18th Convocation"
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-border border-b py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              05 / Highlights
            </p>
          </div>

          <div>
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              A few things I&apos;m proud of.
            </h2>

            <ul className="mt-12 space-y-5">
              {mockAchievements.map((achievement, index) => (
                <li
                  key={achievement}
                  className="border-border flex gap-6 border-t pt-5 text-sm"
                >
                  <span className="text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="max-w-2xl leading-6">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <div>
            <p className="text-muted text-xs tracking-[0.2em] uppercase">
              06 / Contact
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-[clamp(3rem,6vw,6rem)] leading-[0.9] font-medium tracking-[-0.05em]">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="text-accent font-serif">interesting.</span>
            </h2>

            <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-accent text-sm underline underline-offset-4 transition-colors"
              >
                {profile.email}
              </a>

              <SocialLinks />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
