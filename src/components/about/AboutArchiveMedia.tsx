import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, Newspaper } from "lucide-react";

const archiveImages = [
  {
    src: "/media/blog/160th-free-medical-camp/cover.png",
    alt: "People gathered during SSH's 160th Free Medical Camp archive record.",
    caption: "160th Free Medical Camp",
    meta: "Health archive",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    src: "/media/blog/ssh-youth-seminar-2025/3.JPG",
    alt: "Participants at SSH's 2025 youth seminar in Youhanabad.",
    caption: "Youth Seminar 2025",
    meta: "Youth formation",
    className: ""
  },
  {
    src: "/media/blog/covid-19-ration-distribution/ration-03.png",
    alt: "Ration supplies prepared during SSH's COVID-19 community support work.",
    caption: "COVID-19 ration support",
    meta: "Community welfare",
    className: ""
  },
  {
    src: "/media/blog/brick-kiln-medical-camp-kasur-2023/camp-03.png",
    alt: "A medical camp record from SSH's brick-kiln outreach in District Kasur.",
    caption: "Brick-kiln medical outreach",
    meta: "Kasur record",
    className: ""
  },
  {
    src: "/media/blog/church-construction-laweray-hafizabad/completed-church.png",
    alt: "Completed church construction supported through SSH work in Laweray Village, Hafizabad.",
    caption: "Laweray Village church work",
    meta: "Faith and service",
    className: ""
  }
] as const;

export function AboutArchiveMedia() {
  return (
    <section
      aria-labelledby="about-archive-title"
      className="overflow-hidden bg-[var(--ssh-blue-50)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
              data-motion-reveal
            >
              Archive and legacy media
            </p>
            <h2
              className="mt-4 max-w-[760px] font-display text-[clamp(2.55rem,5vw,4.8rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
              data-motion-reveal
              id="about-archive-title"
            >
              A public archive shaped by real service records.
            </h2>
          </div>
          <p
            className="max-w-[760px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s rebuilt website draws from real photographs and published
            activity records: medical outreach, youth formation, ration support,
            awareness work, and community service.
          </p>
        </div>

        <div
          className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[210px] lg:auto-rows-[240px]"
          data-motion-reveal
        >
          {archiveImages.map((image, index) => (
            <figure
              className={`group relative overflow-hidden rounded-[24px] bg-[var(--ssh-blue-100)] shadow-[0_18px_52px_rgba(7,27,47,0.1)] ${image.className}`}
              key={image.src}
            >
              <Image
                alt={image.alt}
                className="object-cover transition duration-500 group-hover:scale-[1.025]"
                fill
                priority={index === 0}
                quality={95}
                sizes={
                  index === 0
                    ? "(max-width: 768px) 90vw, (max-width: 1440px) 50vw, 700px"
                    : "(max-width: 768px) 90vw, (max-width: 1440px) 25vw, 340px"
                }
                src={image.src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,27,47,0.78)] via-[rgba(7,27,47,0.08)] to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--ssh-nest-gold)]">
                  {image.meta}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight">
                  {image.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          data-motion-reveal
        >
          <Link
            className="group inline-flex items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
            href="/gallery"
          >
            <Images aria-hidden="true" className="h-4 w-4" />
            View Gallery
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <Link
            className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
            href="/blog"
          >
            <Newspaper aria-hidden="true" className="h-4 w-4" />
            Read Archive Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
