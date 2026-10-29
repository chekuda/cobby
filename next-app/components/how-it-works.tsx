import { BookmarkPlus, Camera, ScanText, Timer } from "lucide-react"

import { IconTile, Section, SectionTitle } from "@/components/section"
import type { Dictionary } from "@/dictionaries"

const icons = [Camera, ScanText, BookmarkPlus, Timer]

// Section 3 (docs/01-landing.md): the four steps from bag to cup
export function HowItWorks({ dict }: { dict: Dictionary["howItWorks"] }) {
  return (
    <Section id="how-it-works">
      <SectionTitle>{dict.title}</SectionTitle>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dict.steps.map((step, i) => {
          const Icon = icons[i]
          return (
            <li key={step.title} className="lift flex flex-col gap-3 rounded-md bg-cream p-6">
              <div className="flex items-center justify-between">
                <IconTile>
                  <Icon className="size-5" aria-hidden="true" />
                </IconTile>
                <span className="text-heading-sm font-semibold text-sand">0{i + 1}</span>
              </div>
              <h3 className="text-subheading font-semibold text-plum">{step.title}</h3>
              <p className="text-body-sm text-stone">{step.text}</p>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
