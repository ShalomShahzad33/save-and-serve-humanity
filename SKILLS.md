# Save and Serve Humanity — Recommended Codex Skills

This is the focused skill stack recommended for building the SSH website.

The goal is not to install every frontend skill available. Use a small set with clear responsibilities so Codex does not receive conflicting design guidance.

Project documentation remains authoritative.

`DESIGN.md`, `DATA.md`, and the other project files override generic skill recommendations whenever there is a conflict.

---

## Tier 1 — Use These

### 1. UI/UX Pro Max

**Purpose:** broad UI/UX intelligence, responsive behavior, typography, accessibility, interaction patterns, and systematic design review.

Install/use as already established in the development environment.

Why it matters for SSH:

- helps structure a content-heavy humanitarian site
- supports responsive editorial layouts
- improves accessibility decisions
- can review complex blog/gallery interfaces

Important:

Do not let it replace the logo-derived SSH visual identity with a generic color palette.

---

### 2. Frontend Design

**Purpose:** stronger art direction and prevention of generic AI-generated landing-page aesthetics.

Use for:

- homepage composition
- About/history sections
- Our Work pages
- image-led sections
- blog landing page
- gallery art direction
- reviewing whether a page looks like a template

Why it matters for SSH:

- the site must feel like a humanitarian editorial archive, not a stock NGO theme
- the large photo library should drive composition
- page sections should vary intentionally

`DESIGN.md` is still the visual source of truth.

---

### 3. GSAP Web

**Purpose:** practical GSAP implementation knowledge for sophisticated but restrained web motion.

Use for:

- hero timelines
- ScrollTrigger
- image masks
- history timelines
- archive film strip
- archive pointer image trail
- parallax where justified
- page transitions where justified

Why it matters for SSH:

The site can have memorable motion, but the motion must remain respectful and performant.

Always pair implementation with `MOTION.md`.

---

### 4. Web Animation Design

**Purpose:** motion-design judgment rather than only animation syntax.

Use to evaluate:

- timing
- easing
- choreography
- perceived responsiveness
- reduced-motion alternatives
- whether an effect is too playful or distracting
- whether article/gallery motion remains dignified

`gsap-web` answers “how?”

`web-animation-design` helps answer “should this move this way?”

---

### 5. Vercel React Best Practices

**Purpose:** keep a highly visual Next.js site fast and architecturally sane.

Use for:

- Server/Client Component boundaries
- rendering performance
- bundle optimization
- image-heavy page architecture
- avoiding unnecessary re-renders
- content loading patterns

This is especially important because SSH may contain a large number of images and Markdown posts.

---

### 6. Web Design Guidelines

**Purpose:** final UI, UX, accessibility, and interface-quality audit.

Use before finishing substantial UI work to catch:

- accessibility issues
- weak focus states
- layout problems
- mobile usability issues
- contrast problems
- interaction mistakes
- visual inconsistency

Do not treat automated review as a replacement for checking the actual design against `DESIGN.md`.

---

### 7. Playwright — OpenAI

**Purpose:** inspect the real rendered website rather than declaring success from source code.

Use for:

- desktop/mobile checks
- navigation
- blog routes
- Markdown rendering
- filters/search
- gallery/lightbox
- forms
- responsive QA
- console errors
- screenshot-assisted iteration
- animation/scroll sanity checks

For SSH, real-browser review is mandatory before completing meaningful UI features.

---

## Tier 2 — Optional When the Project Grows

### Motion System

Use if repeated animated components begin inventing inconsistent durations/easings.

This can help formalize:

- enter/exit timing
- image reveal timing
- section choreography
- hover motion
- reduced-motion behavior

Do not install it merely to have another motion skill.

---

### GSAP ScrollTrigger Focused Reference

Use only if the site develops several substantial scroll-driven storytelling sections.

Examples:

- long history timeline
- pinned work chapters
- archive progression

Do not turn the entire website into pinned scroll sequences.

---

## Skill Responsibilities

| Concern | Primary Skill | Secondary |
|---|---|---|
| Art direction | `frontend-design` | `ui-ux-pro-max` |
| UI/UX system | `ui-ux-pro-max` | `web-design-guidelines` |
| GSAP implementation | `gsap-web` | focused ScrollTrigger reference if installed |
| Motion taste | `web-animation-design` | motion-system if installed |
| React/Next performance | `vercel-react-best-practices` | — |
| Accessibility/UI audit | `web-design-guidelines` | `ui-ux-pro-max` |
| Browser QA | `playwright` | — |

---

## When Working on the Blog

Primary project docs:

- `TECH_STACK.md`
- `COMPONENTS.md`
- `COPYWRITING.md`
- `PAGES.md`
- `DATA.md` where organization facts appear

Helpful skills:

- `vercel-react-best-practices`
- `web-design-guidelines`
- `playwright`
- `frontend-design` for the blog landing/article visual system

Do not add an unrelated CMS skill unless a CMS is actually introduced.

---

## When Working on Galleries / Image Archive

Helpful skills:

- `frontend-design`
- `ui-ux-pro-max`
- `gsap-web` for the signature trail/film-strip interaction
- `web-animation-design`
- `vercel-react-best-practices`
- `playwright`

Always review performance and accessibility because image-heavy features can fail both quickly.

---

## When Working on Organization Copy

Skills do not decide facts.

Read:

- `DATA.md`
- `COPYWRITING.md`

Never allow a design/content skill to invent statistics or organization history.

---

## Do Not Overload Codex

Avoid several overlapping skills trying to own the entire design process.

Too many broad skills can cause:

- contradictory aesthetics
- generic compromise designs
- excessive context use
- slower execution
- accidental override of SSH’s brand system

Keep two broad design voices at most:

- `frontend-design`
- `ui-ux-pro-max`

Then use focused skills for motion, performance, auditing, and browser verification.

---

## Suggested Project Files

```text
/
├── AGENTS.md
├── DESIGN.md
├── COMPONENTS.md
├── TECH_STACK.md
├── COPYWRITING.md
├── MOTION.md
├── SKILLS.md
├── PAGES.md
├── DATA.md
├── content/
│   └── blog/
└── public/
    ├── brand/
    └── media/
```

Roles:

- `AGENTS.md` tells Codex how to work.
- `DATA.md` tells Codex what is factually known.
- `DESIGN.md` defines SSH visual identity.
- `MOTION.md` defines animation behavior.
- `COMPONENTS.md` defines reusable interface primitives.
- `TECH_STACK.md` defines implementation and content architecture.
- `COPYWRITING.md` defines editorial voice.
- `PAGES.md` defines route purpose and page composition.
- `SKILLS.md` defines specialized playbooks.

---

## Final Skill Rule

Skills are advisors.

SSH’s own project files are the authority.

If a skill suggests something visually fashionable but inconsistent with the supplied logo, humanitarian tone, real-image strategy, factual rules, or incremental workflow, follow the project files instead.
