import { notFound } from "next/navigation"

import { BrewSection } from "@/components/brew-section"
import { Contact } from "@/components/contact"
import { Faq } from "@/components/faq"
import { ForShops } from "@/components/for-shops"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Shelf } from "@/components/shelf"
import { Similar } from "@/components/similar"
import { getDictionary } from "@/dictionaries"
import { hasLocale } from "@/lib/i18n"

// The landing page, top to bottom (docs/01-landing.md, "Sections")
export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = getDictionary(lang)

  return (
    <main>
      <Hero dict={dict.hero} mockup={dict.mockup} />
      <HowItWorks dict={dict.howItWorks} />
      <Shelf dict={dict.shelf} />
      <BrewSection dict={dict.brew} />
      <Similar dict={dict.similar} />
      <ForShops dict={dict.shops} />
      <Faq dict={dict.faq} />
      <Contact lang={lang} dict={dict.forms} />
    </main>
  )
}
