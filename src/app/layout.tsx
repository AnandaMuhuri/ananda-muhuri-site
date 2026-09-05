import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ananda-muhuri.vercel.app"),

  title: {
    default: "Ananda Muhuri — Software Development Engineer",
    template: "%s — Ananda Muhuri",
  },

  description:
    "Portfolio of Ananda Muhuri, a Software Development Engineer building backend systems, APIs, and modern web applications.",

  keywords: [
    "Ananda Muhuri",
    "Ananda Muhuri Software Engineer",
    "Ananda Muhuri Developer",
    "Software Development Engineer",
    "Backend Engineer",
    "Backend Developer",
    "Node.js Developer",
    "TypeScript Developer",
  ],

  authors: [
    {
      name: "Ananda Muhuri",
    },
  ],

  creator: "Ananda Muhuri",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ananda Muhuri — Software Development Engineer",
    description: "Portfolio of Ananda Muhuri, a Software Development Engineer.",
    url: "https://ananda-muhuri.vercel.app/",
    siteName: "Ananda Muhuri",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
      </body>
    </html>
  );
}
