# DESIGN.md

# Save and Serve Humanity — Design System

> This document is the visual authority for the Save and Serve Humanity (SSH) website.
>
> Every page, section, component, image treatment, animation, and interaction must follow this document.
>
> `DATA.md` is the factual authority. `COPYWRITING.md` is the voice authority. `MOTION.md` is the motion authority.
>
> When there is uncertainty, choose dignity over spectacle, clarity over decoration, real human stories over generic charity imagery, and trust over trendiness.

---

# Brand Identity

Save and Serve Humanity is a long-running Pakistani humanitarian organization whose work spans healthcare, education and youth development, and community welfare.

The visual identity should communicate:

- service
- compassion
- dignity
- trust
- faith expressed through action
- continuity and history
- practical impact
- hope
- professionalism
- accountability

The website must NOT look like:

- a generic NGO template
- a corporate CSR microsite
- a fundraising landing page built around guilt
- a church flyer converted into a website
- a SaaS product
- a web-agency portfolio
- an AI-generated charity site

The desired first impression is:

> “This organization has served real people for years, has a real history, and treats that history with dignity.”

---

# Design Philosophy

The visual system follows this balance:

- 55% editorial documentary storytelling
- 20% institutional trust and clarity
- 15% cinematic motion and interaction
- 10% faith-inspired warmth and brand symbolism

The interface should feel contemporary and premium without becoming luxurious for its own sake.

SSH exists to serve people. The design must elevate the stories without making the organization appear self-congratulatory.

Whitespace is intentional.

Photography is primary content, not decoration.

Typography should create narrative rhythm.

Motion should guide attention and make the archive feel alive.

Statistics should support the story, never replace it.

---

# Visual Personality

The website should feel:

- human
- established
- warm
- dignified
- editorial
- trustworthy
- hopeful
- grounded
- calm
- intentional
- modern
- cinematic
- faith-aware
- documentary

It should NOT feel:

- flashy
- trendy for trend’s sake
- sterile
- pity-driven
- childish
- overly religious in visual clichés
- over-designed
- excessively dark
- neon
- tech-startup-like

---

# Emotional Goal

Visitors should leave with four feelings:

1. **Trust** — SSH has a real history and real work behind it.
2. **Human connection** — the people and communities served are shown with dignity.
3. **Hope** — the visual language points toward care, restoration, empowerment, and service.
4. **Agency** — visitors understand how they can learn, support, volunteer, partner, or donate.

The website must never use distress as a visual conversion trick.

---

# Logo

The supplied SSH circular pelican logo is the canonical brand asset.

Primary source file during project setup:

`/public/brand/ssh-logo.jpg`

If a transparent PNG, SVG, or professionally redrawn vector version is later provided, prefer it for UI placement while preserving the same artwork.

Rules:

- Do not redraw the pelican from scratch.
- Do not replace the pelican with a generic dove, heart, hands, cross, or charity icon.
- Do not recolor the logo into unrelated gradients.
- Do not crop away the organization name when the full seal is required.
- Do not stretch or distort the seal.
- Keep clear space around the logo.
- On dark surfaces, use a light containing plate if the JPG’s white square background becomes visually awkward.
- Never use the raster logo as a huge blurry full-screen graphic.
- If a vector version becomes available, subtle line or emblem animation may be introduced according to `MOTION.md`.

---

# Logo-Derived Color System

The color system is derived directly from the supplied logo rather than from unrelated web trends.

## Primary Brand Blue

The dominant blue sampled from the central seal is approximately:

`#01458E`

Token:

`--ssh-blue: #01458E`

Use for:

- primary buttons
- links
- key headings
- navigation states
- dark brand sections
- data visualization accents
- focus indicators when contrast is sufficient

This is the core brand color.

---

# Blue Tonal Scale

The website may use tonal derivatives of the logo blue for hierarchy.

- `--ssh-blue-950: #071B2F`
- `--ssh-blue-900: #082A4D`
- `--ssh-blue-800: #07386F`
- `--ssh-blue-700: #01458E`
- `--ssh-blue-600: #155AA2`
- `--ssh-blue-500: #3A74B0`
- `--ssh-blue-200: #C8D9EB`
- `--ssh-blue-100: #E6EEF7`
- `--ssh-blue-50: #F3F7FB`

