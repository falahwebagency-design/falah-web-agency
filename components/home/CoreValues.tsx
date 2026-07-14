import { coreValues } from "@/lib/data";

export default function CoreValues() {
  return (
    <section className="bg-falah-surface py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">How we work</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
          Six things we don&apos;t compromise on
        </h2>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value) => (
            <div key={value.title}>
              <h3 className="font-display text-lg font-semibold text-falah-text">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-falah-subtext">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
