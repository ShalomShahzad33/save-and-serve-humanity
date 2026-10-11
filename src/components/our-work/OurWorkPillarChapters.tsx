import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  HandHeart,
  HeartPulse
} from "lucide-react";

import { workChapters } from "@/data/site";
import type { BlogPostMeta } from "@/lib/content/blog";

type PillarTitle = (typeof workChapters)[number]["title"];

type PillarDetail = {
  image: string;
  imageAlt: string;
  imageLabel: string;
  evidenceNote: string;
  examples: string[];
  storySlug?: string;
};

const chapterIcons = {
  Health: HeartPulse,
  "Education & Youth": GraduationCap,
  "Community Welfare": HandHeart
};

const pillarDetails: Record<PillarTitle, PillarDetail> = {
  Health: {
    image: "/media/blog/brick-kiln-medical-camp-kasur-2023/cover.png",
    imageAlt:
      "Women and children at a brick-kiln medical camp connected to SSH's Kasur outreach.",
    imageLabel: "Kasur brick-kiln medical camp",
    evidenceNote:
      "Health examples are drawn from published medical-camp records and historical activity notes.",
    examples: [
      "160th Free Medical Camp recorded in the 2025 archive",
      "Women and children served at a brick kiln in Kasur on June 10, 2023",
      "Women-focused medical outreach recorded in Youhanabad, Lahore"
    ],
    storySlug: "brick-kiln-medical-camp-kasur-2023"
  },
  "Education & Youth": {
    image: "/media/blog/ssh-youth-seminar-2025/cover.JPG",
    imageAlt: "Participants gathered during Save and Serve Humanity's 2025 youth seminar in Youhanabad.",
    imageLabel: "Youth Seminar 2025",
    evidenceNote:
      "Youth examples now include the published 2025 seminar record from Renewal Center, Rohinala, Youhanabad.",
    examples: [
      "Youth development, seminars, and learning-oriented events",
      "Awareness programs and educational campaigns",
      "The 2025 youth seminar record in Youhanabad, Lahore"
    ],
    storySlug: "ssh-youth-seminar-2025"
  },
  "Community Welfare": {
    image: "/media/blog/covid-19-ration-distribution/cover.png",
    imageAlt:
      "Ration supplies prepared for distribution during SSH's COVID-19 support work.",
    imageLabel: "COVID-19 community support",
    evidenceNote:
      "Community welfare examples are presented as specific records, not as a complete project list.",
    examples: [
      "Ration distribution during the COVID-19 lockdown period",
      "Church-related service in Laweray Village, Hafizabad",
      "Walks, seminars, awareness activity, and community outreach"
    ],
    storySlug: "covid-19-ration-distribution"
  }
};

function findStory(posts: BlogPostMeta[], slug?: string) {
  if (!slug) {
    return null;
  }

  return posts.find((post) => post.slug === slug) ?? null;
}

export function OurWorkPillarChapters({
  posts
}: {
  posts: BlogPostMeta[];
}) {
  return (
    <section
      aria-labelledby="our-work-chapters-title"
      className="bg-white py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-[var(--ssh-border)] pb-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Pillar chapters
            </p>
            <h2
              className="mt-4 max-w-[780px] font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              id="our-work-chapters-title"
            >
              Each area is shown through real records, not generic program copy.
            </h2>
          </div>
          <p
            className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
            data-motion-reveal
          >
            These chapters organize what is currently confirmed. As more archive
            material is added, each pillar can expand into fuller pages with
            more stories, photographs, and dated records.
          </p>
        </div>

        <div className="mt-12 space-y-8 lg:mt-16">
          {workChapters.map((chapter, index) => {
            const detail = pillarDetails[chapter.title];
            const Icon = chapterIcons[chapter.title];
            const story = findStory(posts, detail.storySlug);
            const isReversed = index % 2 === 1;

            return (
              <article
                className="grid overflow-hidden rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] shadow-[0_22px_70px_rgba(7,27,47,0.07)] lg:grid-cols-[0.98fr_1.02fr]"
                data-motion-chapter
                key={chapter.href}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-[var(--ssh-blue-950)] sm:aspect-[16/10] lg:aspect-[4/3] ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                  data-motion-plate
                >
                  <Image
                    alt={detail.imageAlt}
                    className="object-cover"
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 50vw, 720px"
                    src={detail.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.86)] via-[rgba(7,27,47,0.18)] to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/22 bg-white/12 text-white backdrop-blur-sm sm:left-7 sm:top-7 sm:h-16 sm:w-16">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                      {detail.imageLabel}
                    </p>
                    <p className="mt-3 max-w-[560px] font-display text-[clamp(2.7rem,7vw,5.8rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
                      {chapter.plate}
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between gap-9 p-6 sm:p-8 lg:p-10 xl:p-12"
                  data-motion-chapter-content
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                      <span className="font-metric text-[var(--ssh-blue)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{chapter.eyebrow}</span>
                    </div>
                    <h3 className="mt-4 font-display text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[1] text-[var(--ssh-ink)]">
                      {chapter.title}
                    </h3>
                    <p className="mt-5 max-w-[780px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                      {chapter.summary}
                    </p>
                    <p className="mt-4 max-w-[720px] text-sm font-semibold leading-6 text-[var(--ssh-blue)]">
                      {detail.evidenceNote}
                    </p>
                  </div>

                  <div className="grid gap-8 xl:grid-cols-[1fr_0.78fr] xl:items-end">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                        Known examples
                      </p>
                      <ul className="mt-4 grid gap-3">
                        {detail.examples.map((example) => (
                          <li
                            className="flex gap-3 text-sm leading-6 text-[var(--ssh-ink)] sm:text-base"
                            key={example}
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid gap-3">
                      {story ? (
                        <Link
                          className="group/story rounded-[18px] border border-[var(--ssh-border)] bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.34)] hover:shadow-[0_18px_44px_rgba(7,27,47,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                          href={`/blog/${story.slug}`}
                        >
                          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
                            <BookOpen aria-hidden="true" className="h-4 w-4" />
                            Related story
                          </span>
                          <span className="mt-3 block font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover/story:text-[var(--ssh-blue)]">
                            {story.title}
                          </span>
                          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ssh-blue)]">
                            Read story
                            <ArrowRight
                              aria-hidden="true"
                              className="h-4 w-4 transition-transform duration-200 group-hover/story:translate-x-1"
                            />
                          </span>
                        </Link>
                      ) : null}

                      <Link
                        className="group/route inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                        href={chapter.href}
                      >
                        Explore {chapter.title}
                        <ArrowRight
                          aria-hidden="true"
                          className="h-4 w-4 transition-transform duration-200 group-hover/route:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}