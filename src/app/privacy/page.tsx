import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { PrivacyIndex } from "@/components/privacy/PrivacyIndex";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How the current Save and Serve Humanity website handles contact information, technical data, cookies, external services, and published media.",
  alternates: {
    canonical: "/privacy"
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
