import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Services"
          title="Everything your website needs, under one roof"
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.tag}
              className="card-hover rounded-2xl border border-falah-border p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/60">
                {service.tag}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-falah-text">
                {service.outcome}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-falah-subtext">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
