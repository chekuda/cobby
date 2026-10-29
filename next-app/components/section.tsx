import { cn } from "@/lib/utils"

type Tone = "paper" | "cream" | "plum"

const tones: Record<Tone, string> = {
  paper: "bg-paper text-plum",
  cream: "bg-cream text-plum",
  plum: "bg-plum text-paper",
}

// A full-width band with the page's 1200px content column (docs/03-design.md):
// white, cream or plum. The content fades up as it scrolls into view.
export function Section({
  id,
  tone = "paper",
  className,
  decoration,
  children,
}: {
  id?: string
  tone?: Tone
  className?: string
  /** Optional background art, drawn behind the content */
  decoration?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-16 overflow-hidden", tones[tone])}>
      {decoration}
      <div
        className={cn(
          "reveal relative mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-20",
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}

/** Takes its color from the section (plum on light bands, white on plum). */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-heading-sm font-semibold md:text-heading">{children}</h2>
}

/** A sage tile holding a step or benefit icon: the page's main touch of color. */
export function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-11 items-center justify-center rounded-md bg-sage text-plum">
      {children}
    </span>
  )
}

/** Small dots for a 1–5 rating: plum filled, sand empty. */
export function RatingDots({ value }: { value: number }) {
  return (
    <span className="flex gap-1" aria-label={`${value}/5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={cn("size-2.5 rounded-full", n <= value ? "bg-plum" : "bg-sand")}
        />
      ))}
    </span>
  )
}

/** Arrow inside a small sage circle, for standalone text links. */
export function ArrowDot({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-sage text-plum transition-transform group-hover:translate-x-0.5">
      {children}
    </span>
  )
}
