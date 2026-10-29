---
name: Señas a Voces Academy
description: The team's evidence portfolio, paged. Cream sheets stack on a sand desk as you scroll.
colors:
  desk: "#e6dfcb"
  bg: "#faf7ed"
  surface: "#ffffff"
  surface-2: "#f3efe2"
  fg: "#062f3b"
  muted: "#45646c"
  line: "rgb(4 76 98 / 0.14)"
  petrol: "#044c62"
  cyan: "#0d9ac5"
  amber: "#ffa431"
  amber-ink: "#3a2405"
  band: "#044c62"
  band-fg: "#eef7f8"
  band-muted: "#b5d3da"
  band-line: "rgb(255 255 255 / 0.14)"
  tone-cyan: "#0d9ac5"
  tone-indigo: "#4b4fd6"
  tone-green: "#3fae6a"
  tone-red: "#e5484d"
typography:
  index-title:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(56px, 9vw, 128px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  display:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(50px, 6.4vw, 96px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(44px, 6.4vw, 96px)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.6vw, 80px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 52px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  index-entry:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "clamp(24px, 3.2vw, 40px)"
    fontWeight: 700
    lineHeight: 1.02
  subtitle:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
  subtitle-sm:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.18
  body-lead:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.4vw, 20px)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.4
  caption:
    fontFamily: "Atkinson Hyperlegible Next, Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  backing: "6px"
  chip: "10px"
  field: "12px"
  clipping: "14px"
  plaque: "16px"
  tab: "18px"
  frame: "20px"
  sheet: "22px"
  pill: "9999px"
spacing:
  sheet-gap: "8px"
  sheet-gap-sm: "12px"
  gutter: "clamp(16px, 4vw, 48px)"
  container: "1240px"
  sheet-top: "clamp(56px, 6vw, 84px)"
  sheet-bottom: "clamp(72px, 9vw, 128px)"
  article-break: "clamp(72px, 8vw, 112px)"
  chapter-break: "clamp(96px, 12vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  text-link:
    textColor: "{colors.fg}"
    typography: "{typography.label}"
    height: "48px"
  hanging-tab:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
    rounded: "{rounded.tab}"
    padding: "8px"
  hanging-tab-cta:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  chapter-tab:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
    rounded: "{rounded.chip}"
    padding: "14px 8px"
  chapter-tab-active:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.surface}"
    rounded: "{rounded.chip}"
    padding: "14px 8px"
  index-sheet:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
  index-entry:
    textColor: "{colors.fg}"
    typography: "{typography.index-entry}"
    rounded: "{rounded.field}"
    padding: "10px 0"
  sheet:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
    rounded: "{rounded.sheet}"
  sheet-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-fg}"
    rounded: "{rounded.sheet}"
  portrait-frame:
    rounded: "{rounded.frame}"
  milestone-label:
    backgroundColor: "#d9eef4"
    textColor: "{colors.petrol}"
    rounded: "{rounded.chip}"
    padding: "6px 14px"
  milestone-detail:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.backing}"
    padding: "4px 8px"
  press-clipping:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.clipping}"
    padding: "28px"
  press-reach-card:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-fg}"
    rounded: "{rounded.clipping}"
    padding: "28px"
  logo-plaque:
    backgroundColor: "#faf7ed"
    rounded: "{rounded.plaque}"
    width: "200px"
    height: "132px"
  quote-card:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.fg}"
    rounded: "{rounded.frame}"
    padding: "40px"
  quote-card-band:
    backgroundColor: "{colors.band}"
    textColor: "{colors.band-fg}"
    rounded: "{rounded.frame}"
    padding: "40px"
  input-field:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.fg}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
---

# Design System: Señas a Voces Academy

## Overview

**Creative North Star: "The Portfolio That Turns Its Own Pages"**

