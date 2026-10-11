import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, HandHeart, HeartPulse } from "lucide-react";

import { workChapters } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

const chapterIcons = {
  Health: HeartPulse,
  "Education & Youth": GraduationCap,
  "Community Welfare": HandHeart
};

const archiveImages = [
  {
    src: "/media/home/hero-160th-free-medical-camp.jpg",
    alt: "People gathered during Save and Serve Humanity's 160th free medical camp.",
    label: "Free medical camp archive",
    className: "col-span-2 aspect-[16/10]"
  },
  {
    src: "/media/blog/covid-19-ration-distribution/cover.png",
    alt: "Supplies prepared for Save and Serve Humanity's COVID-19 ration distribution.",
    label: "Community support archive",
    className: "aspect-[4/3]"
  },
  {
    src: "/media/blog/mouth-cancer-awareness-walk-karachi-2012/cover.png",
    alt: "Participants in Save and Serve Humanity's 2012 mouth cancer awareness walk in Karachi.",
    label: "Awareness activity archive",
    className: "aspect-[4/3]"
  }
];

export function OurWorkHero() {
  return (
    <section
      aria-labelledby="our-work-title"
      className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
        <div className="flex flex-col justify-center" data-motion-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
            Our work
          </p>
          <h1
            className="mt-4 max-w-[860px] font-display text-[clamp(3.4rem,7vw,6.9rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
            id="our-work-title"
          >
            Practical service across health, youth, and community life.
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
            Save and Serve Humanity&apos;s documented work spans healthcare,
            education and youth development, and community welfare in Pakistan.
            The site presents these pillars through real records, archive
            photography, and published stories.
          </p>
          <p className="mt-5 max-w-[720px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
            This overview starts with confirmed areas of activity: free medical
            camps, awareness initiatives, seminars, community outreach, and
            faith-inspired service. Current totals and full project lists can be
            added when official records are supplied.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/blog">Read Work Stories</ButtonLink>
            <ButtonLink href="/gallery" variant="secondary">
              View Archive Images
            </ButtonLink>
          </div>

          <div
            aria-label="Work pillars"
            className="mt-12 grid gap-4"
            data-motion-reveal
          >
            {workChapters.map((chapter, index) => {
              const Icon = chapterIcons[chapter.title];

              return (
                <Link
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-l-2 border-[var(--ssh-border)] bg-white px-4 py-4 shadow-[0_16px_42px_rgba(7,27,47,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--ssh-blue)] hover:shadow-[0_22px_58px_rgba(7,27,47,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] sm:px-5"
                  href={chapter.href}
                  key={chapter.href}
                >
                  <span className="font-metric text-sm font-semibold text-[var(--ssh-orange)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="flex items-center gap-3 font-display text-2xl font-semibold text-[var(--ssh-ink)]">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 text-[var(--ssh-blue)]"
                      />
                      {chapter.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[var(--ssh-slate)]">
                      {chapter.eyebrow}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 text-[var(--ssh-blue)] transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div
          className="grid grid-cols-2 gap-4"
          data-motion-reveal
        >
          {archiveImages.map((image) => (
            <figure
              className={`relative overflow-hidden rounded-[26px] bg-[var(--ssh-blue-950)] shadow-[0_28px_78px_rgba(7,27,47,0.18)] ${image.className}`}
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                priority={image.src.includes("hero-160th")}
                quality={95}
                sizes={
                  image.src.includes("hero-160th")
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 58vw, 820px"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 46vw, (max-width: 1440px) 29vw, 410px"
                }
                src={image.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.76)] via-[rgba(7,27,47,0.12)] to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-warm-white)] sm:p-5">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
