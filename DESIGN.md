---
name: 60 on Kosmos
description: Practical, dependable guesthouse accommodation for working crews in Bellville South.
colors:
  workday-sage: "#6b8573"
  workday-sage-deep: "#5a7261"
  veranda-sage: "#7c9885"
  sage-mist: "#f0f4f1"
  sage-pale: "#e1ebe3"
  sage-leaf: "#87af8f"
  kosmos-teal: "#1a5f5f"
  chimney-slate: "#3d4852"
  contact-green: "#16a34a"
  contact-green-deep: "#15803d"
  site-ink: "#111827"
  body-slate: "#4b5563"
  label-graphite: "#374151"
  quiet-gray: "#6b7280"
  cloud: "#f9fafb"
  rule-line: "#e2e8f0"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-sm: "48px"
  section: "64px"
  section-lg: "96px"
components:
  button-primary:
    backgroundColor: "{colors.workday-sage}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "0 32px"
    height: "44px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.workday-sage-deep}"
  button-outline-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "0 32px"
    height: "44px"
  button-contact:
    backgroundColor: "{colors.contact-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "12px 16px"
  button-contact-hover:
    backgroundColor: "{colors.contact-green-deep}"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.site-ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.site-ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    height: "40px"
  nav-bar:
    backgroundColor: "{colors.veranda-sage}"
    textColor: "{colors.white}"
    height: "80px"
  info-band:
    backgroundColor: "{colors.workday-sage}"
    textColor: "{colors.white}"
    padding: "24px 32px"
  team-band:
    backgroundColor: "{colors.site-ink}"
    textColor: "{colors.white}"
    padding: "48px 32px"
---

# Design System: 60 on Kosmos

## Overview

**Creative North Star: "The Site Office Welcome"**

60 on Kosmos looks like a well-run base for a working crew: practical, dependable and calm. A foreman or office manager booking rooms for a team should find the facts quickly (rooms, rates, parking, security, invoices) and the way to make contact even faster. The muted sage green supplies the welcome. Plain white surfaces, strong Inter headings and straight-talking copy supply the reliability.

The system is sturdy and plain. Buttons are solid blocks of colour, cards are white panels with a soft shadow, and real photographs of the property do the persuading. Pages stack in a steady rhythm: a photo hero, a sage info band, white and pale-gray content sections, a charcoal band for team enquiries, and a charcoal footer. Density is moderate. Each section makes one point, with generous vertical space (64px) between sections.

Contact is the most important action on every page. A bright contact green is reserved for WhatsApp and phone, so those actions stand apart from the sage brand colour wherever they appear.

**Key Characteristics:**
- Muted sage green brand colour on clean white and pale-gray surfaces
- One typeface (Inter), with bold headings and calm gray body text
- Real property photography; photo heroes are darkened for legible white text
- Solid, plain buttons; white cards with soft shadows that lift on hover
- Bright contact green used only for WhatsApp and call actions
- Charcoal bands anchor team-enquiry sections and the footer

## Colors

A restrained palette: one muted sage brand family, quiet cool grays, and a single bright green reserved for contact.

