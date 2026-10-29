# Phase 2: The app

> Starts **after** the landing page (phase 1).

## Goal

A mobile-first web app where a coffee buyer can:

1. **Take a photo** of a coffee bag.
2. Have Cobby **read the label** and fill in the coffee's details.
3. **Save** the coffee to "My coffees".
4. **Brew** it with a ratio calculator and a guided timer.
5. **Rate** the cup and get a tip for next time.
6. See **similar coffees** in the coffee shop's catalog.

Like the landing page, it is **in Spanish and English**.

## User flow

```
Photo of the bag ──► Cobby reads the label ──► Editable coffee card ──► Save to "My coffees"
                                                                            │
                         Similar coffees in the shop ◄── Rate the cup ◄── Brew (calculator + timer)
```

## Screens

| Screen | What it does |
|---|---|
| **Snap** | Opens the camera on a phone, or lets you upload a photo on a computer |
| **Reading…** | Waits while the AI reads the label |
| **Coffee card** | Shows the details found. Every field can be corrected by hand before saving |
| **My coffees** | The shelf: every saved coffee with photo, notes and rating. Search and filter by origin, process or notes |
| **Brew** | Choose method and cups → grams of coffee, ml of water, temperature and grind. Then a step-by-step timer with sound or vibration |
| **Rate** | 1–5 stars plus "too bitter / too sour / just right" → a tip for the next brew (e.g. "grind a bit finer") |
| **Similar coffees** | Coffees from the shop's catalog with notes similar to the ones the user rates highly, with a link to buy |

## Data read from the label

| Field | Example |
|---|---|
| Roaster | (as printed on the bag) |
| Coffee name | Guji Hambela |
| Country / region | Ethiopia · Guji |
| Process | Washed / Natural / Honey / Anaerobic… |
| Variety | Heirloom |
| Altitude | 2,000 m |
| Tasting notes | jasmine, peach, bergamot |
| Roast date | 2026-10-15 |

Anything the AI can't read stays empty, and the user can fill it in.

## Reading the label: Ollama (local AI)

- The photo is read by **Ollama** running on the owner's computer, using a **vision model** (one that understands images). Candidates: `qwen2.5vl:7b` or `llama3.2-vision`. **Which one to use is still to be tested.**
- Cobby asks the model to return the fields above **as JSON**, so the app can fill the card directly.
- **Important:** a website can't talk directly to Ollama on someone else's computer. The app needs a small **in-between service** on the Ollama computer, reachable from the internet (for example with ngrok, as is already done for background removal in the Wix project).
- **Limit:** the app can only read labels **while that computer and Ollama are running**. That's fine for the prototype and the workshop. Selling to many coffee shops would later need a server that is always on.

## Where the data is saved

- **First version:** on the user's own device (in the browser). No accounts and no passwords.
- **Later:** optional accounts to keep coffees across devices.

## "Similar coffees": how it works (first idea)

- Each coffee's tasting notes are grouped into simple families: **fruity, sweet / chocolate, floral, nutty, spicy**, plus the process.
- Cobby looks at the coffees the user rated highly and finds coffees in the shop's catalog with the same families.
- **Where the shop's catalog comes from is still to be decided** (a file, the shop's website or its online store). The default is specialtyCoffeeMarket's catalog.

## For coffee shops (B2B version)

The app uses the **same `config/shop.ts`** as the landing page (see [01-landing.md](01-landing.md)). By default it shows **specialtyCoffeeMarket**; another shop only edits that file.

- The shop's own **logo and colors**, from the config.
- The shop's own **catalog** in "Similar coffees", with links to buy. The config will also say where the catalog comes from (field to be added when that's decided).
- Later: a simple summary for the shop of which notes and origins their customers like most.

## Still to define

- [ ] Which Ollama vision model reads labels best (test with 10 real bags)
- [ ] How the in-between service is published (ngrok or other)
- [ ] Brew recipes per method (ratios, temperatures, timer steps)
- [ ] Where each shop's catalog comes from
- [ ] Design of the app screens, using the same system as the landing page ([03-design.md](03-design.md))
