# TECH_STACK.md

# Save and Serve Humanity — Engineering Standard

> This document defines how the Save and Serve Humanity website should be engineered.
>
> `DESIGN.md` defines how it looks.
>
> `MOTION.md` defines how it moves.
>
> `COMPONENTS.md` defines the reusable interface primitives.
>
> `PAGES.md` defines what is built.
>
> `COPYWRITING.md` defines how it speaks.
>
> `DATA.md` defines what the project is allowed to state as fact.
>
> `AGENTS.md` defines how Codex should work on the project.

---

# 1. Engineering Philosophy

The SSH website must be:

- visually distinctive
- humane and content-first
- extremely responsive
- accessible
- maintainable
- scalable for years of blog content
- scalable for a large image archive
- type-safe
- SEO-friendly
- performant
- secure
- easy to extend

Visual ambition must never justify poor engineering.

Motion must never justify poor performance.

A large photo archive must never justify loading unnecessary media.

Content flexibility must never justify weak schemas or invented data.

---

# 2. Core Stack

Preferred stack:

- Next.js
- React
- TypeScript
- App Router
- Tailwind CSS
- GSAP
- ScrollTrigger

Use current stable versions unless the existing repository already establishes compatible versions.

Do not upgrade unrelated dependencies during a feature task without a real reason.

---

# 3. Framework

Use Next.js with the App Router.

Prefer:

- Server Components by default
- static generation for content-heavy public pages where practical
- Client Components only for actual interactivity

Do not place `"use client"` at a page or layout level simply because one child uses GSAP, a menu, search, or a lightbox.

Keep client-side JavaScript deliberate.

---

# 4. Rendering Strategy

The website is primarily public, editorial, and content-heavy.

Prefer static or server-rendered output for:

- Home
- About
- Our Work
- Impact
- blog index metadata
- blog posts
- Gallery shell
- Get Involved
- Donate
- Contact information

Client-side rendering is appropriate for:

- navigation interactions
- GSAP motion
- filtering/search UI
- image lightbox
- pointer image trail
- reading progress
- progressive gallery interactions
- forms

Do not turn the blog into a client-side SPA.

---

# 5. TypeScript

TypeScript is mandatory.

Avoid:

- `any`
- unexplained type assertions
- `@ts-ignore`
- `@ts-nocheck`
- unvalidated front matter

All domain data should have explicit types.

---

# 6. Styling

Use Tailwind CSS as the primary styling layer.

Use CSS/CSS modules/global styles where appropriate for:

- custom properties
- special masks
- clip paths
- article typography
- image trail layers
- noise textures
- advanced responsive behavior
- GSAP initial states
- print styles

Do not force every complex rule into an unreadable utility string.

---

# 7. Design Tokens

Centralize:

- colors
- typography
- spacing
- radii
- shadows
- widths
- z-index
- motion durations
- motion easings
- breakpoints where needed

Never scatter raw brand colors across dozens of components.

---

# 8. CSS Variables

Use CSS custom properties for canonical design tokens.

Example:

```css
:root {
  --ssh-blue: #01458e;
  --ssh-blue-950: #071b2f;
  --ssh-blue-900: #082a4d;
  --ssh-blue-800: #07386f;
  --ssh-blue-600: #155aa2;
  --ssh-blue-100: #e6eef7;
  --ssh-blue-50: #f3f7fb;

  --ssh-warm-white: #fcfbf7;
  --ssh-white: #ffffff;
  --ssh-ink: #211d1d;
  --ssh-slate: #5f6266;
  --ssh-dove-gray: #969593;

  --ssh-orange: #e87818;
  --ssh-red: #74231f;
  --ssh-nest-gold: #d8a66a;

  --radius-sm: 0.75rem;
  --radius-md: 1.125rem;
  --radius-lg: 1.5rem;

  --motion-fast: 160ms;
  --motion-normal: 320ms;
  --motion-medium: 560ms;
  --motion-slow: 800ms;
}
```

The logo-derived palette in `DESIGN.md` is authoritative.

---

# 9. Fonts

Preferred:

Display/editorial:

