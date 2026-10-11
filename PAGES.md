# PAGES.md

# Save and Serve Humanity — Site Architecture

> Every page must have a clear purpose.
>
> No filler pages.
>
> Every route should help visitors understand SSH, explore real work, read real stories, or take an appropriate next step.
>
> Page copy must use `DATA.md` and approved Markdown content. Do not invent missing organization information to fill a section.

---

# Sitemap

Core launch architecture:

```text
/
/about
/our-work
/our-work/health
/our-work/education-youth
/our-work/community-welfare
/impact
/blog
/blog/[slug]
/gallery
/get-involved
/donate
/contact
/privacy
/404
```

Optional future routes only when content requires them:

```text
/events
/events/[slug]
/resources
/partners
/annual-reports
/volunteer
/press
```

Do not build optional pages before real content exists.

---

# Home

## Purpose

The homepage should:

- establish who SSH is
- create trust quickly
- communicate a real history of service
- show the main areas of work
- demonstrate evidence through known milestones and real media
- lead visitors into stories
- offer appropriate ways to get involved

Donation should be available but should not dominate before trust/context is established.

---

## Home — Recommended Section Order

### 1. Navbar

Contents:

- SSH logo
- About
- Our Work
- Impact
- Blog
- Gallery
- Get Involved
- Contact
- Donate action when configured

---

### 2. Hero

Goal:

Make the organization immediately understandable and visually memorable.

Contents:

- concise identity line
- strong editorial headline
- supporting paragraph grounded in `DATA.md`
- primary CTA: `Explore Our Work`
- secondary CTA: `Read Our Story`
- SSH logo
- real SSH photography when available

Possible content direction:

`Compassion becomes meaningful when it moves.`

Do not finalize homepage headline as official copy until the user approves implementation copy.

Avoid a generic `Donate Now` charity hero as the entire concept.

---

### 3. Identity / Introduction

Goal:

Explain SSH in plain language.

Use the known pillars:

- Health
- Education & Youth
- Community Welfare

Keep copy concise.

This is not a mission/vision section unless official mission and vision are supplied.

---

### 4. Legacy / History Teaser

Goal:

Communicate that SSH has a substantial history and archive.

Possible visual approaches:

- timeline excerpt
- archive film strip
- dated image sequence
- large year/milestone with contextual text

Use only dates permitted by `DATA.md`.

If `2005` remains marked for verification, phrase conservatively or wait for confirmation before making it a hero metric.

CTA:

`Read Our Story`

---

### 5. Our Work — Three Pillars

Pillars:

1. Health
2. Education & Youth
3. Community Welfare

Presentation:

- large image-led chapters
- no generic equal-width icon grid as the main treatment

Each chapter should link to its route.

---

### 6. Health Legacy / Medical Camp Milestone

Goal:

Show one of the strongest documented bodies of SSH work.

Potential known historical evidence from `DATA.md` includes records of numbered medical camps such as the 132nd, 133rd, and 147th.

Important:

Frame them as historical records with date/context.

Do not claim a current total without updated data.

Possible visual:

- oversized ordinal number
- date/location context
- archival photos
- `Explore Health Work` CTA

---

### 7. Featured Story

Goal:

Move from organizational description into human editorial storytelling.

Source:

Latest/selected published Markdown post.

Use:

- cover image
- title
- category/date
- short excerpt

Do not hard-code the story inside the page component.

---

### 8. Youth Highlight

Use the 2025 youth seminar only as a historical event and only with facts in `DATA.md`.

Known event title:

`بااختیار نوجوان، باوقار قوم۔`

Known slogan:

`From Prayer to Power, This is YOUR Hour.`

Use real seminar imagery if supplied.

CTA can link to a blog story/gallery when one exists.

---

### 9. Archive / Image Moment

Goal:

Visually communicate the depth of SSH’s activity archive.

Potential signature interaction:

- desktop pointer image trail
- horizontal archive strip
- mixed editorial image wall

All images must be approved public images.

CTA:

`View the Gallery`

---

### 10. Faith and Service

Goal:

Express the organization’s faith-inspired character with restraint.

Use:

- short approved statement
- Scripture callout when appropriate
- real service imagery

