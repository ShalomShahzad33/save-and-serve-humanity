import type { Metadata } from "next";

import { BlogClosingCta } from "@/components/blog/BlogClosingCta";
import { BlogFeatureArchive } from "@/components/blog/BlogFeatureArchive";
import { BlogStoryArchive } from "@/components/blog/BlogStoryArchive";
import { ScrollRevealMotion } from "@/components/motion/ScrollRevealMotion";
import { getAllPosts } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories and records from Save and Serve Humanity's health, youth, and community service archive."
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const postMetas = posts.map((post) => post.meta);

  return (
    <>
      <section
        aria-labelledby="blog-title"
        className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              SSH stories
            </p>
            <h1
              className="mt-4 max-w-[780px] font-display text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="blog-title"
            >
              Stories of service from across the archive.
            </h1>
          </div>
          <div className="max-w-[760px] self-end" data-motion-reveal>
            <p className="text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              The SSH blog is the site&apos;s living editorial archive. Published
              Markdown posts appear here automatically with dates, categories,
              reading time, and respectful cover imagery.
            </p>
          </div>
        </div>
      </section>

      <BlogFeatureArchive posts={postMetas} />
      <BlogStoryArchive posts={postMetas} />
      <BlogClosingCta />
      <ScrollRevealMotion />
    </>
  );
}