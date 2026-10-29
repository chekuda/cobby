import { ArrowUpRight } from "lucide-react"

import { ArrowDot, Section, SectionTitle } from "@/components/section"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import { fill } from "@/lib/text"

// Section 6 (docs/01-landing.md): similar coffees at the shop from config/shop.ts
export function Similar({ dict }: { dict: Dictionary["similar"] }) {
  const values = { shopName: shop.name }
  return (
    <Section tone="cream">
      <div className="flex max-w-[640px] flex-col items-start gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{fill(dict.text, values)}</p>
        <a
          href={shop.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-body-sm font-semibold text-plum"
        >
          {fill(dict.link, values)}
          <ArrowDot>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </ArrowDot>
        </a>
      </div>
    </Section>
  )
}
