"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function HeroPortrait({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="group relative mx-auto aspect-[3/4] w-40 overflow-hidden rounded-sm md:mx-0 md:w-full"
      initial={{ opacity: 0, y: 15, scale: 1.05 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 280px, (min-width: 768px) 220px, 160px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        priority
      />
    </motion.div>
  );
}
