import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, MapPin } from "lucide-react";

import { getAllPosts } from "@/lib/content/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

export async function HomeLatestStories() {
  const posts = await getAllPosts();
  const nonFeaturedPosts = posts.filter((post) => !post.meta.featured);
  const selectedPosts =
    nonFeaturedPosts.length >= 3 ? nonFeaturedPosts.slice(0, 3) : posts.slice(0, 3);
  const [leadPost, ...supportingPosts] = selectedPosts;

  if (!leadPost) {
    return null;
  }

  return (
    <section
      aria-labelledby="home-latest-stories-title"
      className="overflow-hidden bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-white/14 pb-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
              data-motion-reveal
            >
              Latest stories
            </p>
            <h2
              className="mt-4 max-w-[780px] font-display text-[clamp(2.6rem,5.6vw,5.2rem)] font-semibold leading-[0.96] text-[var(--ssh-warm-white)]"
              data-motion-reveal
              id="home-latest-stories-title"
            >
              Recent records from SSH&apos;s living archive.
            </h2>
          </div>
          <div className="max-w-[720px] lg:justify-self-end" data-motion-reveal>
            <p className="text-lg leading-8 text-white/74 sm:text-xl">
              The blog carries SSH&apos;s service history through published
              activity records, images, dates, and story context drawn from the
              organization&apos;s archive.
            </p>
            <Link
              className="group mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-warm-white)] px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href="/blog"
            >
              Explore All Stories
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.16fr)_minmax(360px,0.84fr)]">
          <article
            className="group overflow-hidden rounded-[30px] border border-white/14 bg-white text-[var(--ssh-ink)] shadow-[0_30px_90px_rgba(0,0,0,0.22)]"
            data-motion-reveal
          >
            <Link
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href={`/blog/${leadPost.meta.slug}`}
            >
              <div className="relative aspect-[16/10] bg-[var(--ssh-blue-900)]">
                <Image
                  alt={leadPost.meta.coverAlt}
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 90vw, 820px"
                  src={leadPost.meta.cover}
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                  <span>{leadPost.meta.category}</span>
                  <span aria-hidden="true">/</span>
                  <time dateTime={leadPost.meta.date}>
                    {formatDate(leadPost.meta.date)}
                  </time>
                </div>
                <h3 className="mt-5 font-display text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                  {leadPost.meta.title}
                </h3>
                <p className="mt-5 max-w-[820px] text-lg leading-8 text-[var(--ssh-slate)]">
                  {leadPost.meta.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-[var(--ssh-blue)]">
                  <span className="inline-flex items-center gap-2">
                    <BookOpenText aria-hidden="true" className="h-4 w-4" />
                    {leadPost.meta.readingTime}
                  </span>
                  {leadPost.meta.location ? (
                    <span className="inline-flex items-center gap-2">
                      <MapPin aria-hidden="true" className="h-4 w-4" />
                      {leadPost.meta.location}
                    </span>
                  ) : null}
                </div>
              </div>
            </Link>
          </article>

          <div className="grid gap-6">
            {supportingPosts.map((post) => (
              <article
                className="overflow-hidden rounded-[24px] border border-white/14 bg-white/8 text-white"
                data-motion-reveal
                key={post.meta.slug}
              >
                <Link
                  className="group grid h-full transition duration-300 hover:-translate-y-1 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)] sm:grid-cols-[180px_minmax(0,1fr)] lg:grid-cols-1 xl:grid-cols-[190px_minmax(0,1fr)]"
                  href={`/blog/${post.meta.slug}`}
                >
                  <div className="relative min-h-[220px] bg-[var(--ssh-blue-900)] sm:min-h-full lg:min-h-[240px] xl:min-h-full">
                    <Image
                      alt={post.meta.coverAlt}
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      fill
                      loading="lazy"
                      quality={95}
                      sizes="(max-width: 640px) 90vw, (max-width: 1280px) 360px, 190px"
                      src={post.meta.cover}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[var(--ssh-nest-gold)]">
                      <span>{post.meta.category}</span>
                      <span aria-hidden="true">/</span>
                      <time dateTime={post.meta.date}>
                        {formatDate(post.meta.date)}
                      </time>
                    </div>
                    <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-warm-white)]">
                      {post.meta.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-white/72">
                      {post.meta.description}
                    </p>
                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Read Story
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </p>
                  </div>
                </Link>
              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
