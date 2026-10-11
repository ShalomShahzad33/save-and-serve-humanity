import Image from "next/image";
import {
  ClipboardCheck,
  Goal,
  HandCoins,
  HeartHandshake,
  ReceiptText,
  ShieldCheck
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const donationReadiness = [
  {
    title: "Current campaign",
    eyebrow: "Campaign details",
    description:
      "A public campaign can be shown once SSH supplies the approved campaign name, purpose, link, and any verified goal or progress details.",
    status: "Campaign not configured",
    icon: Goal
  },
  {
    title: "Donation method",
    eyebrow: "Giving channel",
    description:
      "No payment form, fundraising embed, bank detail, or transfer instruction is published until the real donation pathway is confirmed.",
    status: "Payment route pending",
    icon: HandCoins
  },
  {
    title: "Use of support",
    eyebrow: "Transparency",
    description:
      "Support language should explain real project needs and stewardship practices without inventing donation impact equations or financial charts.",
    status: "Approved copy pending",
    icon: ReceiptText
  },
  {
    title: "Donor questions",
    eyebrow: "Contact",
    description:
      "A donor inquiry route can be added once SSH confirms the official contact channel and any privacy language for collected information.",
    status: "Contact details pending",
    icon: HeartHandshake
  }
];

const publishChecks = [
  "Confirm the approved donation or campaign link.",
  "Confirm whether goals, progress, or financial reporting should be displayed.",
  "Confirm donor contact, receipt, privacy, and follow-up behavior."
];

function PendingDonateCta({ dark = false }: { dark?: boolean }) {
  const noteId = dark ? "donate-cta-note-dark" : "donate-cta-note";

  return (
    <div className="flex flex-col gap-3">
      <button
        aria-describedby={noteId}
        aria-disabled="true"
        className={
          dark
            ? "inline-flex min-h-12 w-full items-center justify-center rounded-[14px] border border-white/30 bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] shadow-[0_14px_34px_rgba(0,0,0,0.14)] sm:w-auto"
            : "inline-flex min-h-12 w-full items-center justify-center rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(1,69,142,0.18)] sm:w-auto"
        }
        type="button"
      >
        Donate Now
      </button>
      <p
        className={
          dark
            ? "max-w-[360px] text-sm leading-6 text-white/72"
            : "max-w-[420px] text-sm leading-6 text-[var(--ssh-slate)]"
        }
        id={noteId}
      >
        Donation information has not been provided yet. This button is ready for the approved giving link once SSH confirms it.
      </p>
    </div>
  );
}

export function DonateIndex() {
  return (
    <>
      <section
        aria-labelledby="donate-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Donate
            </p>
            <h1
              className="mt-4 max-w-[820px] font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="donate-title"
            >
              Support should be clear before it is collected.
            </h1>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              This page prepares SSH&apos;s donation pathway without launching a fake payment form, campaign progress display, bank instruction, or fundraising link before those details are confirmed.
            </p>
            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-start">
              <PendingDonateCta />
              <ButtonLink href="/impact" variant="secondary">
                See Impact Evidence
              </ButtonLink>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[32px] bg-[var(--ssh-blue-950)] p-6 text-white shadow-[0_34px_90px_rgba(7,27,47,0.22)] sm:p-8 lg:min-h-[560px] lg:p-10"
            data-motion-reveal
          >
            <div className="absolute inset-0 opacity-95 [background:linear-gradient(135deg,#01458E_0%,#07386F_54%,#082A4D_100%)]" />
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:46px_46px]" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-14">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                    Trust before transaction
                  </p>
                  <p className="mt-8 font-display text-[clamp(4.6rem,14vw,9.6rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
                    Give
                  </p>
                  <p className="mt-4 max-w-[520px] text-2xl font-semibold leading-tight sm:text-3xl">
                    A donation page should make the way to support visible, verified, and easy to understand.
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

              <p className="max-w-[560px] border-l border-[rgba(216,166,106,0.62)] pl-5 text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                Once SSH confirms the official giving channel, this area can become the live donation action without changing the page structure.
              </p>
              <PendingDonateCta dark />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="donation-readiness-title"
        className="bg-white py-20 sm:py-24 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col gap-5 border-b border-[var(--ssh-border)] pb-8 sm:flex-row sm:items-end sm:justify-between"
            data-motion-reveal
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Donation readiness
              </p>
              <h2
                className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
                id="donation-readiness-title"
              >
                The support pathway has a place for every verified detail.
              </h2>
            </div>
            <p className="text-sm font-semibold text-[var(--ssh-slate)]">
              No live payment method shown
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {donationReadiness.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="group rounded-[24px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_64px_rgba(7,27,47,0.08)] sm:p-7"
                  data-motion-reveal
                  key={item.title}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)] sm:text-4xl">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                    {item.description}
                  </p>
                  <p className="mt-6 inline-flex rounded-full border border-[var(--ssh-border)] bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--ssh-blue)]">
                    {item.status}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="donation-publish-title"
        className="bg-[var(--ssh-blue-50)] py-20 lg:py-24"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Before publishing
            </p>
            <h2
              className="mt-4 max-w-[620px] font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="donation-publish-title"
            >
              A live donation page needs a few confirmed decisions.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3" data-motion-reveal>
            {publishChecks.map((check, index) => (
              <div className="border-l-2 border-[var(--ssh-blue)] bg-white p-6" key={check}>
                {index === 0 ? (
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                ) : (
                  <ClipboardCheck aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                )}
                <p className="mt-5 text-base font-semibold leading-7 text-[var(--ssh-ink)]">
                  {check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
