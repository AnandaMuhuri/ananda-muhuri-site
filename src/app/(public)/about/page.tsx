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
    <main className="mx-auto max-w-2xl px-6 py-16 sm:px-10">
      <div className="mb-8 flex flex-wrap items-start gap-6">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-foreground/5">
          <Image
            src={profile.photo.src}
            alt={profile.name}
            fill
            sizes="112px"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="mb-2 font-serif text-3xl">About</h1>
          <p className="text-muted">{profile.summary}</p>
        </div>
      </div>

      <section>
        <h2 className="mb-4 text-sm uppercase tracking-widest text-muted">
          Experience
        </h2>
        <Timeline items={experience} />
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-sm uppercase tracking-widest text-muted">
          Skills
        </h2>
        <div className="space-y-4">
          {Object.entries(skillsByCategory).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted">{category}</h3>
              <ul className="mt-1 flex flex-wrap gap-2">
                {items?.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-sm uppercase tracking-widest text-muted">
          Education
        </h2>
        <ul className="space-y-3">
          {mockEducation.map((edu) => (
            <li key={edu.institution}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">{edu.institution}</h3>
                <span className="text-sm text-muted">
                  {formatRange(edu.startDate, edu.endDate)}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{edu.degree}</p>
            </li>
          ))}
        </ul>
        <div className="relative mt-4 aspect-[3/2] overflow-hidden rounded-lg bg-foreground/5">
          <Image
            src="/photos/convocation.jpg"
            alt="Receiving the degree at NIT Agartala's 18th Convocation"
            fill
            sizes="(min-width: 672px) 672px, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-sm uppercase tracking-widest text-muted">
          Achievements
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {mockAchievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-sm uppercase tracking-widest text-muted">
          Get in touch
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className="text-sm text-accent underline">
            {profile.email}
          </a>
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