Do not turn this into a decorative church section detached from humanitarian work.

---

### 11. Get Involved

Potential actions:

- Volunteer
- Partner
- Donate
- Contact SSH

Only expose workflows that actually exist.

Do not create fake volunteer application or donation infrastructure.

---

### 12. Latest Stories

Source:

Latest published Markdown posts.

Show a small editorial selection.

CTA:

`Explore All Stories`

---

### 13. Final CTA

Recommended direction:

`Serve with us.`

Possible actions:

- Get Involved
- Contact SSH

Donation can be included if configured.

---

### 14. Footer

Use verified organization/contact/social data only.

---

# About

## Purpose

Build trust through the real story, history, values, and leadership of SSH.

Do not fill missing official material with generic NGO claims.

---

## About Sections

### 1. Page Hero

- title
- concise introduction
- archival image

### 2. Organization Story

Use the factual history currently known.

Where the exact founding story is still missing, avoid inventing a founder narrative.

### 3. History Timeline

Use verified/approved milestones.

Potential historical material currently known in `DATA.md`:

- public history framing around 2005–2025
- SMAC programme opening in 2016
- numbered medical camp records
- 2025 youth seminar

Only use items approved for public publication.

### 4. Mission

Render only when official mission text is supplied/approved.

If unavailable, omit the section rather than inventing it.

### 5. Vision

Same rule as Mission.

### 6. Faith and Service Philosophy

Can communicate known faith-inspired orientation without inventing a formal values statement.

### 7. Leadership / Board

Render current people only when roles are confirmed.

Do not invent board names.

### 8. Archive / Legacy Media

Use real historical imagery.

### 9. CTA

`Explore Our Work`

or

`Read Our Stories`

---

# Our Work

## Purpose

Provide a clear overview of what SSH actually does.

Main pillars:

- Health
- Education & Youth
- Community Welfare

---

## Our Work Sections

### Hero

Explain the organization’s practical service model.

### Pillar Chapters

Each pillar gets:

- title
- factual description
- imagery
- known examples
- related stories
- route link

### Cross-Pillar Stories

Show recent blog posts across categories.

### Get Involved CTA

Provide one clear next step.

---

# Health

Route:

`/our-work/health`

## Purpose

Present SSH’s strongest currently documented body of work: healthcare outreach and related health initiatives.

---

## Health Sections

### 1. Hero

Focus on practical care and access.

### 2. Overview

Known forms of work include:

- free medical camps
- basic screening in recorded camps
- women-focused camp activity
- eye-care program
- free dispensary initiative

Use only the level of certainty in `DATA.md`.

### 3. Medical Camp History

Use a timeline or selected milestones.

Known historical records include:

- 132nd free medical camp at Shalom Medical Centre
- 133rd free medical camp among brick-kiln communities in District Kasur
- 147th women-only free medical camp at Shalom Maternity Home on 22 August 2022

Do not state the current total number of camps unless updated data is supplied.

### 4. Women’s Health

Use the 147th camp as historical evidence when appropriate.

Do not make claims about an ongoing women’s-health program beyond supplied data.

### 5. Eye Care

Use known historical program information if approved.

### 6. Free Dispensary

Present as a known initiative/collaboration when approved.

### 7. Health Stories

Filter published Markdown posts by relevant category/tags.

### 8. CTA

`Read Health Stories`

or configured support action.

---

# Education & Youth

Route:

`/our-work/education-youth`

## Purpose

Present youth development, seminars, educational/awareness initiatives, and empowerment work.

---

## Sections

### 1. Hero

Use youth-focused real imagery.

### 2. Overview

Use known broad work categories from `DATA.md`.

Do not invent scholarship counts, training programs, or school projects not supplied.

### 3. Youth Seminar 2025 Feature

Historical event:

`بااختیار نوجوان، باوقار قوم۔`

Slogan:

`From Prayer to Power, This is YOUR Hour.`

Date:

6 August 2025

Venue/location details should match `DATA.md`.

### 4. Seminar / Awareness Archive

Use related posts when supplied.

### 5. Education & Youth Stories

Dynamic from Markdown categories/tags.

