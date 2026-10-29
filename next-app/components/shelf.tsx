import { Coffee } from "lucide-react"
import { cn } from "@/lib/utils"

import { IconTile, RatingDots, Section, SectionTitle } from "@/components/section"
import type { Dictionary } from "@/dictionaries"

// Section 4 (docs/01-landing.md): the personal coffee shelf, with an
// illustration built in code (example coffees, not real products)
export function Shelf({ dict }: { dict: Dictionary["shelf"] }) {
  return (
    <Section tone="cream" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex max-w-[560px] flex-col gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{dict.text}</p>
      </div>

      <ul aria-label={dict.label} className="rounded-md bg-paper">
        {dict.items.map((item, i) => (
          <li
            key={item.name}
            className={cn("flex items-center gap-4 p-4", i > 0 && "border-t border-cream")}
          >
            <IconTile>
              <Coffee className="size-5" aria-hidden="true" />
            </IconTile>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-body font-semibold text-plum">{item.name}</span>
              <span className="text-caption text-stone">{item.detail}</span>
            </span>
            <RatingDots value={item.rating} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
