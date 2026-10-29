"use client"

import { useActionState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

import { submitBuyerForm, submitShopForm, type FormState } from "@/app/actions"
import { buttonVariants } from "@/components/ui/button"
import type { Dictionary } from "@/dictionaries"
import type { Locale } from "@/lib/i18n"

type Labels = Dictionary["forms"]

const initial: FormState = { status: "idle" }

const inputClass =
  "w-full rounded-md border border-sand bg-paper px-3 py-2.5 text-body text-plum placeholder:text-stone/70 outline-none focus-visible:border-plum focus-visible:ring-3 focus-visible:ring-plum/20 aria-invalid:border-destructive"

function errorText(dict: Labels, error?: string) {
  if (error === "email") return dict.invalidEmail
  if (error === "consent") return dict.consentRequired
  if (error === "required") return dict.required
  return null
}

function Field({
  id,
  label,
  error,
  dict,
  children,
}: {
  id: string
  label: string
  error?: string
  dict: Labels
  children: React.ReactNode
}) {
  const message = errorText(dict, error)
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-body-sm font-medium text-plum">
        {label}
      </label>
      {children}
      {message && (
        <p id={`${id}-error`} className="text-caption text-destructive">
          {message}
        </p>
      )}
    </div>
  )
}

function Consent({ id, lang, dict, error }: { id: string; lang: Locale; dict: Labels; error?: string }) {
  const message = errorText(dict, error)
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="flex items-start gap-2 text-body-sm text-stone">
        <input
          id={id}
          name="consent"
          type="checkbox"
          required
          aria-invalid={error ? true : undefined}
          className="mt-0.5 size-4 shrink-0 accent-plum"
        />
        <span>
          {dict.consentBefore}
          <a href={`/${lang}/privacy`} target="_blank" className="text-plum underline">
            {dict.consentLink}
          </a>
          {dict.consentAfter}
        </span>
      </label>
      {message && <p className="text-caption text-destructive">{message}</p>}
    </div>
  )
}

/** Hidden from people; bots that fill it in are ignored by the server. */
function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
      <input name="company" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  )
}

function Success({ text }: { text: string }) {
  return (
    <p role="status" className="anim-pop flex items-center gap-2 rounded-md bg-sage p-4 text-body font-semibold text-plum">
      <Check className="size-5 shrink-0" aria-hidden="true" />
      {text}
    </p>
  )
}

function Status({ state, dict }: { state: FormState; dict: Labels }) {
  if (state.status === "error") {
    return <p role="alert" className="text-body-sm text-destructive">{dict.error}</p>
  }
  if (state.status === "invalid") {
    return <p role="alert" className="text-body-sm text-destructive">{dict.invalid}</p>
  }
  return null
}

export function ShopForm({ lang, dict }: { lang: Locale; dict: Labels }) {
  const [state, action, pending] = useActionState(submitShopForm, initial)
  const e = state.errors ?? {}
  const t = dict.shop
  const v = state.values ?? {}

  return (
    <div className="flex flex-col gap-4 rounded-md bg-paper p-6 md:p-8">
      <h3 className="text-heading-sm font-semibold text-plum">{t.title}</h3>
      <p className="text-body text-stone">{t.text}</p>

      {state.status === "success" ? (
        <Success text={t.success} />
      ) : (
        <form action={action} className="relative flex flex-col gap-4" noValidate>
          <input type="hidden" name="lang" value={lang} />
          <Honeypot />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="shop-name" label={t.name} error={e.name} dict={dict}>
              <input id="shop-name" name="name" defaultValue={v.name} autoComplete="name" required aria-invalid={e.name ? true : undefined} className={inputClass} />
            </Field>
            <Field id="shop-shopName" label={t.shopName} error={e.shopName} dict={dict}>
              <input id="shop-shopName" name="shopName" defaultValue={v.shopName} autoComplete="organization" required aria-invalid={e.shopName ? true : undefined} className={inputClass} />
            </Field>
          </div>
          <Field id="shop-email" label={t.email} error={e.email} dict={dict}>
            <input id="shop-email" name="email" defaultValue={v.email} type="email" autoComplete="email" required aria-invalid={e.email ? true : undefined} className={inputClass} />
          </Field>
          <Field id="shop-website" label={t.website} dict={dict}>
            <input id="shop-website" name="website" defaultValue={v.website} type="url" autoComplete="url" className={inputClass} />
          </Field>
          <Field id="shop-message" label={t.message} dict={dict}>
            <textarea id="shop-message" name="message" defaultValue={v.message} rows={4} className={cn(inputClass, "resize-y")} />
          </Field>
          <Consent id="shop-consent" lang={lang} dict={dict} error={e.consent} />
          <Status state={state} dict={dict} />
          <button
            type="submit"
            disabled={pending}
            className={cn(buttonVariants({ size: "lg" }), "self-start px-4 text-body font-semibold")}
          >
            {pending ? dict.sending : t.submit}
          </button>
        </form>
      )}
    </div>
  )
}

export function BuyerForm({ lang, dict }: { lang: Locale; dict: Labels }) {
  const [state, action, pending] = useActionState(submitBuyerForm, initial)
  const e = state.errors ?? {}
  const t = dict.buyer
  const v = state.values ?? {}

  return (
    <div id="early-access" className="flex scroll-mt-16 flex-col gap-4 rounded-md bg-paper p-6 md:p-8">
      <h3 className="text-heading-sm font-semibold text-plum">{t.title}</h3>

      {state.status === "success" ? (
        <Success text={t.success} />
      ) : (
        <form action={action} className="relative flex flex-col gap-4" noValidate>
          <input type="hidden" name="lang" value={lang} />
          <Honeypot />
          <Field id="buyer-email" label={t.email} error={e.email} dict={dict}>
            <input
              id="buyer-email"
              name="email"
              type="email"
              autoComplete="email"
              defaultValue={v.email}
              placeholder={t.placeholder}
              required
              aria-invalid={e.email ? true : undefined}
              className={inputClass}
            />
          </Field>
          <Consent id="buyer-consent" lang={lang} dict={dict} error={e.consent} />
          <Status state={state} dict={dict} />
          {/* Secondary action: outlined, so the filled plum button stays on the shop form */}
          <button
            type="submit"
            disabled={pending}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "self-start border-plum px-4 text-body font-semibold")}
          >
            {pending ? dict.sending : t.submit}
          </button>
        </form>
      )}
    </div>
  )
}
