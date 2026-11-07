import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { PrivacyIndex } from "@/components/privacy/PrivacyIndex";
import { siteMeta } from "@/data/site";

const privacyDescription =
  "How the current Save and Serve Humanity website handles contact information, technical data, cookies, external services, and published media.";
const privacySocialImage = "/brand/ssh-logo-transparent.png";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacyDescription,
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: `Privacy | ${siteMeta.name}`,
    description: privacyDescription,
    url: "/privacy",
    siteName: siteMeta.name,
    images: [{ url: privacySocialImage, alt: `${siteMeta.name} logo` }],
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `Privacy | ${siteMeta.name}`,
    description: privacyDescription,
    images: [privacySocialImage]
  }
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyIndex />
      <ScrollRevealMotion />
    </>
  );
}
