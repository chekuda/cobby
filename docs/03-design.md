# Design

> Applies to **both phases** (landing page and app).

## Origin

- **Structure** (type scale, spacing, 12px radius, flat cards, header/footer bands) comes from a Brex style reference the user shared at the start. We never use anything that identifies Brex: no name, logo, copy, images or their custom font.
- **Colors and imagery** come from **specialtyCoffeeMarket**, the user's shop (palette and background images sent by the user on 2026-10-29, as used on `specialtycoffeemarket.es/subscripciones`). This replaced the original single orange "Ember" accent.

**In one line:** a warm, calm coffee page: plum for words and main actions, sage for the touches of color, creams for the background.

## Colors

From darker to lighter:

| Name | Value | Token / utility | Use |
|---|---|---|---|
| Plum | `#2E2836` | `plum` (`bg-plum`, `text-plum`) | Headings and main text, **main buttons** (white text), the "For coffee shops" band, the footer, the focus ring |
| Stone | `#605856` | `stone` | Paragraphs, secondary text, inactive labels |
| Sand | `#CFBEB4` | `sand` | Borders and dividers, empty rating dots, big step numbers, text on the plum band |
| Cream | `#ECE7E3` | `cream` | Alternating section backgrounds, the calculator card |
| Paper | `#FFFFFF` | `paper` | Page background, cards, inputs |
| Sage | `#CACE91` | `sage` | **The colorful accent:** "Early access" tag, icon tiles, tasting-note chips, the selected calculator method, the form success message, arrow dots, the logo dot, the founding-partners box, the disc behind the hero phone |

shadcn tokens: `primary` = plum (white text), `secondary` = sage, `muted` / `accent` = cream, `border` / `input` = sand, `ring` = plum.

### Readability (contrast)

| Text | On | Ratio | Rule |
|---|---|---|---|
| Plum | white / cream / sage / sand | 14.3 / 11.6 / 8.7 / 7.9 | ✅ any size |
| Stone | white / cream | 6.9 / 5.7 | ✅ any size |
| Stone | sand | 3.9 | ⚠️ large text only |
| White / sage / cream / sand | plum | 14.3 / 8.7 / 11.6 / 7.9 | ✅ any size |
| **Sage or sand** | **white** | 1.7 / 1.8 | ❌ **never as text on white**; only as fills (tiles, chips, dots) |

### Color rules

- **Plum is the main action** (filled button with white text). On the plum band, the main box is sage with a plum button.
- **Sage is for fills, not text** on light backgrounds.
- Section rhythm, top to bottom: hero (cream with blobs) → white → cream → white → cream → **plum** → white → cream → **plum footer**.
- Error messages keep shadcn's red (`destructive`).

## Images

Both are in `next-app/public/`:

| File | What it is | Where |
|---|---|---|
| `blobs.webp` | Soft warm blob shapes (two creams) | Hero background (`bg-cover`) |
| `coffee-lettering.webp` | Hand-lettered "coffee", white on transparent | Large and faint (7% opacity) behind the "For coffee shops" plum band, drifting slowly. Only works on dark backgrounds |

Phone screens and the shelf are still **built in code**. specialtyCoffeeMarket bag photos can come later.

## Typography

- **Inter** (Google Fonts), weights **400, 500, 600**, for everything. No display font (grill round 3).
  - **Negative letter-spacing at every size:** `-0.01em` up to 24px, `-0.02em` at 36px, `-0.025em` at 48px, `-0.03em` at 72px.
  - Ligatures off: `font-feature-settings: "calt" 0, "liga" 0, "ss03", "cv01", "cv10";`
  - 500 for UI, 600 for emphasis and headings.

| Role | Size | Line height | Letter spacing | Utility |
|---|---|---|---|---|
| caption | 12px | 1.5 | -0.01em | `text-caption` |
| body-sm | 14px | 1.43 | -0.01em | `text-body-sm` |
| body | 16px | 1.5 | -0.01em | `text-body` |
| subheading | 20px | 1.4 | -0.01em | `text-subheading` |
| heading-sm | 24px | 1.33 | -0.01em | `text-heading-sm` |
| heading | 36px | 1.21 | -0.02em | `text-heading` |
| heading-lg | 48px | 1.2 | -0.025em | `text-heading-lg` |
| display | 72px | 1.0 | -0.03em | `text-display` |

