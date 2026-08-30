// TODO(backend): replace with real `db.selectFrom('projects')...` queries
// once DATABASE_URL is wired up. Signatures are kept stable so callers don't
// need to change.
import { mockProjects, type MockProject } from "@/lib/mock-data";

export async function listProjects(): Promise<MockProject[]> {
  return mockProjects;
}

export async function getProjectBySlug(
  slug: string,
): Promise<MockProject | null> {
  return mockProjects.find((p) => p.slug === slug) ?? null;
}
