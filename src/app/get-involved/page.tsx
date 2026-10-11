import type { Metadata } from "next";

import { GetInvolvedIndex } from "@/components/get-involved/GetInvolvedIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Practical ways to learn about supporting Save and Serve Humanity while volunteer, contact, and donation details are being confirmed."
};

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedIndex />
      <UnderDevelopmentNotice
        title="Volunteer, partner, and support workflows are under development."
        description="This page outlines the honest support pathways. The actual forms, intake process, partner route, and donation handling should only go live after SSH confirms the real-world details."
        items={[
          "Volunteer intake process",
          "Partner inquiry route",
          "Project support pathway",
          "Privacy and follow-up wording"
        ]}
        href="/contact"
        linkLabel="Contact SSH"
        variant="blue"
      />
      <ScrollRevealMotion />
    </>
  );
}