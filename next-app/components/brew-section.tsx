import { RatioCalculator } from "@/components/ratio-calculator"
import { Section, SectionTitle } from "@/components/section"
import type { Dictionary } from "@/dictionaries"

// Section 5 (docs/01-landing.md): brew better, with a working calculator
export function BrewSection({ dict }: { dict: Dictionary["brew"] }) {
  return (
    <Section id="brew" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex max-w-[560px] flex-col gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{dict.text}</p>
      </div>
      <RatioCalculator dict={dict.calculator} />
    </Section>
  )
}
