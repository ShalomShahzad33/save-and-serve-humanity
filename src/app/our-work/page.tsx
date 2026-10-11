import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { OurWorkHero } from "@/components/our-work/OurWorkHero";
import { OurWorkPillarChapters } from "@/components/our-work/OurWorkPillarChapters";
import { OurWorkStoryGateway } from "@/components/our-work/OurWorkStoryGateway";
import { getAllPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore Save and Serve Humanity's documented work across healthcare, education and youth development, and community welfare in Pakistan."
};

export default async function OurWorkPage() {
  const posts = await getAllPosts();
  const postMetas = posts.map((post) => post.meta);

  return (
    <>
      <OurWorkHero />
      <OurWorkPillarChapters posts={postMetas} />
      <OurWorkStoryGateway posts={postMetas} />
      <ScrollRevealMotion />
    </>
  );
}
