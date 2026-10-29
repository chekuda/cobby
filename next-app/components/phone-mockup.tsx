import { ArrowRight } from "lucide-react"

import { RatingDots } from "@/components/section"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import { fill } from "@/lib/text"

// A phone built in code showing a saved coffee's card (docs/01-landing.md:
// phone screens are mockups built in code). The phone frame's large corner
// radius is an illustration, not a UI component, so the 12px rule doesn't apply.

function BagIllustration() {
  return (
    <svg viewBox="0 0 120 150" aria-hidden="true" className="h-full w-auto">
      {/* Pouch */}
      <path
        d="M22 18 L98 18 L104 140 Q104 146 98 146 L22 146 Q16 146 16 140 Z"
        className="fill-plum"
      />
      {/* Folded top */}
      <rect x="20" y="8" width="80" height="14" rx="2" className="fill-stone" />
      {/* Label */}
      <rect x="32" y="52" width="56" height="62" rx="4" className="fill-paper" />
      <rect x="40" y="62" width="40" height="5" rx="2" className="fill-plum" />
      <rect x="40" y="73" width="28" height="4" rx="2" className="fill-sand" />
      <rect x="40" y="88" width="40" height="3" rx="1.5" className="fill-sand" />
      <rect x="40" y="96" width="34" height="3" rx="1.5" className="fill-sand" />
      <rect x="40" y="104" width="38" height="3" rx="1.5" className="fill-sand" />
    </svg>
  )
}


export function PhoneMockup({ dict }: { dict: Dictionary["mockup"] }) {
  return (
    <figure
      aria-label={dict.label}
      className="w-[272px] shrink-0 rounded-[44px] border-[10px] border-plum bg-plum"
    >
      <div className="flex h-[540px] flex-col overflow-hidden rounded-[34px] bg-cream">
        {/* Status bar with the camera notch */}
        <div className="flex h-8 items-center justify-center bg-paper">
          <span className="h-4 w-20 rounded-full bg-plum" />
        </div>

        <div className="bg-paper px-4 pb-3 pt-2">
          <p className="text-subheading font-semibold text-plum">{dict.screenTitle}</p>
        </div>

        {/* The coffee card */}
        <div className="m-3 flex flex-1 flex-col gap-3 rounded-md bg-paper p-4">
          <div className="flex h-28 items-center justify-center rounded-md bg-cream">
            <BagIllustration />
          </div>

          <div>
            <p className="text-body font-semibold text-plum">{dict.coffeeName}</p>
            <p className="text-caption text-stone">
              {dict.origin} · {dict.process}
            </p>
          </div>

          <div>
            <p className="mb-1.5 text-caption text-stone">{dict.notesLabel}</p>
            <div className="flex flex-wrap gap-1.5">
              {dict.notes.map((note) => (
                <span
                  key={note}
                  className="rounded-sm bg-sage px-2 py-0.5 text-caption font-medium text-plum"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <p className="text-caption text-stone">{dict.roasted}</p>
          <div className="flex items-center justify-between">
            <span className="text-caption text-stone">{dict.ratingLabel}</span>
            <RatingDots value={4} />
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <span className="rounded-md bg-plum py-2 text-center text-body-sm font-semibold text-paper">
              {dict.brew}
            </span>
            <span className="flex items-center justify-center gap-1 text-caption font-medium text-plum">
              {fill(dict.similar, { shopName: shop.name })}
              <ArrowRight className="size-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </figure>
  )
}
