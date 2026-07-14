import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Meaning from "@/components/home/Meaning";
import MissionVision from "@/components/home/MissionVision";
import FounderStory from "@/components/FounderStory";
import CoreValues from "@/components/home/CoreValues";
import FinalCta from "@/components/home/FinalCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Falah Web Agency: founded by Taha Ikram to combine design, speed, and search into one standard for Pakistani and international businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${site.name}`,
    description:
      "Meet Falah Web Agency: founded by Taha Ikram to combine design, speed, and search into one standard for Pakistani and international businesses.",
    url: `${site.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Falah"
        title="A web agency built on one idea: success that lasts."
        description="We're a small, focused team that designs and builds websites for businesses that want more than a brochure — a site that keeps earning trust long after launch day."
      />
      <Meaning />
      <MissionVision />
      <FounderStory />
      <CoreValues />
      <FinalCta />
    </>
  );
}
