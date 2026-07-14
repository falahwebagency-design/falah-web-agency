import Image from "next/image";
import Link from "next/link";
import { results } from "@/lib/data";

export default function Results() {
  return (
    <section id="results" className="relative border-t border-falah-border py-24 sm:py-32">
      <div className="grain absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">Results</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
              Before and after: what a rebuild actually changes
            </h2>
            <p className="mt-3 max-w-xl text-sm text-falah-subtext">
              Real categories of improvement we target on every rebuild — the
              same gap between &quot;has a website&quot; and &quot;has a
              website that works.&quot;
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-falah-border">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Website performance analytics showing growth after redesign"
              width={1200}
              height={500}
              className="h-56 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((item) => (
            <div
              key={item.title}
              className="card-hover overflow-hidden rounded-2xl border border-falah-border"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={900}
                  height={600}
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-falah-bg via-falah-bg/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-falah-bg/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-falah-accentSoft backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="font-display text-base font-semibold text-falah-text">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-falah-subtext">{item.body}</p>
                <div className="mt-5 flex items-center justify-between border-t border-falah-border pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest2 text-falah-subtext">
                      {item.metricLabel}
                    </p>
                    <p className="font-display text-lg font-semibold text-falah-text">
                      {item.metricValue}
                    </p>
                  </div>
                  <span className="rounded-full bg-falah-accent/15 px-3 py-1 text-xs font-semibold text-falah-accentSoft">
                    {item.delta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl border border-falah-border bg-falah-surface p-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="https://images.unsplash.com/photo-1639170952854-16636715af61?fm=jpg&q=75&w=300&auto=format&fit=crop"
              alt="Website design on a laptop screen"
              width={64}
              height={64}
              className="hidden h-16 w-16 rounded-xl object-cover sm:block"
            />
            <p className="max-w-md text-sm leading-relaxed text-falah-subtext">
              Every number above is a category we measure on real projects —
              speed, retention, and lead volume — not a promise, a target we
              design toward from day one.
            </p>
          </div>
          <Link
            href="/#offer"
            className="btn-glow flex-none rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-6 py-3 text-sm font-semibold text-white"
          >
            Get your free audit
          </Link>
        </div>
      </div>
    </section>
  );
}
