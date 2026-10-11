import Image from "next/image";
import { BookOpenText } from "lucide-react";
import { legacyRecords } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomeLegacy() {
  return (
    <section
      aria-labelledby="home-legacy-title"
      className="relative overflow-hidden bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_18%_18%,rgba(216,166,106,0.18),transparent_34rem),linear-gradient(135deg,#071B2F_0%,#07386F_52%,#082A4D_100%)]" />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12">
        <div className="max-w-[640px]">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]"
            data-motion-reveal
          >
            Documented legacy
          </p>
          <h2
            className="mt-4 font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[0.96]"
            data-motion-reveal
            id="home-legacy-title"
          >
            Two decades of service, told through real archive records.
          </h2>
          <p
            className="mt-6 text-lg leading-8 text-white/76 sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s authoritative archive connects its service history to 2005.
            This home excerpt brings that history forward through selected dated
            records, including women-focused care and the 160th Free Medical Camp.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-motion-reveal>
            <ButtonLink href="/about" variant="secondary">
              Read Our Story
            </ButtonLink>
            <ButtonLink href="/impact" variant="secondary">
              See Historical Evidence
            </ButtonLink>
          </div>

          <div
            className="mt-12 max-w-[520px] border-l border-[rgba(216,166,106,0.55)] pl-5 text-sm leading-6 text-white/68"
            data-motion-reveal
          >
            The 160th Free Medical Camp is a confirmed 2025 archive milestone.
            The homepage does not present it as the current lifetime total because
            later camp records may exist or be added.
          </div>
        </div>

        <div
          className="relative rounded-[28px] border border-white/14 bg-white/[0.055] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-6"
          data-motion-reveal
        >
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/14 pb-5">
            <div>
              <p className="font-metric text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ssh-nest-gold)]">
                Medical outreach records
              </p>
              <p className="mt-1 text-sm text-white/62">
                Selected records from the SSH archive
              </p>
            </div>
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white p-1.5">
              <Image
                alt=""
                className="object-contain"
                fill
                sizes="56px"
                src="/brand/ssh-logo-transparent.png"
              />
            </div>
          </div>

          <ol className="relative space-y-4 before:absolute before:left-[2.15rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/18 sm:before:left-[3.25rem]">
            {legacyRecords.map((record) => (
              <li
                className="relative grid gap-4 rounded-[22px] border border-white/12 bg-[rgba(252,251,247,0.06)] p-4 sm:grid-cols-[86px_minmax(0,1fr)] sm:p-5"
                data-motion-timeline-item
                key={record.marker}
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[rgba(216,166,106,0.42)] bg-[var(--ssh-blue-900)] font-metric text-lg font-semibold text-[var(--ssh-nest-gold)] sm:h-20 sm:w-20 sm:text-xl">
                  {record.marker}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--ssh-nest-gold)]">
                    {record.dateTime ? (
                      <time dateTime={record.dateTime}>{record.meta}</time>
                    ) : (
                      <span>{record.meta}</span>
                    )}
                    <BookOpenText aria-hidden="true" className="h-4 w-4" />
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight">
                    {record.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                    {record.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}