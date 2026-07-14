import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/data";

export default function FaqSection() {
  const preview = faqs.slice(0, 6);

  return (
    <section id="faq" className="border-t border-falah-border py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-5">FAQ</p>
        <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-falah-text sm:text-4xl">
          Questions worth answering upfront
        </h2>
        <div className="mt-12">
          <FaqAccordion items={preview} />
        </div>
        <p className="mt-8 text-sm text-falah-subtext">
          Have a different question?{" "}
          <Link href="/faq" className="text-falah-accentSoft hover:underline">
            See the full FAQ
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-falah-accentSoft hover:underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
