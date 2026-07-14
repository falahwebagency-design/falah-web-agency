import SectionHeading from "@/components/ui/SectionHeading";
import { problems } from "@/lib/data";

export default function Problem() {
  return (
    <section className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Why most agency websites fail"
          title="A website isn't a brochure. If it isn't working for your business, it's working against it."
          className="max-w-2xl"
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-falah-border bg-falah-border sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div key={item.title} className="card-hover bg-falah-bg p-8">
              <h3 className="font-display text-lg font-semibold text-falah-text">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-falah-subtext">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
