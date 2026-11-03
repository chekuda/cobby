// Flavor families and their sticker colors, as in the app (cobby-app:
// docs/02-design.md). Stickers always have dark (plum) text.

export const families = ["fruity", "floral", "sweet", "nutty", "spicy"] as const
export type Family = (typeof families)[number]

export const stickerColor: Record<Family, string> = {
  fruity: "bg-peach",
  floral: "bg-lilac",
  sweet: "bg-honey",
  nutty: "bg-hazelnut",
  spicy: "bg-terracotta",
}
