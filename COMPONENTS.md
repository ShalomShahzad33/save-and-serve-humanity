# COMPONENTS.md

# Save and Serve Humanity — Component Library

> Every component must be reusable, accessible, responsive, motion-aware, and consistent with `DESIGN.md`, `MOTION.md`, `COPYWRITING.md`, and `DATA.md`.
>
> Components are primitives and domain modules. Reuse or extend existing components before creating another version.
>
> A bespoke page composition is encouraged; duplicate component implementations are not.

---

# Component Principles

Every component should be:

- dignified
- content-first
- lightweight
- reusable
- accessible
- responsive
- image-aware
- motion-aware
- easy to populate from approved SSH data
- safe for missing optional content

Never create visual complexity merely to show off the frontend.

Never hard-code unverified organization facts inside a presentational component.

---

# Naming Principles

Prefer semantic names based on what the component represents.

Good:

- `ProgramCard`
- `StoryCard`
- `ImpactMetric`
- `ArchiveStrip`
- `ScriptureCallout`
- `LeadershipCard`

Avoid:

- `BlueCard`
- `FancySection`
- `NewHero`
- `Card2`
- `SpecialBlock`
- `FinalComponent`

---

# Section Container

Maximum outer width:

`1600px`

Standard content width:

`1280px`

Article reading width:

`760px`

Compact content width:

`620px`

Desktop padding:

`64–96px`

Tablet:

`40–56px`

Mobile:

`20–24px`

Vertical spacing:

- desktop: 120–180px
- tablet: 96–140px
- mobile: 72–104px

Component:

`Container`

Variants:

- `wide`
- `standard`
- `reading`
- `compact`
- `fullBleed`

---

# Grid System

Desktop:

12 columns

Tablet:

8 columns

Mobile:

4 columns

Use grid utilities to enable editorial compositions.

Do not force every domain component into equal columns.

---

# Typography Components

Recommended primitives:

- `DisplayHeading`
- `PageTitle`
- `SectionTitle`
- `StoryTitle`
- `Lead`
- `BodyText`
- `Caption`
- `Eyebrow`
- `MetricText`
- `PullQuoteText`

Typography components may control size, weight, and max width, but must not hide semantic heading levels.

Example:

```tsx
<SectionTitle as="h2">Healthcare that reaches people</SectionTitle>
```

---

# Navbar

Component:

`Navbar`

Contains:

- SSH logo
- primary navigation
- mobile menu control
- one clear action

Suggested primary links:

- About
- Our Work
- Impact
- Blog
- Gallery
- Get Involved
- Contact

Primary action:

`Donate`

Only show donation as an active conversion route when donation details/integration are ready.

Behavior:

- transparent or minimal over hero when contrast permits
- transitions to a stable surface after scroll
- compact but never tiny
- keyboard accessible
- menu state announced correctly
- mobile menu restores focus on close

---

# Mobile Menu

Component:

`MobileMenu`

Preferred presentation:

- full-screen or large sheet
- large vertical navigation
- visible organization identity
- action area at bottom

Contains optional:

- social links if verified
- contact shortcut if verified

Do not bury the close button.

---

# Logo Component

Component:

`SSHLogo`

Props may include:

```ts
type SSHLogoProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};
```

Use the supplied asset.

Do not recreate the artwork using CSS.

---

# Buttons

Base component:

`Button`

Variants:

- `primary`
- `secondary`
- `ghost`
- `inverse`
- `text`

Sizes:

- `sm`
- `md`
- `lg`

States:

- default
- hover
- focus-visible
- active
- disabled
- loading where needed

All buttons must have a clear accessible name.

---

# Primary Button

Visual:

- SSH brand blue
- white text
- no unrelated gradient
- subtle lift on hover
- optional arrow shift

Use for one dominant action per section.

---

# Secondary Button

Visual:

- transparent or white surface
- SSH blue text
- subtle border

Use for secondary navigation actions.

---

# Icon Button

Component:

`IconButton`

Use for:

- menu
- search
- lightbox navigation
- share
- carousel controls

Minimum interactive target:

`44x44px`

Icon-only buttons require `aria-label`.

---

# Hero Component

Component:

`HomeHero`

Contains:

- eyebrow or organization descriptor
- main statement
- supporting copy
- primary CTA
- secondary CTA
- SSH logo treatment
- real SSH photography or approved visual media

