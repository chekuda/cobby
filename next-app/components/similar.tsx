import { ArrowUpRight } from "lucide-react"

import { ArrowDot, Section, SectionTitle, Sticker } from "@/components/section"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import { families as familyList, stickerColor } from "@/lib/flavors"
import { fill } from "@/lib/text"

// Section 6 (docs/01-landing.md): similar coffees at the shop from config/shop.ts
export function Similar({
  dict,
  families,
}: {
  dict: Dictionary["similar"]
  families: Dictionary["families"]
}) {
  const values = { shopName: shop.name }
  return (
    <Section tone="cream">
      <div className="flex max-w-[640px] flex-col items-start gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{fill(dict.text, values)}</p>
        {/* The flavor families Cobby looks at, as the app's stickers */}
        <ul aria-label={dict.familiesLabel} className="flex flex-wrap gap-2">
          {familyList.map((family, i) => (
            <li key={family}>
              <Sticker color={stickerColor[family]} index={i} className="px-3 py-1 text-body-sm">
                {families[family]}
              </Sticker>
            </li>
          ))}
        </ul>
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
