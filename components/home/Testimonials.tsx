import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">What clients say</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
          Trusted by owners who don&apos;t have time for guesswork
        </h2>
      </div>
      <div className="marquee-pause edge-fade relative mt-14 overflow-hidden">
        <div className="marquee-track flex w-max animate-testimonials gap-6 px-6">
          {track.map((t, i) => (
            <figure
              key={i}
              className="card-hover w-[340px] flex-none rounded-2xl border border-falah-border bg-falah-surface p-7"
            >
              <svg
                className="mb-4 h-6 w-6 text-falah-accentSoft"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.5 7C6.46 7 4 9.46 4 12.5S6.46 18 9.5 18c.34 0 .67-.03 1-.09V19c0 1.66-1.34 3-3 3H7v2h.5c2.76 0 5-2.24 5-5v-6.5C12.5 9.46 11.32 7 9.5 7zm9 0C15.46 7 13 9.46 13 12.5S15.46 18 18.5 18c.34 0 .67-.03 1-.09V19c0 1.66-1.34 3-3 3H16v2h.5c2.76 0 5-2.24 5-5v-6.5C21.5 9.46 20.32 7 18.5 7z" />
              </svg>
              <blockquote className="font-display text-lg leading-snug text-falah-text">
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-sm text-falah-subtext">
                  <span className="block font-medium text-falah-text">
                    {t.name}
                  </span>
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
