import Link from "next/link"

import { LanguageSwitch } from "@/components/language-switch"
import { Logo } from "@/components/logo"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import type { Locale } from "@/lib/i18n"

// Footer (docs/01-landing.md, section 10): plum band
export function SiteFooter({
  lang,
  dict,
  languageLabel,
}: {
  lang: Locale
  dict: Dictionary["footer"]
  languageLabel: string
}) {
  const link = "text-body-sm text-sand hover:text-paper"
  return (
    <footer className="bg-plum">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-8 md:py-16">
        <div className="flex flex-col gap-3">
          <Logo href={`/${lang}`} tone="dark" />
          <p className="max-w-[360px] text-body-sm text-sand">{dict.line}</p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href={`/${lang}/privacy`} className={link}>
              {dict.privacy}
            </Link>
            <Link href={`/${lang}/legal`} className={link}>
              {dict.legal}
            </Link>
            {/* Shown once the contact email is filled in config/shop.ts */}
            {shop.contactEmail && (
              <a href={`mailto:${shop.contactEmail}`} className={link}>
                {dict.contact}
              </a>
            )}
          </nav>
          <LanguageSwitch lang={lang} label={languageLabel} tone="dark" />
        </div>
      </div>
    </footer>
  )
}
