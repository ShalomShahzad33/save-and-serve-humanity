import type { Metadata } from "next";

import { AboutArchiveMedia } from "@/components/about/AboutArchiveMedia";
import { AboutFaithService } from "@/components/about/AboutFaithService";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutLeadership } from "@/components/about/AboutLeadership";
import { AboutMissionVision } from "@/components/about/AboutMissionVision";
import { AboutStory } from "@/components/about/AboutStory";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { siteMeta } from "@/data/site";

const aboutDescription =
  "About Save and Serve Humanity: a Pakistan-based humanitarian organization with documented service history reaching back to 2005.";
const aboutSocialImage = "/media/home/hero-160th-free-medical-camp.jpg";

export const metadata: Metadata = {
  title: "About",
  description: aboutDescription,
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: `About ${siteMeta.name}`,
    description: aboutDescription,
    url: "/about",
    siteName: siteMeta.name,
    images: [
      {
        url: aboutSocialImage,
        alt: "People gathered at Save and Serve Humanity's 160th free medical camp."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${siteMeta.name}`,
    description: aboutDescription,
    images: [aboutSocialImage]
  }
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
