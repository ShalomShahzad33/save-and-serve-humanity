import type { Metadata } from "next";

import { GetInvolvedIndex } from "@/components/get-involved/GetInvolvedIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Practical ways to volunteer, partner, share verified stories, and contact Save and Serve Humanity."
};

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedIndex />
      <UnderDevelopmentNotice
        title="Volunteer and partner workflows are under development."
        description="The public contact route is available now. Formal volunteer intake and partnership processes will go live after SSH confirms the real-world details."
        items={[
          "Volunteer intake process",
          "Partner inquiry route",
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
