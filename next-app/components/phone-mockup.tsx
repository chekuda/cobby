import { Cobby } from "@/components/cobby"
import { Sticker } from "@/components/section"
import { shop } from "@/config/shop"
import type { Dictionary } from "@/dictionaries"
import { stickerColor } from "@/lib/flavors"
import { fill } from "@/lib/text"

// A phone built in code showing the app's tasting share card, in the app's
// dark look (grill round 6, Q37–Q38; cobby-app: lib/share-card.tsx). The
// coffee is an illustration, not a product claim. The phone frame's large
// corner radius is an illustration, not a UI component, so the 12px rule
// doesn't apply.

// Sticker colors for the example notes: jasmine, peach, bergamot
const noteColors = [stickerColor.floral, stickerColor.fruity, stickerColor.sweet]

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

function Stars({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 24 24" aria-hidden="true" className="size-5">
          <path
            d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.5 6.6-.8z"
            strokeWidth={1}
            strokeLinejoin="round"
            className={n <= value ? "fill-honey stroke-espresso" : "fill-plum stroke-foam/25"}
          />
        </svg>
      ))}
    </span>
  )
}

export function PhoneMockup({ dict }: { dict: Dictionary["mockup"] }) {
  const outOf = fill(dict.outOf, { n: String(dict.stars) })
  return (
    <figure
      aria-label={dict.label}
      className="w-[272px] shrink-0 rounded-[44px] border-[10px] border-plum bg-plum"
    >
      <div className="relative flex h-[540px] flex-col overflow-hidden rounded-[34px] bg-espresso px-5 pt-9 pb-4 text-foam">
        {/* Camera notch */}
        <span className="absolute top-2 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
        {/* A big plum circle in a corner, for depth */}
        <span
          aria-hidden="true"
          className="absolute -top-24 -right-24 size-56 rounded-full bg-plum"
        />

        <div className="relative flex flex-col">
          <span className="flex items-baseline gap-0.5 text-body font-semibold">
            cobby
            <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-sage" />
          </span>
          <span className="text-[10px] text-smoke">{fill(dict.byShop, { shopName: shop.name })}</span>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-3">
          {/* The coffee on its family color, a little crooked */}
          <div className="flex h-36 -rotate-2 items-center justify-center rounded-[20px] bg-lilac py-3">
            <BagIllustration />
          </div>

          <div>
            <p className="font-display text-[34px] leading-none font-extrabold uppercase [font-stretch:62%]">
              {dict.coffeeName}
            </p>
            <p className="mt-1 text-caption text-smoke">{dict.details}</p>
          </div>

          <div className="flex items-center gap-3">
            <Cobby face="wink" tone="light" className="size-14" />
            <div className="flex flex-col gap-1">
              <Stars value={dict.stars} />
              <span className="font-display text-body-sm leading-none font-extrabold text-smoke uppercase [font-stretch:62%]">
                {outOf}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-full border-2 border-foam/25 bg-plum px-2.5 py-0.5 text-caption font-semibold">
              {dict.method}
            </span>
            {dict.notes.map((note, i) => (
              <Sticker key={note} color={noteColors[i % noteColors.length]} index={i + 1}>
                {note}
              </Sticker>
            ))}
          </div>
        </div>

        <p className="relative text-center text-[10px] text-smoke">
          {new URL(shop.appUrl).host}
        </p>
      </div>
    </figure>
  )
}
