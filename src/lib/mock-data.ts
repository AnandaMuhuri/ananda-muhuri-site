// Static content for building/testing the frontend before the backend
// (Supabase + R2) is wired up. Shapes mirror the real DB tables in
// db/migrations/0001_init.ts so swapping src/server/queries/* to real Kysely
// queries later is a drop-in replacement — no page/component changes needed.
//
// Professional content (experience/skills/projects/education) and the
// photography albums are real content from the user.

export const profile = {
  name: "Ananda Muhuri",
  role: "Software Development Engineer",
  tagline:
    "Backend engineer building fintech systems at Stashfin. Also a photographer and painter.",
  summary:
    "Backend Engineer with 1+ year building low-latency, scalable fintech systems at Stashfin using Node.js, TypeScript, Fastify, MySQL, Redis and AWS. Strong in API design, fraud/risk rule engines, SQL optimization, and distributed service integration.",
  email: "anandamuhuri1@gmail.com",
  github: "https://github.com/AnandaMuhuri",
  linkedin: "https://www.linkedin.com/in/ananda-muhuri-694365220/",
  instagram: "https://www.instagram.com/ananda_muhuri.go",
  facebook: "https://www.facebook.com/ananda.muhuri.09",
  twitter: "https://twitter.com/ananda_muhuri",
  whatsapp: "https://api.whatsapp.com/send?phone=+91-8731910655&text=Hello,more information!!",
  photo: {
    src: "/photos/hilltop-sunrise.jpg",
    width: 960,
    height: 1280,
  },
};

// "03 — Explore" section on the homepage. Only categories with a specific
// detail the user gave are filled in — the rest stay bare rather than
// inventing favorites.
export const interests = [
  { category: "Football", detail: "Messi · Barça" },
  { category: "Cricket", detail: "Virat Kohli · RCB" },
  { category: "Comics", detail: "Batman" },
  { category: "Photography" },
  { category: "Drawing" },
  { category: "Travel" },
];

export interface MockProject {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  links: { repo?: string; live?: string };
  startDate: string;
  endDate: string | null;
  featured: boolean;
}

export interface MockExperience {
  company: string;
  role: string;
  highlights: string[];
  startDate: string;
  endDate: string | null;
}

export interface MockSkill {
  name: string;
  category: string;
}

export interface MockEducation {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string | null;
}

export interface MockPhoto {
  id: string;
  src: string;
  width: number;
  height: number;
  caption: string;
}

export interface MockAlbum {
  slug: string;
  title: string;
  description: string;
  published: boolean;
  photos: MockPhoto[];
}

// TODO: add exact repo URLs (see github.com/AnandaMuhuri) once confirmed.
export const mockProjects: MockProject[] = [
  {
    slug: "notification-service",
    title: "Notification Service — Multi-Tenant Event-Driven Microservice",
    summary:
      "Reusable, multi-tenant notification microservice with independently scalable API/worker processes.",
    description:
      "Designed a reusable, multi-tenant notification microservice with independently scalable API/worker processes and interfaces (Dependency Inversion) behind the repository, queue, and provider layers, so Prisma, BullMQ, and the email provider are swappable and unit-testable with mocks.\n\nBuilt idempotent enqueueing and exponential-backoff retries via BullMQ/Redis, with a pluggable EmailProvider adapter (Resend) designed for drop-in SES/SendGrid support.",
    tags: ["Node.js", "TypeScript", "Express", "BullMQ", "Redis", "PostgreSQL", "Prisma"],
    links: {},
    startDate: "2026-01-01",
    endDate: null,
    featured: true,
  },
  {
    slug: "faq-chatbot",
    title: "FAQ Chatbot — SQL Query Generator",
    summary:
      "NLP-driven chatbot translating natural language queries into precise SQL for non-technical users.",
    description:
      "Developed an NLP-driven chatbot translating natural language queries to precise SQL, enabling non-technical users to query databases without SQL knowledge.",
    tags: ["Python", "LangChain", "Phi-2 LLM", "PostgreSQL"],
    links: {},
    startDate: "2024-06-01",
    endDate: "2024-06-01",
    featured: false,
  },
];

export const mockExperience: MockExperience[] = [
  {
    company: "Stashfin",
    role: "Software Development Engineer (Backend)",
    startDate: "2025-09-01",
    endDate: null,
    highlights: [
      "Designed and shipped an end-to-end change-phone journey across Customers and KYC services (Fastify/TypeScript) with JWT-managed sessions bounding the journey to a 1-hour window, config-driven fraud/pre-validation gates, and transactional MySQL phone cutover with conflict handling for in-flight leads.",
      "Engineered change-bank eligibility and verification flows integrating penny-drop APIs and parallel async risk checks (Promise.allSettled), including Dice-coefficient fuzzy name matching against KYC identity data.",
      "Implemented a Redis-backed rate limiter using a Lua script on the identify step, auto-blocking users for 24 hours after 3 failed attempts with false details within 1 hour.",
      "Built the core lien-validation and fund-allocation engine for a Loan-Against-Mutual-Funds product (Fastify/TypeScript) launched to a Closed User Group, cutting allocation time complexity from O(n²) to O(n) via a map-based rewrite.",
      "Designed an encrypted OAuth2/AES-secured client for the mutual-fund vendor and a persisted pledge-status state machine (validated→submitted→pledged→disbursed) guarding against race conditions on concurrent updates.",
      "Orchestrated cross-service account provisioning by chaining successful pledges into automatic loan/savings-account creation on the internal LMS, backed by a ~1,100-line integration test suite (node:test/nock) across 7 endpoints.",
    ],
  },
  {
    company: "Stashfin",
    role: "SDE Intern (Fullstack)",
    startDate: "2025-06-01",
    endDate: "2025-08-01",
    highlights: [
      "Launched a secure internal Admin Portal for Ops teams, implementing RBAC and Google OAuth; optimized service-to-service integrations, improving customer query resolution speed by 20%.",
      "Developed secure file-storage APIs using AWS S3 to handle daily Excel uploads of transaction data, improving reliability and ensuring data integrity.",
      "Architected and deployed gRPC and REST-based microservices serving 1000+ monthly users with API latency consistently under 100ms.",
      "Built BBPS and IFA service APIs powering 100+ daily financial transactions, enabling real-time MySQL updates.",
    ],
  },
];

