"use client"

import { useState } from "react"
import { Minus, Plus, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

import { Sticker } from "@/components/section"
import type { Dictionary } from "@/dictionaries"
import { brew, recipes, type MethodId, type Recipe } from "@/lib/recipes"
import { fill } from "@/lib/text"

type Labels = Dictionary["brew"]["calculator"]

type Version = { coffee: number; output: number; temperature: number; clicks: number | null }

// The base recipe for 1 cup (or 1 shot), as the app saves "your version" (C3)
function baseVersion(recipe: Recipe): Version {
  const { coffee, output } = brew(recipe, 1)
  return { coffee, output, temperature: recipe.temperature, clicks: null }
}

// Limits and steps for each number, so the demo stays a sensible recipe
const limits = {
  coffee: { min: 5, max: 30, step: 1 },
  filter: { min: 100, max: 500, step: 10 },
  espresso: { min: 10, max: 60, step: 1 },
  temperature: { min: 80, max: 100, step: 1 },
  clicks: { min: 1, max: 60, step: 1 },
}
// A starting point for clicks: grinders differ, so the app leaves it empty until you set it
const firstClicks = 20

function Stepper({
  label,
  value,
  dict,
  onLower,
  onRaise,
  canLower,
  canRaise,
}: {
  label: string
  value: string
  dict: Labels
  onLower: () => void
  onRaise: () => void
  canLower: boolean
  canRaise: boolean
}) {
  const button =
    "flex size-9 shrink-0 items-center justify-center rounded-md bg-cream text-plum transition-colors hover:bg-sage disabled:pointer-events-none disabled:opacity-40"
  return (
    <div className="flex items-center justify-between gap-3 rounded-md bg-paper p-3 pl-4">
      <span className="text-body-sm text-stone">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={button}
          aria-label={fill(dict.lower, { label })}
          disabled={!canLower}
          onClick={onLower}
        >
          <Minus className="size-4" aria-hidden="true" />
        </button>
        {/* key: replays the small "pop" each time the value changes */}
        <output aria-live="polite" className="w-[4.5rem] text-center text-subheading font-semibold text-plum">
          <span key={value} className="anim-pop inline-block">
            {value}
          </span>
        </output>
        <button
          type="button"
          className={button}
          aria-label={fill(dict.raise, { label })}
          disabled={!canRaise}
          onClick={onRaise}
        >
          <Plus className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

// The live demo in "Brew better" (grill round 7, Q52): the app's "Tune it to
// my taste". Start from the base recipe, change the numbers, and it becomes
// "your version"; "Back to the original recipe" undoes it.
export function TuneDemo({ dict }: { dict: Labels }) {
  const [methodId, setMethodId] = useState<MethodId>("v60")
  const recipe = recipes.find((r) => r.id === methodId) ?? recipes[0]
  const base = baseVersion(recipe)
  const [version, setVersion] = useState<Version>(base)

  const isEspresso = recipe.kind === "espresso"
  const out = isEspresso ? limits.espresso : limits.filter
  const isYours =
    version.coffee !== base.coffee ||
    version.output !== base.output ||
    version.temperature !== base.temperature ||
    version.clicks !== null

  const ratio = version.output / version.coffee
  const strength =
    Math.abs(ratio - recipe.ratio) < 0.05 ? dict.same : ratio < recipe.ratio ? dict.stronger : dict.milder

  const pick = (id: MethodId) => {
    const next = recipes.find((r) => r.id === id) ?? recipes[0]
    setMethodId(id)
    setVersion(baseVersion(next))
  }
  const change = (key: "coffee" | "output" | "temperature", by: number) =>
    setVersion((v) => ({ ...v, [key]: v[key] + by }))
  const changeClicks = (by: number) =>
    setVersion((v) => ({ ...v, clicks: v.clicks === null ? firstClicks : v.clicks + by }))

  return (
    <div className="flex flex-col gap-5 rounded-md bg-cream p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-caption font-medium text-stone uppercase">{dict.label}</p>
        <Sticker key={String(isYours)} color={isYours ? "bg-honey" : "bg-paper"} className="anim-pop">
          {isYours ? dict.yours : dict.base}
        </Sticker>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-body-sm font-medium text-plum">{dict.method}</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {recipes.map((r) => (
            <button
              key={r.id}
              type="button"
              aria-pressed={r.id === methodId}
              onClick={() => pick(r.id)}
              className={cn(
                "rounded-md px-3 py-2 text-body-sm font-medium transition-colors",
                r.id === methodId ? "bg-sage font-semibold text-plum" : "bg-paper text-stone hover:text-plum"
              )}
            >
              {dict.methods[r.id]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <p className="text-body-sm font-medium text-plum">{isEspresso ? dict.perShot : dict.perCup}</p>
        <Stepper
          label={dict.coffee}
          value={`${version.coffee} g`}
          dict={dict}
          canLower={version.coffee > limits.coffee.min}
          canRaise={version.coffee < limits.coffee.max}
          onLower={() => change("coffee", -limits.coffee.step)}
          onRaise={() => change("coffee", limits.coffee.step)}
        />
        <Stepper
          label={isEspresso ? dict.yield : dict.water}
          value={`${version.output} ${isEspresso ? "g" : "ml"}`}
          dict={dict}
          canLower={version.output > out.min}
          canRaise={version.output < out.max}
          onLower={() => change("output", -out.step)}
          onRaise={() => change("output", out.step)}
        />
        <Stepper
          label={dict.temperature}
          value={`${version.temperature} °C`}
          dict={dict}
          canLower={version.temperature > limits.temperature.min}
          canRaise={version.temperature < limits.temperature.max}
          onLower={() => change("temperature", -limits.temperature.step)}
          onRaise={() => change("temperature", limits.temperature.step)}
        />
        <Stepper
          label={`${dict.clicks} · ${dict.grinds[recipe.grind]}`}
          value={version.clicks === null ? "—" : String(version.clicks)}
          dict={dict}
          canLower={version.clicks !== null && version.clicks > limits.clicks.min}
          canRaise={version.clicks === null || version.clicks < limits.clicks.max}
          onLower={() => changeClicks(-limits.clicks.step)}
          onRaise={() => changeClicks(limits.clicks.step)}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-body-sm text-stone" aria-live="polite">
          <span className="font-semibold text-plum">
            {dict.ratio} 1:{Number.isInteger(ratio) ? ratio : ratio.toFixed(1)}
          </span>{" "}
          · {strength}
        </p>
        {isYours && (
          <button
            type="button"
            onClick={() => setVersion(base)}
            className="flex items-center gap-1.5 text-body-sm font-semibold text-plum underline-offset-4 hover:underline"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            {dict.reset}
          </button>
        )}
      </div>

      <p className="text-caption text-stone">{dict.note}</p>
    </div>
  )
}
