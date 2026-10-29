# Grilling: open questions

Questions from the `grill-me` method (see `.claude/skills/grilling/SKILL.md`), worked in rounds. Each question has a recommended answer (➡️). Answering **"yes"** accepts it. When a question is answered, write the decision here and move it into the right spec (`01-landing.md`, `02-app.md` or `03-design.md`).

## Round 1: the landing page (2026-10-29), answered: all recommendations accepted

| # | Question | Recommended answer | Decision |
|---|---|---|---|
| Q1 | **Main goal.** Does the page push coffee-shop contact as the main conversion, with the buyers' story in the hero? Or buyer early access first? | Buyers' story in the hero, coffee-shop contact as the main conversion (shops are who pay) | ✅ Accepted |
| Q2 | **Honesty about status.** Does the page say clearly "Early access / coming soon"? | Yes, an "Early access" tag and no button that pretends it can be used today | ✅ Accepted |
| Q3 | **Web app, not App Store.** Is the app described as working in the phone's browser, without mentioning the App Store or Google Play? | Yes: "Works on your phone, no download needed" | ✅ Accepted |
| Q4 | **Target buyer.** Is it a home brewer in Spain who buys specialty coffee bags online? | Yes. Spain first; English for foreigners in Spain and future markets | ✅ Accepted |
| Q5 | **What shops get.** Only the real phase 2 benefits: their brand, "similar coffees" linking to their shop, repeat purchases. Insights? | The three real benefits; insights under a small "coming later" label | ✅ Accepted |
| Q6 | **Pricing.** No prices for shops, only "Founding partners: talk to us"? | Yes, no prices until the model is decided | ✅ Accepted |
| Q7 | **Live demo.** A small working ratio calculator in "Brew better"? | Yes | ✅ Accepted |
| Q8 | **Logo for now.** Text logo "cobby" in Inter 600 with an Ember detail? | Yes, a real logo can come later | ✅ Accepted |
| Q9 | **Images.** Phone screens as mockups built in code, plus specialtyCoffeeMarket bag photos later? | Yes | ✅ Accepted |
| Q10 | **Hosting.** Publish the landing page on Vercel? | Yes. Next round: where the forms send data, and the domain | ✅ Accepted |

## Round 2: forms, legal, domain and copy (2026-10-29), answered: all recommendations accepted

| # | Question | Recommended answer | Decision |
|---|---|---|---|
| Q11 | **Coffee-shop form fields.** Name, shop name, email, website (optional), message (optional)? | Yes, short so more shops send it | ✅ Accepted |
| Q12 | **Buyer form fields.** Email only (the page language is saved with it)? | Yes | ✅ Accepted |
| Q13 | **Where form data goes.** A Google Sheet, through a Google Apps Script web address kept as a Vercel secret (new name: `FORMS_WEBHOOK_URL`)? | Yes: free, one list you can read and share | ✅ Accepted |
| Q14 | **Legal (GDPR, Spain).** Consent checkbox on both forms + a simple privacy policy and legal notice page in ES and EN? | Yes, required to collect emails in Spain | ✅ Accepted |
| Q15 | **Who is legally responsible.** You, under the same business that runs specialtyCoffeeMarket? | Yes, for now. Legal details go in a config file, not in the texts | ✅ Accepted |
| Q16 | **Analytics.** Vercel Web Analytics (no cookies), so no cookie banner? | Yes | ✅ Accepted |
| Q17 | **Domain.** Start on the free `.vercel.app` address and buy a domain later? | Yes | ✅ Accepted |
| Q18 | **Free for buyers.** Is Cobby free for coffee buyers, with shops paying? | Yes. The FAQ says "Free for coffee lovers" | ✅ Accepted |
| Q19 | **Working hero copy.** Use the proposed headline and subtitle (ES/EN) as working copy, and polish it once the sections are built? | Yes | ✅ Accepted |

## Round 3: config files, open design points, copy (2026-10-29), answered: all recommendations accepted

Facts looked up (read-only) in `wix-scm` and on the live site: the shop's website is `https://www.specialtycoffeemarket.es`, and `/category/all-products` exists (200); `/shop` and `/tienda` don't (404). No logo file or contact email was found.

