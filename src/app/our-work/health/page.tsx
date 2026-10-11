import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { HealthCta } from "@/components/our-work/health/HealthCta";
import { HealthEyeCare } from "@/components/our-work/health/HealthEyeCare";
import { HealthFreeDispensary } from "@/components/our-work/health/HealthFreeDispensary";
import { HealthHero } from "@/components/our-work/health/HealthHero";
import { HealthMedicalCampHistory } from "@/components/our-work/health/HealthMedicalCampHistory";
import { HealthStories } from "@/components/our-work/health/HealthStories";
import { HealthWomensOutreach } from "@/components/our-work/health/HealthWomensOutreach";
import { getAllPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Health Work",
  description:
    "Explore Save and Serve Humanity's documented health work, including free medical camps, women-focused outreach, and public health awareness records."
};

export default async function HealthWorkPage() {
  const posts = await getAllPosts();
  const blogPosts = posts.map((post) => post.meta);

  return (
    <>
      <HealthHero />
      <HealthMedicalCampHistory />
      <HealthWomensOutreach />
      <HealthEyeCare />
      <HealthFreeDispensary />
      <HealthStories posts={blogPosts} />
      <HealthCta />
      <ScrollRevealMotion />
    </>
  );
}