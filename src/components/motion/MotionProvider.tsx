"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * Centralizes prefers-reduced-motion handling so individual components don't
 * have to branch their render tree on it (that caused a hydration mismatch —
 * server always renders the animated tree, so any client-only conditional
 * swap between motion.* and plain elements breaks hydration).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
