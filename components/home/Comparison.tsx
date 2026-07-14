import { comparison } from "@/lib/data";

export default function Comparison() {
  return (
    <section className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">The difference</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
          Typical agency vs. Falah
        </h2>
        <div className="mt-14 overflow-hidden rounded-2xl border border-falah-border">
          <div className="grid grid-cols-2 border-b border-falah-border bg-falah-surface">
            <div className="px-6 py-4 text-sm font-semibold text-falah-subtext">
              Typical agency
            </div>
            <div className="px-6 py-4 text-sm font-semibold text-falah-accentSoft">
              Falah
            </div>
          </div>
          {comparison.map((row, i) => (
            <div
              key={row.typical}
              className={`grid grid-cols-2 ${
                i < comparison.length - 1 ? "border-b border-falah-border" : ""
              }`}
            >
              <div className="border-r border-falah-border px-6 py-5 text-sm text-falah-subtext">
                {row.typical}
              </div>
              <div className="px-6 py-5 text-sm font-medium text-falah-text">
                {row.falah}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
