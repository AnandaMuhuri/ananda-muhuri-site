"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { MockPhoto } from "@/lib/mock-data";

export function PhotoGrid({ photos }: { photos: MockPhoto[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? null : (i + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, step]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="mb-4 block w-full cursor-zoom-in"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="w-full rounded-lg"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 text-2xl text-white/80 hover:text-white"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
            className="absolute left-4 text-3xl text-white/80 hover:text-white"
          >
            ‹
          </button>
          <Image
            src={photos[openIndex].src}
            alt={photos[openIndex].caption}
            width={photos[openIndex].width}
            height={photos[openIndex].height}
            sizes="90vw"
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-3 text-sm text-white/70">
            {photos[openIndex].caption}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
            className="absolute right-4 text-3xl text-white/80 hover:text-white"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
