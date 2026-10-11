export const siteMeta = {
  name: "Save and Serve Humanity",
  shortName: "SSH",
  description:
    "Save and Serve Humanity is a Pakistan-based humanitarian organization serving communities through health, education and youth development, and community welfare.",
  url: "https://sshpk.org"
};

export const primaryNavigation = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" }
] as const;

export const workPillars = [
  "Health",
  "Education & Youth",
  "Community Welfare"
] as const;

export const programIntroductions = [
  {
    title: "Health",
    eyebrow: "Medical outreach",
    href: "/our-work/health",
    description:
      "SSH's documented health work includes numbered free medical camps, brick-kiln outreach in Kasur, women-focused care, eye-care activity, and free dispensary initiatives."
  },
  {
    title: "Education & Youth",
    eyebrow: "Formation and responsibility",
    href: "/our-work/education-youth",
    description:
      "SSH's youth and education work includes seminars, awareness programs, and learning-oriented initiatives, including the 2025 youth seminar in Youhanabad."
  },
  {
    title: "Community Welfare",
    eyebrow: "Service close to community life",
    href: "/our-work/community-welfare",
    description:
      "SSH's broader welfare history includes COVID-19 ration distribution, community support, awareness walks, seminars, and church-related service projects."
  }
] as const;

type LegacyRecord = {
  marker: string;
  title: string;
  meta: string;
  dateTime?: string;
  description: string;
};

export const legacyRecords: LegacyRecord[] = [
  {
    marker: "2005",
    title: "Documented service history begins",
    meta: "Medical-camp history",
    description:
      "SSH's authoritative archive connects its medical-camp and service history to work beginning in 2005. This is used as documented service history, not as a legal incorporation claim."
  },
  {
    marker: "147th",
    title: "Women-focused free medical camp",
    meta: "22 August 2022",
    dateTime: "2022-08-22",
    description:
      "SSH's archive identifies this outreach as SSH's 147th free medical camp, held for women at Shalom Maternity Home in Youhanabad, Lahore."
  },
  {
    marker: "160th",
    title: "Two-day free medical camp",
    meta: "2025 archive record",
    dateTime: "2025-03-16",
    description:
      "SSH and Chief Cornerstone Fellow Church Ministries conducted the 160th Free Medical Camp as a two-day outreach, and the archive record states that more than 400 patients received care."
  }
];

type WorkChapterTitle = "Health" | "Education & Youth" | "Community Welfare";

type WorkChapter = {
  title: WorkChapterTitle;
  eyebrow: string;
  href: string;
  summary: string;
  evidence: string[];
  plate: string;
  tone: "blue" | "gold" | "warm";
};

export const workChapters: WorkChapter[] = [
  {
    title: "Health",
    eyebrow: "Medical outreach and practical care",
    href: "/our-work/health",
    summary:
      "Health is SSH's strongest documented body of work: numbered free medical camps, medical outreach in Kasur, women-focused care, eye-care activity, and a free dispensary initiative.",
    evidence: [
      "160th Free Medical Camp recorded in the 2025 archive",
      "More than 400 patients received care in that two-day camp",
      "155 women and children received care at a 2023 brick-kiln camp in Kasur"
    ],
    plate: "Care",
    tone: "blue"
  },
  {
    title: "Education & Youth",
    eyebrow: "Seminars, responsibility, and formation",
    href: "/our-work/education-youth",
    summary:
      "SSH's education and youth work includes seminars, awareness programs, educational initiatives, youth empowerment, and learning-oriented events shaped by faith moving into action.",
    evidence: [
      "Youth Seminar 2025 held on 6 August 2025",
      "Theme: \u0628\u0627\u0627\u062e\u062a\u06cc\u0627\u0631 \u0646\u0648\u062c\u0648\u0627\u0646\u060c \u0628\u0627\u0648\u0642\u0627\u0631 \u0642\u0648\u0645",
      "Slogan: From Prayer to Power, This is YOUR Hour"
    ],
    plate: "Youth",
    tone: "gold"
  },
  {
    title: "Community Welfare",
    eyebrow: "Service around everyday community life",
    href: "/our-work/community-welfare",
    summary:
      "SSH's broader welfare history includes community support, COVID-19 ration distribution, awareness walks, seminars, church-related projects, and other practical service initiatives.",
    evidence: [
      "Ration distribution during the COVID-19 lockdown period",
      "Mouth cancer awareness walk in Karachi in 2012",
      "Church construction support in Laweray Village, Hafizabad"
    ],
    plate: "Serve",
    tone: "warm"
  }
];

type HealthMilestone = {
  ordinal: string;
  label: string;
  date: string;
  dateTime: string;
  location: string;
  description: string;
  guardrail: string;
  evidence: string[];
};

export const healthMilestone: HealthMilestone = {
  ordinal: "160th",
  label: "two-day free medical camp",
  date: "March 16, 2025",
  dateTime: "2025-03-16",
  location: "Chief Cornerstone Fellow Church Ministries",
  description:
    "SSH and Chief Cornerstone Fellow Church Ministries conducted SSH's 160th Free Medical Camp as a two-day outreach. The archive record states that more than 400 patients received free care during the camp.",
  guardrail:
    "The 160th camp is presented as a confirmed archive milestone, not as SSH's current lifetime camp total.",
  evidence: [
    "Identified as SSH's 160th Free Medical Camp",
    "Conducted as a two-day health outreach",
    "More than 400 patients received care in this specific camp"
  ]
};
