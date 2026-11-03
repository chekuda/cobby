import { Cobby, cobbyFaces } from "@/components/cobby"
import { RatingDots, Section, SectionTitle } from "@/components/section"
import type { Dictionary } from "@/dictionaries"
import { fill } from "@/lib/text"

// "Meet Cobby" (grill round 6, Q40–Q41): the mascot, big and winking, and his
// five faces with the rating each one stands for, from 1 to 5 stars.
export function MeetCobby({ dict }: { dict: Dictionary["cobby"] }) {
  return (
    <Section className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div className="flex max-w-[560px] flex-col gap-6">
        <div className="group flex size-40 items-center justify-center self-start rounded-full bg-sage md:size-48">
          <Cobby winking label={dict.label} className="anim-bob size-28 md:size-32" />
        </div>
        <SectionTitle>{dict.title}</SectionTitle>
        <p className="text-body text-stone">{dict.text}</p>
      </div>

      <ul
        aria-label={dict.facesLabel}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
      >
        {cobbyFaces.map((face, i) => (
          <li
            key={face}
            className="flex flex-col items-center gap-2 rounded-md bg-cream px-2 py-4 text-center"
          >
            <Cobby face={face} className="size-14" />
            <span className="text-body-sm font-semibold text-plum">{dict.faces[i]}</span>
            <span className="sr-only">{fill(dict.stars, { n: String(i + 1) })}</span>
            <span aria-hidden="true">
              <RatingDots value={i + 1} />
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
