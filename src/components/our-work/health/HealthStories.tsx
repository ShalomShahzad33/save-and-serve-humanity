import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, MapPin } from "lucide-react";

import type { BlogPostMeta } from "@/lib/content/blog";

const healthTerms = new Set([
  "health",
  "medical camps",
  "free medical camps",
  "medical outreach",
  "mouth cancer",
  "women and children"
]);

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

function isHealthStory(post: BlogPostMeta) {
  const terms = [post.category, ...post.tags].map((term) => term.toLowerCase());

  return terms.some((term) => healthTerms.has(term));
}

function selectHealthStories(posts: BlogPostMeta[]) {
  return posts.filter(isHealthStory).slice(0, 3);
}

export function HealthStories({ posts }: { posts: BlogPostMeta[] }) {
  const stories = selectHealthStories(posts);

  if (stories.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="health-stories-title"
      className="bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Health stories
            </p>
            <h2
              className="mt-4 max-w-[820px] font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="health-stories-title"
            >
              Published records give the health work its context.
            </h2>
          </div>
          <div className="max-w-[760px] lg:justify-self-end">
            <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
              <BookOpenText aria-hidden="true" className="h-5 w-5" />
              <p className="text-sm font-bold uppercase tracking-[0.14em]">
                From the blog archive
              </p>
            </div>
            <p className="mt-5 text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              These are published SSH stories tagged or categorized around
              health work. They are selected entry points into the archive, not
              a complete list of every medical activity.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              className="group overflow-hidden rounded-[24px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] shadow-[0_18px_50px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(7,27,47,0.1)]"
              key={story.slug}
            >
              <Link
                className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href={`/blog/${story.slug}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--ssh-blue-50)]">
                  <Image
                    alt={story.coverAlt}
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    src={story.cover}
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                    <span>{story.category}</span>
                    <span aria-hidden="true">/</span>
                    <time dateTime={story.date}>{formatDate(story.date)}</time>
                  </div>
                  {story.location ? (
                    <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                      <MapPin aria-hidden="true" className="h-4 w-4" />
                      {story.location}
                    </p>
                  ) : null}
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                    {story.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                    Read health story
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
