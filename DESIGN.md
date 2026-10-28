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
  subtitle:
    fontFamily: "League Spartan, Atkinson Hyperlegible Next, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.15
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
  chip: "10px"
  field: "12px"
  plaque: "16px"
  frame: "20px"
  sheet: "22px"
  menu: "24px"
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
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    height: "64px"
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
  press-clipping:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.chip}"
    padding: "24px"
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

The site is the team's evidence portfolio, bound and paged. Every chapter is a cream sheet (22px corners) lying on a deeper sand desk. A sheet scrolls normally until its bottom edge reaches the viewport, then sticks there and recedes slightly as the next sheet slides over it. Depth comes from paper stacking and scroll-linked parallax. There are no fade-up entrances and nothing reveals itself on a timer. The portfolio cover's concentric cyan wave lines sit in two opposite corners of every sheet. That is how the brand repeats from page to page.

Petroleum carries the voice: League Spartan titles, set heavy and tight. Cyan appears at display size, in the wave lines and as the data and trajectory marks. Amber is reserved for actions and small markers. Body text is Atkinson Hyperlegible Next, a face built for legibility, because the audience includes deaf and hard-of-hearing readers and accessibility-focused institutions. Imagery is real: the four creators photographed under colored light, each on an offset block in their own color, plus real devices running real screen recordings of the platform.

The density is editorial. Wide sheets carry generous vertical breaks between chapters (up to 160px). Any section can hold asymmetric two-column compositions. The deliberate dark moment is the petroleum contact sheet that closes the stack, along with one band-colored featured quote.

**Key Characteristics:**
- Paged sheets with 22px corners on a sand desk. Each sheet sticks at its bottom edge and recedes to 0.94 scale, dimming toward the desk, as the next sheet covers it.
- Petroleum League Spartan display type (700, -0.02em, line-height 0.92 to 1.02). Cyan is used only for the second line of the cover headline and for marks.
- Amber pill actions with a warm amber glow. Amber dots mark status and proof.
- Concentric cyan wave lines in opposite sheet corners at 45% and 35% opacity.
- Creator portraits sit on per-person colored offset blocks, and the block drifts on a different parallax rate from the photo.
- Motion is scroll-linked depth only: Lenis inertial scroll, parallax, a word reveal, the trajectory drawing itself and device tilt. When reduced motion is on, all of it goes still and the stacking layout stays.

## Colors

The palette is a warm paper world (sand desk, cream sheet) inked in deep petroleum, with cyan for marks and amber for actions. All values come from the logo and the portfolio.

