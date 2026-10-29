import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"

import "../globals.css"
import { Analytics } from "@vercel/analytics/next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getDictionary } from "@/dictionaries"
import { hasLocale, locales } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// Cobby uses Inter only (docs/03-design.md)
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

// Only /es and /en exist; any other first segment is a 404
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = getDictionary(lang)
  return { title: meta.title, description: meta.description }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = getDictionary(lang)

  return (
    // Light only in phase 1 (docs/03-design.md), so no theme provider
    <html lang={lang} className={cn("antialiased", "font-sans", inter.variable)}>
      <body>
        <SiteHeader lang={lang} dict={dict.header} />
        {children}
        <SiteFooter lang={lang} dict={dict.footer} languageLabel={dict.header.languageLabel} />
        {/* Vercel Web Analytics: no cookies, so no cookie banner (grill round 2) */}
        <Analytics />
      </body>
    </html>
  )
}
