import Link from "next/link"
import { cn } from "@/lib/utils"

// Text logo for now (grill round 1): "cobby" in Inter 600 with a sage dot
export function Logo({
  href,
  label,
  tone = "light",
}: {
  href: string
  label?: string
  tone?: "light" | "dark"
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "flex items-baseline gap-0.5 text-heading-sm font-semibold",
        tone === "dark" ? "text-paper" : "text-plum"
      )}
    >
      cobby
      <span aria-hidden="true" className="inline-block size-2 rounded-full bg-sage" />
    </Link>
  )
}
