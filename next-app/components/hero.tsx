import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

import { PhoneMockup } from "@/components/phone-mockup"
import { ArrowDot } from "@/components/section"
import { buttonVariants } from "@/components/ui/button"
import type { Dictionary } from "@/dictionaries"

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties

// Hero (docs/01-landing.md, section 2): buyers' story on the warm blob
// background (public/blobs.webp), coffee-shop contact as the main action (plum),
// buyers' early access as the secondary link.
export function Hero({
  dict,
  mockup,
}: {
  dict: Dictionary["hero"]
  mockup: Dictionary["mockup"]
}) {
  return (
    <section className="bg-cream bg-[url('/blobs.webp')] bg-cover bg-center">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-12 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="flex max-w-[600px] flex-col items-start gap-6">
          <span
            className="anim-rise rounded-sm bg-sage px-2.5 py-1 text-caption font-semibold text-plum"
            style={delay(0)}
          >
            {dict.tag}
          </span>

          <h1
            className="anim-rise text-heading font-semibold text-plum md:text-heading-lg lg:text-display"
            style={delay(100)}
          >
            {dict.title}
          </h1>

          <p className="anim-rise max-w-[540px] text-subheading text-stone" style={delay(200)}>
            {dict.subtitle}
          </p>

          <div
            className="anim-rise flex flex-wrap items-center gap-x-6 gap-y-4"
            style={delay(300)}
          >
            <a
              href="#contact"
              className={cn(buttonVariants({ size: "lg" }), "lift px-4 text-body font-semibold")}
            >
              {dict.primary}
            </a>
            <a
              href="#early-access"
              className="group flex items-center gap-2 text-body-sm font-semibold text-plum"
            >
              {dict.secondary}
              <ArrowDot>
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </ArrowDot>
            </a>
          </div>

          <p className="anim-rise text-caption text-stone" style={delay(400)}>
            {dict.note}
          </p>
        </div>

        <div className="anim-rise relative flex justify-center px-6 py-6" style={delay(250)}>
          {/* Sage disc behind the phone */}
          <span
            aria-hidden="true"
            className="anim-pulse absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/70 md:size-[360px]"
          />
          <div className="anim-float relative">
            <PhoneMockup dict={mockup} />
          </div>
        </div>
      </div>
    </section>
  )
}
