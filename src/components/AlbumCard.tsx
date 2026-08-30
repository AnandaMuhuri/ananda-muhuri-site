import Image from "next/image";
import Link from "next/link";
import type { MockAlbum } from "@/lib/mock-data";

export function AlbumCard({ album }: { album: MockAlbum }) {
  const cover = album.photos[0];

  return (
    <Link href={`/create/${album.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-foreground/5">
        {cover && (
          <Image
            src={cover.src}
            alt={cover.caption}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <h3 className="mt-3 font-serif text-lg transition-colors group-hover:text-accent">
        {album.title}
      </h3>
      <p className="text-sm text-muted">{album.photos.length} photos</p>
    </Link>
  );
}
