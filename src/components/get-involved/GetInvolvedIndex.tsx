import Image from "next/image";
import { BookOpenText, HandCoins, HeartHandshake, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const involvementPaths = [
  {
    title: "Volunteer with care",
    eyebrow: "People and time",
    description:
      "SSH can present volunteer opportunities once the real intake process, roles, safeguarding expectations, and contact route are confirmed.",
    status: "Process details pending",
    icon: UsersRound
  },
  {
    title: "Partner around real work",
    eyebrow: "Churches, professionals, community groups",
    description:
      "Partnership language should stay practical and specific. The site can invite conversations, but should not list partner benefits or formal programs until SSH supplies them.",
    status: "Conversation pathway pending",
    icon: HeartHandshake
  },
  {
    title: "Support a project",
    eyebrow: "Giving with transparency",
    description:
      "Donation and campaign details are not published yet. This page prepares the support pathway without inventing GoFundMe links, bank details, goals, or progress numbers.",
    status: "Donation method not configured",
    icon: HandCoins
  },
  {
    title: "Share verified stories",
    eyebrow: "Help the archive travel responsibly",
    description:
      "Until direct contact and donation details are approved, the safest public action is to read and share published stories that are grounded in real SSH records.",
    status: "Available through the blog",
    icon: BookOpenText
  }
];

const integrityNotes = [
  "No volunteer application is shown until SSH supplies the real process.",
  "No donation method is shown until campaign or payment details are confirmed.",
  "No phone, email, address, or social handle is published from unverified records."
];

export function GetInvolvedIndex() {
  return (
    <>
      <section
        aria-labelledby="get-involved-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Get involved
            </p>
            <h1
              className="mt-4 max-w-[820px] font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="get-involved-title"
            >
              Serve with clarity, not guesswork.
            </h1>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              SSH&apos;s public involvement page should help people understand meaningful ways to support the work while staying honest about what has not yet been configured: current contact details, volunteer intake, and donation pathways.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/blog">Read Stories</ButtonLink>
              <ButtonLink href="/impact" variant="secondary">See Impact Evidence</ButtonLink>
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
                    Practical action
                  </p>
                  <p className="mt-8 font-display text-[clamp(4.6rem,14vw,9.6rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
                    Serve
                  </p>
                  <p className="mt-4 max-w-[520px] text-2xl font-semibold leading-tight sm:text-3xl">
                    The right next step should be truthful, reachable, and grounded in real SSH work.
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
                This first version prepares the involvement surface. It does not publish unverified contact channels or pretend that a donation system is live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="involvement-paths-title"
        className="bg-white py-20 sm:py-24 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 border-b border-[var(--ssh-border)] pb-8 sm:flex-row sm:items-end sm:justify-between" data-motion-reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Ways to participate
              </p>
              <h2
                className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
                id="involvement-paths-title"
              >
                Four paths, each waiting for the right real-world details.
              </h2>
            </div>
            <p className="text-sm font-semibold text-[var(--ssh-slate)]">
              Built without fake workflows
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {involvementPaths.map((path) => {
              const Icon = path.icon;

              return (
                <article
                  className="group rounded-[24px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_64px_rgba(7,27,47,0.08)] sm:p-7"
                  data-motion-reveal
                  key={path.title}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                        {path.eyebrow}
                      </p>
                      <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)] sm:text-4xl">
                        {path.title}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                    {path.description}
                  </p>
                  <p className="mt-6 inline-flex rounded-full border border-[var(--ssh-border)] bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[var(--ssh-blue)]">
                    {path.status}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="involvement-integrity-title"
        className="bg-[var(--ssh-blue-50)] py-20 lg:py-24"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Trust before transaction
            </p>
            <h2
              className="mt-4 max-w-[620px] font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="involvement-integrity-title"
            >
              The page is ready for details when SSH confirms them.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3" data-motion-reveal>
            {integrityNotes.map((note, index) => (
              <div className="border-l-2 border-[var(--ssh-blue)] bg-white p-6" key={note}>
                {index === 0 ? (
                  <UsersRound aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                ) : index === 1 ? (
                  <HandCoins aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                ) : (
                  <ShieldCheck aria-hidden="true" className="h-5 w-5 text-[var(--ssh-blue)]" />
                )}
                <p className="mt-5 text-base font-semibold leading-7 text-[var(--ssh-ink)]">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="involvement-contact-title"
        className="bg-white py-20 sm:py-24 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Contact pathway
            </p>
            <h2
              className="mt-4 max-w-[620px] font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="involvement-contact-title"
            >
              Direct contact comes next, once official details are supplied.
            </h2>
          </div>
          <div className="rounded-[28px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6 sm:p-8" data-motion-reveal>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--ssh-blue)] shadow-[0_14px_34px_rgba(7,27,47,0.08)]">
              <MessageCircle aria-hidden="true" className="h-7 w-7" />
            </div>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              The contact page should publish verified email, phone, address, social links, and any inquiry form behavior only after SSH confirms them. Until then, this page points visitors toward the verified story and impact archive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/gallery" variant="secondary">View Gallery</ButtonLink>
              <ButtonLink href="/blog" variant="secondary">Explore Stories</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
