import Link from "next/link";

const work = [
  {
    number: "01",
    title: "Loan Against Mutual Funds — LAMF v2",
    type: "Core product",
    description:
      "Built core lending workflows spanning vendor integration, fund allocation, lien management, cross-service provisioning, and repayment flows.",
    tags: ["TypeScript", "Fastify", "MySQL", "Redis"],
    slug: "lamf-v2",
  },
  {
    number: "02",
    title: "Change Phone",
    type: "Customer journey",
    description:
      "Built an end-to-end post-login phone-change journey with authentication, eligibility checks, KYC and fraud validation, OTP verification, and transactional account updates.",
    tags: ["TypeScript", "Fastify", "Redis", "MySQL"],
    slug: "change-phone",
  },
  {
    number: "03",
    title: "Change Bank",
    type: "Customer journey",
    description:
      "Built bank-account change flows with eligibility orchestration, penny-drop verification, duplicate-account protection, and fuzzy identity matching against KYC data.",
    tags: ["TypeScript", "Fastify", "gRPC", "MySQL"],
    slug: "change-bank",
  },
  {
    number: "04",
    title: "Address Verification",
    type: "Async infrastructure",
    description:
      "Built an asynchronous address-verification pipeline using Go, SQS, vendor integration, webhooks, and idempotent processing.",
    tags: ["Go", "SQS", "Gin", "MySQL"],
    slug: "address-verification",
  },
  {
    number: "05",
    title: "Mandate Lifecycle",
    type: "Payments",
    description:
      "Worked on mandate cancellation, status flows, UPI autopay cleanup, retry handling, and controlled rollout behaviour.",
    tags: ["Go", "TypeScript", "Payments"],
    slug: "mandates",
  },
];

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
      {/* Header */}
      <section className="border-border border-b pb-10 sm:pb-14">
        <p className="text-muted text-xs tracking-[0.2em] uppercase">Work</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
            Professional work.
          </h1>

          <p className="text-muted max-w-sm text-sm leading-6">
            Engineering systems I&apos;ve worked on — from customer journeys and
            identity flows to lending infrastructure and asynchronous services.
          </p>
        </div>
      </section>

      {/* Work list */}
      <section>
        {work.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group border-border grid gap-6 border-b py-10 transition-colors sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-14"
          >
            {/* Number */}
            <span className="text-muted text-xs tracking-widest">
              {item.number}
            </span>

            {/* Main content */}
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="group-hover:text-accent font-serif text-3xl tracking-tight transition-colors duration-300 sm:text-4xl">
                  {item.title}
                </h2>

                <span className="text-muted text-[11px] tracking-[0.16em] uppercase">
                  {item.type}
                </span>
              </div>

              <p className="text-muted mt-4 max-w-2xl text-sm leading-6 sm:text-base">
                {item.description}
              </p>

              <div className="text-muted mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[11px] tracking-[0.14em] uppercase">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-end sm:justify-end">
              <span className="text-muted group-hover:text-accent text-xl transition-all duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Footer note */}
      <section className="pt-12">
        <p className="text-muted max-w-xl text-sm leading-6">
          This is a curated selection of engineering work across customer
          journeys, KYC, banking, payments, lending, and backend infrastructure.
        </p>
      </section>
    </main>
  );
}
