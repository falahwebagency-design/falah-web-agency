import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="bg-falah-surface py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Work"
          title="Concept case studies"
          description="Representative projects reflecting the kind of work we do across industries."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <div
              key={project.title}
              className="card-hover overflow-hidden rounded-2xl border border-falah-border"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-amber">
                  {project.tag}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-falah-text">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-falah-subtext">
                  {project.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
