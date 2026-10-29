import { BuyerForm, ShopForm } from "@/components/contact-forms"
import { Section } from "@/components/section"
import type { Dictionary } from "@/dictionaries"
import type { Locale } from "@/lib/i18n"

// Section 9 (docs/01-landing.md): coffee-shop form (main) and buyer form (secondary)
export function Contact({ lang, dict }: { lang: Locale; dict: Dictionary["forms"] }) {
  return (
    <Section id="contact" tone="cream" className="grid items-start gap-6 lg:grid-cols-[3fr_2fr]">
      <ShopForm lang={lang} dict={dict} />
      <BuyerForm lang={lang} dict={dict} />
    </Section>
  )
}
