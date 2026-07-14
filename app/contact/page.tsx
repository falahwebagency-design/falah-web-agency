import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Falah Web Agency for a free website audit or a project quote. We work with businesses across Pakistan, the US, and the UK.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact Us | ${site.name}`,
    description:
      "Get in touch with Falah Web Agency for a free website audit or a project quote.",
    url: `${site.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        description="Whether you need a new site, a rebuild, or just a second opinion on what's slowing your leads down — send us a message and we'll reply within 2 business days."
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-content gap-16 px-6 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-5">Reach us directly</p>
            <h2 className="font-display text-2xl font-semibold leading-snug text-falah-text">
              Prefer to skip the form?
            </h2>
            <ul className="mt-8 space-y-6 text-sm">
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-base font-medium text-falah-text hover:text-falah-accentSoft"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
                  Phone
                </p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-base font-medium text-falah-text hover:text-falah-accentSoft"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
                  WhatsApp
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow mt-2 inline-block rounded-full bg-gradient-to-r from-falah-accent to-[#5B45E0] px-6 py-3 text-sm font-semibold text-white"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-widest2 text-falah-subtext/70">
                  Where we work
                </p>
                <p className="mt-1 text-base font-medium text-falah-text">
                  Based in Pakistan — serving clients in {site.locations.join(", ")},
                  the US, and the UK, fully remote.
                </p>
              </li>
            </ul>
          </div>
          <ContactForm
            submitLabel="Send message"
            messagePlaceholder="Tell us about your business and what you're looking for."
          />
        </div>
      </section>
    </>
  );
}
