# CLAUDE.md

**Cobby** (coffee + buddy) helps coffee buyers keep track of the coffees they buy, brew them better and discover similar coffees. It also lets coffee shops and roasters offer that experience to their own customers. Overview for humans in [`README.md`](README.md).

## Status (v0.1, 2026-10-29)

| Phase | State |
|---|---|
| 1. **Landing page** (`next-app/`) | **Built**: every section, working ratio calculator, two forms, privacy and legal pages, ES/EN, specialtyCoffeeMarket palette, animations. Build steps 1–6 of 7 done. **Step 7, publishing on Vercel, is pending.** Spec: [`docs/01-landing.md`](docs/01-landing.md) |
| 2. **The app** (photo of the bag → Ollama reads the label → "My coffees" → guided brew → rating → similar coffees) | **Not started.** Spec: [`docs/02-app.md`](docs/02-app.md). Starts only when the user says the landing page is done, with its own grill-me rounds first |

### Waiting on the user (don't do these for them)

- Fill in `next-app/config/legal.ts` (name or company, tax ID, address, email). Until then the legal pages show "[pendiente de completar]". **Never ask for these details in the chat.**
- Fill in `contactEmail` (and optionally `logo`) in `next-app/config/shop.ts`.
- Create the Google Sheet + Apps Script and set `FORMS_WEBHOOK_URL` ([`docs/06-forms-setup.md`](docs/06-forms-setup.md)). Until then the forms answer "Couldn't send it".
- Have the legal texts checked (they're a starting point, not legal advice).
- Publish on Vercel (step 7): needs the user's Vercel account. A `vercel` CLI attempt was started but not finished; nothing is linked yet (no `.vercel/`).

## How we work

- **Workshop mode.** The project is built together with the user, step by step. **Don't build, scaffold or write code until the user asks for it.** When they are explaining, listen, summarize and ask.
- **Big decisions go through `/grill-me` first** (rounds of numbered questions with a recommended answer; record each decision in [`docs/04-grilling.md`](docs/04-grilling.md) and move it into the right spec).
- **Read `docs/` before changing anything**, at least the spec for the phase and [`docs/03-design.md`](docs/03-design.md).
- **Update the docs with every change.** If code changes behavior or a decision is made, update `README.md`, this file when it's relevant, and the affected `docs/` file in the same change. Tick the "Still to define" checklists.
- **Check before saying it's done:** `pnpm typecheck`, `pnpm lint`, `pnpm build` (inside `next-app/`), and look at it in the browser at desktop and phone width (375px, no horizontal scroll).
- **Commits:** only when the user asks. See "Git" below.

## Product rules

- **Two languages: Spanish and English**, at `/es` and `/en`. Every visible text exists in both, written to sound natural (not translated word for word). Spanish is the default.
- **Generic, with specialtyCoffeeMarket as the default shop.** All shop details live **only** in `next-app/config/shop.ts`. Never hard-code a shop's name, links or logo anywhere else; use `{shopName}` in texts and `fill()`.
- **One palette for every shop** (specialtyCoffeeMarket's). The shop config has no color field.
- **No fake proof:** no invented testimonials, partner logos, numbers or reviews. Example coffees in mockups are illustrations, labelled as such.
- **Honest status:** "Early access", no App Store / Google Play, no prices for shops ("founding partners").
- **Two audiences:** buyer copy speaks to the person ("your coffees"); coffee-shop copy talks about the business ("your customers", "your catalog"). The main conversion is coffee-shop contact.
- **Privacy:** GDPR consent checkbox on both forms; no cookies except `cobby-lang` (language preference); Vercel Web Analytics (cookie-free), so no cookie banner.

## Code map (`next-app/`)

| Where | What |
|---|---|
| `dictionaries/es.ts`, `dictionaries/en.ts` | **All visible text.** `en.ts` is typed against `es.ts`, so a missing key fails the typecheck. Never put copy in components |
| `config/shop.ts`, `config/legal.ts` | Shop details and legal details (see above) |
| `app/[lang]/layout.tsx` | Root layout per language: `<html lang>`, Inter, metadata, header, footer, Vercel Analytics. Only `es` and `en` exist (`dynamicParams = false`) |
| `app/[lang]/page.tsx` | The landing page, section by section |
| `app/[lang]/privacy/`, `app/[lang]/legal/` | Legal pages (`components/legal-page.tsx`) |
| `app/actions.ts` | Server actions for the two forms: validation, honeypot (`company`), POST to `FORMS_WEBHOOK_URL` |
| `proxy.ts` | Next.js 16 "proxy" (old middleware): sends `/` to `/es` or `/en` (cookie → browser language → Spanish) and saves `cobby-lang` |
| `lib/i18n.ts` | Locales, default, cookie name, `pickLocale()` |
| `lib/text.ts` | `fill()` for `{placeholders}` |
| `lib/recipes.ts` | Calculator recipes (approved in grill round 4) |
| `lib/utils.ts` | **`cn()` configured with the custom text sizes.** Always import `cn` from `@/lib/utils`, never from `"cn"`, or `text-body` & co. will wipe out text colors |
| `components/section.tsx` | `Section` (paper / cream / plum band + scroll reveal), `SectionTitle`, `IconTile`, `RatingDots`, `ArrowDot` |
| `components/*.tsx` | One file per section (`hero`, `how-it-works`, `shelf`, `brew-section` + `ratio-calculator`, `similar`, `for-shops`, `faq`, `contact` + `contact-forms`), plus `site-header`, `site-footer`, `language-switch`, `logo`, `phone-mockup` |
| `app/globals.css` | Theme tokens (palette → shadcn tokens), type scale utilities (`text-caption` … `text-display`), animation classes |
| `public/blobs.webp`, `public/coffee-lettering.webp` | specialtyCoffeeMarket images: hero background and the "coffee" lettering on the plum band |

## Design (summary; full rules in [`docs/03-design.md`](docs/03-design.md))

- **Palette (specialtyCoffeeMarket):** plum `#2E2836` (text, main buttons, plum band, footer), stone `#605856` (paragraphs), sand `#CFBEB4` (borders, text on plum), cream `#ECE7E3` (alternating bands), white, sage `#CACE91` (the colorful accent, **fills only, never text on white**).
- **Structure** from a Brex style reference (Inter with negative tracking, 12px radius, 6px for tags, flat cards, 1200px column). **Never use anything that identifies Brex.**
- **Motion:** CSS only, in `globals.css` (`anim-rise`, `reveal`, `anim-float`, `anim-pulse`, `anim-drift`, `anim-pop`, `lift`), all inside `prefers-reduced-motion: no-preference`. New animations must follow the same rule.
- Don't invent what the design doc leaves open (real logo, other fonts…); propose it and mark it as a proposal.

## Commands

All inside `next-app/`:

```bash
nvm use            # Node 26.13.0
pnpm install
pnpm dev           # http://localhost:3000 → /es or /en
pnpm typecheck
pnpm lint
pnpm build
```

## Environment and known issues

- **Node 26.13.0 LTS (arm64)**, pinned in `.nvmrc` (root and `next-app/`) and in `package.json` `engines`; it's the user's nvm default. The old Node 20 is the Intel build (under Rosetta).
- **pnpm 12**, installed globally on Node 26. The old standalone pnpm 10 (Intel) was removed; its `PNPM_HOME` block in `~/.zshrc` is commented out (backup: `~/.zshrc.backup-2026-10-29`).
- **pnpm 12 refuses packages published less than a day ago** (`minimumReleaseAge`). If an install fails because of it, rebuild the lockfile (`pnpm clean --lockfile`, then `pnpm install`); don't turn the rule off. `pnpm-workspace.yaml` has one exception that pnpm added itself (`lucide-react@1.64.0`); it can be removed once that version is older.
- **Next.js 16 has breaking changes:** read `next-app/AGENTS.md` and `next-app/node_modules/next/dist/docs/` before writing Next.js code (`proxy.ts` instead of middleware, `params` is a Promise, `PageProps` / `LayoutProps` helpers).
- **Preview error `lightningcss.darwin-x64.node`:** some process is running the old Intel Node 20. Restart the Claude app or terminal, then delete `next-app/.next` (Turbopack caches the failure).
- **Browser preview tool:** `.claude/launch.json` has a `cobby-landing` config, but the preview tool may still look in the previous session folder; starting `pnpm dev` from a shell works.
- **Skills:** `grill-me` and `grilling` (from `mattpocock/skills`) in `.claude/skills/`, listed in `skills-lock.json`. The user starts `/grill-me`.
- **Secrets** (`FORMS_WEBHOOK_URL`, any API key, ngrok URL or token) are never printed, written to docs or committed. Only their names are mentioned. `.env*` files are git-ignored; local secrets go in `next-app/.env.local`.

## Git

- **One repo at the `cobby/` root** (created 2026-10-29), branch `main`. It contains `docs/`, `.claude/`, and `next-app/`. (`next-app/` used to have its own repo with only the shadcn template commit; that `.git` was moved out to a backup when the root repo was created.)
- Ignored: `node_modules/`, `.next/`, `.env*`, `.vercel/`, `.DS_Store`, `next-env.d.ts`, build output (root `.gitignore` + `next-app/.gitignore`).
- **Commit only when the user asks.** Short imperative messages in English. End every commit message with the attribution line the session asks for (currently `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`).
- Before committing: typecheck, lint and build pass; no secrets or personal data in the diff (`config/legal.ts` stays empty in git unless the user fills it in themselves).
- There is no remote yet. Pushing (GitHub) and connecting Vercel are the user's call.

## Phase 2 notes (for later)

- **Label reading:** **Ollama** on the user's computer with a vision model (`qwen2.5vl:7b` or `llama3.2-vision`, **not tested yet**), returning the label fields as JSON.
- **A website can't call a local Ollama directly:** it needs a small in-between service on that computer, reachable from the internet (for example ngrok, as in the `wix-scm` background-removal service). Label reading only works while that computer is on.
- **App data** is saved on the user's device (in the browser) in the first version. No accounts.

## Relation to `wix-scm`

`wix-scm` (`~/Desktop/me/code/wix-scm`) is a separate project: the Wix site and product importer for specialtyCoffeeMarket. Ideas can be reused from it (for example the flavor families in `content/flavorKeywords.js` or the local service with ngrok). **Don't change `wix-scm` from here.**

## Docs

| File | Content |
|---|---|
| `README.md` | Overview for humans: what Cobby is, status, how to run it, structure, what's pending |
| [`docs/01-landing.md`](docs/01-landing.md) | Phase 1 spec: decisions, sections, languages, shop config, build order, how each build step works |
| [`docs/02-app.md`](docs/02-app.md) | Phase 2 spec: flow, screens, label fields, Ollama, data, similar coffees, B2B |
| [`docs/03-design.md`](docs/03-design.md) | Design for both phases: palette, contrast, images, type, spacing, motion, components, do's and don'ts |
| [`docs/04-grilling.md`](docs/04-grilling.md) | All grill-me rounds (32 decisions). Check it before deciding anything |
| [`docs/05-copy.md`](docs/05-copy.md) | Texts for every landing section, ES and EN |
| [`docs/06-forms-setup.md`](docs/06-forms-setup.md) | How the user sets up the Google Sheet, the Apps Script and `FORMS_WEBHOOK_URL` |
