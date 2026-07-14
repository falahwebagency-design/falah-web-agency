import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">Who we build for</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
          Industries we understand
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-falah-border px-5 py-6 text-center font-display text-base font-semibold text-falah-text transition hover:border-falah-accentSoft hover:text-falah-accentSoft"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