Only `#01458E` is a direct primary extraction; the remaining blues are controlled tonal derivatives for UI use.

Do not invent cyan, violet, or neon blue accents that are not present in the identity.

---

# Neutral Palette

Derived from the white feathers/background, dark linework, and gray chicks in the logo.

## Warm White

`#FCFBF7`

Primary page background.

Use instead of cold pure white when a warmer editorial surface is desirable.

## White

`#FFFFFF`

Use for cards, high-contrast surfaces, and the logo’s natural field.

## Ink

`#211D1D`

Primary body text and dark linework.

## Slate

`#5F6266`

Secondary text.

## Dove Gray

`#969593`

Supporting visual accent derived from the gray chicks.

## Soft Border

`rgba(1, 69, 142, 0.14)`

Use for structural separation.

---

# Warm Logo Accents

Warm tones appear in the pelican, blood drops, and nest. They are supporting accents only.

## Pelican Orange

Approximate logo extraction:

`#E87818`

Use sparingly for:

- small highlights
- story metadata accents
- active timeline markers
- subtle hover details
- warm editorial callouts

Never use it as the site’s main button color.

## Deep Service Red

Approximate logo extraction:

`#74231F`

Use extremely sparingly.

It may support:

- historical/documentary accents
- small icon details
- urgent factual notices

Do not use red for emotional manipulation.

## Nest Gold

Approximate logo extraction:

`#D8A66A`

Use for:

- Scripture callouts
- warm separators
- subtle background washes
- historical timeline details

It should feel natural and grounded, not metallic or luxurious.

---

# Color Distribution

Default light page:

- 62% warm white / white
- 22% brand blue and blue tonal surfaces
- 11% ink / neutral typography
- 5% warm logo accents

Dark sections are allowed but should be purposeful.

A page must not become an uninterrupted wall of dark navy.

Alternate light and deep-blue moments to create rhythm.

---

# Gradient Policy

SSH does not have a synthetic “tech gradient.”

Allowed gradients are tonal and logo-derived.

Examples:

```css
background: linear-gradient(135deg, #01458E 0%, #07386F 55%, #082A4D 100%);
```

or a warm editorial wash:

```css
background: linear-gradient(180deg, #FCFBF7 0%, #F3F7FB 100%);
```

Rules:

- no purple-blue gradient
- no rainbow gradient
- no neon glow gradient
- no glassmorphism rainbow borders
- no gradient-filled paragraphs
- no gradient used merely to make a section “interesting”

---

# Typography

The typography should bridge humanitarian warmth and institutional credibility.

## Display / Editorial Headlines

Preferred:

`Newsreader`

Use for:

- hero statements
- story headlines
- pull quotes
- historical milestones
- key editorial section titles

Weights:

- 500
- 600
- 700

Use italics selectively for human emphasis, not decoration.

## Interface / Body

Preferred:

`IBM Plex Sans`

Weights:

- 400
- 500
- 600
- 700 where necessary

Use for:

- body copy
- navigation
- buttons
- labels
- form fields
- metadata

## Metrics / Dates

Preferred:

`Space Grotesk`

Use only for:

- statistics
- dates in timeline displays
- numbered milestones
- compact impact figures

Do not use it as the main body font.

---

# Typography Scale

Desktop target ranges:

- Hero display: 68–112px
- Page title: 56–80px
- Section title: 42–64px
- Story title: 34–56px
- Subheading: 22–30px
- Body large: 19–22px
- Body: 16–18px
- Caption / metadata: 13–15px
- Eyebrow: 12–14px
- Metric: 48–96px depending on context

Mobile:

- Hero display: 42–58px
- Page title: 40–52px
- Section title: 32–42px
- Story title: 30–40px
- Body large: 18–20px
- Body: 16–18px

Never make body copy tiny to achieve an editorial look.

---

# Text Measure

Long-form content is important because SSH will have a proper blog.

For article prose:

