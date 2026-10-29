// Languages of the landing page: each one has its own address, /es and /en
// (docs/01-landing.md, "Languages").

export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]

/** Used when the visitor's language can't be detected. */
export const defaultLocale: Locale = "es"

/** Remembers the visitor's language choice for the next visit. */
export const localeCookie = "cobby-lang"

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/**
 * Picks a language from the browser's Accept-Language header:
 * Spanish browser → "es", any other language → "en", no header → "es".
 */
export function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale

  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";")
      const q = params.find((p) => p.trim().startsWith("q="))
      return {
        lang: tag.trim().toLowerCase().split("-")[0],
        q: q ? Number(q.trim().slice(2)) || 0 : 1,
      }
    })
    .filter((item) => item.lang && item.lang !== "*")
    .sort((a, b) => b.q - a.q)

  if (preferred.length === 0) return defaultLocale
  return preferred[0].lang === "es" ? "es" : "en"
}