Optional:

- short verified legacy marker
- subtle archive image sequence

The hero should accept content props rather than contain hard-coded facts.

---

# Page Hero

Component:

`PageHero`

Variants:

- `editorial`
- `image`
- `blue`
- `compact`

Use across About, Our Work, Impact, Blog, Gallery, Get Involved, and Contact while allowing page-specific composition.

Do not make every route use exactly the same hero layout.

---

# Program Card

Component:

`ProgramCard`

Represents a major SSH work area or program.

Typical fields:

```ts
type ProgramCardData = {
  title: string;
  description: string;
  href: string;
  image?: MediaAsset;
  eyebrow?: string;
};
```

Primary use:

- Health
- Education & Youth
- Community Welfare

Prefer image-led treatment over generic icons.

---

# Program Chapter

Component:

`ProgramChapter`

For larger home/Our Work storytelling.

Contains:

- large image
- title
- narrative copy
- optional verified stat
- related-story link

Variants:

- image left
- image right
- sticky image
- full bleed

---

# Impact Metric

Component:

`ImpactMetric`

Contains:

- verified number or milestone
- label
- date/year qualifier when needed
- optional context

Never animate or render a number that is not supported by `DATA.md` or approved content.

Example safe historical pattern:

`147th` + `Free Medical Camp` + `recorded in August 2022`

This avoids implying it is the current lifetime total.

---

# Impact Metric Group

Component:

`ImpactMetricGroup`

Use for a small set of high-confidence facts.

Do not create a startup-style dashboard full of speculative KPIs.

---

# Story Card

Component:

`StoryCard`

Used for blog posts and activity stories.

Contains:

- cover image
- category
- title
- summary
- date
- optional location
- reading time
- link

Variants:

- `featured`
- `standard`
- `compact`
- `horizontal`
- `archive`

Hover:

- gentle image scale
- title shift
- clear focus state

No large tilt on portraits or sensitive imagery.

---

# Featured Story

Component:

`FeaturedStory`

A large editorial block for the homepage/blog landing page.

Supports:

- full-width image
- split composition
- blue background variant
- excerpt
- category/date

---

# Blog Grid

Component:

`StoryGrid`

Should support:

- mixed card sizes
- responsive composition
- pagination
- category filtering
- optional search results

Do not require all cards to be identical height.

---

# Blog Filters

Components:

- `StoryCategoryFilter`
- `StoryYearFilter`
- `StorySearch`

Requirements:

- URL state for sharable filters where practical
- keyboard accessible
- usable without complex JavaScript
- filter labels remain human-readable

---

# Article Shell

Component:

`ArticleShell`

Provides:

- reading width
- heading rhythm
- rich-content spacing
- article metadata
- reading progress hook
- TOC anchor compatibility

It should not decide article content.

---

# Article Header

Component:

`ArticleHeader`

Contains:

- category
- title
- dek
- date
- location when supplied
- author when supplied
- cover media

Do not render blank labels for missing optional metadata.

---

# Article Table of Contents

Component:

`ArticleTOC`

Features:

- generated from h2/h3 headings
- sticky on large screens when appropriate
- collapsible on mobile
- keyboard accessible
- hides automatically for very short posts

---

# Reading Progress

Component:

`ReadingProgress`

Requirements:

- unobtrusive
- no layout shift
- reduced-motion friendly
- should not compete with navigation

---

# Rich Markdown Components

The Markdown renderer should map standard elements to controlled components.

Mappings may include:

- `h2` → `ArticleHeading`
- `h3` → `ArticleSubheading`
- `p` → styled article paragraph
- `blockquote` → `PullQuote`
- `img` → `ArticleImage`
- `a` → safe styled link
- `ul/ol` → article list
- `hr` → editorial divider

Custom syntax should be introduced only when needed.

The user intends to author normal `.md` files, so the content system should remain simple.

---

# Pull Quote

Component:

`PullQuote`

Contains:

- quote text
- optional source
- optional role

Rule:

Never invent attributed quotes.

If the Markdown contains an unattributed blockquote, render it without an invented person/source.

---

# Scripture Callout

Component:

`ScriptureCallout`

Use for contextually relevant Bible verses in SSH stories.

Suggested data:

