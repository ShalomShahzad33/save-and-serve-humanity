import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Tags } from "lucide-react";

import type { BlogPostMeta } from "@/lib/content/blog";

const youthTagTerms = new Set([
  "youth seminar",
  "youth empowerment",
  "education",
  "students",
  "learning"
]);

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

function isEducationYouthStory(post: BlogPostMeta) {
  const category = post.category.toLowerCase();

  if (category.includes("youth") || category.includes("education")) {
    return true;
  }

  return post.tags
    .map((tag) => tag.toLowerCase())
    .some((tag) => youthTagTerms.has(tag));
}

function selectStories(posts: BlogPostMeta[]) {
  return posts.filter(isEducationYouthStory).slice(0, 3);
}

export function EducationYouthStories({ posts }: { posts: BlogPostMeta[] }) {
  const stories = selectStories(posts);

  if (stories.length === 0) {
    return null;
  }

  const [featured, ...secondary] = stories;

  return (
    <section
      aria-labelledby="education-youth-stories-title"
      className="bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Education & youth stories
            </p>
            <h2
              className="mt-4 max-w-[820px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="education-youth-stories-title"
            >
              Published youth records stay connected to the archive.
            </h2>
          </div>
          <div className="max-w-[760px] lg:justify-self-end">
            <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
              <BookOpenText aria-hidden="true" className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.14em]">
                Markdown-powered
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              This section is populated from published blog posts with
              youth- or education-specific categories and tags. It can expand
              as SSH adds more stories without editing the page component.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <article className="group overflow-hidden rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] shadow-[0_22px_70px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_78px_rgba(7,27,47,0.1)]">
            <Link
              className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href={`/blog/${featured.slug}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--ssh-blue-50)]">
                <Image
                  alt={featured.coverAlt}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 60vw, 820px"
                  src={featured.cover}
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  <span>{featured.category}</span>
                  <span aria-hidden="true">/</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </div>
                {featured.location ? (
                  <p className="mt-4 text-sm font-semibold text-[var(--ssh-blue)]">
                    {featured.location}
                  </p>
                ) : null}
                <h3 className="mt-5 font-display text-[clamp(2.1rem,4vw,4.4rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                  {featured.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                  {featured.description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                  Read youth story
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </article>

          <aside className="grid content-start gap-5">
            <div className="rounded-[28px] bg-[var(--ssh-blue-950)] p-6 text-white sm:p-7">
              <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
                <Tags aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.16em]">
                  Current filter
                </p>
              </div>
              <p className="mt-5 text-base leading-7 text-white/72">
                The filter includes youth and education categories, plus
                youth-specific tags such as Youth Seminar and Youth Empowerment.
                Broad leadership or community tags alone do not place a story
                here.
              </p>
            </div>

            {secondary.length > 0 ? (
              secondary.map((story) => (
                <article
                  className="group overflow-hidden rounded-[24px] border border-[var(--ssh-border)] bg-white shadow-[0_18px_50px_rgba(7,27,47,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(7,27,47,0.1)]"
                  key={story.slug}
                >
                  <Link
                    className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    href={`/blog/${story.slug}`}
                  >
                    <div className="relative aspect-[16/9] bg-[var(--ssh-blue-50)]">
                      <Image
                        alt={story.coverAlt}
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        fill
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 420px"
                        src={story.cover}
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                        {story.category}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)]">
                        {story.title}
                      </h3>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div className="rounded-[24px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  Archive note
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                  One youth-specific story is currently published. Additional
                  education or youth Markdown posts will appear here
                  automatically when their front matter uses matching categories
                  or tags.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}