| # | Question | Recommended answer | Decision |
|---|---|---|---|
| Q20 | **Where the config files live.** Since the project is TypeScript and Next.js can only import files inside `next-app/`: `next-app/config/shop.ts` (shop) and `next-app/config/legal.ts` (legal details), both new, instead of `shop.config.js` in the root? | Yes | ✅ Accepted |
| Q21 | **Default shop values.** name `specialtyCoffeeMarket`, websiteUrl `https://www.specialtycoffeemarket.es`, shopUrl `https://www.specialtycoffeemarket.es/category/all-products`? | Yes (both addresses checked live) | ✅ Accepted |
| Q22 | **Shop logo.** You add the logo file (SVG or PNG) to `next-app/public/`; until then the page shows the shop name as text? | Yes | ✅ Accepted |
| Q23 | **Contact email and legal details.** You type them yourself into `config/shop.ts` and `config/legal.ts` (created with empty, labelled fields), instead of pasting personal data in the chat? | Yes | ✅ Accepted |
| Q24 | **Shop color.** Ember stays the only accent for every shop; the shop config doesn't change colors? | Yes: one design, always consistent | ✅ Accepted |
| Q25 | **Dark mode.** None in phase 1? | Yes | ✅ Accepted |
| Q26 | **Display font.** Inter only, no extra display font? | Yes | ✅ Accepted |
| Q27 | **Copy for all sections.** I draft every section's text in ES and EN in a new `docs/05-copy.md` for you to review before anything is built? | Yes | ✅ Accepted |

## Round 4: copy, recipes, language URLs, forms setup, build order (2026-10-29), answered: all recommendations accepted

| # | Question | Recommended answer | Decision |
|---|---|---|---|
| Q28 | **Copy draft.** Approve [05-copy.md](05-copy.md) as working copy, and change wording as we build? | Yes | ✅ Accepted |
| Q29 | **Calculator recipes.** Use the proposed recipes (V60 1:16, AeroPress 1:15, French press 1:15, espresso 1:2, with the temperatures and grinds in the table)? | Yes | ✅ Accepted |
| Q30 | **Language in the address.** Each language gets its own address (`/es` and `/en`), so Google finds both and links can be shared in one language. The ES/EN switch stays instant. Visitors to `/` go to their browser's language (Spanish if unknown)? | Yes | ✅ Accepted |
| Q31 | **Forms setup.** I write the Google Apps Script and a step-by-step guide (new `docs/06-forms-setup.md`); you create the Sheet, paste the script and put its address in Vercel as `FORMS_WEBHOOK_URL`? | Yes | ✅ Accepted |
| Q32 | **Build order.** One step at a time, each reviewed by you: 1) config files, layout, menu and language switch · 2) hero with phone mockup · 3) sections 3–8 · 4) calculator · 5) forms + Sheet · 6) legal pages · 7) publish on Vercel? | Yes | ✅ Accepted |

> **Update 2026-10-29:** Q8 and Q24 talk about "Ember". The palette was later changed to specialtyCoffeeMarket's at the user's request: the logo dot is now sage, and the rule "the shop config doesn't change colors" still holds with the new palette. See [03-design.md](03-design.md).

## Round 5: free hosting for the demo (2026-10-29), answered by the user

Context: Vercel's free Hobby plan is for non-commercial personal use only ([Vercel fair use guidelines](https://vercel.com/docs/limits/fair-use-guidelines)); a page that pitches to coffee shops is a grey area. Netlify's free plan was proposed as the alternative.

| # | Question | Recommended answer | Decision |
|---|---|---|---|
| Q33 | **Host for the demo.** Netlify free instead of Vercel? | Netlify free | ❌ **User's decision: Vercel Hobby for now.** It's a demo that few people will see; move to Netlify (or a paid Vercel plan) once Cobby is actively pitched to shops or earns money |
| Q34 | **Analytics.** Remove Vercel Analytics? | Remove | Not needed: staying on Vercel keeps Vercel Web Analytics |
| Q35 | **Build settings.** Add `netlify.toml` + `packageManager`? | Yes | Not needed for now (only when moving to Netlify) |
| Q36 | **Publishing.** Deploy from the GitHub repo? | Yes | Still applies, on Vercel: import `chekuda/cobby` with Root Directory `next-app` |

> **From round 6 on, questions are open** (user's preference, 2026-10-29): options and trade-offs, no recommended answer, no "yes to all". Rounds 1–4 used recommended answers, and the user accepted them all.

## Status

**Landing page (phase 1): description done**, 32 decisions over 4 rounds. Waiting for the user to confirm the shared understanding before building step 1.

## Later

- Domain name and checking it's free (after Q17; when you decide to buy)
- Grill the app (phase 2) once the landing page is done