- ideal measure: 62–76 characters per line
- do not stretch paragraphs across wide screens
- article text column should remain around 680–780px
- media may break out wider than the text column

Use intentional editorial breakout blocks for:

- photography
- pull quotes
- Scripture
- statistics
- timelines
- galleries

---

# Layout

The website should feel like a humanitarian journal and living archive.

Use:

- editorial asymmetry
- large documentary imagery
- generous white space
- strong vertical rhythm
- occasional full-bleed photography
- split layouts
- image-led chapters
- sticky storytelling only where content justifies it
- timelines for historical content
- mosaics for archive imagery

Avoid:

- repetitive 3-column card grids
- identical section shells
- centered text in every section
- excessive boxes around all content

---

# Container System

Recommended widths:

- maximum outer canvas: 1600px
- standard content: 1280px
- reading content: 760px
- compact copy: 620px

Desktop horizontal padding:

- 64–96px

Tablet:

- 40–56px

Mobile:

- 20–24px

Section vertical rhythm:

- desktop: 120–180px
- tablet: 96–140px
- mobile: 72–104px

Not every section needs identical spacing.

---

# Grid

Desktop:

12 columns

Tablet:

8 columns

Mobile:

4 columns

Editorial asymmetry is encouraged.

Use 5/7, 4/8, 7/5, and offset compositions when they support the content.

---

# Corners

SSH should feel softer than a corporate institution but not cartoonish.

Suggested:

- cards: 16–22px
- large media: 20–28px
- buttons: 12–16px
- floating panels: 20–28px
- small chips: 999px only when semantically appropriate

Do not make every surface pill-shaped.

---

# Shadows

Use shadows only for subtle elevation.

Prefer:

- low opacity
- wide soft blur
- slight blue tint on brand surfaces

Never use:

- heavy black shadows
- floating dashboard-style layers
- multiple stacked glows

---

# Borders

Borders should be structural.

Default:

`1px solid rgba(1, 69, 142, 0.14)`

On deep blue:

`1px solid rgba(255,255,255,0.16)`

Avoid obvious card outlines around every object.

---

# Navigation

Navigation should feel calm, useful, and established.

Desktop:

- transparent or warm-white over light hero depending on contrast
- can transition to a lightly blurred white surface after scroll
- logo seal at a readable but restrained size
- main links grouped cleanly
- one clear action such as `Donate` or `Get Involved`

Mobile:

- full-screen or large-sheet menu
- large readable links
- no tiny nested menus
- primary actions remain visible

Suggested navigation:

- About
- Our Work
- Impact
- Blog
- Gallery
- Get Involved
- Contact
- Donate

Do not overload the header with every subsection.

---

# Hero

The homepage hero is the first major trust moment.

It must establish:

- the SSH identity
- service / compassion / humanity
- Pakistan context where relevant
- the sense that this is a real organization with history
- a clear next action

Preferred composition:

- asymmetrical headline and narrative copy
- logo integrated respectfully
- strong real SSH image or carefully chosen image sequence
- brand-blue field or light editorial field
- one primary CTA and one secondary CTA

Potential primary CTA:

`Explore Our Work`

Potential secondary CTA:

`Read Our Story`

Donation may be present but should not always be the very first emotional ask.

Never use a generic centered charity hero with a dark overlay, sad stock photo, and `Donate Now` as the only message.

---

# Home History / Legacy Section

SSH has a substantial history and archive.

The site should visually communicate longevity through:

- dates
- archive images
- milestone markers
- document-like captions
- film-strip treatments
- a timeline or editorial chronology

Do not invent a founding year or milestone unless `DATA.md` permits it.

If a date is still marked `VERIFY` in `DATA.md`, either omit it or phrase the content conservatively.

---

# Our Work / Pillars

Primary pillars currently known:

- Health
- Education & Youth
- Community Welfare

Do not use three generic icon cards as the only presentation.

Prefer a stronger composition such as:

- image-led vertical chapters
- stacked panels
- editorial split sections
- sticky media with changing text
- a large interactive work index

Each pillar must point to real stories or known programs.

---

# Impact

Impact must be evidence-led.

Allowed:

