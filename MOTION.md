# MOTION.md

# Save and Serve Humanity — Motion System

> Motion is an enhancement to SSH storytelling, not the subject of the website.
>
> Users should remember the people, work, images, and sense of care—not a catalogue of effects.
>
> Every animation must preserve dignity, accessibility, and performance.

---

# Motion Philosophy

Motion should feel:

- calm
- intentional
- warm
- cinematic
- documentary
- responsive
- precise
- natural
- human

Never:

- bouncy
- game-like
- hyperactive
- neon
- chaotic
- distracting
- manipulative

The ideal reaction is:

> “This story unfolds beautifully.”

Not:

> “This NGO website has crazy animations.”

---

# Golden Rules

Every animation must serve at least one purpose:

- guide attention
- reveal hierarchy
- connect story chapters
- clarify interaction
- give historical/media content continuity
- make the interface feel responsive
- create a memorable but respectful archive experience

If it does none of these, remove it.

---

# Animation Hierarchy

## Level 1 — Micro interaction

Examples:

- links
- buttons
- icon controls
- filter states
- form focus

Duration:

`150–240ms`

## Level 2 — Component motion

Examples:

- cards
- navigation
- accordion
- gallery opening
- article share controls

Duration:

`280–520ms`

## Level 3 — Section choreography

Examples:

- image + copy reveal
- timeline milestone
- program chapter
- featured story

Duration:

`600–900ms`

## Level 4 — Signature narrative motion

Examples:

- archive film strip
- pointer image trail
- home history sequence

Duration depends on interaction, but must remain understandable and interruptible.

---

# Preferred Easings

Default:

`power3.out`

Editorial reveal:

`power4.out`

Large image reveal:

`expo.out`

Soft motion:

`sine.out`

Organic return:

`circ.out`

Avoid:

- bounce
- elastic
- rough
- exaggerated back easing

Linear is acceptable only for true continuous loops such as a slow film strip/marquee.

---

# GSAP Standards

Use GSAP for complex motion.

CSS transitions are fine for simple hover/focus states where they are clearer and cheaper.

Always:

- scope animations
- use safe cleanup
- revert contexts
- remove event listeners
- kill ScrollTriggers on unmount
- respect reduced motion

Do not scatter animation setup throughout page markup.

---

# Performance Rules

Prefer animating:

- transform
- opacity

Use sparingly:

- filter
- clip-path

Avoid animating layout-heavy properties continuously:

- top
- left
- width
- height
- margin
- padding

Do not use React state for every pointer coordinate or scroll tick when an imperative animation layer is more suitable.

---

# Home Hero Sequence

Suggested order:

1. brand field / background settles
2. SSH logo appears gently
3. eyebrow/identity line reveals
4. headline reveals by line
5. supporting copy enters
6. CTAs appear
7. main documentary image reveals
8. subtle ambient motion begins if used

Total initial choreography should feel quick enough that content is never held hostage.

Do not animate every letter unless there is a very specific reason.

---

# Logo Motion

The current logo is a raster JPG.

Allowed:

- opacity reveal
- slight scale from ~0.96 to 1
- mask reveal
- subtle rotation under 1 degree if composition supports it

Not allowed with the current asset:

- fake SVG drawing
- morphing the pelican
- separating internal logo elements by image analysis
- cartoon wing animation

If a real vector master is later provided, new logo motion can be considered.

---

# Split Text

Use for major headings only.

Preferred:

- line-based reveal
- bottom-to-top masked movement
- modest stagger

Avoid character-by-character animation on long headings.

Never animate article paragraphs by individual words/characters.

---

# ScrollTrigger Rules

Use when scroll genuinely controls narrative progression.

Good:

- history timeline
- work pillar chapter changes
- archive strip
- full-bleed image reveal
- statistic entering view once

Avoid:

- triggering every paragraph
- excessive pinning
- long dead scroll zones
- scrubbing text readability
- hijacking native scrolling

---

# Section Reveals

Default pattern:

- eyebrow fades/slides 8–12px
- headline line mask reveals
- body fades/translates 12–18px
- image clips/reveals with slight scale

Not every section needs all four.

Some sections should simply exist without animation to create rhythm.

---

# Image Reveals

Preferred patterns:

1. clip/mask reveal
2. scale `1.04–1.08` to `1`
3. subtle vertical parallax

Do not fade every image in identically.

Avoid dramatic rotations on photos of patients, children, or vulnerable communities.

---

# Story Cards

Hover:

- image scale up to `1.03–1.05`
- title translate `2–5px`
- border/blue accent strengthens

Duration:

`220–360ms`

No bounce.

No 3D card spin.

---

# Buttons

Hover:

- translateY `-1px` or `-2px`
- optional arrow translateX `2–4px`
- subtle background tonal shift

Active:

- scale around `0.985–0.99`

Focus:

- visible focus ring without requiring motion

---

# Navigation

On scroll:

- surface can gain opacity/blur
- height may reduce slightly
- logo can scale subtly

The nav must remain stable enough that users do not feel it moving constantly.

---

# Mobile Menu

Open sequence:

1. backdrop/surface appears
2. logo/header remains anchored
3. main links reveal in a short stagger
4. secondary actions appear

Close should feel immediate and reversible.

Do not make users wait through a long closing animation before navigation.

---

# History Timeline

The timeline can reveal milestones as the reader scrolls.

Options:

- line grows progressively
- year marker becomes active
- image changes through crossfade/mask
- text enters once

If a milestone is only a year, do not animate a fake exact date.

---

# Impact Metrics

Count-up animation is optional.

Use only for genuine numeric values.

For ordinal historical values such as `147th`, either reveal the number directly or animate carefully without implying a live counter.

