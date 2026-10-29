# Cobby ☕ (coffee + buddy)

Cobby helps coffee lovers **keep track of the coffees they buy, brew them better and discover similar coffees they will enjoy**. It also gives coffee shops and roasters a way to offer that experience to their own customers and turn it into repeat sales.

## Status: v0.1 (2026-10-29)

| Phase | What | Status | Details |
|---|---|---|---|
| 1 | **Landing page**: explains Cobby to coffee buyers and to coffee shops, in Spanish and English | ✅ **Built**, running locally. Not published yet | [docs/01-landing.md](docs/01-landing.md) |
| 2 | **The app**: photo of the bag → saved coffee → guided brew → similar coffees | Not started | [docs/02-app.md](docs/02-app.md) |

### What the landing page has

- **Hero:** "Haz una foto a tu café. Prepáralo mejor." on a warm blob background, with a phone mockup of the app built in code.
- **How it works** (four steps), **your coffee shelf**, and **Brew better** with a **working ratio calculator** (V60, AeroPress, French press, espresso).
- **Similar coffees**, linking to the shop (specialtyCoffeeMarket by default).
- **For coffee shops** on a plum band: the real benefits, "coming later" insights, and a founding-partners call to action (no prices).
- **FAQ**, a **coffee-shop contact form** and an **early-access form**, both with GDPR consent.
- **Privacy policy** and **legal notice** pages.
- **ES / EN** at `/es` and `/en`. Visitors to `/` go to their language, Spanish by default.
- specialtyCoffeeMarket's **palette and images**, subtle **animations** (off for visitors who ask for reduced motion), and cookie-free **Vercel Web Analytics**.

### Before going live

- [ ] Fill in `next-app/config/legal.ts` (name or company, tax ID, address, email). The legal pages show "[pendiente de completar]" until then
- [ ] Fill in `contactEmail` (and optionally `logo`) in `next-app/config/shop.ts`
- [x] Set up the Google Sheet for the forms ([docs/06-forms-setup.md](docs/06-forms-setup.md)); tested locally
- [ ] Have the legal texts checked (they're a starting point, not legal advice)
- [ ] Push to GitHub (`chekuda/cobby`, private)
- [ ] Publish on Vercel Hobby (free, for the demo) and add `FORMS_WEBHOOK_URL` there. Hobby is non-commercial: move to Netlify free or a paid plan once Cobby is pitched to shops for real
- [ ] Later: buy a domain (the free `.vercel.app` address comes first)

## The idea in one minute

1. You buy a bag of specialty coffee (from any roaster).
2. You **take a photo of the bag** with Cobby.
3. Cobby **reads the label**: roaster, coffee name, origin, process, variety and tasting notes.
4. The coffee is **saved to "My coffees"**, your personal coffee shelf.
5. Cobby **helps you brew it**: ratio calculator plus a step-by-step timer for your method.
6. You **rate the cup**, and Cobby learns what you like.
7. Cobby **suggests similar coffees** on the website of the coffee shop that offers Cobby.

## Two audiences

- **Coffee buyers (end users):** remember every coffee, brew it better and find their next favorite. Free.
- **Coffee shops and roasters (B2B):** a ready-made tool for their customers. Recommendations point to *their* catalog, which brings customers back to buy again. specialtyCoffeeMarket is the default shop and the first to use it. The landing page's main goal is getting coffee shops in touch.

## Main decisions

All decisions came out of four "grill-me" rounds (32 questions): [docs/04-grilling.md](docs/04-grilling.md).

- **Two languages:** Spanish and English, each at its own address (`/es`, `/en`). Spanish is the default.
- **Generic product, with specialtyCoffeeMarket as the default:** the shop's name, logo and links live in **one file**, `next-app/config/shop.ts`. Another coffee shop only edits that file. The colors are the same for every shop.
- **Honest:** "Early access" tag, works in the phone's browser (no App Store), no prices for shops, **no fake proof** (no invented testimonials, logos or numbers).
- **Forms → Google Sheet** through a Google Apps Script. Its address is a secret (`FORMS_WEBHOOK_URL`), never in the code.
- **Privacy:** consent checkbox on both forms, privacy and legal pages, cookie-free analytics, so no cookie banner.
- **Hosting:** Vercel Hobby (free) for the demo, on the `.vercel.app` address; move to Netlify free or a paid plan when it becomes commercial.
- **Design:** specialtyCoffeeMarket's palette (plum `#2E2836`, sage `#CACE91`, warm creams), its blob background and "coffee" lettering, Inter type, 12px cards, CSS animations. Details in [docs/03-design.md](docs/03-design.md).
- **Phase 2 AI:** the bag photo will be read by **Ollama** running on the owner's computer, with a vision model ([docs/02-app.md](docs/02-app.md)).

## Run the landing page

Needs **Node 26.13.0** (pinned in `.nvmrc`) and **pnpm 12**. Check with `node -v` and `pnpm -v`.

```bash
cd next-app
nvm use
pnpm install
pnpm dev
```

Then open http://localhost:3000 (it goes to `/es` or `/en`).

Other commands, inside `next-app/`:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

To test the forms locally, create `next-app/.env.local` with `FORMS_WEBHOOK_URL=…` ([docs/06-forms-setup.md](docs/06-forms-setup.md)). `.env*` files are never committed.

## Tech

- **Next.js 16** (App Router, Turbopack) + **shadcn/ui** (Base UI) + **Tailwind CSS v4** + TypeScript, in `next-app/`.
- **Node 26.13.0 LTS** and **pnpm 12**.
- **Vercel Web Analytics** (`@vercel/analytics`).
- No database: the forms write to a Google Sheet.

## Folder structure

```
cobby/
├── CLAUDE.md              ← context and rules for Claude (start here if you're Claude)
├── README.md              ← this file
├── .nvmrc                 ← Node 26.13.0
├── .claude/
│   ├── skills/            ← Claude skills: grill-me + grilling
│   └── launch.json        ← dev server config for Claude's browser preview
├── skills-lock.json       ← installed skills
├── docs/
│   ├── 01-landing.md      ← phase 1 spec, decisions, build steps
│   ├── 02-app.md          ← phase 2 spec
│   ├── 03-design.md       ← palette, type, motion, components
│   ├── 04-grilling.md     ← all grill-me rounds and decisions
│   ├── 05-copy.md         ← every text, ES and EN
│   └── 06-forms-setup.md  ← Google Sheet setup for the forms
└── next-app/              ← the landing page (Next.js)
    ├── app/[lang]/        ← the page, privacy and legal, at /es and /en
    ├── app/actions.ts     ← form submissions
    ├── components/        ← one file per section, header, footer…
    ├── config/            ← shop.ts and legal.ts (fill these in)
    ├── dictionaries/      ← all texts: es.ts and en.ts
    ├── lib/               ← languages, recipes, text helpers, cn()
    ├── public/            ← blobs.webp, coffee-lettering.webp
    └── proxy.ts           ← sends / to the visitor's language
```

Phase 2 code doesn't exist yet; it may live inside `next-app/` or in its own folder.

## Working with Claude

This project is built in a workshop style with Claude Code: Claude reads [CLAUDE.md](CLAUDE.md) and `docs/` first, doesn't write code until asked, uses `/grill-me` for big decisions, and updates the docs with every change.
