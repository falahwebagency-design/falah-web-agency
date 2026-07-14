import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects information submitted through our website and contact channels.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "July 14, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${lastUpdated}`}
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-falah-subtext">
          <p className="leading-relaxed">
            This Privacy Policy explains how {site.name} (&quot;Falah,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
            and protects information when you visit {site.domain} or contact
            us through our forms, email, phone, or WhatsApp.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Information we collect
          </h2>
          <p className="mt-3 leading-relaxed">
            We collect information you provide directly, such as your name,
            email address, phone number, and any project details you share
            through our contact form, email, or WhatsApp. We may also collect
            standard technical information automatically, such as your
            browser type, device type, and pages visited, through cookies or
            similar analytics technology.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            How we use your information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
            <li>To respond to inquiries and provide requested audits or quotes</li>
            <li>To deliver and support any website project you engage us for</li>
            <li>To improve our website and understand how visitors use it</li>
            <li>To send project-related updates and, where permitted, occasional relevant communications</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            We do not sell your personal information, and we do not share it
            with third parties except the service providers necessary to
            operate our business (such as email or hosting providers), or
            where required by law.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Cookies and analytics
          </h2>
          <p className="mt-3 leading-relaxed">
            Our site may use cookies or privacy-friendly analytics tools to
            understand traffic patterns and improve performance. You can
            disable cookies in your browser settings; doing so may affect
            some site functionality.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Data retention
          </h2>
          <p className="mt-3 leading-relaxed">
            We retain contact and project information for as long as needed
            to fulfil the purpose it was collected for, including any
            ongoing maintenance relationship, and then delete or anonymize it
            unless we are legally required to keep it longer.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Your choices
          </h2>
          <p className="mt-3 leading-relaxed">
            You can ask us at any time to access, correct, or delete the
            personal information we hold about you by emailing{" "}
            <a href={`mailto:${site.email}`} className="text-falah-accentSoft hover:underline">
              {site.email}
            </a>
            . We will respond within a reasonable timeframe.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Third-party links
          </h2>
          <p className="mt-3 leading-relaxed">
            Our site may link to third-party services such as WhatsApp or
            social platforms. We are not responsible for the privacy
            practices of those external sites.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Changes to this policy
          </h2>
          <p className="mt-3 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will
            be posted on this page with an updated revision date.
          </p>

          <h2 className="mt-10 font-display text-2xl font-semibold text-falah-text">
            Contact us
          </h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`} className="text-falah-accentSoft hover:underline">
              {site.email}
            </a>{" "}
            or via WhatsApp at {site.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
