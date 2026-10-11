# Save and Serve Humanity — Codex Project Instructions

## Project Goal

Build the official Save and Serve Humanity (SSH) website as a premium, image-rich, motion-aware humanitarian website that communicates a long history of practical service with dignity, trust, clarity, and strong editorial storytelling.

The website must feel specific to SSH.

It must not resemble:

- a generic charity template
- a SaaS landing page
- a web-agency portfolio
- a fundraising page driven by guilt
- a generic church website
- an AI-generated NGO site

The finished experience should make SSH’s real work, archive, stories, and identity feel carefully preserved and professionally presented.

---

## Documentation Entry Point

Before substantial work, read only the documentation relevant to the current feature.

Core project files:

- `DATA.md` — factual authority
- `DESIGN.md` — visual authority
- `COMPONENTS.md` — reusable UI authority
- `MOTION.md` — motion authority
- `COPYWRITING.md` — voice/editorial authority
- `PAGES.md` — route/page architecture
- `TECH_STACK.md` — engineering authority
- `SKILLS.md` — specialized Codex skill guidance

Do not front-load every document into context for every tiny task.

Read the smallest relevant set.

Examples:

Home hero:

- `DATA.md`
- `DESIGN.md`
- `MOTION.md`
- `COPYWRITING.md`
- relevant `PAGES.md` section

Blog Markdown loader:

- `TECH_STACK.md`
- `COMPONENTS.md`
- relevant `PAGES.md` section

Do not repeatedly reread unrelated files.

---

## Core Priorities

1. Factual integrity
2. Dignified visual storytelling
3. Strong use of real SSH media
4. Accessibility
5. Performance
6. Responsive quality
7. Motion quality
8. SEO and semantic structure
9. Maintainable content architecture
10. Ease of adding Markdown blog posts and large amounts of imagery

A beautiful page containing invented facts is a failure.

A technically correct page that looks generic is also unfinished.

---

## Factual Authority — Critical

`DATA.md` is the factual source of truth for organization-level content.

Before writing public-facing SSH copy, check it.

Never invent:

- founding date
- registration details
- board members
- leadership titles
- mission statement
- vision statement
- beneficiary totals
- patient totals
- volunteer counts
- donor counts
- money raised
- partner relationships
- addresses
- phone numbers
- email addresses
- awards
- project outcomes

If a fact is unavailable, build the layout so it can accept it later or omit that content.

Never use lorem ipsum or fake NGO facts to make a section look complete.

---

## Data Confidence Rules

`DATA.md` distinguishes among information that is:

- safe/confirmed for use
- known from prior/public material but should be verified before prominent publication
- unknown

Do not silently upgrade a `VERIFY` fact into a definitive headline.

For example:

A historical public record of the `147th free medical camp` in August 2022 may be presented as a dated historical milestone.

Do not turn it into:

`SSH has conducted exactly 147 camps`

as a current total.

---

## Logo Rules

Use the user-supplied SSH logo directly.

Expected project path:

`/public/brand/ssh-logo.jpg`

The design palette is derived from this logo.

Do not replace it with:

- a generic dove
- a heart/hands charity mark
- an AI-generated logo
- a new pelican drawing

Do not recolor it into purple/cyan gradients.

If the user later provides a transparent PNG or SVG, adopt it centrally.

---

## Color Rules

The canonical brand blue is approximately:

`#01458E`

Warm supporting colors also come from the supplied logo.

Follow `DESIGN.md` instead of improvising a fashionable palette.

Never default to generic purple gradients because a design skill suggests them.

---

## Required Technical Direction

Unless the repository already establishes another compatible stack, prefer:

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- GSAP
- ScrollTrigger
- Markdown files for blog content
- Next.js image optimization

Server Components by default.

Client Components only when necessary.

---

## Required Skills

Use installed skills when relevant rather than relying only on generic model knowledge.

### UI and art direction

Use `frontend-design` and/or `ui-ux-pro-max` when:

- designing a page or section
- making composition decisions
- choosing responsive layout behavior
- reviewing whether the result feels generic

Project documentation overrides generic skill aesthetics.

### Motion

Use `gsap-web` for:

- hero choreography
- ScrollTrigger
- image reveals
- archive image trail
- timeline progression
- pinned storytelling when justified

Use `web-animation-design` for:

- timing
- easing
- choreography
- restraint
- interruption behavior
- motion review

### React / Next.js

Use `vercel-react-best-practices` for:

- performance-sensitive React work
- client/server boundaries
- bundle control
- render performance

### UI review

Use `web-design-guidelines` before completing significant UI work.

### Browser QA

Use `playwright` after meaningful page/interaction work.

Do not declare visual work complete by reading source code alone.

