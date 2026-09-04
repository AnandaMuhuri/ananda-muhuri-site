import Link from "next/link";
import { profile } from "@/lib/mock-data";
import { SocialLinks } from "@/components/SocialLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/create", label: "Create" },
  { href: "/think", label: "Think" },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const parts = profile.name.split(" ");
  const firstName = parts[0];
  const lastName = parts.at(-1);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium tracking-widest uppercase"
        >
          {firstName} <span className="text-accent">{lastName}</span>
        </Link>
        <nav className="text-muted hidden items-center gap-6 text-xs tracking-widest uppercase sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <details className="group sm:hidden">
          <summary className="text-muted cursor-pointer text-xs tracking-widest uppercase marker:content-none [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="border-border bg-background text-muted absolute right-6 z-10 mt-4 flex flex-col items-end gap-4 rounded-lg border px-6 py-5 text-xs tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </details>
      </header>

      {children}

      <footer className="border-border mt-24 border-t px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="text-muted text-sm">
              Software · Photography · Art · Curiosity
            </p>
          </div>
          <nav className="text-muted flex gap-4 text-xs tracking-widest uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialLinks />
        </div>
        <p className="text-muted mx-auto mt-8 max-w-4xl text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}
