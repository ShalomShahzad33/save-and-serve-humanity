import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-14 font-display text-4xl font-semibold leading-tight text-[var(--ssh-ink)]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-10 text-2xl font-semibold leading-tight text-[var(--ssh-ink)]">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-6 text-lg leading-8 text-[var(--ssh-slate)]">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      className="font-semibold text-[var(--ssh-blue)] underline decoration-[rgba(1,69,142,0.35)] underline-offset-4 transition hover:decoration-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
      href={href}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className="mt-6 list-disc space-y-3 pl-6 marker:text-[var(--ssh-orange)]">{children}</ul>,
  ol: ({ children }) => <ol className="mt-6 list-decimal space-y-3 pl-6 marker:text-[var(--ssh-orange)]">{children}</ol>,
  li: ({ children }) => (
    <li className="text-lg leading-8 text-[var(--ssh-slate)]">
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-10 border-l-2 border-[var(--ssh-nest-gold)] pl-6 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)]">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => {
    if (typeof src !== "string") {
      return null;
    }

    return (
      <figure className="my-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-[var(--ssh-blue-50)]">
          <Image
            alt={alt ?? ""}
            className="object-cover"
            fill
            sizes="(max-width: 840px) 100vw, 840px"
            src={src}
          />
        </div>
      </figure>
    );
  },
  hr: () => <hr className="my-12 border-[var(--ssh-border)]" />
};

type ArticleMarkdownProps = {
  content: string;
};

export function ArticleMarkdown({ content }: ArticleMarkdownProps) {
  return (
    <div className="article-markdown">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
