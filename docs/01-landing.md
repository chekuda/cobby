# Phase 1: Landing page

## Goal

One web page that explains Cobby to two audiences:

1. **Coffee buyers:** what Cobby does for them (save their coffees, brew them better, find similar coffees).
2. **Coffee shops and roasters:** how they can offer Cobby to their customers and why it brings them more sales.

The landing page does **not** need the app to work. It shows the idea and collects interest.

## Decisions (grill round 1, see [04-grilling.md](04-grilling.md))

- **Main conversion: coffee-shop contact.** The hero tells the buyers' story, but the main goal is getting coffee shops to get in touch (they're who pay). Buyer early-access signups are secondary.
- **Honest status:** an **"Early access"** tag. No button or text suggests the app can be used today.
- **Web app:** described as working in the phone's browser ("Works on your phone, no download needed"). **No mention of the App Store or Google Play.**
- **Target buyer:** a home brewer in **Spain** who buys specialty coffee bags online. English serves foreigners in Spain and future markets.
- **What shops get:** only the real phase 2 benefits: **their brand, "similar coffees" linking to their shop, customers coming back to buy again.** Customer taste insights appear under a small **"coming later"** label.
- **No prices.** Shops see "Founding partners: talk to us".
- **Live demo:** a small **working ratio calculator** in "Brew better".
- **Logo for now:** text logo "cobby" in Inter 600 with a sage dot (see [03-design.md](03-design.md)).
- **Images:** phone screens are **mockups built in code**; specialtyCoffeeMarket bag photos come later.
- **Hosting: Vercel.**

### Grill round 2

- **Coffee-shop form:** name, shop name, email, website (optional), message (optional).
- **Buyer form:** email only; the page language (ES/EN) is saved with it.
- **Form data goes to a Google Sheet**, through a Google Apps Script web address. That address is a secret, kept as the Vercel environment variable `FORMS_WEBHOOK_URL` (new name), never in the code or docs.
- **Legal (GDPR, Spain):** a consent checkbox on both forms, plus a **privacy policy** page and a **legal notice** page, in ES and EN.
- **Legally responsible: the user, under the business that runs specialtyCoffeeMarket**, for now. Legal details live in a config file, not in the texts.
- **Analytics: Vercel Web Analytics** (no cookies), so **no cookie banner**.
- **Domain:** the free `.vercel.app` address first; a domain later.
- **Free for buyers;** shops pay. FAQ: "Free for coffee lovers".
- **Working hero copy** (to polish once the sections are built):
  - **ES:** "Haz una foto a tu café. Prepáralo mejor." / "Cobby lee la bolsa, guarda tus cafés y te guía al prepararlos. Y te descubre cafés parecidos en tu tienda favorita."
  - **EN:** "Snap your bag. Brew it better." / "Cobby reads the bag, keeps your coffees and guides every brew. Then finds similar coffees at your favorite shop."

## Languages

- **Spanish and English, each at its own address: `/es` and `/en`** (grill round 4). Google finds both versions, and a link can be shared in one language. The **ES / EN** switch in the top menu changes language instantly.
- **Visitors to `/`** go to their browser's language (Spanish browser → `/es`, anything else → `/en`). If it can't be detected, **Spanish** is used.
- The choice is remembered for the next visit.
- All the texts live in one place (one object per language), so they are easy to edit and a third language can be added later.
- Each language is **written to sound natural**, not translated word for word.

## Sections (top to bottom)

| # | Section | Audience | Content |
|---|---|---|---|
| 1 | **Menu** | Both | Text logo "cobby", links (How it works · Brew · For coffee shops · FAQ), ES / EN switch, "Bring Cobby to your shop" button (plum) |
| 2 | **Hero** | Both | "Early access" tag. Main promise (e.g. EN "Snap your bag. Brew it better. Find your next favorite." / ES "Haz una foto a tu café. Prepáralo mejor. Descubre tu próximo favorito."). A phone mockup built in code shows the app. Main button for coffee shops (plum), secondary ghost link for buyers' early access |
| 3 | **How it works** | Buyers | 4 steps: **Snap** the bag → **Cobby reads** name, origin, process and notes → **Save** to "My coffees" → **Brew** with a guided recipe |
| 4 | **Save your coffees** | Buyers | Your personal coffee shelf: every bag with photo, notes, roast date and your rating |
| 5 | **Brew better** | Buyers | Ratio calculator and step-by-step timer for V60, AeroPress, French press and espresso. Includes a **small working calculator** right on the page |
| 6 | **Find similar coffees** | Buyers | Cobby learns your taste (fruity, chocolatey, floral…) and suggests similar coffees in the shop |
| 7 | **For coffee shops** | Shops | Your brand on the app · "similar coffees" from *your* catalog · customers come back to reorder · works next to any online store. "Coming later": learn what your customers like. "Founding partners: talk to us", no prices |
| 8 | **FAQ** | Both | Which bags work? Where are my coffees saved? Does it cost anything? Which languages? Do I need to download anything? (No, it works in the browser) |
| 9 | **Call to action** | Both | Main: "Bring Cobby to your shop" (coffee shops). Secondary: "Get early access" (buyers) |
| 10 | **Footer** | Both | Logo, short description, language switch, contact, links to the privacy policy and legal notice |
| — | **Legal pages** | Both | Privacy policy and legal notice, ES and EN, details from the legal config |

