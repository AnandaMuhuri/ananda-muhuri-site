// TODO(backend): replace with real `db.selectFrom('experience'|'skills')...`
// queries once DATABASE_URL is wired up. Signatures are kept stable so
// callers don't need to change.
import { mockExperience, mockSkills } from "@/lib/mock-data";
import type { MockExperience, MockSkill } from "@/lib/mock-data";

export async function listExperience(): Promise<MockExperience[]> {
  return mockExperience;
}

export async function listSkills(): Promise<MockSkill[]> {
  return mockSkills;
}