export const mockSkills: MockSkill[] = [
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Python", category: "Languages" },

  { name: "Node.js", category: "Backend Development" },
  { name: "Fastify", category: "Backend Development" },
  { name: "Express", category: "Backend Development" },
  { name: "TypeDI", category: "Backend Development" },
  { name: "REST APIs", category: "Backend Development" },
  { name: "gRPC", category: "Backend Development" },

  { name: "Grafana", category: "Observability & Debugging" },
  { name: "CubeAPM", category: "Observability & Debugging" },
  { name: "New Relic", category: "Observability & Debugging" },
  { name: "Log Analysis", category: "Observability & Debugging" },

  { name: "MySQL", category: "Databases & Caching" },
  { name: "PostgreSQL", category: "Databases & Caching" },
  { name: "MongoDB", category: "Databases & Caching" },
  { name: "Redis", category: "Databases & Caching" },

  { name: "AWS SQS", category: "Messaging & Cloud" },
  { name: "AWS S3", category: "Messaging & Cloud" },
  { name: "Kafka", category: "Messaging & Cloud" },
  { name: "Docker", category: "Messaging & Cloud" },
  { name: "GitHub Actions", category: "Messaging & Cloud" },
  { name: "GitLab CI", category: "Messaging & Cloud" },

  { name: "State Machines", category: "Engineering Practices" },
  { name: "Config-driven Rules", category: "Engineering Practices" },
  { name: "Idempotent Jobs", category: "Engineering Practices" },
  { name: "Webhooks", category: "Engineering Practices" },
  { name: "Feature Flags", category: "Engineering Practices" },
];

export const mockEducation: MockEducation[] = [
  {
    institution: "National Institute of Technology Agartala",
    degree: "B.Tech in Electronics and Communication Engineering",
    startDate: "2021-01-01",
    endDate: "2025-01-01",
  },
];

export const mockAchievements: string[] = [
  "Qualified GATE 2025 (ECE) — Top 13% nationwide.",
  "Awarded Ishan Uday Scholarship by UGC — granted to 10,000 students annually from the North-Eastern Region.",
  "Secured 2nd position in Junior Mathematics Olympiad (2017).",
];

export const mockAlbums: MockAlbum[] = [
  {
    slug: "nit-agartala",
    title: "NIT Agartala",
    description: "18th Convocation, January 2026.",
    published: true,
    photos: [
      {
        id: "convocation-2",
        src: "/photos/convocation.jpg",
        width: 2048,
        height: 1363,
        caption: "Receiving the degree, 18th Convocation",
      },
      {
        id: "nit-campus",
        src: "/photos/nit-campus.jpg",
        width: 960,
        height: 1280,
        caption: "On campus, convocation day",
      },
    ],
  },
  {
    slug: "rajasthan-trip",
    title: "Rajasthan Trip",
    description: "Jaipur and Agra — Hawa Mahal, Amber Fort, and the Taj Mahal.",
    published: true,
    photos: [
      {
        id: "taj-mahal",
        src: "/photos/taj-mahal.jpg",
        width: 1802,
        height: 2400,
        caption: "Taj Mahal, Agra",
      },
      {
        id: "jaipur-skyline-2",
        src: "/photos/jaipur-skyline.webp",
        width: 3000,
        height: 3000,
        caption: "Jaipur skyline",
      },
      {
        id: "hawa-mahal-1",
        src: "/photos/hawa-mahal-1.jpg",
        width: 960,
        height: 1280,
        caption: "Hawa Mahal, Jaipur",
      },
      {
        id: "amber-fort",
        src: "/photos/amber-fort.jpg",
        width: 960,
        height: 1280,
        caption: "Amber Fort courtyard, Jaipur",
      },
      {
        id: "hawa-mahal-2",
        src: "/photos/hawa-mahal-2.jpg",
        width: 1800,
        height: 2400,
        caption: "Hawa Mahal facade, Jaipur",
      },
    ],
  },
  {
    slug: "moments",
    title: "Moments",
    description: "A few other favorites.",
    published: true,
    photos: [
      {
        id: "football-match",
        src: "/photos/football-match.jpg",
        width: 1800,
        height: 2400,
        caption: "Match day",
      },
      {
        id: "forest-portrait",
        src: "/photos/forest-portrait.jpg",
        width: 1080,
        height: 1440,
        caption: "Out in the green",
      },
    ],
  },
];