### 6. CTA

`Explore Youth Stories`

---

# Community Welfare

Route:

`/our-work/community-welfare`

## Purpose

Present community outreach and service work beyond health/youth.

Known broad activity types include:

- community support
- walks
- seminars
- awareness activities
- church-related/building projects
- environmental/community participation references

The exact projects should come from new approved content rather than generic filler.

---

## Sections

### 1. Hero

### 2. Overview

### 3. Selected Activities

Only real documented items.

### 4. Community Stories

Markdown content.

### 5. Faith and Practical Service

Keep concise and evidence-led.

### 6. CTA

`Read Community Stories`

---

# Impact

## Purpose

Bring together high-confidence evidence of SSH’s work without manufacturing a KPI dashboard.

---

## Sections

### 1. Hero

Theme:

Evidence, history, and stories.

### 2. Verified/Historical Milestones

Use dated known facts.

### 3. Medical Camp Timeline

Use selected historical ordinals and locations.

### 4. Places / Communities Reached

Only list locations supported by actual content.

Known examples include:

- Youhanabad, Lahore
- District Kasur

Do not imply these are the complete footprint.

### 5. Stories Behind the Numbers

Pair milestones with relevant posts/images.

### 6. Archive CTA

`Explore the Blog`

or

`View the Gallery`

---

# Blog

Route:

`/blog`

## Purpose

Serve as SSH’s living editorial archive.

The blog is central to the website.

It should support years of stories, activities, events, and images.

---

## Blog Features

Required:

- featured article
- newest stories
- categories
- date
- reading time
- cover image
- pagination
- responsive cards

Strongly recommended:

- search
- year filter once enough posts exist
- category filter

Optional later:

- tag pages
- RSS
- author pages

Do not build empty features before content volume requires them.

---

## Blog Data Source

All posts come from:

`/content/blog/*.md`

Do not maintain a separate manual TypeScript list of posts.

---

## Blog Landing Layout

### 1. Blog Hero

Editorial introduction.

### 2. Featured Story

One deliberately selected article.

### 3. Filters/Search

### 4. Story Grid

### 5. Pagination

### 6. Archive by Year

Only after enough years/posts exist.

### 7. Final CTA

`Get Involved`

or a contextually relevant action.

---

# Blog Post

Route:

`/blog/[slug]`

## Purpose

Give individual SSH activities enough space to become real stories rather than social-media captions.

---

## Blog Post Structure

### 1. Breadcrumbs

### 2. Article Header

- category
- title
- description/dek
- date
- location when supplied
- author when supplied

### 3. Cover Image

Large, optimized, caption-ready.

### 4. Article Body

Markdown-rendered.

### 5. Table of Contents

Only if article length/headings justify it.

### 6. Inline Media

Support:

- standard image
- wide image
- image pair
- gallery from front matter

### 7. Pull Quote

Use real quote or article prose.

### 8. Scripture Callout

Use contextually relevant supplied/approved Scripture metadata.

### 9. Share Actions

Lightweight.

### 10. Related Stories

Metadata-driven.

### 11. Final CTA

Contextual to article category.

Examples:

- Explore Health Work
- Read More Youth Stories
- Get Involved

---

# Gallery

Route:

`/gallery`

## Purpose

Turn SSH’s large image history into a deliberate public archive.

---

## Initial Gallery Strategy

Do not build a separate complex content management system immediately.

Initial gallery can use curated media references from:

- published blog posts
- selected site/archive data

When the archive becomes large enough, introduce a dedicated gallery metadata layer.

---

## Gallery Sections

### 1. Hero

### 2. Featured Albums/Stories

### 3. Image Grid

### 4. Category/Year Filters

Only when useful.

### 5. Lightbox

Required for full gallery experience.

### 6. Archive Image Trail

Optional signature desktop interaction.

### 7. Story Link

Images should lead back to context when a related story exists.

---

# Get Involved

Route:

`/get-involved`

## Purpose

Explain practical ways visitors can support or participate.

---

## Possible Sections

### Hero

### Volunteer

Only include real process/details once supplied.

### Partner

Use for organizations/churches/professionals who may collaborate, if SSH confirms this workflow.

