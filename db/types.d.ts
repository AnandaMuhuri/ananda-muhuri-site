// Hand-written to match db/migrations/0001_init.ts until a live DB exists.
// Once DATABASE_URL points at a real Supabase instance, regenerate this file
// with `npm run db:codegen` — kysely-codegen will overwrite it from the
// actual schema.
import type { ColumnType, Generated } from "kysely";

export interface ProjectLinks {
  repo?: string;
  live?: string;
}

export interface ProjectsTable {
  id: Generated<string>;
  title: string;
  slug: string;
  summary: string;
  description: string;
  coverImageKey: string | null;
  tags: string[];
  links: ColumnType<ProjectLinks, ProjectLinks | undefined, ProjectLinks>;
  startDate: ColumnType<Date, string | undefined, string> | null;
  endDate: ColumnType<Date, string | undefined, string> | null;
  featured: Generated<boolean>;
  sortOrder: Generated<number>;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export interface ExperienceTable {
  id: Generated<string>;
  company: string;
  role: string;
  highlights: Generated<string[]>;
  startDate: ColumnType<Date, string, string>;
  endDate: ColumnType<Date, string | undefined, string> | null;
  sortOrder: Generated<number>;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export interface SkillsTable {
  id: Generated<string>;
  name: string;
  category: string;
  level: number | null;
  sortOrder: Generated<number>;
  createdAt: Generated<Date>;
}

export interface AlbumsTable {
  id: Generated<string>;
  title: string;
  slug: string;
  description: string | null;
  coverPhotoId: string | null;
  sortOrder: Generated<number>;
  published: Generated<boolean>;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export interface PhotosTable {
  id: Generated<string>;
  albumId: string;
  r2Key: string;
  thumbKey: string;
  width: number;
  height: number;
  caption: string | null;
  takenAt: ColumnType<Date, string | undefined, string> | null;
  camera: string | null;
  sortOrder: Generated<number>;
  createdAt: Generated<Date>;
}

export interface PostsTable {
  id: Generated<string>;
  title: string;
  slug: string;
  excerpt: string | null;
  contentMd: Generated<string>;
  coverImageKey: string | null;
  published: Generated<boolean>;
  publishedAt: ColumnType<Date, string | undefined, string> | null;
  createdAt: Generated<Date>;
  updatedAt: Generated<Date>;
}

export interface TagsTable {
  id: Generated<string>;
  name: string;
  slug: string;
}

export interface PostTagsTable {
  postId: string;
  tagId: string;
}

export interface DB {
  projects: ProjectsTable;
  experience: ExperienceTable;
  skills: SkillsTable;
  albums: AlbumsTable;
  photos: PhotosTable;
  posts: PostsTable;
  tags: TagsTable;
  postTags: PostTagsTable;
}
