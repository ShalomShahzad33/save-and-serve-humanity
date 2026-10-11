import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { primaryNavigation, programIntroductions, siteMeta } from "@/data/site";

const contactLinks = [
  {
    label: "Address",
    value: "Opposite Christ Church Youhanabad",
    href: "/contact",
    icon: MapPin
  },
  {
    label: "Email",
    value: "info@lavenderblush-herring-796782.hostingersite.com",
    href: "mailto:info@lavenderblush-herring-796782.hostingersite.com",
    icon: Mail
  },
  {
    label: "Phone",
    value: "(+92) 0300 8191404",
    href: "tel:+923008191404",
    icon: Phone
  }
] as const;

const supportLinks = [
  { label: "Donation readiness", href: "/donate" }
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ssh-blue-950)] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-10 border-b border-white/12 pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <Link
              aria-label={`${siteMeta.name} home`}
              className="inline-flex items-center gap-4 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
              href="/"
            >
              <span className="relative h-16 w-16 overflow-hidden rounded-full bg-white p-1.5 shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
                <Image
                  alt=""
                  className="object-contain"
                  fill
                  quality={95}
                  sizes="64px"
                  src="/brand/ssh-logo-transparent.png"
                />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                  SSH
                </span>
                <span className="mt-1 block text-lg font-semibold text-[var(--ssh-warm-white)]">
                  Save and Serve Humanity
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-[720px] text-lg leading-8 text-white/72">
              {siteMeta.description}
            </p>

            <div className="mt-8 max-w-[720px] border-l-2 border-[var(--ssh-nest-gold)] bg-white/6 px-5 py-4">
              <p className="text-sm leading-6 text-white/64">
                Donation information has not been provided yet. The donate page
                is available as a prepared pathway for approved giving details
                when SSH confirms them.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <nav aria-label="Footer navigation">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Site
              </p>
              <ul className="mt-5 grid gap-3">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-sm font-semibold text-white/76 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer work links">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Work
              </p>
              <ul className="mt-5 grid gap-3">
                {programIntroductions.map((program) => (
                  <li key={program.href}>
                    <Link
                      className="text-sm font-semibold text-white/76 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                      href={program.href}
                    >
                      {program.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Respond
              </p>
              <ul className="mt-5 grid gap-3">
                {supportLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-sm font-semibold text-white/76 transition duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="grid gap-7 border-b border-white/12 py-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
              Verified contact
            </p>
            <p className="mt-4 max-w-[420px] text-sm leading-6 text-white/56">
              These details come from the user-confirmed authoritative SSH
              website source.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;

              return (
                <Link
                  className="group flex items-start gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-nest-gold)]"
                  href={contact.href}
                  key={contact.label}
                >
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-[var(--ssh-nest-gold)] transition duration-200 group-hover:bg-white group-hover:text-[var(--ssh-blue)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/42">
                      {contact.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-semibold leading-6 text-white/82">
                      {contact.value}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-9 lg:flex-row lg:items-end lg:justify-between">
          <p
            aria-hidden="true"
            className="font-display text-[clamp(2.5rem,8vw,8rem)] font-semibold leading-[0.82] text-white/8"
          >
            SAVE &amp; SERVE HUMANITY
          </p>
          <p className="text-sm font-semibold text-white/52">
            &copy; {year} {siteMeta.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
