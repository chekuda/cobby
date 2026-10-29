/** Fills `{name}` placeholders in a dictionary text, e.g. fill("at {shopName}", { shopName: shop.name }). */
export function fill(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}
