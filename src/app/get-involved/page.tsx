import type { Metadata } from "next";

import { GetInvolvedIndex } from "@/components/get-involved/GetInvolvedIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { siteMeta } from "@/data/site";

const involvementDescription =
  "Practical ways to volunteer, partner, share verified stories, and contact Save and Serve Humanity.";
const involvementSocialImage = "/media/home/hero-160th-free-medical-camp.jpg";

export const metadata: Metadata = {
  title: "Get Involved",
  description: involvementDescription,
  alternates: { canonical: "/get-involved" },
  openGraph: {
    title: `Get Involved | ${siteMeta.name}`,
    description: involvementDescription,
    url: "/get-involved",
    siteName: siteMeta.name,
    images: [
      {
        url: involvementSocialImage,
        alt: "People gathered at Save and Serve Humanity's 160th free medical camp."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Get Involved | ${siteMeta.name}`,
    description: involvementDescription,
    images: [involvementSocialImage]
  }
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
