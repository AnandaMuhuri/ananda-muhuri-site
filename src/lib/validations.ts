import { z } from "zod";

const slug = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "lowercase letters, numbers, hyphens only");

export const projectSchema = z.object({
  title: z.string().min(1),
  slug,
  summary: z.string().min(1),
  description: z.string().min(1),
  coverImageKey: z.string().nullable().optional(),
  tags: z.array(z.string()).default([]),
  links: z
    .object({
      repo: z.url().optional(),
      live: z.url().optional(),
    })
    .default({}),
  startDate: z.iso.date().nullable().optional(),
  endDate: z.iso.date().nullable().optional(),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().default(0),
});

export const experienceSchema = z.object({
  company: z.string().min(1),
  role: z.string().min(1),
  highlights: z.array(z.string().min(1)).default([]),
  startDate: z.iso.date(),
  endDate: z.iso.date().nullable().optional(),
  sortOrder: z.number().int().default(0),
});

export const skillSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  level: z.number().int().min(1).max(5).nullable().optional(),
  sortOrder: z.number().int().default(0),
});

export const albumSchema = z.object({
  title: z.string().min(1),
  slug,
  description: z.string().nullable().optional(),
  sortOrder: z.number().int().default(0),
  published: z.boolean().default(false),
});

export const photoSchema = z.object({
  albumId: z.uuid(),
  caption: z.string().nullable().optional(),
  takenAt: z.iso.datetime().nullable().optional(),
  camera: z.string().nullable().optional(),
  sortOrder: z.number().int().default(0),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type ExperienceInput = z.infer<typeof experienceSchema>;
export type SkillInput = z.infer<typeof skillSchema>;
export type AlbumInput = z.infer<typeof albumSchema>;
export type PhotoInput = z.infer<typeof photoSchema>;