---

## Design Rules

Follow `DESIGN.md`.

The SSH aesthetic is:

- editorial documentary
- humanitarian
- image-led
- calm
- dignified
- brand-blue anchored
- warm
- modern

Avoid:

- charity-template card grids
- endless pill UI
- glassmorphism everywhere
- neon glows
- random blobs
- stock icon grids
- startup dashboards
- fake impact counters
- generic centered hero sections

Every major section needs a compositional reason to exist.

---

## Human Dignity in Design

Real photographs are a primary asset.

Never use vulnerable people as decorative texture.

Avoid:

- humiliating crops
- pity framing
- sensational medical imagery
- emotionally manipulative overlays
- automatically publishing every archive image

If publication suitability is unclear, flag the image instead of using it.

---

## AI Image Rule

Do not generate fake humanitarian event photographs and present them as SSH activity.

The user has a substantial real image archive.

Use real supplied media whenever available.

AI-generated decorative art should generally be avoided for SSH because it can weaken documentary trust.

---

## Blog — Critical Requirement

SSH will have a proper blog.

The user will add posts through normal `.md` files.

Canonical content directory:

`/content/blog/`

Do not require the user to edit React/TypeScript for each article.

Do not force a CMS at launch.

Do not force MDX unless a real need appears.

Blog content must be treated as first-class production content, not an afterthought.

---

## Blog Architecture Rules

A new post should normally require only:

1. one Markdown file
2. its front matter
3. its image folder

The blog system must automatically discover published posts.

Support:

- slug
- title
- description
- date
- category
- tags
- author when known
- location when known
- cover image
- cover alt text
- featured flag
- draft flag
- Scripture metadata
- gallery metadata

Validate front matter.

Do not silently render invalid posts.

---

## Blog Editorial Rules

Follow `COPYWRITING.md`.

SSH stories should be:

- human
- specific
- factual
- narrative
- dignified
- faith-aware

A story can contain:

- real quotes
- Scripture
- real dates
- real locations
- real services
- real images

Never fabricate a beneficiary quote or narrative detail to make an article feel emotional.

---

## Image Archive — Critical Requirement

The user expects to add many images, potentially a very large archive.

Initial web assets may live under:

`/public/media/`

Organize by story/event.

Example:

```text
public/media/blog/youth-seminar-2025/
  cover.jpg
  stage-01.jpg
  audience-01.jpg
  group-01.jpg
```

Do not place every archival master in the Git repository if the archive becomes multi-gigabyte.

When scale requires it, introduce external storage/CDN behind a stable media abstraction.

Do not overengineer remote storage before it is needed.

---

## Image Performance Rules

Always:

- optimize responsive image delivery
- lazy-load below fold
- reserve aspect ratio
- use accurate `sizes`
- use thumbnails for galleries/trails
- preload only actual LCP media

Never load full-resolution archive galleries at once.

---

## Signature Archive Interaction

One optional signature section can use a mouse/pointer image trail built from real SSH photos.

Requirements:

- desktop pointer devices only
- reduced-motion disabled
- capped DOM nodes
- optimized thumbnails
- transform/opacity animation
- no blocked links
- no sensitive unapproved images

Do not apply the effect globally.

---

## Motion Philosophy

Motion is a storytelling layer.

It should feel:

- calm
- precise
- cinematic
- respectful

Avoid:

- bounce
- elastic effects
- excessive text animation
- spinning logo
- playful medical imagery motion
- scroll hijacking

Read `MOTION.md` before building major animated sections.

---

## Responsive Behavior

Design and test at minimum:

- small mobile
- large mobile
- tablet
- laptop
- desktop

Do not shrink desktop blindly.

Mobile should:

- simplify motion
- disable pointer trails
- keep images readable
- keep article text comfortable
- avoid fragile pinned sequences
- keep primary navigation/actions clear

---

## Accessibility

Maintain strong WCAG-oriented fundamentals:

- semantic landmarks
- keyboard navigation
- visible focus
- sufficient contrast
- meaningful alt text
- heading hierarchy
- accessible dialogs/lightboxes
- reduced motion
- no hover-only information

For image-rich features, keyboard and screen-reader behavior is part of completion.

---

## SEO

The site is a public humanitarian organization archive.

SEO must not compromise truth or readability.

Use:

- semantic headings
- page metadata
- article metadata
- canonical URLs
- sitemap
- structured data where facts are verified

Never insert invented address/ratings/founders into structured data.

---

## Content Style

SSH should sound compassionate, specific, and experienced.

Avoid:

- generic NGO buzzwords
- guilt-driven language
- exaggerated success claims
- fake metrics
- self-congratulatory tone

