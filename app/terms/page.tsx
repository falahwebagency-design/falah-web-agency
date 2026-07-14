import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms that govern use of the ${site.name} website and our website design and development services.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "July 14, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Last updated: ${lastUpdated}`}
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-falah-subtext">
          <p className="leading-relaxed">
            These Terms & Conditions govern your use of {site.domain} and any
            services provided by {site.name} (&quot;Falah,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using our
            website or engaging our services, you agree to these terms.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Services
          </h2>
          <p className="mt-3 leading-relaxed">
            Falah provides website design, development, SEO, and maintenance
            services. The specific scope, deliverables, timeline, and price
            for any project will be confirmed in a written quote or proposal
            before work begins, and that proposal governs the engagement
            alongside these terms.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Quotes and payment
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>Quotes are based on the scope discussed and may change if requirements change materially during the project.</li>
            <li>Projects typically require a deposit before work begins, with the balance due on or before launch, unless otherwise agreed in writing.</li>
            <li>Ongoing maintenance plans are billed on the schedule agreed at signup and can be cancelled with notice as specified in the plan.</li>
          </ul>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Client responsibilities
          </h2>
          <p className="mt-3 leading-relaxed">
            Timely delivery depends on you providing requested content,
            feedback, and approvals promptly. Delays in providing these may
            extend the project timeline accordingly.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Ownership
          </h2>
          <p className="mt-3 leading-relaxed">
            Once a project is paid in full, ownership of the final website
            code, design files, and content created specifically for you
            transfers to you. Falah retains the right to display completed
            work in our portfolio unless you request otherwise in writing.
            Any third-party assets, plugins, or licensed software used in
            your project remain subject to their own licensing terms.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Revisions and change requests
          </h2>
          <p className="mt-3 leading-relaxed">
            Each project includes a defined number of revision rounds, as
            specified in your proposal. Requests beyond that scope, or
            requests after final approval and launch, may be quoted as
            additional work.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Limitation of liability
          </h2>
          <p className="mt-3 leading-relaxed">
            We take reasonable care to deliver reliable, secure, and
            well-tested websites, but we do not guarantee uninterrupted
            uptime, specific search rankings, or specific business results.
            To the extent permitted by law, Falah&apos;s liability for any
            claim arising from our services is limited to the amount paid
            for the project in question.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Termination
          </h2>
          <p className="mt-3 leading-relaxed">
            Either party may end an engagement with written notice. Work
            completed up to the point of termination will be invoiced, and
            any deposit paid for work not yet performed will be handled in
            good faith based on work completed.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Governing law
          </h2>
          <p className="mt-3 leading-relaxed">
            These terms are governed by the laws applicable in Pakistan,
            without regard to conflict-of-law principles, without prejudice
            to any mandatory consumer protections in your own jurisdiction.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Changes to these terms
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update these terms occasionally. Continued use of our
            website or services after changes are posted constitutes
            acceptance of the updated terms.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Contact us
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-falah-accentSoft hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
