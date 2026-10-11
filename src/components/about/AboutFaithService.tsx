import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenText, HandHeart, HeartHandshake } from "lucide-react";

const servicePrinciples = [
  {
    title: "Prayer joined with action",
    description:
      "SSH's archive connects faith language with practical responsibility: medical outreach, ration support, youth formation, awareness activity, and community care.",
    icon: HandHeart
  },
  {
    title: "Care close to community life",
    description:
      "Published records include work with brick-kiln communities in Kasur, COVID-19 ration distribution, and local service in Youhanabad and Hafizabad.",
    icon: HeartHandshake
  },
  {
    title: "Scripture in story context",
    description:
      "Bible references appear alongside specific service records, supporting reflection without turning the website into a decorative religious display.",
    icon: BookOpenText
  }
] as const;

const scriptureRecords = [
  {
    reference: "Matthew 25:35",
    story: "COVID-19 ration distribution"
  },
  {
    reference: "Psalm 82:3",
    story: "Brick-kiln medical camp in Kasur"
  },
  {
    reference: "1 Timothy 4:12",
    story: "Youth Seminar 2025"
  },
  {
    reference: "Matthew 18:20",
    story: "Laweray Village church construction"
  }
] as const;

const faithImages = [
  {
    src: "/media/blog/church-construction-laweray-hafizabad/completed-church.png",
    alt: "Completed church construction supported through SSH work in Laweray Village, Hafizabad.",
    label: "Community worship"
  },
  {
    src: "/media/blog/covid-19-ration-distribution/ration-02.png",
    alt: "Ration supplies prepared during SSH's COVID-19 relief work.",
    label: "Practical care"
  }
] as const;

export function AboutFaithService() {
  return (
    <section
      aria-labelledby="about-faith-title"
      className="overflow-hidden bg-[var(--ssh-warm-white)] py-20 sm:py-24 lg:py-32"
      data-motion-section
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(360px,0.94fr)] lg:items-start lg:px-12">
        <div className="max-w-[820px]">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]"
            data-motion-reveal
          >
            Faith and service philosophy
          </p>
          <h2
            className="mt-4 font-display text-[clamp(2.55rem,5vw,4.8rem)] font-semibold leading-[0.98] text-[var(--ssh-ink)]"
            data-motion-reveal
            id="about-faith-title"
          >
            Faith made visible through service.
          </h2>
          <p
            className="mt-6 max-w-[720px] text-lg leading-8 text-[var(--ssh-slate)] sm:text-xl"
            data-motion-reveal
          >
            SSH&apos;s public record presents faith as something joined to
            practical action. The emphasis is not spectacle, but compassionate
            service: care offered through medical camps, youth formation,
            ration support, awareness work, and community projects.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3" data-motion-reveal>
            {servicePrinciples.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  className="border-t border-[var(--ssh-border)] pt-5"
                  key={principle.title}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-[var(--ssh-blue)] shadow-[0_14px_32px_rgba(7,27,47,0.08)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-[var(--ssh-ink)]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--ssh-slate)]">
                    {principle.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div
            className="mt-10 border-l-2 border-[var(--ssh-nest-gold)] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(7,27,47,0.06)]"
            data-motion-reveal
          >
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--ssh-orange)]">
              Scripture in the archive
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {scriptureRecords.map((record) => (
                <div key={record.reference}>
                  <p className="font-display text-2xl font-semibold leading-none text-[var(--ssh-blue)]">
                    {record.reference}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ssh-slate)]">
                    {record.story}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-motion-reveal>
            <Link
              className="group inline-flex items-center justify-center gap-2 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href="/blog/covid-19-ration-distribution"
            >
              Read a service story
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-[14px] border border-[var(--ssh-border)] bg-white px-5 py-3 text-sm font-semibold text-[var(--ssh-blue)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
              href="/our-work/community-welfare"
            >
              Explore community work
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:sticky lg:top-28 lg:grid-cols-1" data-motion-reveal>
          {faithImages.map((image, index) => (
            <figure
              className={
                index === 0
                  ? "overflow-hidden rounded-[26px] bg-[var(--ssh-blue-100)] shadow-[0_22px_70px_rgba(7,27,47,0.12)]"
                  : "overflow-hidden rounded-[22px] bg-[var(--ssh-blue-100)] shadow-[0_18px_50px_rgba(7,27,47,0.09)] lg:ml-16"
              }
              key={image.src}
            >
              <div className={index === 0 ? "relative aspect-[4/3]" : "relative aspect-[16/10]"}>
                <Image
                  alt={image.alt}
                  className="object-cover"
                  fill
                  quality={95}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 470px"
                  src={image.src}
                />
              </div>
              <figcaption className="bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.13em] text-[var(--ssh-blue)]">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
