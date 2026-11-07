import type { Metadata } from "next";

import { ImpactEvidence } from "@/components/impact/ImpactEvidence";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { siteMeta } from "@/data/site";

const impactDescription =
  "Evidence-led impact records from Save and Serve Humanity, including medical outreach, youth development, awareness activity, community welfare stories, and known locations.";
const impactSocialImage = "/media/blog/160th-free-medical-camp/cover.png";

export const metadata: Metadata = {
  title: "Impact",
  description: impactDescription,
  alternates: { canonical: "/impact" },
  openGraph: {
    title: `Impact | ${siteMeta.name}`,
    description: impactDescription,
    url: "/impact",
    siteName: siteMeta.name,
    images: [{ url: impactSocialImage, alt: "SSH's 160th free medical camp." }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Impact | ${siteMeta.name}`,
    description: impactDescription,
    images: [impactSocialImage]
  }
};

export default function ImpactPage() {
  return (
    <>
      <ImpactEvidence />
      <ScrollRevealMotion />
    </>
  );
}
