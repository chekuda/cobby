import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { legal } from "@/config/legal"
import type { Dictionary } from "@/dictionaries"
import type { Locale } from "@/lib/i18n"
import { fill } from "@/lib/text"

type Page = Dictionary["legal"]["privacy"]

// Privacy policy and legal notice (docs/01-landing.md). Details come from
// config/legal.ts; empty ones show a visible "to be completed" marker.
export function LegalPage({
  lang,
  page,
  dict,
}: {
  lang: Locale
  page: Page
  dict: Dictionary["legal"]
}) {
  const values = {
    ownerName: legal.ownerName || dict.missing,
    taxId: legal.taxId || dict.missing,
    address: legal.address || dict.missing,
    email: legal.email || dict.missing,
  }

  return (
    <main className="mx-auto max-w-[760px] px-4 py-12 md:px-8 md:py-20">
      <Link
        href={`/${lang}`}
        className="mb-8 flex items-center gap-1.5 text-body-sm font-medium text-plum"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        {dict.back}
      </Link>
      <h1 className="text-heading font-semibold text-plum md:text-heading-lg">{page.title}</h1>
      {page.sections.map((section) => (
        <section key={section.title} className="mt-10 flex flex-col gap-3">
          <h2 className="text-subheading font-semibold text-plum">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-body text-stone">
              {fill(paragraph, values)}
            </p>
          ))}
        </section>
      ))}
    </main>
  )
}
