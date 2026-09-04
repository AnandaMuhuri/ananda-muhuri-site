import { notFound } from "next/navigation";
import { getAlbumBySlug } from "@/server/queries/albums";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";

export default async function AlbumPage(props: PageProps<"/create/[slug]">) {
  const { slug } = await props.params;
  const album = await getAlbumBySlug(slug);

  if (!album || !album.published) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
      <h1 className="font-serif text-3xl">{album.title}</h1>
      {album.description && (
        <p className="text-muted mt-2">{album.description}</p>
      )}
      <div className="mt-10">
        <PhotoGrid photos={album.photos} />
      </div>
    </main>
  );
}
