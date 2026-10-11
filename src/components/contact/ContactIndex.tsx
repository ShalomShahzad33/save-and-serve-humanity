import Image from "next/image";
import {
  AtSign,
  Building2,
  ClipboardCheck,
  MessageSquareText,
  Phone,
  ShieldCheck
} from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const contactChannels = [
  {
    title: "Email",
    value: "info@sshpk.org",
    href: "mailto:info@sshpk.org",
    description:
      "Use this public email for general questions and organization inquiries.",
    icon: AtSign
  },
  {
    title: "Phone",
    value: "(+92) 0300 8191404",
    href: "tel:+923008191404",
    description:
      "The public phone number listed for SSH contact on the confirmed website source.",
    icon: Phone
  },
  {
    title: "Location",
    value: "Opposite Christ Church Youhanabad",
    description:
      "The contact location published by SSH. A fuller postal address can be added when supplied.",
    icon: Building2
  },
  {
    title: "Message form",
    value: "Coming next",
    description:
      "The previous website included a message form. This rebuild will add one once submission handling and privacy wording are configured.",
    icon: MessageSquareText
  }
];

const publishChecks = [
  "Contact details now come from the confirmed SSH website source.",
  "The message form still needs submission handling before it goes live.",
  "Donation-specific contact wording can be added once donation details are confirmed."
];

export function ContactIndex() {
  return (
    <>
      <section
        aria-labelledby="contact-title"
        className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
          <div className="flex flex-col justify-center" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Contact SSH
            </p>
            <h1
              className="mt-4 max-w-[820px] font-display text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
              id="contact-title"
            >
              Reach Save and Serve Humanity.
            </h1>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
              These public contact details come from SSH&apos;s confirmed website source for this rebuild. The message form is still being rebuilt so inquiries have a reliable submission path.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="mailto:info@sshpk.org">
                Email SSH
              </ButtonLink>
              <ButtonLink href="tel:+923008191404" variant="secondary">
                Call SSH
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
                    Public contact
                  </p>
                  <p className="mt-8 font-display text-[clamp(4.6rem,14vw,9.6rem)] font-semibold leading-none text-[var(--ssh-warm-white)]">
                    Reach
                  </p>
                  <p className="mt-4 max-w-[520px] text-2xl font-semibold leading-tight sm:text-3xl">
                    Questions, support, and organization inquiries now have a visible route.
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

              <div className="space-y-4 border-l border-[rgba(216,166,106,0.62)] pl-5 text-sm leading-6 text-white/78 sm:text-base sm:leading-7">
                <p>info@sshpk.org</p>
                <p>(+92) 0300 8191404</p>
                <p>Opposite Christ Church Youhanabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-channels-title"
        className="bg-white py-20 sm:py-24 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 border-b border-[var(--ssh-border)] pb-8 sm:flex-row sm:items-end sm:justify-between" data-motion-reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
                Contact channels
              </p>
              <h2
                className="mt-3 font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
                id="contact-channels-title"
              >
                Public details for getting in touch.
              </h2>
            </div>
            <p className="text-sm font-semibold text-[var(--ssh-slate)]">
              Confirmed website source
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;

              return (
                <article
                  className="group rounded-[24px] border border-[var(--ssh-border)] bg-[var(--ssh-warm-white)] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_64px_rgba(7,27,47,0.08)] sm:p-7"
                  data-motion-reveal
                  key={channel.title}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-orange)]">
                        {channel.title}
                      </p>
                      <h3 className="mt-4 break-words font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)] transition duration-200 group-hover:text-[var(--ssh-blue)] sm:text-3xl">
                        {channel.href ? (
                          <a
                            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                            href={channel.href}
                          >
                            {channel.value}
                          </a>
                        ) : (
                          channel.value
                        )}
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white text-[var(--ssh-blue)] shadow-[0_12px_28px_rgba(7,27,47,0.07)]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-[var(--ssh-slate)] sm:text-lg sm:leading-8">
                    {channel.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="contact-readiness-title"
        className="bg-[var(--ssh-blue-50)] py-20 lg:py-24"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              Next contact upgrade
            </p>
            <h2
              className="mt-4 max-w-[620px] font-display text-[clamp(2.2rem,4vw,3.8rem)] font-semibold leading-tight text-[var(--ssh-ink)]"
              id="contact-readiness-title"
            >
              Direct contact is live; the message form comes after handling is configured.
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