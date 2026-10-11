import type { Metadata } from "next";

import { AboutArchiveMedia } from "@/components/about/AboutArchiveMedia";
import { AboutFaithService } from "@/components/about/AboutFaithService";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutStory } from "@/components/about/AboutStory";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Save and Serve Humanity: a Pakistan-based humanitarian organization with documented service history reaching back to 2005."
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      <AboutFaithService />
      <AboutLeadership />
      <AboutArchiveMedia />
      <AboutFinalCta />
      <ScrollRevealMotion />
    </>
  );
}