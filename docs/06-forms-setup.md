# Forms setup: Google Sheet

The two forms on the landing page (coffee shops and early access) save each submission as a row in a Google Sheet. The page sends the data to a small **Google Apps Script** linked to that Sheet. The script's web address is a **secret** (`FORMS_WEBHOOK_URL`): anyone with it could add rows, so it never goes in the code, the docs or the chat.

Code side: `next-app/app/actions.ts` (server action) and `next-app/components/contact-forms.tsx` (the forms).

## 1. Create the Sheet

1. Go to [sheets.new](https://sheets.new) with the Google account that should own the data.
2. Name it, for example, **Cobby forms**.
3. You don't need to create tabs or headers: the script creates a **Shops** tab and a **Buyers** tab with headers on the first submission.

## 2. Add the script

1. In the Sheet: **Extensions → Apps Script**.
2. Delete what's in `Code.gs` and paste this:

```js
// Cobby landing page forms → this Google Sheet (docs/06-forms-setup.md)
const SHEETS = { shop: "Shops", buyer: "Buyers" }
const HEADERS = {
  shop: ["Date", "Language", "Name", "Shop", "Email", "Website", "Message"],
  buyer: ["Date", "Language", "Email"],
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const name = SHEETS[data.type]
    if (!name) return json({ ok: false })

    const book = SpreadsheetApp.getActiveSpreadsheet()
    const sheet = book.getSheetByName(name) || book.insertSheet(name)
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS[data.type])

    const row =
      data.type === "shop"
        ? [data.lang, data.name, data.shopName, data.email, data.website, data.message]
        : [data.lang, data.email]
    sheet.appendRow([new Date()].concat(row.map(safe)))
    return json({ ok: true })
  } catch (err) {
    return json({ ok: false })
  }
}

// Stops a value like "=HYPERLINK(...)" from running as a formula in the Sheet
function safe(value) {
  const text = String(value == null ? "" : value)
  return /^[=+\-@]/.test(text) ? "'" + text : text
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  )
}
```

3. Click **Save** (the disk icon).

## 3. Publish it as a web app

1. **Deploy → New deployment**.
2. Click the gear next to "Select type" → **Web app**.
3. Fill in:
   - **Description:** Cobby forms
   - **Execute as:** Me
   - **Who has access:** Anyone
4. **Deploy**. Google asks you to authorize the script to edit your spreadsheets: accept it with your account. (If it shows "Google hasn't verified this app", that's normal for your own scripts: **Advanced → Go to … (unsafe)**.)
5. Copy the **Web app URL** (it ends in `/exec`). **This is the secret.**

> If you change the script later, publish again with **Deploy → Manage deployments → Edit → Version: New version**. That keeps the same URL.

## 4. Give the URL to the site

**On your computer (to test locally):** create the file `next-app/.env.local` with one line:

```bash
FORMS_WEBHOOK_URL=paste-the-web-app-url-here
```

`.env*` files are git-ignored, so it won't be committed. Restart `pnpm dev` after creating it.

**On Vercel (step 7):** Project → **Settings → Environment Variables** → add `FORMS_WEBHOOK_URL` with the same URL, for Production and Preview. Then redeploy.

## 5. Test it

1. Open the landing page, fill in the coffee-shop form, tick the consent box and send it.
2. You should see "¡Gracias! Te escribimos pronto." and a new row in the **Shops** tab.
3. Do the same with the early-access form → **Buyers** tab.

If the page shows "No se ha podido enviar", check that:
- `FORMS_WEBHOOK_URL` is set and the dev server was restarted (the server log says `Forms: FORMS_WEBHOOK_URL is not set` when it's missing);
- the web app's access is **Anyone**;
- the URL is the `/exec` one, not `/dev`.

## What gets saved

| Tab | Columns |
|---|---|
| Shops | Date · Language · Name · Shop · Email · Website · Message |
| Buyers | Date · Language · Email |

The consent box is required by the form, so every row was sent with consent. Bots that fill in the hidden `company` field are ignored and nothing is saved.
