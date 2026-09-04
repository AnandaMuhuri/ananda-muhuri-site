"use client";

import { useState } from "react";

function currentTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return (
    (document.documentElement.getAttribute("data-theme") as
      "light" | "dark" | null) ?? "light"
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(currentTheme);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="text-foreground/70 hover:text-foreground flex h-6 w-6 items-center justify-center transition-colors"
    >
      <span aria-hidden>◐</span>
    </button>
  );
}