```ts
type ScriptureData = {
  text?: string;
  reference: string;
  translation?: string;
};
```

If only a reference is provided, render the reference rather than inventing verse text.

Visual treatment should follow `DESIGN.md`.

---

# Media Asset Type

Create a reusable media model.

```ts
type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width?: number;
  height?: number;
  focalPoint?: "center" | "top" | "bottom" | "left" | "right";
};
```

Alt text is mandatory for meaningful images.

---

# Image Component

Component:

`MediaImage`

Responsibilities:

- Next.js image optimization
- responsive `sizes`
- correct aspect ratio
- lazy loading by default
- priority only for above-the-fold/LCP media
- optional caption
- object-position support
- no layout shift

Do not give every image `priority`.

---

# Article Image

Component:

`ArticleImage`

Variants:

- `reading`
- `wide`
- `fullBleed`
- `portrait`

Supports caption and credit.

---

# Image Pair

Component:

`ImagePair`

Responsive behavior:

- side-by-side on suitable desktop widths
- stacked on small screens

Each image retains its own alt text and caption.

---

# Gallery Grid

Component:

`GalleryGrid`

Requirements:

- responsive thumbnails
- progressive rendering
- no full-resolution initial load
- keyboard-accessible open action
- stable aspect ratio

Variants:

- editorial grid
- compact archive
- story gallery

---

# Lightbox

Component:

`MediaLightbox`

Requirements:

- focus trap
- ESC closes
- previous/next keyboard support
- visible close button
- touch swipe if implemented carefully
- caption and credit display
- restore focus on close
- body scroll lock without breaking layout

Do not auto-open.

---

# Archive Strip

Component:

`ArchiveStrip`

Use for:

- history
- home legacy section
- gallery highlights

Displays a horizontal sequence of real SSH images.

Can be scroll-driven on desktop but must remain usable as a normal list with reduced motion.

---

# Archive Image Trail

Component:

`ArchiveImageTrail`

This is a signature optional interaction.

Use only in a designated archive/gallery section.

Requirements:

- pointer devices only
- use real SSH images
- cap active DOM nodes
- recycle image elements where practical
- throttle pointer tracking
- transform/opacity animation only
- disabled on touch devices
- disabled for `prefers-reduced-motion`
- no interaction blocking
- no use inside article reading columns

---

# Timeline

Component:

`HistoryTimeline`

Use for verified milestones only.

Fields:

```ts
type TimelineItem = {
  date?: string;
  year?: string;
  title: string;
  description?: string;
  image?: MediaAsset;
  href?: string;
};
```

If only a year is known, do not manufacture a specific date.

---

# Event Highlight

Component:

`EventHighlight`

For notable events such as the 2025 youth seminar.

Contains:

- date
- title
- location
- short description
- imagery
- link to article/gallery if available

Historical events must be clearly presented as historical.

---

# Leadership Card

Component:

`LeadershipCard`

Contains:

- portrait if supplied
- name
- current role if verified
- short approved bio
- optional social/contact links if approved

Do not infer current titles from old material.

---

# Team / Board Grid

Component:

`LeadershipGrid`

Only render people present in approved data.

If the full board is not yet supplied, do not generate placeholder names.

---

# Location Label

Component:

`LocationLabel`

For story/event metadata.

Use plain text with a small icon.

Do not create map links unless a reliable location/address exists.

---

# Category Badge

Component:

`CategoryBadge`

Potential categories:

- Health
- Education
- Youth
- Community Welfare
- Events
- Awareness
- Faith & Service

Final taxonomy should follow actual content.

Do not create dozens of categories before content requires them.

---

# CTA Section

Component:

`CTASection`

Variants:

- `getInvolved`
- `donate`
- `readStories`
- `contact`
- `partner`

Contains one primary action and, at most, one secondary action.

Never use false urgency.

---

# Donate CTA

Component:

`DonateCTA`

Only becomes fully active when real donation details are provided.

Can support:

- external campaign link
- GoFundMe link/embed if supplied and technically appropriate
- bank/donation instructions if explicitly provided

Until then, do not invent payment details.

---

# Get Involved Card

Component:

`InvolvementOption`

Potential options:

- Volunteer
- Partner
- Support a Project
- Donate
- Share SSH Stories

Only include routes/processes that are actually supported by the site.

---

