"use client";

import Link from "next/link";
import { ArrowRight, BookOpenText, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import type { BlogPostMeta } from "@/lib/content/blog";
import { StoryCard } from "@/components/blog/StoryCard";

type BlogStoryArchiveProps = {
  posts: BlogPostMeta[];
};

const POSTS_PER_PAGE = 6;

function getCategoryCounts(posts: BlogPostMeta[]) {
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

export function BlogStoryArchive({ posts }: BlogStoryArchiveProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const categories = useMemo(() => getCategoryCounts(posts), [posts]);
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(pageStart, pageStart + POSTS_PER_PAGE);
  const postLabel = filteredPosts.length === 1 ? "post" : "posts";
  const firstVisible = filteredPosts.length > 0 ? pageStart + 1 : 0;
  const lastVisible = Math.min(pageStart + POSTS_PER_PAGE, filteredPosts.length);

  function selectCategory(category: string) {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function goToPage(page: number) {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  }

  return (
    <section
      aria-labelledby="blog-stories-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          className="grid gap-7 border-b border-[var(--ssh-border)] pb-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end"
          data-motion-reveal
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Published posts
            </p>
            <h2
              className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="blog-stories-title"
            >
              Latest from SSH
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="text-sm font-semibold text-[var(--ssh-slate)]" aria-live="polite">
              {posts.length === 0
                ? "No published posts yet"
                : `${filteredPosts.length} ${activeCategory === "All" ? "published" : activeCategory} ${postLabel}`}
            </p>
            {categories.length > 1 ? (
              <div
                aria-label="Filter stories by category"
                className="mt-5 flex flex-wrap gap-2"
                role="group"
              >
                <button
                  aria-label={`All categories, ${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
                  aria-pressed={activeCategory === "All"}
                  className="min-h-11 rounded-[14px] border border-[var(--ssh-border)] px-4 py-2 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] aria-pressed:border-[var(--ssh-blue)] aria-pressed:bg-[var(--ssh-blue)] aria-pressed:text-white"
                  onClick={() => selectCategory("All")}
                  type="button"
                >
                  All
                  <span className="ml-2 font-metric text-xs opacity-75" aria-hidden="true">
                    {posts.length}
                  </span>
                </button>
                {categories.map((item) => (
                  <button
                    aria-label={`${item.category}, ${item.count} ${item.count === 1 ? "post" : "posts"}`}
                    aria-pressed={activeCategory === item.category}
                    className="min-h-11 rounded-[14px] border border-[var(--ssh-border)] px-4 py-2 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] aria-pressed:border-[var(--ssh-blue)] aria-pressed:bg-[var(--ssh-blue)] aria-pressed:text-white"
                    key={item.category}
                    onClick={() => selectCategory(item.category)}
                    type="button"
                  >
                    {item.category}
                    <span className="ml-2 font-metric text-xs opacity-75" aria-hidden="true">
                      {item.count}
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3" id="blog-story-grid">
              {visiblePosts.map((post) => (
                <div data-motion-reveal key={post.slug}>
                  <StoryCard post={post} />
                </div>
              ))}
            </div>

            {totalPages > 1 ? (
              <nav
                aria-label="Story archive pagination"
                className="mt-12 flex flex-col gap-5 border-t border-[var(--ssh-border)] pt-7 sm:flex-row sm:items-center sm:justify-between"
                data-motion-reveal
              >
                <p className="text-sm font-semibold text-[var(--ssh-slate)]" aria-live="polite">
                  Showing {firstVisible}-{lastVisible} of {filteredPosts.length} {postLabel}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    disabled={safePage === 1}
                    onClick={() => goToPage(safePage - 1)}
                    type="button"
                  >
                    <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      aria-current={safePage === page ? "page" : undefined}
                      aria-label={`Go to page ${page}`}
                      className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[var(--ssh-border)] bg-white font-metric text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] aria-current:border-[var(--ssh-blue)] aria-current:bg-[var(--ssh-blue)] aria-current:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                      key={page}
                      onClick={() => goToPage(page)}
                      type="button"
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    disabled={safePage === totalPages}
                    onClick={() => goToPage(safePage + 1)}
                    type="button"
                  >
                    Next
                    <ChevronRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </nav>
            ) : null}
          </>
        ) : (
          <div
            className="mt-10 grid gap-8 rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10"
            data-motion-reveal
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[var(--ssh-blue)] shadow-[0_14px_34px_rgba(7,27,47,0.08)]">
              <BookOpenText aria-hidden="true" className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-display text-4xl font-semibold leading-tight text-[var(--ssh-ink)]">
                Ready for the first real story.
              </h3>
              <p className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)]">
                Add a Markdown file to{" "}
                <code className="font-semibold text-[var(--ssh-ink)]">content/blog/</code>{" "}
                with valid front matter and approved media. The post will be
                discovered automatically; no React file needs to be edited for
                each story.
              </p>
              <Link
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/"
              >
                Return Home
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}