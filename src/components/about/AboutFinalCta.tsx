import Link from "next/link";
import { ArrowRight, BookOpenText, HeartHandshake, Mail } from "lucide-react";

const ctaLinks = [
  {
    href: "/our-work",
    label: "Explore Our Work",
    description: "See SSH's work across health, education and youth, and community welfare.",
    icon: HeartHandshake,
    variant: "primary"
  },
  {
    href: "/blog",
    label: "Read Our Stories",
    description: "Browse the activity archive behind the About page.",
    icon: BookOpenText,
    variant: "secondary"
  },
  {
    href: "/contact",
    label: "Contact SSH",
    description: "Use the verified contact path for questions or next steps.",
    icon: Mail,
    variant: "secondary"
  }
] as const;

export function AboutFinalCta() {
  return (
    <section
      aria-labelledby="about-final-cta-title"
      className="overflow-hidden bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-28"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
              data-motion-reveal
            >
              Continue from here
            </p>
            <h2
              className="mt-4 max-w-[760px] font-display text-[clamp(2.65rem,5.2vw,5.2rem)] font-semibold leading-[0.96] text-white"
              data-motion-reveal
              id="about-final-cta-title"
            >
              The story continues in the work itself.
            </h2>
          </div>
          <p
            className="max-w-[740px] text-lg leading-8 text-white/74 sm:text-xl"
            data-motion-reveal
          >
            About SSH is only the beginning. The clearest picture of the
            organization comes through its public records, real photographs,
            service areas, and ways to connect.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {ctaLinks.map((item) => {
            const Icon = item.icon;
            const isPrimary = item.variant === "primary";

            return (
              <Link
                className={
                  isPrimary
                    ? "group rounded-[24px] bg-white p-6 text-[var(--ssh-ink)] shadow-[0_26px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                    : "group rounded-[24px] border border-white/14 bg-white/[0.07] p-6 text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                }
                href={item.href}
                key={item.href}
              >
                <span
                  className={
                    isPrimary
                      ? "flex h-12 w-12 items-center justify-center rounded-[16px] bg-[var(--ssh-blue)] text-white"
                      : "flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)]"
                  }
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="mt-7 flex items-center justify-between gap-4">
                  <span className="font-display text-3xl font-semibold leading-tight">
                    {item.label}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
                <span
                  className={
                    isPrimary
                      ? "mt-4 block text-base leading-7 text-[var(--ssh-slate)]"
                      : "mt-4 block text-base leading-7 text-white/72"
                  }
                >
                  {item.description}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
