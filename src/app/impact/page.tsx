import type { Metadata } from "next";

import { ImpactEvidence } from "@/components/impact/ImpactEvidence";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Evidence-led impact records from Save and Serve Humanity, including medical outreach, youth development, awareness activity, community welfare stories, and known locations."
};

export default function ImpactPage() {
  return (
    <>
      <ImpactEvidence />
      <ScrollRevealMotion />
    </>
  );
}
