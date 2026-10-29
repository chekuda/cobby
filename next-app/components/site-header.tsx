import { cn } from "@/lib/utils"

import { LanguageSwitch } from "@/components/language-switch"
import { Logo } from "@/components/logo"
import { buttonVariants } from "@/components/ui/button"
import type { Dictionary } from "@/dictionaries"
import type { Locale } from "@/lib/i18n"

// Section anchors, the same in both languages
const sections = [
  { id: "how-it-works", key: "howItWorks" },
  { id: "brew", key: "brew" },
  { id: "for-shops", key: "forShops" },
  { id: "faq", key: "faq" },
] as const

export function SiteHeader({
  lang,
  dict,
}: {
  lang: Locale
  dict: Dictionary["header"]
}) {
  const cta = (
    <a href={`/${lang}#contact`} className={cn(buttonVariants(), "lift px-4 font-semibold")}>
      {dict.cta}
    </a>
  )

  return (
    <header className="sticky top-0 z-20 border-b border-sand/60 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-4 md:px-8">
        <Logo href={`/${lang}`} label={dict.homeLabel} />

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map(({ id, key }) => (
            <a
              key={id}
              href={`/${lang}#${id}`}
              className="text-body-sm font-medium text-plum hover:text-stone"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitch lang={lang} label={dict.languageLabel} />
          <div className="hidden md:block">{cta}</div>

          {/* Phone menu: a native disclosure, no JavaScript needed */}
          <details className="group relative md:hidden">
            <summary className="cursor-pointer list-none rounded-md border border-sand px-3 py-1.5 text-body-sm font-medium text-plum [&::-webkit-details-marker]:hidden">
              {dict.menu}
            </summary>
            <div className="absolute right-0 z-10 mt-2 flex w-64 flex-col gap-1 rounded-md border border-sand bg-paper p-4 shadow-lg">
              {sections.map(({ id, key }) => (
                <a
                  key={id}
                  href={`/${lang}#${id}`}
                  className="rounded-sm py-2 text-body font-medium text-plum"
                >
                  {dict.nav[key]}
                </a>
              ))}
              <div className="mt-2">{cta}</div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
