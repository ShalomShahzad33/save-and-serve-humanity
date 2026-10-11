import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type ArticleBreadcrumbsProps = {
  title: string;
};

export function ArticleBreadcrumbs({ title }: ArticleBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-[var(--ssh-slate)]">
        <li>
          <Link
            aria-label="Home"
            className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border border-[var(--ssh-border)] bg-white/70 text-[var(--ssh-blue)] transition hover:border-[var(--ssh-blue)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
            href="/"
          >
            <Home aria-hidden="true" size={16} />
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ChevronRight aria-hidden="true" className="text-[var(--ssh-orange)]" size={15} />
          <Link
            className="font-semibold text-[var(--ssh-blue)] transition hover:text-[var(--ssh-orange)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
            href="/blog"
          >
            Stories
          </Link>
        </li>
        <li className="flex min-w-0 items-center gap-2" aria-current="page">
          <ChevronRight aria-hidden="true" className="shrink-0 text-[var(--ssh-orange)]" size={15} />
          <span className="line-clamp-1 max-w-[min(68vw,42rem)] font-medium text-[var(--ssh-ink)]">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
}
