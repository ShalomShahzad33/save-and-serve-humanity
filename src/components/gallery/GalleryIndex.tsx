import Image from "next/image";
import Link from "next/link";
import { Archive, BookOpenText, ImageIcon, ShieldCheck } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  storyTitle: string;
  storyHref: string;
  category: string;
  date: string;
};

type GalleryIndexProps = {
  items: GalleryItem[];
  postCount: number;
};

const curationRules = [
  "Only approved public photographs should appear in the gallery.",
  "Images should remain connected to their story or event context.",
  "Sensitive medical, child, or community imagery needs careful review before publication."
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date + "T00:00:00"));
}

function GalleryArchivePanel({
  items,
  postCount
}: {
  items: GalleryItem[];
  postCount: number;
}) {
  const previewItems = items.slice(0, 4);
  const hasImages = previewItems.length > 0;

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-6 text-white shadow-[0_34px_90px_rgba(7,27,47,0.22)] sm:p-8 lg:min-h-[560px] lg:p-10">
      <div className="absolute inset-0 opacity-95 [background:linear-gradient(135deg,#01458E_0%,#07386F_54%,#082A4D_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
              Public archive status
            </p>
            <p className="mt-8 font-display text-[clamp(4.8rem,15vw,10rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
              {items.length}
            </p>
            <p className="mt-4 max-w-[480px] text-2xl font-semibold leading-tight sm:text-3xl">
              {hasImages
                ? "approved public images are connected to published SSH stories."
                : "approved gallery images are published from blog stories right now."}
            </p>
          </div>
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.16)] sm:h-20 sm:w-20">
            <Image
              alt=""
              className="object-contain"
              fill
              priority
              sizes="80px"
              src="/brand/ssh-logo-transparent.png"
            />
          </div>
        </div>

        {hasImages ? (
          <div className="grid min-h-[260px] grid-cols-3 gap-3" aria-label="Featured gallery preview">
            <Link
              className="group relative col-span-2 row-span-2 overflow-hidden rounded-[22px] bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href={previewItems[0].storyHref}
            >
              <Image
                alt={previewItems[0].alt}
                className="object-cover transition duration-500 group-hover:scale-[1.035]"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 58vw, 360px"
                src={previewItems[0].src}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                <p className="line-clamp-2 text-sm font-semibold leading-5 text-white">
                  {previewItems[0].storyTitle}
                </p>
              </div>
            </Link>

            {previewItems.slice(1).map((item) => (
              <Link
                className="group relative overflow-hidden rounded-[18px] bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href={item.storyHref}
                key={`${item.storyHref}-${item.src}`}
              >
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.035]"
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 28vw, 170px"
                  src={item.src}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-3 opacity-82" aria-hidden="true">
            <div className="aspect-[4/5] rounded-[18px] border border-white/16 bg-white/[0.08]" />
            <div className="mt-8 aspect-[4/5] rounded-[18px] border border-white/16 bg-white/[0.12]" />
            <div className="aspect-[4/5] rounded-[18px] border border-white/16 bg-white/[0.07]" />
          </div>
        )}

        <p className="max-w-[560px] border-l border-[rgba(216,166,106,0.62)] pl-5 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
          {hasImages
            ? `${postCount} published stories now supply this gallery with real SSH media.`
            : "As real SSH stories are added with approved cover and gallery images, this page will populate automatically from the Markdown archive."}
        </p>
      </div>
    </div>
  );
}

export function GalleryIndex({ items, postCount }: GalleryIndexProps) {
  const hasImages = items.length > 0;

  return (
    <>
      <section
        aria-labelledby="gallery-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Public gallery
            </p>
            <h1
              className="mt-4 max-w-[820px] font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="gallery-title"
            >
              A careful archive of real SSH photographs.
            </h1>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              SSH has a substantial historical media archive. This public gallery now draws from approved images connected to published stories, so every photograph keeps its activity context.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Read Stories</ButtonLink>
              <ButtonLink href="/impact" variant="secondary">See Impact Evidence</ButtonLink>
            </div>
          </div>

          <div>
            <GalleryArchivePanel items={items} postCount={postCount} />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="gallery-grid-title"
        className="bg-white py-20 sm:py-24 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 border-b border-[var(--ssh-border)] pb-8 sm:flex-row sm:items-end sm:justify-between" data-motion-reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Curated media index
              </p>
              <h2
                className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
                id="gallery-grid-title"
              >
                Images connected to published stories
              </h2>
            </div>
            <p className="text-sm font-semibold text-[var(--ssh-slate)]">
              {hasImages ? `${items.length} public ${items.length === 1 ? "image" : "images"}` : `${postCount} published ${postCount === 1 ? "story" : "stories"}`}
            </p>
          </div>

          {hasImages ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <article
                  className="group overflow-hidden rounded-[24px] border border-[var(--ssh-border)] bg-white shadow-[0_18px_50px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(7,27,47,0.1)]"
                  key={`${item.storyHref}-${item.src}`}
                >
                  <Link
                    className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                    href={item.storyHref}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ssh-blue-50)]">
                      <Image
                        alt={item.alt}
                        className="object-cover transition duration-500 group-hover:scale-[1.035]"
                        fill
                        quality={95}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        src={item.src}
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                        <span>{item.category}</span>
                        <span aria-hidden="true">/</span>
                        <time dateTime={item.date}>{formatDate(item.date)}</time>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)] sm:text-3xl">
                        {item.caption}
                      </h3>
                      <p className="mt-4 text-sm font-semibold text-[var(--ssh-blue)]">
                        From: {item.storyTitle}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-8 rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10" data-motion-reveal>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[var(--ssh-blue)] shadow-[0_14px_34px_rgba(7,27,47,0.08)]">
                <ImageIcon aria-hidden="true" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-display text-4xl font-semibold leading-tight text-[var(--ssh-ink)]">
                  Ready for approved public images.
                </h3>
                <p className="mt-4 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)]">
                  Add published Markdown stories with approved cover images and optional gallery metadata. The gallery will use those public images without requiring a separate content system at this stage.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/blog" variant="secondary">Open Blog Archive</ButtonLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        aria-labelledby="gallery-curation-title"
        className="bg-[var(--ssh-blue-50)] py-20 lg:py-24"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Image dignity
            </p>
            <h2
              className="mt-4 max-w-[620px] font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="gallery-curation-title"
            >
              The archive grows through consent, context, and care.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {curationRules.map((rule, index) => (
              <div className="border-l-2 border-[var(--ssh-blue)] bg-white p-6" key={rule}>
                {index === 0 ? (
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                ) : index === 1 ? (
                  <BookOpenText aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                ) : (
                  <Archive aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                )}
                <p className="mt-5 text-base font-semibold leading-7 text-[var(--ssh-ink)]">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}