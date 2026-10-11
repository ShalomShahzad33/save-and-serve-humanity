import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/content/blog";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

type StoryCardProps = {
  post: BlogPostMeta;
};

export function StoryCard({ post }: StoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-[var(--ssh-border)] bg-white shadow-[0_18px_50px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(7,27,47,0.1)]">
      <Link
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
        href={`/blog/${post.slug}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ssh-blue-50)]">
          <Image
            alt={post.coverAlt}
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
            fill
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            src={post.cover}
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
            <span>{post.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
            {post.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
            {post.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--ssh-blue)]">
            <span>{post.readingTime}</span>
            {post.location ? (
              <>
                <span aria-hidden="true">/</span>
                <span>{post.location}</span>
              </>
            ) : null}
          </div>
        </div>
      </Link>
    </article>
  );
}