### Primary
- **Portfolio Petroleum** (`petrol`): headline and title ink on cream sheets. It is also the trajectory path stroke and the ground of the closing band (`band` has the same value). Statistic figures and audience terms use it. In dark mode the token flips to a pale cyan (#7fd0e6), and most titles switch to `fg` instead.
- **Signal Cyan** (`cyan`): the second line of the cover headline ("encuentran voz."), the wave lines, the LSM dots in the population chart, the trajectory nodes, the focus ring and the text caret. At 15% it also tints dark-mode milestone labels. On cream it reaches only large-text contrast, so it is used at display size or as a non-text mark, never for body copy.

### Secondary
- **Action Amber** (`amber`): fills every primary action (pill buttons, the submit button and the skip link). It also colors the status dots, the proof-strip bullets, the quote marks and the text selection. Hovering a text link turns its underline amber.
- **Amber Ink** (`amber-ink`): text on amber. Product status lines and step numerals (at 80%) use it on cream. In dark mode those switch to `amber`.

### Tertiary (creator tones)
- **Creator tones** (`tone-cyan`, `tone-indigo`, `tone-green`, `tone-red`): one color per creator, stored with that creator in content data. They are used only for that person's offset portrait block. They are identity colors, not UI colors.

### Neutral
- **Sand Desk** (`desk`): the page background the sheets rest on. It shows in the 8px/12px gutters and in the dim overlay of a receding sheet. In dark mode it becomes #01161d.
- **Portfolio Cream** (`bg`): the sheet ground. It also fills form fields, and an opaque cream backing sits behind milestone text so the trajectory line passes behind it. In dark mode it becomes #04232d.
- **Paper White** (`surface`): press clippings, the contact form card, the mobile menu and the scrolled nav at 85% with blur. In dark mode it becomes #072f3b.
- **Warm Paper** (`surface-2`): secondary testimonial cards. In dark mode it becomes #062935.
- **Deep Ink** (`fg`): primary text and small headings. In dark mode it becomes #eaf3f4.
- **Slate Teal** (`muted`): intros, body and captions. In dark mode it becomes #a3bfc6.
- **Hairline** (`line`): petroleum at 14%. It draws rules between list rows, the proof-strip top border, inset rings on cards and fields, and the resting underline of text links.
- **Band set** (`band`, `band-fg`, `band-muted`, `band-line`): the petroleum contact sheet and the featured quote. In dark mode `band` is #073a48.

### Named Rules
**The Paper, Not Gray Rule.** Every neutral is a warm sand/cream or a petroleum-tinted ink. Even the receding-sheet dim is the desk color at up to 55% opacity, never black or gray.

**The Amber Means Act Rule.** Amber fills only things you can press, plus tiny dots that mark status or proof. It never fills a card or a band.

## Typography

**Display Font:** League Spartan (weights 500 to 800 loaded, 700 used), with Atkinson Hyperlegible Next and system-ui as fallbacks
**Body Font:** Atkinson Hyperlegible Next (400 to 700), with Atkinson Hyperlegible and system-ui as fallbacks

**Character:** League Spartan is a geometric, heavy and tightly tracked title voice, the way the portfolio sets its page titles. Atkinson Hyperlegible Next is a humanist body face chosen for letterform clarity. Every h1 to h4 uses League Spartan 700 with line-height 1.02, -0.02em tracking and balanced wrapping. Paragraphs use pretty wrapping.

### Hierarchy
- **Display** (cover h1 only): petroleum, with the second line in cyan as its own block.
- **Statement** (the manifesto WordReveal and the closing quote on the band): petroleum or band-fg, max 18 to 22ch.
- **Headline** (the title of each sheet, h2): petroleum on cream, max 760px.
- **Title** (product names and section subheads, h3): `fg` or petroleum.
- **Subtitle** (creator names at clamp 28 to 36px, step titles at 22px, device captions at 24px, milestone labels at 19px, clipping headlines at 22px with 1.15 leading): League Spartan 700.
- **Figures** (statistics at clamp(30px to 48px), step numerals at 40px with tabular figures): League Spartan 700, line-height 1.
- **Body lead** (the intro under each sheet title): `muted`, max 56ch.
- **Body** (17px, line-height 1.65; the base is 16px at 1.6): `muted`, held to 36 to 48ch measures.
- **Label** (15px bold): buttons, nav links, status lines and the link "Escríbenos".
- **Caption** (14px): figure captions, roles, school names and the proof strip (14px bold at 80% `fg`).

### Named Rules
**The No-Uppercase Rule.** Labels are sentence case in bold Atkinson. The system has no tracked-out uppercase small labels and no kickers above titles. A sheet's title is the first thing on the sheet.

**The Cyan Is Display-Size Rule.** Cyan text appears only at display or figure size. Running text stays in `fg` or `muted`.

## Layout

The page is a vertical stack of sheets inset from the viewport by 8px (12px from 640px up), so the sand desk frames every sheet. Content sits in a page container that is at most 1240px wide, with clamp(16px, 4vw, 48px) inline padding. Each sheet pads clamp(56px, 6vw, 84px) above its content and clamp(72px, 9vw, 128px) below.

Rhythm inside a sheet: title, then a 24px gap to the intro, then 48 to 64px to the first composition. Articles inside a chapter are separated by clamp(72px, 8vw, 112px). A full break inside a chapter (for example, manifesto or press) uses clamp(96px, 12vw, 160px), usually over a hairline rule.

Compositions are asymmetric two-column grids that collapse to one column below 1024px. Examples: the cover is 1.3fr/0.9fr, the build articles alternate 1.15fr/1fr with the image side swapping, and community uses a 7/5 split out of 12 columns. Creator rows are offset: odd items drop 80px on large screens. Press clippings sit in three columns that drift at different rates, and the middle column starts 64px lower. The trajectory snakes three milestones per row across the sheet (440px rows) at 1024px and up. Below that it becomes a single dashed line down the left edge with stacked milestones.

The cover fills the viewport (100svh minus the gutter, or minus 150px on large screens so the next sheet's top edge peeks). A floating pill nav sits 12px from the top, 64px tall, at most 1200px wide. Breakpoints are Tailwind defaults (640, 768, 1024). Anchor scroll padding is 88px.

## Elevation & Depth

Depth is physical paper. Sheets cast their shadow upward onto the sheet they cover. Real objects (clippings, logo plaques and devices) cast soft petroleum-tinted drops onto the paper. The structural depth is motion: covered sheets shrink toward their bottom edge and dim toward the desk, and layers inside a sheet drift at their own scroll rates. Shadows are always tinted with petroleum (rgb 4 40 52 or 4 76 98), except on the band, where the form card drops a neutral black shadow.

### Shadow Vocabulary
- **Sheet edge** (`0 -1px 0 rgb(4 76 98 / 0.06), 0 -24px 48px -28px rgb(4 40 52 / 0.45)`): every sheet after the cover. It is cast upward onto the sheet beneath.
- **Band edge** (`0 -24px 48px -28px rgb(4 40 52 / 0.5)`): the closing contact sheet.
- **Soft** (`--shadow-soft`): the nav once the page has scrolled.
- **Float** (`--shadow-float`): the open mobile menu.
- **Object on paper** (`0 2px 4px rgb(4 40 52 / 0.06), 0 18px 36px -20px rgb(4 40 52 / 0.35)`): press clippings. Partner-logo plaques use the tighter `0 14px 30px -18px`.
- **Device** (`0 2px 4px rgb(4 40 52 / 0.2), 0 40px 80px -30px rgb(4 40 52 / 0.55)`): the laptop lid. The phone is similar at 0.25/0.55.
- **Amber glow** (`inset 0 1px 0 rgb(255 255 255 / 0.5), 0 6px 16px -6px rgb(255 164 49 / 0.7)`): primary buttons. On hover it widens to `0 10px 22px -8px` at 0.8.
- **Card on band** (`0 2px 4px rgb(0 0 0 / 0.12), 0 30px 60px -30px rgb(0 0 0 / 0.5)`): the contact form.

### Named Rules
**The Recede, Don't Fade Rule.** A covered sheet scales from 1 to 0.94 (origin at the bottom center) while a desk-colored overlay rises from 0 to 0.55. Nothing else in the system fades in or out on entrance.

**The Shadow Points Up Rule.** Sheet shadows use a negative y offset because the newer page lies on top. Never drop a sheet shadow downward.

## Shapes

All corners are soft and rounded, and none are sharp. Corners nest by scale: sheets are 22px, photo frames, portraits, device scenes and quote cards are 20px, journey photos and logo plaques are 16px, fields are 12px, and milestone labels and press clippings are 10px. Every interactive control is a full pill (buttons, nav, nav links, contact detail rows, circular 40px and 44px icon buttons). The open mobile menu is 24px, with 16px items. The contact sheet rounds only its top corners because it is the last page and ends the document.

Recurring silhouettes:
- The four-line concentric wave curve (stroke 2, round caps, `currentColor`), clipped into opposite sheet corners and rotated 180° for the bottom-left one.
- Dots: 6px amber proof bullets, 8px amber status dots, 10px legend dots, the 100-dot population grid, and 20px cyan trajectory nodes ringed 4px in `bg`.
- The dashed trajectory: a 2.5px petroleum stroke, `9 9` dash at 45% opacity, with a solid stroke drawn over it.
- Press clippings tilted between -1.5° and 1.5°, like cuttings dropped on a desk.

## Components

### Buttons
Tactile, warm and weighty.
- **Shape:** full pill, min height 48px (44px in the nav), 24px horizontal padding, 15px bold label with an optional 18px icon at 8px gap.
- **Primary:** an amber fill with amber-ink text and the amber glow. It is the only filled button style in use.
- **Hover / Focus / Active:** lifts 2px and the glow widens, over 300ms with the quart-out ease. Active scales to 0.98. Focus is the global 2.5px cyan outline at a 3px offset.
- **Submit (contact form):** full width, 52px or taller, 16px padding. Its states read "Enviar mensaje", "Enviando…", "Reintentar envío" and "Enviar otro mensaje". When disabled it drops to 70% opacity.
- **Text link (secondary action):** 15px bold `fg`, with a 2px underline at 6px offset. The underline is `line` at rest and turns amber on hover. It pairs with a primary button at 28px spacing.

### Navigation
- A floating pill, 64px tall and at most 1200px wide, 12px from the top. It is transparent over the cover. After 24px of scroll it becomes `surface` at 85% with a 24px backdrop blur, a hairline ring and the soft shadow, over 500ms.
- Links are 15px semibold `fg` at 80% in pill hit areas. On hover the text goes to full `fg` over a 5% `fg` wash. A 44px circular theme toggle and the amber "Escríbenos" pill sit at the right.
- Below 1024px a 44px menu button opens a `surface` panel (24px corners, float shadow) with 16px-radius rows and a full-width amber button. Escape closes it.

### Sheet (signature)
The chapter container. Cream (or band) ground, 22px corners, the upward sheet-edge shadow, and wave lines in the top-right (cyan at 45%) and bottom-left (cyan at 35%, rotated). An optional header holds the headline and the body-lead intro. Sheets live in the stacking scroller described under Motion.

### Portrait on offset block (signature)
Each creator's photo sits in a 20px frame over a block in that creator's tone, offset 12px right and down (16px from 640px up). On scroll the block trails the photo by ±28px on its own track, so the pair separates as it passes. On the cover, two portraits overlap at different depths, and on fine pointers they also respond to pointer position on a spring. These blocks are flat color (no blur), are used only behind creator portraits, and use only that creator's tone.

### Cards / Containers
- **Quote cards:** 20px corners and 32px padding (40px from 640px up), with an amber SVG quote mark. The featured quote sits on `band` with a League Spartan 600 blockquote. Secondary quotes sit on `surface-2` with 17px body text.
- **Press clippings:** `surface`, 10px corners, 24px padding, a hairline ring, the object shadow and a slight tilt. Each shows the outlet in 14px bold petroleum over a 22px League Spartan headline in quotes.
- **Photo frames (DepthImage):** 20px corners with overflow clipped. The image is 116% of the frame's height and drifts from -13% to 0% as the frame crosses the viewport.
- **Partner-logo plaques:** 200×132px, 16px corners, always cream in both themes so the logos keep their ground.

### Inputs / Fields
- **Style:** `bg` fill, a 1px `line` ring, 12px corners, 14px by 16px padding and 16px text. Labels sit above in 14px bold `fg`, and fields carry a cyan caret.
- **Focus:** the ring thickens to 2px cyan over 200ms.
- **Status:** a polite live region below the fields. Success is 14px bold petroleum. Errors are 14px bold red.

### Status line and proof strip
Product status is a 15px bold amber-ink line with an 8px amber dot, set below the product name, never above it. The cover's proof strip runs along the cover's bottom edge as 14px bold items, each led by a 6px amber dot, over a hairline top border.

### Trajectory
The milestones are joined by a dashed petroleum path. A solid stroke draws along it as you scroll. Nodes are 20px cyan dots. Each milestone has a photo or logo plaque above its node and below it a milestone label (League Spartan 19px petroleum on a pale cyan #d9eef4 chip, or cyan at 15% in dark mode) over a cream-backed detail line.

### Devices
The laptop and phone frames are drawn in CSS: a dark chassis (#101619 and #121b1f), a 1px white ring at 10%, and a silver gradient base on the laptop. They wrap muted, looping screen recordings of the real platform that play only while on screen. The phone's screen is laid out at 240px and scaled to fit. The camera island stays black in both themes.

### Motion
- **Inertial scroll:** Lenis, duration 1.1s, quartic ease-out, with a -16px offset on anchor links.
- **Sheet stacking:** each sheet sticks at `min(0, viewport height − sheet height)`. Progress runs from the moment the next sheet's top enters the viewport until it reaches the top: scale goes from 1 to 0.94 and the desk dim from 0 to 0.55.
- **Cover depth:** while the cover is being covered, the copy rises 50px and the lead portrait 90px (its block 40px). The second portrait rises 170px (its block 110px). On fine pointers a spring (stiffness 80, damping 18) moves the far portrait ×10 and the near one ×−18.
- **Word reveal:** the manifesto's words move from 14% opacity to full ink in reading order as it scrolls through the view. Screen readers get the intact sentence once.
- **Trajectory draw:** the path length follows scroll from 75% to 92% of the viewport through a spring (stiffness 120, damping 30).
- **Device tilt:** the lesson laptop goes from a 24° backward tilt and 0.9 scale to flat at center screen. The phone climbs from 38% lower and 7° rotation, so it rises faster than the laptop. The two lower laptops drift in opposite directions (+60 to −60 and −30 to +90px).
- **Clippings:** the columns drift ±40, ±50 and ±70px against each other.
- **Easing for UI state:** `cubic-bezier(0.25, 1, 0.5, 1)` (quart-out) at 200 to 300ms. The theme color transition is 400ms.
- **Reduced motion:** Lenis is not started and smooth anchor scrolling is off. Sheets still stack and stick but do not scale or dim. Every parallax value collapses to 0 (DepthImage holds at -6.5%). Words show at full ink. The trajectory is fully drawn. The devices sit flat. Videos are replaced by their poster stills. Pointer depth is off.

## Do's and Don'ts

### Do:
- **Do** build every new chapter as a sheet: 22px corners, the upward sheet-edge shadow, wave lines in opposite corners, and a headline-plus-intro header.
- **Do** set titles in petroleum League Spartan 700 at -0.02em. Keep running text in Atkinson Hyperlegible Next, at 17px with 1.65 leading, in `muted`, within 36 to 56ch.
- **Do** fill actions with amber and amber-ink in full pills that are at least 48px tall, and pair a primary button with an underlined text link rather than a second filled button.
- **Do** express depth through scroll-linked motion (stacking, parallax and drawn paths), and give every motion value a reduced-motion value of 0 or its resting state.
- **Do** show real people, real devices and real platform recordings. Put creators on their own tone's offset block.
- **Do** tint shadows with petroleum and keep the neutrals warm sand and cream.

### Don't:
- **Don't** add fade-up or slide-in entrance animations to sections or cards. Motion here is tied to scroll position, never triggered on entry.
- **Don't** put a kicker or eyebrow label above a sheet title, or use tracked uppercase small labels.
- **Don't** set body copy or small labels in cyan. It reaches only large-text contrast on cream.
- **Don't** fill cards, bands or large areas with amber.
- **Don't** use gray or black for the receding-sheet dim or as a neutral surface. Recede toward the desk.
- **Don't** use colored offset blocks anywhere except behind creator portraits, and don't use them as a generic card shadow.
- **Don't** introduce purple SaaS gradients, emoji feature cards or a row of three equal cards.
