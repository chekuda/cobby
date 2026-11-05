import { Bell, Share2, ShoppingBag, SlidersHorizontal, Sparkles, Sticker, Trophy, UserPlus } from "lucide-react"

import { IconTile, Section, SectionTitle } from "@/components/section"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import { fill } from "@/lib/text"

const icons = [SlidersHorizontal, Sparkles, ShoppingBag, Trophy, Sticker, UserPlus, Share2, Bell]

// What's inside the app today (grill round 7, Q47–Q51): cards with icon and
// text, like "How it works". Only what the beta already does; prizes stay
// general, with no figures.
export function AppHighlights({ dict }: { dict: Dictionary["highlights"] }) {
  return (
    <Section tone="cream">
      <div className="flex max-w-[640px] flex-col gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{dict.lead}</p>
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.items.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <li key={item.title} className="lift flex flex-col gap-3 rounded-md bg-paper p-6">
              <IconTile>
                <Icon className="size-5" aria-hidden="true" />
              </IconTile>
              <h3 className="text-subheading font-semibold text-plum">{item.title}</h3>
              <p className="text-body-sm text-stone">{fill(item.text, { shopName: shop.name })}</p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
