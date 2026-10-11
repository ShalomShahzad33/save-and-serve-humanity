import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { getFeaturedPost } from "@/lib/content/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

export async function HomeFeaturedStory() {
  const post = await getFeaturedPost();

  if (!post) {
    return (
      <section
        aria-labelledby="home-featured-story-title"
        className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Featured story
            </p>
            <h2
              className="mt-4 max-w-[720px] font-display text-[clamp(2.5rem,5vw,4.6rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="home-featured-story-title"
            >
              The story archive is ready for real SSH posts.
            </h2>
          </div>
          <div
            className="rounded-[28px] border border-[var(--ssh-border)] bg-white p-6 shadow-[0_22px_60px_rgba(7,27,47,0.06)] sm:p-8"
            data-motion-reveal
          >
            <BookOpenText aria-hidden="true" className="h-7 w-7 text-[var(--ssh-blue)]" />
            <p className="mt-5 text-lg leading-8 text-[var(--ssh-slate)]">
              Add a published Markdown file in <code className="font-semibold text-[var(--ssh-ink)]">content/blog/</code> with valid front matter, and this section will automatically feature it here.
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--ssh-slate)]">
              No article is being invented just to fill the layout.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="home-featured-story-title"
      className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-[30px] border border-[var(--ssh-border)] bg-white shadow-[0_26px_80px_rgba(7,27,47,0.08)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[320px] bg-[var(--ssh-blue-50)] sm:min-h-[440px] lg:min-h-[560px]" data-motion-reveal>
            <Image
              alt={post.meta.coverAlt}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              src={post.meta.cover}
            />
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Featured story
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-[var(--ssh-blue)]">
              <span>{post.meta.category}</span>
              <span aria-hidden="true">/</span>
              <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
              <span aria-hidden="true">/</span>
              <span>{post.meta.readingTime}</span>
            </div>
            <h2
              className="mt-5 font-display text-[clamp(2.4rem,4.8vw,4.6rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="home-featured-story-title"
            >
              {post.meta.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--ssh-slate)]">
              {post.meta.description}
            </p>
            {post.meta.location ? (
              <p className="mt-4 text-sm font-semibold text-[var(--ssh-ink)]">
                {post.meta.location}
              </p>
            ) : null}
            <Link
              className="group mt-9 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href={`/blog/${post.meta.slug}`}
            >
              Read the Full Story
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}