Prefer:

- real places
- real dates
- real activities
- real stories
- short clear paragraphs

---

## Working With DATA.md

Whenever a page contains factual SSH content:

1. inspect the relevant `DATA.md` section
2. identify what is safe to publish
3. identify what is historical/qualified
4. omit unknown details
5. avoid unsupported generalizations

If new user-supplied information contradicts `DATA.md`, prioritize the user’s latest instruction and update the project data when requested.

---

## Working With DESIGN.md

`DESIGN.md` is the visual source of truth.

It defines:

- logo handling
- logo-derived colors
- typography
- layout
- imagery
- ethical photo treatment
- cards
- sections
- blog styling
- signature visual moments

It overrides generic recommendations from installed design skills.

---

## Component Architecture

Build reusable primitives where repetition is real.

High-value reusable pieces include:

- buttons
- containers
- navigation
- media image
- gallery lightbox
- story card
- article shell
- impact metric
- program chapter
- Scripture callout
- timeline

Do not abstract bespoke page composition into generic “section builder” APIs too early.

---

## No Fake Content Rule

Never create production-looking placeholder content such as:

- “10,000+ lives changed”
- “50+ partners”
- “25 years of impact”
- fake doctor names
- fake testimonials
- fake blog stories
- fake gallery captions

If a design requires content that does not exist, use the content that does exist or change the design.

---

# Incremental Build Protocol

This project MUST be built incrementally.

The unit of work is:

**ONE FEATURE OF ONE PAGE AT A TIME.**

Valid:

- Home → Navbar
- Home → Hero
- Home → History teaser
- Home → Work pillars
- Home → Featured story
- About → Timeline
- Blog → Story card
- Blog → Filters
- Blog Post → Markdown renderer
- Gallery → Gallery grid
- Gallery → Lightbox
- Impact → Medical camp milestone section

Invalid:

- “Build the homepage”
- “Build the site”
- “Create all pages”
- “Implement every section”

---

## Required Development Cycle

For every feature:

1. Read relevant project docs only.
2. Inspect the existing implementation.
3. Check `DATA.md` if content is involved.
4. Define exact scope.
5. Implement semantic structure.
6. Establish responsive composition.
7. Use real approved content/media available for the feature.
8. Add motion deliberately.
9. Run lint/type checks.
10. Run the app.
11. Inspect the real page in browser.
12. Check desktop.
13. Check mobile.
14. Check keyboard/accessibility.
15. Verify media behavior.
16. Verify motion/reduced motion where applicable.
17. Check console/network for errors.
18. Fix issues.
19. Refactor only where useful.
20. Stop.

Do not automatically continue to the next feature.

---

## Completion Gate

A feature is complete only when it is:

- visually correct
- factually supported
- responsive
- accessible
- motion-complete where motion is intended
- performant
- free of console errors
- integrated with existing components
- consistent with documentation
- tested in a browser

For blog features also confirm:

- Markdown loads
- invalid content fails clearly
- draft behavior is correct
- imagery is responsive
- article typography is readable

Compilation alone is not completion.

---

## Never Build Ahead

Do not create future pages/sections because they may eventually exist.

Do not create fake content to test a future feature unless the user explicitly requests fixture content.

Do not build a CMS before the Markdown blog is working.

Do not set up remote media storage before local image handling proves a need.

Do not redesign approved completed sections while implementing an unrelated section.

---

## Recommended Page Progression

A sensible initial sequence is:

Home
↓
About
↓
Our Work
↓
Blog system
↓
Blog article
↓
Impact
↓
Gallery
↓
Get Involved
↓
Donate
↓
Contact

However, even inside a page, continue the one-feature-at-a-time rule.

The user may choose a different order.

---

## Browser QA Checklist

Before completing a substantial visual feature, ask:

- Does this look unmistakably like SSH?
- Is the logo used correctly?
- Are colors consistent with the logo-derived system?
- Is real photography handled respectfully?
- Is the content factually supported?
- Does desktop composition feel intentional?
- Is mobile a real recomposition?
- Are hover states useful but restrained?
- Does keyboard navigation work?
- Is reduced motion respected?
- Are image sizes/loading sensible?
- Is text readable over every image?
- Are there layout shifts?
- Are there console errors?

---

## Final Standard

Do not stop at “functional.”

A finished SSH feature should be:

- truthful
- dignified
- visually specific
- editorially strong
- responsive
- accessible
- fast
- media-aware
- motion-aware
- browser-tested
- easy to maintain

The goal is not to maximize code generated per run.

The goal is to preserve and present SSH’s real work at a professional standard.

# Critical Rule

A small, finished, truthful feature is better than an entire site full of placeholders and assumptions.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
