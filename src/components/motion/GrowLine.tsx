"use client";

import { motion } from "motion/react";

/** A horizontal rule that grows from 0 to full width on scroll into view. */
export function GrowLine({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`bg-border h-px w-full origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
