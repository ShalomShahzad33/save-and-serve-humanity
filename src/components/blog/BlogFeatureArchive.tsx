import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Layers3 } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { BlogPostMeta } from "@/lib/content/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

function getCategoryCounts(posts: BlogPostMeta[]) {
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

export function BlogFeatureArchive({ posts }: { posts: BlogPostMeta[] }) {
  const featured = posts.find((post) => post.featured) ?? posts[0] ?? null;
  const categories = getCategoryCounts(posts);
  const latest = posts.slice(0, 3);

  if (!featured) {
    return null;
  }

  return (
    <section
      aria-labelledby="blog-feature-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Featured archive entry
            </p>
            <h2
              className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="blog-feature-title"
            >
              Start with one story, then browse the wider record.
            </h2>
          </div>
          <p
            className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
            data-motion-reveal
          >
            The blog is SSH&apos;s living archive. Categories and featured entries
            come from Markdown front matter, so the page can grow without
            manually registering each article in React.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.16fr_0.84fr]" data-motion-reveal>
          <article className="grid overflow-hidden rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] shadow-[0_22px_70px_rgba(7,27,47,0.07)] lg:grid-cols-[0.9fr_1.1fr]">
            <Link
              className="relative min-h-[360px] overflow-hidden bg-[var(--ssh-blue-950)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] sm:min-h-[460px]"
              href={`/blog/${featured.slug}`}
            >
              <Image
                alt={featured.coverAlt}
                className="object-cover object-center"
                fill
                priority
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 72vw, 1040px"
                src={featured.cover}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.82)] via-[rgba(7,27,47,0.18)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  Featured story
                </p>
                <p className="mt-3 inline-flex max-w-full flex-wrap items-center rounded-[12px] border border-white/24 bg-[rgba(7,27,47,0.58)] px-3 py-2 text-sm font-semibold leading-tight text-white backdrop-blur-sm sm:text-base">
                  {featured.category}
                </p>
              </div>
            </Link>

            <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
              <div>
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  <span>{featured.category}</span>
                  <span aria-hidden="true">/</span>
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </div>
                <h3 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none text-[var(--ssh-ink)]">
                  {featured.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                  {featured.description}
                </p>
                {featured.location ? (
                  <p className="mt-4 text-sm font-semibold text-[var(--ssh-blue)]">
                    {featured.location}
                  </p>
                ) : null}
              </div>
              <ButtonLink href={`/blog/${featured.slug}`}>Read Featured Story</ButtonLink>
            </div>
          </article>

          <aside className="grid gap-5">
            <div className="rounded-[24px] bg-[var(--ssh-blue-950)] p-6 text-white sm:p-7">
              <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
                <Layers3 aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Archive categories
                </p>
              </div>
              <div className="mt-6 grid gap-3">
                {categories.map((item) => (
                  <div
                    className="flex items-center justify-between gap-4 border-b border-white/12 pb-3 text-sm last:border-b-0 last:pb-0"
                    key={item.category}
                  >
                    <span className="font-semibold text-white">{item.category}</span>
                    <span className="font-metric text-white/68">
                      {item.count} {item.count === 1 ? "post" : "posts"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-[var(--ssh-border)] bg-white p-6 shadow-[0_18px_50px_rgba(7,27,47,0.05)] sm:p-7">
              <div className="flex items-center gap-3 text-[var(--ssh-blue)]">
                <BookOpenText aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Latest entries
                </p>
              </div>
              <div className="mt-6 grid gap-4">
                {latest.map((post) => (
                  <Link
                    className="group border-l-2 border-[var(--ssh-border)] pl-4 transition duration-200 hover:border-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                  >
                    <time
                      className="font-metric text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ssh-orange)]"
                      dateTime={post.date}
                    >
                      {formatDate(post.date)}
                    </time>
                    <p className="mt-2 font-display text-xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                      {post.title}
                    </p>
                  </Link>
                ))}
              </div>
              <Link
                className="group mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="#blog-stories-title"
              >
                Browse all posts
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
