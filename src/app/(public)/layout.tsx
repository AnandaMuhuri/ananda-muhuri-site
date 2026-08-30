import Link from "next/link";
import { profile } from "@/lib/mock-data";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/create", label: "Create" },
  { href: "/think", label: "Think" },
  { href: "/about", label: "About" },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const firstName = profile.name.split(" ")[0];

  return (
    <>
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-widest"
        >
          {firstName}
        </Link>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-widest text-muted sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <details className="group sm:hidden">
          <summary className="cursor-pointer text-xs uppercase tracking-widest text-muted marker:content-none [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-6 z-10 mt-4 flex flex-col items-end gap-4 rounded-lg border border-border bg-background px-6 py-5 text-xs uppercase tracking-widest text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </details>
      </header>

      {children}

      <footer className="mt-24 border-t border-border px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="text-sm text-muted">
              Software · Photography · Art · Curiosity
            </p>
          </div>
          <nav className="flex gap-4 text-xs uppercase tracking-widest text-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialLinks />
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
