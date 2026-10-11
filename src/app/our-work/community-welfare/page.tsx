import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { CommunityWelfareHero } from "@/components/our-work/community-welfare/CommunityWelfareHero";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";

export const metadata: Metadata = {
  title: "Community Welfare",
  description:
    "Explore Save and Serve Humanity's documented community welfare work, including COVID-19 ration distribution, awareness activity, and church-related community support."
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