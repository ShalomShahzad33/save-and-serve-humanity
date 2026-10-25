import Link from "next/link";
import {
  AtSign,
  ChartNoAxesCombined,
  CircleUserRound,
  CreditCard,
  ExternalLink,
  Server,
  ShieldCheck
} from "lucide-react";

const pageSections = [
  { id: "scope", label: "Scope" },
  { id: "information-you-send", label: "Information you send" },
  { id: "technical-information", label: "Technical information" },
  { id: "cookies-analytics", label: "Cookies and analytics" },
  { id: "external-services", label: "External services" },
  { id: "images-young-people", label: "Images and young people" },
  { id: "changes", label: "Future changes" },
  { id: "contact", label: "Contact" }
] as const;

const currentFootprint = [
  {
    label: "No visitor accounts",
    detail: "The website has no sign-in or member profile system.",
    icon: CircleUserRound
  },
  {
    label: "No payment collection",
    detail: "No donation form or payment processor is currently connected.",
    icon: CreditCard
  },
  {
    label: "No analytics added",
    detail: "SSH has not added analytics or advertising trackers to this build.",
    icon: ChartNoAxesCombined
  }
] as const;

const policySections = [
  {
    id: "scope",
    number: "01",
    title: "Scope of this notice",
    content: (
      <>
        <p>
          This notice explains the privacy position of the current Save and
          Serve Humanity website. It applies to pages published on this site
          and describes the features that are available now.
        </p>
        <p>
          The website is primarily a public information and story archive. It
          does not currently provide visitor accounts, a direct message form,
          volunteer applications, or online donation processing.
        </p>
      </>
    )
  },
  {
    id: "information-you-send",
    number: "02",
    title: "Information you choose to send",
    content: (
      <>
        <p>
          The site provides email and telephone links. If you contact SSH, you
          choose what personal information to include in that communication.
          This may include your name, contact details, and the contents of your
          message.
        </p>
        <p>
          Email and telephone communications are handled outside this website
          by your chosen provider and SSH&apos;s communication services. Avoid
          sending sensitive personal, medical, financial, or identity
          information unless SSH has asked for it through an appropriate
          channel.
        </p>
      </>
    )
  },
  {
    id: "technical-information",
    number: "03",
    title: "Technical information",
    content: (
      <>
        <p>
          Web hosting and network providers may process basic request data when
          a page is visited, such as an IP address, browser type, requested URL,
          date and time, and security-related logs. This information supports
          delivery, reliability, and protection of the website.
        </p>
        <p>
          SSH has not added a separate visitor database to this build. The
          handling and retention of infrastructure logs depend on the services
          used to host and protect the live website.
        </p>
      </>
    )
  },
  {
    id: "cookies-analytics",
    number: "04",
    title: "Cookies and analytics",
    content: (
      <>
        <p>
          SSH has not intentionally added analytics, advertising pixels, or
          marketing cookies to the current website. The site does not use
          cookies to build visitor profiles or personalize advertising.
        </p>
        <p>
          If analytics, embedded media, forms, or another service is introduced
          later, this notice should be updated before or alongside that change.
          Any consent controls required by the new service should be added at
          the same time.
        </p>
      </>
    )
  },
  {
    id: "external-services",
    number: "05",
    title: "External links and services",
    content: (
      <>
        <p>
          The website may link to email, telephone, social, fundraising, or
          other third-party services. Following an external link means that
          service&apos;s own privacy terms and security practices apply.
        </p>
        <p>
          A third-party link does not give SSH control over how that provider
          collects or uses information. Review the provider&apos;s privacy notice
          before sharing personal details or completing a transaction.
        </p>
      </>
    )
  },
  {
    id: "images-young-people",
    number: "06",
    title: "Images, stories, and young people",
    content: (
      <>
        <p>
          SSH publishes documentary photographs and stories about its work.
          Care is taken to present people with dignity and to avoid unnecessary
          identifying information, especially in material involving patients,
          children, and young people.
        </p>
        <p>
          If you are pictured or identified in published material and have a
          privacy concern, contact SSH with the page or image details. The
          organization can review the material and the appropriate response.
        </p>
      </>
    )
  },
  {
    id: "changes",
    number: "07",
    title: "When the website changes",
    content: (
      <>
        <p>
          This website is still being completed in phases. Contact forms,
          volunteer workflows, analytics, fundraising services, or embedded
          media may change how personal information is handled.
        </p>
        <p>
          This notice will be revised when those features become active. The
          date at the top of the page identifies the latest published version.
        </p>
      </>
    )
  },
  {
    id: "contact",
    number: "08",
    title: "Privacy questions or concerns",
    content: (
      <>
        <p>
          For a question about this notice, a concern about published content,
          or a request related to information you sent directly to SSH, email
          the organization at the address below.
        </p>
        <Link
          className="group mt-6 inline-flex min-h-12 items-center gap-3 rounded-[14px] bg-[var(--ssh-blue)] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--ssh-blue-800)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
          href="mailto:info@sshpk.org"
        >
          <AtSign aria-hidden="true" className="h-4 w-4" />
          info@sshpk.org
          <ExternalLink
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Link>
      </>
    )
  }
] as const;

