"use client"

import { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

import type { Dictionary } from "@/dictionaries"
import { brew, recipes, type MethodId } from "@/lib/recipes"

type Labels = Dictionary["brew"]["calculator"]

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-md bg-paper p-4">
      <span className="text-caption text-stone">{label}</span>
      {/* key: replays the small "pop" each time the value changes */}
      <span key={value} className="anim-pop text-heading-sm font-semibold text-plum">
        {value}
      </span>
    </div>
  )
}

// The live demo in "Brew better" (docs/01-landing.md, section 5)
export function RatioCalculator({ dict }: { dict: Labels }) {
  const [methodId, setMethodId] = useState<MethodId>("v60")
  const [cups, setCups] = useState(1)

  const recipe = recipes.find((r) => r.id === methodId) ?? recipes[0]
  const count = Math.min(cups, recipe.maxCups)
  const { coffee, output } = brew(recipe, count)
  const isEspresso = recipe.kind === "espresso"

  const stepButton =
    "flex size-9 items-center justify-center rounded-md bg-paper text-plum transition-colors hover:bg-sage disabled:pointer-events-none disabled:opacity-40"

  return (
    <div className="flex flex-col gap-6 rounded-md bg-cream p-6 md:p-8">
      <p className="text-caption font-medium uppercase text-stone">{dict.label}</p>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-body-sm font-medium text-plum">{dict.method}</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {recipes.map((r) => (
            <button
              key={r.id}
              type="button"
              aria-pressed={r.id === methodId}
              onClick={() => setMethodId(r.id)}
              className={cn(
                "rounded-md px-3 py-2 text-body-sm font-medium transition-colors",
                r.id === methodId
                  ? "bg-sage font-semibold text-plum"
                  : "bg-paper text-stone hover:text-plum"
              )}
            >
              {dict.methods[r.id]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex items-center justify-between gap-4">
        <span className="text-body-sm font-medium text-plum" id="cups-label">
          {isEspresso ? dict.shots : dict.cups}
        </span>
        <div role="group" className="flex items-center gap-3" aria-labelledby="cups-label">
          <button
            type="button"
            className={stepButton}
            aria-label={dict.fewer}
            disabled={count <= 1}
            onClick={() => setCups(count - 1)}
          >
            <Minus className="size-4" aria-hidden="true" />
          </button>
          <output className="w-6 text-center text-subheading font-semibold text-plum" aria-live="polite">
            <span key={count} className="anim-pop inline-block">
              {count}
            </span>
          </output>
          <button
            type="button"
            className={stepButton}
            aria-label={dict.more}
            disabled={count >= recipe.maxCups}
            onClick={() => setCups(count + 1)}
          >
            <Plus className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2" aria-live="polite">
        <Stat label={dict.coffee} value={`${coffee} g`} />
        <Stat
          label={isEspresso ? dict.yield : dict.water}
          value={isEspresso ? `${output} g` : `${output} ml`}
        />
        <Stat label={dict.temperature} value={`${recipe.temperature} °C`} />
        <Stat label={dict.grind} value={dict.grinds[recipe.grind]} />
      </div>
    </div>
  )
}
