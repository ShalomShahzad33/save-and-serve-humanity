import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { EducationYouthArchive } from "@/components/our-work/education-youth/EducationYouthArchive";
import { EducationYouthHero } from "@/components/our-work/education-youth/EducationYouthHero";
import { EducationYouthSeminarFeature } from "@/components/our-work/education-youth/EducationYouthSeminarFeature";
import { EducationYouthStories } from "@/components/our-work/education-youth/EducationYouthStories";
import { getAllPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Education & Youth",
  description:
    "Explore Save and Serve Humanity's documented education and youth work, including the 2025 Youth Seminar at Renewal Center, Rohinala, Youhanabad."
};

export default async function EducationYouthPage() {
  const posts = await getAllPosts();
  const blogPosts = posts.map((post) => post.meta);

  return (
    <>
      <EducationYouthHero />
      <EducationYouthSeminarFeature />
      <EducationYouthArchive />
      <EducationYouthStories posts={blogPosts} />
      <ScrollRevealMotion />
    </>
  );
}