import { whatsappLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-falah-surface py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-falah-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-content px-6 text-center">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight text-falah-text sm:text-5xl">
          Your business is ready. Is your website?
        </h2>
        <div className="mt-10">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-block rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-8 py-4 text-sm font-semibold text-white"
          >
            Book your free call
          </a>
        </div>
      </div>
    </section>
  );
}