export function PrivacyIndex() {
  return (
    <>
      <section
        aria-labelledby="privacy-title"
        className="overflow-hidden bg-[var(--ssh-blue-950)] py-20 text-white sm:py-24 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-12">
          <div data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-nest-gold)]">
              Privacy at SSH
            </p>
            <h1
              className="mt-4 max-w-[780px] font-display text-[clamp(3.25rem,7vw,7rem)] font-semibold leading-[0.94] text-[var(--ssh-warm-white)]"
              id="privacy-title"
            >
              Clear about what this website collects.
            </h1>
            <p className="mt-7 max-w-[680px] text-lg leading-8 text-white/72 sm:text-xl">
              This notice reflects the SSH website as it works today. It will
              be revised when forms, analytics, donation processing, or other
              data-handling services are introduced.
            </p>
            <p className="mt-8 font-metric text-sm font-semibold uppercase tracking-[0.14em] text-white/48">
              Last updated 25 October 2026
            </p>
          </div>

          <div
            className="border-t border-white/16 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            data-motion-reveal
          >
            <div className="flex items-center gap-3">
              <ShieldCheck
                aria-hidden="true"
                className="h-6 w-6 text-[var(--ssh-nest-gold)]"
              />
              <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Current data footprint
              </h2>
            </div>
            <div className="mt-7 divide-y divide-white/12">
              {currentFootprint.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="flex gap-4 py-5 first:pt-0" key={item.label}>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-[var(--ssh-nest-gold)]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-white/62">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Privacy notice"
        className="bg-[var(--ssh-warm-white)] py-16 sm:py-20 lg:py-28"
        data-motion-section
      >
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-between lg:px-12">
          <aside className="lg:sticky lg:top-28 lg:self-start" data-motion-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--ssh-orange)]">
              On this page
            </p>
            <nav aria-label="Privacy notice sections" className="mt-5">
              <ol className="border-l border-[var(--ssh-border)]">
                {pageSections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      className="group flex gap-3 border-l-2 border-transparent py-2.5 pl-4 text-sm leading-5 text-[var(--ssh-slate)] transition duration-200 hover:border-[var(--ssh-orange)] hover:text-[var(--ssh-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ssh-orange)]"
                      href={`#${section.id}`}
                    >
                      <span className="font-metric text-xs font-semibold text-[var(--ssh-dove-gray)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold">{section.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="mt-8 border-l-2 border-[var(--ssh-nest-gold)] bg-white px-5 py-4">
              <Server
                aria-hidden="true"
                className="h-5 w-5 text-[var(--ssh-blue)]"
              />
              <p className="mt-3 text-sm leading-6 text-[var(--ssh-slate)]">
                This notice describes the current rebuild, not services that may
                be added later.
              </p>
            </div>
          </aside>

          <article className="min-w-0">
            {policySections.map((section) => (
              <section
                className="scroll-mt-28 border-t border-[var(--ssh-border)] py-10 first:border-t-0 first:pt-0 sm:py-12"
                id={section.id}
                key={section.id}
              >
                <p className="font-metric text-sm font-semibold text-[var(--ssh-orange)]">
                  {section.number}
                </p>
                <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight text-[var(--ssh-ink)]">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-[var(--ssh-slate)] sm:text-lg">
                  {section.content}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
