import { shop } from "@/config/shop"
import type { Locale } from "@/lib/i18n"

// Link to the app in the page's language, tagged so its analytics show who
// came from the landing (grill round 6, Q42): `qr` for the QR, `button` for
// the phone button.
export function appLink(lang: Locale, medium: "qr" | "button") {
  return `${shop.appUrl}/${lang}?utm_source=landing&utm_medium=${medium}`
}
