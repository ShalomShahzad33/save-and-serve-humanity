import Link from "next/link";
import { BookOpenText, HandHeart, Mail, WalletCards } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const nextActions = [
  {
    title: "Explore the work",
    description:
      "Follow the main areas of SSH service across health, youth development, and community welfare.",
    href: "/our-work",
    label: "Our Work",
    icon: BookOpenText
  },
  {
    title: "Start a conversation",
    description:
      "Use the contact page for questions, collaboration, updated records, or story material.",
    href: "/contact",
    label: "Contact SSH",
    icon: Mail
  },
  {
    title: "Support pathway",
    description:
      "The donate page is ready to receive the approved giving details once SSH provides them.",
    href: "/donate",
    label: "Donate",
    icon: WalletCards
  }
];

export function BlogClosingCta() {
  return (
    <section
      aria-labelledby="blog-closing-title"
      className="bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-28"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div data-motion-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]">
            Continue from the archive
          </p>
          <h2
            className="mt-4 max-w-[760px] font-display text-[clamp(2.6rem,5vw,5.1rem)] font-semibold leading-[0.98] text-[var(--ssh-warm-white)]"
            id="blog-closing-title"
          >
            Let the stories lead into practical service.
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-white/76 sm:text-xl">
            SSH&apos;s archive is meant to point beyond reading. Visitors can keep
            exploring the work, contact the team, or use the prepared donation
            route once official giving details are confirmed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/get-involved">Get Involved</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact SSH
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4" data-motion-reveal>
          {nextActions.map((action) => {
            const Icon = action.icon;

            return (
              <Link
                className="group grid gap-5 border border-white/14 bg-white/[0.055] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/28 hover:bg-white/[0.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-6"
                href={action.href}
                key={action.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_14px_34px_rgba(0,0,0,0.14)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-2xl font-semibold leading-tight text-white transition duration-200 group-hover:text-[var(--ssh-nest-gold)]">
                    {action.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
                    {action.description}
                  </span>
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ssh-nest-gold)] sm:text-right">
                  {action.label}
                </span>
              </Link>
            );
          })}

          <div className="border-l-2 border-[var(--ssh-nest-gold)] bg-white/[0.055] p-5">
            <div className="flex items-start gap-3">
              <HandHeart aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[var(--ssh-nest-gold)]" />
              <p className="text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                Donation copy remains intentionally modest until SSH confirms
                the official campaign, payment method, and transparency details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}