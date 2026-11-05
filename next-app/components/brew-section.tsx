import { Section, SectionTitle, Sticker } from "@/components/section"
import { TuneDemo } from "@/components/tune-demo"
import type { Dictionary } from "@/dictionaries"

// Section 5 (docs/01-landing.md): brew better, with the "Tune it to my taste"
// demo (grill round 7, Q52) and the guided timer marked "Coming soon" (Q53)
export function BrewSection({ dict }: { dict: Dictionary["brew"] }) {
  return (
    <Section id="brew" className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex max-w-[560px] flex-col gap-4">
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{dict.text}</p>
        <p className="flex flex-wrap items-center gap-2 text-body-sm text-stone">
          <Sticker color="bg-sage">{dict.soonTag}</Sticker>
          {dict.soon}
        </p>
      </div>
      <TuneDemo dict={dict.calculator} />
    </Section>
  )
}
