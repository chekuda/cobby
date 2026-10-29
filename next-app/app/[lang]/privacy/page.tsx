import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { LegalPage } from "@/components/legal-page"
import { getDictionary } from "@/dictionaries"
import { hasLocale } from "@/lib/i18n"

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  return { title: `${getDictionary(lang).legal.privacy.title} · Cobby` }
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = getDictionary(lang)
  return <LegalPage lang={lang} page={dict.legal.privacy} dict={dict.legal} />
}
