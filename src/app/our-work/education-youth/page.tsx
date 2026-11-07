import type { Metadata } from "next";

import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { EducationYouthArchive } from "@/components/our-work/education-youth/EducationYouthArchive";
import { EducationYouthHero } from "@/components/our-work/education-youth/EducationYouthHero";
import { EducationYouthSeminarFeature } from "@/components/our-work/education-youth/EducationYouthSeminarFeature";
import { EducationYouthStories } from "@/components/our-work/education-youth/EducationYouthStories";
import { siteMeta } from "@/data/site";
import { getAllPosts } from "@/lib/content/blog";

const educationDescription =
  "Explore Save and Serve Humanity's documented education and youth work, including the 2025 Youth Seminar at Renewal Center, Rohinala, Youhanabad.";
const educationSocialImage = "/media/blog/ssh-youth-seminar-2025/cover.JPG";

export const metadata: Metadata = {
  title: "Education & Youth",
  description: educationDescription,
  alternates: { canonical: "/our-work/education-youth" },
  openGraph: {
    title: `Education & Youth | ${siteMeta.name}`,
    description: educationDescription,
    url: "/our-work/education-youth",
    siteName: siteMeta.name,
    images: [
      {
        url: educationSocialImage,
        alt: "Participants at Save and Serve Humanity's 2025 Youth Seminar."
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `Education & Youth | ${siteMeta.name}`,
    description: educationDescription,
    images: [educationSocialImage]
  }
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