Never count from zero to a number merely because a stat component exists.

---

# Archive Film Strip

A slow horizontal image sequence may support history/gallery sections.

Rules:

- real SSH images only
- use optimized thumbnails
- pause/stop when off-screen
- avoid fast movement
- user can still access images normally
- reduced motion shows a static or manually scrollable row

Continuous speed should be calm.

---

# Archive Image Trail — Signature Interaction

This is a specific approved visual direction for SSH because the organization has a large image history.

Concept:

Within one designated archive/gallery section, desktop pointer movement can leave a controlled trail of SSH photographs behind the cursor.

Purpose:

- communicate depth of history
- turn a large photo archive into a memorable visual moment
- encourage exploration

Rules:

- desktop/pointer devices only
- disabled on touch/mobile
- disabled under `prefers-reduced-motion`
- use thumbnails, not full originals
- cap number of active images
- recycle nodes
- throttle activation distance/time
- pointer can never become trapped
- links remain clickable
- images fade/scale away smoothly
- no random celebrity/stock/AI imagery
- no sensitive image should appear in the trail unless specifically approved for public use

Suggested animation:

- enter at scale `0.86–0.94`
- opacity `0 → 1`
- small directional drift
- slight rotation `±2°` maximum
- exit opacity to zero
- total lifespan around `0.8–1.6s`

This section should be memorable but brief.

---

# Gallery Lightbox

Open:

- backdrop fade
- media scale `0.97 → 1`
- caption appears after media settles

Close:

- quick reverse

Navigation:

- no dramatic slide across the entire viewport
- use subtle directional movement/crossfade

Accessibility and keyboard behavior are more important than transition polish.

---

# Article Motion

Long-form reading should be calmer than marketing pages.

Allowed:

- cover reveal
- reading progress
- occasional wide-image reveal
- pull quote entrance
- related-story reveal

Avoid:

- parallax on every article image
- animated paragraph text
- sticky effects that obscure reading
- constant background movement

---

# Scripture Callout Motion

Prefer:

- very soft opacity reveal
- rule/line growth
- slight vertical movement

Do not animate Scripture theatrically.

---

# Quotes

Pull quotes may enter with:

- line reveal
- soft opacity
- slight scale under 1.02

Avoid typewriter effects.

---

# Background Motion

Most SSH surfaces can remain static.

Optional deep-blue sections may use:

- extremely subtle light drift
- gentle grain/noise

If users notice the background animation immediately, it is probably too strong.

---

# Parallax

Use sparingly on large documentary images.

Maximum travel should be modest.

Do not apply parallax to:

- dense article text
- every card
- sensitive portraits where movement feels gimmicky

---

# Page Transitions

Optional.

If implemented:

- keep under roughly 700–1000ms total
- never block content unnecessarily
- no white flashes
- preserve native navigation expectations

A simple crossfade/brand-blue wipe is enough.

---

# Loading Experience

Do not use a long branded loading screen.

If a first-load logo reveal exists, it should only appear when technically necessary and should not delay actual content.

Image placeholders are more useful than theatrical loaders.

---

# Forms

Focus:

- border/accent transition

Success:

- calm confirmation

Error:

- clear message
- no repeated shaking

Do not animate fields enough to distract from completion.

---

# Filters

Category/year filters should move just enough to indicate state.

Use:

- underline movement
- background transition
- small active indicator

Do not animate the entire blog grid out for a long duration after every filter click.

---

# Search

Search result transitions should be fast and stable.

Avoid layout jump.

Respect keyboard input and focus.

---

# Hover Philosophy

Hover should communicate:

> “This can be interacted with.”

It should not communicate:

> “Watch this object perform.”

---

# Timing Tokens

Recommended:

```css
--motion-fast: 160ms;
--motion-normal: 320ms;
--motion-medium: 560ms;
--motion-slow: 800ms;
--motion-page: 900ms;
```

Adjust when a specific interaction requires it, but preserve hierarchy.

---

# Distance Tokens

- tiny: 4px
- small: 8px
- medium: 16px
- large: 28px

Most text reveals should remain in small/medium ranges.

---

# Rotation Tokens

- tiny: 0.5°
- small: 1°
- expressive archive: up to 2°

Avoid exceeding 3° in normal SSH interface motion.

---

# Reduced Motion

When `prefers-reduced-motion: reduce` is active:

Disable:

- archive image trail
- scrubbed parallax
- decorative image drifting
- elaborate page transitions
- auto-moving film strips
- cursor-follow effects

Replace with:

- static images
- normal scroll
- immediate content
- short opacity transitions where appropriate

All content and controls remain available.

---

# Forbidden Motion

❌ Bounce easings

❌ Elastic cards

❌ Spinning logos

❌ Pelican wing/cartoon effects

❌ Random floating charity icons

❌ Particle explosions

❌ Constant cursor trails across the whole site

❌ Page-wide scroll hijacking

❌ Text scrambling on serious stories

❌ Fast image flickering

❌ Dramatic animation on sensitive medical imagery

❌ Motion that delays donation/contact actions

❌ Auto-moving UI without a reduced-motion alternative

---

# Signature SSH Motion Moments

Use a small number of these, not all at once:

1. Archive pointer image trail
2. History film strip
3. Calm pelican seal reveal
4. Scroll-linked legacy timeline
5. Editorial image mask reveals
6. Large blue section transitions between story chapters

These should make the site feel crafted while keeping the focus on SSH’s real work.

---

# Final Rule

Motion should make SSH’s history feel alive without making human stories feel like visual effects.

When choosing between impressive and respectful, choose respectful.

When choosing between animation and readability, choose readability.
