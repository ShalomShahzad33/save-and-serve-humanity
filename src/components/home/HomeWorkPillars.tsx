import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartPulse, HandHeart, GraduationCap } from "lucide-react";
import { workChapters } from "@/data/site";

const chapterIcons = {
  Health: HeartPulse,
  "Education & Youth": GraduationCap,
  "Community Welfare": HandHeart
};

export function HomeWorkPillars() {
  return (
    <section
      aria-labelledby="home-work-title"
      className="bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
              data-motion-reveal
            >
              Our work
            </p>
            <h2
              className="mt-4 max-w-[760px] font-display text-[clamp(2.5rem,5vw,4.8rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              data-motion-reveal
              id="home-work-title"
            >
              Three areas of service, held together by practical care.
            </h2>
          </div>
          <p
            className="max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl lg:justify-self-end"
            data-motion-reveal
          >
            These chapters now point to confirmed SSH archive records: medical
            camps, youth formation, ration support, awareness activity, and
            church-related service documented through published stories.
          </p>
        </div>

        <div className="mt-14 space-y-7 lg:mt-18">
          {workChapters.map((chapter, index) => {
            const Icon = chapterIcons[chapter.title];
            const isReversed = index % 2 === 1;

            return (
              <article
                className="group grid overflow-hidden rounded-[28px] border border-[var(--ssh-border)] bg-white shadow-[0_22px_60px_rgba(7,27,47,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(7,27,47,0.1)] lg:grid-cols-[0.9fr_1.1fr]"
                data-motion-chapter
                key={chapter.href}
              >
                <div
                  className={`work-plate relative min-h-[280px] overflow-hidden p-6 sm:min-h-[360px] sm:p-8 lg:min-h-[420px] ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                  data-motion-plate
                  data-tone={chapter.tone}
                >
                  <div className="absolute inset-0 opacity-95" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/24 bg-white/12 text-white">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white p-1.5 shadow-[0_14px_28px_rgba(0,0,0,0.14)]">
                        <Image
                          alt=""
                          className="object-contain"
                          fill
                          sizes="64px"
                          src="/brand/ssh-logo-transparent.png"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="font-metric text-sm font-semibold uppercase tracking-[0.16em] text-[rgba(252,251,247,0.88)]">
                        Chapter {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 font-display text-[clamp(3.6rem,10vw,7.5rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
                        {chapter.plate}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="flex flex-col justify-between gap-9 p-6 sm:p-8 lg:p-10 xl:p-12"
                  data-motion-chapter-content
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                      {chapter.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1] text-[var(--ssh-ink)]">
                      {chapter.title}
                    </h3>
                    <p className="mt-5 max-w-[780px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                      {chapter.summary}
                    </p>
                  </div>

                  <div className="grid gap-7 xl:grid-cols-[1fr_auto] xl:items-end">
                    <ul
                      className="grid gap-3"
                      aria-label={`${chapter.title} evidence points`}
                    >
                      {chapter.evidence.map((item) => (
                        <li
                          className="flex gap-3 text-sm leading-6 text-[var(--ssh-ink)] sm:text-base"
                          key={item}
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--ssh-orange)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      className="group/link inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                      href={chapter.href}
                    >
                      Explore {chapter.title}
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      />
                    </Link>
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