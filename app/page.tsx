import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Problem from "@/components/home/Problem";
import Meaning from "@/components/home/Meaning";
import MissionVision from "@/components/home/MissionVision";
import CoreValues from "@/components/home/CoreValues";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Comparison from "@/components/home/Comparison";
import Work from "@/components/home/Work";
import Results from "@/components/home/Results";
import Testimonials from "@/components/home/Testimonials";
import Offer from "@/components/home/Offer";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Websites Built to Earn Trust and Leads`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Websites Built to Earn Trust and Leads`,
    description: site.description,
    url: site.domain,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Meaning />
      <MissionVision />
      <CoreValues />
      <Services />
      <Industries />
      <Process />
      <Comparison />
      <Work />
      <Results />
      <Testimonials />
      <Offer />
      <FaqSection />
      <FinalCta />
    </>
  );
}
