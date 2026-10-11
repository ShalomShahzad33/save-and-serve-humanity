import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { CommunityWelfareHero } from "@/components/our-work/community-welfare/CommunityWelfareHero";

export const metadata: Metadata = {
  title: "Community Welfare",
  description:
    "Explore Save and Serve Humanity's documented community welfare work, including COVID-19 ration distribution, awareness activity, and church-related community support."
};

export default function CommunityWelfarePage() {
  return (
    <>
      <CommunityWelfareHero />
      <ScrollRevealMotion />
    </>
  );
}
