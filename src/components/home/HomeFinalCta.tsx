import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandCoins, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    label: "Location",
    value: "Opposite Christ Church Youhanabad",
    href: "/contact",
    icon: MapPin
  },
  {
    label: "Phone",
    value: "(+92) 0300 8191404",
    href: "tel:+923008191404",
    icon: Phone
  }
] as const;

export function HomeFinalCta() {
  return (
    <section
      aria-labelledby="home-final-cta-title"
      className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[34px] bg-[var(--ssh-blue)] text-white shadow-[0_34px_100px_rgba(7,27,47,0.18)]">
          <div className="absolute inset-0 opacity-95 [background:linear-gradient(135deg,#01458E_0%,#07386F_52%,#071B2F_100%)]" />
          <div className="absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:48px_48px]" />

          <div className="relative z-10 grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:p-12 xl:p-16">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
                data-motion-reveal
              >
                Serve with us
              </p>
              <h2
                className="mt-5 max-w-[940px] font-display text-[clamp(3rem,7vw,7.4rem)] font-semibold leading-[0.9] text-[var(--ssh-warm-white)]"
                data-motion-reveal
                id="home-final-cta-title"
              >
                Compassion becomes meaningful when it moves.
              </h2>
              <p
                className="mt-7 max-w-[760px] text-lg leading-8 text-white/76 sm:text-xl"
                data-motion-reveal
              >
                Explore SSH&apos;s work, start a conversation, or visit the
                prepared donation page while official giving details are still
                being confirmed.
              </p>

              <div
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                data-motion-reveal
              >
                <Link
                  className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-warm-white)] px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                  href="/get-involved"
                >
                  Get Involved
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] border border-white/24 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/42 hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                  href="/contact"
                >
                  Contact SSH
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-[14px] border border-[rgba(216,166,106,0.52)] px-5 py-3 text-sm font-semibold text-[var(--ssh-nest-gold)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--ssh-nest-gold)] hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                  href="/donate"
                >
                  Donate Now
                  <HandCoins aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>

              <p
                className="mt-5 max-w-[580px] text-sm leading-6 text-white/58"
                data-motion-reveal
              >
                Donation information has not been provided yet; the donate page
                is ready for SSH&apos;s approved giving details when confirmed.
              </p>
            </div>

            <aside
              aria-label="Confirmed contact details"
              className="flex flex-col justify-between gap-10 border-t border-white/14 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
              data-motion-reveal
            >
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-white p-3 shadow-[0_18px_42px_rgba(0,0,0,0.18)]">
                <Image
                  alt="Save and Serve Humanity logo"
                  className="object-contain"
                  fill
                  quality={95}
                  sizes="112px"
                  src="/brand/ssh-logo-transparent.png"
                />
              </div>

              <div className="grid gap-5">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;

                  return (
                    <Link
                      className="group flex items-start gap-3 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                      href={detail.href}
                      key={detail.label}
                    >
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[var(--ssh-nest-gold)] transition duration-200 group-hover:bg-white group-hover:text-[var(--ssh-blue)]">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/48">
                          {detail.label}
                        </span>
                        <span className="mt-1 block text-base font-semibold leading-6 text-[var(--ssh-warm-white)]">
                          {detail.value}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
