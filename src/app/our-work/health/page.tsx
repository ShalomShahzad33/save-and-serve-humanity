import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { HealthCta } from "@/components/our-work/health/HealthCta";
import { HealthEyeCare } from "@/components/our-work/health/HealthEyeCare";
import { HealthFreeDispensary } from "@/components/our-work/health/HealthFreeDispensary";
import { HealthHero } from "@/components/our-work/health/HealthHero";
import { HealthMedicalCampHistory } from "@/components/our-work/health/HealthMedicalCampHistory";
import { HealthStories } from "@/components/our-work/health/HealthStories";
import { HealthWomensOutreach } from "@/components/our-work/health/HealthWomensOutreach";
import { siteMeta } from "@/data/site";
import { getAllPosts } from "@/lib/content/blog";

const healthDescription =
  "Explore Save and Serve Humanity's documented health work, including free medical camps, women-focused outreach, and public health awareness records.";
const healthSocialImage = "/media/blog/160th-free-medical-camp/cover.png";

export const metadata: Metadata = {
  title: "Health Work",
  description: healthDescription,
  alternates: { canonical: "/our-work/health" },
  openGraph: {
    title: `Health Work | ${siteMeta.name}`,
    description: healthDescription,
    url: "/our-work/health",
    siteName: siteMeta.name,
    images: [{ url: healthSocialImage, alt: "SSH's 160th free medical camp." }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Health Work | ${siteMeta.name}`,
    description: healthDescription,
    images: [healthSocialImage]
  }
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
