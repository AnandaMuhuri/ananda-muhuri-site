// TODO(backend): replace with real `db.selectFrom('albums')...` queries
// once DATABASE_URL is wired up. Signatures are kept stable so callers
// don't need to change.
import { mockAlbums, type MockAlbum } from "@/lib/mock-data";

export async function listPublishedAlbums(): Promise<MockAlbum[]> {
  return mockAlbums.filter((a) => a.published);
}

export async function getAlbumBySlug(slug: string): Promise<MockAlbum | null> {
  return mockAlbums.find((a) => a.slug === slug) ?? null;
}