- verified numbered medical camp milestones
- dated projects
- known locations
- approved statistics
- clearly sourced counts

Never fabricate:

- beneficiaries
- volunteers
- money raised
- countries reached
- percentage improvements
- partner counts
- total patients

When exact totals are unknown, tell the story without forcing a metric.

---

# Blog / Stories

The blog is a core part of the site, not an SEO afterthought.

It should feel like an editorial publication documenting SSH’s work.

Design requirements:

- strong cover photography
- clear categories
- dates and locations where available
- readable article typography
- image galleries inside posts
- pull quotes
- Scripture callouts where editorially appropriate
- related stories
- year/category browsing
- optional search

Blog cards should feel like magazine story previews rather than product cards.

---

# Blog Article Layout

Article pages should support:

- headline
- dek / summary
- date
- category
- location
- author when known
- cover image
- lead paragraph
- body prose
- headings
- inline images
- wide images
- image pairs
- galleries
- pull quotes
- Scripture blocks
- factual statistics
- timeline snippets
- source/credits area when necessary
- related posts
- share actions
- final contextual CTA

The article body should remain calm and readable even when the surrounding site is motion-rich.

---

# Photography

Real SSH photography is the visual priority.

The user plans to add a large image archive, so the entire design must be able to scale from a few images to hundreds of stories and galleries.

Use:

- real medical camp photographs
- youth seminar photography
- community event photography
- leadership and volunteer photographs when approved
- archival images
- detail shots
- environment/context photography
- candid action where consent and dignity are respected

Avoid:

- generic stock doctors
- staged corporate volunteers
- fake smiling-beneficiary stock images
- AI-generated humanitarian scenes
- poverty-porn framing
- over-editing skin tones
- dramatic desaturation used to manufacture sadness

---

# Ethical Image Treatment

Photography involving patients, children, vulnerable people, or underserved communities requires extra care.

Design rules:

- never use humiliating or demeaning crops
- never turn suffering into a decorative backdrop
- never obscure important context with heavy overlays
- do not publish names unless content explicitly allows it
- alt text should describe the image factually and respectfully
- captions should add context rather than emotional manipulation
- medical imagery should not be sensationalized

If consent or publication suitability is uncertain, flag the image rather than automatically using it.

---

# Image Presentation

Preferred image modes:

1. Full-bleed chapter image
2. Editorial 4:5 portrait
3. Wide 16:9 story image
4. Documentary 3:2 landscape
5. Image pair
6. Masonry-style archive block used sparingly
7. Horizontal film strip
8. Lightbox gallery

Avoid uncontrolled random masonry on every page.

Keep aspect ratios intentional to prevent layout shift.

---

# Gallery

The gallery should feel like an archive, not a social-media feed.

Use:

- year grouping
- event grouping
- category filters
- large visual thumbnails
- keyboard-accessible lightbox
- captions where available
- progressive loading

Never load hundreds of full-resolution images on initial page load.

---

# Scripture Treatment

Faith is part of SSH’s identity, but Scripture should be treated with editorial restraint.

A Scripture block can use:

- a fine Nest Gold rule
- serif typography
- generous whitespace
- verse reference
- small translation label if supplied

Do not decorate Scripture with clip-art crosses, rays, doves, or ornamental church graphics.

---

# Quote Treatment

Human quotes should feel documentary.

Use:

- large editorial type
- source name and role only when verified
- optional portrait if approved
- minimal quotation mark treatment

Never invent beneficiary or volunteer quotations.

---

# Statistics

Statistics should be large enough to notice but not styled like a startup KPI dashboard.

Use:

- one or two high-confidence metrics per section
- supporting context
- year/date qualifier when necessary

For example, a numbered camp milestone can be shown as a historical marker rather than pretending it is a current total.

---

# Cards

Cards should be used only where they help scanning.

Default:

- generous image area
- little chrome
- 16–22px radius
- subtle brand border
- clear title
- category/date metadata

Hover:

- gentle image scale
- slight title movement
- subtle border / blue shift

No dramatic tilt on sensitive human photography.

---

# Buttons

## Primary

- brand blue background
- white text
- strong contrast
- medium radius
- slight upward motion on hover
- optional arrow movement