### Support a Project

Can link to Donate once real campaign details exist.

### Share / Follow

Social links only when verified.

### Contact CTA

Always provide a route to ask questions.

Do not create a fake volunteer application workflow.

---

# Donate

Route:

`/donate`

## Purpose

Provide a clear, transparent support pathway once donation details are confirmed.

---

## Critical Rule

Do not invent donation methods.

Do not launch fake payment forms.

Do not display fake campaign progress.

---

## Future Donate Page Sections

### Hero

### Why Support SSH

Use approved factual copy.

### Current Campaign

Only if supplied.

### Donation Method

Could use:

- GoFundMe link/embed
- another approved fundraising provider
- direct bank/payment instructions supplied by SSH

### Transparency / Use of Support

Only include real information.

### FAQ

Only real donation questions.

### Contact

For donation questions.

---

# Contact

Route:

`/contact`

## Purpose

Make it easy to contact SSH without publishing unverified details.

---

## Sections

### Hero

### Contact Form

### Verified Email/Phone

Only once supplied/confirmed.

### Location

Use only verified address/location.

### Social Links

Use only verified accounts.

### FAQ

Optional.

---

# Privacy

Route:

`/privacy`

A real privacy policy should reflect actual site behavior.

Do not generate claims such as “we never store personal data” if forms/analytics do store data.

At minimum document:

- contact form data
- analytics if used
- cookies if used
- third-party embeds if used
- donation providers if used

Finalize when integrations are known.

---

# 404

Goal:

Be helpful and on-brand.

Contents:

- clear message
- Return Home CTA
- link to Blog or Our Work
- restrained logo/brand visual

No cartoon lost-page illustration needed.

---

# Navigation Structure

Recommended primary navigation:

- About
- Our Work
- Impact
- Blog
- Gallery
- Get Involved
- Contact

Primary action:

- Donate

If Donate is not configured, use:

- Get Involved

Do not show a dead donation button.

---

# Footer Structure

Recommended:

- SSH logo
- short approved organization description
- About
- Our Work
- Health
- Education & Youth
- Community Welfare
- Impact
- Blog
- Gallery
- Get Involved
- Contact
- Donate if configured
- verified social links
- verified contact details
- Privacy
- copyright

Keep hierarchy clear.

---

# Blog Category Mapping

Initial possible categories:

- Health
- Education
- Youth
- Community Welfare
- Events
- Awareness
- Faith & Service

The taxonomy should evolve from actual content.

Do not build empty category pages for categories with no posts.

---

# Content Cross-Linking

Every major work page should surface relevant blog posts.

Every blog post should link back to a relevant program/category when possible.

This creates an integrated site rather than isolated marketing pages and an unrelated blog.

---

# Image Cross-Linking

Gallery images should point to story context when available.

Blog stories can link to larger galleries when available.

Do not duplicate dozens of images across routes in ways that increase load unnecessarily.

---

# SEO Structure

Every public page requires:

- meta title
- meta description
- canonical URL
- Open Graph metadata
- social image when practical

Deep routes:

- breadcrumbs

Blog posts:

- Article/BlogPosting structured data

Organization site:

- Organization/NGO structured data using only verified details

Events:

- Event structured data only where applicable and truthful

---

# Performance Requirements

Target:

- Lighthouse Performance 95+
- Accessibility 95+
- Best Practices 100 where realistic
- SEO 100 where realistic
- Core Web Vitals pass

Image-heavy pages must use progressive loading and optimized sizes.

Do not sacrifice usability to chase a score, but treat regressions seriously.

---

# Future Content Possibilities

Only build these when SSH supplies material and there is a real need:

- Annual reports
- Board/governance page
- Partner directory
- Event calendar
- Volunteer application
- Donation campaign archive
- Publications/resources
- bilingual English/Urdu experience
- press/media page
- dedicated photo albums

---

# Final Page Rule

Every page should answer at least one meaningful visitor question:

- Who is SSH?
- What does SSH do?
- What has SSH actually done?
- What is the story behind this activity?
- How can I see more?
- How can I get involved?
- How can I contact/support the organization?

If a section does not help answer one of those questions, remove it.
