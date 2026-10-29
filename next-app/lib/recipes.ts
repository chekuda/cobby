// Brewing recipes for the calculator (approved in docs/05-copy.md, grill round 4)

export type MethodId = "v60" | "aeropress" | "frenchPress" | "espresso"
export type GrindId = "fine" | "mediumFine" | "mediumCoarse" | "coarse"

export type Recipe = {
  id: MethodId
  /** Water (or, for espresso, drink weight) per gram of coffee. */
  ratio: number
  /** Coffee per cup, or per shot for espresso. */
  coffeePerCup: number
  temperature: number
  grind: GrindId
  /** Espresso is measured in grams in the cup, filter methods in ml of water. */
  kind: "filter" | "espresso"
  maxCups: number
}

export const recipes: Recipe[] = [
  { id: "v60", ratio: 16, coffeePerCup: 15, temperature: 93, grind: "mediumFine", kind: "filter", maxCups: 4 },
  { id: "aeropress", ratio: 15, coffeePerCup: 15, temperature: 85, grind: "fine", kind: "filter", maxCups: 2 },
  { id: "frenchPress", ratio: 15, coffeePerCup: 17, temperature: 94, grind: "coarse", kind: "filter", maxCups: 6 },
  { id: "espresso", ratio: 2, coffeePerCup: 18, temperature: 93, grind: "fine", kind: "espresso", maxCups: 2 },
]

export function brew(recipe: Recipe, cups: number) {
  const coffee = recipe.coffeePerCup * cups
  return { coffee, output: coffee * recipe.ratio }
}