## Secondary

- transparent or white background
- brand-blue text
- 1px brand border

## Text Link

- clear underline or animated rule
- never rely only on color

Button labels should be specific:

- Explore Our Work
- Read Our Story
- Read the Full Story
- View Gallery
- Get Involved
- Contact SSH
- Donate

---

# Icons

Preferred:

- simple monoline icons
- consistent stroke
- brand blue / ink
- familiar symbols

Do not use colorful icon packs.

Do not use emoji as interface icons.

Do not use a cross as the universal icon for every health or faith section.

---

# Forms

Forms should feel welcoming and straightforward.

Use:

- large labels
- visible focus states
- helpful validation
- clear privacy context
- minimal fields

Do not use floating-label tricks if they reduce clarity.

Donation forms must not exist until an actual payment/fundraising integration is confirmed.

---

# Footer

The footer should close the site with identity and trust.

Recommended:

- SSH logo
- short organization description from approved data
- main navigation
- work pillars
- blog / gallery
- contact details only when verified
- social links only when verified
- donate/get involved CTA
- copyright
- privacy link

A large typographic `SAVE & SERVE HUMANITY` treatment may be used as a quiet visual anchor.

Do not turn the footer into a sitemap dump.

---

# Motion Principles

Detailed motion rules live in `MOTION.md`.

Visual principles:

- motion is gentle and purposeful
- real images deserve calm reveals
- historical content may use timeline progression
- gallery motion may be more expressive on pointer devices
- text must never become difficult to read
- reduced motion must preserve all content

---

# Signature Visual Moments

The site may include a few memorable interactions.

Approved direction examples:

1. **Archive image trail** — on a desktop pointer device, moving the mouse through a designated archive section can reveal a controlled trail of real SSH photos. It must be performance-capped and disabled for reduced motion/mobile.

2. **History film strip** — archival images glide horizontally as the user moves through a timeline.

3. **Pelican seal reveal** — subtle masked/scaled logo reveal, never a cartoon animation.

4. **Story image transitions** — article imagery reveals through masks and gentle scale.

5. **Impact timeline** — verified milestones progress in a restrained vertical or horizontal sequence.

Do not put all signature effects on one screen.

---

# Accessibility

Minimum requirements:

- WCAG AA contrast
- keyboard navigation
- visible focus states
- logical heading hierarchy
- minimum readable body size
- alt text for meaningful images
- empty alt for purely decorative images
- reduced-motion support
- no interaction requiring hover only
- lightbox must be keyboard accessible
- menus must trap and restore focus correctly where appropriate

Accessibility is part of the visual system, not a final checklist.

---

# Performance

The visual system assumes a large image archive, so performance discipline is mandatory.

Design with:

- responsive image sizes
- lazy loading below the fold
- fixed aspect-ratio containers
- compressed thumbnails
- progressive galleries
- no background autoplay video unless justified
- limited simultaneous animation

The design should remain compelling even before every image has loaded.

---

# Things We Never Do

❌ Generic charity template layouts

❌ Pity-driven fundraising design

❌ Sad stock photography

❌ AI-generated beneficiary imagery presented as real

❌ Purple/cyan startup gradients

❌ Neon cyberpunk effects

❌ Heavy glassmorphism

❌ Endless rounded cards

❌ Every section centered

❌ Large amounts of text over busy photography

❌ Fake impact statistics

❌ Fake partner logos

❌ Fake testimonials

❌ Fabricated quotes

❌ Decorative medical suffering

❌ Animation on every element

❌ Overly playful motion

❌ Huge blur/glow effects

❌ Unreadable serif body text

❌ Tiny low-contrast captions

❌ Loading hundreds of full-resolution archive images at once

❌ Making the organization’s website look more important than the people it serves

---

# Final Design Rule

Every design decision must reinforce at least one of these:

- dignity
- trust
- service
- history
- human connection
- clarity
- hope

If an effect is visually impressive but weakens those values, remove it.

The finished site should feel like a beautifully art-directed humanitarian journal backed by a real organization—not a template and not a design experiment detached from SSH’s mission.
