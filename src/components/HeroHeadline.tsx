"use client";

import { motion, type Variants } from "motion/react";

const lines = [
  { plain: "I build ", accent: "things." },
  { plain: "I create ", accent: "moments." },
  { plain: "I explore ", accent: "ideas." },
];

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroHeadline() {
  return (
    <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] font-medium tracking-[-0.06em] uppercase">
      {lines.map((line, i) => (
        <motion.span
          key={line.accent}
          className="block"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          {line.plain}
          <span className="text-accent font-serif tracking-normal normal-case">
            {line.accent}
          </span>
        </motion.span>
      ))}
    </h1>
  );
}