The site is the team's evidence portfolio, bound and paged. Every chapter is a cream sheet (22px corners) lying on a deeper sand desk. A sheet scrolls normally until its bottom edge reaches the viewport, then sticks there and recedes slightly as the next sheet slides over it. Depth comes from paper stacking and scroll-linked parallax: behind each sheet's copy, three soft solid circles in petroleum, amber and cyan drift at their own rates. The portfolio cover's concentric cyan wave lines sit in two opposite corners of every sheet. That is how the brand repeats from page to page. The portfolio is navigated the way a binder is: cream tabs hang from the top edge, divider tabs run down the right edge, and an "Índice" page slides down over the stack.

Petroleum carries the voice: League Spartan titles, set heavy and tight. Cyan appears at display size, in the wave lines and as the data and trajectory marks, including the pen point that draws the trajectory. Amber is reserved for actions and small markers. Body text is Atkinson Hyperlegible Next, a face built for legibility, because the audience includes deaf and hard-of-hearing readers and accessibility-focused institutions. Imagery is real: the four creators photographed under colored light, each on an offset block in their own color, the team's own drawing of the glove, and real platform recordings playing on a laptop built in true CSS 3D that opens its lid as you arrive.

The density is editorial. Wide sheets carry generous vertical breaks between chapters (up to 160px). Any section can hold asymmetric two-column compositions. The deliberate dark moments are the petroleum contact sheet that closes the stack, one band-colored featured quote and the band-colored reach card in the press grid.

**Key Characteristics:**
- Paged sheets with 22px corners on a sand desk. Each sheet sticks at its bottom edge and recedes to 0.94 scale, dimming toward the desk, as the next sheet covers it.
- Binder navigation: hanging cream tabs at the top edge, vertical divider tabs on the right edge with the current chapter in petroleum, and a full "Índice" page with dotted leaders and folio numbers.
- Petroleum League Spartan display type (700, -0.02em, line-height 0.92 to 1.02). Cyan is used only for the second line of the cover headline and for marks.
- Amber pill actions with a warm amber glow. Amber dots mark status and proof.
- Concentric cyan wave lines in opposite sheet corners at 45% and 35% opacity, over three drifting backdrop circles at 6 to 12% opacity.
- Creator portraits sit on per-person colored offset blocks, and the block drifts on a different parallax rate from the photo.
- Motion is scroll-linked depth first: Lenis inertial scroll, parallax, a word reveal, the trajectory drawing itself with a pen point, and a 3D laptop opening and turning to face the reader. Objects placed on the paper may settle once on first view, by transform only. When reduced motion is on, all of it goes still and the stacking layout stays.

## Colors

The palette is a warm paper world (sand desk, cream sheet) inked in deep petroleum, with cyan for marks and amber for actions. All values come from the logo and the portfolio.