# Contact Form

Component:

`ContactForm`

Potential fields:

- name
- email
- phone optional
- subject / reason
- message

Requirements:

- client-side UX validation
- server-side validation
- anti-spam strategy when backend is added
- success/error states
- privacy note
- no exposed credentials

---

# Newsletter Form

Component:

`NewsletterForm`

Optional.

Do not add it unless SSH actually intends to collect subscribers and a backend/service exists.

---

# FAQ

Component:

`FAQSection`

Use only where real frequently asked questions exist.

Accordion requirements:

- semantic buttons
- keyboard accessible
- smooth but restrained animation
- no duplicate FAQ content across pages unless sourced from shared data

---

# Breadcrumbs

Component:

`Breadcrumbs`

Use on:

- work pillar detail pages
- blog posts
- deep routes

Support structured data generation.

Do not clutter the homepage.

---

# Share Actions

Component:

`ShareActions`

Options:

- copy link
- WhatsApp
- Facebook
- X if relevant

Avoid loading large social SDKs just for share links.

---

# Related Stories

Component:

`RelatedStories`

Selection should be data-driven by:

- category
- tags
- date relevance

Do not repeat the current article.

Do not fabricate “recommended” relationships if there is no metadata.

---

# Search Result

Component:

`StorySearchResult`

Contains:

- title
- excerpt
- category
- date
- optional thumbnail

Search should index approved public content only.

---

# Empty State

Component:

`EmptyState`

Examples:

- no blog posts in selected year
- no search results
- gallery still being populated

Language should be simple and helpful.

Never imply an error if content simply does not exist.

---

# Loading States

Use:

- stable skeletons only when necessary
- image placeholders
- button loading state for forms

Avoid long fake loading screens.

Do not delay static content just to display animation.

---

# Error States

Components:

- `InlineError`
- `PageError`
- `FormError`

Requirements:

- plain language
- retry path where useful
- no technical stack traces in production

---

# Footer

Component:

`Footer`

Contains:

- SSH logo
- approved organization description
- navigation
- work categories
- blog/gallery links
- contact details if verified
- social links if verified
- copyright
- privacy
- one clear action

Do not hard-code stale contact information across multiple components.

---

# SEO Components

Recommended utilities/components:

- `OrganizationJsonLd`
- `ArticleJsonLd`
- `BreadcrumbJsonLd`
- `EventJsonLd` when a story is genuinely an event
- `SocialMeta`

Structured data values must come from verified content.

---

# Accessibility Components

Shared primitives should include:

- `VisuallyHidden`
- `SkipLink`
- focus-visible styles
- accessible dialog/lightbox behavior

Do not rely on color or motion alone to communicate state.

---

# Component Naming Reference

Core UI:

- `Button`
- `IconButton`
- `Container`
- `SectionHeader`
- `Badge`
- `Accordion`
- `Modal`
- `VisuallyHidden`
- `SkipLink`

Layout:

- `Navbar`
- `MobileMenu`
- `Footer`
- `PageHero`
- `CTASection`

SSH domain:

- `SSHLogo`
- `ProgramCard`
- `ProgramChapter`
- `ImpactMetric`
- `ImpactMetricGroup`
- `HistoryTimeline`
- `EventHighlight`
- `LeadershipCard`
- `LeadershipGrid`
- `InvolvementOption`
- `DonateCTA`

Editorial/blog:

- `StoryCard`
- `FeaturedStory`
- `StoryGrid`
- `StoryCategoryFilter`
- `StoryYearFilter`
- `StorySearch`
- `ArticleShell`
- `ArticleHeader`
- `ArticleTOC`
- `ReadingProgress`
- `PullQuote`
- `ScriptureCallout`
- `RelatedStories`
- `ShareActions`

Media:

- `MediaImage`
- `ArticleImage`
- `ImagePair`
- `GalleryGrid`
- `MediaLightbox`
- `ArchiveStrip`
- `ArchiveImageTrail`

---

# Final Component Rule

A component is justified when it either:

- repeats meaningfully,
- encapsulates complex behavior,
- establishes a consistent content pattern,
- improves accessibility,
- or prevents factual/styling duplication.

Do not abstract away the editorial art direction of SSH pages.

Build reusable primitives, then compose pages with enough flexibility that every major section can still feel intentionally designed.
