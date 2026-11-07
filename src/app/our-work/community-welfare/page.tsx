import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { CommunityWelfareHero } from "@/components/our-work/community-welfare/CommunityWelfareHero";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { siteMeta } from "@/data/site";

const communityDescription =
  "Explore Save and Serve Humanity's documented community welfare work, including COVID-19 ration distribution, awareness activity, and church-related community support.";
const communitySocialImage = "/media/blog/covid-19-ration-distribution/cover.png";

export const metadata: Metadata = {
  title: "Community Welfare",
  description: communityDescription,
  alternates: { canonical: "/our-work/community-welfare" },
  openGraph: {
    title: `Community Welfare | ${siteMeta.name}`,
    description: communityDescription,
    url: "/our-work/community-welfare",
    siteName: siteMeta.name,
    images: [
      {
        url: communitySocialImage,
        alt: "Supplies prepared for SSH's COVID-19 ration distribution."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Community Welfare | ${siteMeta.name}`,
    description: communityDescription,
    images: [communitySocialImage]
  }
};

export default function CommunityWelfarePage() {
  return (
    <>
      <CommunityWelfareHero />
      <UnderDevelopmentNotice
        title="More community welfare sections are still being shaped."
        description="The current page already shows confirmed community records. The remaining page work should add deeper selected activities, story filtering, and a final CTA without inventing project totals or current program claims."
        items={[
          "Community story filtering from Markdown metadata",
          "A stronger selected-activities archive section",
          "Final read-community-stories CTA",
          "Any future records SSH confirms"
        ]}
        href="/blog"
        linkLabel="Read Published Stories"
      />
      <ScrollRevealMotion />
    </>
  );
}
