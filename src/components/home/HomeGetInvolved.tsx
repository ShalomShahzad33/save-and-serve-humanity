import Link from "next/link";
import { ArrowRight, HandCoins, HeartHandshake, UsersRound } from "lucide-react";

const responsePaths = [
  {
    title: "Volunteer",
    description:
      "Offer time and skills through the Get Involved page, where SSH can present real participation details as they are confirmed.",
    icon: UsersRound
  },
  {
    title: "Partner",
    description:
      "Start a practical conversation around medical outreach, youth formation, community welfare, or documented service projects.",
    icon: HeartHandshake
  },
  {
    title: "Support",
    description:
      "Donation details are not configured yet; the donate page is prepared for the approved giving pathway when SSH provides it.",
    icon: HandCoins
  }
] as const;

export function HomeGetInvolved() {
  return (
    <section
      aria-labelledby="home-get-involved-title"
      className="bg-[var(--ssh-warm-white)] py-14 sm:py-16 lg:py-20"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-y border-[var(--ssh-border)] py-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:py-12">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
              data-motion-reveal
            >
              Get involved
            </p>
            <h2
              className="mt-4 max-w-[680px] font-display text-[clamp(2.2rem,4.6vw,4.3rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              data-motion-reveal
              id="home-get-involved-title"
            >
              Choose a practical next step.
            </h2>
            <p
              className="mt-5 max-w-[620px] text-lg leading-8 text-[var(--ssh-slate)]"
              data-motion-reveal
            >
              For visitors ready to respond, this brief section points to the clearest next steps without turning support into pressure.
            </p>
            <div
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              data-motion-reveal
            >
              <Link
                className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/get-involved"
              >
                Get Involved
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(1,69,142,0.35)] hover:bg-[var(--ssh-blue-50)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/contact"
              >
                Contact SSH
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="grid gap-4" data-motion-reveal>
            {responsePaths.map((path) => {
              const Icon = path.icon;

              return (
                <div
                  className="grid gap-4 border-t border-[var(--ssh-border)] pt-5 first:border-t-0 first:pt-0 sm:grid-cols-[48px_minmax(0,1fr)]"
                  key={path.title}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-blue-50)] text-[var(--ssh-blue)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)] sm:text-3xl">
                      {path.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-[var(--ssh-slate)]">
                      {path.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <p className="border-l-2 border-[var(--ssh-nest-gold)] bg-white px-5 py-4 text-sm leading-6 text-[var(--ssh-slate)]">
              For donation readiness, visit the 
              <Link
                className="font-semibold text-[var(--ssh-blue)] underline decoration-[var(--ssh-border)] underline-offset-4 transition duration-200 hover:text-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                href="/donate"
              >
                donate page
              </Link>
              ; no live giving method is shown until SSH confirms the details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}