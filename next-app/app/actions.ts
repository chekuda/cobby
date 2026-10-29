"use server"

import { hasLocale } from "@/lib/i18n"

// Form submissions (docs/01-landing.md, grill round 2). Data is sent to a
// Google Apps Script that appends a row to a Google Sheet; its address is the
// secret FORMS_WEBHOOK_URL (setup: docs/06-forms-setup.md).

type FieldError = "required" | "email" | "consent"

export type FormState = {
  status: "idle" | "success" | "invalid" | "error"
  errors?: Record<string, FieldError>
  /** What was typed, so the fields refill after React resets the form */
  values?: Record<string, string>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function text(formData: FormData, name: string, max: number): string {
  const value = formData.get(name)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

async function sendToSheet(payload: Record<string, string>): Promise<boolean> {
  const url = process.env.FORMS_WEBHOOK_URL
  if (!url) {
    console.error("Forms: FORMS_WEBHOOK_URL is not set")
    return false
  }
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return false
    const data = (await res.json().catch(() => null)) as { ok?: boolean } | null
    return data?.ok === true
  } catch {
    console.error("Forms: the request to the Google Sheet failed")
    return false
  }
}

function common(formData: FormData) {
  const lang = text(formData, "lang", 2)
  return {
    lang: hasLocale(lang) ? lang : "es",
    email: text(formData, "email", 254),
    consent: formData.get("consent") === "on",
    // Hidden field that people never fill in; bots usually do
    isBot: text(formData, "company", 200) !== "",
  }
}

export async function submitShopForm(_prev: FormState, formData: FormData): Promise<FormState> {
  const { lang, email, consent, isBot } = common(formData)
  if (isBot) return { status: "success" }

  const name = text(formData, "name", 120)
  const shopName = text(formData, "shopName", 160)
  const website = text(formData, "website", 300)
  const message = text(formData, "message", 2000)

  const errors: Record<string, FieldError> = {}
  if (!name) errors.name = "required"
  if (!shopName) errors.shopName = "required"
  if (!EMAIL.test(email)) errors.email = email ? "email" : "required"
  if (!consent) errors.consent = "consent"
  const values = { name, shopName, email, website, message }
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values }

  const ok = await sendToSheet({ type: "shop", lang, ...values })
  return ok ? { status: "success" } : { status: "error", values }
}

export async function submitBuyerForm(_prev: FormState, formData: FormData): Promise<FormState> {
  const { lang, email, consent, isBot } = common(formData)
  if (isBot) return { status: "success" }

  const errors: Record<string, FieldError> = {}
  if (!EMAIL.test(email)) errors.email = email ? "email" : "required"
  if (!consent) errors.consent = "consent"
  if (Object.keys(errors).length > 0) return { status: "invalid", errors, values: { email } }

  const ok = await sendToSheet({ type: "buyer", lang, email })
  return ok ? { status: "success" } : { status: "error", values: { email } }
}
