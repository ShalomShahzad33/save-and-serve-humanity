import Image from "next/image";
import Link from "next/link";
import { BookOpen, Compass, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

const recoveryLinks = [
  {
    label: "Explore Our Work",
    href: "/our-work",
    icon: Compass
  },
  {
    label: "Read the Blog",
    href: "/blog",
    icon: BookOpen
  },
  {
    label: "Contact SSH",
    href: "/contact",
    icon: Mail
  }
] as const;

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="overflow-hidden bg-[var(--ssh-warm-white)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
        <div>
          <p className="font-metric text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
            404 / Page not found
          </p>
          <h1
            className="mt-4 max-w-[760px] font-display text-[clamp(3.25rem,7vw,6.8rem)] font-semibold leading-[0.94] text-[var(--ssh-ink)]"
            id="not-found-title"
          >
            This page is not in the archive.
          </h1>
          <p className="mt-7 max-w-[650px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl">
            The address may have changed, or the page may no longer be
            available. Return home or continue through SSH&apos;s published
            stories and work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Return Home</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Browse Stories
            </ButtonLink>
          </div>

          <nav aria-label="Other helpful pages" className="mt-12 max-w-[680px]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-dove-gray)]">
              Continue with
            </p>
            <ul className="mt-4 divide-y divide-[var(--ssh-border)] border-y border-[var(--ssh-border)] sm:grid sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {recoveryLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      className="group flex min-h-16 items-center gap-3 px-1 py-4 text-sm font-semibold text-[var(--ssh-ink)] transition duration-200 hover:text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)] sm:px-4"
                      href={item.href}
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-[var(--ssh-orange)] transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div
          aria-hidden="true"
          className="relative h-[440px] overflow-hidden rounded-[28px] bg-[var(--ssh-blue-950)] shadow-[0_34px_90px_rgba(7,27,47,0.2)] sm:aspect-[4/3] sm:h-auto lg:aspect-auto lg:min-h-[600px]"
        >
          <div className="absolute inset-0 [background:linear-gradient(135deg,#01458E_0%,#07386F_54%,#071B2F_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(135deg,black,transparent_78%)]" />
          <p className="absolute -right-2 top-4 font-metric text-[clamp(8rem,28vw,22rem)] font-bold leading-none text-white/8 lg:-right-4 lg:top-8">
            404
          </p>

          <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between gap-5">
              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white p-2 shadow-[0_16px_42px_rgba(0,0,0,0.2)] sm:h-24 sm:w-24">
                <Image
                  alt=""
                  className="object-contain"
                  fill
                  priority
                  quality={95}
                  sizes="96px"
                  src="/brand/ssh-logo-transparent.png"
                />
              </div>
              <span className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                SSH archive
              </span>
            </div>

            <div className="relative max-w-[520px] border-l border-[rgba(216,166,106,0.72)] pl-5 sm:pl-7">
              <p className="font-display text-[clamp(2.25rem,5vw,4.8rem)] font-semibold leading-[0.98] text-[var(--ssh-warm-white)]">
                The work continues beyond this missing page.
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/52">
                Save. Serve. Humanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