### Primary
- **Workday Sage** (#6b8573): the brand's working colour. Used for primary call-to-action buttons, the info band under the hero, icons, highlighted labels and price lines. It is the most-used colour on the site.
- **Workday Sage Deep** (#5a7261): the hover and pressed state of Workday Sage buttons, and the right shade for sage text on white. It passes WCAG AA for normal text at 5.2:1; Workday Sage only reaches 4.0:1.
- **Veranda Sage** (#7c9885): the lighter sage of the navigation bar, focus outline and browser theme colour.
- **Sage Leaf** (#87af8f): sage accent icons and highlights on charcoal (footer icons), where it reads clearly (7.2:1).
- **Sage Mist** (#f0f4f1) and **Sage Pale** (#e1ebe3): soft tinted backgrounds for highlight panels, icon wells and alternating sections.

### Secondary
- **Contact Green** (#16a34a): WhatsApp and phone actions only. Used on the sticky mobile contact bar, the floating WhatsApp button and the WhatsApp chat panel.
- **Contact Green Deep** (#15803d): hover state of Contact Green, and the colour to use when green carries text on white (5.0:1).

### Tertiary
- **Kosmos Teal** (#1a5f5f) and **Chimney Slate** (#3d4852): logo colours only (the roof line and chimney in `components/logo.tsx`). They are part of the official logo and are not used elsewhere in the interface.

### Neutral
- **Site Ink** (#111827): headings and key text; also the charcoal of the team-enquiry band and the footer.
- **Label Graphite** (#374151): form labels and secondary emphasis.
- **Body Slate** (#4b5563): body copy and descriptions on white (7.6:1).
- **Quiet Gray** (#6b7280): small supporting text such as captions, review sources and menu sub-lines.
- **Cloud** (#f9fafb): alternate section background and soft panels.
- **Rule Line** (#e2e8f0): card and input borders, dividers.
- **White** (#ffffff): the default page and card surface.

### Named Rules
**The Contact Green Rule.** Bright green means "talk to us now": WhatsApp or call. Never use it for decoration, success badges, ticks or section backgrounds, or it stops pointing at the phone.

**The One Sage Family Rule.** Brand colour comes from the sage scale only. Don't introduce new hues (blues, purples, ambers) for emphasis. Use weight, size or a sage tint instead.

## Typography

**Display Font:** Inter (with system-ui, sans-serif)
**Body Font:** Inter (with system-ui, sans-serif)

**Character:** A single, neutral sans-serif carries everything. Bold headings make the facts easy to spot, and regular-weight gray body copy keeps long pages calm. Hierarchy comes from size and weight, never from a second typeface.

### Hierarchy
- **Display** (700, 1.5rem on mobile rising to 3.75rem on large screens, 1.25): the hero headline on photo backgrounds, white, centred, balanced wrapping. One per page.
- **Headline** (700, 1.5rem rising to 2.25rem, 1.2): section headings ("Our Rooms"), in Site Ink and usually centred above a one-line intro.
- **Title** (600, 1.25rem, 1.3, slightly tightened): card titles such as room names, and band headings.
- **Body** (400, 1.125rem, 1.75): section intros and main paragraph copy in Body Slate; intros are capped at about 42rem (max-w-2xl).
- **Body Small** (400, 0.875rem, 1.5): card feature lists, footer text, supporting detail.
- **Label** (500, 0.875rem): form labels, buttons and navigation links.

### Named Rules
**The Bold Facts Rule.** Prices, room names and practical facts (parking, security, WiFi) are set in semibold or bold so a skimming booker finds them first. Descriptive copy stays regular weight.

## Layout

Content sits in a centred container of up to 1280px (max-w-7xl), with side padding of 16px on mobile, 24px on small screens and 32px on large screens. Long-form text and FAQs narrow to 896px (max-w-4xl) or 768px (max-w-3xl).

Pages are a vertical stack of full-width bands. Each standard section uses 64px of vertical padding (48px on mobile), with occasional 96px sections for emphasis. Section headers are centred with 32–48px below them. Grids collapse to one column on mobile and expand to three or four columns (rooms, facility highlights) from 640px. Gaps are 24–32px.

The hero is a full-bleed photograph, 400px tall on mobile and 700px on large screens, darkened to 50% brightness so the centred white text and buttons read clearly. On screens under 1024px a sticky contact bar is pinned to the bottom of the screen, and the footer reserves 80px of bottom padding for it.

Tailwind breakpoints apply: 640px, 768px, 1024px, 1280px.

## Elevation & Depth

The system uses soft, ambient shadows on white surfaces. Cards rest on a small shadow and lift to a larger one on hover, signalling that a room or offer is clickable. Floating elements (dropdown menus, the WhatsApp button and panel, the sticky contact bar, the navigation bar) carry stronger shadows because they sit above the page. Bands of solid colour (sage, charcoal) create the main sense of depth between sections instead of shadows.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): default for cards and form panels.
- **Lifted card** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`): card hover state, and dropdown menus.
- **Floating bar** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): the navigation bar and sticky mobile contact bar.
- **Floating action** (`box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)`): the floating WhatsApp button and its chat panel.

### Named Rules
**The Lift Means Click Rule.** A card grows its shadow on hover only when the whole card (or its main action) is a link. Static information panels stay at the resting shadow.

## Shapes

Corners are gently rounded and consistent. Cards, panels, menus and most buttons use an 8px radius, form inputs and standard buttons 6px, and small tags 4px. Fully round shapes (9999px) are kept for icon wells, the floating WhatsApp button, the pill buttons on the sticky contact bar, and small badges. Borders are 1px in Rule Line. There is no decorative geometry: shapes stay plain so the photography carries the character.

## Components

### Buttons
Sturdy and plain: solid colour, no gradients, no animation beyond a colour change.
- **Shape:** gently rounded (6px); large buttons are 44px tall.
- **Primary:** Workday Sage with white text, 32px horizontal padding, medium weight. Used for "Get a Company Quote", "For Teams & Contractors" and the main booking actions.
- **Hover / Focus:** hover darkens to Workday Sage Deep. Keyboard focus shows a 2px ring with a 2px offset.
- **Outline on photo or charcoal:** transparent or 10% white fill, 1px white border, white text. Hover raises the fill to 10–20% white. Used as the second action in the hero and team band.
- **Contact:** Contact Green with white text and an icon (WhatsApp or phone), 8px radius, semibold. On the sticky mobile bar the buttons invert to white pills with green text.
- **Arrow affordance:** primary buttons that lead to another page may end with a 20px right-arrow icon.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** White, with a 1px Rule Line border.
- **Shadow Strategy:** resting card shadow; room cards lift to the larger shadow on hover (see Elevation & Depth).
- **Internal Padding:** 24px.
- **Room card:** a full-width photo (192–208px tall, cropped to cover) on top, then the room name as a Title, a sage "best for" line, and a short list of features with sage ticks.

### Inputs / Fields
- **Style:** 40px tall, white background, 1px Rule Line border, 6px radius, 12px horizontal padding. Labels sit above in Label Graphite, 14px medium.
- **Focus:** a 2px focus ring with a 2px offset; no colour fill change.
- **Error / Disabled:** disabled fields drop to 50% opacity. A failed submission shows one red (#dc2626) 14px message in the form.

### Navigation
- **Bar:** a sticky 80px bar in Veranda Sage with a floating-bar shadow. The logo (white-backed SVG) sits on the left, links on the right.
- **Links:** white, medium weight, 16px padding with an 8px radius; hover adds a 10% white fill. Grouped links open dropdowns.
- **Dropdowns:** white panel, 8px radius, lifted shadow, items with a medium-weight title and a small gray sub-line; hover tints the row with 10% Veranda Sage.
- **Mobile:** a menu button replaces the links below 768px.

### Info Band
A full-width Workday Sage band directly under the hero with three icon-led facts (location, security, WiFi). White semibold title and a 90%-opacity sub-line beside a 24px icon.

### Team Band
A full-width Site Ink band with a round sage icon well, a white heading and gray-300 supporting line on the left, and a primary sage button plus an outline WhatsApp button on the right. It is the standard closing call to action for teams.

### Sticky Mobile Contact Bar
Pinned to the bottom of the screen under 1024px. A Contact Green bar holds two equal white pill buttons ("WhatsApp Us" and "Call 074 524 5703") with green text, and respects the device safe area.

### Floating WhatsApp Widget
On screens of 768px and up, a round Contact Green button (with floating-action shadow) sits 24px from the bottom-right corner. It opens a 320px white chat panel with a Contact Green header and a full-width green "chat" button.

## Do's and Don'ts

### Do:
- **Do** use Workday Sage (#6b8573) for primary buttons and Workday Sage Deep (#5a7261) for their hover state.
- **Do** use Workday Sage Deep (#5a7261), not Workday Sage, for sage-coloured text on white, so it meets the 4.5:1 contrast minimum.
- **Do** keep Contact Green (#16a34a) for WhatsApp and call actions, with an icon, so contact stands out on every page.
- **Do** use real photographs of the property, and darken photo heroes so white text stays readable.
- **Do** set prices, room names and practical facts in semibold or bold.
- **Do** keep cards white with an 8px radius and resting shadow, lifting on hover only when they are links.
- **Do** keep the official logo SVG unchanged, in Kosmos Teal and Chimney Slate.

### Don't:
- **Don't** use Contact Green for decoration, success badges or section backgrounds.
- **Don't** set small white text on Veranda Sage (#7c9885) or Contact Green (#16a34a); both are around 3.1–3.3:1 against white. Keep text on them at medium weight or larger, or use the deeper shade.
- **Don't** introduce new accent hues (blue, purple, amber gradients) or gradient backgrounds; the purple-to-blue gradient panel on the student FAQ page is off-system.
- **Don't** add a second typeface; hierarchy comes from Inter's size and weight.
- **Don't** add pulsing or attention-grabbing animation to buttons; plain buttons fit the "Site Office Welcome".
- **Don't** use stock imagery or illustrations in place of the real rooms and property.