## The shop: specialtyCoffeeMarket by default, easy to change

The landing page is generic, but it **shows specialtyCoffeeMarket by default**: its name, logo and links appear wherever the page talks about "the shop" (for example "Find similar coffees at specialtyCoffeeMarket", or the shop's logo in the phone mockup).

All shop details live in **one file**, `next-app/config/shop.ts` (new, not created yet; grill round 3). The page reads everything from it. **To change the shop, you edit only that file**, nothing else. Legal details live in a separate file, `next-app/config/legal.ts` (new, not created yet).

| Field | What it is | specialtyCoffeeMarket value |
|---|---|---|
| `name` | Shop name, as shown on the page | `specialtyCoffeeMarket` |
| `logo` | Path to the logo in `next-app/public/` (SVG or PNG). Empty → the name is shown as text | added by the user |
| `websiteUrl` | Shop home page | `https://www.specialtycoffeemarket.es` (checked live) |
| `shopUrl` | Page with all the coffees (target of "Find similar coffees") | `https://www.specialtycoffeemarket.es/category/all-products` (checked live) |
| `contactEmail` | Where coffee shops and buyers can write | typed in by the user |
| `tagline` | Optional short line about the shop, **in ES and EN** | optional |

**No color field:** every shop uses the same palette (grill round 3; palette updated to specialtyCoffeeMarket's on 2026-10-29).

`config/legal.ts` holds the legal details for the privacy policy and legal notice: name or company, tax ID, address and contact email. **The user types them in directly**, so they never go through the chat. Both files are created with empty, labelled fields.

Rules:
- **No shop detail is written anywhere else** (not in the HTML, not in the texts). Texts use a placeholder like `{shopName}` that is filled in from the config.
- If a field is empty (for example no logo), the page still works and shows a neutral version.
- The "For coffee shops" section still speaks to **any** shop ("your brand, your catalog"). specialtyCoffeeMarket appears there as the example of how it looks.

## Content rules

- **Generic copy:** the texts work for any coffee shop. The shop's name comes from `config/shop.ts` (default specialtyCoffeeMarket).
- **No fake proof:** no invented testimonials, partner logos or numbers.
- **Clear, short sentences.** The buyer part speaks in the second person ("your coffees"). The coffee-shop part talks about the business ("your customers", "your catalog").

## Technical approach

- **Next.js 16 + shadcn/ui**, in the `next-app/` folder. Created by the user with `pnpm dlx shadcn@latest init --preset b6YpB79lyq --template next`.
  - React 19, TypeScript, Tailwind CSS v4, shadcn components built on Base UI (`@base-ui/react`), `lucide-react` icons, `next-themes`.
  - The shadcn theme is aligned with [03-design.md](03-design.md) (plum and sage palette, Inter, 12px, light only, animations).
  - `cn` comes from the `cn` package (shadcn's replacement for clsx + tailwind-merge), via `lib/utils.ts`.
  - Runtime: **Node 26.13.0 LTS** locally (`.nvmrc`); `engines` is `>=24`, so **Vercel builds with Node 24** (it has no Node 26; `>=26.13.0` failed there). Package manager: **pnpm 12**. Scripts: `dev`, `build`, `lint`, `typecheck`, `format`.
  - **Next.js 16 has breaking changes:** read `next-app/AGENTS.md` and the guides in `next-app/node_modules/next/dist/docs/` before writing code.
- The sections are static; only the form submissions run on the server.
- The language switch, the shop details (read from `config/shop.ts`) and the animations live in the React components.
- **Mobile first:** it must look good on a phone, since that's where the app will be used.
- **The forms** (early access and coffee shops) send their data to a Google Sheet through Google Apps Script (`FORMS_WEBHOOK_URL`, a Vercel secret). Because of this, the forms need a small server part (a Next.js server action or route), so the page is not 100% static.
- **Hosting: Vercel Hobby (free)** for the demo, on the `.vercel.app` address (grill round 5: user's decision). Hobby is for non-commercial use, so move to Netlify's free plan or a paid Vercel plan once Cobby is actively pitched to shops or earns money. **Analytics: Vercel Web Analytics** (no cookies).

## Build order (grill round 4)

One step at a time; the user reviews each before the next.

1. ✅ Config files (`config/shop.ts`, `config/legal.ts`), layout, menu and language switch (`/es`, `/en`). Done 2026-10-29, see "How step 1 works" below
2. ✅ Hero with the phone mockup. Done 2026-10-29, see "How step 2 works" below
3. ✅ Sections 3–8
4. ✅ The ratio calculator (recipes in [05-copy.md](05-copy.md))
5. ✅ Forms + Google Sheet (code done; the Sheet itself is set up by the user with [06-forms-setup.md](06-forms-setup.md)): Claude writes the Apps Script and a step-by-step guide in `docs/06-forms-setup.md` (new); the user creates the Sheet, pastes the script and sets `FORMS_WEBHOOK_URL` in Vercel
6. ✅ Legal pages (texts done; the details in `config/legal.ts` are filled in by the user)
7. ⏳ Publish on Vercel Hobby (demo): import the GitHub repo `chekuda/cobby` with Root Directory `next-app` and set `FORMS_WEBHOOK_URL`. Needs the user's GitHub push and Vercel account

Steps 3–6 were built together on 2026-10-29, at the user's request.

## How step 1 works

| File (in `next-app/`) | What it does |
|---|---|
| `config/shop.ts` | Shop details (default specialtyCoffeeMarket). `logo` and `contactEmail` are empty until the user fills them |
| `config/legal.ts` | Legal details, all empty until the user fills them |
| `lib/i18n.ts` | Languages (`es`, `en`), default `es`, the `cobby-lang` cookie name, and `pickLocale` (reads the browser's language) |
| `dictionaries/es.ts`, `dictionaries/en.ts` | All page texts, one file per language (from [05-copy.md](05-copy.md)). `en.ts` must have the same keys as `es.ts` (TypeScript checks it) |
| `proxy.ts` | Sends `/` (and any address without a language) to `/es` or `/en`: first the saved choice, then the browser's language, else Spanish. Visiting `/es` or `/en` saves the choice in the `cobby-lang` cookie for a year |
| `app/[lang]/layout.tsx` | The page frame for both languages: `<html lang>`, Inter, page title and description per language, the menu. Only `es` and `en` exist (others give 404) |
| `app/[lang]/page.tsx` | The page content. For now a placeholder line; sections come in the next steps |
| `components/site-header.tsx` | The menu: text logo "cobby" with a sage dot (`components/logo.tsx`), section links, ES / EN switch, plum button "Bring Cobby to your shop" (goes to `#contact`). On phones, the links and the button are inside a "Menu" dropdown |

Section anchors (same in both languages): `#how-it-works`, `#brew`, `#for-shops`, `#faq`, `#contact`, and `#early-access` (the buyer form, linked from the hero). They start working as the sections are built.

## How step 2 works

| File (in `next-app/`) | What it does |
|---|---|
| `components/hero.tsx` | The hero: "Early access" tag, headline, subtitle, plum button "Bring Cobby to your shop" (→ `#contact`), link "I want to try it" with an arrow in a sage dot (→ `#early-access`), and the "works in the browser" note. Text on the left, phone on the right on desktop; stacked on phones |
| `components/phone-mockup.tsx` | A phone built in code showing a saved coffee's card: bag drawing, name, origin and process, tasting-note chips, roast date, rating, "Brew it" button and "Similar at {shopName}" |
| `lib/text.ts` | `fill()`: fills `{shopName}`-style placeholders in dictionary texts |
| `dictionaries/*.ts` | New `hero` and `mockup` texts |

- The example coffee in the mockup (Guji Hambela, Ethiopia, washed) is an **illustration of the app**, not a product claim. Its texts are in the dictionaries, so they can be changed there.
- The headline is 36px on phones, 48px on tablets and 72px on desktop (the design's type scale).
- The hero sits on `blobs.webp`; the phone floats over a sage disc. Colors and animations: see [03-design.md](03-design.md).
- The phone frame uses a large corner radius because it's a drawing of a phone, not a page component. The 12px rule still applies to everything else.

## How steps 3–6 work

| File (in `next-app/`) | What it does |
|---|---|
| `app/[lang]/page.tsx` | The page, top to bottom: hero, how it works, shelf, brew, similar coffees, for shops, FAQ, contact |
| `components/section.tsx` | Shared band (Paper or Fog, 1200px column), section title, and the 1–5 rating dots |
| `components/how-it-works.tsx` | Section 3: four step cards (Fog band) |
| `components/shelf.tsx` | Section 4: text + a shelf of three example coffees built in code |
| `components/brew-section.tsx`, `components/ratio-calculator.tsx`, `lib/recipes.ts` | Section 5: text + the working calculator (method, cups or shots → coffee, water or drink weight, temperature, grind). The selected method is sage. V60 up to 4 cups, AeroPress 2, French press 6, espresso 2 shots |
| `components/similar.tsx` | Section 6: text + link to the shop's page (`shopUrl`, opens in a new tab) |
| `components/for-shops.tsx` | Section 7: four benefits, "Coming later" insights, how the shop's name appears, and the founding-partners box (sage) with the plum button, on the plum band with the drifting "coffee" lettering (→ `#contact`) |
| `components/faq.tsx` | Section 8: questions that open and close (native `<details>`, no JavaScript) |
| `components/contact.tsx`, `components/contact-forms.tsx` | Section 9: coffee-shop form (plum button) and buyer form (`#early-access`, outlined button). Errors under each field; what was typed stays after an error; a hidden `company` field catches bots |
| `app/actions.ts` | Server action: checks the fields again on the server, then sends them to the Google Sheet (`FORMS_WEBHOOK_URL`). Without that variable the form shows "Couldn't send it" and the server logs `Forms: FORMS_WEBHOOK_URL is not set` |
| `components/site-footer.tsx` | Footer (Abyss): logo, line, Privacy, Legal notice, Contact (only when `contactEmail` is filled in), language switch |
| `components/language-switch.tsx` | ES / EN switch that keeps the current page (`/es/privacy` ↔ `/en/privacy`) |
| `app/[lang]/privacy/page.tsx`, `app/[lang]/legal/page.tsx`, `components/legal-page.tsx` | Privacy policy and legal notice at `/es/privacy`, `/en/privacy`, `/es/legal`, `/en/legal`. Missing details from `config/legal.ts` show as "[pendiente de completar]" / "[to be completed]" |
| `app/[lang]/layout.tsx` | Adds the footer and Vercel Web Analytics (`@vercel/analytics`, no cookies) |

Texts added to the dictionaries beyond [05-copy.md](05-copy.md): FAQ title, "See the coffees at {shopName}", the example shelf coffees, calculator labels (shots, one more/less, in the cup), form error messages, the "Coming later" tag, and the full legal page texts. They're listed in 05-copy.md too.

**About the `cobby-lang` cookie:** it only remembers the language the visitor chose, so it counts as a preference cookie that doesn't need a cookie banner. The privacy policy (step 6) should still mention it.

## Still to define in the workshop

- [x] ~~Design: colors, fonts, style~~ → [03-design.md](03-design.md) (display font, logo and images still open there)
- [x] ~~Copy in both languages~~ → working copy approved in [05-copy.md](05-copy.md) (wording can change while building)
- [x] ~~Logo for Cobby~~ → text logo for now (a real logo later)
- [x] ~~Where the forms send the data~~ → Google Sheet via Apps Script (`FORMS_WEBHOOK_URL`)
- [ ] Legal details (name or company, tax ID, address, contact email) in `config/legal.ts`: the pages show "[to be completed]" until then
- [ ] Google Sheet + Apps Script + `FORMS_WEBHOOK_URL` ([06-forms-setup.md](06-forms-setup.md))
- [ ] Publish on Vercel (step 7)
- [x] ~~Whether specialtyCoffeeMarket appears~~ → yes, as the default shop, set in `config/shop.ts`
- [x] ~~Fields and values of the shop config~~ → `config/shop.ts`, values above (grill round 3)
- [ ] Shop logo file and contact email (the user adds them)
- [x] ~~Hosting~~ → Vercel
- [ ] Domain (`.vercel.app` for now)