### Primary
- **Portfolio Petroleum** (`petrol`): headline and title ink on cream sheets. It is also the trajectory path stroke, the active chapter tab, the "Índice" title and the ground of the closing band (`band` has the same value). Statistic figures and audience terms use it. In dark mode the token flips to a pale cyan (#7fd0e6), and most titles switch to `fg` instead.
- **Signal Cyan** (`cyan`): the second line of the cover headline ("encuentran voz."), the wave lines, the LSM dots in the population chart, the trajectory nodes and pen point, the hover state of "Índice" entries (40px and under, always 24px or larger), the focus ring and the text caret. At 15% it also tints dark-mode milestone labels, and at 8 to 10% it is one of the backdrop circles. On cream it reaches only large-text contrast, so it is used at display size or as a non-text mark, never for body copy.

### Secondary
- **Action Amber** (`amber`): fills every primary action (pill buttons, the header "Contacto" pill, the submit button and the skip link). It also colors the status dots, the proof-strip bullets, the quote marks and the text selection. Hovering a text link turns its underline amber. At 10 to 12% it is one of the backdrop circles.
- **Amber Ink** (`amber-ink`): text on amber. Product status lines and step numerals (at 80%) use it on cream. In dark mode those switch to `amber`.

### Tertiary (creator tones)
- **Creator tones** (`tone-cyan`, `tone-indigo`, `tone-green`, `tone-red`): one color per creator, stored with that creator in content data. They are used only for that person's offset portrait block. They are identity colors, not UI colors.

### Neutral
- **Sand Desk** (`desk`): the page background the sheets rest on. It shows in the 8px/12px gutters, in the dim overlay of a receding sheet and, at 70%, as the backdrop behind the open "Índice". In dark mode it becomes #01161d.
- **Portfolio Cream** (`bg`): the sheet ground. It also fills form fields, the hanging tabs (at 95% with blur), resting chapter tabs and the "Índice" page. An opaque cream backing sits behind milestone detail lines so the trajectory passes behind them. In dark mode it becomes #04232d.
- **Paper White** (`surface`): press clippings and the contact form card. In dark mode it becomes #072f3b.
- **Warm Paper** (`surface-2`): secondary testimonial cards. In dark mode it becomes #062935.
- **Deep Ink** (`fg`): primary text and small headings. In dark mode it becomes #eaf3f4.
- **Slate Teal** (`muted`): intros, body, captions and the "Índice" folio numbers. In dark mode it becomes #a3bfc6.
- **Hairline** (`line`): petroleum at 14%. It draws rules between list rows, the proof-strip top border, inset rings on cards, fields, tabs and the "Índice" close button, and the resting underline of text links.
- **Band set** (`band`, `band-fg`, `band-muted`, `band-line`): the petroleum contact sheet, the featured quote and the press reach card. In dark mode `band` is #073a48.

### Named Rules
**The Paper, Not Gray Rule.** Every neutral is a warm sand/cream or a petroleum-tinted ink. Even the receding-sheet dim and the "Índice" backdrop are the desk color (up to 55% and 70%), never black or gray. Device hardware (chassis, silver deck, keys) is the one exception, because it depicts a real object.

**The Amber Means Act Rule.** Solid amber fills only things you can press, plus tiny dots that mark status or proof. It never fills a card or a band. The only other amber is the 10 to 12% backdrop circle, which is atmosphere, not a surface.

## Typography

**Display Font:** League Spartan (weights 500 to 800 loaded, 700 used), with Atkinson Hyperlegible Next and system-ui as fallbacks
**Body Font:** Atkinson Hyperlegible Next (400 to 700), with Atkinson Hyperlegible and system-ui as fallbacks

**Character:** League Spartan is a geometric, heavy and tightly tracked title voice, the way the portfolio sets its page titles. Atkinson Hyperlegible Next is a humanist body face chosen for letterform clarity. Every h1 to h4 uses League Spartan 700 with line-height 1.02, -0.02em tracking and balanced wrapping. Paragraphs use pretty wrapping.

### Hierarchy
- **Index title** (the "Índice" page h2 only): petroleum (`fg` in dark mode). The largest type on the site because the index page is a cover of its own.
- **Display** (cover h1 only): petroleum, with the second line in cyan as its own block.
- **Statement** (the manifesto WordReveal and the closing quote on the band, which runs at clamp(36px, 5vw, 72px)): petroleum or band-fg, max 18 to 22ch.
- **Headline** (the title of each sheet, h2): petroleum on cream, max 760px. The contact h2 runs smaller, at clamp(36px, 4.4vw, 60px).
- **Title** (product names and section subheads, h3): `fg` or petroleum.
- **Index entry** (chapter rows on the "Índice" page): `fg`, cyan on hover, with folio numbers at 0.7em in `muted` tabular figures.
- **Subtitle** (24px: device captions and audience terms; creator names at clamp(24px, 2vw, 28px); milestone labels at 19px as their own chip step): League Spartan 700.
- **Subtitle small** (22px): glove step titles and press headlines (1.18 leading on clippings).
- **Figures** (statistics at clamp(30px, 2.8vw, 40px), social reach at clamp(32px, 3vw, 42px), step numerals at 40px with tabular figures): League Spartan 700, line-height 1.
- **Body lead** (the intro under each sheet title): `muted`, max 56ch.
- **Body** (17px, line-height 1.65; the base is 16px at 1.6): `muted`, held to 36 to 48ch measures.
- **Body small** (15px, 1.5 to 1.6): creator bios, milestone detail lines and the interpreter note under the live translator.
- **Label** (15px bold): buttons, header controls, status lines and the text link "Contacto".
- **Caption** (14px): figure captions, roles, the press outlet line, reach labels and the proof strip (14px bold at 80% `fg`).

### Named Rules
**The No-Uppercase Rule.** Labels are sentence case in bold Atkinson. The system has no tracked-out uppercase small labels and no kickers above titles. A sheet's title is the first thing on the sheet.

**The Cyan Is Display-Size Rule.** Cyan text appears only at display, figure or index-entry size (24px and up). Running text stays in `fg` or `muted`.

## Layout

The page is a vertical stack of sheets inset from the viewport by 8px (12px from 640px up), so the sand desk frames every sheet. Content sits in a page container that is at most 1240px wide, with clamp(16px, 4vw, 48px) inline padding. Each sheet pads clamp(56px, 6vw, 84px) above its content and clamp(72px, 9vw, 128px) below.

Rhythm inside a sheet: title, then a 24px gap to the intro, then 48 to 64px to the first composition. Articles inside a chapter are separated by clamp(72px, 8vw, 112px). A full break inside a chapter (for example, manifesto or press) uses clamp(96px, 12vw, 160px), usually over a hairline rule.

Compositions are asymmetric two-column grids that collapse to one column below 1024px. Examples: the cover is 1.3fr/0.9fr, the build articles alternate 1.15fr/1fr with the image side swapping, and community uses a 7/5 split out of 12 columns. Creators sit in four columns from 1024px (two from 640px), 32px apart, with portraits capped at 260px and odd items dropped 48px. Press is an even grid of three columns by two rows (two columns from 640px) with 20px gaps: five headline clippings and the reach card. The trajectory snakes three milestones per row across the sheet (440px rows) at 1024px and up. Below that it becomes a single dashed line down the left edge with stacked milestones. The Academy device scene centers the lesson laptop at up to 1080px with the phone at the lower right, then sets the two secondary laptops in two columns, the right one dropped 112px.

The cover fills the viewport (100svh minus the gutter, or minus 150px on large screens so the next sheet's top edge peeks), with clamp(104px, 10vw, 128px) top padding to clear the hanging tabs. The hanging tabs hang 12px in from each side (24px from 640px up). The chapter rail is pinned to the right edge at mid-height from 1024px up. Breakpoints are Tailwind defaults (640, 768, 1024).

Chapter links never use native anchor jumps, because stuck sheets report their stuck position. Every in-page `#` link resolves to the sheet's true start (read from the end marker of the sheet before it) and scrolls there through Lenis in 1.4s, or instantly when Lenis is off. The current chapter is the last one whose start is above 45% of the viewport height.

## Elevation & Depth

Depth is physical paper. Sheets cast their shadow upward onto the sheet they cover. Real objects (clippings, logo plaques, the glove drawing's mat, the hanging tabs and the phone) cast soft petroleum-tinted drops onto the paper. The structural depth is motion: covered sheets shrink toward their bottom edge and dim toward the desk, backdrop circles and layers inside a sheet drift at their own scroll rates, and the laptop is a true 3D object (deck, hinged lid, silver back) rather than a shadowed flat frame. Shadows are always tinted with petroleum (rgb 4 40 52 or 4 76 98), except on the band, where the form card drops a neutral black shadow.

### Shadow Vocabulary
- **Sheet edge** (`0 -1px 0 rgb(4 76 98 / 0.06), 0 -24px 48px -28px rgb(4 40 52 / 0.45)`): every sheet after the cover. It is cast upward onto the sheet beneath.
- **Band edge** (`0 -24px 48px -28px rgb(4 40 52 / 0.5)`): the closing contact sheet.
- **Hanging tab** (`0 2px 4px rgb(4 40 52 / 0.06), 0 14px 28px -16px rgb(4 40 52 / 0.35)`): both top tabs.
- **Active chapter tab** (`0 8px 18px -10px rgb(4 40 52 / 0.6)`): the petroleum tab of the current chapter.
- **Object on paper** (`0 2px 4px rgb(4 40 52 / 0.06), 0 18px 36px -22px rgb(4 40 52 / 0.35)`): press clippings. Partner-logo plaques use `0 14px 30px -18px`, and the glove drawing's mat uses `0 2px 4px rgb(4 40 52 / 0.05), 0 24px 48px -28px rgb(4 40 52 / 0.35)`.
- **Phone** (`0 2px 4px rgb(4 40 52 / 0.25), 0 30px 60px -24px rgb(4 40 52 / 0.55)`): the phone chassis.
- **Amber glow** (`inset 0 1px 0 rgb(255 255 255 / 0.5), 0 6px 16px -6px rgb(255 164 49 / 0.7)`): primary buttons. On hover it widens to `0 10px 22px -8px` at 0.8.
- **Card on band** (`0 2px 4px rgb(0 0 0 / 0.12), 0 30px 60px -30px rgb(0 0 0 / 0.5)`): the contact form.

### Named Rules
**The Recede, Don't Fade Rule.** A covered sheet scales from 1 to 0.94 (origin at the bottom center) while a desk-colored overlay rises from 0 to 0.55. Sections, headings, copy and cards never fade in or out on entrance.

**The Settle, Never Hide Rule.** An object placed on the paper (milestone media, the press grid) may settle once, the first time it is seen: a spring on scale, rotation and y only, never opacity. It is fully visible from first paint, it never replays, and under reduced motion it renders at rest.

**The Shadow Points Up Rule.** Sheet shadows use a negative y offset because the newer page lies on top. Never drop a sheet shadow downward.

## Shapes

All corners are soft and rounded, and none are sharp. Corners nest by scale: sheets are 22px, photo frames, portraits, the glove mat, quote cards and the form card are 20px, the hanging tabs are 18px, journey photos and logo plaques are 16px, press clippings and the reach card are 14px, fields and "Índice" rows are 12px, milestone labels and chapter tabs are 10px, and milestone detail backings are 6px. The focus outline also carries a 6px radius. Every interactive control in the page body is a full pill (buttons, the header "Contacto" pill, contact detail rows, circular 40px, 44px and 48px icon buttons).

Edge-bound shapes round only their free side: the hanging tabs round only their bottom corners (they hang from the top edge), the chapter tabs round only their left corners (they come out of the right edge), and the contact sheet rounds only its top corners because it is the last page and ends the document. The "Índice" page is a full-viewport sheet with no radius.

Recurring silhouettes:
- The four-line concentric wave curve (stroke 2, round caps, `currentColor`), clipped into opposite sheet corners and rotated 180° for the bottom-left one.
- Backdrop circles: three solid, unblurred discs per sheet, the largest up to 620px.
- Dots: 6px amber proof bullets, 8px amber status dots, 10px legend dots, the 100-dot population grid, 20px cyan trajectory nodes ringed 4px in `bg`, and the pen point (a 7px-radius cyan core with a 3px `bg` stroke inside a 16px-radius cyan halo at 18%).
- The dashed trajectory: a 2.5px petroleum stroke, `9 9` dash at 45% opacity, with a solid stroke drawn over it.
- Dotted leaders: a 3px dotted rule in `fg` at 25% linking each "Índice" entry to its folio number.

## Components

### Buttons
Tactile, warm and weighty.
- **Shape:** full pill, min height 48px (44px in the header), 24px horizontal padding, 15px bold label with an optional 18px icon at 8px gap.
- **Primary:** an amber fill with amber-ink text and the amber glow. It is the only filled button style in use. The cover's primary reads "Conocer la historia".
- **Hover / Focus / Active:** lifts 2px and the glow widens, over 300ms with the quart-out ease. Active scales to 0.98. Focus is the global 2.5px cyan outline at a 3px offset with a 6px radius.
- **Submit (contact form):** full width, 52px or taller, 16px padding. Its states read "Enviar mensaje", "Enviando…", "Reintentar envío" and "Enviar otro mensaje". When disabled it drops to 70% opacity.
- **Text link (secondary action):** 15px bold `fg`, with a 2px underline at 6px offset. The underline is `line` at rest and turns amber on hover. It pairs with a primary button at 28px spacing; on the cover it reads "Contacto".

### Navigation
The portfolio's own binder hardware, not a bar.
- **Hanging tabs:** two cream tabs fixed to the top edge, `bg` at 95% with a 12px backdrop blur, a hairline ring, the hanging-tab shadow and 18px bottom corners. The left tab holds the logo (36px tall, 44px from 640px up) and returns to the cover. The right tab holds a 44px circular theme toggle, a 44px "Índice" pill (a drawn three-bar mark and the 15px bold label) and, from 640px up, the amber "Contacto" pill at 44px. Header controls hover to a 6% `fg` wash.
- **Chapter rail (1024px and up):** seven divider tabs pinned to the right edge at mid-height, 6px apart, set in vertical writing mode. Resting tabs are `bg` with a hairline ring and `fg` at 65%, tucked 6px into the edge; hover slides them out and darkens the text. The current chapter (scroll-spy) is a petroleum tab with white text (dark-mode text is the dark cream, #04232d) and the active-tab shadow, slid fully out. Transitions run 300ms on cubic-bezier(0.23, 1, 0.32, 1).
- **Índice page:** a native modal dialog that slides down from the top over a desk-at-70% backdrop (500ms, cubic-bezier(0.32, 0.72, 0, 1)). It holds the logo and a 48px ringed close button, the index title, then the seven chapters as index entries, each joined by a dotted leader to its 01 to 07 folio number, over a contact line in 14px `muted`. Hover turns an entry and its leader cyan. Escape or a click on the backdrop closes it. It is also the mobile menu.
- **Footer links:** 15px semibold `band-fg` at 80%, full on hover.

### Sheet (signature)
The chapter container. Cream (or band) ground, 22px corners, the upward sheet-edge shadow, the backdrop circles, and wave lines in the top-right (cyan at 45%) and bottom-left (cyan at 35%, rotated). An optional header holds the headline and the body-lead intro. Sheets live in the stacking scroller described under Motion.

### Backdrop circles (signature)
Three solid circles per sheet, one each in petroleum (6 to 7%), amber (10 to 12%) and cyan (8 to 10%), sized with clamps between roughly 100px and 620px and partly cropped by the sheet edge. Each drifts upward by its own amount (60 to 260px) as the sheet crosses the viewport, so the layers separate. Three layouts exist, chosen per sheet so consecutive sheets never repeat; the cover and contact sheets use them too. They are non-interactive and hidden from assistive technology.

### Portrait on offset block (signature)
Each creator's photo sits in a 20px frame over a block in that creator's tone, offset 12px right and down (16px from 640px up). On scroll the block trails the photo by ±28px on its own track, so the pair separates as it passes. In the creators grid, each portrait is capped at 260px and is followed by the name, a bold role line, a body-small bio (max 34ch) and the school. On the cover, two portraits overlap at different depths, and on fine pointers they also respond to pointer position on a spring. These blocks are flat color (no blur), are used only behind creator portraits, and use only that creator's tone.

### Cards / Containers
- **Quote cards:** 20px corners and 32px padding (40px from 640px up), with an amber SVG quote mark. The featured quote sits on `band` with a League Spartan 600 blockquote. Secondary quotes sit on `surface-2` with 17px body text.
- **Press clippings:** `surface`, 14px corners, 28px padding, a hairline ring and the object shadow, laid flat. Each shows the outlet in 14px bold petroleum (cyan in dark mode) over a subtitle-small headline in quotes.
- **Press reach card:** the sixth cell of the press grid. `band`, 14px corners, 28px padding: the Instagram handle as a 14px bold underlined link at the top (underline `band-line`, amber on hover) and two reach figures at the bottom ("+250 seguidores", "+10 mil de alcance mensual") with `band-muted` captions.
- **Photo frames (DepthImage):** 20px corners with overflow clipped. The image is 116% of the frame's height and drifts from -13% to 0% as the frame crosses the viewport.
- **Glove drawing mat:** the team's white-ground drawing shown whole (never cropped) on a #f8f8f3 mat with 20px corners, 16px padding (24px from 640px up), a hairline ring and the mat shadow. The mat color matches the drawing's own paper so the edge of the image disappears.
- **Partner-logo plaques:** a fixed 200×132px, 16px corners, with the logo contained in 168×104px. Always cream in both themes so the logos keep their ground.

### Inputs / Fields
- **Style:** `bg` fill, a 1px `line` ring, 12px corners, 14px by 16px padding and 16px text. Labels sit above in 14px bold `fg`, and fields carry a cyan caret.
- **Focus:** the ring thickens to 2px cyan over 200ms.
- **Status:** a polite live region below the fields. Success is 14px bold petroleum. Errors are 14px bold red.

### Status line and proof strip
Product status is a 15px bold amber-ink line with an 8px amber dot, set below the product name, never above it. The cover's proof strip runs along the cover's bottom edge as 14px bold items, each led by a 6px amber dot, over a hairline top border.

### Trajectory
The milestones are joined by a dashed petroleum path. A solid stroke draws along it as you scroll, and the pen point rides the drawn tip of the line. Nodes are 20px cyan dots. Each milestone has a photo (260px wide, 16:10) or logo plaque above its node; on first view the media settles from 0.86 scale, ±5° rotation and 22px lower to rest, on a spring from the bottom edge. Below the node sits the milestone label (League Spartan 19px petroleum on a pale cyan #d9eef4 chip, or cyan at 15% in dark mode) over a detail line on an opaque cream backing, so the path passes behind the text and never through it.

### Devices
- **Laptop (3D):** built in real CSS 3D at 2200px perspective. A silver keyboard deck (gradient #d6dcde to #b8c1c4, 18px front corners) is rotated 90° to lie toward the viewer, with four rows of dark keys (#2b3337), a space bar, a trackpad and a front edge so it reads as a slab. The lid hinges on its bottom edge: its front face is a dark bezel (#0f1518, 16px top corners and 4px bottom) around a cream-grounded screen running the recording, with a soft glare that appears as the lid opens; its back face is silver (#dfe5e7 to #b9c3c6) carrying the mirrored logo at 80%. Both faces hide their backs, so a closed lid shows only the silver.
- **Phone:** a dark chassis (#121b1f) with a 1px white ring at 10%, side buttons and the phone shadow. Its screen is laid out at 240px and scaled to fit. The camera island stays black in both themes.
- Both wrap muted, looping screen recordings of the real platform that play only while on screen. Device captions sit under the secondary laptops, pulled up 6% into the space the deck reserves.

### Motion
- **Inertial scroll:** Lenis, duration 1.1s, quartic ease-out. Chapter jumps go through the sheet-start resolver and Lenis at 1.4s.
- **Sheet stacking:** each sheet sticks at `min(0, viewport height − sheet height)`. Progress runs from the moment the next sheet's top enters the viewport until it reaches the top: scale goes from 1 to 0.94 and the desk dim from 0 to 0.55.
- **Backdrop drift:** each circle moves 0 to between -60 and -260px as its sheet crosses the viewport.
- **Cover depth:** while the cover is being covered, the copy rises 50px and the lead portrait 90px (its block 40px). The second portrait rises 170px (its block 110px). On fine pointers a spring (stiffness 80, damping 18) moves the far portrait ×10 and the near one ×−18.
- **Word reveal:** the manifesto's words move from 14% opacity to full ink in reading order as it scrolls through the view. Screen readers get the intact sentence once.
- **Trajectory draw:** the path length follows scroll from 75% to 92% of the viewport through a spring (stiffness 120, damping 30), and the pen point follows the drawn length along the path.
- **Milestone and press settle:** springs, once per page view. Milestone media: 0.7s, bounce 0.25, from 0.86 scale, ±5°, +22px. Press cards: 0.8s, bounce 0.2, from +36px and ±1.5°, staggered 60ms across each row.
- **Laptop open:** scroll progress drives the lid from -88° (closed) to 4° (open) between 5% and 60% of progress, while the whole device turns from a three-quarter view (rotateY ±26°, rotateX -34°, scale 0.82) to near-front (±4°, -13°, scale 1). The lesson laptop runs from its top at 62% of the viewport to its center at 48%; the secondary laptops from 78% to 52%, turning from opposite sides.
- **Phone swing:** in the second half of the lesson laptop's progress, the phone slides in from 55% to the right, rotateY -48° to -14° and rotateZ 10° to 2°, at 1200px perspective.
- **Índice slide:** the dialog translates from -100% to rest over 500ms.
- **Easing for UI state:** `cubic-bezier(0.25, 1, 0.5, 1)` (quart-out) at 200 to 300ms for buttons, links and fields. The theme color transition is 400ms.
- **Reduced motion:** Lenis is not started and chapter jumps are instant. Sheets still stack and stick but do not scale or dim. Every parallax value, backdrop drift included, collapses to 0 (DepthImage holds at -6.5%). Words show at full ink. The trajectory is fully drawn and the pen point is not rendered. Milestone media and press cards render at rest. Device progress is pinned at 1, so every laptop is open and near-front and the phone is in place. The "Índice" appears without the slide. Videos are replaced by their poster stills. Pointer depth is off.

## Do's and Don'ts

### Do:
- **Do** build every new chapter as a sheet: 22px corners, the upward sheet-edge shadow, a backdrop-circle layout different from its neighbors, wave lines in opposite corners, and a headline-plus-intro header.
- **Do** register every new chapter in the chapter list so it gets a divider tab and an "Índice" entry, and route its in-page links through the sheet-start resolver rather than native anchors.
- **Do** set titles in petroleum League Spartan 700 at -0.02em. Keep running text in Atkinson Hyperlegible Next, at 17px with 1.65 leading, in `muted`, within 36 to 56ch.
- **Do** fill actions with amber and amber-ink in full pills that are at least 48px tall (44px in the header), and pair a primary button with an underlined text link rather than a second filled button.
- **Do** express depth through scroll-linked motion (stacking, parallax, drawn paths and the 3D laptop), and give every motion value a reduced-motion value of 0 or its resting state.
- **Do** show real people, real devices, real platform recordings and the team's own drawings, shown whole. Put creators on their own tone's offset block.
- **Do** tint shadows with petroleum and keep the neutrals warm sand and cream.

### Don't:
- **Don't** add fade-up or slide-in entrance animations to sections, headings or copy. The only entry-triggered motion is the once-only transform settle of objects placed on the paper (milestone media, press cards), and it never touches opacity.
- **Don't** put a kicker or eyebrow label above a sheet title, or use tracked uppercase small labels.
- **Don't** set body copy or small labels in cyan. It reaches only large-text contrast on cream.
- **Don't** fill cards, bands or large areas with solid amber.
- **Don't** use gray or black for the receding-sheet dim, the "Índice" backdrop or a neutral surface. Recede toward the desk.
- **Don't** use colored offset blocks anywhere except behind creator portraits, and don't use them as a generic card shadow.
- **Don't** introduce purple SaaS gradients, emoji feature cards or a hero over a row of equal feature cards.
