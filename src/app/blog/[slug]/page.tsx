import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, MapPin, PenLine, Tag } from "lucide-react";

import { ArticleBreadcrumbs } from "@/components/blog/ArticleBreadcrumbs";
import { ArticleMarkdown } from "@/components/blog/ArticleMarkdown";
import { getAllPosts, getPostBySlug } from "@/lib/content/blog";
import { siteMeta } from "@/data/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(value + "T00:00:00"));
}

function programHref(category: string) {
  return "/blog?category=" + encodeURIComponent(category);
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.meta.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Story not found"
    };
  }

  return {
    title: post.meta.title + " | " + siteMeta.name,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      images: [
        {
          url: post.meta.cover,
          alt: post.meta.coverAlt
        }
      ],
      type: "article",
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updated
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.updated ?? post.meta.date,
    image: post.meta.cover,
    author: {
      "@type": "Organization",
      name: post.meta.author ?? siteMeta.name
    },
    publisher: {
      "@type": "Organization",
      name: siteMeta.name
    },
    mainEntityOfPage: siteMeta.url + "/blog/" + post.meta.slug
  };

  return (
    <main className="bg-[var(--ssh-paper)]">
      <article>
        <header className="border-b border-[var(--ssh-border)] bg-[linear-gradient(180deg,#f7fbff_0%,#fff8ef_100%)] px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <ArticleBreadcrumbs title={post.meta.title} />
              <Link
                className="inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ssh-blue)] transition hover:text-[var(--ssh-orange)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/blog"
              >
                <ArrowLeft aria-hidden="true" size={16} />
                All Stories
              </Link>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,0.45fr)] lg:items-end">
              <div>
                <Link
                  className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ssh-orange)] transition hover:text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                  href={programHref(post.meta.category)}
                >
                  {post.meta.category}
                </Link>
                <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.98] text-[var(--ssh-ink)] sm:text-6xl lg:text-7xl">
                  {post.meta.title}
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-8 text-[var(--ssh-slate)]">
                  {post.meta.description}
                </p>
              </div>

              <dl className="grid gap-4 border-l border-[var(--ssh-border)] pl-6 text-sm text-[var(--ssh-slate)]">
                <div className="flex items-center gap-3">
                  <CalendarDays aria-hidden="true" className="text-[var(--ssh-blue)]" size={18} />
                  <div>
                    <dt className="font-semibold text-[var(--ssh-ink)]">Published</dt>
                    <dd>{formatDate(post.meta.date)}</dd>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock aria-hidden="true" className="text-[var(--ssh-blue)]" size={18} />
                  <div>
                    <dt className="font-semibold text-[var(--ssh-ink)]">Reading time</dt>
                    <dd>{post.meta.readingTime}</dd>
                  </div>
                </div>
                {post.meta.location ? (
                  <div className="flex items-center gap-3">
                    <MapPin aria-hidden="true" className="text-[var(--ssh-blue)]" size={18} />
                    <div>
                      <dt className="font-semibold text-[var(--ssh-ink)]">Location</dt>
                      <dd>{post.meta.location}</dd>
                    </div>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        </header>

        <figure className="mx-auto -mt-8 max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-[var(--ssh-blue-50)] shadow-[0_30px_80px_rgba(1,32,66,0.12)]">
            <Image
              alt={post.meta.coverAlt}
              className="object-cover"
              fill
              priority
              quality={95}
              sizes="(max-width: 1200px) 100vw, 1152px"
              src={post.meta.cover}
            />
          </div>
        </figure>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,760px)_280px] lg:px-10 lg:py-24">
          <div>
<ArticleMarkdown content={post.content} />

            {post.meta.gallery?.length ? (
              <section
                aria-labelledby="story-gallery-title"
                className="mt-14 border-t border-[var(--ssh-border)] pt-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                  Story gallery
                </p>
                <h2
                  className="mt-3 font-display text-4xl font-semibold leading-tight text-[var(--ssh-ink)]"
                  id="story-gallery-title"
                >
                  More from this archive record
                </h2>
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {post.meta.gallery.map((image, index) => (
                    <figure
                      className="overflow-hidden rounded-[22px] border border-[var(--ssh-border)] bg-white shadow-[0_18px_50px_rgba(7,27,47,0.06)]"
                      key={image.src}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ssh-blue-50)]">
                        <Image
                          alt={image.alt}
                          className="object-cover"
                          fill
                          loading="lazy"
                          quality={95}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                          src={image.src}
                        />
                      </div>
                      {image.caption ? (
                        <figcaption className="px-4 py-3 text-sm leading-6 text-[var(--ssh-slate)]">
                          {image.caption} {index + 1}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-y border-[var(--ssh-border)] py-6">
              <h2 className="font-display text-2xl font-semibold text-[var(--ssh-ink)]">
                Story context
              </h2>
              <div className="mt-6 space-y-5 text-sm text-[var(--ssh-slate)]">
                {post.meta.author ? (
                  <div className="flex gap-3">
                    <PenLine aria-hidden="true" className="mt-0.5 text-[var(--ssh-orange)]" size={17} />
                    <div>
                      <p className="font-semibold text-[var(--ssh-ink)]">Author</p>
                      <p>{post.meta.author}</p>
                    </div>
                  </div>
                ) : null}
                {post.meta.tags.length ? (
                  <div className="flex gap-3">
                    <Tag aria-hidden="true" className="mt-0.5 text-[var(--ssh-orange)]" size={17} />
                    <div>
                      <p className="font-semibold text-[var(--ssh-ink)]">Tags</p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {post.meta.tags.map((tag) => (
                          <li key={tag}>
                            <span className="rounded-full border border-[var(--ssh-border)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ssh-blue)]">
                              {tag}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            {post.meta.scripture ? (
              <div className="mt-8 bg-[var(--ssh-blue)] p-6 text-white">
                <p className="font-display text-2xl font-semibold leading-tight">
                  {post.meta.scripture.reference}
                </p>
                {post.meta.scripture.text ? (
                  <p className="mt-4 text-sm leading-6 text-white/82">
                    {post.meta.scripture.text}
                  </p>
                ) : null}
                {post.meta.scripture.translation ? (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/62">
                    {post.meta.scripture.translation}
                  </p>
                ) : null}
              </div>
            ) : null}
          </aside>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
