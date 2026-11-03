import { ArrowUpRight } from "lucide-react"
import QRCode from "qrcode"

import { Sticker } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import type { Dictionary } from "@/dictionaries"
import { appLink } from "@/lib/app-link"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// The QR is drawn as SVG on the server, when the page is built: no JavaScript in the browser
function Qr({ url, label }: { url: string; label: string }) {
  const { modules } = QRCode.create(url, { errorCorrectionLevel: "M" })
  const { size, data } = modules
  let path = ""
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (data[y * size + x]) path += `M${x} ${y}h1v1h-1z`
    }
  }
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`-2 -2 ${size + 4} ${size + 4}`}
      shapeRendering="crispEdges"
      className="size-32 shrink-0 rounded-md bg-paper"
    >
      <path d={path} className="fill-plum" />
    </svg>
  )
}

// Under the early-access form (grill round 6, Q42–Q44): the app is a private
// beta, said plainly. On computers a QR opens it on the phone; on phones, a
// button. Both are tagged so the app's analytics show who came from here.
export function AppAccess({ lang, dict }: { lang: Locale; dict: Dictionary["forms"]["app"] }) {
  return (
    <div className="flex flex-col gap-3 border-t border-sand pt-5">
      <span className="flex">
        <Sticker color="bg-sage">{dict.tag}</Sticker>
      </span>

      <div className="hidden items-center gap-4 md:flex">
        <Qr url={appLink(lang, "qr")} label={dict.qrLabel} />
        <p className="text-body-sm text-stone">{dict.text}</p>
      </div>

      <div className="flex flex-col items-start gap-3 md:hidden">
        <p className="text-body-sm text-stone">{dict.textPhone}</p>
        <a
          href={appLink(lang, "button")}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 border-plum px-4 text-body-sm font-semibold")}
        >
          {dict.open}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
