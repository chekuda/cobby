import { ChevronDown } from "lucide-react"

import { Section, SectionTitle } from "@/components/section"
import type { Dictionary } from "@/dictionaries"

// Section 8 (docs/01-landing.md): native <details>, no JavaScript needed
export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  return (
    <Section id="faq">
      <SectionTitle>{dict.title}</SectionTitle>
      <div className="mt-8 max-w-[760px] border-t border-sand">
        {dict.items.map((item) => (
          <details key={item.q} className="group border-b border-sand">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-body font-semibold text-plum [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown
                className="size-5 shrink-0 text-plum transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-[640px] pb-5 text-body text-stone">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
