"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";

export function ParallaxPhoto({
  href,
  src,
  alt,
  caption,
  detail,
}: {
  href: string;
  src: string;
  alt: string;
  caption: string;
  detail: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <Link href={href} className="group mt-10 block">
      <div ref={ref} className="relative aspect-[16/9] overflow-hidden rounded-sm">
        <motion.div className="absolute -inset-y-8 inset-x-0" style={{ y }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <p className="text-sm">{caption}</p>
          <p className="text-muted mt-1 text-sm">{detail}</p>
        </div>

        <span className="text-muted group-hover:text-accent text-sm transition-all duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
