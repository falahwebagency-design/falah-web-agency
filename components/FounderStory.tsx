import Image from "next/image";
import { founderTimeline } from "@/lib/data";
import { site } from "@/lib/site";

export default function FounderStory() {
  return (
    <section className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(220px,300px)_1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">Founder</p>
            <div className="overflow-hidden rounded-2xl border border-falah-border">
              <Image
                src="/images/founder.jpg"
                alt={`${site.founder}, founder of ${site.name}`}
                width={300}
                height={400}
                className="aspect-[3/4] w-full max-w-[300px] object-cover object-top mx-auto lg:max-w-none"
              />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold leading-tight text-falah-text">
              {site.founder}
            </h2>
            <p className="mt-1 text-sm text-falah-subtext">Founder</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {founderTimeline.map((step) => (
              <div key={step.label} className="relative pl-6">
                <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-falah-accent to-falah-amber" />
                <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-accentSoft">
                  {step.label}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold text-falah-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-falah-subtext">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
