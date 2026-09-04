import { listPublishedAlbums } from "@/server/queries/albums";
import { AlbumCard } from "@/components/AlbumCard";

export default async function CreatePage() {
  const albums = await listPublishedAlbums();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
      <p className="text-muted text-sm">02 — Create</p>
      <h1 className="mt-2 font-serif text-3xl">
        Some things I make when I&apos;m not writing code.
      </h1>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album) => (
          <AlbumCard key={album.slug} album={album} />
        ))}
      </div>
    </main>
  );
}
