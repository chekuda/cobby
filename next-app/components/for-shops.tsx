import { ArrowRight, Link2, Puzzle, Repeat, Store } from "lucide-react"
import { cn } from "@/lib/utils"

import { IconTile, Section, SectionTitle } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import { fill } from "@/lib/text"

const icons = [Store, Link2, Repeat, Puzzle]

// Hand-lettered "coffee" (public/coffee-lettering.webp), white on transparent,
// drifting slowly behind the plum band
function Lettering() {
  return (
    <div
      aria-hidden="true"
      className="anim-drift pointer-events-none absolute top-40 left-40 w-[900px] max-w-none bg-[url('/coffee-lettering.webp')] bg-contain bg-no-repeat opacity-[0.07] md:-bottom-16 md:w-[1300px]"
      style={{ aspectRatio: "2000 / 678" }}
    />
  )
}

// Section 7 (docs/01-landing.md): the pitch to coffee shops, on the plum band.
// Only the real phase 2 benefits; insights are "coming later"; no prices.
export function ForShops({ dict }: { dict: Dictionary["shops"] }) {
  return (
    <Section id="for-shops" tone="plum" decoration={<Lettering />}>
      <div className="flex max-w-[640px] flex-col gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-subheading text-sand">{dict.lead}</p>
      </div>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.benefits.map((benefit, i) => {
          const Icon = icons[i]
          return (
            <li
              key={benefit.title}
              className="lift flex flex-col gap-3 rounded-md border border-paper/10 bg-paper/5 p-6"
            >
              <IconTile>
                <Icon className="size-5" aria-hidden="true" />
              </IconTile>
              <h3 className="text-subheading font-semibold text-paper">
                {benefit.title}
              </h3>
              <p className="text-body-sm text-sand">{benefit.text}</p>
            </li>
          )
        })}
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex flex-wrap items-center gap-2 text-body-sm text-sand">
          <span className="rounded-sm bg-sage px-2 py-0.5 text-caption font-semibold text-plum">
            {dict.comingLaterTag}
          </span>
          {dict.comingLater}
        </p>
        {/* How a shop's name appears inside the app (from config/shop.ts) */}
        <p className="flex flex-wrap items-center gap-2 text-caption text-sand">
          {fill(dict.example, { shopName: shop.name })}
          <span className="flex items-center gap-1 rounded-sm bg-paper px-2 py-0.5 font-medium text-plum">
            {shop.name}
            <ArrowRight className="size-3" aria-hidden="true" />
          </span>
        </p>
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-md bg-sage p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <p className="text-heading-sm font-semibold text-plum">
          {dict.foundingPartners}
        </p>
        <a
          href="#contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "lift shrink-0 px-4 text-body font-semibold"
          )}
        >
          {dict.cta}
        </a>
      </div>
    </Section>
  )
}
