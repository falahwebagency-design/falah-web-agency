import ContactForm from "@/components/ContactForm";

export default function Offer() {
  return (
    <section id="offer" className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow mb-5">Start here</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
            Get a free audit of your current website
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-falah-subtext">
            Send us your site and we&apos;ll tell you — plainly — what&apos;s
            costing you leads: speed, messaging, SEO, or trust. No pitch
            attached. If we can&apos;t help, we&apos;ll tell you that too.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-falah-subtext">
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-falah-amber" />
              A short written breakdown, not a sales call
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-falah-amber" />
              Delivered within 2 business days
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-falah-amber" />
              No obligation to work with us afterward
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
