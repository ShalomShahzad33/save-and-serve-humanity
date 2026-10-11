import Link from "next/link";
import { ArrowRight, BookOpenText, HeartHandshake, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const supportLinks = [
  {
    title: "Read the health stories",
    description:
      "Start with the published archive records behind the medical camps and health awareness work.",
    href: "/blog",
    label: "Open Blog",
    icon: BookOpenText
  },
  {
    title: "Ask how to support",
    description:
      "Use the contact route for questions about medical outreach, records, or practical support.",
    href: "/contact",
    label: "Contact SSH",
    icon: Mail
  }
];

export function HealthCta() {
  return (
    <section
      aria-labelledby="health-cta-title"
      className="bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]">
              Continue from here
            </p>
            <h2
              className="mt-4 max-w-[900px] font-display text-[clamp(2.7rem,6vw,5.7rem)] font-semibold leading-[0.95]"
              id="health-cta-title"
            >
              Follow the records, then choose the right way to help.
            </h2>
          </div>
          <div className="max-w-[680px] lg:justify-self-end">
            <p className="text-lg leading-8 text-white/76 sm:text-xl sm:leading-9">
              SSH&apos;s health page is built from verified archive material.
              Visitors can continue into the published stories, ask for current
              details, or use the Donate page while final giving information is
              completed.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Read Health Stories</ButtonLink>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-[14px] border border-white/18 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/16 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                href="/donate"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {supportLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="group block rounded-[24px] border border-white/12 bg-white/8 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)] sm:p-7"
                href={item.href}
                key={item.title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white/10 text-[var(--ssh-nest-gold)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/70">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {item.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}

          <div className="rounded-[24px] border border-[var(--ssh-nest-gold)]/35 bg-[var(--ssh-nest-gold)]/12 p-6 sm:p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-nest-gold)]/18 text-[var(--ssh-nest-gold)]">
              <HeartHandshake aria-hidden="true" className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">
              Donate when ready
            </h3>
            <p className="mt-4 text-base leading-7 text-white/70">
              The Donate page is present, but final payment and giving details
              have not been supplied yet.
            </p>
            <Link
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href="/donate"
            >
              View Donate Page
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}