import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import FinalCta from "@/components/home/FinalCta";
import { faqs } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about pricing, timelines, SEO, maintenance, and working with Falah Web Agency remotely.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ | ${site.name}`,
    description:
      "Answers to common questions about pricing, timelines, SEO, maintenance, and working with Falah Web Agency remotely.",
    url: `${site.domain}/faq`,
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Questions worth answering upfront."
        description="Everything people usually ask before starting a project — pricing, timelines, SEO, and how we work with clients outside Pakistan."
      />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-content px-6">
          <FaqAccordion items={faqs} defaultOpenIndex={0} />
        </div>
      </section>
      <FinalCta />
    </>
  );
}
