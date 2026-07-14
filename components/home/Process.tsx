import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-falah-surface py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">Process</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
          Four phases. No guesswork about what happens next.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.number}>
              <p className="font-display text-4xl font-semibold text-falah-accent/30">
                {step.number}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-falah-text">
                {step.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-falah-subtext">
                {step.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-falah-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
