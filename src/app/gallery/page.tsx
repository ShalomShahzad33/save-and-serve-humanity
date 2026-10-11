import type { Metadata } from "next";

import { GalleryIndex } from "@/components/gallery/GalleryIndex";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { UnderDevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { getAllPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A careful public gallery for approved Save and Serve Humanity photographs connected to real stories and activities."
};

export default async function GalleryPage() {
  const posts = await getAllPosts();
  const items = posts.flatMap((post) => {
    const storyHref = `/blog/${post.meta.slug}`;
    const coverItem = {
      src: post.meta.cover,
      alt: post.meta.coverAlt,
      caption: post.meta.title,
      storyTitle: post.meta.title,
      storyHref,
      category: post.meta.category,
      date: post.meta.date
    };

    const galleryItems = (post.meta.gallery ?? []).map((image) => ({
      src: image.src,
      alt: image.alt,
      caption: image.caption ?? post.meta.title,
      storyTitle: post.meta.title,
      storyHref,
      category: post.meta.category,
      date: post.meta.date
    }));

    return [coverItem, ...galleryItems];
  });

  return (
    <>
      <GalleryIndex items={items} postCount={posts.length} />
      <UnderDevelopmentNotice
        title="Gallery tools are still under development."
        description="The public image archive is live from approved story media. The richer gallery experience still needs final lightbox behavior, filtering, and larger archive curation before it should be treated as complete."
        items={[
          "Keyboard-accessible lightbox",
          "Category and year filters",
          "Larger curated archive batches",
          "Optional story-linked image trail"
        ]}
        href="/blog"
        linkLabel="Open Story Archive"
      />
      <ScrollRevealMotion />
    </>
  );
}