`Newsreader`

Body/interface:

`IBM Plex Sans`

Metrics/dates:

`Space Grotesk`

Use `next/font` when available.

Load only required weights.

Avoid loading full font families unnecessarily.

---

# 10. Suggested Project Structure

Start simple and grow only when required.

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
│       ├── example-story.md
│       └── ...
├── public/
│   ├── brand/
│   │   └── ssh-logo.jpg
│   └── media/
│       ├── blog/
│       ├── archive/
│       ├── leadership/
│       └── site/
└── src/
    ├── app/
    │   ├── page.tsx
    │   ├── about/
    │   ├── our-work/
    │   ├── impact/
    │   ├── blog/
    │   │   ├── page.tsx
    │   │   └── [slug]/
    │   ├── gallery/
    │   ├── get-involved/
    │   ├── donate/
    │   └── contact/
    ├── components/
    │   ├── ui/
    │   ├── layout/
    │   ├── motion/
    │   ├── media/
    │   ├── blog/
    │   └── ssh/
    ├── lib/
    │   ├── content/
    │   ├── media/
    │   ├── seo/
    │   ├── animations/
    │   └── utils/
    ├── data/
    ├── types/
    └── styles/
```

Do not create every folder on day one.

Create structure when a real feature requires it.

---

# 11. Documentation Authority Order

When rules conflict, follow this order:

1. explicit current user instruction
2. `DATA.md` for factual organization content
3. `DESIGN.md` for visual direction
4. `MOTION.md` for animation behavior
5. `COPYWRITING.md` for copy tone
6. `COMPONENTS.md` for reusable UI patterns
7. `PAGES.md` for architecture and route intent
8. `TECH_STACK.md` for implementation
9. installed skill guidance

Skills support the project. They do not override the project’s own brand system.

---

# 12. DATA.md Is the Factual Authority

Codex must read `DATA.md` before writing public-facing organization copy.

Rules:

- Never invent mission text.
- Never invent vision text.
- Never invent beneficiary totals.
- Never invent partner names.
- Never invent board members.
- Never infer legal status or registration numbers.
- Never turn a historical milestone into a current total without support.
- Never infer ownership relationships between SSH and Shalom facilities.
- Never infer a current leadership title from an older post.

`DATA.md` is a build-time editorial source of truth, not necessarily a runtime database.

If a fact is marked `VERIFY BEFORE PUBLISHING`, do not make it prominent public copy until approved.

---

# 13. Data Layer

Keep editable structured site data outside visual components.

Potential modules:

```text
src/data/
├── navigation.ts
├── programs.ts
├── known-milestones.ts
├── leadership.ts
├── involvement.ts
└── site-meta.ts
```

These modules should contain only content that is permitted by `DATA.md` or subsequently approved by the user.

Do not duplicate the same organization description in five components.

---

# 14. Blog Content Source

The user will add blog posts as Markdown files.

Canonical directory:

`/content/blog/*.md`

Do not require a CMS for initial production.

Do not force MDX when standard Markdown can solve the task.

The content pipeline should make it easy to add one `.md` file and its images without editing application code.

---

# 15. Markdown Front Matter

Recommended front matter schema:

```yaml
---
title: "A clear story title"
slug: "clear-story-slug"
description: "One or two sentence summary used for cards and SEO."
date: "2026-08-11"
updated: "2026-08-11"
category: "Health"
tags:
  - "Medical Camps"
  - "Community Health"
author: "Save and Serve Humanity"
location: "Youhanabad, Lahore"
cover: "/media/blog/clear-story-slug/cover.jpg"
coverAlt: "Descriptive, respectful alt text"
featured: false
draft: false
scripture:
  reference: "Matthew 25:40"
  text: "Optional short excerpt if supplied/approved"
  translation: "Optional translation label"
gallery:
  - src: "/media/blog/clear-story-slug/image-01.jpg"
    alt: "Respectful factual description"
    caption: "Optional factual caption"
---
```

Only fields actually needed should be mandatory.

Recommended required fields:

- title
- description
- date
- category
- cover
- coverAlt

`slug` may be derived from filename if absent, but explicit slug is safer when URLs are already published.

---

# 16. Blog Schema Validation

Validate front matter with a schema library such as `zod`.

Example domain model:

```ts
export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  author?: string;
  location?: string;
  cover: string;
  coverAlt: string;
  featured: boolean;
  draft: boolean;
  scripture?: {
    reference: string;
    text?: string;
    translation?: string;
  };
  gallery?: MediaAsset[];
};
```

Fail clearly during development when required front matter is invalid.

Do not silently render broken content.

---

# 17. Markdown Parsing

Use a server-side Markdown pipeline.

A reasonable stack:

- `gray-matter` for front matter
- `unified`
- `remark-parse`
- `remark-gfm`
- `remark-rehype`
- `rehype-slug`
- `rehype-autolink-headings`
- safe HTML handling only if explicitly needed

Alternative:

`react-markdown` can be used if it keeps the architecture simpler.

Choose one pipeline, not several overlapping Markdown systems.

---

# 18. Raw HTML in Markdown

Default:

Do not allow arbitrary raw HTML from content files.

If a future editorial need requires it:

- sanitize output
- define a controlled allowlist
- document why it is needed

Do not expose the site to unsafe HTML merely for convenience.

---

# 19. Markdown Image Syntax

Standard Markdown images should work:

```md
![Respectful description of the scene](/media/blog/story/image-01.jpg)
```

The renderer should map images to the project’s controlled `ArticleImage` component where possible.

For complex galleries, use front matter rather than inventing fragile Markdown syntax immediately.

---

# 20. Blog Authoring Workflow

Adding a post should normally require:

1. create `/content/blog/post-slug.md`
2. add front matter
3. write Markdown body
4. add images under `/public/media/blog/post-slug/`
5. reference those paths in front matter/Markdown
6. run validation
7. preview locally
8. publish

No application source file should need manual registration for each post.

---

# 21. Draft Posts

Support:

`draft: true`

Production builds should not include draft posts in public indexes or static routes.

Development may show them if an explicit preview flag is enabled.

---

# 22. Blog Sorting

Default order:

newest first

Featured content may be manually promoted using:

`featured: true`

Do not use “featured” as a substitute for meaningful editorial selection.

---

# 23. Blog Categories

Start with a small taxonomy based on real SSH work.

Possible categories:

- Health
- Education
- Youth
- Community Welfare
- Events
- Awareness
- Faith & Service

Do not create categories until posts actually use them.

Avoid near-duplicates such as:

- Youth
- Youth Work
- Youth Programs
- Youth Activities

Choose one canonical category.

---

# 24. Blog Tags

Tags can be more specific than categories.

Examples:

- Free Medical Camps
- Women’s Health
- Eye Care
- Youhanabad
- Kasur
- Youth Seminar

Tag pages should not be built until enough content makes them useful.

---

# 25. Reading Time

Reading time may be calculated from Markdown content.

Do not make editors maintain it manually unless necessary.

Use a simple transparent word-count estimate.

---

# 26. Related Posts

Related posts should use metadata, not AI calls at runtime.

Prefer scoring by:

1. shared category
2. shared tags
3. nearby date

Limit results.

Never display the current post in its own related list.

---

# 27. Blog Search

If search is implemented initially, keep it lightweight.

For a small/medium archive:

- generate a metadata index at build time
- search title, description, category, tags, location
- optionally index sanitized text excerpts

Do not ship every full article body and every image metadata object to the browser unnecessarily.

If the archive later becomes very large, move search to a proper indexed service only when needed.

---

# 28. Blog Pagination

Do not render hundreds of story cards in one response.

Use:

- pagination
- or progressive server-backed loading

Pagination is preferred for SEO and simplicity.

---

# 29. Image Archive Strategy

The user expects to add many images.

Initial local structure:

```text
public/media/
├── blog/
│   └── post-slug/
│       ├── cover.jpg
│       ├── image-01.jpg
│       └── image-02.jpg
├── archive/
│   └── event-or-year/
├── leadership/
└── site/
```

Keep filenames readable.

Good:

`medical-camp-youhanabad-01.jpg`

Avoid:

`IMG_984723_finalFINAL2.jpg`

The source archive can retain original filenames elsewhere; public web assets should be organized for production.

---

# 30. Large Archive Scalability

Do not assume all multi-gigabyte source media belongs inside the Git repository.

Initial development may use local optimized images.

When the public library becomes large, introduce a media provider behind a small abstraction.

Possible future storage/CDN options:

- Cloudinary
- Cloudflare R2 + image delivery
- Amazon S3 + CDN
- Supabase Storage
- another user-approved provider

Do not add external storage before the project actually needs it.

---

# 31. Media URL Abstraction

Avoid deeply coupling components to one storage provider.

A helper may normalize public media paths:

```ts
export function mediaUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "";
  return `${base}${path}`;
}
```

Only introduce this if remote media is actually planned/used.

Do not add unnecessary abstraction during the first local-image feature.

---

# 32. Image Optimization

Use Next.js `Image` where appropriate.

Always provide:

- meaningful alt text for informative images
- responsive `sizes`
- stable aspect ratio

Use `priority` only for:

- LCP hero image
- a small number of truly above-the-fold assets

Everything below the fold should generally lazy-load.

---

# 33. Image Dimensions

For local images imported statically, allow Next.js to infer dimensions.

For string paths, use a stable wrapper/aspect ratio or known dimensions.

Do not let image loading collapse/reflow the page.

---

# 34. Image Formats

Prefer source images in sensible high-quality JPEG/WebP/AVIF workflows.

Do not manually convert every asset if Next.js optimization handles delivery effectively.

Keep original archival masters separate from web-optimized deliverables when possible.

---

# 35. Sensitive Media

Do not automate the publication of every file placed in an archive folder.

Only images explicitly referenced by public page/blog content should appear publicly.

This reduces the risk of accidentally publishing:

- private medical images
- internal documents
- duplicate photos
- unapproved portraits
- personally sensitive media

---

# 36. Alt Text

Alt text should be editorial data.

Do not automatically generate overly confident descriptions of people or medical conditions.

Good:

`Volunteers speaking with community members during a free medical camp.`

Avoid:

`A poor sick family receiving life-saving care.`

Keep it factual and respectful.

---

# 37. Image Captions

Captions can provide:

- event name
- location
- date
- activity context
- photographer/credit

Do not infer identities or circumstances from appearance.

---

# 38. Video

Use video only when real SSH footage adds value.

Rules:

- no autoplay with sound
- lazy load below fold
- pause when hidden
- use poster image
- compress aggressively
- captions/transcript when speech is important

Do not use a background hero video merely because footage exists.

---

# 39. SVG

Use SVG for:

- icons
- simple decorative lines
- future vector SSH logo if supplied

Do not autotrace the current JPG logo and treat the result as canonical without approval.

---

# 40. Logo Asset Handling

Current canonical asset:

`ssh-logo.jpg`

During project setup, place it at:

`/public/brand/ssh-logo.jpg`

If a higher-resolution or transparent master is later provided, replace the asset centrally rather than changing each component.

---

# 41. Icons

Use a lightweight consistent icon set already present in the project or a small chosen library.

Do not load multiple icon libraries.

Do not let icon style compete with the historical logo artwork.

---

# 42. GSAP Architecture

GSAP is the primary engine for complex motion.

Keep shared animation logic organized.

Suggested only when needed:

```text
src/lib/animations/
├── easings.ts
├── reveal.ts
├── imageReveal.ts
├── archiveTrail.ts
├── parallax.ts
└── transitions.ts
```

Do not create animation utilities before a real repeated pattern exists.

---

# 43. React + GSAP

Use React-safe cleanup.

Prefer `gsap.context()` or the current recommended React integration pattern.

Always:

- scope selectors
- revert contexts
- kill manually created listeners/timers
- avoid orphaned ScrollTriggers

---

# 44. ScrollTrigger

Use ScrollTrigger for meaningful narrative choreography.

Good uses:

- history timeline
- archive strip
- image reveal
- work chapters
- hero exit transition

Avoid:

- one trigger per tiny paragraph
- long pinned sections with no narrative progression
- scroll hijacking

---

# 45. Pointer Image Trail

The archive image-trail interaction is optional and must be isolated.

Technical requirements:

- desktop/pointer devices only
- no effect under reduced motion
- cap concurrent elements
- recycle nodes when practical
- throttle pointer movement
- preload only a small set of thumbnails
- use transforms and opacity
- remove off-screen/expired nodes
- no state update on every pointer event if direct GSAP refs can handle it safely

The effect must degrade to a static archive composition.

---

# 46. Animation Performance

Prefer animating:

- transform
- opacity

Use filters sparingly.

Avoid animating layout properties where possible:

- top
- left
- width
- height
- margin
- padding

Do not attach large React state updates to scroll or pointer movement.

Target smooth 60 FPS on capable devices.

---

# 47. Reduced Motion

Respect `prefers-reduced-motion` globally.

Reduced-motion mode should:

- disable pointer image trail
- disable scrubbed parallax
- disable decorative floating effects
- simplify page transitions
- make content visible immediately or with a simple opacity transition
- preserve all functionality

Do not hide information because an animation is disabled.

---

# 48. Smooth Scrolling

Do not add a smooth-scroll library by default.

Native scrolling is preferred.

If a later design absolutely requires a smoothing library:

- justify the dependency
- test anchor links
- test keyboard scrolling
- test reduced motion
- test ScrollTrigger integration
- verify mobile behavior

---

# 49. Page Transitions

Use only if they add continuity without delaying navigation.

Keep total duration restrained.

Do not block route changes behind decorative animation.

---

# 50. Accessibility

Minimum fundamentals:

- semantic landmarks
- skip link
- keyboard accessibility
- visible focus states
- AA contrast
- correct heading hierarchy
- accessible dialogs
- proper labels
- alt text
- reduced motion
- no hover-only information

Test with keyboard before calling a feature complete.

---

# 51. Semantic HTML

Use elements according to meaning.

Examples:

- `<header>` for site header
- `<nav>` for navigation
- `<main>` once per page
- `<article>` for blog stories
- `<section>` for meaningful thematic groups
- `<figure>` + `<figcaption>` for captioned media
- `<blockquote>` for actual quotes
- `<time>` for dates
- `<address>` only where semantically appropriate

Do not build everything from `<div>`.

---

# 52. Heading Structure

Each page has one clear `<h1>`.

Article body headings should preserve a logical sequence.

Markdown rendering must not create broken heading hierarchy because of styling choices.

---

# 53. Forms

Validate on both:

- client for UX
- server for security

Use a schema such as Zod if already part of the project.

Never expose email/API credentials in the browser.

Keep form fields minimal.

---

# 54. Contact Backend

Do not invent a form backend.

When the user chooses an email/provider workflow, isolate it in a server action or route handler.

Until then, the UI may be built with a development-safe submission stub only if clearly marked and requested.

Do not silently discard production form submissions.

---

# 55. Donation Architecture

Do not implement payment processing without explicit donation details.

Possible future paths:

- GoFundMe external link
- GoFundMe embed if supported and approved
- another fundraising platform
- direct donation instructions provided by SSH

Build a `DonateCTA` that can accept a URL/config later.

Do not create fake progress bars, fake amounts raised, or fake donor counts.

---

# 56. SEO

Every public page should define:

- title
- description
- canonical URL
- Open Graph metadata
- social image where practical

Blog posts should use their front matter for metadata.

Do not generate misleading keywords.

---

# 57. Structured Data

Use structured data only when facts are available.

Potential schemas:

- `NGO` / `Organization`
- `BlogPosting` / `Article`
- `BreadcrumbList`
- `Event` for historical/upcoming event stories when dates/locations are known

Do not include:

- unverified address
- fake aggregate ratings
- invented founders
- unverified social links
- fabricated awards

---

# 58. Blog SEO

Each post should support:

- unique title
- unique description
- canonical URL
- article publish date
- modified date if present
- cover image
- author/publisher when known
- category/tags
- Open Graph article metadata

Generate a sitemap from published routes/posts.

---

# 59. RSS

A blog-focused organization site may benefit from RSS.

Add RSS only after the core blog is working.

If added, generate it from the same canonical Markdown metadata.

Do not maintain a duplicate feed data source.

---

# 60. Sitemap

Generate routes from:

- static pages
- published blog posts

Exclude:

- drafts
- dev routes
- previews

---

# 61. Robots

Provide sensible `robots.txt` behavior.

Do not block public content accidentally.

Preview/staging environments should be protected appropriately when necessary.

---

# 62. Analytics

Do not add analytics by default unless requested.

If analytics is added:

- choose a privacy-conscious setup
- avoid excessive tracking
- respect consent requirements applicable to the deployment
- document the integration

Do not add invasive visitor tracking merely because it is common.

---

# 63. Performance Targets

Target:

- fast LCP
- near-zero CLS
- responsive INP
- smooth image loading
- smooth motion

Lighthouse goals for representative production pages:

- Performance: 95+
- Accessibility: 95+
- Best Practices: 100 where realistic
- SEO: 100 where realistic

These are targets, not reasons to game the audit.

Core Web Vitals should pass in realistic production conditions.

---

# 64. JavaScript Budget

The site should not require a large client bundle to display static stories.

Keep:

- Markdown parsing server-side
- article content server-rendered
- metadata filtering efficient

Dynamically import heavy interactions such as lightbox or archive trail if beneficial.

---

# 65. Image Budget

On initial page load:

- load only media required for the viewport
- avoid preloading galleries
- use responsive sizes
- use thumbnails for archive previews

A page containing 100 images does not mean 100 originals should start downloading immediately.

---

# 66. Dependency Discipline

Before adding a dependency, ask:

1. Is this needed now?
2. Can the existing stack do it simply?
3. Does it increase bundle size or maintenance?
4. Is it maintained?
5. Does it duplicate another dependency?

Do not add libraries for trivial UI effects.

---

# 67. State Management

A public NGO site probably does not need Redux.

Prefer:

- server state through rendering
- local component state
- URL state for filters/search
- context only for truly shared client concerns

---

# 68. Security

Rules:

- secrets in environment variables
- no service-role keys client-side
- validate form inputs
- sanitize user-supplied content if introduced
- keep dependencies updated deliberately
- no arbitrary raw HTML in Markdown by default
- use safe outbound-link attributes where needed

---

# 69. Environment Variables

Provide `.env.example` only when actual integrations require configuration.

Potential future variables:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_MEDIA_BASE_URL=
CONTACT_EMAIL_TO=
# provider-specific values only when selected
```

Do not add fake credentials.

---

# 70. Error Handling

Errors should fail clearly in development and degrade gracefully in production.

Examples:

- invalid Markdown front matter → descriptive build/dev error
- missing optional image → controlled fallback, not broken layout
- missing required cover → fail content validation
- donation URL absent → do not render active donation workflow

---

# 71. Missing Data Behavior

If a field is unknown:

- omit the field
- adjust the composition
- use approved generic organizational copy if available

Do not render:

- `TBD`
- `Lorem ipsum`
- fake names
- fake statistics
- fake addresses

in a production-ready feature.

---

# 72. Testing Strategy

Use a combination of:

- type checking
- linting
- unit tests for pure content utilities where valuable
- integration tests for Markdown loading/schema validation
- browser tests for UI and navigation
- accessibility checks

Do not write large test suites for trivial presentational details before the underlying feature stabilizes.

---

# 73. Content Utility Tests

High-value test candidates:

- draft posts excluded in production
- posts sort correctly
- duplicate slugs fail
- invalid dates fail
- required cover alt text fails when missing
- related-post logic excludes current article
- Markdown headings produce stable TOC entries

---

# 74. Browser Testing

Use Playwright after meaningful UI work.

Check:

- desktop
- tablet where relevant
- small mobile
- large mobile
- keyboard navigation
- menu
- blog card links
- blog article rendering
- gallery/lightbox if present
- filters/search if present
- forms if present
- reduced motion where feasible
- console errors

---

# 75. Responsive Testing

At minimum inspect:

- 360px mobile
- 390/430px mobile
- tablet portrait
- 1280px laptop
- 1440px desktop
- large desktop

The site must be recomposed for mobile, not simply shrunk.

---

# 76. Mobile First-Class Rule

On mobile:

- prioritize text readability
- keep CTAs obvious
- reduce decorative movement
- simplify image trails to static media
- avoid fragile pinned scroll sequences
- ensure galleries remain usable
- keep article width natural
- prevent horizontal overflow

---

# 77. Console Quality

Before completion:

- no React key warnings
- no hydration warnings
- no invalid DOM nesting
- no image sizing warnings that indicate real layout issues
- no GSAP cleanup warnings
- no broken asset requests

---

# 78. Code Quality

Prefer:

- small focused components
- descriptive names
- clear data flow
- domain types
- simple APIs

Avoid:

- giant page files
- boolean-prop explosions
- duplicate data
- duplicate animation code
- arbitrary constants
- hidden side effects

---

# 79. Naming

Use names that reflect SSH domain concepts.

Good:

- `getPublishedPosts`
- `getPostBySlug`
- `ProgramChapter`
- `ImpactMetric`
- `ArchiveImageTrail`

Avoid generic names with no meaning.

---

# 80. Comments

Comments should explain why something exists, not narrate obvious code.

Good:

```ts
// Limit active trail images to prevent pointer interaction from growing the DOM indefinitely.
```

Avoid:

```ts
// Set opacity to zero.
```

---

# 81. Dead Code

Delete unused components, stale experiments, unused imports, and abandoned animation variants.

Do not leave “maybe later” code in production.

Git is the history.

---

# 82. Incremental Implementation — Mandatory

Build one feature of one page at a time.

Do not attempt to generate the entire SSH website in one implementation pass.

Valid examples:

- Home → Navbar
- Home → Hero
- Home → Work Pillars
- Home → Featured Stories
- Blog → Story Card
- Blog → Index Grid
- Blog Post → Article Header
- Blog Post → Markdown Renderer
- Gallery → Lightbox
- About → History Timeline

Invalid examples:

- “Build the whole homepage”
- “Finish the entire website”
- “Implement all pages”

---

# 83. Feature Loop

For each feature:

1. read relevant docs
2. read `DATA.md` if content is involved
3. inspect current code
4. define exact scope
5. implement semantic structure
6. establish responsive layout
7. add real/approved content for that feature
8. add motion if needed
9. run checks
10. open in browser
11. inspect desktop
12. inspect mobile
13. inspect keyboard/accessibility
14. inspect console
15. fix issues
16. stop

Do not automatically continue to the next section.

---

# 84. No Placeholder Sprint

Do not build empty shells for all future pages.

Do not create fifteen placeholder cards to simulate the future archive.

Do not invent fake blog posts.

Do not invent fake testimonials.

Do not invent impact numbers.

Use the actual content available for the current feature.

---

# 85. Foundation Exception

A small amount of foundation work is allowed when the current feature genuinely depends on it.

Examples:

- token definitions for the first styled section
- `Button` primitive used by the first hero
- Markdown loader needed by the first blog feature
- media type needed by the first gallery

Do not turn “foundation” into a multi-day design-system build before production work starts.

---

# 86. Data Validation During Development

When a feature relies on SSH facts:

- compare copy with `DATA.md`
- distinguish confirmed information from historical/public-reference information
- do not silently promote uncertain fields

If required content is missing, surface a clear implementation note to the user rather than guessing.

---

# 87. Content Provenance

There are two primary content sources:

1. `DATA.md` — organization-level factual source of truth
2. `/content/blog/*.md` — story/event-specific editorial content

If a blog post contains a new fact that is important globally, do not automatically rewrite `DATA.md` in code.

The user should intentionally approve global organization data changes.

---

# 88. Blog Content Should Not Become App Config

Do not import every article manually into a TypeScript array.

Load content by filesystem metadata.

Do not duplicate title/date/cover in both Markdown and TypeScript.

Markdown front matter is the canonical story metadata.

---

# 89. CMS Readiness

The initial site should work beautifully without a CMS.

Keep the content layer clean enough that a future CMS can replace the filesystem loader without redesigning page components.

This means:

- typed metadata
- presentation separated from parsing
- no assumptions about hard-coded array indexes

Do not implement a CMS until requested.

---

# 90. Future Media Migration

If the archive outgrows the repository:

1. keep component-level `MediaAsset` shape stable
2. replace path resolution/provider layer
3. migrate images gradually
4. preserve public URLs where practical

Do not rewrite every page component for a storage migration.

---

# 91. Internationalization Readiness

SSH content may include English and Urdu, especially youth/community material.

Initial site may remain English-first unless the user requests bilingual routing.

Technical rules:

- use UTF-8 everywhere
- avoid assumptions that text is ASCII
- design components that can tolerate Urdu strings
- do not add a full i18n framework before it is requested

If a bilingual site is later required, implement it deliberately rather than mixing languages inconsistently in components.

---

# 92. Dates

Store machine-readable dates as ISO strings:

`YYYY-MM-DD`

Render dates according to editorial context.

Historical event dates must remain unambiguous.

Do not convert a year-only fact into `January 1` just to satisfy a data type.

Allow year-only timeline items where needed.

---

# 93. Locations

Use locations exactly as supplied/approved.

Do not geocode or infer precise addresses unless the user asks and provides enough information.

A story can show:

`Youhanabad, Lahore`

without pretending the project knows a street address.

---

# 94. Leadership Data

Leadership data must distinguish current from historical roles.

Suggested type:

```ts
type LeadershipPerson = {
  name: string;
  role: string;
  status: "current-confirmed" | "historical" | "verify";
  bio?: string;
  image?: MediaAsset;
};
```

Only `current-confirmed` should be shown as a current leadership title.

---

# 95. Impact Data

Suggested model:

```ts
type ImpactFact = {
  value: string;
  label: string;
  qualifier?: string;
  date?: string;
  status: "confirmed" | "historical" | "verify";
  sourceNote?: string;
};
```

A historical ordinal such as `147th medical camp` should include date context so it is not misunderstood as today’s total.

---

# 96. External Links

External links should:

- be clearly recognizable
- use safe `rel` attributes where appropriate
- avoid opening everything in new tabs by default

Social and fundraising URLs must be verified before publishing.

---

# 97. Privacy

Do not expose personal information from the source archive merely because it exists.

Public content should be intentionally selected.

Do not publish:

- private phone numbers
- patient records
- medical data
- unapproved personal contact details
- internal files

---

# 98. Accessibility for Long-Form Content

Blog articles must support:

- clear heading hierarchy
- visible links
- accessible quotations
- readable line height
- keyboard-safe TOC
- image captions
- sufficient contrast
- no motion that makes reading harder

---

# 99. Print Behavior

Blog articles and historical pages should remain reasonably printable.

Print styles may:

- remove navigation
- remove interactive controls
- show URLs only where useful
- preserve article text and captions

Do not prioritize print before core browser quality, but avoid making it impossible.

---

# 100. Professional Quality Gate

A feature is not complete merely because it compiles.

It must be:

- visually consistent with SSH
- factually supported
- responsive
- accessible
- performant
- free of console errors
- using real approved content where available
- browser tested
- integrated with existing primitives

For blog/media features, also confirm:

- Markdown parses correctly
- images do not shift layout
- metadata is valid
- draft behavior works
- article typography is readable

---

# Final Engineering Rule

The SSH website must be able to grow from a small launch into a deep, image-rich archive of years of humanitarian work without becoming fragile, slow, or difficult to edit.

Build the simplest architecture that supports the current feature while preserving these long-term truths:

- content lives outside presentation
- organization facts are never invented
- blog posts are easy to add as `.md`
- images are treated as first-class content
- heavy media is loaded responsibly
- motion is optional enhancement
- accessibility and performance are non-negotiable
- implementation happens incrementally
