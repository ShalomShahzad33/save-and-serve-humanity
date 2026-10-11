import type { Metadata } from "next";

import { DonateIndex } from "@/components/donate/DonateIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donation readiness for Save and Serve Humanity, prepared for confirmed campaign details, giving methods, transparency notes, and donor questions."
};

export default function DonatePage() {
  return (
    <>
      <DonateIndex />
      <UnderDevelopmentNotice
        title="Live donation processing is under development."
        description="The Donate page is intentionally not collecting funds yet. It needs SSH-approved giving details, campaign information, donor privacy wording, and any receipt or follow-up process before the CTA becomes a live payment path."
        items={[
          "Approved payment or campaign link",
          "Confirmed use-of-funds copy",
          "Donor inquiry and receipt process",
          "Privacy language for donor information"
        ]}
        href="/contact"
        linkLabel="Ask About Supporting SSH"
        variant="blue"
      />
      <ScrollRevealMotion />
    </>
  );
}