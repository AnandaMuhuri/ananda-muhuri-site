import type { MockExperience } from "@/lib/mock-data";

function formatRange(start: string, end: string | null) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  return `${fmt(start)} — ${end ? fmt(end) : "Present"}`;
}

export function Timeline({ items }: { items: MockExperience[] }) {
  return (
    <ol className="space-y-8">
      {items.map((item) => (
        <li key={`${item.company}-${item.startDate}`}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium">
              {item.role} · {item.company}
            </h3>
            <span className="text-sm text-muted">
              {formatRange(item.startDate, item.endDate)}
            </span>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {item.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
