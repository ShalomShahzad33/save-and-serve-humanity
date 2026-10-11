import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, Mail, UsersRound } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";
import type { BlogPostMeta } from "@/lib/content/blog";

const storySlugs = [
  "160th-free-medical-camp",
  "ssh-youth-seminar-2025",
  "covid-19-ration-distribution"
] as const;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

function selectStories(posts: BlogPostMeta[]) {
  return storySlugs
    .map((slug) => posts.find((post) => post.slug === slug))
    .filter((post): post is BlogPostMeta => Boolean(post));
}

export function OurWorkStoryGateway({ posts }: { posts: BlogPostMeta[] }) {
  const stories = selectStories(posts);

  if (stories.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="our-work-stories-title"
      className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Cross-pillar stories
            </p>
            <h2
              className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="our-work-stories-title"
            >
              The work makes most sense when the records sit side by side.
            </h2>
          </div>
          <p
            className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
            data-motion-reveal
          >
            These selected stories show the current spread of SSH&apos;s archive:
            medical outreach, youth formation, and community support. They are
            not a complete activity list; they are strong entry points into the
            records already published.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3" data-motion-reveal>
          {stories.map((story) => (
            <article
              className="group overflow-hidden rounded-[24px] border border-[var(--ssh-border)] bg-white shadow-[0_18px_50px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(7,27,47,0.1)]"
              key={story.slug}
            >
              <Link
                className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href={`/blog/${story.slug}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ssh-blue-50)]">
                  <Image
                    alt={story.coverAlt}
                    className="object-cover transition duration-500 group-hover:scale-[1.035]"
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
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                    {story.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                    {story.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                    Read story
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

        <div
          className="mt-10 overflow-hidden rounded-[28px] bg-[var(--ssh-blue-950)] p-6 text-white sm:p-8 lg:p-10"
          data-motion-reveal
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-[var(--ssh-nest-gold)]">
                <BookOpenText aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Next step
                </p>
              </div>
              <h2 className="mt-4 max-w-[720px] font-display text-[clamp(2.1rem,4vw,4.2rem)] font-semibold leading-none">
                Learn the work, then choose how to stand with it.
              </h2>
            </div>
            <div>
              <p className="max-w-[760px] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Donation and volunteer details should stay honest as SSH adds
                them. For now, visitors can read the archive, ask questions, or
                use the Get Involved page to see the available support pathway.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/get-involved">Get Involved</ButtonLink>
                <Link
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                  href="/contact"
                >
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Contact SSH
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
              <div className="mt-7 flex items-start gap-3 rounded-[20px] border border-white/12 bg-white/8 p-4 text-sm leading-6 text-white/68">
                <UsersRound aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[var(--ssh-nest-gold)]" />
                <p>
                  This section deliberately avoids invented volunteer counts,
                  donor totals, campaign amounts, or partner claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
