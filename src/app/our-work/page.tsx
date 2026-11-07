import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { OurWorkHero } from "@/components/our-work/OurWorkHero";
import { OurWorkPillarChapters } from "@/components/our-work/OurWorkPillarChapters";
import { OurWorkStoryGateway } from "@/components/our-work/OurWorkStoryGateway";
import { siteMeta } from "@/data/site";
import { getAllPosts } from "@/lib/content/blog";

const workDescription =
  "Explore Save and Serve Humanity's documented work across healthcare, education and youth development, and community welfare in Pakistan.";
const workSocialImage = "/media/home/hero-160th-free-medical-camp.jpg";

export const metadata: Metadata = {
  title: "Our Work",
  description: workDescription,
  alternates: {
    canonical: "/our-work"
  },
  openGraph: {
    title: `Our Work | ${siteMeta.name}`,
    description: workDescription,
    url: "/our-work",
    siteName: siteMeta.name,
    images: [
      {
        url: workSocialImage,
        alt: "People gathered during Save and Serve Humanity's 160th free medical camp."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Our Work | ${siteMeta.name}`,
    description: workDescription,
    images: [workSocialImage]
  }
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
