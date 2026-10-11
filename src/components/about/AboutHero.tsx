import Image from "next/image";
import { CalendarClock, HeartHandshake, Stethoscope } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const historyAnchors = [
  {
    label: "Documented service history",
    value: "2005",
    description:
      "SSH's confirmed website source connects its medical-camp and service history to work beginning in 2005.",
    icon: CalendarClock
  },
  {
    label: "Medical camp milestone",
    value: "160th",
    description:
      "The 2025 archive records SSH's 160th Free Medical Camp as a two-day outreach with more than 400 patients served.",
    icon: Stethoscope
  },
  {
    label: "Work shaped by service",
    value: "3",
    description:
      "The site presents SSH's work through health, education and youth development, and community welfare.",
    icon: HeartHandshake
  }
];

export function AboutHero() {
  return (
    <>
      <section
        aria-labelledby="about-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              About SSH
            </p>
            <h1
              className="mt-4 max-w-[840px] font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="about-title"
            >
              A long record of service, carried through practical care.
            </h1>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              Save and Serve Humanity is a Pakistan-based humanitarian organization whose documented work reaches back to 2005, with service across healthcare, education and youth development, and community welfare.
            </p>
            <p className="mt-5 max-w-[720px] text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
              This About page begins with confirmed history and real archive photography. Founder, registration, board, and full governance details can be added when you provide the official records.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Read Archive Stories</ButtonLink>
              <ButtonLink href="/gallery" variant="secondary">View Gallery</ButtonLink>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-4 text-white shadow-[0_34px_90px_rgba(7,27,47,0.22)] sm:p-5 lg:min-h-[590px]"
            data-motion-reveal
          >
            <div className="relative h-full min-h-[520px] overflow-hidden rounded-[26px]">
              <Image
                alt="People gathered at Save and Serve Humanity's 160th free medical camp."
                className="object-cover"
                fill
                priority
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, (max-width: 1440px) 58vw, 860px"
                src="/media/home/hero-160th-free-medical-camp.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.86)] via-[rgba(7,27,47,0.16)] to-transparent" />
              <div className="absolute left-5 top-5 h-16 w-16 overflow-hidden rounded-full bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:left-6 sm:top-6 sm:h-20 sm:w-20">
                <Image
                  alt=""
                  className="object-contain"
                  fill
                  priority
                  sizes="80px"
                  src="/brand/ssh-logo-transparent.png"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  Archive photograph
                </p>
                <p className="mt-3 max-w-[520px] text-2xl font-semibold leading-tight sm:text-3xl">
                  The rebuilt site is now anchored by real SSH media, beginning with the 160th Free Medical Camp archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="about-anchors-title"
        className="bg-white py-20 lg:py-24"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col gap-5 border-b border-[var(--ssh-border)] pb-8 sm:flex-row sm:items-end sm:justify-between"
            data-motion-reveal
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Confirmed anchors
              </p>
              <h2
                className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
                id="about-anchors-title"
              >
                The story starts with what is already supported.
              </h2>
            </div>
            <p className="text-sm font-semibold text-[var(--ssh-slate)]">
              No invented founder story or governance list
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {historyAnchors.map((anchor) => {
              const Icon = anchor.icon;

              return (
                <article
                  className="group border-l-2 border-[var(--ssh-blue)] bg-[var(--ssh-warm-white)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_64px_rgba(7,27,47,0.08)] sm:p-7"
                  key={anchor.label}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <p className="mt-7 font-metric text-[clamp(3.4rem,8vw,5.8rem)] font-semibold leading-none text-[var(--ssh-blue)]">
                    {anchor.value}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)]">
                    {anchor.label}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--ssh-slate)]">
                    {anchor.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}