On phones, the hero headline is 36px (48px on tablets, 72px on desktop).

**`cn()` must know these sizes.** `next-app/lib/utils.ts` configures `cn` so `text-body` & co. count as font sizes; otherwise `cn` treats them as colors and drops a real color (it hid the hero button's text once). **Always import `cn` from `@/lib/utils`**, never from `"cn"`.

## Spacing, shapes and layout

- **Base unit 8px.** Scale: 8, 16, 24, 32, 48, 72, 80, 160.
- **Radius:** **12px** for buttons, inputs and cards; **6px** (`rounded-sm`) for tags and chips. Circles for dots. The phone mockup frame is an illustration, so it uses a large radius.
- **Max width 1200px**, centered. Section padding 48–80px. Card padding 24–32px.
- **On phones:** 16px side margin and no horizontal scroll.
- **No shadows** on cards; separation comes from color (white on cream, cream on white, translucent white on plum). Floating elements (the phone menu) use one soft shadow.
- **Sticky header:** white at 90% with a blur, so it stays readable over every band.

## Motion

All animation lives in `next-app/app/globals.css` and is **off for visitors who ask for reduced motion** (`prefers-reduced-motion`). No animation library and no JavaScript for scrolling effects.

| Class | Effect | Where |
|---|---|---|
| `anim-rise` + `--delay` | Fade up on page load, staggered | Hero: tag, headline, text, buttons, note, phone |
| `reveal` | Fade up as the section scrolls into view (CSS scroll-driven animation; browsers without it just show the content) | Every `Section` |
| `anim-float` | Gentle up-and-down float | Hero phone |
| `anim-pulse` | Slow breathing | Sage disc behind the hero phone |
| `anim-drift` | Very slow side-to-side drift | "coffee" lettering on the plum band |
| `anim-pop` | Quick scale-in when a value changes | Calculator results and cup count, form success message |
| `lift` | Moves up 2px on hover | Buttons, step and benefit cards |

Keep motion subtle: nothing loops fast, nothing blocks reading, and the page must be complete with animations off.

## Components (as built)

| Component | Style |
|---|---|
| **Header** | Sticky, white/90 + blur. Text logo "cobby" + sage dot, plum links, ES/EN switch, plum button |
| **Primary button** | Plum fill, white text, 12px, Inter 600 (`buttonVariants()` + `lift`) |
| **Secondary link** | Plum text + arrow inside a sage dot (`ArrowDot`) |
| **Outline button** | Plum border, plum text (buyer form) |
| **Tag** | Sage fill, plum text, 6px |
| **Icon tile** | Sage square, plum icon (`IconTile`) |
| **Cards** | Cream on white bands, white on cream bands, translucent white on plum |
| **Inputs** | White, sand border, 12px, plum focus ring |
| **Footer** | Plum band, white logo, sand links |

## Do's and don'ts

**Do**
- Use plum for the main action and sage for fills.
- Alternate white and cream bands; use plum for one feature band and the footer.
- Check contrast with the table above before putting text on a new color.
- Wrap any new animation in the reduced-motion rule.

**Don't**
- Don't put sage or sand text on white.
- Don't add colors outside the palette (except the red for errors).
- Don't use shadows on cards or in-between radius values (8px, 10px).
- Don't import `cn` from `"cn"` directly.

## Still to decide

- [x] ~~Display font~~ → Inter only (grill round 3)
- [x] ~~Whether the shop config can change colors~~ → no; the palette is the same for every shop
- [x] ~~Cobby logo~~ → text logo with a sage dot for now; a real logo later
- [x] ~~Images~~ → `blobs.webp` and `coffee-lettering.webp` (from specialtyCoffeeMarket); phone screens in code
- [x] ~~Dark mode~~ → none in phase 1
- [ ] Whether to match specialtyCoffeeMarket's rounder font and squarer buttons (kept Inter and 12px for now)
- [ ] **The palette now comes from specialtyCoffeeMarket.** If Cobby is offered to other shops, decide whether Cobby keeps this palette as its own brand
