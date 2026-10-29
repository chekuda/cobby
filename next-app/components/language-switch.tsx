"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

import { locales, type Locale } from "@/lib/i18n"

// ES / EN switch. Keeps the current page: /es/privacy ↔ /en/privacy.
export function LanguageSwitch({
  lang,
  label,
  tone = "light",
}: {
  lang: Locale
  label: string
  tone?: "light" | "dark"
}) {
  const pathname = usePathname()
  const rest = pathname.split("/").slice(2).join("/")

  const current = tone === "dark" ? "text-paper" : "text-plum"
  const other = tone === "dark" ? "text-sand hover:text-paper" : "text-stone hover:text-plum"
  return (
    <nav aria-label={label} className="flex items-center gap-1 text-body-sm">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className={tone === "dark" ? "text-sand/50" : "text-sand"}>/</span>}
          <Link
            href={rest ? `/${locale}/${rest}` : `/${locale}`}
            hrefLang={locale}
            aria-current={locale === lang ? "true" : undefined}
            className={cn("rounded-sm px-1 font-medium uppercase", locale === lang ? current : other)}
          >
            {locale}
          </Link>
        </span>
      ))}
    </nav>
  )
}
